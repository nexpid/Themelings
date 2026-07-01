// app/modules/message_request/native/RestrictedMessagePreviewList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot12;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot12;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function HiddenMedia(arg1) {
        var1 = arg1;
        var11 = var1.count;
        var1 = _closure1_slot10;
        var4 = undefined;
        var9 = var1.bind(var4)();
        var _closure2_slot0 = var9;
        var3 = _closure1_slot7;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = global;
        var8 = var6.Array;
        var7 = var8.from;
        var6 = {};
        var6['length'] = var11;
        var5 = function(arg1, arg2) {
            var5 = _closure1_slot7;
            var4 = _closure1_slot4;
            var3 = {};
            var1 = _closure2_slot0;
            var1 = var1.mediaPlaceholderCard;
            var3['style'] = var1;
            var8 = _closure1_slot6;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 7;
            var1 = var13[var1];
            var2 = undefined;
            var1 = var12.bind(var2)(var1);
            var7 = var1.ImageWarningIcon;
            var1 = {'size': 'lg', 'color': 'text-muted'};
            var7 = var8.bind(var2)(var7, var1);
            var1 = new Array(2);
            var1[0] = var7;
            var8 = _closure1_slot6;
            var6 = 8;
            var6 = var13[var6];
            var6 = var12.bind(var2)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var9 = 9;
            var10 = var13[var9];
            var10 = var12.bind(var2)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var2)(var9);
            var9 = var9.t;
            var9 = var9.B2xSxL;
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var2)(var7, var6);
            var1[1] = var6;
            var3['children'] = var1;
            var1 = arg2;
            var1 = var5.bind(var2)(var4, var3, var1);
            return var1;
        };
        var6 = var7.bind(var8)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var8 = _closure1_slot7;
        var7 = _closure1_slot4;
        var6 = {};
        var9 = var9.mediaHiddenRow;
        var6['style'] = var9;
        var12 = _closure1_slot6;
        var16 = _closure1_slot0;
        var17 = _closure1_slot2;
        var9 = 10;
        var9 = var17[var9];
        var9 = var16.bind(var4)(var9);
        var11 = var9.CircleInformationIcon;
        var9 = {'size': 'sm', 'color': 'text-muted'};
        var11 = var12.bind(var4)(var11, var9);
        var9 = new Array(2);
        var9[0] = var11;
        var12 = _closure1_slot6;
        var10 = 8;
        var10 = var17[var10];
        var10 = var16.bind(var4)(var10);
        var11 = var10.Text;
        var10 = {'variant': 'text-sm/normal', 'color': 'text-muted'};
        var13 = 9;
        var14 = var17[var13];
        var14 = var16.bind(var4)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var13 = var17[var13];
        var13 = var16.bind(var4)(var13);
        var13 = var13.t;
        var13 = var13.VGf+K3;
        var13 = var14.bind(var15)(var13);
        var10['children'] = var13;
        var10 = var12.bind(var4)(var11, var10);
        var9[1] = var10;
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var7 = var4.jsxs;
    var _closure1_slot7 = var7;
    var4 = var4.Fragment;
    var _closure1_slot8 = var4;
    var4 = {'renderEmbeds': false, 'renderReactions': false, 'inlineEmbedMedia': false, 'inlineAttachmentMedia': false, 'animateEmoji': false, 'gifAutoPlay': false, 'timestampHourCycle': 0, 'renderCodedLinks': false, 'renderGiftCode': false, 'renderActivityInstanceEmbed': false, 'renderActivityInviteEmbed': false, 'renderComponents': false, 'renderThreadEmbeds': false, 'renderReplies': false, 'renderCommunicationDisabled': false, 'renderAttachments': false, 'renderExecutedCommands': false, 'renderPolls': false, 'renderSharedClientTheme': false, 'renderForumPostActions': false, 'ignoreMentioned': false, 'ignoreEmbedDescriptionCache': false, 'forceHideSimpleEmbedContent': false, 'enableSwipeActions': false, 'useAlternateEmbedColors': false, 'restrictedPreview': true};
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'column';
    var9['flexDirection'] = var10;
    var4['container'] = var9;
    var9 = {};
    var10 = 5;
    var12 = var6[var10];
    var12 = var5.bind(var1)(var12);
    var12 = var12.RESTRICTED_CONTENT_INSET;
    var9['marginLeft'] = var12;
    var4['hiddenMedia'] = var9;
    var9 = {};
    var12 = 'relative';
    var9['position'] = var12;
    var4['messageRow'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'left': 0};
    var12 = var6[var10];
    var12 = var5.bind(var1)(var12);
    var12 = var12.RESTRICTED_CONTENT_INSET;
    var9['width'] = var12;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.RESTRICTED_AVATAR_SIZE;
    var9['height'] = var10;
    var4['avatarHitbox'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var10 = 6;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['gap'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_12;
    var9['marginVertical'] = var12;
    var4['dateDivider'] = var9;
    var9 = {'flex': 1, 'height': 1};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9['backgroundColor'] = var12;
    var4['dividerLine'] = var9;
    var9 = {'alignItems': 'center', 'justifyContent': 'center', 'gap': null, 'height': 160};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['gap'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['marginTop'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var9['borderRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var9['backgroundColor'] = var12;
    var4['mediaPlaceholderCard'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['gap'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['marginTop'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_4;
    var9['marginBottom'] = var10;
    var4['mediaHiddenRow'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_request/native/RestrictedMessagePreviewList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function RestrictedMessagePreviewList(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var10 = var1.channelId;
            var _closure2_slot0 = var10;
            var2 = _closure1_slot10;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var _closure2_slot1 = var6;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 12;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var2 = var2.analyticsLocations;
            var _closure2_slot2 = var2;
            var7 = _closure1_slot0;
            var3 = 13;
            var3 = var8[var3];
            var11 = var7.bind(var4)(var3);
            var9 = var11.useStateFromStoresArray;
            var3 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var3;
            var7 = new Array(1);
            var7[0] = var10;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getMessages;
                var1 = _closure2_slot0;
                var2 = var2.bind(var3)(var1);
                var1 = var2.toArray;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var9.bind(var11)(var8, var3, var7);
            var9 = _closure1_slot3;
            var8 = var9.useCallback;
            var7 = new Array(2);
            var7[0] = var10;
            var7[1] = var2;
            var2 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var4 = arg1;
                var2['userId'] = var4;
                var5 = _closure2_slot0;
                var2['channelId'] = var5;
                var4 = _closure2_slot2;
                var2['sourceAnalyticsLocations'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var8.bind(var9)(var2, var7);
            var _closure2_slot3 = var2;
            var10 = var9.useMemo;
            var8 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 15;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var3 = var1.prototype;
                var3 = Object.create(var3, {constructor: {value: var1}});
                var6 = var3;
                var1 = new var6[var1](var5);
                var1 = var1 instanceof Object ? var1 : var3;
                var3 = var1.setOptions;
                var2 = _closure1_slot9;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7 = new Array(0);
            var10 = var10.bind(var9)(var8, var7);
            var _closure2_slot4 = var10;
            var8 = var9.useCallback;
            var7 = new Array(3);
            var7[0] = var6;
            var7[1] = var10;
            var7[2] = var2;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var12 = arg1;
                    var _closure3_slot0 = var12;
                    var8 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var1 = 16;
                    var1 = var19[var1];
                    var4 = undefined;
                    var1 = var8.bind(var4)(var1);
                    var13 = var1.bind(var4)(var12);
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot8;
                    var1 = {};
                    var6 = _closure1_slot4;
                    var5 = {};
                    var15 = _closure2_slot1;
                    var7 = var15.messageRow;
                    var5['style'] = var7;
                    var9 = _closure1_slot6;
                    var7 = 17;
                    var7 = var19[var7];
                    var8 = var8.bind(var4)(var7);
                    var7 = {};
                    var16 = 'none';
                    var7['pointerEvents'] = var16;
                    var7['message'] = var12;
                    var12 = _closure2_slot4;
                    var7['rowGenerator'] = var12;
                    var8 = var9.bind(var4)(var8, var7);
                    var7 = new Array(2);
                    var7[0] = var8;
                    var12 = _closure1_slot6;
                    var18 = _closure1_slot0;
                    var8 = 18;
                    var8 = var19[var8];
                    var8 = var18.bind(var4)(var8);
                    var9 = var8.PressableOpacity;
                    var8 = {};
                    var15 = var15.avatarHitbox;
                    var8['style'] = var15;
                    var15 = 'button';
                    var8['accessibilityRole'] = var15;
                    var15 = 9;
                    var16 = var19[var15];
                    var16 = var18.bind(var4)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var15 = var19[var15];
                    var15 = var18.bind(var4)(var15);
                    var15 = var15.t;
                    var15 = var15.iXAna6;
                    var15 = var16.bind(var17)(var15);
                    var8['accessibilityLabel'] = var15;
                    var14 = function onPress() {
                        var3 = _closure2_slot3;
                        var1 = _closure3_slot0;
                        var1 = var1.author;
                        var2 = var1.id;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8['onPress'] = var14;
                    var8 = var12.bind(var4)(var9, var8);
                    var7[1] = var8;
                    var5['children'] = var7;
                    var6 = var3.bind(var4)(var6, var5);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = 0;
                    var6 = var13 > var6;
                    if(!var6) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var9 = _closure1_slot6;
                    var8 = _closure1_slot4;
                    var7 = {};
                    var11 = _closure2_slot1;
                    var11 = var11.hiddenMedia;
                    var7['style'] = var11;
                    var12 = _closure1_slot6;
                    var11 = _closure1_slot13;
                    var10 = {};
                    var10['count'] = var13;
                    var10 = var12.bind(var4)(var11, var10);
                    var7['children'] = var10;
                    var6 = var9.bind(var4)(var8, var7);
case 36:
                    var5[1] = var6;
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var2 = var8.bind(var9)(var2, var7);
            var _closure2_slot5 = var2;
            var7 = new Array(0);
            var2 = _closure1_slot11;
            var15 = var2.bind(var4)(var3);
            var3 = var15.bind(var4)();
            var2 = var3.done;
            var14 = 'blocked';
            var13 = 11;
            var12 = 1;
            var11 = null;
            var10 = 'message';
            var9 = var3;
            var8 = undefined;
            var3 = undefined;
            if(var2) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var19 = var9.value;
            var2 = var19.blocked;
            if(var2) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var16 = var7.push;
            var2 = {};
            var2['type'] = var10;
            var2['message'] = var19;
            var2 = var16.bind(var7)(var2);
            _fun0004_ip = 42; continue _fun0004;
case 40:
            var2 = var7.length;
            var2 = var2 - var12;
            var16 = var7[var2];
            var17 = var11 != var16;
            var2 = null;
            if(!var17) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var17 = var16.type;
            var2 = null;
            if(!(var14 === var17)) { _fun0004_ip = 43; continue _fun0004 }
case 45:
            var2 = var16;
case 43:
            if(!(var11 != var2)) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var13];
            var21 = var18.bind(var4)(var17);
            var20 = var21.isSameDay;
            var18 = var2.messages;
            var17 = var2.messages;
            var17 = var17.length;
            var17 = var17 - var12;
            var17 = var18[var17];
            var18 = var17.timestamp;
            var17 = var19.timestamp;
            var17 = var20.bind(var21)(var18, var17);
            if(var17) { _fun0004_ip = 48; continue _fun0004 }
case 46:
            var18 = var7.push;
            var17 = {};
            var17['type'] = var14;
            var20 = new Array(1);
            var20[0] = var19;
            var17['messages'] = var20;
            var17 = var18.bind(var7)(var17);
            var8 = var16;
            var3 = var2;
            _fun0004_ip = 42; continue _fun0004;
case 48:
            var18 = var2.messages;
            var17 = var18.push;
            var17 = var17.bind(var18)(var19);
            var8 = var16;
            var3 = var2;
case 42:
            var16 = var15.bind(var4)();
            var2 = var16.done;
            var9 = var16;
            if(!var2) { _fun0004_ip = 39; continue _fun0004 }
case 38:
            var _closure2_slot6 = var7;
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var6.container;
            var1['style'] = var6;
            var6 = var7.map;
            var5 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.type;
                    var7 = 'message';
                    if(!(var7 !== var2)) { _fun0006_ip = 3; continue _fun0006 }
case 49:
                    var3 = var1.messages;
                    var2 = 0;
                    var2 = var3[var2];
                    _fun0006_ip = 50; continue _fun0006;
case 3:
                    var2 = var1.message;
case 50:
                    var4 = _closure2_slot6;
                    var3 = arg2;
                    var10 = 1;
                    var3 = var3 - var10;
                    var6 = var4[var3];
                    var4 = null;
                    var5 = var4 == var6;
                    var3 = null;
                    if(var5) { _fun0006_ip = 51; continue _fun0006 }
case 30:
                    var5 = var6.type;
                    if(!(var7 !== var5)) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                    var8 = var6.messages;
                    var5 = var6.messages;
                    var5 = var5.length;
                    var5 = var5 - var10;
                    var5 = var8[var5];
                    _fun0006_ip = 54; continue _fun0006;
case 52:
                    var5 = var6.message;
case 54:
                    var3 = var5;
case 51:
                    var10 = var4 == var3;
                    if(var10) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 11;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.isSameDay;
                    var4 = var3.timestamp;
                    var3 = var2.timestamp;
                    var3 = var5.bind(var6)(var4, var3);
                    var10 = !var3;
case 55:
                    var5 = _closure1_slot7;
                    var4 = _closure1_slot4;
                    var3 = {};
                    if(!var10) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                    var13 = _closure1_slot7;
                    var12 = _closure1_slot4;
                    var11 = {};
                    var18 = _closure2_slot1;
                    var6 = var18.dateDivider;
                    var11['style'] = var6;
                    var16 = _closure1_slot6;
                    var15 = _closure1_slot4;
                    var14 = {};
                    var6 = var18.dividerLine;
                    var14['style'] = var6;
                    var6 = undefined;
                    var15 = var16.bind(var6)(var15, var14);
                    var14 = new Array(3);
                    var14[0] = var15;
                    var17 = _closure1_slot6;
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var15 = 8;
                    var15 = var21[var15];
                    var15 = var20.bind(var6)(var15);
                    var16 = var15.Text;
                    var15 = {'variant': 'text-xs/semibold', 'color': 'text-muted'};
                    var19 = 11;
                    var19 = var21[var19];
                    var22 = var20.bind(var6)(var19);
                    var21 = var22.dateFormat;
                    var20 = var2.timestamp;
                    var19 = 'LL';
                    var19 = var21.bind(var22)(var20, var19);
                    var15['children'] = var19;
                    var15 = var17.bind(var6)(var16, var15);
                    var14[1] = var15;
                    var17 = _closure1_slot6;
                    var16 = _closure1_slot4;
                    var15 = {};
                    var18 = var18.dividerLine;
                    var15['style'] = var18;
                    var15 = var17.bind(var6)(var16, var15);
                    var14[2] = var15;
                    var11['children'] = var14;
                    var10 = var13.bind(var6)(var12, var11);
case 57:
                    var6 = new Array(2);
                    var6[0] = var10;
                    var10 = var1.type;
                    if(!(var7 !== var10)) { _fun0006_ip = 59; continue _fun0006 }
case 60:
                    var12 = _closure1_slot6;
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var8 = 19;
                    var8 = var11[var8];
                    var11 = undefined;
                    var10 = var10.bind(var11)(var8);
                    var8 = {};
                    var13 = var1.messages;
                    var8['messages'] = var13;
                    var13 = _closure2_slot5;
                    var8['renderMessage'] = var13;
                    var8 = var12.bind(var11)(var10, var8);
                    _fun0006_ip = 61; continue _fun0006;
case 59:
                    var11 = _closure2_slot5;
                    var10 = var1.message;
                    var9 = undefined;
                    var8 = var11.bind(var9)(var10);
case 61:
                    var6[1] = var8;
                    var3['children'] = var6;
                    var6 = var1.type;
                    if(!(var7 !== var6)) { _fun0006_ip = 62; continue _fun0006 }
case 63:
                    var7 = var2.id;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var2 = 'blocked-';
                    var2 = var6.bind(var2)(var7);
                    _fun0006_ip = 64; continue _fun0006;
case 62:
                    var1 = var1.message;
                    var2 = var1.id;
case 64:
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4, var3, var2);
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
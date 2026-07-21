// app/modules/messages/native/long_press/LongPressMessageActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
            var9 = _closure1_slot26;
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
            var7 = _closure1_slot26;
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
    var _closure1_slot25 = var1;
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
    var _closure1_slot26 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isMessageComponentsV2;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FileUploadErrorTypes;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot13 = var7;
    var7 = var4.AnalyticsPages;
    var _closure1_slot14 = var7;
    var7 = var4.ChannelTypes;
    var _closure1_slot15 = var7;
    var7 = var4.GuildFeatures;
    var _closure1_slot16 = var7;
    var7 = var4.LOCAL_BOT_ID;
    var _closure1_slot17 = var7;
    var7 = var4.MessageAttachmentFlags;
    var _closure1_slot18 = var7;
    var7 = var4.MessageFlags;
    var _closure1_slot19 = var7;
    var7 = var4.MessageStates;
    var _closure1_slot20 = var7;
    var7 = var4.MessageTypes;
    var _closure1_slot21 = var7;
    var7 = var4.MessageTypesSets;
    var _closure1_slot22 = var7;
    var4 = var4.Permissions;
    var _closure1_slot23 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot24 = var4;
    var4 = 76;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/long_press/LongPressMessageActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function LongPressMessageActionSheet(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var3 = undefined;
            var66 = undefined;
            var50 = undefined;
            var87 = undefined;
            var68 = undefined;
            var58 = undefined;
            var79 = undefined;
            var80 = undefined;
            var60 = undefined;
            var56 = undefined;
            var76 = undefined;
            var72 = undefined;
            var73 = undefined;
            var74 = undefined;
            var71 = undefined;
            var59 = undefined;
            var51 = undefined;
            var100 = undefined;
            var69 = undefined;
            var63 = undefined;
            var77 = undefined;
            var55 = undefined;
            var61 = undefined;
            var62 = undefined;
            var64 = undefined;
            var78 = undefined;
            r108 = undefined;
            var6 = undefined;
            var70 = undefined;
            var57 = undefined;
            r113 = undefined;
            var75 = undefined;
            var46 = undefined;
            var99 = undefined;
            var48 = undefined;
            var85 = undefined;
            var47 = undefined;
            var86 = undefined;
            var13 = undefined;
            r106 = undefined;
            var45 = undefined;
            var20 = undefined;
            var44 = undefined;
            var43 = undefined;
            var90 = undefined;
            var42 = undefined;
            var41 = undefined;
            var40 = undefined;
            var95 = undefined;
            var39 = undefined;
            var94 = undefined;
            var38 = undefined;
            var93 = undefined;
            var37 = undefined;
            var92 = undefined;
            var36 = undefined;
            var91 = undefined;
            var35 = undefined;
            r103 = undefined;
            var34 = undefined;
            r105 = undefined;
            var33 = undefined;
            r104 = undefined;
            var32 = undefined;
            r102 = undefined;
            var31 = undefined;
            r101 = undefined;
            var30 = undefined;
            var88 = undefined;
            var29 = undefined;
            r100 = undefined;
            var28 = undefined;
            var89 = undefined;
            var27 = undefined;
            var26 = undefined;
            var25 = undefined;
            r111 = undefined;
            r107 = undefined;
            var24 = undefined;
            var23 = undefined;
            var84 = undefined;
            var22 = undefined;
            var21 = undefined;
            var11 = undefined;
            var98 = undefined;
            var19 = undefined;
            var65 = undefined;
            var18 = undefined;
            var97 = undefined;
            var17 = undefined;
            var82 = undefined;
            var16 = undefined;
            var81 = undefined;
            var15 = undefined;
            var49 = undefined;
            var14 = undefined;
            var12 = undefined;
            var96 = undefined;
            var10 = undefined;
            var67 = undefined;
            var53 = undefined;
            var54 = undefined;
            var2 = function getProps(arg1) {
                var1 = arg1;
                var6 = var1.arrow;
                var10 = var1.IconComponent;
                var5 = var1.label;
                var _closure3_slot0 = var5;
                var2 = var1.onActionExecuted;
                var _closure3_slot1 = var2;
                var3 = var1.variant;
                var2 = var1.disabled;
                var _closure3_slot2 = var2;
                var1 = {};
                var1['arrow'] = var6;
                var9 = _closure1_slot24;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 32;
                var6 = var8[var6];
                var8 = undefined;
                var6 = var7.bind(var8)(var6);
                var6 = var6.ActionSheetRow;
                var7 = var6.Icon;
                var6 = {};
                var6['IconComponent'] = var10;
                var6 = var9.bind(var8)(var7, var6);
                var1['icon'] = var6;
                var1['label'] = var5;
                var4 = function onPress() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 33;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var3 = var2.longPressMessageOptionHandler;
                    var2 = {};
                    var4 = _closure2_slot7;
                    var2['actionSheetSource'] = var4;
                    var4 = _closure2_slot1;
                    var2['analyticsLocations'] = var4;
                    var4 = _closure2_slot4;
                    var2['channel'] = var4;
                    var4 = _closure2_slot5;
                    var2['chatInputRef'] = var4;
                    var6 = _closure3_slot0;
                    var2['label'] = var6;
                    var6 = _closure2_slot3;
                    var2['message'] = var6;
                    var6 = _closure2_slot9;
                    var2['onBack'] = var6;
                    var6 = _closure3_slot1;
                    var2['onActionExecuted'] = var6;
                    var5 = _closure2_slot6;
                    var2['selectedMedia'] = var5;
                    var4 = _closure3_slot2;
                    var2['disabled'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onPress'] = var4;
                var1['variant'] = var3;
                var1['disabled'] = var2;
                return var1;
            };
            var1 = function render(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var10 = arg1;
                    var4 = _closure1_slot24;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var1 = 12;
                    var1 = var11[var1];
                    var3 = undefined;
                    var1 = var9.bind(var3)(var1);
                    var2 = var1.AnalyticsLocationProvider;
                    var1 = {};
                    var5 = _closure2_slot1;
                    var1['value'] = var5;
                    var5 = 34;
                    var5 = var11[var5];
                    var5 = var9.bind(var3)(var5);
                    var6 = var5.ActionSheet;
                    var5 = {};
                    var7 = true;
                    var5['showGradient'] = var7;
                    var7 = 35;
                    var7 = var11[var7];
                    var13 = var9.bind(var3)(var7);
                    var7 = var13.isMetaQuest;
                    var7 = var7.bind(var13)();
                    var5['startExpanded'] = var7;
                    var7 = 36;
                    var7 = var11[var7];
                    var14 = var9.bind(var3)(var7);
                    var13 = var14.shouldShowEmojiRow;
                    var11 = _closure2_slot8;
                    var9 = _closure2_slot3;
                    var7 = _closure2_slot10;
                    var7 = var13.bind(var14)(var11, var9, var7);
                    if(!var7) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var11 = _closure1_slot24;
                    var9 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var8 = 37;
                    var8 = var13[var8];
                    var9 = var9.bind(var3)(var8);
                    var8 = {};
                    var13 = _closure2_slot3;
                    var8['message'] = var13;
                    var12 = _closure2_slot4;
                    var8['channel'] = var12;
                    var7 = var11.bind(var3)(var9, var8);
case 36:
                    var5['header'] = var7;
                    var7 = null;
                    var8 = var7 == var10;
                    var7 = undefined;
                    if(var8) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var9 = var10.map;
                    var8 = function(arg1, arg2) {
                        var7 = arg1;
                        var5 = _closure1_slot24;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 32;
                        var1 = var3[var1];
                        var4 = undefined;
                        var1 = var2.bind(var4)(var1);
                        var1 = var1.ActionSheetRow;
                        var3 = var1.Group;
                        var2 = {};
                        var1 = true;
                        var2['hasIcons'] = var1;
                        var6 = var7.map;
                        var1 = function(arg1, arg2) {
                            var1 = arg1;
                            var10 = var1.icon;
                            var9 = var1.arrow;
                            var8 = var1.label;
                            var7 = var1.onPress;
                            var6 = var1.variant;
                            var1 = var1.disabled;
                            var5 = _closure1_slot24;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 32;
                            var2 = var4[var2];
                            var4 = undefined;
                            var2 = var3.bind(var4)(var2);
                            var3 = var2.ActionSheetRow;
                            var2 = {};
                            var2['icon'] = var10;
                            var2['arrow'] = var9;
                            var2['label'] = var8;
                            var2['onPress'] = var7;
                            var2['variant'] = var6;
                            var2['disabled'] = var1;
                            var1 = arg2;
                            var1 = var5.bind(var4)(var3, var2, var1);
                            return var1;
                        };
                        var1 = var6.bind(var7)(var1);
                        var2['children'] = var1;
                        var1 = arg2;
                        var1 = var5.bind(var4)(var3, var2, var1);
                        return var1;
                    };
                    var7 = var9.bind(var10)(var8);
case 38:
                    var5['children'] = var7;
                    var5 = var4.bind(var3)(var6, var5);
                    var1['children'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var52 = _closure1_slot1;
            var83 = _closure1_slot2;
            var5 = 12;
            var5 = var83[var5];
            var9 = var52.bind(var3)(var5);
            var5 = 13;
            var5 = var83[var5];
            var5 = var52.bind(var3)(var5);
            var5 = var5.MESSAGE_LONG_PRESS_MENU;
            var5 = var9.bind(var3)(var5);
            var5 = var5.analyticsLocations;
            var _closure2_slot1 = var5;
            var5 = var8.analyticsLocation;
            if(!(var3 === var5)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var5 = {};
case 40:
            var _closure2_slot2 = var5;
            var66 = var8.user;
            var9 = var8.message;
            var50 = var9;
            var87 = var9;
            var _closure2_slot3 = var9;
            var9 = var8.channel;
            var68 = var9;
            var _closure2_slot4 = var9;
            var9 = var8.chatInputRef;
            var _closure2_slot5 = var9;
            var9 = var8.selectedMedia;
            var58 = var9;
            var _closure2_slot6 = var9;
            var52 = var8.actionSheetSource;
            var9 = undefined;
            if(!(var3 !== var52)) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var9 = var52;
case 42:
            var79 = var9;
            var80 = var9;
            var _closure2_slot7 = var9;
            var52 = var8.canAddNewReactions;
            var9 = var3 !== var52;
            if(!var9) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var9 = var52;
case 44:
            var _closure2_slot8 = var9;
            var83 = _closure1_slot4;
            r109 = var83.useEffect;
            var52 = new Array(2);
            var52[0] = var5;
            var5 = var68;
            var52[1] = var5;
            var9 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.trackWithMetadata;
                    var2 = _closure1_slot13;
                    var3 = var2.MESSAGE_ACTION_SHEET_OPENED;
                    var2 = {};
                    var6 = _closure2_slot4;
                    var6 = var6.id;
                    var2['channel_id'] = var6;
                    var6 = _closure2_slot4;
                    var6 = var6.guild_id;
                    var2['guild_id'] = var6;
                    var6 = {};
                    var10 = _closure2_slot4;
                    var8 = var10.isPrivate;
                    var8 = var8.bind(var10)();
                    var9 = _closure1_slot14;
                    if(var8) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var8 = var9.GUILD_CHANNEL;
                    _fun0006_ip = 48; continue _fun0006;
case 46:
                    var8 = var9.DM_CHANNEL;
case 48:
                    var6['page'] = var8;
                    var11 = _closure2_slot2;
                    var12 = var6;
                    var7 = copyDataProperties(var12, var11);
                    var2['location'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var9 = r109.bind(var83)(var9, var52);
            var52 = var83.useCallback;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.showLongPressMessageActionSheet;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var8 = var52.bind(var83)(var8, var9);
            var _closure2_slot9 = var8;
            r112 = _closure1_slot0;
            r110 = _closure1_slot2;
            var8 = 16;
            var8 = r110[var8];
            var9 = r112.bind(var3)(var8);
            var8 = var9.useCanReplyToMessage;
            var52 = var50;
            var60 = var8.bind(var9)(var5, var52);
            var8 = 17;
            var8 = r110[var8];
            var9 = r112.bind(var3)(var8);
            var8 = var9.useCanForwardMessage;
            var56 = var8.bind(var9)(var52);
            var52 = _closure1_slot10;
            var9 = var52.getGuild;
            var8 = var5.guild_id;
            r115 = var9.bind(var52)(var8);
            var52 = _closure1_slot1;
            var8 = 18;
            var8 = r110[var8];
            var83 = var52.bind(var3)(var8);
            var9 = var83.useConfig;
            var8 = {};
            r123 = 'LongPressMessageActionSheet';
            var8['location'] = r123;
            var8 = var9.bind(var83)(var8);
            var76 = var8.enabled;
            var83 = 19;
            var8 = r110[var83];
            r114 = r112.bind(var3)(var8);
            r109 = r114.useStateFromStoresArray;
            var8 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var5 = _closure1_slot7;
                var4 = var5.isMessageReminder;
                var1 = _closure2_slot4;
                var3 = var1.id;
                var1 = _closure2_slot3;
                var1 = var1.id;
                var3 = var4.bind(var5)(var3, var1);
                var1 = new Array(2);
                var1[0] = var3;
                var4 = var5.isMessageBookmarked;
                var3 = _closure2_slot4;
                var3 = var3.id;
                var2 = _closure2_slot3;
                var2 = var2.id;
                var2 = var4.bind(var5)(var3, var2);
                var1[1] = var2;
                return var1;
            };
            r109 = r109.bind(r114)(var9, var8);
            var9 = _closure1_slot3;
            var8 = 2;
            var9 = var9.bind(var3)(r109, var8);
            var8 = 0;
            var72 = var9[var8];
            r109 = 1;
            var73 = var9[r109];
            var9 = 20;
            var9 = r110[var9];
            var9 = var52.bind(var3)(var9);
            var9 = var9.bind(var3)();
            var74 = !var9;
            r118 = 21;
            var9 = r110[r118];
            r112 = r112.bind(var3)(var9);
            var9 = r112.useIsNonModInLockedThread;
            var71 = var9.bind(r112)(var5);
            var9 = 22;
            var9 = r110[var9];
            var52 = var52.bind(var3)(var9);
            var9 = null;
            r110 = var9 == var5;
            var5 = undefined;
            if(r110) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            r110 = var68;
            var5 = r110.id;
case 49:
            var59 = var52.bind(var3)(var5);
            r110 = _closure1_slot5;
            var52 = r110.getMessage;
            r117 = var50;
            var5 = r117.id;
            var5 = var52.bind(r110)(var5);
            r116 = var9 != var5;
            r114 = r117.interactionError;
            var5 = _closure1_slot12;
            r112 = var5.EXPLICIT_CONTENT;
            r119 = _closure1_slot1;
            var5 = _closure1_slot2;
            var52 = 23;
            r110 = var5[var52];
            r110 = r119.bind(var3)(r110);
            var51 = r110.bind(var3)(r117);
            r110 = _closure1_slot0;
            var5 = var5[r118];
            r117 = r110.bind(var3)(var5);
            r110 = r117.useIsActiveChannelOrUnarchivableThread;
            var5 = var68;
            var5 = r110.bind(r117)(var5);
            var100 = var5;
            var _closure2_slot10 = var5;
            var5 = var66;
            r110 = var9 == var5;
            var5 = undefined;
            if(r110) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            r117 = var66;
            r110 = r117.isNonUserBot;
            var5 = r110.bind(r117)();
case 51:
            r110 = true;
            var69 = r110 === var5;
            r117 = _closure1_slot9;
            var5 = r117.getId;
            r117 = var5.bind(r117)();
            var63 = r117;
            r120 = _closure1_slot0;
            r124 = _closure1_slot2;
            var5 = 24;
            var5 = r124[var5];
            var5 = r120.bind(var3)(var5);
            r119 = var5.DeveloperMode;
            var5 = r119.getSetting;
            var77 = var5.bind(r119)();
            r121 = _closure1_slot11;
            r125 = r121.can;
            var5 = _closure1_slot23;
            r119 = var5.MANAGE_MESSAGES;
            r122 = var68;
            var55 = r125.bind(r121)(r119, r122);
            r119 = r121.can;
            var5 = var5.SEND_MESSAGES;
            r119 = r119.bind(r121)(var5, r122);
            var5 = 25;
            var5 = r124[var5];
            r120 = r120.bind(var3)(var5);
            var5 = r120.useCanToggleGuildOfficialMessages;
            r121 = var50;
            var61 = var5.bind(r120)(r121, r122, r123);
            var5 = r121.author;
            var5 = var5.id;
            r117 = var5 === r117;
            r120 = r121.hasFlag;
            var5 = _closure1_slot19;
            var5 = var5.CROSSPOSTED;
            var5 = r120.bind(r121)(var5);
            r123 = _closure1_slot1;
            r120 = 26;
            r120 = r124[r120];
            r120 = r123.bind(var3)(r120);
            var62 = r120.bind(var3)(r121, r122);
            var5 = !var5;
            if(!var5) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            r120 = var68;
            r121 = r120.type;
            r120 = _closure1_slot15;
            r120 = r120.GUILD_ANNOUNCEMENT;
            var5 = r121 === r120;
case 53:
            if(!var5) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            r121 = var9 == r115;
            r120 = undefined;
            if(r121) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            r123 = r115.features;
            r122 = r123.has;
            r121 = _closure1_slot16;
            r121 = r121.NEWS;
            r120 = r122.bind(r123)(r121);
case 57:
            var5 = r120;
case 55:
            if(!var5) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var5 = r119;
case 59:
            if(!var5) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            if(r117) { _fun0004_ip = 63; continue _fun0004 }
case 64:
            r117 = var55;
case 63:
            var5 = r117;
case 61:
            if(!var5) { _fun0004_ip = 65; continue _fun0004 }
case 66:
            r117 = var50;
            r119 = r117.type;
            r117 = _closure1_slot21;
            r117 = r117.DEFAULT;
            var5 = r119 === r117;
case 65:
            if(!var5) { _fun0004_ip = 67; continue _fun0004 }
case 68:
            r119 = var50;
            r117 = r119.isPoll;
            r117 = r117.bind(r119)();
            var5 = !r117;
case 67:
            var64 = var5;
            r117 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[r118];
            r119 = r117.bind(var3)(var5);
            r118 = r119.computeCanStartPublicThread;
            var5 = var68;
            r117 = var50;
            var78 = r118.bind(r119)(var5, r117);
            var5 = r117.getContentMessage;
            r117 = var5.bind(r117)();
            var5 = r117.embeds;
            r108 = var5.length;
            var5 = _closure1_slot8;
            var5 = var5.bind(var3)(r117);
            if(var5) { _fun0004_ip = 69; continue _fun0004 }
case 70:
            var5 = r117.content;
            _fun0004_ip = 71; continue _fun0004;
case 69:
            r119 = _closure1_slot0;
            r120 = _closure1_slot2;
            r118 = 27;
            r118 = r120[r118];
            r119 = r119.bind(var3)(r118);
            r118 = r119.getAllTextDisplayContent;
            r117 = r117.components;
            var5 = r118.bind(r119)(r117);
case 71:
            var6 = var5;
            var5 = var55;
            if(var5) { _fun0004_ip = 72; continue _fun0004 }
case 73:
            r119 = var50;
            r118 = r119.canDeleteOwnMessage;
            r117 = var63;
            var5 = r118.bind(r119)(r117);
case 72:
            if(!var5) { _fun0004_ip = 74; continue _fun0004 }
case 75:
            r117 = r108;
            var5 = r117 > var8;
case 74:
            if(!var5) { _fun0004_ip = 76; continue _fun0004 }
case 77:
            r117 = var50;
            r117 = r117.author;
            r118 = r117.id;
            r117 = _closure1_slot17;
            var5 = r118 !== r117;
case 76:
            if(!var5) { _fun0004_ip = 78; continue _fun0004 }
case 79:
            r118 = _closure1_slot0;
            r119 = _closure1_slot2;
            r117 = 28;
            r117 = r119[r117];
            r120 = r118.bind(var3)(r117);
            r119 = r120.hasFlag;
            r117 = var50;
            r118 = r117.flags;
            r117 = _closure1_slot19;
            r117 = r117.EPHEMERAL;
            r117 = r119.bind(r120)(r118, r117);
            var5 = !r117;
case 78:
            if(!var5) { _fun0004_ip = 80; continue _fun0004 }
case 81:
            r118 = _closure1_slot1;
            r119 = _closure1_slot2;
            r117 = 29;
            r117 = r119[r117];
            r118 = r118.bind(var3)(r117);
            r117 = var50;
            r117 = r118.bind(var3)(r117);
            var5 = r117 >= r109;
case 80:
            var70 = var5;
            var5 = !r116;
            if(r116) { _fun0004_ip = 82; continue _fun0004 }
case 83:
            r112 = r114 === r112;
            var5 = !r112;
case 82:
            if(!var5) { _fun0004_ip = 84; continue _fun0004 }
case 85:
            r112 = var50;
            r112 = r112.interactionData;
            r112 = var9 == r112;
            if(r112) { _fun0004_ip = 86; continue _fun0004 }
case 87:
            r116 = _closure1_slot0;
            r117 = _closure1_slot2;
            r114 = 30;
            r114 = r117[r114];
            r117 = r116.bind(var3)(r114);
            r116 = r117.canRetryInteractionData;
            r114 = var50;
            r114 = r114.interactionData;
            r112 = r116.bind(r117)(r114);
case 86:
            var5 = r112;
case 84:
            r112 = var50;
            r117 = r112.attachments;
            r116 = r117.filter;
            r114 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = arg1;
                    var2 = var3.flags;
                    var1 = null;
                    var1 = var1 == var2;
                    if(var1) { _fun0007_ip = 88; continue _fun0007 }
case 89:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 28;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.hasFlag;
                    var3 = var3.flags;
                    var2 = _closure1_slot18;
                    var2 = var2.IS_THUMBNAIL;
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = !var2;
case 88:
                    return var1;
                }
            };
            r114 = r116.bind(r117)(r114);
            r112 = r112.author;
            r116 = r112.id;
            r112 = var63;
            r112 = r116 === r112;
            if(!r112) { _fun0004_ip = 90; continue _fun0004 }
case 91:
            r114 = r114.length;
            r114 = r114 > r109;
            if(r114) { _fun0004_ip = 92; continue _fun0004 }
case 93:
            r116 = var50;
            r117 = r116.content;
            r116 = '';
            r114 = r116 !== r117;
case 92:
            r112 = r114;
case 90:
            var57 = r112;
            r112 = _closure1_slot0;
            r114 = _closure1_slot2;
            var83 = r114[var83];
            r118 = r112.bind(var3)(var83);
            r117 = r118.useStateFromStores;
            var83 = _closure1_slot6;
            r116 = new Array(1);
            r116[0] = var83;
            var83 = function() {
                var4 = _closure1_slot6;
                var3 = var4.hasReportedMessage;
                var2 = _closure2_slot3;
                var2 = var2.channel_id;
                var1 = _closure2_slot3;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            r113 = r117.bind(r118)(r116, var83);
            var83 = 31;
            var83 = r114[var83];
            r114 = r112.bind(var3)(var83);
            r112 = r114.useIsReportToModEnabled;
            r116 = var9 == r115;
            var83 = undefined;
            if(r116) { _fun0004_ip = 94; continue _fun0004 }
case 95:
            var83 = r115.id;
case 94:
            var75 = r112.bind(r114)(var83);
            var83 = var50;
            r112 = var83.state;
            var83 = _closure1_slot20;
            var83 = var83.SEND_FAILED;
            if(!(r112 !== var83)) { _fun0004_ip = 96; continue _fun0004 }
case 97:
            var83 = var50;
            r112 = var83.state;
            var83 = _closure1_slot20;
            var83 = var83.SENDING;
            if(!(r112 !== var83)) { _fun0004_ip = 98; continue _fun0004 }
case 99:
            var83 = var50;
            r112 = var83.type;
            var83 = _closure1_slot21;
            var83 = var83.THREAD_STARTER_MESSAGE;
            if(!(r112 !== var83)) { _fun0004_ip = 100; continue _fun0004 }
case 101:
            r114 = var2;
            var83 = {};
            r117 = _closure1_slot0;
            r118 = _closure1_slot2;
            r112 = 38;
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r119 = r115.intl;
            r116 = r119.string;
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r115 = r115.t;
            r115 = r115.fsBWmS;
            r115 = r116.bind(r119)(r115);
            var83['label'] = r115;
            r115 = 43;
            r115 = r118[r115];
            r115 = r117.bind(var3)(r115);
            r115 = r115.PencilIcon;
            var83['IconComponent'] = r115;
            var83 = r114.bind(var3)(var83);
            var46 = var83;
            var99 = var83;
            var83 = {};
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r119 = r115.intl;
            r116 = r119.string;
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r115 = r115.t;
            r115 = r115["5IEsGx"];
            r115 = r116.bind(r119)(r115);
            var83['label'] = r115;
            r115 = 44;
            r115 = r118[r115];
            r115 = r117.bind(var3)(r115);
            r115 = r115.ArrowAngleLeftUpIcon;
            var83['IconComponent'] = r115;
            var83 = r114.bind(var3)(var83);
            var48 = var83;
            var85 = var83;
            var83 = {};
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r119 = r115.intl;
            r116 = r119.string;
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r115 = r115.t;
            r115 = r115.I3ltXO;
            r115 = r116.bind(r119)(r115);
            var83['label'] = r115;
            r116 = _closure1_slot1;
            r115 = 45;
            r115 = r118[r115];
            r115 = r116.bind(var3)(r115);
            var83['IconComponent'] = r115;
            var83 = r114.bind(var3)(var83);
            var47 = var83;
            var86 = var83;
            var83 = {};
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r119 = r115.intl;
            r116 = r119.string;
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r115 = r115.t;
            r115 = r115.rBIGBL;
            r115 = r116.bind(r119)(r115);
            var83['label'] = r115;
            r115 = 46;
            r116 = r118[r115];
            r116 = r117.bind(var3)(r116);
            r116 = r116.ThreadIcon;
            var83['IconComponent'] = r116;
            var83 = r114.bind(var3)(var83);
            var13 = var83;
            r106 = var83;
            var83 = {};
            r116 = r118[r112];
            r116 = r117.bind(var3)(r116);
            r120 = r116.intl;
            r119 = r120.string;
            r116 = r118[r112];
            r116 = r117.bind(var3)(r116);
            r116 = r116.t;
            r116 = r116["39d0Wj"];
            r116 = r119.bind(r120)(r116);
            var83['label'] = r116;
            r115 = r118[r115];
            r115 = r117.bind(var3)(r115);
            r115 = r115.ThreadIcon;
            var83['IconComponent'] = r115;
            var45 = r114.bind(var3)(var83);
            var83 = {};
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r119 = r115.intl;
            r116 = r119.string;
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r115 = r115.t;
            r115 = r115["+TSRGD"];
            r115 = r116.bind(r119)(r115);
            var83['label'] = r115;
            r115 = 47;
            r115 = r118[r115];
            r115 = r117.bind(var3)(r115);
            r115 = r115.ChatArrowRightIcon;
            var83['IconComponent'] = r115;
            var20 = r114.bind(var3)(var83);
            var83 = {};
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r119 = r115.intl;
            r116 = r119.string;
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r115 = r115.t;
            r115 = r115.JrGD7E;
            r115 = r116.bind(r119)(r115);
            var83['label'] = r115;
            r115 = 40;
            r115 = r118[r115];
            r115 = r117.bind(var3)(r115);
            r115 = r115.CopyIcon;
            var83['IconComponent'] = r115;
            var44 = r114.bind(var3)(var83);
            var83 = {};
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r119 = r115.intl;
            r116 = r119.string;
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r115 = r115.t;
            r115 = r115.RpE9k7;
            r115 = r116.bind(r119)(r115);
            var83['label'] = r115;
            r115 = 48;
            r115 = r118[r115];
            r115 = r117.bind(var3)(r115);
            r115 = r115.ChatMarkUnreadIcon;
            var83['IconComponent'] = r115;
            var83 = r114.bind(var3)(var83);
            var43 = var83;
            var90 = var83;
            var83 = {};
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r119 = r115.intl;
            r116 = r119.string;
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r115 = r115.t;
            r115 = r115.grdwwt;
            r115 = r116.bind(r119)(r115);
            var83['label'] = r115;
            r115 = 49;
            r115 = r118[r115];
            r115 = r117.bind(var3)(r115);
            r115 = r115.ClockXIcon;
            var83['IconComponent'] = r115;
            var42 = r114.bind(var3)(var83);
            var83 = {};
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r119 = r115.intl;
            r116 = r119.string;
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r115 = r115.t;
            r115 = r115.gHp0C4;
            r115 = r116.bind(r119)(r115);
            var83['label'] = r115;
            r115 = 50;
            r115 = r118[r115];
            r115 = r117.bind(var3)(r115);
            r115 = r115.ReactionIcon;
            var83['IconComponent'] = r115;
            var41 = r114.bind(var3)(var83);
            var83 = {};
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r119 = r115.intl;
            r116 = r119.string;
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r115 = r115.t;
            r115 = r115.MFGE51;
            r115 = r116.bind(r119)(r115);
            var83['label'] = r115;
            r115 = 51;
            r115 = r118[r115];
            r115 = r117.bind(var3)(r115);
            r115 = r115.AnnouncementsIcon;
            var83['IconComponent'] = r115;
            var83 = r114.bind(var3)(var83);
            var40 = var83;
            var95 = var83;
            var83 = {};
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r119 = r115.intl;
            r116 = r119.string;
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r115 = r115.t;
            r115 = r115.CvQ18w;
            r115 = r116.bind(r119)(r115);
            var83['label'] = r115;
            r115 = 52;
            r116 = r118[r115];
            r116 = r117.bind(var3)(r116);
            r116 = r116.PinIcon;
            var83['IconComponent'] = r116;
            var83 = r114.bind(var3)(var83);
            var39 = var83;
            var94 = var83;
            var83 = {};
            r116 = r118[r112];
            r116 = r117.bind(var3)(r116);
            r120 = r116.intl;
            r119 = r120.string;
            r116 = r118[r112];
            r116 = r117.bind(var3)(r116);
            r116 = r116.t;
            r116 = r116.Bse+F/;
            r116 = r119.bind(r120)(r116);
            var83['label'] = r116;
            r115 = r118[r115];
            r115 = r117.bind(var3)(r115);
            r115 = r115.PinIcon;
            var83['IconComponent'] = r115;
            var83 = r114.bind(var3)(var83);
            var38 = var83;
            var93 = var83;
            var83 = {};
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r119 = r115.intl;
            r116 = r119.string;
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r115 = r115.t;
            r115 = r115.lE/PG3;
            r115 = r116.bind(r119)(r115);
            var83['label'] = r115;
            r115 = 53;
            r115 = r118[r115];
            r115 = r117.bind(var3)(r115);
            r115 = r115.StampIcon;
            var83['IconComponent'] = r115;
            var83 = r114.bind(var3)(var83);
            var37 = var83;
            var92 = var83;
            var83 = {};
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r119 = r115.intl;
            r116 = r119.string;
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r115 = r115.t;
            r115 = r115["2km5Gf"];
            r115 = r116.bind(r119)(r115);
            var83['label'] = r115;
            r115 = 54;
            r115 = r118[r115];
            r115 = r117.bind(var3)(r115);
            r115 = r115.StampXIcon;
            var83['IconComponent'] = r115;
            var83 = r114.bind(var3)(var83);
            var36 = var83;
            var91 = var83;
            var83 = {};
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r119 = r115.intl;
            r116 = r119.string;
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r115 = r115.t;
            r115 = r115.tpxJto;
            r115 = r116.bind(r119)(r115);
            var83['label'] = r115;
            r115 = 55;
            r115 = r118[r115];
            r115 = r117.bind(var3)(r115);
            r115 = r115.NitroWheelIcon;
            var83['IconComponent'] = r115;
            var83 = r114.bind(var3)(var83);
            var35 = var83;
            r103 = var83;
            var83 = {};
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r119 = r115.intl;
            r116 = r119.string;
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r115 = r115.t;
            r115 = r115.tpxJto;
            r115 = r116.bind(r119)(r115);
            var83['label'] = r115;
            r115 = 56;
            r115 = r118[r115];
            r115 = r117.bind(var3)(r115);
            r115 = r115.BookmarkOutlineIcon;
            var83['IconComponent'] = r115;
            var83 = r114.bind(var3)(var83);
            var34 = var83;
            r105 = var83;
            var83 = {};
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r119 = r115.intl;
            r116 = r119.string;
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r115 = r115.t;
            r115 = r115.SvXS1Z;
            r115 = r116.bind(r119)(r115);
            var83['label'] = r115;
            r115 = 57;
            r115 = r118[r115];
            r115 = r117.bind(var3)(r115);
            r115 = r115.BookmarkIcon;
            var83['IconComponent'] = r115;
            var83 = r114.bind(var3)(var83);
            var33 = var83;
            r104 = var83;
            var83 = {};
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r119 = r115.intl;
            r116 = r119.string;
            r115 = r118[r112];
            r115 = r117.bind(var3)(r115);
            r115 = r115.t;
            r115 = r115.mJ3P0N;
            r115 = r116.bind(r119)(r115);
            var83['label'] = r115;
            r115 = 58;
            r116 = r118[r115];
            r116 = r117.bind(var3)(r116);
            r116 = r116.ClockIcon;
            var83['IconComponent'] = r116;
            var83['arrow'] = r110;
            var83 = r114.bind(var3)(var83);
            var32 = var83;
            r102 = var83;
            var83 = {};
            r116 = r118[r112];
            r116 = r117.bind(var3)(r116);
            r120 = r116.intl;
            r119 = r120.string;
            r116 = r118[r112];
            r116 = r117.bind(var3)(r116);
            r116 = r116.t;
            r116 = r116.vrbqs1;
            r116 = r119.bind(r120)(r116);
            var83['label'] = r116;
            r116 = r118[r115];
            r116 = r117.bind(var3)(r116);
            r116 = r116.ClockIcon;
            var83['IconComponent'] = r116;
            var83['arrow'] = r110;
            var83 = r114.bind(var3)(var83);
            var31 = var83;
            r101 = var83;
            var83 = {};
            r116 = r118[r112];
            r116 = r117.bind(var3)(r116);
            r120 = r116.intl;
            r119 = r120.string;
            r116 = r118[r112];
            r116 = r117.bind(var3)(r116);
            r116 = r116.t;
            r116 = r116.PHjkRE;
            r116 = r119.bind(r120)(r116);
            var83['label'] = r116;
            r116 = 59;
            r116 = r118[r116];
            r116 = r117.bind(var3)(r116);
            r116 = r116.RobotIcon;
            var83['IconComponent'] = r116;
            var83['arrow'] = r110;
            var83 = r114.bind(var3)(var83);
            var30 = var83;
            var88 = var83;
            var83 = {};
            r116 = r118[r112];
            r116 = r117.bind(var3)(r116);
            r120 = r116.intl;
            r119 = r120.string;
            r116 = r118[r112];
            r116 = r117.bind(var3)(r116);
            r116 = r116.t;
            r116 = r116.g33r/P;
            r116 = r119.bind(r120)(r116);
            var83['label'] = r116;
            r116 = 60;
            r116 = r118[r116];
            r116 = r117.bind(var3)(r116);
            r116 = r116.ChatIcon;
            var83['IconComponent'] = r116;
            var83 = r114.bind(var3)(var83);
            var29 = var83;
            r100 = var83;
            var83 = {};
            r116 = r118[r112];
            r116 = r117.bind(var3)(r116);
            r120 = r116.intl;
            r119 = r120.string;
            r116 = r118[r112];
            r116 = r117.bind(var3)(r116);
            r116 = r116.t;
            r116 = r116.P8tvKG;
            r116 = r119.bind(r120)(r116);
            var83['label'] = r116;
            r116 = 61;
            r116 = r118[r116];
            r116 = r117.bind(var3)(r116);
            r116 = r116.AtIcon;
            var83['IconComponent'] = r116;
            var83 = r114.bind(var3)(var83);
            var28 = var83;
            var89 = var83;
            var83 = {};
            r116 = r118[r112];
            r116 = r117.bind(var3)(r116);
            r120 = r116.intl;
            r119 = r120.string;
            r116 = r118[r112];
            r116 = r117.bind(var3)(r116);
            r116 = r116.t;
            r116 = r116.S/xNKV;
            r116 = r119.bind(r120)(r116);
            var83['label'] = r116;
            r116 = 62;
            r119 = r118[r116];
            r119 = r117.bind(var3)(r119);
            r119 = r119.DownloadIcon;
            var83['IconComponent'] = r119;
            var27 = r114.bind(var3)(var83);
            var83 = {};
            r119 = r118[r112];
            r119 = r117.bind(var3)(r119);
            r121 = r119.intl;
            r120 = r121.string;
            r119 = r118[r112];
            r119 = r117.bind(var3)(r119);
            r119 = r119.t;
            r119 = r119.JVuuz3;
            r119 = r120.bind(r121)(r119);
            var83['label'] = r119;
            r119 = r118[r116];
            r119 = r117.bind(var3)(r119);
            r119 = r119.DownloadIcon;
            var83['IconComponent'] = r119;
            var26 = r114.bind(var3)(var83);
            var83 = {};
            r119 = r118[r112];
            r119 = r117.bind(var3)(r119);
            r121 = r119.intl;
            r120 = r121.string;
            r119 = r118[r112];
            r119 = r117.bind(var3)(r119);
            r119 = r119.t;
            r119 = r119.vbAEaA;
            r119 = r120.bind(r121)(r119);
            var83['label'] = r119;
            r116 = r118[r116];
            r116 = r117.bind(var3)(r116);
            r116 = r116.DownloadIcon;
            var83['IconComponent'] = r116;
            var25 = r114.bind(var3)(var83);
            r111 = false;
case 102: // try_start_0
            var83 = var58;
            r114 = var9 == var83;
            var83 = undefined;
            if(r114) { _fun0004_ip = 103; continue _fun0004 }
case 104:
            r114 = var58;
            var83 = r114.mediaUrl;
case 103:
            r114 = var9 != var83;
            var83 = null;
            if(!r114) { _fun0004_ip = 105; continue _fun0004 }
case 106:
            r114 = global;
            r117 = r114.URL;
            r114 = var58;
            r139 = r114.mediaUrl;
            r116 = r117.prototype;
            r116 = Object.create(r116, {constructor: {value: r117}});
            r140 = r116;
            r114 = new r140[r117](r139, r138);
            var83 = r114 instanceof Object ? r114 : r116;
case 105:
            r107 = var83;
            r117 = var58;
            r117 = var9 == r117;
            r118 = undefined;
            if(r117) { _fun0004_ip = 107; continue _fun0004 }
case 108:
            r117 = var58;
            r118 = r117.mediaType;
case 107:
            r117 = 'image';
            r117 = r117 === r118;
            r116 = r117;
            if(!r117) { _fun0004_ip = 109; continue _fun0004 }
case 110:
            r117 = r107;
            r116 = var9 != r117;
case 109:
            r114 = r116;
            if(!r116) { _fun0004_ip = 111; continue _fun0004 }
case 112:
            r116 = r107;
            r117 = r116.hostname;
            r116 = 'cdn.discordapp.com';
            r114 = r116 === r117;
case 111:
            var83 = r114;
            if(!r114) { _fun0004_ip = 113; continue _fun0004 }
case 114:
            r116 = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i;
            r114 = r116.test;
            r107 = r107.pathname;
            var83 = r114.bind(r116)(r107);
case 113:
            r111 = var83;
case 115: // try_end0
            _fun0004_ip = 116; continue _fun0004;
case 117: // catch_target0
            CatchBlockStart(arg_register=82);
case 116:
            r107 = var2;
            var83 = {};
            r116 = _closure1_slot0;
            r114 = _closure1_slot2;
            r114 = r114[r112];
            r114 = r116.bind(var3)(r114);
            r116 = r114.intl;
            r114 = r116.string;
            r118 = _closure1_slot0;
            r117 = _closure1_slot2;
            r117 = r117[r112];
            r117 = r118.bind(var3)(r117);
            r117 = r117.t;
            if(r111) { _fun0004_ip = 118; continue _fun0004 }
case 119:
            r111 = r117["92CPQ+"];
            _fun0004_ip = 120; continue _fun0004;
case 118:
            r111 = r117["8xHmxo"];
case 120:
            r111 = r114.bind(r116)(r111);
            var83['label'] = r111;
            r111 = _closure1_slot0;
            r114 = _closure1_slot2;
            r116 = 42;
            r117 = r114[r116];
            r117 = r111.bind(var3)(r117);
            r117 = r117.LinkIcon;
            var83['IconComponent'] = r117;
            var24 = r107.bind(var3)(var83);
            r107 = var2;
            var83 = {};
            r117 = r114[r112];
            r117 = r111.bind(var3)(r117);
            r119 = r117.intl;
            r118 = r119.string;
            r117 = r114[r112];
            r117 = r111.bind(var3)(r117);
            r117 = r117.t;
            r117 = r117.Xrt5Po;
            r117 = r118.bind(r119)(r117);
            var83['label'] = r117;
            r116 = r114[r116];
            r116 = r111.bind(var3)(r116);
            r116 = r116.LinkIcon;
            var83['IconComponent'] = r116;
            var83 = r107.bind(var3)(var83);
            var23 = var83;
            var84 = var83;
            var83 = {};
            r116 = r114[r112];
            r116 = r111.bind(var3)(r116);
            r118 = r116.intl;
            r117 = r118.string;
            r116 = r114[r112];
            r116 = r111.bind(var3)(r116);
            r116 = r116.t;
            r116 = r116.Rjezbz;
            r116 = r117.bind(r118)(r116);
            var83['label'] = r116;
            r115 = r114[r115];
            r115 = r111.bind(var3)(r115);
            r115 = r115.ClockIcon;
            var83['IconComponent'] = r115;
            var83['arrow'] = r110;
            var22 = r107.bind(var3)(var83);
            var83 = {};
            r110 = r114[r112];
            r110 = r111.bind(var3)(r110);
            r116 = r110.intl;
            r115 = r116.string;
            r110 = r114[r112];
            r110 = r111.bind(var3)(r110);
            r110 = r110.t;
            r110 = r110.zBoHlf;
            r110 = r115.bind(r116)(r110);
            var83['label'] = r110;
            r110 = 63;
            r110 = r114[r110];
            r110 = r111.bind(var3)(r110);
            r110 = r110.IdIcon;
            var83['IconComponent'] = r110;
            var21 = r107.bind(var3)(var83);
            var83 = {};
            if(!(!(r108 > r109))) { _fun0004_ip = 121; continue _fun0004 }
case 122:
            r111 = _closure1_slot0;
            r108 = _closure1_slot2;
            r109 = r108[r112];
            r109 = r111.bind(var3)(r109);
            r110 = r109.intl;
            r109 = r110.string;
            r108 = r108[r112];
            r108 = r111.bind(var3)(r108);
            r108 = r108.t;
            r108 = r108["4sxKOb"];
            r108 = r109.bind(r110)(r108);
            _fun0004_ip = 123; continue _fun0004;
case 121:
            r114 = _closure1_slot0;
            r109 = _closure1_slot2;
            r110 = r109[r112];
            r110 = r114.bind(var3)(r110);
            r111 = r110.intl;
            r110 = r111.string;
            r109 = r109[r112];
            r109 = r114.bind(var3)(r109);
            r109 = r109.t;
            r109 = r109.wUIMqa;
            r108 = r110.bind(r111)(r109);
case 123:
            var83['label'] = r108;
            r110 = _closure1_slot0;
            r111 = _closure1_slot2;
            r108 = 64;
            r108 = r111[r108];
            r108 = r110.bind(var3)(r108);
            r108 = r108.XSmallBoldIcon;
            var83['IconComponent'] = r108;
            r108 = 'danger';
            var83['variant'] = r108;
            var83 = r107.bind(var3)(var83);
            var11 = var83;
            var98 = var83;
            r107 = var2;
            var83 = {};
            r109 = r111[r112];
            r109 = r110.bind(var3)(r109);
            r115 = r109.intl;
            r114 = r115.string;
            r109 = r111[r112];
            r109 = r110.bind(var3)(r109);
            r109 = r109.t;
            r109 = r109.ZbtGBm;
            r109 = r114.bind(r115)(r109);
            var83['label'] = r109;
            r109 = 41;
            r114 = r111[r109];
            r114 = r110.bind(var3)(r114);
            r114 = r114.TrashIcon;
            var83['IconComponent'] = r114;
            var83['variant'] = r108;
            var83 = r107.bind(var3)(var83);
            var19 = var83;
            var65 = var83;
            var83 = {};
            r114 = r111[r112];
            r114 = r110.bind(var3)(r114);
            r116 = r114.intl;
            r115 = r116.string;
            r114 = r111[r112];
            r114 = r110.bind(var3)(r114);
            r114 = r114.t;
            r114 = r114.kFwAsa;
            r114 = r115.bind(r116)(r114);
            var83['label'] = r114;
            r114 = r111[r109];
            r114 = r110.bind(var3)(r114);
            r114 = r114.TrashIcon;
            var83['IconComponent'] = r114;
            var83['variant'] = r108;
            var83 = r107.bind(var3)(var83);
            var18 = var83;
            var97 = var83;
            var83 = {};
            r114 = r111[r112];
            r114 = r110.bind(var3)(r114);
            r116 = r114.intl;
            r115 = r116.string;
            r114 = r111[r112];
            r114 = r110.bind(var3)(r114);
            r114 = r114.t;
            r114 = r114["+78Pfm"];
            r114 = r115.bind(r116)(r114);
            var83['label'] = r114;
            r114 = 65;
            r115 = r111[r114];
            r115 = r110.bind(var3)(r115);
            r115 = r115.FlagIcon;
            var83['IconComponent'] = r115;
            var83['variant'] = r108;
            var83 = r107.bind(var3)(var83);
            var17 = var83;
            var82 = var83;
            var83 = {};
            r115 = r111[r112];
            r115 = r110.bind(var3)(r115);
            r117 = r115.intl;
            r116 = r117.string;
            r115 = r111[r112];
            r115 = r110.bind(var3)(r115);
            r115 = r115.t;
            r115 = r115.n5EBAJ;
            r115 = r116.bind(r117)(r115);
            var83['label'] = r115;
            var83['variant'] = r108;
            r115 = 66;
            r115 = r111[r115];
            r115 = r110.bind(var3)(r115);
            r115 = r115.ClydeIcon;
            var83['IconComponent'] = r115;
            var83 = r107.bind(var3)(var83);
            var16 = var83;
            var81 = var83;
            var83 = {};
            r115 = r111[r112];
            r115 = r110.bind(var3)(r115);
            r117 = r115.intl;
            r116 = r117.string;
            r118 = _closure1_slot1;
            r115 = 67;
            r115 = r111[r115];
            r115 = r118.bind(var3)(r115);
            r115 = r115["1D+vqy"];
            r115 = r116.bind(r117)(r115);
            var83['label'] = r115;
            r114 = r111[r114];
            r114 = r110.bind(var3)(r114);
            r114 = r114.FlagIcon;
            var83['IconComponent'] = r114;
            var83['disabled'] = r113;
            var83 = r107.bind(var3)(var83);
            var15 = var83;
            var49 = var83;
            var83 = {};
            r113 = r111[r112];
            r113 = r110.bind(var3)(r113);
            r115 = r113.intl;
            r114 = r115.string;
            r113 = r111[r112];
            r113 = r110.bind(var3)(r113);
            r113 = r113.t;
            r113 = r113.ZH7P2h;
            r113 = r114.bind(r115)(r113);
            var83['label'] = r113;
            r113 = 68;
            r113 = r111[r113];
            r113 = r110.bind(var3)(r113);
            r113 = r113.ImageWarningIcon;
            var83['IconComponent'] = r113;
            var14 = r107.bind(var3)(var83);
            var83 = {};
            r113 = r111[r112];
            r113 = r110.bind(var3)(r113);
            r114 = r113.intl;
            r113 = r114.string;
            r112 = r111[r112];
            r112 = r110.bind(var3)(r112);
            r112 = r112.t;
            r112 = r112.xwMqD7;
            r112 = r113.bind(r114)(r112);
            var83['label'] = r112;
            r109 = r111[r109];
            r109 = r110.bind(var3)(r109);
            r109 = r109.TrashIcon;
            var83['IconComponent'] = r109;
            var83['variant'] = r108;
            var83 = r107.bind(var3)(var83);
            var12 = var83;
            var96 = var83;
            var83 = new Array(0);
            r107 = var80;
            var80 = 'Preview';
            r107 = var80 === r107;
            if(r107) { _fun0004_ip = 124; continue _fun0004 }
case 125:
            r109 = _closure1_slot0;
            r110 = _closure1_slot2;
            r108 = 28;
            r108 = r110[r108];
            r111 = r109.bind(var3)(r108);
            r110 = r111.hasFlag;
            r108 = var87;
            r109 = r108.flags;
            r108 = _closure1_slot19;
            r108 = r108.EPHEMERAL;
            r107 = r110.bind(r111)(r109, r108);
case 124:
            if(!r107) { _fun0004_ip = 126; continue _fun0004 }
case 127:
            r114 = var83.push;
            r139 = r106;
            r138 = var90;
            r137 = r105;
            r136 = r104;
            r135 = r103;
            r134 = r102;
            r133 = r101;
            r132 = var98;
            r131 = var96;
            r130 = var99;
            r129 = var89;
            r128 = r100;
            r127 = var88;
            r126 = var65;
            r140 = var83;
            r100 = r140[r114](r139, r138, r137, r136, r135, r134, r133, r132, r131, r130, r129, r128, r127, r126, r125);
case 126:
            if(!var100) { _fun0004_ip = 128; continue _fun0004 }
case 129:
            r101 = _closure1_slot0;
            r102 = _closure1_slot2;
            r100 = 28;
            r100 = r102[r100];
            r103 = r101.bind(var3)(r100);
            r102 = r103.hasFlag;
            r100 = var87;
            r101 = r100.flags;
            r100 = _closure1_slot19;
            r100 = r100.EPHEMERAL;
            r100 = r102.bind(r103)(r101, r100);
            var100 = !r100;
case 128:
            if(var100) { _fun0004_ip = 130; continue _fun0004 }
case 131:
            r100 = var83.push;
            r139 = var99;
            r138 = var85;
            r137 = var98;
            r136 = var97;
            r135 = var96;
            r134 = var95;
            r133 = var94;
            r132 = var93;
            r131 = var92;
            r130 = var91;
            r129 = var90;
            r128 = var89;
            r127 = var88;
            r126 = var65;
            r140 = var83;
            var65 = r140[r100](r139, r138, r137, r136, r135, r134, r133, r132, r131, r130, r129, r128, r127, r126, r125);
case 130:
            var89 = _closure1_slot0;
            var88 = _closure1_slot2;
            var65 = 28;
            var88 = var88[var65];
            var90 = var89.bind(var3)(var88);
            var89 = var90.hasFlag;
            var88 = var87.flags;
            var87 = _closure1_slot19;
            var87 = var87.EPHEMERAL;
            var87 = var89.bind(var90)(var88, var87);
            if(!var87) { _fun0004_ip = 132; continue _fun0004 }
case 133:
            var87 = var83.push;
            r139 = var86;
            r138 = var85;
            r137 = var84;
            r136 = var82;
            r135 = var81;
            r134 = var49;
            r140 = var83;
            var49 = r140[var87](r139, r138, r137, r136, r135, r134, r133);
case 132:
            var49 = global;
            var81 = var49.Set;
            var82 = var81.prototype;
            var82 = Object.create(var82, {constructor: {value: var81}});
            r140 = var82;
            r139 = var83;
            var81 = new r140[var81](r139, r138);
            var81 = var81 instanceof Object ? var81 : var82;
            var _closure2_slot11 = var81;
            var10 = new Array(0);
            if(!(var80 === var79)) { _fun0004_ip = 134; continue _fun0004 }
case 135:
            var81 = var10;
            var80 = var81.unshift;
            var79 = var20;
            var79 = var80.bind(var81)(var79);
case 134:
            if(var78) { _fun0004_ip = 136; continue _fun0004 }
case 137:
            var80 = var50;
            var79 = var80.hasFlag;
            var78 = _closure1_slot19;
            var78 = var78.HAS_THREAD;
            var78 = var79.bind(var80)(var78);
            if(!var78) { _fun0004_ip = 138; continue _fun0004 }
case 139:
            var80 = var10;
            var79 = var80.unshift;
            var78 = var45;
            var78 = var79.bind(var80)(var78);
            _fun0004_ip = 138; continue _fun0004;
case 136:
            var80 = var10;
            var79 = var80.unshift;
            var78 = var13;
            var78 = var79.bind(var80)(var78);
case 138:
            var80 = var10;
            var79 = var80.unshift;
            var78 = var23;
            var78 = var79.bind(var80)(var78);
            if(!var77) { _fun0004_ip = 140; continue _fun0004 }
case 141:
            var79 = var10;
            var78 = var79.unshift;
            var77 = var21;
            var77 = var78.bind(var79)(var77);
case 140:
            if(!var75) { _fun0004_ip = 142; continue _fun0004 }
case 143:
            var77 = _closure1_slot0;
            var78 = _closure1_slot2;
            var75 = 69;
            var75 = var78[var75];
            var78 = var77.bind(var3)(var75);
            var77 = var78.canReportMessageToMods;
            var75 = var50;
            var75 = var77.bind(var78)(var75);
            if(var75) { _fun0004_ip = 144; continue _fun0004 }
case 142:
            var78 = var66;
            var78 = var9 != var78;
            var77 = var78;
            if(!var78) { _fun0004_ip = 145; continue _fun0004 }
case 146:
            var79 = _closure1_slot0;
            var80 = _closure1_slot2;
            var78 = 70;
            var78 = var80[var78];
            var80 = var79.bind(var3)(var78);
            var79 = var80.canReportUser;
            var78 = var66;
            var77 = var79.bind(var80)(var78);
case 145:
            var75 = var77;
            if(!var77) { _fun0004_ip = 147; continue _fun0004 }
case 148:
            var78 = _closure1_slot0;
            var79 = _closure1_slot2;
            var77 = 70;
            var77 = var79[var77];
            var79 = var78.bind(var3)(var77);
            var78 = var79.canReportMessage;
            var77 = var50;
            var75 = var78.bind(var79)(var77);
case 147:
            if(!var75) { _fun0004_ip = 149; continue _fun0004 }
case 150:
            var78 = var10;
            var77 = var78.unshift;
            var75 = var17;
            var75 = var77.bind(var78)(var75);
            _fun0004_ip = 149; continue _fun0004;
case 144:
            var78 = var10;
            var77 = var78.unshift;
            var75 = var16;
            var75 = var77.bind(var78)(var75);
            var77 = var78.unshift;
            var75 = var15;
            var75 = var77.bind(var78)(var75);
case 149:
            var78 = var10;
            var77 = var78.unshift;
            var75 = var43;
            var75 = var77.bind(var78)(var75);
            var75 = var76;
            if(!var76) { _fun0004_ip = 151; continue _fun0004 }
case 152:
            var79 = var73;
            var78 = var79;
            if(var79) { _fun0004_ip = 153; continue _fun0004 }
case 154:
            var78 = var72;
case 153:
            var77 = var78;
            if(var78) { _fun0004_ip = 155; continue _fun0004 }
case 156:
            var79 = var68;
            var78 = var79.isPrivate;
            var77 = var78.bind(var79)();
case 155:
            var76 = var77;
            if(var77) { _fun0004_ip = 157; continue _fun0004 }
case 158:
            var80 = _closure1_slot11;
            var79 = var80.can;
            var77 = _closure1_slot23;
            var78 = var77.READ_MESSAGE_HISTORY;
            var77 = var68;
            var76 = var79.bind(var80)(var78, var77);
case 157:
            var75 = var76;
case 151:
            if(!var75) { _fun0004_ip = 159; continue _fun0004 }
case 160:
            if(!var74) { _fun0004_ip = 161; continue _fun0004 }
case 162:
            var74 = var73;
            if(var74) { _fun0004_ip = 161; continue _fun0004 }
case 163:
            var74 = var72;
            if(var74) { _fun0004_ip = 161; continue _fun0004 }
case 164:
            var76 = var10;
            var75 = var76.unshift;
            var74 = var35;
            var74 = var75.bind(var76)(var74);
            _fun0004_ip = 159; continue _fun0004;
case 161:
            if(var73) { _fun0004_ip = 165; continue _fun0004 }
case 166:
            var73 = var72;
            if(var73) { _fun0004_ip = 165; continue _fun0004 }
case 167:
            var75 = var10;
            var74 = var75.unshift;
            var73 = var34;
            var73 = var74.bind(var75)(var73);
            _fun0004_ip = 168; continue _fun0004;
case 165:
            var75 = var10;
            var74 = var75.unshift;
            var73 = var33;
            var73 = var74.bind(var75)(var73);
case 168:
            var74 = var10;
            var73 = var74.unshift;
            if(var72) { _fun0004_ip = 169; continue _fun0004 }
case 170:
            var72 = var32;
            var72 = var73.bind(var74)(var72);
            _fun0004_ip = 159; continue _fun0004;
case 169:
            var72 = var31;
            var72 = var73.bind(var74)(var72);
case 159:
            if(!var70) { _fun0004_ip = 171; continue _fun0004 }
case 172:
            var73 = var10;
            var72 = var73.unshift;
            var70 = var11;
            var70 = var72.bind(var73)(var70);
case 171:
            var73 = var55;
            var73 = !var73;
            var72 = var73;
            if(!var73) { _fun0004_ip = 173; continue _fun0004 }
case 174:
            var75 = var50;
            var74 = var75.canDeleteOwnMessage;
            var73 = var63;
            var73 = var74.bind(var75)(var73);
            var72 = !var73;
case 173:
            var70 = var72;
            if(var72) { _fun0004_ip = 175; continue _fun0004 }
case 176:
            var72 = _closure1_slot22;
            var74 = var72.UNDELETABLE;
            var73 = var74.has;
            var72 = var50;
            var72 = var72.type;
            var70 = var73.bind(var74)(var72);
case 175:
            if(var70) { _fun0004_ip = 177; continue _fun0004 }
case 178:
            var73 = var10;
            var72 = var73.unshift;
            var70 = var12;
            var70 = var72.bind(var73)(var70);
case 177:
            var73 = _closure1_slot1;
            var74 = _closure1_slot2;
            var72 = 71;
            var72 = var74[var72];
            var74 = var73.bind(var3)(var72);
            var73 = var50;
            var72 = var63;
            var72 = var74.bind(var3)(var73, var72);
            var70 = var72;
            if(!var72) { _fun0004_ip = 179; continue _fun0004 }
case 180:
            var70 = !var71;
case 179:
            if(!var70) { _fun0004_ip = 181; continue _fun0004 }
case 182:
            var72 = var10;
            var71 = var72.unshift;
            var70 = var46;
            var70 = var71.bind(var72)(var70);
case 181:
            if(!var64) { _fun0004_ip = 183; continue _fun0004 }
case 184:
            var71 = var10;
            var70 = var71.unshift;
            var64 = var40;
            var64 = var70.bind(var71)(var64);
case 183:
            var72 = var68;
            var70 = var72.type;
            var64 = _closure1_slot15;
            var64 = var64.GROUP_DM;
            var67 = var70 === var64;
            var71 = var72.isPrivate;
            var71 = var71.bind(var72)();
            var70 = var71;
            if(!var71) { _fun0004_ip = 185; continue _fun0004 }
case 186:
            var71 = var67;
            var70 = !var71;
case 185:
            var64 = var70;
            if(var70) { _fun0004_ip = 187; continue _fun0004 }
case 188:
            var64 = var69;
case 187:
            if(var64) { _fun0004_ip = 189; continue _fun0004 }
case 190:
            var71 = _closure1_slot11;
            var70 = var71.can;
            var69 = _closure1_slot23;
            var69 = var69.SEND_MESSAGES;
            var68 = var70.bind(var71)(var69, var68);
            var64 = var68;
            if(var68) { _fun0004_ip = 191; continue _fun0004 }
case 192:
            var64 = var67;
case 191:
            if(!var64) { _fun0004_ip = 193; continue _fun0004 }
case 194:
            var68 = var10;
            var67 = var68.unshift;
            var64 = var28;
            var64 = var67.bind(var68)(var64);
case 193:
            var64 = var63;
            var63 = var66;
            var67 = var9 == var63;
            var63 = undefined;
            if(var67) { _fun0004_ip = 195; continue _fun0004 }
case 196:
            var63 = var66.id;
case 195:
            if(!(var64 !== var63)) { _fun0004_ip = 189; continue _fun0004 }
case 197:
            var66 = var10;
            var64 = var66.unshift;
            var63 = var29;
            var63 = var64.bind(var66)(var63);
case 189:
            if(!var62) { _fun0004_ip = 198; continue _fun0004 }
case 199:
            var64 = var10;
            var63 = var64.unshift;
            var62 = var50;
            var62 = var62.pinned;
            if(var62) { _fun0004_ip = 200; continue _fun0004 }
case 201:
            var62 = var39;
            _fun0004_ip = 202; continue _fun0004;
case 200:
            var62 = var38;
case 202:
            var62 = var63.bind(var64)(var62);
case 198:
            if(!var61) { _fun0004_ip = 203; continue _fun0004 }
case 204:
            var63 = var10;
            var62 = var63.unshift;
            var64 = _closure1_slot0;
            var61 = _closure1_slot2;
            var61 = var61[var65];
            var66 = var64.bind(var3)(var61);
            var65 = var66.hasFlag;
            var61 = var50;
            var64 = var61.flags;
            var61 = _closure1_slot19;
            var61 = var61.IS_GUILD_OFFICIAL;
            var61 = var65.bind(var66)(var64, var61);
            if(var61) { _fun0004_ip = 205; continue _fun0004 }
case 206:
            var61 = var37;
            _fun0004_ip = 207; continue _fun0004;
case 205:
            var61 = var36;
case 207:
            var61 = var62.bind(var63)(var61);
case 203:
            var62 = var6;
            var62 = var9 != var62;
            var61 = var62;
            if(!var62) { _fun0004_ip = 208; continue _fun0004 }
case 209:
            var62 = var6;
            var62 = var62.length;
            var61 = var62 > var8;
case 208:
            if(!var61) { _fun0004_ip = 210; continue _fun0004 }
case 211:
            var63 = var10;
            var62 = var63.unshift;
            var61 = var44;
            var61 = var62.bind(var63)(var61);
case 210:
            if(!var60) { _fun0004_ip = 212; continue _fun0004 }
case 213:
            var62 = var10;
            var61 = var62.unshift;
            var60 = var48;
            var60 = var61.bind(var62)(var60);
case 212:
            if(!var56) { _fun0004_ip = 214; continue _fun0004 }
case 215:
            var61 = var10;
            var60 = var61.unshift;
            var56 = var47;
            var56 = var60.bind(var61)(var56);
case 214:
            var60 = var58;
            var60 = var9 == var60;
            var56 = var60;
            if(var60) { _fun0004_ip = 216; continue _fun0004 }
case 217:
            var56 = var59;
case 216:
            if(var56) { _fun0004_ip = 218; continue _fun0004 }
case 219:
            var60 = var10;
            var59 = var60.unshift;
            var56 = var24;
            var56 = var59.bind(var60)(var56);
            var56 = var58;
            var59 = var56.mediaType;
            var56 = 'image';
            if(!(var56 !== var59)) { _fun0004_ip = 220; continue _fun0004 }
case 221:
            var56 = var58;
            var59 = var56.mediaType;
            var56 = 'video';
            if(!(var56 === var59)) { _fun0004_ip = 222; continue _fun0004 }
case 223:
            var59 = _closure1_slot0;
            var60 = _closure1_slot2;
            var56 = 72;
            var56 = var60[var56];
            var60 = var59.bind(var3)(var56);
            var59 = var60.isWebPlayerVideoUrl;
            var56 = var58;
            var56 = var56.mediaUrl;
            var56 = var59.bind(var60)(var56);
            if(var56) { _fun0004_ip = 222; continue _fun0004 }
case 224:
            var60 = var10;
            var59 = var60.unshift;
            var56 = var26;
            var56 = var59.bind(var60)(var56);
            _fun0004_ip = 225; continue _fun0004;
case 222:
            var59 = var58;
            var60 = var59.mediaType;
            var59 = 'audio';
            var59 = var59 !== var60;
            var56 = var59;
            if(!var59) { _fun0004_ip = 226; continue _fun0004 }
case 227:
            var59 = var58;
            var60 = var59.mediaType;
            var59 = 'file';
            var56 = var59 !== var60;
case 226:
            if(var56) { _fun0004_ip = 225; continue _fun0004 }
case 228:
            var60 = var10;
            var59 = var60.unshift;
            var56 = var25;
            var56 = var59.bind(var60)(var56);
            _fun0004_ip = 225; continue _fun0004;
case 220:
            var60 = var10;
            var59 = var60.unshift;
            var56 = var27;
            var56 = var59.bind(var60)(var56);
case 225:
            var59 = _closure1_slot0;
            var60 = _closure1_slot2;
            var56 = 73;
            var56 = var60[var56];
            var60 = var59.bind(var3)(var56);
            var59 = var60.messageHasObscurableMedia;
            var56 = var50;
            var56 = var59.bind(var60)(var56);
            if(!var56) { _fun0004_ip = 229; continue _fun0004 }
case 230:
            var60 = var10;
            var59 = var60.unshift;
            var56 = var14;
            var56 = var59.bind(var60)(var56);
case 229:
            var59 = var58.sourceType;
            var58 = 'attachment';
            var58 = var58 === var59;
            var56 = var58;
            if(!var58) { _fun0004_ip = 231; continue _fun0004 }
case 232:
            var56 = var57;
case 231:
            if(!var56) { _fun0004_ip = 218; continue _fun0004 }
case 233:
            var58 = var10;
            var57 = var58.unshift;
            var56 = var18;
            var56 = var57.bind(var58)(var56);
case 218:
            var57 = var50;
            var57 = var57.reactions;
            var57 = var57.length;
            var57 = var57 > var8;
            var56 = var57;
            if(!var57) { _fun0004_ip = 234; continue _fun0004 }
case 235:
            var59 = var50;
            var58 = var59.isPoll;
            var58 = var58.bind(var59)();
            var58 = !var58;
            var57 = var58;
            if(var58) { _fun0004_ip = 236; continue _fun0004 }
case 237:
            var59 = _closure1_slot0;
            var60 = _closure1_slot2;
            var58 = 74;
            var58 = var60[var58];
            var60 = var59.bind(var3)(var58);
            var59 = var60.hasNonVoteReactions;
            var58 = var50;
            var57 = var59.bind(var60)(var58);
case 236:
            var56 = var57;
case 234:
            if(!var56) { _fun0004_ip = 238; continue _fun0004 }
case 239:
            var58 = var10;
            var57 = var58.unshift;
            var56 = var41;
            var56 = var57.bind(var58)(var56);
            if(!var55) { _fun0004_ip = 238; continue _fun0004 }
case 240:
            var57 = var10;
            var56 = var57.unshift;
            var55 = var19;
            var55 = var56.bind(var57)(var55);
case 238:
            var55 = _closure1_slot25;
            var51 = var55.bind(var3)(var51);
            var54 = var51;
            var51 = var51.bind(var3)();
            var53 = var51;
            var51 = var51.done;
            if(var51) { _fun0004_ip = 241; continue _fun0004 }
case 242:
            var51 = var53;
            var55 = var51.value;
            var56 = _closure1_slot0;
            var51 = _closure1_slot2;
            var51 = var51[var52];
            var51 = var56.bind(var3)(var51);
            var51 = var51.PollMessageContextItemTypes;
            var51 = var51.END_EARLY;
            if(!(var55 === var51)) { _fun0004_ip = 243; continue _fun0004 }
case 244:
            var56 = var10;
            var55 = var56.unshift;
            var51 = var42;
            var51 = var55.bind(var56)(var51);
case 243:
            var51 = var54;
            var51 = var51.bind(var3)();
            var53 = var51;
            var51 = var51.done;
            if(!var51) { _fun0004_ip = 242; continue _fun0004 }
case 241:
            var53 = var10;
            var52 = var53.unshift;
            var51 = var30;
            var51 = var52.bind(var53)(var51);
            var52 = _closure1_slot0;
            var53 = _closure1_slot2;
            var51 = 75;
            var51 = var53[var51];
            var52 = var52.bind(var3)(var51);
            var51 = var52.canViewInteractionInfo;
            var50 = var51.bind(var52)(var50);
            if(!var50) { _fun0004_ip = 245; continue _fun0004 }
case 246:
            var52 = var10;
            var51 = var52.unshift;
            var50 = var22;
            var50 = var51.bind(var52)(var50);
case 245:
            var50 = var49.Set;
            var51 = var10;
            var49 = var51.filter;
            var10 = function(arg1) {
                var3 = _closure2_slot11;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            r139 = var49.bind(var51)(var10);
            var49 = var50.prototype;
            var49 = Object.create(var49, {constructor: {value: var50}});
            r140 = var49;
            var10 = new r140[var50](r139, r138);
            var10 = var10 instanceof Object ? var10 : var49;
            var _closure2_slot12 = var10;
            var10 = var1;
            var49 = var46;
            var46 = new Array(4);
            var46[0] = var49;
            var46[1] = var48;
            var46[2] = var47;
            var46[3] = var13;
            var13 = new Array(3);
            var13[0] = var46;
            var46 = var20;
            var20 = new Array(26);
            var20[0] = var46;
            var20[1] = var45;
            var20[2] = var44;
            var20[3] = var43;
            var20[4] = var42;
            var20[5] = var41;
            var20[6] = var40;
            var20[7] = var39;
            var20[8] = var38;
            var20[9] = var37;
            var20[10] = var36;
            var20[11] = var35;
            var20[12] = var34;
            var20[13] = var33;
            var20[14] = var32;
            var20[15] = var31;
            var20[16] = var30;
            var20[17] = var29;
            var20[18] = var28;
            var20[19] = var27;
            var20[20] = var26;
            var20[21] = var25;
            var20[22] = var24;
            var20[23] = var23;
            var20[24] = var22;
            var20[25] = var21;
            var13[1] = var20;
            var20 = var11;
            var11 = new Array(8);
            var11[0] = var20;
            var11[1] = var19;
            var11[2] = var18;
            var11[3] = var17;
            var11[4] = var16;
            var11[5] = var15;
            var11[6] = var14;
            var11[7] = var12;
            var13[2] = var11;
            var12 = var13.map;
            var11 = function(arg1) {
                var3 = arg1;
                var2 = var3.filter;
                var1 = function(arg1) {
                    var3 = _closure2_slot12;
                    var2 = var3.has;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var12.bind(var13)(var11);
            var11 = var12.filter;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var4 = var11.bind(var12)(var4);
            var4 = var10.bind(var3)(var4);
            return var4;
case 100:
            var10 = var1;
            var11 = var2;
            var4 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 38;
            var15 = var14[var12];
            var15 = var13.bind(var3)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.t;
            var12 = var12.k5WiPf;
            var12 = var15.bind(var16)(var12);
            var4['label'] = var12;
            var12 = 42;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.LinkIcon;
            var4['IconComponent'] = var12;
            var4 = var11.bind(var3)(var4);
            var11 = new Array(1);
            var11[0] = var4;
            var4 = new Array(1);
            var4[0] = var11;
            var4 = var10.bind(var3)(var4);
            return var4;
case 98:
            var11 = new Array(0);
            var4 = var6;
            var4 = var9 != var4;
            if(!var4) { _fun0004_ip = 247; continue _fun0004 }
case 248:
            var10 = var6;
            var10 = var10.length;
            var4 = var10 > var8;
case 247:
            if(!var4) { _fun0004_ip = 249; continue _fun0004 }
case 250:
            var10 = var11.push;
            var12 = var2;
            var4 = {};
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 38;
            var16 = var15[var13];
            var16 = var14.bind(var3)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            var13 = var13.t;
            var13 = var13.JrGD7E;
            var13 = var16.bind(var17)(var13);
            var4['label'] = var13;
            var13 = 40;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            var13 = var13.CopyIcon;
            var4['IconComponent'] = var13;
            var4 = var12.bind(var3)(var4);
            var4 = var10.bind(var11)(var4);
case 249:
            var10 = var11.push;
            var12 = var2;
            var4 = {};
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 38;
            var16 = var15[var13];
            var16 = var14.bind(var3)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            var13 = var13.t;
            var13 = var13.xwMqD7;
            var13 = var16.bind(var17)(var13);
            var4['label'] = var13;
            var13 = 41;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            var13 = var13.TrashIcon;
            var4['IconComponent'] = var13;
            var13 = 'danger';
            var4['variant'] = var13;
            var4 = var12.bind(var3)(var4);
            var4 = var10.bind(var11)(var4);
            var10 = var1;
            var4 = new Array(1);
            var4[0] = var11;
            var4 = var10.bind(var3)(var4);
            return var4;
case 96:
            var4 = new Array(0);
            if(!var5) { _fun0004_ip = 251; continue _fun0004 }
case 252:
            var10 = var4.push;
            var11 = var2;
            var5 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 38;
            var15 = var14[var12];
            var15 = var13.bind(var3)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.t;
            var12 = var12["5911Lb"];
            var12 = var15.bind(var16)(var12);
            var5['label'] = var12;
            var12 = 39;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.RetryIcon;
            var5['IconComponent'] = var12;
            var5 = var11.bind(var3)(var5);
            var5 = var10.bind(var4)(var5);
case 251:
            var5 = var6;
            var5 = var9 != var5;
            if(!var5) { _fun0004_ip = 253; continue _fun0004 }
case 254:
            var6 = var6.length;
            var5 = var6 > var8;
case 253:
            if(!var5) { _fun0004_ip = 255; continue _fun0004 }
case 256:
            var6 = var4.push;
            var8 = var2;
            var5 = {};
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 38;
            var12 = var11[var9];
            var12 = var10.bind(var3)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var9 = var11[var9];
            var9 = var10.bind(var3)(var9);
            var9 = var9.t;
            var9 = var9.JrGD7E;
            var9 = var12.bind(var13)(var9);
            var5['label'] = var9;
            var9 = 40;
            var9 = var11[var9];
            var9 = var10.bind(var3)(var9);
            var9 = var9.CopyIcon;
            var5['IconComponent'] = var9;
            var5 = var8.bind(var3)(var5);
            var5 = var6.bind(var4)(var5);
case 255:
            var5 = var4.push;
            var6 = var2;
            var2 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 38;
            var10 = var9[var7];
            var10 = var8.bind(var3)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var7 = var9[var7];
            var7 = var8.bind(var3)(var7);
            var7 = var7.t;
            var7 = var7.xwMqD7;
            var7 = var10.bind(var11)(var7);
            var2['label'] = var7;
            var7 = 41;
            var7 = var9[var7];
            var7 = var8.bind(var3)(var7);
            var7 = var7.TrashIcon;
            var2['IconComponent'] = var7;
            var7 = 'danger';
            var2['variant'] = var7;
            var2 = var6.bind(var3)(var2);
            var2 = var5.bind(var4)(var2);
            var2 = var1;
            var1 = new Array(1);
            var1[0] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
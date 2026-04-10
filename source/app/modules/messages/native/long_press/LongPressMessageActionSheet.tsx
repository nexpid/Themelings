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
            var9 = _closure1_slot27;
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
            var7 = _closure1_slot27;
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
    var _closure1_slot26 = var1;
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
    var _closure1_slot27 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var9 = 1;
    var8 = var6[var9];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var8 = 2;
    var4 = var6[var8];
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
    var4 = {};
    var4['PRIMARY'] = var10;
    var7 = 'PRIMARY';
    var4[var10] = var7;
    var4['GENERAL'] = var9;
    var7 = 'GENERAL';
    var4[var9] = var7;
    var4['DESTRUCTIVE'] = var8;
    var7 = 'DESTRUCTIVE';
    var4[var8] = var7;
    var _closure1_slot25 = var4;
    var4 = 75;
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
            var49 = undefined;
            var15 = undefined;
            var85 = undefined;
            var52 = undefined;
            var28 = undefined;
            r106 = undefined;
            var37 = undefined;
            var35 = undefined;
            var68 = undefined;
            var61 = undefined;
            var65 = undefined;
            var67 = undefined;
            var57 = undefined;
            var34 = undefined;
            var17 = undefined;
            var99 = undefined;
            var53 = undefined;
            var47 = undefined;
            var75 = undefined;
            var23 = undefined;
            var40 = undefined;
            var43 = undefined;
            var54 = undefined;
            var79 = undefined;
            r108 = undefined;
            var6 = undefined;
            var59 = undefined;
            var27 = undefined;
            r114 = undefined;
            var73 = undefined;
            var2 = undefined;
            var1 = undefined;
            var55 = undefined;
            var98 = undefined;
            var36 = undefined;
            var97 = undefined;
            var33 = undefined;
            var84 = undefined;
            var77 = undefined;
            r105 = undefined;
            var78 = undefined;
            var38 = undefined;
            var69 = undefined;
            var88 = undefined;
            var19 = undefined;
            var24 = undefined;
            var50 = undefined;
            var93 = undefined;
            var41 = undefined;
            var92 = undefined;
            var46 = undefined;
            var91 = undefined;
            var39 = undefined;
            var90 = undefined;
            var42 = undefined;
            var89 = undefined;
            var66 = undefined;
            r102 = undefined;
            var64 = undefined;
            r104 = undefined;
            var62 = undefined;
            r103 = undefined;
            var63 = undefined;
            r101 = undefined;
            var60 = undefined;
            r100 = undefined;
            var16 = undefined;
            var86 = undefined;
            var44 = undefined;
            var100 = undefined;
            var48 = undefined;
            var87 = undefined;
            var29 = undefined;
            var31 = undefined;
            var30 = undefined;
            r110 = undefined;
            r107 = undefined;
            var32 = undefined;
            var76 = undefined;
            var83 = undefined;
            var14 = undefined;
            var74 = undefined;
            var58 = undefined;
            var96 = undefined;
            var22 = undefined;
            var45 = undefined;
            var25 = undefined;
            var95 = undefined;
            var72 = undefined;
            var81 = undefined;
            var71 = undefined;
            var80 = undefined;
            var70 = undefined;
            var11 = undefined;
            var26 = undefined;
            var56 = undefined;
            var94 = undefined;
            var12 = undefined;
            var51 = undefined;
            var20 = undefined;
            var21 = undefined;
            var10 = _closure1_slot1;
            var5 = _closure1_slot2;
            r124 = 12;
            var9 = var5[r124];
            var9 = var10.bind(var3)(var9);
            r121 = 13;
            var5 = var5[r121];
            var5 = var10.bind(var3)(var5);
            var5 = var5.MESSAGE_LONG_PRESS_MENU;
            var5 = var9.bind(var3)(var5);
            var5 = var5.analyticsLocations;
            var _closure2_slot1 = var5;
            var5 = var8.analyticsLocation;
            if(!(var3 === var5)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var5 = {};
case 36:
            var _closure2_slot2 = var5;
            var49 = var8.user;
            var9 = var8.message;
            var15 = var9;
            var85 = var9;
            var _closure2_slot3 = var9;
            var9 = var8.channel;
            var52 = var9;
            var _closure2_slot4 = var9;
            var9 = var8.chatInputRef;
            var _closure2_slot5 = var9;
            var9 = var8.selectedMedia;
            var28 = var9;
            var _closure2_slot6 = var9;
            var10 = var8.actionSheetSource;
            var9 = undefined;
            if(!(var3 !== var10)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var9 = var10;
case 38:
            r106 = var9;
            var _closure2_slot7 = var9;
            var10 = var8.canAddNewReactions;
            var9 = var3 !== var10;
            if(!var9) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var9 = var10;
case 40:
            var _closure2_slot8 = var9;
            var13 = _closure1_slot4;
            var18 = var13.useEffect;
            var10 = new Array(2);
            var10[0] = var5;
            var5 = var52;
            var10[1] = var5;
            var9 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
                    if(var8) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var8 = var9.GUILD_CHANNEL;
                    _fun0005_ip = 44; continue _fun0005;
case 42:
                    var8 = var9.DM_CHANNEL;
case 44:
                    var6['page'] = var8;
                    var11 = _closure2_slot2;
                    var12 = var6;
                    var7 = copyDataProperties(var12, var11);
                    var2['location'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var9 = var18.bind(var13)(var9, var10);
            var10 = var13.useCallback;
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
            var8 = var10.bind(var13)(var8, var9);
            var _closure2_slot9 = var8;
            r111 = _closure1_slot0;
            r109 = _closure1_slot2;
            r115 = 16;
            var8 = r109[r115];
            var9 = r111.bind(var3)(var8);
            var8 = var9.useCanReplyToMessage;
            var10 = var15;
            var37 = var8.bind(var9)(var5, var10);
            r120 = 17;
            var8 = r109[r120];
            var9 = r111.bind(var3)(var8);
            var8 = var9.useCanForwardMessage;
            var35 = var8.bind(var9)(var10);
            var10 = _closure1_slot10;
            var9 = var10.getGuild;
            var8 = var5.guild_id;
            r112 = var9.bind(var10)(var8);
            var18 = _closure1_slot1;
            var8 = 18;
            var8 = r109[var8];
            var10 = var18.bind(var3)(var8);
            var9 = var10.useConfig;
            var8 = {};
            r122 = 'LongPressMessageActionSheet';
            var8['location'] = r122;
            var8 = var9.bind(var10)(var8);
            var68 = var8.enabled;
            var82 = 19;
            var8 = r109[var82];
            var13 = r111.bind(var3)(var8);
            var10 = var13.useStateFromStoresArray;
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
            var10 = var10.bind(var13)(var9, var8);
            var8 = _closure1_slot3;
            var9 = 2;
            var10 = var8.bind(var3)(var10, var9);
            var8 = 0;
            var61 = var10[var8];
            var13 = 1;
            var65 = var10[var13];
            var10 = 20;
            var10 = r109[var10];
            var10 = var18.bind(var3)(var10);
            var10 = var10.bind(var3)();
            var67 = !var10;
            r118 = 21;
            var10 = r109[r118];
            r111 = r111.bind(var3)(var10);
            var10 = r111.useIsNonModInLockedThread;
            var57 = var10.bind(r111)(var5);
            var10 = 22;
            var10 = r109[var10];
            var18 = var18.bind(var3)(var10);
            var10 = null;
            r109 = var10 == var5;
            var5 = undefined;
            if(r109) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            r109 = var52;
            var5 = r109.id;
case 45:
            var34 = var18.bind(var3)(var5);
            r109 = _closure1_slot5;
            var18 = r109.getMessage;
            r117 = var15;
            var5 = r117.id;
            var5 = var18.bind(r109)(var5);
            r113 = var10 != var5;
            r111 = r117.interactionError;
            var5 = _closure1_slot12;
            r109 = var5.EXPLICIT_CONTENT;
            r119 = _closure1_slot1;
            var5 = _closure1_slot2;
            var18 = 23;
            r116 = var5[var18];
            r116 = r119.bind(var3)(r116);
            var17 = r116.bind(var3)(r117);
            r116 = _closure1_slot0;
            var5 = var5[r118];
            r117 = r116.bind(var3)(var5);
            r116 = r117.useIsActiveChannelOrUnarchivableThread;
            var5 = var52;
            var5 = r116.bind(r117)(var5);
            var99 = var5;
            var _closure2_slot10 = var5;
            var5 = var49;
            r116 = var10 == var5;
            var5 = undefined;
            if(r116) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            r117 = var49;
            r116 = r117.isNonUserBot;
            var5 = r116.bind(r117)();
case 47:
            r116 = true;
            var53 = r116 === var5;
            r117 = _closure1_slot9;
            var5 = r117.getId;
            var47 = var5.bind(r117)();
            r119 = _closure1_slot0;
            r123 = _closure1_slot2;
            var5 = 24;
            var5 = r123[var5];
            var5 = r119.bind(var3)(var5);
            r117 = var5.DeveloperMode;
            var5 = r117.getSetting;
            var75 = var5.bind(r117)();
            r126 = _closure1_slot11;
            r125 = r126.can;
            var5 = _closure1_slot23;
            r117 = var5.MANAGE_MESSAGES;
            var5 = var52;
            var23 = r125.bind(r126)(r117, var5);
            r117 = 25;
            r117 = r123[r117];
            r119 = r119.bind(var3)(r117);
            r117 = r119.useCanManageGuildOfficialMessages;
            r123 = var5.guild_id;
            r125 = var10 != r123;
            var5 = undefined;
            if(!r125) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var5 = r123;
case 49:
            r123 = var52;
            var40 = r117.bind(r119)(var5, r123, r122);
            r122 = var15;
            var5 = r122.author;
            r117 = var5.id;
            var5 = var47;
            r117 = r117 === var5;
            r119 = r122.hasFlag;
            var5 = _closure1_slot19;
            var5 = var5.CROSSPOSTED;
            var5 = r119.bind(r122)(var5);
            r125 = _closure1_slot1;
            r126 = _closure1_slot2;
            r119 = 26;
            r119 = r126[r119];
            r119 = r125.bind(var3)(r119);
            var43 = r119.bind(var3)(r122, r123);
            var5 = !var5;
            if(!var5) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            r119 = var52;
            r122 = r119.type;
            r119 = _closure1_slot15;
            r119 = r119.GUILD_ANNOUNCEMENT;
            var5 = r122 === r119;
case 51:
            if(!var5) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            r122 = var10 == r112;
            r119 = undefined;
            if(r122) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            r125 = r112.features;
            r123 = r125.has;
            r122 = _closure1_slot16;
            r122 = r122.NEWS;
            r119 = r123.bind(r125)(r122);
case 55:
            var5 = r119;
case 53:
            if(!var5) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            if(r117) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            r117 = var23;
case 59:
            var5 = r117;
case 57:
            if(!var5) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            r117 = var15;
            r119 = r117.type;
            r117 = _closure1_slot21;
            r117 = r117.DEFAULT;
            var5 = r119 === r117;
case 61:
            if(!var5) { _fun0004_ip = 63; continue _fun0004 }
case 64:
            r119 = var15;
            r117 = r119.isPoll;
            r117 = r117.bind(r119)();
            var5 = !r117;
case 63:
            var54 = var5;
            r117 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[r118];
            r119 = r117.bind(var3)(var5);
            r118 = r119.computeCanStartPublicThread;
            var5 = var52;
            r117 = var15;
            var79 = r118.bind(r119)(var5, r117);
            var5 = r117.getContentMessage;
            r117 = var5.bind(r117)();
            var5 = r117.embeds;
            r108 = var5.length;
            var5 = _closure1_slot8;
            var5 = var5.bind(var3)(r117);
            if(var5) { _fun0004_ip = 65; continue _fun0004 }
case 66:
            var5 = r117.content;
            _fun0004_ip = 67; continue _fun0004;
case 65:
            r119 = _closure1_slot0;
            r122 = _closure1_slot2;
            r118 = 27;
            r118 = r122[r118];
            r119 = r119.bind(var3)(r118);
            r118 = r119.getAllTextDisplayContent;
            r117 = r117.components;
            var5 = r118.bind(r119)(r117);
case 67:
            var6 = var5;
            var5 = var23;
            if(var5) { _fun0004_ip = 68; continue _fun0004 }
case 69:
            r119 = var15;
            r118 = r119.canDeleteOwnMessage;
            r117 = var47;
            var5 = r118.bind(r119)(r117);
case 68:
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
case 71:
            r117 = r108;
            var5 = r117 > var8;
case 70:
            if(!var5) { _fun0004_ip = 72; continue _fun0004 }
case 73:
            r117 = var15;
            r117 = r117.author;
            r118 = r117.id;
            r117 = _closure1_slot17;
            var5 = r118 !== r117;
case 72:
            if(!var5) { _fun0004_ip = 74; continue _fun0004 }
case 75:
            r118 = _closure1_slot0;
            r119 = _closure1_slot2;
            r117 = 28;
            r117 = r119[r117];
            r122 = r118.bind(var3)(r117);
            r119 = r122.hasFlag;
            r117 = var15;
            r118 = r117.flags;
            r117 = _closure1_slot19;
            r117 = r117.EPHEMERAL;
            r117 = r119.bind(r122)(r118, r117);
            var5 = !r117;
case 74:
            if(!var5) { _fun0004_ip = 76; continue _fun0004 }
case 77:
            r118 = _closure1_slot1;
            r119 = _closure1_slot2;
            r117 = 29;
            r117 = r119[r117];
            r118 = r118.bind(var3)(r117);
            r117 = var15;
            r117 = r118.bind(var3)(r117);
            var5 = r117 >= var13;
case 76:
            var59 = var5;
            var5 = !r113;
            if(r113) { _fun0004_ip = 78; continue _fun0004 }
case 79:
            r109 = r111 === r109;
            var5 = !r109;
case 78:
            if(!var5) { _fun0004_ip = 80; continue _fun0004 }
case 81:
            r109 = var15;
            r109 = r109.interactionData;
            r109 = var10 == r109;
            if(r109) { _fun0004_ip = 82; continue _fun0004 }
case 83:
            r113 = _closure1_slot0;
            r117 = _closure1_slot2;
            r111 = 30;
            r111 = r117[r111];
            r117 = r113.bind(var3)(r111);
            r113 = r117.canRetryInteractionData;
            r111 = var15;
            r111 = r111.interactionData;
            r109 = r113.bind(r117)(r111);
case 82:
            var5 = r109;
case 80:
            r109 = var15;
            r117 = r109.attachments;
            r113 = r117.filter;
            r111 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = arg1;
                    var2 = var3.flags;
                    var1 = null;
                    var1 = var1 == var2;
                    if(var1) { _fun0006_ip = 84; continue _fun0006 }
case 85:
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
case 84:
                    return var1;
                }
            };
            r111 = r113.bind(r117)(r111);
            r109 = r109.author;
            r113 = r109.id;
            r109 = var47;
            r109 = r113 === r109;
            if(!r109) { _fun0004_ip = 86; continue _fun0004 }
case 87:
            r111 = r111.length;
            r111 = r111 > var13;
            if(r111) { _fun0004_ip = 88; continue _fun0004 }
case 89:
            r113 = var15;
            r117 = r113.content;
            r113 = '';
            r111 = r113 !== r117;
case 88:
            r109 = r111;
case 86:
            var27 = r109;
            r109 = _closure1_slot0;
            r111 = _closure1_slot2;
            var82 = r111[var82];
            r118 = r109.bind(var3)(var82);
            r117 = r118.useStateFromStores;
            var82 = _closure1_slot6;
            r113 = new Array(1);
            r113[0] = var82;
            var82 = function() {
                var4 = _closure1_slot6;
                var3 = var4.hasReportedMessage;
                var2 = _closure2_slot3;
                var2 = var2.channel_id;
                var1 = _closure2_slot3;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            r114 = r117.bind(r118)(r113, var82);
            var82 = 31;
            var82 = r111[var82];
            r111 = r109.bind(var3)(var82);
            r109 = r111.useIsReportToModEnabled;
            r113 = var10 == r112;
            var82 = undefined;
            if(r113) { _fun0004_ip = 90; continue _fun0004 }
case 91:
            var82 = r112.id;
case 90:
            var73 = r109.bind(r111)(var82);
            var2 = function getProps(arg1) {
                var1 = arg1;
                var8 = var1.arrow;
                var12 = var1.IconComponent;
                var7 = var1.label;
                var _closure3_slot0 = var7;
                var5 = var1.section;
                var4 = var1.sortKey;
                var2 = var1.onActionExecuted;
                var _closure3_slot1 = var2;
                var3 = var1.variant;
                var2 = var1.disabled;
                var _closure3_slot2 = var2;
                var1 = {};
                var1['arrow'] = var8;
                var11 = _closure1_slot24;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 32;
                var8 = var10[var8];
                var10 = undefined;
                var8 = var9.bind(var10)(var8);
                var8 = var8.ActionSheetRow;
                var9 = var8.Icon;
                var8 = {};
                var8['IconComponent'] = var12;
                var8 = var11.bind(var10)(var9, var8);
                var1['icon'] = var8;
                var1['label'] = var7;
                var6 = function onPress() {
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
                var1['onPress'] = var6;
                var1['section'] = var5;
                var1['sortKey'] = var4;
                var1['variant'] = var3;
                var1['disabled'] = var2;
                return var1;
            };
            var1 = function render(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
                    if(!var7) { _fun0007_ip = 92; continue _fun0007 }
case 93:
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
case 92:
                    var5['header'] = var7;
                    var7 = null;
                    var8 = var7 == var10;
                    var7 = undefined;
                    if(var8) { _fun0007_ip = 94; continue _fun0007 }
case 95:
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
case 94:
                    var5['children'] = var7;
                    var5 = var4.bind(var3)(var6, var5);
                    var1['children'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var82 = var15;
            r109 = var82.state;
            var82 = _closure1_slot20;
            var82 = var82.SEND_FAILED;
            if(!(r109 !== var82)) { _fun0004_ip = 96; continue _fun0004 }
case 97:
            var82 = var15;
            r109 = var82.type;
            var82 = _closure1_slot21;
            var82 = var82.THREAD_STARTER_MESSAGE;
            if(!(r109 !== var82)) { _fun0004_ip = 98; continue _fun0004 }
case 99:
            r112 = var2;
            var82 = {};
            r122 = _closure1_slot0;
            r123 = _closure1_slot2;
            r113 = 38;
            r109 = r123[r113];
            r109 = r122.bind(var3)(r109);
            r117 = r109.intl;
            r111 = r117.string;
            r109 = r123[r113];
            r109 = r122.bind(var3)(r109);
            r109 = r109.t;
            r109 = r109.fsBWmS;
            r109 = r111.bind(r117)(r109);
            var82['label'] = r109;
            r109 = 43;
            r109 = r123[r109];
            r109 = r122.bind(var3)(r109);
            r109 = r109.PencilIcon;
            var82['IconComponent'] = r109;
            r119 = _closure1_slot25;
            r109 = r119.PRIMARY;
            var82['section'] = r109;
            var82['sortKey'] = var13;
            var82 = r112.bind(var3)(var82);
            var55 = var82;
            var98 = var82;
            var82 = {};
            r109 = r123[r113];
            r109 = r122.bind(var3)(r109);
            r117 = r109.intl;
            r111 = r117.string;
            r109 = r123[r113];
            r109 = r122.bind(var3)(r109);
            r109 = r109.t;
            r109 = r109["5IEsGx"];
            r109 = r111.bind(r117)(r109);
            var82['label'] = r109;
            r109 = 44;
            r109 = r123[r109];
            r109 = r122.bind(var3)(r109);
            r109 = r109.ArrowAngleLeftUpIcon;
            var82['IconComponent'] = r109;
            r109 = r119.PRIMARY;
            var82['section'] = r109;
            var82['sortKey'] = var9;
            var82 = r112.bind(var3)(var82);
            var36 = var82;
            var97 = var82;
            var82 = {};
            r109 = r123[r113];
            r109 = r122.bind(var3)(r109);
            r117 = r109.intl;
            r111 = r117.string;
            r109 = r123[r113];
            r109 = r122.bind(var3)(r109);
            r109 = r109.t;
            r109 = r109.I3ltXO;
            r109 = r111.bind(r117)(r109);
            var82['label'] = r109;
            r111 = _closure1_slot1;
            r109 = 45;
            r109 = r123[r109];
            r109 = r111.bind(var3)(r109);
            var82['IconComponent'] = r109;
            r109 = r119.PRIMARY;
            var82['section'] = r109;
            r109 = 3;
            var82['sortKey'] = r109;
            var82 = r112.bind(var3)(var82);
            var33 = var82;
            var84 = var82;
            var82 = {};
            r109 = r123[r113];
            r109 = r122.bind(var3)(r109);
            r117 = r109.intl;
            r111 = r117.string;
            r109 = r123[r113];
            r109 = r122.bind(var3)(r109);
            r109 = r109.t;
            r109 = r109.rBIGBL;
            r109 = r111.bind(r117)(r109);
            var82['label'] = r109;
            r111 = 46;
            r109 = r123[r111];
            r109 = r122.bind(var3)(r109);
            r109 = r109.ThreadIcon;
            var82['IconComponent'] = r109;
            r109 = r119.PRIMARY;
            var82['section'] = r109;
            r109 = 4;
            var82['sortKey'] = r109;
            var82 = r112.bind(var3)(var82);
            var77 = var82;
            r105 = var82;
            var82 = {};
            r117 = r123[r113];
            r117 = r122.bind(var3)(r117);
            r125 = r117.intl;
            r118 = r125.string;
            r117 = r123[r113];
            r117 = r122.bind(var3)(r117);
            r117 = r117.t;
            r117 = r117["39d0Wj"];
            r117 = r118.bind(r125)(r117);
            var82['label'] = r117;
            r111 = r123[r111];
            r111 = r122.bind(var3)(r111);
            r111 = r111.ThreadIcon;
            var82['IconComponent'] = r111;
            r111 = r119.GENERAL;
            var82['section'] = r111;
            var82['sortKey'] = r109;
            var78 = r112.bind(var3)(var82);
            var82 = {};
            r109 = r123[r113];
            r109 = r122.bind(var3)(r109);
            r117 = r109.intl;
            r111 = r117.string;
            r109 = r123[r113];
            r109 = r122.bind(var3)(r109);
            r109 = r109.t;
            r109 = r109.JrGD7E;
            r109 = r111.bind(r117)(r109);
            var82['label'] = r109;
            r109 = 40;
            r109 = r123[r109];
            r109 = r122.bind(var3)(r109);
            r109 = r109.CopyIcon;
            var82['IconComponent'] = r109;
            r109 = r119.GENERAL;
            var82['section'] = r109;
            r109 = 5;
            var82['sortKey'] = r109;
            var38 = r112.bind(var3)(var82);
            var82 = {};
            r109 = r123[r113];
            r109 = r122.bind(var3)(r109);
            r117 = r109.intl;
            r111 = r117.string;
            r109 = r123[r113];
            r109 = r122.bind(var3)(r109);
            r109 = r109.t;
            r109 = r109.RpE9k7;
            r109 = r111.bind(r117)(r109);
            var82['label'] = r109;
            r109 = 47;
            r109 = r123[r109];
            r109 = r122.bind(var3)(r109);
            r109 = r109.ChatMarkUnreadIcon;
            var82['IconComponent'] = r109;
            r109 = r119.GENERAL;
            var82['section'] = r109;
            r109 = 6;
            var82['sortKey'] = r109;
            var82 = r112.bind(var3)(var82);
            var69 = var82;
            var88 = var82;
            var82 = {};
            r109 = r123[r113];
            r109 = r122.bind(var3)(r109);
            r117 = r109.intl;
            r111 = r117.string;
            r109 = r123[r113];
            r109 = r122.bind(var3)(r109);
            r109 = r109.t;
            r109 = r109.grdwwt;
            r109 = r111.bind(r117)(r109);
            var82['label'] = r109;
            r109 = 48;
            r109 = r123[r109];
            r109 = r122.bind(var3)(r109);
            r109 = r109.ClockXIcon;
            var82['IconComponent'] = r109;
            r109 = r119.GENERAL;
            var82['section'] = r109;
            r109 = 7;
            var82['sortKey'] = r109;
            var19 = r112.bind(var3)(var82);
            var82 = {};
            r109 = r123[r113];
            r109 = r122.bind(var3)(r109);
            r117 = r109.intl;
            r111 = r117.string;
            r109 = r123[r113];
            r109 = r122.bind(var3)(r109);
            r109 = r109.t;
            r109 = r109.gHp0C4;
            r109 = r111.bind(r117)(r109);
            var82['label'] = r109;
            r109 = 49;
            r109 = r123[r109];
            r109 = r122.bind(var3)(r109);
            r109 = r109.ReactionIcon;
            var82['IconComponent'] = r109;
            r109 = r119.GENERAL;
            var82['section'] = r109;
            r109 = 8;
            var82['sortKey'] = r109;
            var24 = r112.bind(var3)(var82);
            var82 = {};
            r109 = r123[r113];
            r109 = r122.bind(var3)(r109);
            r117 = r109.intl;
            r111 = r117.string;
            r109 = r123[r113];
            r109 = r122.bind(var3)(r109);
            r109 = r109.t;
            r109 = r109.MFGE51;
            r109 = r111.bind(r117)(r109);
            var82['label'] = r109;
            r118 = 50;
            r109 = r123[r118];
            r109 = r122.bind(var3)(r109);
            r109 = r109.AnnouncementsIcon;
            var82['IconComponent'] = r109;
            r109 = r119.GENERAL;
            var82['section'] = r109;
            r109 = 9;
            var82['sortKey'] = r109;
            var82 = r112.bind(var3)(var82);
            var50 = var82;
            var93 = var82;
            var82 = {};
            r109 = r123[r113];
            r109 = r122.bind(var3)(r109);
            r117 = r109.intl;
            r111 = r117.string;
            r109 = r123[r113];
            r109 = r122.bind(var3)(r109);
            r109 = r109.t;
            r109 = r109.CvQ18w;
            r109 = r111.bind(r117)(r109);
            var82['label'] = r109;
            r111 = 51;
            r109 = r123[r111];
            r109 = r122.bind(var3)(r109);
            r109 = r109.PinIcon;
            var82['IconComponent'] = r109;
            r109 = r119.GENERAL;
            var82['section'] = r109;
            r109 = 10;
            var82['sortKey'] = r109;
            var82 = r112.bind(var3)(var82);
            var41 = var82;
            var92 = var82;
            var82 = {};
            r117 = r123[r113];
            r117 = r122.bind(var3)(r117);
            r126 = r117.intl;
            r125 = r126.string;
            r117 = r123[r113];
            r117 = r122.bind(var3)(r117);
            r117 = r117.t;
            r117 = r117.Bse+F/;
            r117 = r125.bind(r126)(r117);
            var82['label'] = r117;
            r117 = r123[r111];
            r117 = r122.bind(var3)(r117);
            r117 = r117.PinIcon;
            var82['IconComponent'] = r117;
            r117 = r119.GENERAL;
            var82['section'] = r117;
            var82['sortKey'] = r109;
            var82 = r112.bind(var3)(var82);
            var46 = var82;
            var91 = var82;
            var82 = {};
            r109 = r123[r113];
            r109 = r122.bind(var3)(r109);
            r125 = r109.intl;
            r117 = r125.string;
            r109 = r123[r113];
            r109 = r122.bind(var3)(r109);
            r109 = r109.t;
            r109 = r109.lE/PG3;
            r109 = r117.bind(r125)(r109);
            var82['label'] = r109;
            r109 = 52;
            r117 = r123[r109];
            r117 = r122.bind(var3)(r117);
            r117 = r117.StampIcon;
            var82['IconComponent'] = r117;
            r117 = r119.GENERAL;
            var82['section'] = r117;
            r117 = 10.5;
            var82['sortKey'] = r117;
            var82 = r112.bind(var3)(var82);
            var39 = var82;
            var90 = var82;
            var82 = {};
            r125 = r123[r113];
            r125 = r122.bind(var3)(r125);
            r127 = r125.intl;
            r126 = r127.string;
            r125 = r123[r113];
            r125 = r122.bind(var3)(r125);
            r125 = r125.t;
            r125 = r125["2km5Gf"];
            r125 = r126.bind(r127)(r125);
            var82['label'] = r125;
            r125 = r123[r109];
            r125 = r122.bind(var3)(r125);
            r125 = r125.StampIcon;
            var82['IconComponent'] = r125;
            r125 = r119.GENERAL;
            var82['section'] = r125;
            var82['sortKey'] = r117;
            var82 = r112.bind(var3)(var82);
            var42 = var82;
            var89 = var82;
            var82 = {};
            r117 = r123[r113];
            r117 = r122.bind(var3)(r117);
            r126 = r117.intl;
            r125 = r126.string;
            r117 = r123[r113];
            r117 = r122.bind(var3)(r117);
            r117 = r117.t;
            r117 = r117.tpxJto;
            r117 = r125.bind(r126)(r117);
            var82['label'] = r117;
            r117 = 53;
            r117 = r123[r117];
            r117 = r122.bind(var3)(r117);
            r117 = r117.NitroWheelIcon;
            var82['IconComponent'] = r117;
            r117 = r119.GENERAL;
            var82['section'] = r117;
            r117 = 11;
            var82['sortKey'] = r117;
            var82 = r112.bind(var3)(var82);
            var66 = var82;
            r102 = var82;
            var82 = {};
            r125 = r123[r113];
            r125 = r122.bind(var3)(r125);
            r127 = r125.intl;
            r126 = r127.string;
            r125 = r123[r113];
            r125 = r122.bind(var3)(r125);
            r125 = r125.t;
            r125 = r125.tpxJto;
            r125 = r126.bind(r127)(r125);
            var82['label'] = r125;
            r125 = 54;
            r125 = r123[r125];
            r125 = r122.bind(var3)(r125);
            r125 = r125.BookmarkOutlineIcon;
            var82['IconComponent'] = r125;
            r125 = r119.GENERAL;
            var82['section'] = r125;
            var82['sortKey'] = r117;
            var82 = r112.bind(var3)(var82);
            var64 = var82;
            r104 = var82;
            var82 = {};
            r125 = r123[r113];
            r125 = r122.bind(var3)(r125);
            r127 = r125.intl;
            r126 = r127.string;
            r125 = r123[r113];
            r125 = r122.bind(var3)(r125);
            r125 = r125.t;
            r125 = r125.SvXS1Z;
            r125 = r126.bind(r127)(r125);
            var82['label'] = r125;
            r125 = 55;
            r125 = r123[r125];
            r125 = r122.bind(var3)(r125);
            r125 = r125.BookmarkIcon;
            var82['IconComponent'] = r125;
            r125 = r119.GENERAL;
            var82['section'] = r125;
            var82['sortKey'] = r117;
            var82 = r112.bind(var3)(var82);
            var62 = var82;
            r103 = var82;
            var82 = {};
            r117 = r123[r113];
            r117 = r122.bind(var3)(r117);
            r126 = r117.intl;
            r125 = r126.string;
            r117 = r123[r113];
            r117 = r122.bind(var3)(r117);
            r117 = r117.t;
            r117 = r117.mJ3P0N;
            r117 = r125.bind(r126)(r117);
            var82['label'] = r117;
            r117 = 56;
            r125 = r123[r117];
            r125 = r122.bind(var3)(r125);
            r125 = r125.ClockIcon;
            var82['IconComponent'] = r125;
            var82['arrow'] = r116;
            r125 = r119.GENERAL;
            var82['section'] = r125;
            var82['sortKey'] = r124;
            var82 = r112.bind(var3)(var82);
            var63 = var82;
            r101 = var82;
            var82 = {};
            r125 = r123[r113];
            r125 = r122.bind(var3)(r125);
            r127 = r125.intl;
            r126 = r127.string;
            r125 = r123[r113];
            r125 = r122.bind(var3)(r125);
            r125 = r125.t;
            r125 = r125.vrbqs1;
            r125 = r126.bind(r127)(r125);
            var82['label'] = r125;
            r125 = r123[r117];
            r125 = r122.bind(var3)(r125);
            r125 = r125.ClockIcon;
            var82['IconComponent'] = r125;
            var82['arrow'] = r116;
            r125 = r119.GENERAL;
            var82['section'] = r125;
            var82['sortKey'] = r124;
            var82 = r112.bind(var3)(var82);
            var60 = var82;
            r100 = var82;
            var82 = {};
            r124 = r123[r113];
            r124 = r122.bind(var3)(r124);
            r126 = r124.intl;
            r125 = r126.string;
            r124 = r123[r113];
            r124 = r122.bind(var3)(r124);
            r124 = r124.t;
            r124 = r124.PHjkRE;
            r124 = r125.bind(r126)(r124);
            var82['label'] = r124;
            r124 = 57;
            r124 = r123[r124];
            r124 = r122.bind(var3)(r124);
            r124 = r124.RobotIcon;
            var82['IconComponent'] = r124;
            var82['arrow'] = r116;
            r124 = r119.GENERAL;
            var82['section'] = r124;
            var82['sortKey'] = r121;
            var82 = r112.bind(var3)(var82);
            var16 = var82;
            var86 = var82;
            var82 = {};
            r121 = r123[r113];
            r121 = r122.bind(var3)(r121);
            r125 = r121.intl;
            r124 = r125.string;
            r121 = r123[r113];
            r121 = r122.bind(var3)(r121);
            r121 = r121.t;
            r121 = r121.g33r/P;
            r121 = r124.bind(r125)(r121);
            var82['label'] = r121;
            r121 = 58;
            r121 = r123[r121];
            r121 = r122.bind(var3)(r121);
            r121 = r121.ChatIcon;
            var82['IconComponent'] = r121;
            r121 = r119.GENERAL;
            var82['section'] = r121;
            r121 = 14;
            var82['sortKey'] = r121;
            var82 = r112.bind(var3)(var82);
            var44 = var82;
            var100 = var82;
            var82 = {};
            r121 = r123[r113];
            r121 = r122.bind(var3)(r121);
            r125 = r121.intl;
            r124 = r125.string;
            r121 = r123[r113];
            r121 = r122.bind(var3)(r121);
            r121 = r121.t;
            r121 = r121.P8tvKG;
            r121 = r124.bind(r125)(r121);
            var82['label'] = r121;
            r121 = 59;
            r121 = r123[r121];
            r121 = r122.bind(var3)(r121);
            r121 = r121.AtIcon;
            var82['IconComponent'] = r121;
            r121 = r119.GENERAL;
            var82['section'] = r121;
            r121 = 15;
            var82['sortKey'] = r121;
            var82 = r112.bind(var3)(var82);
            var48 = var82;
            var87 = var82;
            var82 = {};
            r121 = r123[r113];
            r121 = r122.bind(var3)(r121);
            r125 = r121.intl;
            r124 = r125.string;
            r121 = r123[r113];
            r121 = r122.bind(var3)(r121);
            r121 = r121.t;
            r121 = r121.S/xNKV;
            r121 = r124.bind(r125)(r121);
            var82['label'] = r121;
            r121 = 60;
            r124 = r123[r121];
            r124 = r122.bind(var3)(r124);
            r124 = r124.DownloadIcon;
            var82['IconComponent'] = r124;
            r124 = r119.GENERAL;
            var82['section'] = r124;
            var82['sortKey'] = r115;
            var29 = r112.bind(var3)(var82);
            var82 = {};
            r124 = r123[r113];
            r124 = r122.bind(var3)(r124);
            r126 = r124.intl;
            r125 = r126.string;
            r124 = r123[r113];
            r124 = r122.bind(var3)(r124);
            r124 = r124.t;
            r124 = r124.JVuuz3;
            r124 = r125.bind(r126)(r124);
            var82['label'] = r124;
            r124 = r123[r121];
            r124 = r122.bind(var3)(r124);
            r124 = r124.DownloadIcon;
            var82['IconComponent'] = r124;
            r124 = r119.GENERAL;
            var82['section'] = r124;
            var82['sortKey'] = r115;
            var31 = r112.bind(var3)(var82);
            var82 = {};
            r124 = r123[r113];
            r124 = r122.bind(var3)(r124);
            r126 = r124.intl;
            r125 = r126.string;
            r124 = r123[r113];
            r124 = r122.bind(var3)(r124);
            r124 = r124.t;
            r124 = r124.vbAEaA;
            r124 = r125.bind(r126)(r124);
            var82['label'] = r124;
            r121 = r123[r121];
            r121 = r122.bind(var3)(r121);
            r121 = r121.DownloadIcon;
            var82['IconComponent'] = r121;
            r119 = r119.GENERAL;
            var82['section'] = r119;
            var82['sortKey'] = r115;
            var30 = r112.bind(var3)(var82);
            r110 = false;
case 100: // try_start_0
            var82 = var28;
            r112 = var10 == var82;
            var82 = undefined;
            if(r112) { _fun0004_ip = 101; continue _fun0004 }
case 102:
            r112 = var28;
            var82 = r112.mediaUrl;
case 101:
            r112 = var10 != var82;
            var82 = null;
            if(!r112) { _fun0004_ip = 103; continue _fun0004 }
case 104:
            r112 = global;
            r119 = r112.URL;
            r112 = var28;
            r142 = r112.mediaUrl;
            r115 = r119.prototype;
            r115 = Object.create(r115, {constructor: {value: r119}});
            r143 = r115;
            r112 = new r143[r119](r142, r141);
            var82 = r112 instanceof Object ? r112 : r115;
case 103:
            r107 = var82;
            r119 = var28;
            r119 = var10 == r119;
            r121 = undefined;
            if(r119) { _fun0004_ip = 105; continue _fun0004 }
case 106:
            r119 = var28;
            r121 = r119.mediaType;
case 105:
            r119 = 'image';
            r119 = r119 === r121;
            r115 = r119;
            if(!r119) { _fun0004_ip = 107; continue _fun0004 }
case 108:
            r119 = r107;
            r115 = var10 != r119;
case 107:
            r112 = r115;
            if(!r115) { _fun0004_ip = 109; continue _fun0004 }
case 110:
            r115 = r107;
            r119 = r115.hostname;
            r115 = 'cdn.discordapp.com';
            r112 = r115 === r119;
case 109:
            var82 = r112;
            if(!r112) { _fun0004_ip = 111; continue _fun0004 }
case 112:
            r115 = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i;
            r112 = r115.test;
            r107 = r107.pathname;
            var82 = r112.bind(r115)(r107);
case 111:
            r110 = var82;
case 113: // try_end0
            _fun0004_ip = 114; continue _fun0004;
case 115: // catch_target0
            CatchBlockStart(arg_register=81);
case 114:
            r107 = var2;
            var82 = {};
            r115 = _closure1_slot0;
            r112 = _closure1_slot2;
            r112 = r112[r113];
            r112 = r115.bind(var3)(r112);
            r115 = r112.intl;
            r112 = r115.string;
            r121 = _closure1_slot0;
            r119 = _closure1_slot2;
            r119 = r119[r113];
            r119 = r121.bind(var3)(r119);
            r119 = r119.t;
            if(r110) { _fun0004_ip = 116; continue _fun0004 }
case 117:
            r110 = r119["92CPQ+"];
            _fun0004_ip = 118; continue _fun0004;
case 116:
            r110 = r119["8xHmxo"];
case 118:
            r110 = r112.bind(r115)(r110);
            var82['label'] = r110;
            r112 = _closure1_slot0;
            r115 = _closure1_slot2;
            r119 = 42;
            r110 = r115[r119];
            r110 = r112.bind(var3)(r110);
            r110 = r110.LinkIcon;
            var82['IconComponent'] = r110;
            r110 = _closure1_slot25;
            r121 = r110.GENERAL;
            var82['section'] = r121;
            var82['sortKey'] = r120;
            var32 = r107.bind(var3)(var82);
            r107 = var2;
            var82 = {};
            r120 = r115[r113];
            r120 = r112.bind(var3)(r120);
            r122 = r120.intl;
            r121 = r122.string;
            r120 = r115[r113];
            r120 = r112.bind(var3)(r120);
            r120 = r120.t;
            r120 = r120.Xrt5Po;
            r120 = r121.bind(r122)(r120);
            var82['label'] = r120;
            r119 = r115[r119];
            r119 = r112.bind(var3)(r119);
            r119 = r119.LinkIcon;
            var82['IconComponent'] = r119;
            r119 = r110.GENERAL;
            var82['section'] = r119;
            var82['sortKey'] = r118;
            var82 = r107.bind(var3)(var82);
            var76 = var82;
            var83 = var82;
            var82 = {};
            r118 = r115[r113];
            r118 = r112.bind(var3)(r118);
            r120 = r118.intl;
            r119 = r120.string;
            r118 = r115[r113];
            r118 = r112.bind(var3)(r118);
            r118 = r118.t;
            r118 = r118.Rjezbz;
            r118 = r119.bind(r120)(r118);
            var82['label'] = r118;
            r117 = r115[r117];
            r117 = r112.bind(var3)(r117);
            r117 = r117.ClockIcon;
            var82['IconComponent'] = r117;
            var82['arrow'] = r116;
            r116 = r110.GENERAL;
            var82['section'] = r116;
            var82['sortKey'] = r111;
            var14 = r107.bind(var3)(var82);
            var82 = {};
            r111 = r115[r113];
            r111 = r112.bind(var3)(r111);
            r117 = r111.intl;
            r116 = r117.string;
            r111 = r115[r113];
            r111 = r112.bind(var3)(r111);
            r111 = r111.t;
            r111 = r111.zBoHlf;
            r111 = r116.bind(r117)(r111);
            var82['label'] = r111;
            r111 = 61;
            r111 = r115[r111];
            r111 = r112.bind(var3)(r111);
            r111 = r111.IdIcon;
            var82['IconComponent'] = r111;
            r110 = r110.GENERAL;
            var82['section'] = r110;
            var82['sortKey'] = r109;
            var74 = r107.bind(var3)(var82);
            var82 = {};
            if(!(!(r108 > var13))) { _fun0004_ip = 119; continue _fun0004 }
case 120:
            r111 = _closure1_slot0;
            r108 = _closure1_slot2;
            r109 = r108[r113];
            r109 = r111.bind(var3)(r109);
            r110 = r109.intl;
            r109 = r110.string;
            r108 = r108[r113];
            r108 = r111.bind(var3)(r108);
            r108 = r108.t;
            r108 = r108["4sxKOb"];
            r108 = r109.bind(r110)(r108);
            _fun0004_ip = 121; continue _fun0004;
case 119:
            r112 = _closure1_slot0;
            r109 = _closure1_slot2;
            r110 = r109[r113];
            r110 = r112.bind(var3)(r110);
            r111 = r110.intl;
            r110 = r111.string;
            r109 = r109[r113];
            r109 = r112.bind(var3)(r109);
            r109 = r109.t;
            r109 = r109.wUIMqa;
            r108 = r110.bind(r111)(r109);
case 121:
            var82['label'] = r108;
            r111 = _closure1_slot0;
            r112 = _closure1_slot2;
            r108 = 62;
            r108 = r112[r108];
            r108 = r111.bind(var3)(r108);
            r108 = r108.XSmallBoldIcon;
            var82['IconComponent'] = r108;
            r109 = 'danger';
            var82['variant'] = r109;
            r108 = _closure1_slot25;
            r110 = r108.DESTRUCTIVE;
            var82['section'] = r110;
            r110 = 98;
            var82['sortKey'] = r110;
            var82 = r107.bind(var3)(var82);
            var58 = var82;
            var96 = var82;
            r107 = var2;
            var82 = {};
            r110 = r112[r113];
            r110 = r111.bind(var3)(r110);
            r116 = r110.intl;
            r115 = r116.string;
            r110 = r112[r113];
            r110 = r111.bind(var3)(r110);
            r110 = r110.t;
            r110 = r110.ZbtGBm;
            r110 = r115.bind(r116)(r110);
            var82['label'] = r110;
            r110 = 41;
            r115 = r112[r110];
            r115 = r111.bind(var3)(r115);
            r115 = r115.TrashIcon;
            var82['IconComponent'] = r115;
            var82['variant'] = r109;
            r115 = r108.DESTRUCTIVE;
            var82['section'] = r115;
            r115 = 99;
            var82['sortKey'] = r115;
            var82 = r107.bind(var3)(var82);
            var22 = var82;
            var45 = var82;
            var82 = {};
            r115 = r112[r113];
            r115 = r111.bind(var3)(r115);
            r117 = r115.intl;
            r116 = r117.string;
            r115 = r112[r113];
            r115 = r111.bind(var3)(r115);
            r115 = r115.t;
            r115 = r115.kFwAsa;
            r115 = r116.bind(r117)(r115);
            var82['label'] = r115;
            r115 = r112[r110];
            r115 = r111.bind(var3)(r115);
            r115 = r115.TrashIcon;
            var82['IconComponent'] = r115;
            var82['variant'] = r109;
            r115 = r108.DESTRUCTIVE;
            var82['section'] = r115;
            r115 = 100;
            var82['sortKey'] = r115;
            var82 = r107.bind(var3)(var82);
            var25 = var82;
            var95 = var82;
            var82 = {};
            r115 = r112[r113];
            r115 = r111.bind(var3)(r115);
            r117 = r115.intl;
            r116 = r117.string;
            r115 = r112[r113];
            r115 = r111.bind(var3)(r115);
            r115 = r115.t;
            r115 = r115["+78Pfm"];
            r115 = r116.bind(r117)(r115);
            var82['label'] = r115;
            r115 = 63;
            r116 = r112[r115];
            r116 = r111.bind(var3)(r116);
            r116 = r116.FlagIcon;
            var82['IconComponent'] = r116;
            var82['variant'] = r109;
            r116 = r108.DESTRUCTIVE;
            var82['section'] = r116;
            r116 = 101;
            var82['sortKey'] = r116;
            var82 = r107.bind(var3)(var82);
            var72 = var82;
            var81 = var82;
            var82 = {};
            r117 = r112[r113];
            r117 = r111.bind(var3)(r117);
            r119 = r117.intl;
            r118 = r119.string;
            r117 = r112[r113];
            r117 = r111.bind(var3)(r117);
            r117 = r117.t;
            r117 = r117.n5EBAJ;
            r117 = r118.bind(r119)(r117);
            var82['label'] = r117;
            var82['variant'] = r109;
            r117 = 64;
            r117 = r112[r117];
            r117 = r111.bind(var3)(r117);
            r117 = r117.ClydeIcon;
            var82['IconComponent'] = r117;
            r117 = r108.DESTRUCTIVE;
            var82['section'] = r117;
            var82['sortKey'] = r116;
            var82 = r107.bind(var3)(var82);
            var71 = var82;
            var80 = var82;
            var82 = {};
            r116 = r112[r113];
            r116 = r111.bind(var3)(r116);
            r118 = r116.intl;
            r117 = r118.string;
            r119 = _closure1_slot1;
            r116 = 65;
            r116 = r112[r116];
            r116 = r119.bind(var3)(r116);
            r116 = r116["1D+vqy"];
            r116 = r117.bind(r118)(r116);
            var82['label'] = r116;
            r115 = r112[r115];
            r115 = r111.bind(var3)(r115);
            r115 = r115.FlagIcon;
            var82['IconComponent'] = r115;
            r115 = r108.DESTRUCTIVE;
            var82['section'] = r115;
            r115 = 102;
            var82['sortKey'] = r115;
            var82['disabled'] = r114;
            var82 = r107.bind(var3)(var82);
            var70 = var82;
            var11 = var82;
            var82 = {};
            r114 = r112[r113];
            r114 = r111.bind(var3)(r114);
            r116 = r114.intl;
            r115 = r116.string;
            r114 = r112[r113];
            r114 = r111.bind(var3)(r114);
            r114 = r114.t;
            r114 = r114.ZH7P2h;
            r114 = r115.bind(r116)(r114);
            var82['label'] = r114;
            r114 = 66;
            r114 = r112[r114];
            r114 = r111.bind(var3)(r114);
            r114 = r114.ImageWarningIcon;
            var82['IconComponent'] = r114;
            r114 = r108.DESTRUCTIVE;
            var82['section'] = r114;
            r114 = 103;
            var82['sortKey'] = r114;
            var26 = r107.bind(var3)(var82);
            var82 = {};
            r114 = r112[r113];
            r114 = r111.bind(var3)(r114);
            r115 = r114.intl;
            r114 = r115.string;
            r113 = r112[r113];
            r113 = r111.bind(var3)(r113);
            r113 = r113.t;
            r113 = r113.xwMqD7;
            r113 = r114.bind(r115)(r113);
            var82['label'] = r113;
            r110 = r112[r110];
            r110 = r111.bind(var3)(r110);
            r110 = r110.TrashIcon;
            var82['IconComponent'] = r110;
            var82['variant'] = r109;
            r108 = r108.DESTRUCTIVE;
            var82['section'] = r108;
            r108 = 110;
            var82['sortKey'] = r108;
            var82 = r107.bind(var3)(var82);
            var56 = var82;
            var94 = var82;
            var82 = new Array(0);
            r107 = r106;
            r106 = 'Preview';
            r106 = r106 === r107;
            if(r106) { _fun0004_ip = 122; continue _fun0004 }
case 123:
            r108 = _closure1_slot0;
            r109 = _closure1_slot2;
            r107 = 28;
            r107 = r109[r107];
            r110 = r108.bind(var3)(r107);
            r109 = r110.hasFlag;
            r107 = var85;
            r108 = r107.flags;
            r107 = _closure1_slot19;
            r107 = r107.EPHEMERAL;
            r106 = r109.bind(r110)(r108, r107);
case 122:
            if(!r106) { _fun0004_ip = 124; continue _fun0004 }
case 125:
            r114 = var82.push;
            r142 = r105;
            r141 = var88;
            r140 = r104;
            r139 = r103;
            r138 = r102;
            r137 = r101;
            r136 = r100;
            r135 = var96;
            r134 = var94;
            r133 = var98;
            r132 = var87;
            r131 = var100;
            r130 = var97;
            r129 = var86;
            r128 = var45;
            r143 = var82;
            var100 = r143[r114](r142, r141, r140, r139, r138, r137, r136, r135, r134, r133, r132, r131, r130, r129, r128, r127);
case 124:
            if(!var99) { _fun0004_ip = 126; continue _fun0004 }
case 127:
            r100 = _closure1_slot0;
            r101 = _closure1_slot2;
            var100 = 28;
            var100 = r101[var100];
            r102 = r100.bind(var3)(var100);
            r101 = r102.hasFlag;
            var100 = var85;
            r100 = var100.flags;
            var100 = _closure1_slot19;
            var100 = var100.EPHEMERAL;
            var100 = r101.bind(r102)(r100, var100);
            var99 = !var100;
case 126:
            if(var99) { _fun0004_ip = 128; continue _fun0004 }
case 129:
            var99 = var82.push;
            r142 = var98;
            r141 = var97;
            r140 = var96;
            r139 = var95;
            r138 = var94;
            r137 = var93;
            r136 = var92;
            r135 = var91;
            r134 = var90;
            r133 = var89;
            r132 = var88;
            r131 = var87;
            r130 = var86;
            r129 = var45;
            r143 = var82;
            var45 = r143[var99](r142, r141, r140, r139, r138, r137, r136, r135, r134, r133, r132, r131, r130, r129, r128);
case 128:
            var87 = _closure1_slot0;
            var86 = _closure1_slot2;
            var45 = 28;
            var86 = var86[var45];
            var88 = var87.bind(var3)(var86);
            var87 = var88.hasFlag;
            var86 = var85.flags;
            var85 = _closure1_slot19;
            var85 = var85.EPHEMERAL;
            var85 = var87.bind(var88)(var86, var85);
            if(!var85) { _fun0004_ip = 130; continue _fun0004 }
case 131:
            var85 = var82.push;
            r142 = var84;
            r141 = var83;
            r140 = var81;
            r139 = var80;
            r138 = var11;
            r143 = var82;
            var11 = r143[var85](r142, r141, r140, r139, r138, r137);
case 130:
            var11 = global;
            var80 = var11.Set;
            var81 = var80.prototype;
            var81 = Object.create(var81, {constructor: {value: var80}});
            r143 = var81;
            r142 = var82;
            var80 = new r143[var80](r142, r141);
            var80 = var80 instanceof Object ? var80 : var81;
            var _closure2_slot11 = var80;
            var12 = new Array(0);
            if(var79) { _fun0004_ip = 132; continue _fun0004 }
case 133:
            var81 = var15;
            var80 = var81.hasFlag;
            var79 = _closure1_slot19;
            var79 = var79.HAS_THREAD;
            var79 = var80.bind(var81)(var79);
            if(!var79) { _fun0004_ip = 134; continue _fun0004 }
case 135:
            var80 = var12;
            var79 = var80.unshift;
            var78 = var79.bind(var80)(var78);
            _fun0004_ip = 134; continue _fun0004;
case 132:
            var79 = var12;
            var78 = var79.unshift;
            var77 = var78.bind(var79)(var77);
case 134:
            var78 = var12;
            var77 = var78.unshift;
            var76 = var77.bind(var78)(var76);
            if(!var75) { _fun0004_ip = 136; continue _fun0004 }
case 137:
            var76 = var12;
            var75 = var76.unshift;
            var74 = var75.bind(var76)(var74);
case 136:
            if(!var73) { _fun0004_ip = 138; continue _fun0004 }
case 139:
            var74 = _closure1_slot0;
            var75 = _closure1_slot2;
            var73 = 67;
            var73 = var75[var73];
            var75 = var74.bind(var3)(var73);
            var74 = var75.canReportMessageToMods;
            var73 = var15;
            var73 = var74.bind(var75)(var73);
            if(var73) { _fun0004_ip = 140; continue _fun0004 }
case 138:
            var75 = var49;
            var75 = var10 != var75;
            var74 = var75;
            if(!var75) { _fun0004_ip = 141; continue _fun0004 }
case 142:
            var76 = _closure1_slot0;
            var77 = _closure1_slot2;
            var75 = 68;
            var75 = var77[var75];
            var77 = var76.bind(var3)(var75);
            var76 = var77.canReportUser;
            var75 = var49;
            var74 = var76.bind(var77)(var75);
case 141:
            var73 = var74;
            if(!var74) { _fun0004_ip = 143; continue _fun0004 }
case 144:
            var75 = _closure1_slot0;
            var76 = _closure1_slot2;
            var74 = 68;
            var74 = var76[var74];
            var76 = var75.bind(var3)(var74);
            var75 = var76.canReportMessage;
            var74 = var15;
            var73 = var75.bind(var76)(var74);
case 143:
            if(!var73) { _fun0004_ip = 145; continue _fun0004 }
case 146:
            var74 = var12;
            var73 = var74.unshift;
            var72 = var73.bind(var74)(var72);
            _fun0004_ip = 145; continue _fun0004;
case 140:
            var72 = var12;
            var73 = var72.unshift;
            var71 = var73.bind(var72)(var71);
            var71 = var72.unshift;
            var70 = var71.bind(var72)(var70);
case 145:
            var71 = var12;
            var70 = var71.unshift;
            var69 = var70.bind(var71)(var69);
            if(!var68) { _fun0004_ip = 147; continue _fun0004 }
case 148:
            if(!var67) { _fun0004_ip = 149; continue _fun0004 }
case 150:
            var67 = var65;
            if(var67) { _fun0004_ip = 149; continue _fun0004 }
case 151:
            var67 = var61;
            if(var67) { _fun0004_ip = 149; continue _fun0004 }
case 152:
            var68 = var12;
            var67 = var68.unshift;
            var66 = var67.bind(var68)(var66);
            _fun0004_ip = 147; continue _fun0004;
case 149:
            if(var65) { _fun0004_ip = 153; continue _fun0004 }
case 154:
            var65 = var61;
            if(var65) { _fun0004_ip = 153; continue _fun0004 }
case 155:
            var66 = var12;
            var65 = var66.unshift;
            var64 = var65.bind(var66)(var64);
            _fun0004_ip = 156; continue _fun0004;
case 153:
            var65 = var12;
            var64 = var65.unshift;
            var62 = var64.bind(var65)(var62);
case 156:
            var64 = var61;
            var62 = var12;
            var61 = var62.unshift;
            if(var64) { _fun0004_ip = 157; continue _fun0004 }
case 158:
            var63 = var61.bind(var62)(var63);
            _fun0004_ip = 147; continue _fun0004;
case 157:
            var60 = var61.bind(var62)(var60);
case 147:
            if(!var59) { _fun0004_ip = 159; continue _fun0004 }
case 160:
            var60 = var12;
            var59 = var60.unshift;
            var58 = var59.bind(var60)(var58);
case 159:
            var60 = var23;
            var60 = !var60;
            var59 = var60;
            if(!var60) { _fun0004_ip = 161; continue _fun0004 }
case 162:
            var62 = var15;
            var61 = var62.canDeleteOwnMessage;
            var60 = var47;
            var60 = var61.bind(var62)(var60);
            var59 = !var60;
case 161:
            var58 = var59;
            if(var59) { _fun0004_ip = 163; continue _fun0004 }
case 164:
            var59 = _closure1_slot22;
            var61 = var59.UNDELETABLE;
            var60 = var61.has;
            var59 = var15;
            var59 = var59.type;
            var58 = var60.bind(var61)(var59);
case 163:
            if(var58) { _fun0004_ip = 165; continue _fun0004 }
case 166:
            var59 = var12;
            var58 = var59.unshift;
            var56 = var58.bind(var59)(var56);
case 165:
            var59 = _closure1_slot1;
            var60 = _closure1_slot2;
            var58 = 69;
            var58 = var60[var58];
            var60 = var59.bind(var3)(var58);
            var59 = var15;
            var58 = var47;
            var58 = var60.bind(var3)(var59, var58);
            var56 = var58;
            if(!var58) { _fun0004_ip = 167; continue _fun0004 }
case 168:
            var56 = !var57;
case 167:
            if(!var56) { _fun0004_ip = 169; continue _fun0004 }
case 170:
            var57 = var12;
            var56 = var57.unshift;
            var55 = var56.bind(var57)(var55);
case 169:
            if(!var54) { _fun0004_ip = 171; continue _fun0004 }
case 172:
            var55 = var12;
            var54 = var55.unshift;
            var50 = var54.bind(var55)(var50);
case 171:
            var56 = var52;
            var54 = var56.type;
            var50 = _closure1_slot15;
            var50 = var50.GROUP_DM;
            var51 = var54 === var50;
            var55 = var56.isPrivate;
            var55 = var55.bind(var56)();
            var54 = var55;
            if(!var55) { _fun0004_ip = 173; continue _fun0004 }
case 174:
            var55 = var51;
            var54 = !var55;
case 173:
            var50 = var54;
            if(var54) { _fun0004_ip = 175; continue _fun0004 }
case 176:
            var50 = var53;
case 175:
            if(var50) { _fun0004_ip = 177; continue _fun0004 }
case 178:
            var55 = _closure1_slot11;
            var54 = var55.can;
            var53 = _closure1_slot23;
            var53 = var53.SEND_MESSAGES;
            var52 = var54.bind(var55)(var53, var52);
            var50 = var52;
            if(var52) { _fun0004_ip = 179; continue _fun0004 }
case 180:
            var50 = var51;
case 179:
            if(!var50) { _fun0004_ip = 181; continue _fun0004 }
case 182:
            var51 = var12;
            var50 = var51.unshift;
            var48 = var50.bind(var51)(var48);
case 181:
            var48 = var47;
            var47 = var49;
            var50 = var10 == var47;
            var47 = undefined;
            if(var50) { _fun0004_ip = 183; continue _fun0004 }
case 184:
            var47 = var49.id;
case 183:
            if(!(var48 !== var47)) { _fun0004_ip = 177; continue _fun0004 }
case 185:
            var48 = var12;
            var47 = var48.unshift;
            var44 = var47.bind(var48)(var44);
case 177:
            if(!var43) { _fun0004_ip = 186; continue _fun0004 }
case 187:
            var44 = var12;
            var43 = var44.unshift;
            var47 = var15;
            var47 = var47.pinned;
            if(var47) { _fun0004_ip = 188; continue _fun0004 }
case 189:
            _fun0004_ip = 190; continue _fun0004;
case 188:
            var41 = var46;
case 190:
            var41 = var43.bind(var44)(var41);
case 186:
            if(!var40) { _fun0004_ip = 191; continue _fun0004 }
case 192:
            var41 = var12;
            var40 = var41.unshift;
            var44 = _closure1_slot0;
            var43 = _closure1_slot2;
            var43 = var43[var45];
            var46 = var44.bind(var3)(var43);
            var45 = var46.hasFlag;
            var43 = var15;
            var44 = var43.flags;
            var43 = _closure1_slot19;
            var43 = var43.IS_GUILD_OFFICIAL;
            var43 = var45.bind(var46)(var44, var43);
            if(var43) { _fun0004_ip = 193; continue _fun0004 }
case 194:
            _fun0004_ip = 195; continue _fun0004;
case 193:
            var39 = var42;
case 195:
            var39 = var40.bind(var41)(var39);
case 191:
            var40 = var6;
            var40 = var10 != var40;
            var39 = var40;
            if(!var40) { _fun0004_ip = 196; continue _fun0004 }
case 197:
            var40 = var6;
            var40 = var40.length;
            var39 = var40 > var8;
case 196:
            if(!var39) { _fun0004_ip = 198; continue _fun0004 }
case 199:
            var40 = var12;
            var39 = var40.unshift;
            var38 = var39.bind(var40)(var38);
case 198:
            if(!var37) { _fun0004_ip = 200; continue _fun0004 }
case 201:
            var38 = var12;
            var37 = var38.unshift;
            var36 = var37.bind(var38)(var36);
case 200:
            if(!var35) { _fun0004_ip = 202; continue _fun0004 }
case 203:
            var36 = var12;
            var35 = var36.unshift;
            var33 = var35.bind(var36)(var33);
case 202:
            var35 = var28;
            var35 = var10 == var35;
            var33 = var35;
            if(var35) { _fun0004_ip = 204; continue _fun0004 }
case 205:
            var33 = var34;
case 204:
            if(var33) { _fun0004_ip = 206; continue _fun0004 }
case 207:
            var34 = var12;
            var33 = var34.unshift;
            var32 = var33.bind(var34)(var32);
            var32 = var28;
            var33 = var32.mediaType;
            var32 = 'image';
            if(!(var32 !== var33)) { _fun0004_ip = 208; continue _fun0004 }
case 209:
            var32 = var28;
            var33 = var32.mediaType;
            var32 = 'video';
            if(!(var32 === var33)) { _fun0004_ip = 210; continue _fun0004 }
case 211:
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var32 = 70;
            var32 = var34[var32];
            var34 = var33.bind(var3)(var32);
            var33 = var34.isWebPlayerVideoUrl;
            var32 = var28;
            var32 = var32.mediaUrl;
            var32 = var33.bind(var34)(var32);
            if(var32) { _fun0004_ip = 210; continue _fun0004 }
case 212:
            var33 = var12;
            var32 = var33.unshift;
            var31 = var32.bind(var33)(var31);
            _fun0004_ip = 213; continue _fun0004;
case 210:
            var32 = var28;
            var33 = var32.mediaType;
            var32 = 'audio';
            var32 = var32 !== var33;
            var31 = var32;
            if(!var32) { _fun0004_ip = 214; continue _fun0004 }
case 215:
            var32 = var28;
            var33 = var32.mediaType;
            var32 = 'file';
            var31 = var32 !== var33;
case 214:
            if(var31) { _fun0004_ip = 213; continue _fun0004 }
case 216:
            var32 = var12;
            var31 = var32.unshift;
            var30 = var31.bind(var32)(var30);
            _fun0004_ip = 213; continue _fun0004;
case 208:
            var31 = var12;
            var30 = var31.unshift;
            var29 = var30.bind(var31)(var29);
case 213:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var29 = 71;
            var29 = var31[var29];
            var31 = var30.bind(var3)(var29);
            var30 = var31.messageHasObscurableMedia;
            var29 = var15;
            var29 = var30.bind(var31)(var29);
            if(!var29) { _fun0004_ip = 217; continue _fun0004 }
case 218:
            var30 = var12;
            var29 = var30.unshift;
            var26 = var29.bind(var30)(var26);
case 217:
            var29 = var28.sourceType;
            var28 = 'attachment';
            var28 = var28 === var29;
            var26 = var28;
            if(!var28) { _fun0004_ip = 219; continue _fun0004 }
case 220:
            var26 = var27;
case 219:
            if(!var26) { _fun0004_ip = 206; continue _fun0004 }
case 221:
            var27 = var12;
            var26 = var27.unshift;
            var25 = var26.bind(var27)(var25);
case 206:
            var26 = var15;
            var26 = var26.reactions;
            var26 = var26.length;
            var26 = var26 > var8;
            var25 = var26;
            if(!var26) { _fun0004_ip = 222; continue _fun0004 }
case 223:
            var28 = var15;
            var27 = var28.isPoll;
            var27 = var27.bind(var28)();
            var27 = !var27;
            var26 = var27;
            if(var27) { _fun0004_ip = 224; continue _fun0004 }
case 225:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var27 = 72;
            var27 = var29[var27];
            var29 = var28.bind(var3)(var27);
            var28 = var29.hasNonVoteReactions;
            var27 = var15;
            var26 = var28.bind(var29)(var27);
case 224:
            var25 = var26;
case 222:
            if(!var25) { _fun0004_ip = 226; continue _fun0004 }
case 227:
            var26 = var12;
            var25 = var26.unshift;
            var24 = var25.bind(var26)(var24);
            if(!var23) { _fun0004_ip = 226; continue _fun0004 }
case 228:
            var24 = var12;
            var23 = var24.unshift;
            var22 = var23.bind(var24)(var22);
case 226:
            var22 = _closure1_slot26;
            var17 = var22.bind(var3)(var17);
            var21 = var17;
            var17 = var17.bind(var3)();
            var20 = var17;
            var17 = var17.done;
            if(var17) { _fun0004_ip = 229; continue _fun0004 }
case 230:
            var17 = var20;
            var22 = var17.value;
            var23 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var18];
            var17 = var23.bind(var3)(var17);
            var17 = var17.PollMessageContextItemTypes;
            var17 = var17.END_EARLY;
            if(!(var22 === var17)) { _fun0004_ip = 231; continue _fun0004 }
case 232:
            var23 = var12;
            var22 = var23.unshift;
            var17 = var19;
            var17 = var22.bind(var23)(var17);
case 231:
            var17 = var21;
            var17 = var17.bind(var3)();
            var20 = var17;
            var17 = var17.done;
            if(!var17) { _fun0004_ip = 230; continue _fun0004 }
case 229:
            var18 = var12;
            var17 = var18.unshift;
            var16 = var17.bind(var18)(var16);
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var16 = 73;
            var16 = var18[var16];
            var17 = var17.bind(var3)(var16);
            var16 = var17.canViewInteractionInfo;
            var15 = var16.bind(var17)(var15);
            if(!var15) { _fun0004_ip = 233; continue _fun0004 }
case 234:
            var16 = var12;
            var15 = var16.unshift;
            var14 = var15.bind(var16)(var14);
case 233:
            var15 = var12;
            var14 = var15.filter;
            var12 = function(arg1) {
                var3 = _closure2_slot11;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var15 = var14.bind(var15)(var12);
            var14 = var15.sort;
            var12 = function(arg1, arg2) {
                var1 = arg1;
                var2 = var1.sortKey;
                var1 = arg2;
                var1 = var1.sortKey;
                var1 = var2 - var1;
                return var1;
            };
            var16 = var14.bind(var15)(var12);
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = 74;
            var12 = var15[var12];
            var15 = var14.bind(var3)(var12);
            var14 = var15.groupBy;
            var12 = 'section';
            var14 = var14.bind(var15)(var16, var12);
            var12 = var11.Object;
            var11 = var12.values;
            var12 = var11.bind(var12)(var14);
            var11 = var12.map;
            var4 = function(arg1) {
                var3 = arg1;
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var11.bind(var12)(var4);
            var4 = var1;
            var4 = var4.bind(var3)(var11);
            return var4;
case 98:
            var11 = var1;
            var12 = var2;
            var4 = {};
            var14 = _closure1_slot25;
            var14 = var14.PRIMARY;
            var4['section'] = var14;
            var4['sortKey'] = var13;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 38;
            var17 = var16[var14];
            var17 = var15.bind(var3)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var14 = var16[var14];
            var14 = var15.bind(var3)(var14);
            var14 = var14.t;
            var14 = var14.k5WiPf;
            var14 = var17.bind(var18)(var14);
            var4['label'] = var14;
            var14 = 42;
            var14 = var16[var14];
            var14 = var15.bind(var3)(var14);
            var14 = var14.LinkIcon;
            var4['IconComponent'] = var14;
            var4 = var12.bind(var3)(var4);
            var12 = new Array(1);
            var12[0] = var4;
            var4 = new Array(1);
            var4[0] = var12;
            var4 = var11.bind(var3)(var4);
            return var4;
case 96:
            var4 = new Array(0);
            if(!var5) { _fun0004_ip = 235; continue _fun0004 }
case 236:
            var11 = var4.push;
            var12 = var2;
            var5 = {};
            var14 = _closure1_slot25;
            var14 = var14.PRIMARY;
            var5['section'] = var14;
            var5['sortKey'] = var13;
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
            var13 = var13["5911Lb"];
            var13 = var16.bind(var17)(var13);
            var5['label'] = var13;
            var13 = 39;
            var13 = var15[var13];
            var13 = var14.bind(var3)(var13);
            var13 = var13.RetryIcon;
            var5['IconComponent'] = var13;
            var5 = var12.bind(var3)(var5);
            var5 = var11.bind(var4)(var5);
case 235:
            var5 = var6;
            var5 = var10 != var5;
            if(!var5) { _fun0004_ip = 237; continue _fun0004 }
case 238:
            var6 = var6.length;
            var5 = var6 > var8;
case 237:
            if(!var5) { _fun0004_ip = 239; continue _fun0004 }
case 240:
            var6 = var4.push;
            var8 = var2;
            var5 = {};
            var10 = _closure1_slot25;
            var10 = var10.PRIMARY;
            var5['section'] = var10;
            var5['sortKey'] = var9;
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
case 239:
            var5 = var4.push;
            var6 = var2;
            var2 = {};
            var8 = _closure1_slot25;
            var8 = var8.PRIMARY;
            var2['section'] = var8;
            var8 = 3;
            var2['sortKey'] = var8;
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
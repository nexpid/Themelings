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
            var2 = var3.@@iterator;
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
    var4 = 76;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/long_press/LongPressMessageActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function LongPressMessageActionSheet(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var28 = 12;
            var5 = var2[var28];
            var3 = undefined;
            var5 = var6.bind(var3)(var5);
            var16 = 13;
            var2 = var2[var16];
            var2 = var6.bind(var3)(var2);
            var2 = var2.MESSAGE_LONG_PRESS_MENU;
            var2 = var5.bind(var3)(var2);
            var2 = var2.analyticsLocations;
            var _closure2_slot1 = var2;
            var2 = var1.analyticsLocation;
            if(!(var3 === var2)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var2 = {};
case 36:
            var _closure2_slot2 = var2;
            var48 = var1.user;
            var17 = var1.message;
            var _closure2_slot3 = var17;
            var53 = var1.channel;
            var _closure2_slot4 = var53;
            var5 = var1.chatInputRef;
            var _closure2_slot5 = var5;
            var22 = var1.selectedMedia;
            var _closure2_slot6 = var22;
            var5 = var1.actionSheetSource;
            var78 = undefined;
            if(!(var3 !== var5)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var78 = var5;
case 38:
            var _closure2_slot7 = var78;
            var6 = var1.canAddNewReactions;
            var5 = var3 !== var6;
            if(!var5) { _fun0004_ip = 40; continue _fun0004 }
case 15:
            var5 = var6;
case 40:
            var _closure2_slot8 = var5;
            var6 = _closure1_slot4;
            var8 = var6.useEffect;
            var5 = new Array(2);
            var5[0] = var2;
            var5[1] = var53;
            var2 = function() {
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
                    if(var8) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var8 = var9.GUILD_CHANNEL;
                    _fun0005_ip = 43; continue _fun0005;
case 41:
                    var8 = var9.DM_CHANNEL;
case 43:
                    var6['page'] = var8;
                    var11 = _closure2_slot2;
                    var12 = var6;
                    var7 = copyDataProperties(var12, var11);
                    var2['location'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var2 = var8.bind(var6)(var2, var5);
            var5 = var6.useCallback;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
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
            var1 = var5.bind(var6)(var1, var2);
            var _closure2_slot9 = var1;
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var35 = 16;
            var1 = var6[var35];
            var2 = var10.bind(var3)(var1);
            var1 = var2.useCanReplyToMessage;
            var39 = var1.bind(var2)(var53, var17);
            var36 = 17;
            var1 = var6[var36];
            var2 = var10.bind(var3)(var1);
            var1 = var2.useCanForwardMessage;
            var33 = var1.bind(var2)(var17);
            var5 = _closure1_slot10;
            var2 = var5.getGuild;
            var1 = var53.guild_id;
            var15 = var2.bind(var5)(var1);
            var5 = _closure1_slot1;
            var1 = 18;
            var1 = var6[var1];
            var8 = var5.bind(var3)(var1);
            var2 = var8.useExperiment;
            var1 = {};
            var9 = 'LongPressMessageActionSheet';
            var1['location'] = var9;
            var1 = var2.bind(var8)(var1);
            var66 = var1.enabled;
            var2 = 19;
            var1 = var6[var2];
            var11 = var10.bind(var3)(var1);
            var9 = var11.useStateFromStoresArray;
            var1 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
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
            var9 = var9.bind(var11)(var8, var1);
            var1 = _closure1_slot3;
            var8 = 2;
            var1 = var1.bind(var3)(var9, var8);
            var9 = 0;
            var61 = var1[var9];
            var12 = 1;
            var58 = var1[var12];
            var1 = 20;
            var1 = var6[var1];
            var1 = var5.bind(var3)(var1);
            var1 = var1.bind(var3)();
            var64 = !var1;
            var19 = 21;
            var1 = var6[var19];
            var10 = var10.bind(var3)(var1);
            var1 = var10.useIsNonModInLockedThread;
            var55 = var1.bind(var10)(var53);
            var1 = 22;
            var1 = var6[var1];
            var6 = var5.bind(var3)(var1);
            var1 = null;
            var10 = var1 == var53;
            var5 = undefined;
            if(var10) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var5 = var53.id;
case 44:
            var37 = var6.bind(var3)(var5);
            var10 = _closure1_slot5;
            var6 = var10.getMessage;
            var5 = var17.id;
            var5 = var6.bind(var10)(var5);
            var20 = var1 != var5;
            var14 = var17.interactionError;
            var5 = _closure1_slot12;
            var6 = var5.EXPLICIT_CONTENT;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 23;
            var5 = var11[var5];
            var13 = var10.bind(var3)(var5);
            var5 = var13.getRemixSourceFromSelectedMedia;
            var26 = var5.bind(var13)(var17, var22);
            var5 = 24;
            var5 = var11[var5];
            var23 = var10.bind(var3)(var5);
            var21 = var23.useIsRemixEnabledForMedia;
            var18 = var53.id;
            if(!(var1 == var26)) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var11 = {'width': 0, 'height': 0};
            _fun0004_ip = 48; continue _fun0004;
case 46:
            var5 = {};
            var13 = var26.width;
            var24 = var1 != var13;
            var10 = 0;
            if(!var24) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var10 = var13;
case 49:
            var5['width'] = var10;
            var13 = var26.height;
            var24 = var1 != var13;
            var10 = 0;
            if(!var24) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var10 = var13;
case 51:
            var5['height'] = var10;
            var11 = var5;
case 48:
            var13 = _closure1_slot1;
            var5 = _closure1_slot2;
            var10 = var5[var16];
            var10 = var13.bind(var3)(var10);
            var10 = var10.MESSAGE_LONG_PRESS_MENU;
            var30 = var21.bind(var23)(var18, var11, var10);
            var10 = _closure1_slot0;
            var11 = 25;
            var11 = var5[var11];
            var21 = var10.bind(var3)(var11);
            var18 = var21.useShouldUpsellRemix;
            var11 = {};
            var23 = var5[var16];
            var23 = var13.bind(var3)(var23);
            var24 = var23.MESSAGE_LONG_PRESS_MENU;
            var23 = new Array(1);
            var23[0] = var24;
            var11['analyticsLocations'] = var23;
            var31 = var18.bind(var21)(var11);
            var23 = _closure1_slot4;
            var21 = var23.useMemo;
            var18 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 26;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = new Array(0);
            var32 = var21.bind(var23)(var18, var11);
            var21 = 27;
            var11 = var5[var21];
            var11 = var13.bind(var3)(var11);
            var18 = var11.bind(var3)(var17);
            var5 = var5[var19];
            var10 = var10.bind(var3)(var5);
            var5 = var10.useIsActiveChannelOrUnarchivableThread;
            var11 = var5.bind(var10)(var53);
            var _closure2_slot10 = var11;
            var10 = var1 == var48;
            var5 = undefined;
            if(var10) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var10 = var48.isNonUserBot;
            var5 = var10.bind(var48)();
case 53:
            var57 = true;
            var51 = var57 === var5;
            var10 = _closure1_slot9;
            var5 = var10.getId;
            var47 = var5.bind(var10)();
            var10 = _closure1_slot0;
            var25 = _closure1_slot2;
            var5 = 28;
            var5 = var25[var5];
            var5 = var10.bind(var3)(var5);
            var10 = var5.DeveloperMode;
            var5 = var10.getSetting;
            var72 = var5.bind(var10)();
            var13 = _closure1_slot11;
            var10 = var13.can;
            var5 = _closure1_slot23;
            var5 = var5.MANAGE_MESSAGES;
            var13 = var10.bind(var13)(var5, var53);
            var5 = var17.author;
            var5 = var5.id;
            var5 = var5 === var47;
            var23 = var17.hasFlag;
            var10 = _closure1_slot19;
            var10 = var10.CROSSPOSTED;
            var10 = var23.bind(var17)(var10);
            var24 = _closure1_slot1;
            var23 = 29;
            var23 = var25[var23];
            var23 = var24.bind(var3)(var23);
            var43 = var23.bind(var3)(var17, var53);
            var45 = !var10;
            if(!var45) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            var23 = var53.type;
            var10 = _closure1_slot15;
            var10 = var10.GUILD_ANNOUNCEMENT;
            var45 = var23 === var10;
case 55:
            if(!var45) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var23 = var1 == var15;
            var10 = undefined;
            if(var23) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var25 = var15.features;
            var24 = var25.has;
            var23 = _closure1_slot16;
            var23 = var23.NEWS;
            var10 = var24.bind(var25)(var23);
case 59:
            var45 = var10;
case 57:
            if(!var45) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            if(var5) { _fun0004_ip = 63; continue _fun0004 }
case 64:
            var5 = var13;
case 63:
            var45 = var5;
case 61:
            if(!var45) { _fun0004_ip = 65; continue _fun0004 }
case 66:
            var10 = var17.type;
            var5 = _closure1_slot21;
            var5 = var5.DEFAULT;
            var45 = var10 === var5;
case 65:
            if(!var45) { _fun0004_ip = 67; continue _fun0004 }
case 68:
            var5 = var17.isPoll;
            var5 = var5.bind(var17)();
            var45 = !var5;
case 67:
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var19];
            var10 = var10.bind(var3)(var5);
            var5 = var10.computeCanStartPublicThread;
            var74 = var5.bind(var10)(var53, var17);
            var5 = var17.getContentMessage;
            var10 = var5.bind(var17)();
            var5 = var10.embeds;
            var19 = var5.length;
            var5 = _closure1_slot8;
            var5 = var5.bind(var3)(var10);
            if(var5) { _fun0004_ip = 69; continue _fun0004 }
case 70:
            var5 = var10.content;
            _fun0004_ip = 71; continue _fun0004;
case 69:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 30;
            var23 = var25[var23];
            var24 = var24.bind(var3)(var23);
            var23 = var24.getAllTextDisplayContent;
            var10 = var10.components;
            var5 = var23.bind(var24)(var10);
case 71:
            var52 = var13;
            if(var52) { _fun0004_ip = 72; continue _fun0004 }
case 73:
            var10 = var17.canDeleteOwnMessage;
            var52 = var10.bind(var17)(var47);
case 72:
            if(!var52) { _fun0004_ip = 74; continue _fun0004 }
case 75:
            var52 = var19 > var9;
case 74:
            if(!var52) { _fun0004_ip = 76; continue _fun0004 }
case 77:
            var10 = var17.author;
            var23 = var10.id;
            var10 = _closure1_slot17;
            var52 = var23 !== var10;
case 76:
            if(!var52) { _fun0004_ip = 78; continue _fun0004 }
case 79:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var10 = 31;
            var10 = var24[var10];
            var25 = var23.bind(var3)(var10);
            var24 = var25.hasFlag;
            var23 = var17.flags;
            var10 = _closure1_slot19;
            var10 = var10.EPHEMERAL;
            var10 = var24.bind(var25)(var23, var10);
            var52 = !var10;
case 78:
            if(!var52) { _fun0004_ip = 80; continue _fun0004 }
case 81:
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var10 = 32;
            var10 = var24[var10];
            var10 = var23.bind(var3)(var10);
            var10 = var10.bind(var3)(var17);
            var52 = var12 === var10;
case 80:
            var10 = !var20;
            if(var20) { _fun0004_ip = 82; continue _fun0004 }
case 83:
            var6 = var14 === var6;
            var10 = !var6;
case 82:
            if(!var10) { _fun0004_ip = 84; continue _fun0004 }
case 85:
            var6 = var17.interactionData;
            var6 = var1 == var6;
            if(var6) { _fun0004_ip = 86; continue _fun0004 }
case 87:
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var14 = 33;
            var14 = var23[var14];
            var23 = var20.bind(var3)(var14);
            var20 = var23.canRetryInteractionData;
            var14 = var17.interactionData;
            var6 = var20.bind(var23)(var14);
case 86:
            var10 = var6;
case 84:
            var20 = var17.attachments;
            var14 = var20.filter;
            var6 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = arg1;
                    var2 = var3.flags;
                    var1 = null;
                    var1 = var1 == var2;
                    if(var1) { _fun0006_ip = 88; continue _fun0006 }
case 89:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 31;
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
            var6 = var14.bind(var20)(var6);
            var14 = var17.author;
            var14 = var14.id;
            var25 = var14 === var47;
            if(!var25) { _fun0004_ip = 90; continue _fun0004 }
case 91:
            var6 = var6.length;
            var6 = var6 > var12;
            if(var6) { _fun0004_ip = 92; continue _fun0004 }
case 93:
            var20 = var17.content;
            var14 = '';
            var6 = var14 !== var20;
case 92:
            var25 = var6;
case 90:
            var6 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = var14[var2];
            var24 = var6.bind(var3)(var2);
            var23 = var24.useStateFromStores;
            var2 = _closure1_slot6;
            var20 = new Array(1);
            var20[0] = var2;
            var2 = function() {
                var4 = _closure1_slot6;
                var3 = var4.hasReportedMessage;
                var2 = _closure2_slot3;
                var2 = var2.channel_id;
                var1 = _closure2_slot3;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var27 = var23.bind(var24)(var20, var2);
            var2 = 34;
            var2 = var14[var2];
            var14 = var6.bind(var3)(var2);
            var6 = var14.useIsReportToModEnabled;
            var20 = var1 == var15;
            var2 = undefined;
            if(var20) { _fun0004_ip = 94; continue _fun0004 }
case 95:
            var2 = var15.id;
case 94:
            var67 = var6.bind(var14)(var2);
            var6 = function getProps(arg1) {
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
                var8 = 35;
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
                    var1 = 36;
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
            var2 = function render(arg1) {
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
                    var5 = 37;
                    var5 = var11[var5];
                    var5 = var9.bind(var3)(var5);
                    var6 = var5.ActionSheet;
                    var5 = {};
                    var7 = true;
                    var5['showGradient'] = var7;
                    var7 = 38;
                    var7 = var11[var7];
                    var14 = var9.bind(var3)(var7);
                    var13 = var14.shouldShowEmojiRow;
                    var11 = _closure2_slot8;
                    var9 = _closure2_slot3;
                    var7 = _closure2_slot10;
                    var7 = var13.bind(var14)(var11, var9, var7);
                    if(!var7) { _fun0007_ip = 96; continue _fun0007 }
case 97:
                    var11 = _closure1_slot24;
                    var9 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var8 = 39;
                    var8 = var13[var8];
                    var9 = var9.bind(var3)(var8);
                    var8 = {};
                    var13 = _closure2_slot3;
                    var8['message'] = var13;
                    var12 = _closure2_slot4;
                    var8['channel'] = var12;
                    var7 = var11.bind(var3)(var9, var8);
case 96:
                    var5['header'] = var7;
                    var7 = null;
                    var8 = var7 == var10;
                    var7 = undefined;
                    if(var8) { _fun0007_ip = 98; continue _fun0007 }
case 99:
                    var9 = var10.map;
                    var8 = function(arg1, arg2) {
                        var7 = arg1;
                        var5 = _closure1_slot24;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 35;
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
                            var2 = 35;
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
case 98:
                    var5['children'] = var7;
                    var5 = var4.bind(var3)(var6, var5);
                    var1['children'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var15 = var17.state;
            var14 = _closure1_slot20;
            var14 = var14.SEND_FAILED;
            if(!(var15 !== var14)) { _fun0004_ip = 100; continue _fun0004 }
case 101:
            var15 = var17.type;
            var14 = _closure1_slot21;
            var14 = var14.THREAD_STARTER_MESSAGE;
            if(!(var15 !== var14)) { _fun0004_ip = 102; continue _fun0004 }
case 103:
            var14 = {};
            var69 = _closure1_slot0;
            var70 = _closure1_slot2;
            var83 = 40;
            var15 = var70[var83];
            var15 = var69.bind(var3)(var15);
            var23 = var15.intl;
            var20 = var23.string;
            var15 = var70[var83];
            var15 = var69.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.fsBWmZ;
            var15 = var20.bind(var23)(var15);
            var14['label'] = var15;
            var15 = 45;
            var15 = var70[var15];
            var15 = var69.bind(var3)(var15);
            var15 = var15.PencilIcon;
            var14['IconComponent'] = var15;
            var56 = _closure1_slot25;
            var15 = var56.PRIMARY;
            var14['section'] = var15;
            var14['sortKey'] = var12;
            var54 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var70[var83];
            var15 = var69.bind(var3)(var15);
            var23 = var15.intl;
            var20 = var23.string;
            var15 = var70[var83];
            var15 = var69.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.5IEsGx;
            var15 = var20.bind(var23)(var15);
            var14['label'] = var15;
            var15 = 46;
            var15 = var70[var15];
            var15 = var69.bind(var3)(var15);
            var15 = var15.ArrowAngleLeftUpIcon;
            var14['IconComponent'] = var15;
            var15 = var56.PRIMARY;
            var14['section'] = var15;
            var14['sortKey'] = var8;
            var40 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var70[var83];
            var15 = var69.bind(var3)(var15);
            var23 = var15.intl;
            var20 = var23.string;
            var15 = var70[var83];
            var15 = var69.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.I3ltXF;
            var15 = var20.bind(var23)(var15);
            var14['label'] = var15;
            var20 = _closure1_slot1;
            var15 = 47;
            var15 = var70[var15];
            var15 = var20.bind(var3)(var15);
            var14['IconComponent'] = var15;
            var15 = var56.PRIMARY;
            var14['section'] = var15;
            var15 = 3;
            var14['sortKey'] = var15;
            var38 = var6.bind(var3)(var14);
            var14 = {};
            var20 = var70[var83];
            var20 = var69.bind(var3)(var20);
            var24 = var20.intl;
            var23 = var24.string;
            var20 = var70[var83];
            var20 = var69.bind(var3)(var20);
            var20 = var20.t;
            var20 = var20.Gp2rPj;
            var20 = var23.bind(var24)(var20);
            var14['label'] = var20;
            var20 = 48;
            var20 = var70[var20];
            var20 = var69.bind(var3)(var20);
            var20 = var20.PencilSparkleIcon;
            var14['IconComponent'] = var20;
            var20 = var56.GENERAL;
            var14['section'] = var20;
            var14['sortKey'] = var15;
            var29 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var70[var83];
            var15 = var69.bind(var3)(var15);
            var23 = var15.intl;
            var20 = var23.string;
            var15 = var70[var83];
            var15 = var69.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.rBIGBA;
            var15 = var20.bind(var23)(var15);
            var14['label'] = var15;
            var20 = 49;
            var15 = var70[var20];
            var15 = var69.bind(var3)(var15);
            var15 = var15.ThreadIcon;
            var14['IconComponent'] = var15;
            var15 = var56.PRIMARY;
            var14['section'] = var15;
            var15 = 4;
            var14['sortKey'] = var15;
            var76 = var6.bind(var3)(var14);
            var14 = {};
            var23 = var70[var83];
            var23 = var69.bind(var3)(var23);
            var34 = var23.intl;
            var24 = var34.string;
            var23 = var70[var83];
            var23 = var69.bind(var3)(var23);
            var23 = var23.t;
            var23 = var23.39d0Wl;
            var23 = var24.bind(var34)(var23);
            var14['label'] = var23;
            var20 = var70[var20];
            var20 = var69.bind(var3)(var20);
            var20 = var20.ThreadIcon;
            var14['IconComponent'] = var20;
            var20 = var56.GENERAL;
            var14['section'] = var20;
            var14['sortKey'] = var15;
            var77 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var70[var83];
            var15 = var69.bind(var3)(var15);
            var23 = var15.intl;
            var20 = var23.string;
            var15 = var70[var83];
            var15 = var69.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.JrGD7O;
            var15 = var20.bind(var23)(var15);
            var14['label'] = var15;
            var15 = 42;
            var15 = var70[var15];
            var15 = var69.bind(var3)(var15);
            var15 = var15.CopyIcon;
            var14['IconComponent'] = var15;
            var15 = var56.GENERAL;
            var14['section'] = var15;
            var15 = 5;
            var14['sortKey'] = var15;
            var42 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var70[var83];
            var15 = var69.bind(var3)(var15);
            var23 = var15.intl;
            var20 = var23.string;
            var15 = var70[var83];
            var15 = var69.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.RpE9k5;
            var15 = var20.bind(var23)(var15);
            var14['label'] = var15;
            var73 = 50;
            var15 = var70[var73];
            var15 = var69.bind(var3)(var15);
            var15 = var15.ChatMarkUnreadIcon;
            var14['IconComponent'] = var15;
            var15 = var56.GENERAL;
            var14['section'] = var15;
            var15 = 6;
            var14['sortKey'] = var15;
            var68 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var70[var83];
            var15 = var69.bind(var3)(var15);
            var23 = var15.intl;
            var20 = var23.string;
            var15 = var70[var83];
            var15 = var69.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.grdwws;
            var15 = var20.bind(var23)(var15);
            var14['label'] = var15;
            var15 = 51;
            var20 = var70[var15];
            var20 = var69.bind(var3)(var20);
            var20 = var20.ClockXIcon;
            var14['IconComponent'] = var20;
            var20 = var56.GENERAL;
            var14['section'] = var20;
            var20 = 7;
            var14['sortKey'] = var20;
            var20 = var6.bind(var3)(var14);
            var14 = {};
            var23 = var70[var83];
            var23 = var69.bind(var3)(var23);
            var34 = var23.intl;
            var24 = var34.string;
            var23 = var70[var83];
            var23 = var69.bind(var3)(var23);
            var23 = var23.t;
            var23 = var23.gHp0Cw;
            var23 = var24.bind(var34)(var23);
            var14['label'] = var23;
            var24 = 52;
            var23 = var70[var24];
            var23 = var69.bind(var3)(var23);
            var23 = var23.ReactionIcon;
            var14['IconComponent'] = var23;
            var23 = var56.GENERAL;
            var14['section'] = var23;
            var23 = 8;
            var14['sortKey'] = var23;
            var23 = var6.bind(var3)(var14);
            var14 = {};
            var34 = var70[var83];
            var34 = var69.bind(var3)(var34);
            var44 = var34.intl;
            var41 = var44.string;
            var34 = var70[var83];
            var34 = var69.bind(var3)(var34);
            var34 = var34.t;
            var34 = var34.MFGE5+;
            var34 = var41.bind(var44)(var34);
            var14['label'] = var34;
            var34 = 53;
            var34 = var70[var34];
            var34 = var69.bind(var3)(var34);
            var34 = var34.AnnouncementsIcon;
            var14['IconComponent'] = var34;
            var34 = var56.GENERAL;
            var14['section'] = var34;
            var34 = 9;
            var14['sortKey'] = var34;
            var50 = var6.bind(var3)(var14);
            var14 = {};
            var34 = var70[var83];
            var34 = var69.bind(var3)(var34);
            var44 = var34.intl;
            var41 = var44.string;
            var34 = var70[var83];
            var34 = var69.bind(var3)(var34);
            var34 = var34.t;
            var34 = var34.CvQ18/;
            var34 = var41.bind(var44)(var34);
            var14['label'] = var34;
            var44 = 54;
            var34 = var70[var44];
            var34 = var69.bind(var3)(var34);
            var34 = var34.PinIcon;
            var14['IconComponent'] = var34;
            var34 = var56.GENERAL;
            var14['section'] = var34;
            var34 = 10;
            var14['sortKey'] = var34;
            var41 = var6.bind(var3)(var14);
            var14 = {};
            var46 = var70[var83];
            var46 = var69.bind(var3)(var46);
            var59 = var46.intl;
            var49 = var59.string;
            var46 = var70[var83];
            var46 = var69.bind(var3)(var46);
            var46 = var46.t;
            var46 = var46.Bse+Fx;
            var46 = var49.bind(var59)(var46);
            var14['label'] = var46;
            var44 = var70[var44];
            var44 = var69.bind(var3)(var44);
            var44 = var44.PinIcon;
            var14['IconComponent'] = var44;
            var44 = var56.GENERAL;
            var14['section'] = var44;
            var14['sortKey'] = var34;
            var44 = var6.bind(var3)(var14);
            var14 = {};
            var34 = var70[var83];
            var34 = var69.bind(var3)(var34);
            var49 = var34.intl;
            var46 = var49.string;
            var34 = var70[var83];
            var34 = var69.bind(var3)(var34);
            var34 = var34.t;
            var34 = var34.tpxJtr;
            var34 = var46.bind(var49)(var34);
            var14['label'] = var34;
            var34 = 55;
            var34 = var70[var34];
            var34 = var69.bind(var3)(var34);
            var34 = var34.NitroWheelIcon;
            var14['IconComponent'] = var34;
            var34 = var56.GENERAL;
            var14['section'] = var34;
            var34 = 11;
            var14['sortKey'] = var34;
            var65 = var6.bind(var3)(var14);
            var14 = {};
            var46 = var70[var83];
            var46 = var69.bind(var3)(var46);
            var59 = var46.intl;
            var49 = var59.string;
            var46 = var70[var83];
            var46 = var69.bind(var3)(var46);
            var46 = var46.t;
            var46 = var46.tpxJtr;
            var46 = var49.bind(var59)(var46);
            var14['label'] = var46;
            var46 = 56;
            var46 = var70[var46];
            var46 = var69.bind(var3)(var46);
            var46 = var46.BookmarkOutlineIcon;
            var14['IconComponent'] = var46;
            var46 = var56.GENERAL;
            var14['section'] = var46;
            var14['sortKey'] = var34;
            var63 = var6.bind(var3)(var14);
            var14 = {};
            var46 = var70[var83];
            var46 = var69.bind(var3)(var46);
            var59 = var46.intl;
            var49 = var59.string;
            var46 = var70[var83];
            var46 = var69.bind(var3)(var46);
            var46 = var46.t;
            var46 = var46.SvXS1d;
            var46 = var49.bind(var59)(var46);
            var14['label'] = var46;
            var46 = 57;
            var46 = var70[var46];
            var46 = var69.bind(var3)(var46);
            var46 = var46.BookmarkIcon;
            var14['IconComponent'] = var46;
            var46 = var56.GENERAL;
            var14['section'] = var46;
            var14['sortKey'] = var34;
            var62 = var6.bind(var3)(var14);
            var14 = {};
            var34 = var70[var83];
            var34 = var69.bind(var3)(var34);
            var49 = var34.intl;
            var46 = var49.string;
            var34 = var70[var83];
            var34 = var69.bind(var3)(var34);
            var34 = var34.t;
            var34 = var34.mJ3P0N;
            var34 = var46.bind(var49)(var34);
            var14['label'] = var34;
            var71 = 58;
            var34 = var70[var71];
            var34 = var69.bind(var3)(var34);
            var34 = var34.ClockIcon;
            var14['IconComponent'] = var34;
            var14['arrow'] = var57;
            var34 = var56.GENERAL;
            var14['section'] = var34;
            var14['sortKey'] = var28;
            var60 = var6.bind(var3)(var14);
            var14 = {};
            var34 = var70[var83];
            var34 = var69.bind(var3)(var34);
            var49 = var34.intl;
            var46 = var49.string;
            var34 = var70[var83];
            var34 = var69.bind(var3)(var34);
            var34 = var34.t;
            var34 = var34.vrbqs7;
            var34 = var46.bind(var49)(var34);
            var14['label'] = var34;
            var34 = var70[var71];
            var34 = var69.bind(var3)(var34);
            var34 = var34.ClockIcon;
            var14['IconComponent'] = var34;
            var14['arrow'] = var57;
            var34 = var56.GENERAL;
            var14['section'] = var34;
            var14['sortKey'] = var28;
            var59 = var6.bind(var3)(var14);
            var14 = {};
            var28 = var70[var83];
            var28 = var69.bind(var3)(var28);
            var46 = var28.intl;
            var34 = var46.string;
            var28 = var70[var83];
            var28 = var69.bind(var3)(var28);
            var28 = var28.t;
            var28 = var28.PHjkRE;
            var28 = var34.bind(var46)(var28);
            var14['label'] = var28;
            var28 = 59;
            var28 = var70[var28];
            var28 = var69.bind(var3)(var28);
            var28 = var28.RobotIcon;
            var14['IconComponent'] = var28;
            var14['arrow'] = var57;
            var28 = var56.GENERAL;
            var14['section'] = var28;
            var14['sortKey'] = var16;
            var16 = var6.bind(var3)(var14);
            var14 = {};
            var28 = var70[var83];
            var28 = var69.bind(var3)(var28);
            var46 = var28.intl;
            var34 = var46.string;
            var28 = var70[var83];
            var28 = var69.bind(var3)(var28);
            var28 = var28.t;
            var28 = var28.g33r/P;
            var28 = var34.bind(var46)(var28);
            var14['label'] = var28;
            var28 = 60;
            var28 = var70[var28];
            var28 = var69.bind(var3)(var28);
            var28 = var28.ChatIcon;
            var14['IconComponent'] = var28;
            var28 = var56.GENERAL;
            var14['section'] = var28;
            var28 = 14;
            var14['sortKey'] = var28;
            var46 = var6.bind(var3)(var14);
            var14 = {};
            var28 = var70[var83];
            var28 = var69.bind(var3)(var28);
            var49 = var28.intl;
            var34 = var49.string;
            var28 = var70[var83];
            var28 = var69.bind(var3)(var28);
            var28 = var28.t;
            var28 = var28.P8tvKC;
            var28 = var34.bind(var49)(var28);
            var14['label'] = var28;
            var28 = 61;
            var28 = var70[var28];
            var28 = var69.bind(var3)(var28);
            var28 = var28.AtIcon;
            var14['IconComponent'] = var28;
            var28 = var56.GENERAL;
            var14['section'] = var28;
            var28 = 15;
            var14['sortKey'] = var28;
            var49 = var6.bind(var3)(var14);
            var14 = {};
            var28 = var70[var83];
            var28 = var69.bind(var3)(var28);
            var75 = var28.intl;
            var34 = var75.string;
            var28 = var70[var83];
            var28 = var69.bind(var3)(var28);
            var28 = var28.t;
            var28 = var28.S/xNKS;
            var28 = var34.bind(var75)(var28);
            var14['label'] = var28;
            var75 = 62;
            var28 = var70[var75];
            var28 = var69.bind(var3)(var28);
            var28 = var28.DownloadIcon;
            var14['IconComponent'] = var28;
            var28 = var56.GENERAL;
            var14['section'] = var28;
            var14['sortKey'] = var35;
            var28 = var6.bind(var3)(var14);
            var14 = {};
            var34 = var70[var83];
            var34 = var69.bind(var3)(var34);
            var80 = var34.intl;
            var79 = var80.string;
            var34 = var70[var83];
            var34 = var69.bind(var3)(var34);
            var34 = var34.t;
            var34 = var34.JVuuz8;
            var34 = var79.bind(var80)(var34);
            var14['label'] = var34;
            var34 = var70[var75];
            var34 = var69.bind(var3)(var34);
            var34 = var34.DownloadIcon;
            var14['IconComponent'] = var34;
            var34 = var56.GENERAL;
            var14['section'] = var34;
            var14['sortKey'] = var35;
            var34 = var6.bind(var3)(var14);
            var14 = {};
            var79 = var70[var83];
            var79 = var69.bind(var3)(var79);
            var81 = var79.intl;
            var80 = var81.string;
            var79 = var70[var83];
            var79 = var69.bind(var3)(var79);
            var79 = var79.t;
            var79 = var79.vbAEaG;
            var79 = var80.bind(var81)(var79);
            var14['label'] = var79;
            var75 = var70[var75];
            var75 = var69.bind(var3)(var75);
            var75 = var75.DownloadIcon;
            var14['IconComponent'] = var75;
            var75 = var56.GENERAL;
            var14['section'] = var75;
            var14['sortKey'] = var35;
            var35 = var6.bind(var3)(var14);
            var14 = {};
            var75 = var70[var83];
            var75 = var69.bind(var3)(var75);
            var80 = var75.intl;
            var79 = var80.string;
            var75 = var70[var83];
            var75 = var69.bind(var3)(var75);
            var75 = var75.t;
            var75 = var75.92CPQ0;
            var75 = var79.bind(var80)(var75);
            var14['label'] = var75;
            var75 = 44;
            var79 = var70[var75];
            var79 = var69.bind(var3)(var79);
            var79 = var79.LinkIcon;
            var14['IconComponent'] = var79;
            var79 = var56.GENERAL;
            var14['section'] = var79;
            var14['sortKey'] = var36;
            var36 = var6.bind(var3)(var14);
            var14 = {};
            var79 = var70[var83];
            var79 = var69.bind(var3)(var79);
            var81 = var79.intl;
            var80 = var81.string;
            var79 = var70[var83];
            var79 = var69.bind(var3)(var79);
            var79 = var79.t;
            var79 = var79.Xrt5Pj;
            var79 = var80.bind(var81)(var79);
            var14['label'] = var79;
            var75 = var70[var75];
            var75 = var69.bind(var3)(var75);
            var75 = var75.LinkIcon;
            var14['IconComponent'] = var75;
            var75 = var56.GENERAL;
            var14['section'] = var75;
            var14['sortKey'] = var73;
            var75 = var6.bind(var3)(var14);
            var14 = {};
            var73 = var70[var83];
            var73 = var69.bind(var3)(var73);
            var80 = var73.intl;
            var79 = var80.string;
            var73 = var70[var83];
            var73 = var69.bind(var3)(var73);
            var73 = var73.t;
            var73 = var73.Rjezb2;
            var73 = var79.bind(var80)(var73);
            var14['label'] = var73;
            var71 = var70[var71];
            var71 = var69.bind(var3)(var71);
            var71 = var71.ClockIcon;
            var14['IconComponent'] = var71;
            var14['arrow'] = var57;
            var57 = var56.GENERAL;
            var14['section'] = var57;
            var14['sortKey'] = var15;
            var14 = var6.bind(var3)(var14);
            var15 = {};
            var57 = var70[var83];
            var57 = var69.bind(var3)(var57);
            var73 = var57.intl;
            var71 = var73.string;
            var57 = var70[var83];
            var57 = var69.bind(var3)(var57);
            var57 = var57.t;
            var57 = var57.zBoHlZ;
            var57 = var71.bind(var73)(var57);
            var15['label'] = var57;
            var57 = 63;
            var57 = var70[var57];
            var57 = var69.bind(var3)(var57);
            var57 = var57.IdIcon;
            var15['IconComponent'] = var57;
            var56 = var56.GENERAL;
            var15['section'] = var56;
            var15['sortKey'] = var24;
            var73 = var6.bind(var3)(var15);
            var15 = {};
            if(!(!(var19 > var12))) { _fun0004_ip = 104; continue _fun0004 }
case 105:
            var57 = _closure1_slot0;
            var19 = _closure1_slot2;
            var24 = var19[var83];
            var24 = var57.bind(var3)(var24);
            var56 = var24.intl;
            var24 = var56.string;
            var19 = var19[var83];
            var19 = var57.bind(var3)(var19);
            var19 = var19.t;
            var19 = var19.4sxKOT;
            var19 = var24.bind(var56)(var19);
            _fun0004_ip = 106; continue _fun0004;
case 104:
            var69 = _closure1_slot0;
            var24 = _closure1_slot2;
            var56 = var24[var83];
            var56 = var69.bind(var3)(var56);
            var57 = var56.intl;
            var56 = var57.string;
            var24 = var24[var83];
            var24 = var69.bind(var3)(var24);
            var24 = var24.t;
            var24 = var24.wUIMqa;
            var19 = var56.bind(var57)(var24);
case 106:
            var15['label'] = var19;
            var81 = _closure1_slot0;
            var82 = _closure1_slot2;
            var19 = 64;
            var19 = var82[var19];
            var19 = var81.bind(var3)(var19);
            var19 = var19.XSmallBoldIcon;
            var15['IconComponent'] = var19;
            var79 = 'danger';
            var15['variant'] = var79;
            var56 = _closure1_slot25;
            var19 = var56.DESTRUCTIVE;
            var15['section'] = var19;
            var19 = 98;
            var15['sortKey'] = var19;
            var57 = var6.bind(var3)(var15);
            var15 = {};
            var19 = var82[var83];
            var19 = var81.bind(var3)(var19);
            var69 = var19.intl;
            var24 = var69.string;
            var19 = var82[var83];
            var19 = var81.bind(var3)(var19);
            var19 = var19.t;
            var19 = var19.ZbtGBg;
            var19 = var24.bind(var69)(var19);
            var15['label'] = var19;
            var80 = 43;
            var19 = var82[var80];
            var19 = var81.bind(var3)(var19);
            var19 = var19.TrashIcon;
            var15['IconComponent'] = var19;
            var15['variant'] = var79;
            var19 = var56.DESTRUCTIVE;
            var15['section'] = var19;
            var19 = 99;
            var15['sortKey'] = var19;
            var19 = var6.bind(var3)(var15);
            var15 = {};
            var24 = var82[var83];
            var24 = var81.bind(var3)(var24);
            var70 = var24.intl;
            var69 = var70.string;
            var24 = var82[var83];
            var24 = var81.bind(var3)(var24);
            var24 = var24.t;
            var24 = var24.kFwAsb;
            var24 = var69.bind(var70)(var24);
            var15['label'] = var24;
            var24 = var82[var80];
            var24 = var81.bind(var3)(var24);
            var24 = var24.TrashIcon;
            var15['IconComponent'] = var24;
            var15['variant'] = var79;
            var24 = var56.DESTRUCTIVE;
            var15['section'] = var24;
            var24 = 100;
            var15['sortKey'] = var24;
            var24 = var6.bind(var3)(var15);
            var15 = {};
            var69 = var82[var83];
            var69 = var81.bind(var3)(var69);
            var71 = var69.intl;
            var70 = var71.string;
            var69 = var82[var83];
            var69 = var81.bind(var3)(var69);
            var69 = var69.t;
            var69 = var69.+78Pfn;
            var69 = var70.bind(var71)(var69);
            var15['label'] = var69;
            var69 = 65;
            var70 = var82[var69];
            var70 = var81.bind(var3)(var70);
            var70 = var70.FlagIcon;
            var15['IconComponent'] = var70;
            var15['variant'] = var79;
            var70 = var56.DESTRUCTIVE;
            var15['section'] = var70;
            var70 = 101;
            var15['sortKey'] = var70;
            var71 = var6.bind(var3)(var15);
            var15 = {};
            var84 = var82[var83];
            var84 = var81.bind(var3)(var84);
            var86 = var84.intl;
            var85 = var86.string;
            var84 = var82[var83];
            var84 = var81.bind(var3)(var84);
            var84 = var84.t;
            var84 = var84.n5EBAA;
            var84 = var85.bind(var86)(var84);
            var15['label'] = var84;
            var15['variant'] = var79;
            var84 = 66;
            var84 = var82[var84];
            var84 = var81.bind(var3)(var84);
            var84 = var84.ClydeIcon;
            var15['IconComponent'] = var84;
            var84 = var56.DESTRUCTIVE;
            var15['section'] = var84;
            var15['sortKey'] = var70;
            var70 = var6.bind(var3)(var15);
            var15 = {};
            var84 = var82[var83];
            var84 = var81.bind(var3)(var84);
            var86 = var84.intl;
            var85 = var86.string;
            var87 = _closure1_slot1;
            var84 = 67;
            var84 = var82[var84];
            var84 = var87.bind(var3)(var84);
            var84 = var84.1D+vq6;
            var84 = var85.bind(var86)(var84);
            var15['label'] = var84;
            var69 = var82[var69];
            var69 = var81.bind(var3)(var69);
            var69 = var69.FlagIcon;
            var15['IconComponent'] = var69;
            var69 = var56.DESTRUCTIVE;
            var15['section'] = var69;
            var69 = 102;
            var15['sortKey'] = var69;
            var15['disabled'] = var27;
            var69 = var6.bind(var3)(var15);
            var15 = {};
            var27 = var82[var83];
            var27 = var81.bind(var3)(var27);
            var85 = var27.intl;
            var84 = var85.string;
            var27 = var82[var83];
            var27 = var81.bind(var3)(var27);
            var27 = var27.t;
            var27 = var27.ZH7P2t;
            var27 = var84.bind(var85)(var27);
            var15['label'] = var27;
            var27 = 68;
            var27 = var82[var27];
            var27 = var81.bind(var3)(var27);
            var27 = var27.ImageWarningIcon;
            var15['IconComponent'] = var27;
            var27 = var56.DESTRUCTIVE;
            var15['section'] = var27;
            var27 = 103;
            var15['sortKey'] = var27;
            var27 = var6.bind(var3)(var15);
            var15 = {};
            var84 = var82[var83];
            var84 = var81.bind(var3)(var84);
            var85 = var84.intl;
            var84 = var85.string;
            var83 = var82[var83];
            var83 = var81.bind(var3)(var83);
            var83 = var83.t;
            var83 = var83.xwMqDw;
            var83 = var84.bind(var85)(var83);
            var15['label'] = var83;
            var80 = var82[var80];
            var80 = var81.bind(var3)(var80);
            var80 = var80.TrashIcon;
            var15['IconComponent'] = var80;
            var15['variant'] = var79;
            var56 = var56.DESTRUCTIVE;
            var15['section'] = var56;
            var56 = 110;
            var15['sortKey'] = var56;
            var56 = var6.bind(var3)(var15);
            var79 = new Array(0);
            var15 = 'Preview';
            var15 = var15 === var78;
            if(var15) { _fun0004_ip = 107; continue _fun0004 }
case 108:
            var80 = _closure1_slot0;
            var81 = _closure1_slot2;
            var78 = 31;
            var78 = var81[var78];
            var82 = var80.bind(var3)(var78);
            var81 = var82.hasFlag;
            var80 = var17.flags;
            var78 = _closure1_slot19;
            var78 = var78.EPHEMERAL;
            var15 = var81.bind(var82)(var80, var78);
case 107:
            if(!var15) { _fun0004_ip = 109; continue _fun0004 }
case 110:
            var15 = var79.push;
            r105 = var79;
            r104 = var76;
            r103 = var68;
            r102 = var63;
            r101 = var62;
            r100 = var65;
            var100 = var60;
            var99 = var59;
            var98 = var57;
            var97 = var56;
            var96 = var54;
            var95 = var49;
            var94 = var46;
            var93 = var40;
            var92 = var16;
            var91 = var19;
            var15 = r105[var15](r104, r103, r102, r101, r100, var100, var99, var98, var97, var96, var95, var94, var93, var92, var91, var90);
case 109:
            if(!var11) { _fun0004_ip = 111; continue _fun0004 }
case 112:
            var78 = _closure1_slot0;
            var80 = _closure1_slot2;
            var15 = 31;
            var15 = var80[var15];
            var81 = var78.bind(var3)(var15);
            var80 = var81.hasFlag;
            var78 = var17.flags;
            var15 = _closure1_slot19;
            var15 = var15.EPHEMERAL;
            var15 = var80.bind(var81)(var78, var15);
            var11 = !var15;
case 111:
            if(var11) { _fun0004_ip = 113; continue _fun0004 }
case 114:
            var11 = var79.push;
            r105 = var79;
            r104 = var54;
            r103 = var40;
            r102 = var38;
            r101 = var57;
            r100 = var24;
            var100 = var56;
            var99 = var50;
            var98 = var41;
            var97 = var44;
            var96 = var65;
            var95 = var63;
            var94 = var62;
            var93 = var60;
            var92 = var59;
            var91 = var68;
            var90 = var49;
            var89 = var16;
            var88 = var19;
            var11 = r105[var11](r104, r103, r102, r101, r100, var100, var99, var98, var97, var96, var95, var94, var93, var92, var91, var90, var89, var88, var87);
case 113:
            var15 = _closure1_slot0;
            var78 = _closure1_slot2;
            var11 = 31;
            var11 = var78[var11];
            var80 = var15.bind(var3)(var11);
            var78 = var80.hasFlag;
            var15 = var17.flags;
            var11 = _closure1_slot19;
            var11 = var11.EPHEMERAL;
            var11 = var78.bind(var80)(var15, var11);
            if(!var11) { _fun0004_ip = 115; continue _fun0004 }
case 116:
            var11 = var79.push;
            var11 = var11.bind(var79)(var75);
            var11 = var79.push;
            var11 = var11.bind(var79)(var71);
            var11 = var79.push;
            var11 = var11.bind(var79)(var70);
            var11 = var79.push;
            var11 = var11.bind(var79)(var69);
case 115:
            var11 = global;
            var15 = var11.Set;
            var78 = var15.prototype;
            var78 = Object.create(var78, {constructor: {value: var15}});
            r105 = var78;
            r104 = var79;
            var15 = new r105[var15](r104, r103);
            var15 = var15 instanceof Object ? var15 : var78;
            var _closure2_slot11 = var15;
            var15 = new Array(0);
            if(var74) { _fun0004_ip = 117; continue _fun0004 }
case 118:
            var78 = var17.hasFlag;
            var74 = _closure1_slot19;
            var74 = var74.HAS_THREAD;
            var74 = var78.bind(var17)(var74);
            if(!var74) { _fun0004_ip = 119; continue _fun0004 }
case 120:
            var74 = var15.unshift;
            var74 = var74.bind(var15)(var77);
            _fun0004_ip = 119; continue _fun0004;
case 117:
            var74 = var15.unshift;
            var74 = var74.bind(var15)(var76);
case 119:
            var74 = var15.unshift;
            var74 = var74.bind(var15)(var75);
            if(!var72) { _fun0004_ip = 121; continue _fun0004 }
case 122:
            var72 = var15.unshift;
            var72 = var72.bind(var15)(var73);
case 121:
            if(!var67) { _fun0004_ip = 123; continue _fun0004 }
case 124:
            var72 = _closure1_slot0;
            var73 = _closure1_slot2;
            var67 = 69;
            var67 = var73[var67];
            var72 = var72.bind(var3)(var67);
            var67 = var72.canReportMessageToMods;
            var67 = var67.bind(var72)(var17);
            if(var67) { _fun0004_ip = 125; continue _fun0004 }
case 123:
            var67 = var1 != var48;
            if(!var67) { _fun0004_ip = 126; continue _fun0004 }
case 127:
            var73 = _closure1_slot0;
            var74 = _closure1_slot2;
            var72 = 70;
            var72 = var74[var72];
            var73 = var73.bind(var3)(var72);
            var72 = var73.canReportUser;
            var67 = var72.bind(var73)(var48);
case 126:
            if(!var67) { _fun0004_ip = 128; continue _fun0004 }
case 129:
            var73 = _closure1_slot0;
            var74 = _closure1_slot2;
            var72 = 70;
            var72 = var74[var72];
            var73 = var73.bind(var3)(var72);
            var72 = var73.canReportMessage;
            var67 = var72.bind(var73)(var17);
case 128:
            if(!var67) { _fun0004_ip = 130; continue _fun0004 }
case 131:
            var67 = var15.unshift;
            var67 = var67.bind(var15)(var71);
            _fun0004_ip = 130; continue _fun0004;
case 125:
            var67 = var15.unshift;
            var67 = var67.bind(var15)(var70);
            var67 = var15.unshift;
            var67 = var67.bind(var15)(var69);
case 130:
            var67 = var15.unshift;
            var67 = var67.bind(var15)(var68);
            if(!var66) { _fun0004_ip = 132; continue _fun0004 }
case 133:
            if(!var64) { _fun0004_ip = 134; continue _fun0004 }
case 135:
            if(var58) { _fun0004_ip = 134; continue _fun0004 }
case 136:
            if(var61) { _fun0004_ip = 134; continue _fun0004 }
case 137:
            var64 = var15.unshift;
            var64 = var64.bind(var15)(var65);
            _fun0004_ip = 132; continue _fun0004;
case 134:
            if(var58) { _fun0004_ip = 138; continue _fun0004 }
case 139:
            if(var61) { _fun0004_ip = 138; continue _fun0004 }
case 140:
            var58 = var15.unshift;
            var58 = var58.bind(var15)(var63);
            _fun0004_ip = 141; continue _fun0004;
case 138:
            var58 = var15.unshift;
            var58 = var58.bind(var15)(var62);
case 141:
            var58 = var15.unshift;
            if(var61) { _fun0004_ip = 142; continue _fun0004 }
case 143:
            var60 = var58.bind(var15)(var60);
            _fun0004_ip = 132; continue _fun0004;
case 142:
            var58 = var58.bind(var15)(var59);
case 132:
            if(!var52) { _fun0004_ip = 144; continue _fun0004 }
case 145:
            var52 = var15.unshift;
            var52 = var52.bind(var15)(var57);
case 144:
            var52 = !var13;
            if(!var52) { _fun0004_ip = 146; continue _fun0004 }
case 147:
            var57 = var17.canDeleteOwnMessage;
            var57 = var57.bind(var17)(var47);
            var52 = !var57;
case 146:
            if(var52) { _fun0004_ip = 148; continue _fun0004 }
case 149:
            var57 = _closure1_slot22;
            var59 = var57.UNDELETABLE;
            var58 = var59.has;
            var57 = var17.type;
            var52 = var58.bind(var59)(var57);
case 148:
            if(var52) { _fun0004_ip = 150; continue _fun0004 }
case 151:
            var52 = var15.unshift;
            var52 = var52.bind(var15)(var56);
case 150:
            var56 = _closure1_slot1;
            var57 = _closure1_slot2;
            var52 = 71;
            var52 = var57[var52];
            var52 = var56.bind(var3)(var52);
            var52 = var52.bind(var3)(var17, var47);
            if(!var52) { _fun0004_ip = 152; continue _fun0004 }
case 153:
            var52 = !var55;
case 152:
            if(!var52) { _fun0004_ip = 154; continue _fun0004 }
case 155:
            var52 = var15.unshift;
            var52 = var52.bind(var15)(var54);
case 154:
            if(!var45) { _fun0004_ip = 156; continue _fun0004 }
case 157:
            var45 = var15.unshift;
            var45 = var45.bind(var15)(var50);
case 156:
            var50 = var53.type;
            var45 = _closure1_slot15;
            var45 = var45.GROUP_DM;
            var50 = var50 === var45;
            var45 = var53.isPrivate;
            var45 = var45.bind(var53)();
            if(!var45) { _fun0004_ip = 158; continue _fun0004 }
case 159:
            var45 = !var50;
case 158:
            if(var45) { _fun0004_ip = 160; continue _fun0004 }
case 161:
            var45 = var51;
case 160:
            if(var45) { _fun0004_ip = 162; continue _fun0004 }
case 163:
            var52 = _closure1_slot11;
            var51 = var52.can;
            var45 = _closure1_slot23;
            var45 = var45.SEND_MESSAGES;
            var45 = var51.bind(var52)(var45, var53);
            if(var45) { _fun0004_ip = 164; continue _fun0004 }
case 165:
            var45 = var50;
case 164:
            if(!var45) { _fun0004_ip = 166; continue _fun0004 }
case 167:
            var45 = var15.unshift;
            var45 = var45.bind(var15)(var49);
case 166:
            var49 = var1 == var48;
            var45 = undefined;
            if(var49) { _fun0004_ip = 168; continue _fun0004 }
case 169:
            var45 = var48.id;
case 168:
            if(!(var47 !== var45)) { _fun0004_ip = 162; continue _fun0004 }
case 170:
            var45 = var15.unshift;
            var45 = var45.bind(var15)(var46);
case 162:
            if(!var43) { _fun0004_ip = 171; continue _fun0004 }
case 172:
            var43 = var15.unshift;
            var45 = var17.pinned;
            if(!var45) { _fun0004_ip = 173; continue _fun0004 }
case 174:
            var41 = var44;
case 173:
            var41 = var43.bind(var15)(var41);
case 171:
            var41 = var1 != var5;
            if(!var41) { _fun0004_ip = 175; continue _fun0004 }
case 176:
            var43 = var5.length;
            var41 = var43 > var9;
case 175:
            if(!var41) { _fun0004_ip = 177; continue _fun0004 }
case 178:
            var41 = var15.unshift;
            var41 = var41.bind(var15)(var42);
case 177:
            if(!var39) { _fun0004_ip = 179; continue _fun0004 }
case 180:
            var39 = var15.unshift;
            var39 = var39.bind(var15)(var40);
case 179:
            if(!var33) { _fun0004_ip = 181; continue _fun0004 }
case 182:
            var33 = var15.unshift;
            var33 = var33.bind(var15)(var38);
case 181:
            var33 = var1 == var22;
            if(var33) { _fun0004_ip = 183; continue _fun0004 }
case 184:
            var33 = var37;
case 183:
            if(var33) { _fun0004_ip = 185; continue _fun0004 }
case 186:
            var33 = var15.unshift;
            var33 = var33.bind(var15)(var36);
            var36 = var22.mediaType;
            var33 = 'image';
            if(!(var33 !== var36)) { _fun0004_ip = 187; continue _fun0004 }
case 188:
            var36 = var22.mediaType;
            var33 = 'video';
            if(!(var33 !== var36)) { _fun0004_ip = 189; continue _fun0004 }
case 190:
            var36 = var22.mediaType;
            var33 = 'audio';
            var33 = var33 !== var36;
            if(!var33) { _fun0004_ip = 191; continue _fun0004 }
case 192:
            var37 = var22.mediaType;
            var36 = 'file';
            var33 = var36 !== var37;
case 191:
            if(var33) { _fun0004_ip = 193; continue _fun0004 }
case 194:
            var33 = var15.unshift;
            var33 = var33.bind(var15)(var35);
            _fun0004_ip = 193; continue _fun0004;
case 189:
            var33 = var15.unshift;
            var33 = var33.bind(var15)(var34);
            _fun0004_ip = 193; continue _fun0004;
case 187:
            var26 = var1 != var26;
            if(!var26) { _fun0004_ip = 195; continue _fun0004 }
case 196:
            if(var30) { _fun0004_ip = 197; continue _fun0004 }
case 198:
            if(!var31) { _fun0004_ip = 199; continue _fun0004 }
case 200:
            var31 = var32;
case 199:
            var30 = var31;
case 197:
            var26 = var30;
case 195:
            if(!var26) { _fun0004_ip = 201; continue _fun0004 }
case 202:
            var26 = var15.unshift;
            var26 = var26.bind(var15)(var29);
case 201:
            var26 = var15.unshift;
            var26 = var26.bind(var15)(var28);
case 193:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var26 = 72;
            var26 = var29[var26];
            var28 = var28.bind(var3)(var26);
            var26 = var28.messageHasObscurableMedia;
            var26 = var26.bind(var28)(var17);
            if(!var26) { _fun0004_ip = 203; continue _fun0004 }
case 204:
            var26 = var15.unshift;
            var26 = var26.bind(var15)(var27);
case 203:
            var26 = var22.sourceType;
            var22 = 'attachment';
            var22 = var22 === var26;
            if(!var22) { _fun0004_ip = 205; continue _fun0004 }
case 206:
            var22 = var25;
case 205:
            if(!var22) { _fun0004_ip = 185; continue _fun0004 }
case 207:
            var22 = var15.unshift;
            var22 = var22.bind(var15)(var24);
case 185:
            var22 = var17.reactions;
            var22 = var22.length;
            var22 = var22 > var9;
            if(!var22) { _fun0004_ip = 208; continue _fun0004 }
case 209:
            var24 = var17.isPoll;
            var24 = var24.bind(var17)();
            var24 = !var24;
            if(var24) { _fun0004_ip = 210; continue _fun0004 }
case 211:
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var25 = 73;
            var25 = var27[var25];
            var26 = var26.bind(var3)(var25);
            var25 = var26.hasNonVoteReactions;
            var24 = var25.bind(var26)(var17);
case 210:
            var22 = var24;
case 208:
            if(!var22) { _fun0004_ip = 212; continue _fun0004 }
case 213:
            var22 = var15.unshift;
            var22 = var22.bind(var15)(var23);
            if(!var13) { _fun0004_ip = 212; continue _fun0004 }
case 214:
            var13 = var15.unshift;
            var13 = var13.bind(var15)(var19);
case 212:
            var13 = _closure1_slot26;
            var19 = var13.bind(var3)(var18);
            var18 = var19.bind(var3)();
            var13 = var18.done;
            if(var13) { _fun0004_ip = 215; continue _fun0004 }
case 216:
            var22 = var18.value;
            var23 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var21];
            var13 = var23.bind(var3)(var13);
            var13 = var13.PollMessageContextItemTypes;
            var13 = var13.END_EARLY;
            if(!(var22 === var13)) { _fun0004_ip = 217; continue _fun0004 }
case 218:
            var13 = var15.unshift;
            var13 = var13.bind(var15)(var20);
case 217:
            var22 = var19.bind(var3)();
            var13 = var22.done;
            var18 = var22;
            if(!var13) { _fun0004_ip = 216; continue _fun0004 }
case 215:
            var13 = var15.unshift;
            var13 = var13.bind(var15)(var16);
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var13 = 74;
            var13 = var18[var13];
            var16 = var16.bind(var3)(var13);
            var13 = var16.canViewInteractionInfo;
            var13 = var13.bind(var16)(var17);
            if(!var13) { _fun0004_ip = 219; continue _fun0004 }
case 220:
            var13 = var15.unshift;
            var13 = var13.bind(var15)(var14);
case 219:
            var14 = var15.filter;
            var13 = function(arg1) {
                var3 = _closure2_slot11;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var15 = var14.bind(var15)(var13);
            var14 = var15.sort;
            var13 = function(arg1, arg2) {
                var1 = arg1;
                var2 = var1.sortKey;
                var1 = arg2;
                var1 = var1.sortKey;
                var1 = var2 - var1;
                return var1;
            };
            var16 = var14.bind(var15)(var13);
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 75;
            var13 = var15[var13];
            var15 = var14.bind(var3)(var13);
            var14 = var15.groupBy;
            var13 = 'section';
            var14 = var14.bind(var15)(var16, var13);
            var13 = var11.Object;
            var11 = var13.values;
            var13 = var11.bind(var13)(var14);
            var11 = var13.map;
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
            var4 = var11.bind(var13)(var4);
            var4 = var2.bind(var3)(var4);
            return var4;
case 102:
            var4 = {};
            var11 = _closure1_slot25;
            var11 = var11.PRIMARY;
            var4['section'] = var11;
            var4['sortKey'] = var12;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 40;
            var15 = var14[var11];
            var15 = var13.bind(var3)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var11 = var14[var11];
            var11 = var13.bind(var3)(var11);
            var11 = var11.t;
            var11 = var11.k5WiPT;
            var11 = var15.bind(var16)(var11);
            var4['label'] = var11;
            var11 = 44;
            var11 = var14[var11];
            var11 = var13.bind(var3)(var11);
            var11 = var11.LinkIcon;
            var4['IconComponent'] = var11;
            var4 = var6.bind(var3)(var4);
            var11 = new Array(1);
            var11[0] = var4;
            var4 = new Array(1);
            var4[0] = var11;
            var4 = var2.bind(var3)(var4);
            return var4;
case 100:
            var4 = new Array(0);
            if(!var10) { _fun0004_ip = 221; continue _fun0004 }
case 222:
            var11 = var4.push;
            var10 = {};
            var13 = _closure1_slot25;
            var13 = var13.PRIMARY;
            var10['section'] = var13;
            var10['sortKey'] = var12;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 40;
            var15 = var14[var12];
            var15 = var13.bind(var3)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.t;
            var12 = var12.5911LS;
            var12 = var15.bind(var16)(var12);
            var10['label'] = var12;
            var12 = 41;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.RetryIcon;
            var10['IconComponent'] = var12;
            var10 = var6.bind(var3)(var10);
            var10 = var11.bind(var4)(var10);
case 221:
            var1 = var1 != var5;
            if(!var1) { _fun0004_ip = 223; continue _fun0004 }
case 224:
            var5 = var5.length;
            var1 = var5 > var9;
case 223:
            if(!var1) { _fun0004_ip = 225; continue _fun0004 }
case 226:
            var5 = var4.push;
            var1 = {};
            var9 = _closure1_slot25;
            var9 = var9.PRIMARY;
            var1['section'] = var9;
            var1['sortKey'] = var8;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 40;
            var11 = var10[var8];
            var11 = var9.bind(var3)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var8 = var10[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.t;
            var8 = var8.JrGD7O;
            var8 = var11.bind(var12)(var8);
            var1['label'] = var8;
            var8 = 42;
            var8 = var10[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.CopyIcon;
            var1['IconComponent'] = var8;
            var1 = var6.bind(var3)(var1);
            var1 = var5.bind(var4)(var1);
case 225:
            var5 = var4.push;
            var1 = {};
            var8 = _closure1_slot25;
            var8 = var8.PRIMARY;
            var1['section'] = var8;
            var8 = 3;
            var1['sortKey'] = var8;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 40;
            var10 = var9[var7];
            var10 = var8.bind(var3)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var7 = var9[var7];
            var7 = var8.bind(var3)(var7);
            var7 = var7.t;
            var7 = var7.xwMqDw;
            var7 = var10.bind(var11)(var7);
            var1['label'] = var7;
            var7 = 43;
            var7 = var9[var7];
            var7 = var8.bind(var3)(var7);
            var7 = var7.TrashIcon;
            var1['IconComponent'] = var7;
            var7 = 'danger';
            var1['variant'] = var7;
            var1 = var6.bind(var3)(var1);
            var1 = var5.bind(var4)(var1);
            var1 = new Array(1);
            var1[0] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
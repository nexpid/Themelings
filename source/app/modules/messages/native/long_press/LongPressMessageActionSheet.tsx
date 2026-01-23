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
    var4 = 73;
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
            var43 = var1.user;
            var17 = var1.message;
            var _closure2_slot3 = var17;
            var48 = var1.channel;
            var _closure2_slot4 = var48;
            var5 = var1.chatInputRef;
            var _closure2_slot5 = var5;
            var22 = var1.selectedMedia;
            var _closure2_slot6 = var22;
            var5 = var1.actionSheetSource;
            var73 = undefined;
            if(!(var3 !== var5)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var73 = var5;
case 38:
            var _closure2_slot7 = var73;
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
            var5[1] = var48;
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
            var29 = 16;
            var1 = var6[var29];
            var2 = var10.bind(var3)(var1);
            var1 = var2.useCanReplyToMessage;
            var34 = var1.bind(var2)(var48, var17);
            var31 = 17;
            var1 = var6[var31];
            var2 = var10.bind(var3)(var1);
            var1 = var2.useCanForwardMessage;
            var26 = var1.bind(var2)(var17);
            var5 = _closure1_slot10;
            var2 = var5.getGuild;
            var1 = var48.guild_id;
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
            var61 = var1.enabled;
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
            var56 = var1[var9];
            var12 = 1;
            var53 = var1[var12];
            var1 = 20;
            var1 = var6[var1];
            var1 = var5.bind(var3)(var1);
            var1 = var1.bind(var3)();
            var59 = !var1;
            var19 = 21;
            var1 = var6[var19];
            var10 = var10.bind(var3)(var1);
            var1 = var10.useIsNonModInLockedThread;
            var50 = var1.bind(var10)(var48);
            var1 = 22;
            var1 = var6[var1];
            var6 = var5.bind(var3)(var1);
            var1 = null;
            var10 = var1 == var48;
            var5 = undefined;
            if(var10) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var5 = var48.id;
case 44:
            var32 = var6.bind(var3)(var5);
            var10 = _closure1_slot5;
            var6 = var10.getMessage;
            var5 = var17.id;
            var5 = var6.bind(var10)(var5);
            var20 = var1 != var5;
            var14 = var17.interactionError;
            var5 = _closure1_slot12;
            var6 = var5.EXPLICIT_CONTENT;
            var11 = _closure1_slot1;
            var5 = _closure1_slot2;
            var21 = 23;
            var10 = var5[var21];
            var10 = var11.bind(var3)(var10);
            var18 = var10.bind(var3)(var17);
            var10 = _closure1_slot0;
            var5 = var5[var19];
            var10 = var10.bind(var3)(var5);
            var5 = var10.useIsActiveChannelOrUnarchivableThread;
            var11 = var5.bind(var10)(var48);
            var _closure2_slot10 = var11;
            var10 = var1 == var43;
            var5 = undefined;
            if(var10) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var10 = var43.isNonUserBot;
            var5 = var10.bind(var43)();
case 46:
            var52 = true;
            var46 = var52 === var5;
            var10 = _closure1_slot9;
            var5 = var10.getId;
            var42 = var5.bind(var10)();
            var10 = _closure1_slot0;
            var25 = _closure1_slot2;
            var5 = 24;
            var5 = var25[var5];
            var5 = var10.bind(var3)(var5);
            var10 = var5.DeveloperMode;
            var5 = var10.getSetting;
            var67 = var5.bind(var10)();
            var13 = _closure1_slot11;
            var10 = var13.can;
            var5 = _closure1_slot23;
            var5 = var5.MANAGE_MESSAGES;
            var13 = var10.bind(var13)(var5, var48);
            var5 = var17.author;
            var5 = var5.id;
            var5 = var5 === var42;
            var23 = var17.hasFlag;
            var10 = _closure1_slot19;
            var10 = var10.CROSSPOSTED;
            var10 = var23.bind(var17)(var10);
            var24 = _closure1_slot1;
            var23 = 25;
            var23 = var25[var23];
            var23 = var24.bind(var3)(var23);
            var38 = var23.bind(var3)(var17, var48);
            var40 = !var10;
            if(!var40) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var23 = var48.type;
            var10 = _closure1_slot15;
            var10 = var10.GUILD_ANNOUNCEMENT;
            var40 = var23 === var10;
case 48:
            if(!var40) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var23 = var1 == var15;
            var10 = undefined;
            if(var23) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var25 = var15.features;
            var24 = var25.has;
            var23 = _closure1_slot16;
            var23 = var23.NEWS;
            var10 = var24.bind(var25)(var23);
case 52:
            var40 = var10;
case 50:
            if(!var40) { _fun0004_ip = 54; continue _fun0004 }
case 55:
            if(var5) { _fun0004_ip = 56; continue _fun0004 }
case 57:
            var5 = var13;
case 56:
            var40 = var5;
case 54:
            if(!var40) { _fun0004_ip = 58; continue _fun0004 }
case 59:
            var10 = var17.type;
            var5 = _closure1_slot21;
            var5 = var5.DEFAULT;
            var40 = var10 === var5;
case 58:
            if(!var40) { _fun0004_ip = 60; continue _fun0004 }
case 61:
            var5 = var17.isPoll;
            var5 = var5.bind(var17)();
            var40 = !var5;
case 60:
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var19];
            var10 = var10.bind(var3)(var5);
            var5 = var10.computeCanStartPublicThread;
            var69 = var5.bind(var10)(var48, var17);
            var5 = var17.getContentMessage;
            var10 = var5.bind(var17)();
            var5 = var10.embeds;
            var19 = var5.length;
            var5 = _closure1_slot8;
            var5 = var5.bind(var3)(var10);
            if(var5) { _fun0004_ip = 62; continue _fun0004 }
case 63:
            var5 = var10.content;
            _fun0004_ip = 64; continue _fun0004;
case 62:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 26;
            var23 = var25[var23];
            var24 = var24.bind(var3)(var23);
            var23 = var24.getAllTextDisplayContent;
            var10 = var10.components;
            var5 = var23.bind(var24)(var10);
case 64:
            var47 = var13;
            if(var47) { _fun0004_ip = 65; continue _fun0004 }
case 66:
            var10 = var17.canDeleteOwnMessage;
            var47 = var10.bind(var17)(var42);
case 65:
            if(!var47) { _fun0004_ip = 67; continue _fun0004 }
case 68:
            var47 = var19 > var9;
case 67:
            if(!var47) { _fun0004_ip = 69; continue _fun0004 }
case 70:
            var10 = var17.author;
            var23 = var10.id;
            var10 = _closure1_slot17;
            var47 = var23 !== var10;
case 69:
            if(!var47) { _fun0004_ip = 71; continue _fun0004 }
case 72:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var10 = 27;
            var10 = var24[var10];
            var25 = var23.bind(var3)(var10);
            var24 = var25.hasFlag;
            var23 = var17.flags;
            var10 = _closure1_slot19;
            var10 = var10.EPHEMERAL;
            var10 = var24.bind(var25)(var23, var10);
            var47 = !var10;
case 71:
            if(!var47) { _fun0004_ip = 73; continue _fun0004 }
case 74:
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var10 = 28;
            var10 = var24[var10];
            var10 = var23.bind(var3)(var10);
            var10 = var10.bind(var3)(var17);
            var47 = var10 >= var12;
case 73:
            var10 = !var20;
            if(var20) { _fun0004_ip = 75; continue _fun0004 }
case 76:
            var6 = var14 === var6;
            var10 = !var6;
case 75:
            if(!var10) { _fun0004_ip = 77; continue _fun0004 }
case 78:
            var6 = var17.interactionData;
            var6 = var1 == var6;
            if(var6) { _fun0004_ip = 79; continue _fun0004 }
case 80:
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var14 = 29;
            var14 = var23[var14];
            var23 = var20.bind(var3)(var14);
            var20 = var23.canRetryInteractionData;
            var14 = var17.interactionData;
            var6 = var20.bind(var23)(var14);
case 79:
            var10 = var6;
case 77:
            var20 = var17.attachments;
            var14 = var20.filter;
            var6 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = arg1;
                    var2 = var3.flags;
                    var1 = null;
                    var1 = var1 == var2;
                    if(var1) { _fun0006_ip = 81; continue _fun0006 }
case 82:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 27;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.hasFlag;
                    var3 = var3.flags;
                    var2 = _closure1_slot18;
                    var2 = var2.IS_THUMBNAIL;
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = !var2;
case 81:
                    return var1;
                }
            };
            var6 = var14.bind(var20)(var6);
            var14 = var17.author;
            var14 = var14.id;
            var25 = var14 === var42;
            if(!var25) { _fun0004_ip = 83; continue _fun0004 }
case 84:
            var6 = var6.length;
            var6 = var6 > var12;
            if(var6) { _fun0004_ip = 85; continue _fun0004 }
case 86:
            var20 = var17.content;
            var14 = '';
            var6 = var14 !== var20;
case 85:
            var25 = var6;
case 83:
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
            var2 = 30;
            var2 = var14[var2];
            var14 = var6.bind(var3)(var2);
            var6 = var14.useIsReportToModEnabled;
            var20 = var1 == var15;
            var2 = undefined;
            if(var20) { _fun0004_ip = 87; continue _fun0004 }
case 88:
            var2 = var15.id;
case 87:
            var62 = var6.bind(var14)(var2);
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
                var8 = 31;
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
                    var1 = 32;
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
                    var5 = 33;
                    var5 = var11[var5];
                    var5 = var9.bind(var3)(var5);
                    var6 = var5.ActionSheet;
                    var5 = {};
                    var7 = true;
                    var5['showGradient'] = var7;
                    var7 = 34;
                    var7 = var11[var7];
                    var13 = var9.bind(var3)(var7);
                    var7 = var13.isMetaQuest;
                    var7 = var7.bind(var13)();
                    var5['startExpanded'] = var7;
                    var7 = 35;
                    var7 = var11[var7];
                    var14 = var9.bind(var3)(var7);
                    var13 = var14.shouldShowEmojiRow;
                    var11 = _closure2_slot8;
                    var9 = _closure2_slot3;
                    var7 = _closure2_slot10;
                    var7 = var13.bind(var14)(var11, var9, var7);
                    if(!var7) { _fun0007_ip = 89; continue _fun0007 }
case 90:
                    var11 = _closure1_slot24;
                    var9 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var8 = 36;
                    var8 = var13[var8];
                    var9 = var9.bind(var3)(var8);
                    var8 = {};
                    var13 = _closure2_slot3;
                    var8['message'] = var13;
                    var12 = _closure2_slot4;
                    var8['channel'] = var12;
                    var7 = var11.bind(var3)(var9, var8);
case 89:
                    var5['header'] = var7;
                    var7 = null;
                    var8 = var7 == var10;
                    var7 = undefined;
                    if(var8) { _fun0007_ip = 91; continue _fun0007 }
case 92:
                    var9 = var10.map;
                    var8 = function(arg1, arg2) {
                        var7 = arg1;
                        var5 = _closure1_slot24;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 31;
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
                            var2 = 31;
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
case 91:
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
            if(!(var15 !== var14)) { _fun0004_ip = 93; continue _fun0004 }
case 94:
            var15 = var17.type;
            var14 = _closure1_slot21;
            var14 = var14.THREAD_STARTER_MESSAGE;
            if(!(var15 !== var14)) { _fun0004_ip = 95; continue _fun0004 }
case 96:
            var14 = {};
            var64 = _closure1_slot0;
            var65 = _closure1_slot2;
            var78 = 37;
            var15 = var65[var78];
            var15 = var64.bind(var3)(var15);
            var23 = var15.intl;
            var20 = var23.string;
            var15 = var65[var78];
            var15 = var64.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.fsBWmS;
            var15 = var20.bind(var23)(var15);
            var14['label'] = var15;
            var15 = 42;
            var15 = var65[var15];
            var15 = var64.bind(var3)(var15);
            var15 = var15.PencilIcon;
            var14['IconComponent'] = var15;
            var51 = _closure1_slot25;
            var15 = var51.PRIMARY;
            var14['section'] = var15;
            var14['sortKey'] = var12;
            var49 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var65[var78];
            var15 = var64.bind(var3)(var15);
            var23 = var15.intl;
            var20 = var23.string;
            var15 = var65[var78];
            var15 = var64.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.5IEsGx;
            var15 = var20.bind(var23)(var15);
            var14['label'] = var15;
            var15 = 43;
            var15 = var65[var15];
            var15 = var64.bind(var3)(var15);
            var15 = var15.ArrowAngleLeftUpIcon;
            var14['IconComponent'] = var15;
            var15 = var51.PRIMARY;
            var14['section'] = var15;
            var14['sortKey'] = var8;
            var35 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var65[var78];
            var15 = var64.bind(var3)(var15);
            var23 = var15.intl;
            var20 = var23.string;
            var15 = var65[var78];
            var15 = var64.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.I3ltXO;
            var15 = var20.bind(var23)(var15);
            var14['label'] = var15;
            var20 = _closure1_slot1;
            var15 = 44;
            var15 = var65[var15];
            var15 = var20.bind(var3)(var15);
            var14['IconComponent'] = var15;
            var15 = var51.PRIMARY;
            var14['section'] = var15;
            var15 = 3;
            var14['sortKey'] = var15;
            var33 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var65[var78];
            var15 = var64.bind(var3)(var15);
            var23 = var15.intl;
            var20 = var23.string;
            var15 = var65[var78];
            var15 = var64.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.rBIGBL;
            var15 = var20.bind(var23)(var15);
            var14['label'] = var15;
            var20 = 45;
            var15 = var65[var20];
            var15 = var64.bind(var3)(var15);
            var15 = var15.ThreadIcon;
            var14['IconComponent'] = var15;
            var15 = var51.PRIMARY;
            var14['section'] = var15;
            var15 = 4;
            var14['sortKey'] = var15;
            var71 = var6.bind(var3)(var14);
            var14 = {};
            var23 = var65[var78];
            var23 = var64.bind(var3)(var23);
            var30 = var23.intl;
            var24 = var30.string;
            var23 = var65[var78];
            var23 = var64.bind(var3)(var23);
            var23 = var23.t;
            var23 = var23.39d0Wj;
            var23 = var24.bind(var30)(var23);
            var14['label'] = var23;
            var20 = var65[var20];
            var20 = var64.bind(var3)(var20);
            var20 = var20.ThreadIcon;
            var14['IconComponent'] = var20;
            var20 = var51.GENERAL;
            var14['section'] = var20;
            var14['sortKey'] = var15;
            var72 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var65[var78];
            var15 = var64.bind(var3)(var15);
            var23 = var15.intl;
            var20 = var23.string;
            var15 = var65[var78];
            var15 = var64.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.JrGD7E;
            var15 = var20.bind(var23)(var15);
            var14['label'] = var15;
            var15 = 39;
            var15 = var65[var15];
            var15 = var64.bind(var3)(var15);
            var15 = var15.CopyIcon;
            var14['IconComponent'] = var15;
            var15 = var51.GENERAL;
            var14['section'] = var15;
            var15 = 5;
            var14['sortKey'] = var15;
            var37 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var65[var78];
            var15 = var64.bind(var3)(var15);
            var23 = var15.intl;
            var20 = var23.string;
            var15 = var65[var78];
            var15 = var64.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.RpE9k7;
            var15 = var20.bind(var23)(var15);
            var14['label'] = var15;
            var15 = 46;
            var15 = var65[var15];
            var15 = var64.bind(var3)(var15);
            var15 = var15.ChatMarkUnreadIcon;
            var14['IconComponent'] = var15;
            var15 = var51.GENERAL;
            var14['section'] = var15;
            var15 = 6;
            var14['sortKey'] = var15;
            var63 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var65[var78];
            var15 = var64.bind(var3)(var15);
            var23 = var15.intl;
            var20 = var23.string;
            var15 = var65[var78];
            var15 = var64.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.grdwwt;
            var15 = var20.bind(var23)(var15);
            var14['label'] = var15;
            var15 = 47;
            var15 = var65[var15];
            var15 = var64.bind(var3)(var15);
            var15 = var15.ClockXIcon;
            var14['IconComponent'] = var15;
            var15 = var51.GENERAL;
            var14['section'] = var15;
            var15 = 7;
            var14['sortKey'] = var15;
            var20 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var65[var78];
            var15 = var64.bind(var3)(var15);
            var24 = var15.intl;
            var23 = var24.string;
            var15 = var65[var78];
            var15 = var64.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.gHp0C4;
            var15 = var23.bind(var24)(var15);
            var14['label'] = var15;
            var15 = 48;
            var15 = var65[var15];
            var15 = var64.bind(var3)(var15);
            var15 = var15.ReactionIcon;
            var14['IconComponent'] = var15;
            var15 = var51.GENERAL;
            var14['section'] = var15;
            var15 = 8;
            var14['sortKey'] = var15;
            var23 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var65[var78];
            var15 = var64.bind(var3)(var15);
            var30 = var15.intl;
            var24 = var30.string;
            var15 = var65[var78];
            var15 = var64.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.MFGE51;
            var15 = var24.bind(var30)(var15);
            var14['label'] = var15;
            var15 = 49;
            var15 = var65[var15];
            var15 = var64.bind(var3)(var15);
            var15 = var15.AnnouncementsIcon;
            var14['IconComponent'] = var15;
            var15 = var51.GENERAL;
            var14['section'] = var15;
            var15 = 9;
            var14['sortKey'] = var15;
            var45 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var65[var78];
            var15 = var64.bind(var3)(var15);
            var30 = var15.intl;
            var24 = var30.string;
            var15 = var65[var78];
            var15 = var64.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.CvQ18w;
            var15 = var24.bind(var30)(var15);
            var14['label'] = var15;
            var68 = 50;
            var15 = var65[var68];
            var15 = var64.bind(var3)(var15);
            var15 = var15.PinIcon;
            var14['IconComponent'] = var15;
            var15 = var51.GENERAL;
            var14['section'] = var15;
            var15 = 10;
            var14['sortKey'] = var15;
            var36 = var6.bind(var3)(var14);
            var14 = {};
            var24 = var65[var78];
            var24 = var64.bind(var3)(var24);
            var39 = var24.intl;
            var30 = var39.string;
            var24 = var65[var78];
            var24 = var64.bind(var3)(var24);
            var24 = var24.t;
            var24 = var24.Bse+F/;
            var24 = var30.bind(var39)(var24);
            var14['label'] = var24;
            var24 = var65[var68];
            var24 = var64.bind(var3)(var24);
            var24 = var24.PinIcon;
            var14['IconComponent'] = var24;
            var24 = var51.GENERAL;
            var14['section'] = var24;
            var14['sortKey'] = var15;
            var39 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var65[var78];
            var15 = var64.bind(var3)(var15);
            var30 = var15.intl;
            var24 = var30.string;
            var15 = var65[var78];
            var15 = var64.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.tpxJto;
            var15 = var24.bind(var30)(var15);
            var14['label'] = var15;
            var15 = 51;
            var24 = var65[var15];
            var24 = var64.bind(var3)(var24);
            var24 = var24.NitroWheelIcon;
            var14['IconComponent'] = var24;
            var24 = var51.GENERAL;
            var14['section'] = var24;
            var30 = 11;
            var14['sortKey'] = var30;
            var60 = var6.bind(var3)(var14);
            var14 = {};
            var24 = var65[var78];
            var24 = var64.bind(var3)(var24);
            var44 = var24.intl;
            var41 = var44.string;
            var24 = var65[var78];
            var24 = var64.bind(var3)(var24);
            var24 = var24.t;
            var24 = var24.tpxJto;
            var24 = var41.bind(var44)(var24);
            var14['label'] = var24;
            var24 = 52;
            var41 = var65[var24];
            var41 = var64.bind(var3)(var41);
            var41 = var41.BookmarkOutlineIcon;
            var14['IconComponent'] = var41;
            var41 = var51.GENERAL;
            var14['section'] = var41;
            var14['sortKey'] = var30;
            var58 = var6.bind(var3)(var14);
            var14 = {};
            var41 = var65[var78];
            var41 = var64.bind(var3)(var41);
            var54 = var41.intl;
            var44 = var54.string;
            var41 = var65[var78];
            var41 = var64.bind(var3)(var41);
            var41 = var41.t;
            var41 = var41.SvXS1Z;
            var41 = var44.bind(var54)(var41);
            var14['label'] = var41;
            var41 = 53;
            var41 = var65[var41];
            var41 = var64.bind(var3)(var41);
            var41 = var41.BookmarkIcon;
            var14['IconComponent'] = var41;
            var41 = var51.GENERAL;
            var14['section'] = var41;
            var14['sortKey'] = var30;
            var57 = var6.bind(var3)(var14);
            var14 = {};
            var30 = var65[var78];
            var30 = var64.bind(var3)(var30);
            var44 = var30.intl;
            var41 = var44.string;
            var30 = var65[var78];
            var30 = var64.bind(var3)(var30);
            var30 = var30.t;
            var30 = var30.mJ3P0N;
            var30 = var41.bind(var44)(var30);
            var14['label'] = var30;
            var66 = 54;
            var30 = var65[var66];
            var30 = var64.bind(var3)(var30);
            var30 = var30.ClockIcon;
            var14['IconComponent'] = var30;
            var14['arrow'] = var52;
            var30 = var51.GENERAL;
            var14['section'] = var30;
            var14['sortKey'] = var28;
            var55 = var6.bind(var3)(var14);
            var14 = {};
            var30 = var65[var78];
            var30 = var64.bind(var3)(var30);
            var44 = var30.intl;
            var41 = var44.string;
            var30 = var65[var78];
            var30 = var64.bind(var3)(var30);
            var30 = var30.t;
            var30 = var30.vrbqs1;
            var30 = var41.bind(var44)(var30);
            var14['label'] = var30;
            var30 = var65[var66];
            var30 = var64.bind(var3)(var30);
            var30 = var30.ClockIcon;
            var14['IconComponent'] = var30;
            var14['arrow'] = var52;
            var30 = var51.GENERAL;
            var14['section'] = var30;
            var14['sortKey'] = var28;
            var54 = var6.bind(var3)(var14);
            var14 = {};
            var28 = var65[var78];
            var28 = var64.bind(var3)(var28);
            var41 = var28.intl;
            var30 = var41.string;
            var28 = var65[var78];
            var28 = var64.bind(var3)(var28);
            var28 = var28.t;
            var28 = var28.PHjkRE;
            var28 = var30.bind(var41)(var28);
            var14['label'] = var28;
            var28 = 55;
            var28 = var65[var28];
            var28 = var64.bind(var3)(var28);
            var28 = var28.RobotIcon;
            var14['IconComponent'] = var28;
            var14['arrow'] = var52;
            var28 = var51.GENERAL;
            var14['section'] = var28;
            var14['sortKey'] = var16;
            var16 = var6.bind(var3)(var14);
            var14 = {};
            var28 = var65[var78];
            var28 = var64.bind(var3)(var28);
            var41 = var28.intl;
            var30 = var41.string;
            var28 = var65[var78];
            var28 = var64.bind(var3)(var28);
            var28 = var28.t;
            var28 = var28.g33r/P;
            var28 = var30.bind(var41)(var28);
            var14['label'] = var28;
            var28 = 56;
            var28 = var65[var28];
            var28 = var64.bind(var3)(var28);
            var28 = var28.ChatIcon;
            var14['IconComponent'] = var28;
            var28 = var51.GENERAL;
            var14['section'] = var28;
            var28 = 14;
            var14['sortKey'] = var28;
            var41 = var6.bind(var3)(var14);
            var14 = {};
            var28 = var65[var78];
            var28 = var64.bind(var3)(var28);
            var44 = var28.intl;
            var30 = var44.string;
            var28 = var65[var78];
            var28 = var64.bind(var3)(var28);
            var28 = var28.t;
            var28 = var28.P8tvKG;
            var28 = var30.bind(var44)(var28);
            var14['label'] = var28;
            var28 = 57;
            var28 = var65[var28];
            var28 = var64.bind(var3)(var28);
            var28 = var28.AtIcon;
            var14['IconComponent'] = var28;
            var28 = var51.GENERAL;
            var14['section'] = var28;
            var28 = 15;
            var14['sortKey'] = var28;
            var44 = var6.bind(var3)(var14);
            var14 = {};
            var28 = var65[var78];
            var28 = var64.bind(var3)(var28);
            var70 = var28.intl;
            var30 = var70.string;
            var28 = var65[var78];
            var28 = var64.bind(var3)(var28);
            var28 = var28.t;
            var28 = var28.S/xNKV;
            var28 = var30.bind(var70)(var28);
            var14['label'] = var28;
            var70 = 58;
            var28 = var65[var70];
            var28 = var64.bind(var3)(var28);
            var28 = var28.DownloadIcon;
            var14['IconComponent'] = var28;
            var28 = var51.GENERAL;
            var14['section'] = var28;
            var14['sortKey'] = var29;
            var28 = var6.bind(var3)(var14);
            var14 = {};
            var30 = var65[var78];
            var30 = var64.bind(var3)(var30);
            var75 = var30.intl;
            var74 = var75.string;
            var30 = var65[var78];
            var30 = var64.bind(var3)(var30);
            var30 = var30.t;
            var30 = var30.JVuuz3;
            var30 = var74.bind(var75)(var30);
            var14['label'] = var30;
            var30 = var65[var70];
            var30 = var64.bind(var3)(var30);
            var30 = var30.DownloadIcon;
            var14['IconComponent'] = var30;
            var30 = var51.GENERAL;
            var14['section'] = var30;
            var14['sortKey'] = var29;
            var30 = var6.bind(var3)(var14);
            var14 = {};
            var74 = var65[var78];
            var74 = var64.bind(var3)(var74);
            var76 = var74.intl;
            var75 = var76.string;
            var74 = var65[var78];
            var74 = var64.bind(var3)(var74);
            var74 = var74.t;
            var74 = var74.vbAEaA;
            var74 = var75.bind(var76)(var74);
            var14['label'] = var74;
            var70 = var65[var70];
            var70 = var64.bind(var3)(var70);
            var70 = var70.DownloadIcon;
            var14['IconComponent'] = var70;
            var70 = var51.GENERAL;
            var14['section'] = var70;
            var14['sortKey'] = var29;
            var29 = var6.bind(var3)(var14);
            var14 = {};
            var70 = var65[var78];
            var70 = var64.bind(var3)(var70);
            var75 = var70.intl;
            var74 = var75.string;
            var70 = var65[var78];
            var70 = var64.bind(var3)(var70);
            var70 = var70.t;
            var70 = var70.92CPQ+;
            var70 = var74.bind(var75)(var70);
            var14['label'] = var70;
            var70 = 41;
            var74 = var65[var70];
            var74 = var64.bind(var3)(var74);
            var74 = var74.LinkIcon;
            var14['IconComponent'] = var74;
            var74 = var51.GENERAL;
            var14['section'] = var74;
            var14['sortKey'] = var31;
            var31 = var6.bind(var3)(var14);
            var14 = {};
            var74 = var65[var78];
            var74 = var64.bind(var3)(var74);
            var76 = var74.intl;
            var75 = var76.string;
            var74 = var65[var78];
            var74 = var64.bind(var3)(var74);
            var74 = var74.t;
            var74 = var74.Xrt5Po;
            var74 = var75.bind(var76)(var74);
            var14['label'] = var74;
            var70 = var65[var70];
            var70 = var64.bind(var3)(var70);
            var70 = var70.LinkIcon;
            var14['IconComponent'] = var70;
            var70 = var51.GENERAL;
            var14['section'] = var70;
            var14['sortKey'] = var68;
            var70 = var6.bind(var3)(var14);
            var14 = {};
            var68 = var65[var78];
            var68 = var64.bind(var3)(var68);
            var75 = var68.intl;
            var74 = var75.string;
            var68 = var65[var78];
            var68 = var64.bind(var3)(var68);
            var68 = var68.t;
            var68 = var68.Rjezbz;
            var68 = var74.bind(var75)(var68);
            var14['label'] = var68;
            var66 = var65[var66];
            var66 = var64.bind(var3)(var66);
            var66 = var66.ClockIcon;
            var14['IconComponent'] = var66;
            var14['arrow'] = var52;
            var52 = var51.GENERAL;
            var14['section'] = var52;
            var14['sortKey'] = var15;
            var14 = var6.bind(var3)(var14);
            var15 = {};
            var52 = var65[var78];
            var52 = var64.bind(var3)(var52);
            var68 = var52.intl;
            var66 = var68.string;
            var52 = var65[var78];
            var52 = var64.bind(var3)(var52);
            var52 = var52.t;
            var52 = var52.zBoHlf;
            var52 = var66.bind(var68)(var52);
            var15['label'] = var52;
            var52 = 59;
            var52 = var65[var52];
            var52 = var64.bind(var3)(var52);
            var52 = var52.IdIcon;
            var15['IconComponent'] = var52;
            var51 = var51.GENERAL;
            var15['section'] = var51;
            var15['sortKey'] = var24;
            var68 = var6.bind(var3)(var15);
            var15 = {};
            if(!(!(var19 > var12))) { _fun0004_ip = 97; continue _fun0004 }
case 98:
            var52 = _closure1_slot0;
            var19 = _closure1_slot2;
            var24 = var19[var78];
            var24 = var52.bind(var3)(var24);
            var51 = var24.intl;
            var24 = var51.string;
            var19 = var19[var78];
            var19 = var52.bind(var3)(var19);
            var19 = var19.t;
            var19 = var19.4sxKOb;
            var19 = var24.bind(var51)(var19);
            _fun0004_ip = 99; continue _fun0004;
case 97:
            var64 = _closure1_slot0;
            var24 = _closure1_slot2;
            var51 = var24[var78];
            var51 = var64.bind(var3)(var51);
            var52 = var51.intl;
            var51 = var52.string;
            var24 = var24[var78];
            var24 = var64.bind(var3)(var24);
            var24 = var24.t;
            var24 = var24.wUIMqa;
            var19 = var51.bind(var52)(var24);
case 99:
            var15['label'] = var19;
            var76 = _closure1_slot0;
            var77 = _closure1_slot2;
            var19 = 60;
            var19 = var77[var19];
            var19 = var76.bind(var3)(var19);
            var19 = var19.XSmallBoldIcon;
            var15['IconComponent'] = var19;
            var74 = 'danger';
            var15['variant'] = var74;
            var51 = _closure1_slot25;
            var19 = var51.DESTRUCTIVE;
            var15['section'] = var19;
            var19 = 98;
            var15['sortKey'] = var19;
            var52 = var6.bind(var3)(var15);
            var15 = {};
            var19 = var77[var78];
            var19 = var76.bind(var3)(var19);
            var64 = var19.intl;
            var24 = var64.string;
            var19 = var77[var78];
            var19 = var76.bind(var3)(var19);
            var19 = var19.t;
            var19 = var19.ZbtGBm;
            var19 = var24.bind(var64)(var19);
            var15['label'] = var19;
            var75 = 40;
            var19 = var77[var75];
            var19 = var76.bind(var3)(var19);
            var19 = var19.TrashIcon;
            var15['IconComponent'] = var19;
            var15['variant'] = var74;
            var19 = var51.DESTRUCTIVE;
            var15['section'] = var19;
            var19 = 99;
            var15['sortKey'] = var19;
            var19 = var6.bind(var3)(var15);
            var15 = {};
            var24 = var77[var78];
            var24 = var76.bind(var3)(var24);
            var65 = var24.intl;
            var64 = var65.string;
            var24 = var77[var78];
            var24 = var76.bind(var3)(var24);
            var24 = var24.t;
            var24 = var24.kFwAsa;
            var24 = var64.bind(var65)(var24);
            var15['label'] = var24;
            var24 = var77[var75];
            var24 = var76.bind(var3)(var24);
            var24 = var24.TrashIcon;
            var15['IconComponent'] = var24;
            var15['variant'] = var74;
            var24 = var51.DESTRUCTIVE;
            var15['section'] = var24;
            var24 = 100;
            var15['sortKey'] = var24;
            var24 = var6.bind(var3)(var15);
            var15 = {};
            var64 = var77[var78];
            var64 = var76.bind(var3)(var64);
            var66 = var64.intl;
            var65 = var66.string;
            var64 = var77[var78];
            var64 = var76.bind(var3)(var64);
            var64 = var64.t;
            var64 = var64.+78Pfm;
            var64 = var65.bind(var66)(var64);
            var15['label'] = var64;
            var64 = 61;
            var65 = var77[var64];
            var65 = var76.bind(var3)(var65);
            var65 = var65.FlagIcon;
            var15['IconComponent'] = var65;
            var15['variant'] = var74;
            var65 = var51.DESTRUCTIVE;
            var15['section'] = var65;
            var65 = 101;
            var15['sortKey'] = var65;
            var66 = var6.bind(var3)(var15);
            var15 = {};
            var79 = var77[var78];
            var79 = var76.bind(var3)(var79);
            var81 = var79.intl;
            var80 = var81.string;
            var79 = var77[var78];
            var79 = var76.bind(var3)(var79);
            var79 = var79.t;
            var79 = var79.n5EBAJ;
            var79 = var80.bind(var81)(var79);
            var15['label'] = var79;
            var15['variant'] = var74;
            var79 = 62;
            var79 = var77[var79];
            var79 = var76.bind(var3)(var79);
            var79 = var79.ClydeIcon;
            var15['IconComponent'] = var79;
            var79 = var51.DESTRUCTIVE;
            var15['section'] = var79;
            var15['sortKey'] = var65;
            var65 = var6.bind(var3)(var15);
            var15 = {};
            var79 = var77[var78];
            var79 = var76.bind(var3)(var79);
            var81 = var79.intl;
            var80 = var81.string;
            var82 = _closure1_slot1;
            var79 = 63;
            var79 = var77[var79];
            var79 = var82.bind(var3)(var79);
            var79 = var79.1D+vqy;
            var79 = var80.bind(var81)(var79);
            var15['label'] = var79;
            var64 = var77[var64];
            var64 = var76.bind(var3)(var64);
            var64 = var64.FlagIcon;
            var15['IconComponent'] = var64;
            var64 = var51.DESTRUCTIVE;
            var15['section'] = var64;
            var64 = 102;
            var15['sortKey'] = var64;
            var15['disabled'] = var27;
            var64 = var6.bind(var3)(var15);
            var15 = {};
            var27 = var77[var78];
            var27 = var76.bind(var3)(var27);
            var80 = var27.intl;
            var79 = var80.string;
            var27 = var77[var78];
            var27 = var76.bind(var3)(var27);
            var27 = var27.t;
            var27 = var27.ZH7P2h;
            var27 = var79.bind(var80)(var27);
            var15['label'] = var27;
            var27 = 64;
            var27 = var77[var27];
            var27 = var76.bind(var3)(var27);
            var27 = var27.ImageWarningIcon;
            var15['IconComponent'] = var27;
            var27 = var51.DESTRUCTIVE;
            var15['section'] = var27;
            var27 = 103;
            var15['sortKey'] = var27;
            var27 = var6.bind(var3)(var15);
            var15 = {};
            var79 = var77[var78];
            var79 = var76.bind(var3)(var79);
            var80 = var79.intl;
            var79 = var80.string;
            var78 = var77[var78];
            var78 = var76.bind(var3)(var78);
            var78 = var78.t;
            var78 = var78.xwMqD7;
            var78 = var79.bind(var80)(var78);
            var15['label'] = var78;
            var75 = var77[var75];
            var75 = var76.bind(var3)(var75);
            var75 = var75.TrashIcon;
            var15['IconComponent'] = var75;
            var15['variant'] = var74;
            var51 = var51.DESTRUCTIVE;
            var15['section'] = var51;
            var51 = 110;
            var15['sortKey'] = var51;
            var51 = var6.bind(var3)(var15);
            var74 = new Array(0);
            var15 = 'Preview';
            var15 = var15 === var73;
            if(var15) { _fun0004_ip = 100; continue _fun0004 }
case 101:
            var75 = _closure1_slot0;
            var76 = _closure1_slot2;
            var73 = 27;
            var73 = var76[var73];
            var77 = var75.bind(var3)(var73);
            var76 = var77.hasFlag;
            var75 = var17.flags;
            var73 = _closure1_slot19;
            var73 = var73.EPHEMERAL;
            var15 = var76.bind(var77)(var75, var73);
case 100:
            if(!var15) { _fun0004_ip = 102; continue _fun0004 }
case 103:
            var15 = var74.push;
            var98 = var74;
            var97 = var71;
            var96 = var63;
            var95 = var58;
            var94 = var57;
            var93 = var60;
            var92 = var55;
            var91 = var54;
            var90 = var52;
            var89 = var51;
            var88 = var49;
            var87 = var44;
            var86 = var41;
            var85 = var35;
            var84 = var16;
            var83 = var19;
            var15 = var98[var15](var97, var96, var95, var94, var93, var92, var91, var90, var89, var88, var87, var86, var85, var84, var83, var82);
case 102:
            if(!var11) { _fun0004_ip = 104; continue _fun0004 }
case 105:
            var73 = _closure1_slot0;
            var75 = _closure1_slot2;
            var15 = 27;
            var15 = var75[var15];
            var76 = var73.bind(var3)(var15);
            var75 = var76.hasFlag;
            var73 = var17.flags;
            var15 = _closure1_slot19;
            var15 = var15.EPHEMERAL;
            var15 = var75.bind(var76)(var73, var15);
            var11 = !var15;
case 104:
            if(var11) { _fun0004_ip = 106; continue _fun0004 }
case 107:
            var11 = var74.push;
            var98 = var74;
            var97 = var49;
            var96 = var35;
            var95 = var52;
            var94 = var24;
            var93 = var51;
            var92 = var45;
            var91 = var36;
            var90 = var39;
            var89 = var63;
            var88 = var44;
            var87 = var16;
            var86 = var19;
            var11 = var98[var11](var97, var96, var95, var94, var93, var92, var91, var90, var89, var88, var87, var86, var85);
case 106:
            var15 = _closure1_slot0;
            var73 = _closure1_slot2;
            var11 = 27;
            var11 = var73[var11];
            var75 = var15.bind(var3)(var11);
            var73 = var75.hasFlag;
            var15 = var17.flags;
            var11 = _closure1_slot19;
            var11 = var11.EPHEMERAL;
            var11 = var73.bind(var75)(var15, var11);
            if(!var11) { _fun0004_ip = 108; continue _fun0004 }
case 109:
            var11 = var74.push;
            var98 = var74;
            var97 = var33;
            var96 = var70;
            var95 = var66;
            var94 = var65;
            var93 = var64;
            var11 = var98[var11](var97, var96, var95, var94, var93, var92);
case 108:
            var11 = global;
            var15 = var11.Set;
            var73 = var15.prototype;
            var73 = Object.create(var73, {constructor: {value: var15}});
            var98 = var73;
            var97 = var74;
            var15 = new var98[var15](var97, var96);
            var15 = var15 instanceof Object ? var15 : var73;
            var _closure2_slot11 = var15;
            var15 = new Array(0);
            if(var69) { _fun0004_ip = 110; continue _fun0004 }
case 111:
            var73 = var17.hasFlag;
            var69 = _closure1_slot19;
            var69 = var69.HAS_THREAD;
            var69 = var73.bind(var17)(var69);
            if(!var69) { _fun0004_ip = 112; continue _fun0004 }
case 113:
            var69 = var15.unshift;
            var69 = var69.bind(var15)(var72);
            _fun0004_ip = 112; continue _fun0004;
case 110:
            var69 = var15.unshift;
            var69 = var69.bind(var15)(var71);
case 112:
            var69 = var15.unshift;
            var69 = var69.bind(var15)(var70);
            if(!var67) { _fun0004_ip = 114; continue _fun0004 }
case 115:
            var67 = var15.unshift;
            var67 = var67.bind(var15)(var68);
case 114:
            if(!var62) { _fun0004_ip = 116; continue _fun0004 }
case 117:
            var67 = _closure1_slot0;
            var68 = _closure1_slot2;
            var62 = 65;
            var62 = var68[var62];
            var67 = var67.bind(var3)(var62);
            var62 = var67.canReportMessageToMods;
            var62 = var62.bind(var67)(var17);
            if(var62) { _fun0004_ip = 118; continue _fun0004 }
case 116:
            var62 = var1 != var43;
            if(!var62) { _fun0004_ip = 119; continue _fun0004 }
case 120:
            var68 = _closure1_slot0;
            var69 = _closure1_slot2;
            var67 = 66;
            var67 = var69[var67];
            var68 = var68.bind(var3)(var67);
            var67 = var68.canReportUser;
            var62 = var67.bind(var68)(var43);
case 119:
            if(!var62) { _fun0004_ip = 121; continue _fun0004 }
case 122:
            var68 = _closure1_slot0;
            var69 = _closure1_slot2;
            var67 = 66;
            var67 = var69[var67];
            var68 = var68.bind(var3)(var67);
            var67 = var68.canReportMessage;
            var62 = var67.bind(var68)(var17);
case 121:
            if(!var62) { _fun0004_ip = 123; continue _fun0004 }
case 124:
            var62 = var15.unshift;
            var62 = var62.bind(var15)(var66);
            _fun0004_ip = 123; continue _fun0004;
case 118:
            var62 = var15.unshift;
            var62 = var62.bind(var15)(var65);
            var62 = var15.unshift;
            var62 = var62.bind(var15)(var64);
case 123:
            var62 = var15.unshift;
            var62 = var62.bind(var15)(var63);
            if(!var61) { _fun0004_ip = 125; continue _fun0004 }
case 126:
            if(!var59) { _fun0004_ip = 127; continue _fun0004 }
case 128:
            if(var53) { _fun0004_ip = 127; continue _fun0004 }
case 129:
            if(var56) { _fun0004_ip = 127; continue _fun0004 }
case 130:
            var59 = var15.unshift;
            var59 = var59.bind(var15)(var60);
            _fun0004_ip = 125; continue _fun0004;
case 127:
            if(var53) { _fun0004_ip = 131; continue _fun0004 }
case 132:
            if(var56) { _fun0004_ip = 131; continue _fun0004 }
case 133:
            var53 = var15.unshift;
            var53 = var53.bind(var15)(var58);
            _fun0004_ip = 134; continue _fun0004;
case 131:
            var53 = var15.unshift;
            var53 = var53.bind(var15)(var57);
case 134:
            var53 = var15.unshift;
            if(var56) { _fun0004_ip = 135; continue _fun0004 }
case 136:
            var55 = var53.bind(var15)(var55);
            _fun0004_ip = 125; continue _fun0004;
case 135:
            var53 = var53.bind(var15)(var54);
case 125:
            if(!var47) { _fun0004_ip = 137; continue _fun0004 }
case 138:
            var47 = var15.unshift;
            var47 = var47.bind(var15)(var52);
case 137:
            var47 = !var13;
            if(!var47) { _fun0004_ip = 139; continue _fun0004 }
case 140:
            var52 = var17.canDeleteOwnMessage;
            var52 = var52.bind(var17)(var42);
            var47 = !var52;
case 139:
            if(var47) { _fun0004_ip = 141; continue _fun0004 }
case 142:
            var52 = _closure1_slot22;
            var54 = var52.UNDELETABLE;
            var53 = var54.has;
            var52 = var17.type;
            var47 = var53.bind(var54)(var52);
case 141:
            if(var47) { _fun0004_ip = 143; continue _fun0004 }
case 144:
            var47 = var15.unshift;
            var47 = var47.bind(var15)(var51);
case 143:
            var51 = _closure1_slot1;
            var52 = _closure1_slot2;
            var47 = 67;
            var47 = var52[var47];
            var47 = var51.bind(var3)(var47);
            var47 = var47.bind(var3)(var17, var42);
            if(!var47) { _fun0004_ip = 145; continue _fun0004 }
case 146:
            var47 = !var50;
case 145:
            if(!var47) { _fun0004_ip = 147; continue _fun0004 }
case 148:
            var47 = var15.unshift;
            var47 = var47.bind(var15)(var49);
case 147:
            if(!var40) { _fun0004_ip = 149; continue _fun0004 }
case 150:
            var40 = var15.unshift;
            var40 = var40.bind(var15)(var45);
case 149:
            var45 = var48.type;
            var40 = _closure1_slot15;
            var40 = var40.GROUP_DM;
            var45 = var45 === var40;
            var40 = var48.isPrivate;
            var40 = var40.bind(var48)();
            if(!var40) { _fun0004_ip = 151; continue _fun0004 }
case 152:
            var40 = !var45;
case 151:
            if(var40) { _fun0004_ip = 153; continue _fun0004 }
case 154:
            var40 = var46;
case 153:
            if(var40) { _fun0004_ip = 155; continue _fun0004 }
case 156:
            var47 = _closure1_slot11;
            var46 = var47.can;
            var40 = _closure1_slot23;
            var40 = var40.SEND_MESSAGES;
            var40 = var46.bind(var47)(var40, var48);
            if(var40) { _fun0004_ip = 157; continue _fun0004 }
case 158:
            var40 = var45;
case 157:
            if(!var40) { _fun0004_ip = 159; continue _fun0004 }
case 160:
            var40 = var15.unshift;
            var40 = var40.bind(var15)(var44);
case 159:
            var44 = var1 == var43;
            var40 = undefined;
            if(var44) { _fun0004_ip = 161; continue _fun0004 }
case 162:
            var40 = var43.id;
case 161:
            if(!(var42 !== var40)) { _fun0004_ip = 155; continue _fun0004 }
case 163:
            var40 = var15.unshift;
            var40 = var40.bind(var15)(var41);
case 155:
            if(!var38) { _fun0004_ip = 164; continue _fun0004 }
case 165:
            var38 = var15.unshift;
            var40 = var17.pinned;
            if(!var40) { _fun0004_ip = 166; continue _fun0004 }
case 167:
            var36 = var39;
case 166:
            var36 = var38.bind(var15)(var36);
case 164:
            var36 = var1 != var5;
            if(!var36) { _fun0004_ip = 168; continue _fun0004 }
case 169:
            var38 = var5.length;
            var36 = var38 > var9;
case 168:
            if(!var36) { _fun0004_ip = 170; continue _fun0004 }
case 171:
            var36 = var15.unshift;
            var36 = var36.bind(var15)(var37);
case 170:
            if(!var34) { _fun0004_ip = 172; continue _fun0004 }
case 173:
            var34 = var15.unshift;
            var34 = var34.bind(var15)(var35);
case 172:
            if(!var26) { _fun0004_ip = 174; continue _fun0004 }
case 175:
            var26 = var15.unshift;
            var26 = var26.bind(var15)(var33);
case 174:
            var26 = var1 == var22;
            if(var26) { _fun0004_ip = 176; continue _fun0004 }
case 177:
            var26 = var32;
case 176:
            if(var26) { _fun0004_ip = 178; continue _fun0004 }
case 179:
            var26 = var15.unshift;
            var26 = var26.bind(var15)(var31);
            var31 = var22.mediaType;
            var26 = 'image';
            if(!(var26 !== var31)) { _fun0004_ip = 180; continue _fun0004 }
case 181:
            var31 = var22.mediaType;
            var26 = 'video';
            if(!(var26 === var31)) { _fun0004_ip = 182; continue _fun0004 }
case 183:
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var26 = 68;
            var26 = var32[var26];
            var32 = var31.bind(var3)(var26);
            var31 = var32.isWebPlayerVideoUrl;
            var26 = var22.mediaUrl;
            var26 = var31.bind(var32)(var26);
            if(var26) { _fun0004_ip = 182; continue _fun0004 }
case 184:
            var26 = var15.unshift;
            var26 = var26.bind(var15)(var30);
            _fun0004_ip = 185; continue _fun0004;
case 182:
            var30 = var22.mediaType;
            var26 = 'audio';
            var26 = var26 !== var30;
            if(!var26) { _fun0004_ip = 186; continue _fun0004 }
case 187:
            var31 = var22.mediaType;
            var30 = 'file';
            var26 = var30 !== var31;
case 186:
            if(var26) { _fun0004_ip = 185; continue _fun0004 }
case 188:
            var26 = var15.unshift;
            var26 = var26.bind(var15)(var29);
            _fun0004_ip = 185; continue _fun0004;
case 180:
            var26 = var15.unshift;
            var26 = var26.bind(var15)(var28);
case 185:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var26 = 69;
            var26 = var29[var26];
            var28 = var28.bind(var3)(var26);
            var26 = var28.messageHasObscurableMedia;
            var26 = var26.bind(var28)(var17);
            if(!var26) { _fun0004_ip = 189; continue _fun0004 }
case 190:
            var26 = var15.unshift;
            var26 = var26.bind(var15)(var27);
case 189:
            var26 = var22.sourceType;
            var22 = 'attachment';
            var22 = var22 === var26;
            if(!var22) { _fun0004_ip = 191; continue _fun0004 }
case 192:
            var22 = var25;
case 191:
            if(!var22) { _fun0004_ip = 178; continue _fun0004 }
case 193:
            var22 = var15.unshift;
            var22 = var22.bind(var15)(var24);
case 178:
            var22 = var17.reactions;
            var22 = var22.length;
            var22 = var22 > var9;
            if(!var22) { _fun0004_ip = 194; continue _fun0004 }
case 195:
            var24 = var17.isPoll;
            var24 = var24.bind(var17)();
            var24 = !var24;
            if(var24) { _fun0004_ip = 196; continue _fun0004 }
case 197:
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var25 = 70;
            var25 = var27[var25];
            var26 = var26.bind(var3)(var25);
            var25 = var26.hasNonVoteReactions;
            var24 = var25.bind(var26)(var17);
case 196:
            var22 = var24;
case 194:
            if(!var22) { _fun0004_ip = 198; continue _fun0004 }
case 199:
            var22 = var15.unshift;
            var22 = var22.bind(var15)(var23);
            if(!var13) { _fun0004_ip = 198; continue _fun0004 }
case 200:
            var13 = var15.unshift;
            var13 = var13.bind(var15)(var19);
case 198:
            var13 = _closure1_slot26;
            var19 = var13.bind(var3)(var18);
            var18 = var19.bind(var3)();
            var13 = var18.done;
            if(var13) { _fun0004_ip = 201; continue _fun0004 }
case 202:
            var22 = var18.value;
            var23 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var21];
            var13 = var23.bind(var3)(var13);
            var13 = var13.PollMessageContextItemTypes;
            var13 = var13.END_EARLY;
            if(!(var22 === var13)) { _fun0004_ip = 203; continue _fun0004 }
case 204:
            var13 = var15.unshift;
            var13 = var13.bind(var15)(var20);
case 203:
            var22 = var19.bind(var3)();
            var13 = var22.done;
            var18 = var22;
            if(!var13) { _fun0004_ip = 202; continue _fun0004 }
case 201:
            var13 = var15.unshift;
            var13 = var13.bind(var15)(var16);
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var13 = 71;
            var13 = var18[var13];
            var16 = var16.bind(var3)(var13);
            var13 = var16.canViewInteractionInfo;
            var13 = var13.bind(var16)(var17);
            if(!var13) { _fun0004_ip = 205; continue _fun0004 }
case 206:
            var13 = var15.unshift;
            var13 = var13.bind(var15)(var14);
case 205:
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
            var13 = 72;
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
case 95:
            var4 = {};
            var11 = _closure1_slot25;
            var11 = var11.PRIMARY;
            var4['section'] = var11;
            var4['sortKey'] = var12;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 37;
            var15 = var14[var11];
            var15 = var13.bind(var3)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var11 = var14[var11];
            var11 = var13.bind(var3)(var11);
            var11 = var11.t;
            var11 = var11.k5WiPf;
            var11 = var15.bind(var16)(var11);
            var4['label'] = var11;
            var11 = 41;
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
case 93:
            var4 = new Array(0);
            if(!var10) { _fun0004_ip = 207; continue _fun0004 }
case 208:
            var11 = var4.push;
            var10 = {};
            var13 = _closure1_slot25;
            var13 = var13.PRIMARY;
            var10['section'] = var13;
            var10['sortKey'] = var12;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 37;
            var15 = var14[var12];
            var15 = var13.bind(var3)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.t;
            var12 = var12.5911Lb;
            var12 = var15.bind(var16)(var12);
            var10['label'] = var12;
            var12 = 38;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.RetryIcon;
            var10['IconComponent'] = var12;
            var10 = var6.bind(var3)(var10);
            var10 = var11.bind(var4)(var10);
case 207:
            var1 = var1 != var5;
            if(!var1) { _fun0004_ip = 209; continue _fun0004 }
case 210:
            var5 = var5.length;
            var1 = var5 > var9;
case 209:
            if(!var1) { _fun0004_ip = 211; continue _fun0004 }
case 212:
            var5 = var4.push;
            var1 = {};
            var9 = _closure1_slot25;
            var9 = var9.PRIMARY;
            var1['section'] = var9;
            var1['sortKey'] = var8;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 37;
            var11 = var10[var8];
            var11 = var9.bind(var3)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var8 = var10[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.t;
            var8 = var8.JrGD7E;
            var8 = var11.bind(var12)(var8);
            var1['label'] = var8;
            var8 = 39;
            var8 = var10[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.CopyIcon;
            var1['IconComponent'] = var8;
            var1 = var6.bind(var3)(var1);
            var1 = var5.bind(var4)(var1);
case 211:
            var5 = var4.push;
            var1 = {};
            var8 = _closure1_slot25;
            var8 = var8.PRIMARY;
            var1['section'] = var8;
            var8 = 3;
            var1['sortKey'] = var8;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 37;
            var10 = var9[var7];
            var10 = var8.bind(var3)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var7 = var9[var7];
            var7 = var8.bind(var3)(var7);
            var7 = var7.t;
            var7 = var7.xwMqD7;
            var7 = var10.bind(var11)(var7);
            var1['label'] = var7;
            var7 = 40;
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
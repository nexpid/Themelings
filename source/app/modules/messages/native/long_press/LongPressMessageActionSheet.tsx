// app/modules/messages/native/long_press/LongPressMessageActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot26;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot26;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
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
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var9 = 1;
    var8 = var6[var9];
    var4 = native4;
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
    var4 = var7.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.FileUploadErrorTypes;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot12 = var7;
    var7 = var4.AnalyticsPages;
    var _closure1_slot13 = var7;
    var7 = var4.ChannelTypes;
    var _closure1_slot14 = var7;
    var7 = var4.GuildFeatures;
    var _closure1_slot15 = var7;
    var7 = var4.LOCAL_BOT_ID;
    var _closure1_slot16 = var7;
    var7 = var4.MessageAttachmentFlags;
    var _closure1_slot17 = var7;
    var7 = var4.MessageFlags;
    var _closure1_slot18 = var7;
    var7 = var4.MessageStates;
    var _closure1_slot19 = var7;
    var7 = var4.MessageTypes;
    var _closure1_slot20 = var7;
    var7 = var4.MessageTypesSets;
    var _closure1_slot21 = var7;
    var4 = var4.Permissions;
    var _closure1_slot22 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot23 = var4;
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
    var _closure1_slot24 = var4;
    var4 = 74;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/long_press/LongPressMessageActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function LongPressMessageActionSheet(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var33 = 11;
            var5 = var2[var33];
            var3 = undefined;
            var5 = var6.bind(var3)(var5);
            var16 = 12;
            var2 = var2[var16];
            var2 = var6.bind(var3)(var2);
            var2 = var2.MESSAGE_LONG_PRESS_MENU;
            var2 = var5.bind(var3)(var2);
            var2 = var2.analyticsLocations;
            var _closure2_slot1 = var2;
            var2 = var1.analyticsLocation;
            if(!(var3 === var2)) { _fun0004_ip = 79; continue _fun0004 }
 77:
            var2 = {};
 79:
            var _closure2_slot2 = var2;
            var47 = var1.user;
            var5 = var1.message;
            var _closure2_slot3 = var5;
            var52 = var1.channel;
            var _closure2_slot4 = var52;
            var6 = var1.chatInputRef;
            var _closure2_slot5 = var6;
            var21 = var1.selectedMedia;
            var _closure2_slot6 = var21;
            var6 = var1.actionSheetSource;
            var77 = undefined;
            if(!(var3 !== var6)) { _fun0004_ip = 141; continue _fun0004 }
 138:
            var77 = var6;
 141:
            var _closure2_slot7 = var77;
            var8 = var1.canAddNewReactions;
            var6 = var3 !== var8;
            if(!var6) { _fun0004_ip = 161; continue _fun0004 }
 158:
            var6 = var8;
 161:
            var _closure2_slot8 = var6;
            var8 = _closure1_slot4;
            var9 = var8.useEffect;
            var6 = new Array(2);
            var6[0] = var2;
            var6[1] = var52;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.trackWithMetadata;
                    var2 = _closure1_slot12;
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
                    var9 = _closure1_slot13;
                    if(var8) { _fun0005_ip = 103; continue _fun0005 }
 95:
                    var8 = var9.GUILD_CHANNEL;
                    _fun0005_ip = 109; continue _fun0005;
 103:
                    var8 = var9.DM_CHANNEL;
 109:
                    var6['page'] = var8;
                    var11 = _closure2_slot2;
                    var12 = var6;
                    var7 = copyDataProperties(var12, var11);
                    var2['location'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var2 = var9.bind(var8)(var2, var6);
            var6 = var8.useCallback;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.showLongPressMessageActionSheet;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var6.bind(var8)(var1, var2);
            var _closure2_slot9 = var1;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var27 = 15;
            var1 = var10[var27];
            var2 = var11.bind(var3)(var1);
            var1 = var2.useCanReplyToMessage;
            var38 = var1.bind(var2)(var52, var5);
            var34 = 16;
            var1 = var10[var34];
            var2 = var11.bind(var3)(var1);
            var1 = var2.useCanForwardMessage;
            var32 = var1.bind(var2)(var5);
            var6 = _closure1_slot9;
            var2 = var6.getGuild;
            var1 = var52.guild_id;
            var15 = var2.bind(var6)(var1);
            var6 = _closure1_slot1;
            var35 = 17;
            var1 = var10[var35];
            var8 = var6.bind(var3)(var1);
            var2 = var8.useExperiment;
            var1 = {};
            var9 = 'LongPressMessageActionSheet';
            var1['location'] = var9;
            var1 = var2.bind(var8)(var1);
            var65 = var1.enabled;
            var2 = 18;
            var1 = var10[var2];
            var12 = var11.bind(var3)(var1);
            var9 = var12.useStateFromStoresArray;
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
            var9 = var9.bind(var12)(var8, var1);
            var1 = _closure1_slot3;
            var8 = 2;
            var1 = var1.bind(var3)(var9, var8);
            var9 = 0;
            var60 = var1[var9];
            var12 = 1;
            var57 = var1[var12];
            var1 = 19;
            var1 = var10[var1];
            var1 = var6.bind(var3)(var1);
            var1 = var1.bind(var3)();
            var63 = !var1;
            var22 = 20;
            var1 = var10[var22];
            var11 = var11.bind(var3)(var1);
            var1 = var11.useIsNonModInLockedThread;
            var54 = var1.bind(var11)(var52);
            var1 = 21;
            var1 = var10[var1];
            var6 = var6.bind(var3)(var1);
            var11 = null;
            var10 = var11 == var52;
            var1 = undefined;
            if(var10) { _fun0004_ip = 486; continue _fun0004 }
 481:
            var1 = var52.id;
 486:
            var36 = var6.bind(var3)(var1);
            var10 = _closure1_slot5;
            var6 = var10.getMessage;
            var1 = var5.id;
            var1 = var6.bind(var10)(var1);
            var19 = var11 != var1;
            var14 = var5.interactionError;
            var1 = _closure1_slot11;
            var6 = var1.EXPLICIT_CONTENT;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 22;
            var1 = var13[var1];
            var17 = var10.bind(var3)(var1);
            var1 = var17.getRemixSourceFromSelectedMedia;
            var25 = var1.bind(var17)(var5, var21);
            var1 = 23;
            var1 = var13[var1];
            var23 = var10.bind(var3)(var1);
            var20 = var23.useIsRemixEnabledForMedia;
            var18 = var52.id;
            if(!(var11 == var25)) { _fun0004_ip = 602; continue _fun0004 }
 590:
            var13 = {'width': 0, 'height': 0};
            _fun0004_ip = 649; continue _fun0004;
 602:
            var1 = {};
            var17 = var25.width;
            var24 = var11 != var17;
            var10 = 0;
            if(!var24) { _fun0004_ip = 621; continue _fun0004 }
 618:
            var10 = var17;
 621:
            var1['width'] = var10;
            var17 = var25.height;
            var24 = var11 != var17;
            var10 = 0;
            if(!var24) { _fun0004_ip = 642; continue _fun0004 }
 639:
            var10 = var17;
 642:
            var1['height'] = var10;
            var13 = var1;
 649:
            var17 = _closure1_slot1;
            var1 = _closure1_slot2;
            var10 = var1[var16];
            var10 = var17.bind(var3)(var10);
            var10 = var10.MESSAGE_LONG_PRESS_MENU;
            var29 = var20.bind(var23)(var18, var13, var10);
            var10 = _closure1_slot0;
            var13 = 24;
            var13 = var1[var13];
            var20 = var10.bind(var3)(var13);
            var18 = var20.useShouldUpsellRemix;
            var13 = {};
            var23 = var1[var16];
            var23 = var17.bind(var3)(var23);
            var24 = var23.MESSAGE_LONG_PRESS_MENU;
            var23 = new Array(1);
            var23[0] = var24;
            var13['analyticsLocations'] = var23;
            var30 = var18.bind(var20)(var13);
            var23 = _closure1_slot4;
            var20 = var23.useMemo;
            var18 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 25;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = new Array(0);
            var31 = var20.bind(var23)(var18, var13);
            var20 = 26;
            var13 = var1[var20];
            var13 = var17.bind(var3)(var13);
            var17 = var13.bind(var3)(var5);
            var1 = var1[var22];
            var10 = var10.bind(var3)(var1);
            var1 = var10.useIsActiveChannelOrUnarchivableThread;
            var10 = var1.bind(var10)(var52);
            var _closure2_slot10 = var10;
            var13 = var11 == var47;
            var1 = undefined;
            if(var13) { _fun0004_ip = 822; continue _fun0004 }
 812:
            var13 = var47.isNonUserBot;
            var1 = var13.bind(var47)();
 822:
            var56 = true;
            var50 = var56 === var1;
            var13 = _closure1_slot8;
            var1 = var13.getId;
            var46 = var1.bind(var13)();
            var13 = _closure1_slot0;
            var26 = _closure1_slot2;
            var1 = 27;
            var1 = var26[var1];
            var1 = var13.bind(var3)(var1);
            var13 = var1.DeveloperMode;
            var1 = var13.getSetting;
            var71 = var1.bind(var13)();
            var18 = _closure1_slot10;
            var13 = var18.can;
            var1 = _closure1_slot22;
            var1 = var1.MANAGE_MESSAGES;
            var13 = var13.bind(var18)(var1, var52);
            var1 = var5.author;
            var1 = var1.id;
            var1 = var1 === var46;
            var23 = var5.hasFlag;
            var18 = _closure1_slot18;
            var18 = var18.CROSSPOSTED;
            var18 = var23.bind(var5)(var18);
            var24 = _closure1_slot1;
            var23 = 28;
            var23 = var26[var23];
            var23 = var24.bind(var3)(var23);
            var42 = var23.bind(var3)(var5, var52);
            var44 = !var18;
            if(!var44) { _fun0004_ip = 987; continue _fun0004 }
 968:
            var23 = var52.type;
            var18 = _closure1_slot14;
            var18 = var18.GUILD_ANNOUNCEMENT;
            var44 = var23 === var18;
 987:
            if(!var44) { _fun0004_ip = 1028; continue _fun0004 }
 990:
            var23 = var11 == var15;
            var18 = undefined;
            if(var23) { _fun0004_ip = 1025; continue _fun0004 }
 999:
            var26 = var15.features;
            var24 = var26.has;
            var23 = _closure1_slot15;
            var23 = var23.NEWS;
            var18 = var24.bind(var26)(var23);
 1025:
            var44 = var18;
 1028:
            if(!var44) { _fun0004_ip = 1040; continue _fun0004 }
 1031:
            if(var1) { _fun0004_ip = 1037; continue _fun0004 }
 1034:
            var1 = var13;
 1037:
            var44 = var1;
 1040:
            if(!var44) { _fun0004_ip = 1062; continue _fun0004 }
 1043:
            var18 = var5.type;
            var1 = _closure1_slot20;
            var1 = var1.DEFAULT;
            var44 = var18 === var1;
 1062:
            if(!var44) { _fun0004_ip = 1078; continue _fun0004 }
 1065:
            var1 = var5.isPoll;
            var1 = var1.bind(var5)();
            var44 = !var1;
 1078:
            var18 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var22];
            var18 = var18.bind(var3)(var1);
            var1 = var18.computeCanStartPublicThread;
            var73 = var1.bind(var18)(var52, var5);
            var1 = var5.getContentMessage;
            var18 = var1.bind(var5)();
            var22 = var11 == var18;
            var1 = undefined;
            if(var22) { _fun0004_ip = 1137; continue _fun0004 }
 1126:
            var18 = var18.embeds;
            var1 = var18.length;
 1137:
            var22 = var11 != var1;
            var18 = 0;
            if(!var22) { _fun0004_ip = 1149; continue _fun0004 }
 1146:
            var18 = var1;
 1149:
            var51 = var13;
            if(var51) { _fun0004_ip = 1166; continue _fun0004 }
 1155:
            var1 = var5.canDeleteOwnMessage;
            var51 = var1.bind(var5)(var46);
 1166:
            if(!var51) { _fun0004_ip = 1173; continue _fun0004 }
 1169:
            var51 = var18 > var9;
 1173:
            if(!var51) { _fun0004_ip = 1195; continue _fun0004 }
 1176:
            var1 = var5.author;
            var22 = var1.id;
            var1 = _closure1_slot16;
            var51 = var22 !== var1;
 1195:
            if(!var51) { _fun0004_ip = 1248; continue _fun0004 }
 1198:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var1 = 29;
            var1 = var23[var1];
            var24 = var22.bind(var3)(var1);
            var23 = var24.hasFlag;
            var22 = var5.flags;
            var1 = _closure1_slot18;
            var1 = var1.EPHEMERAL;
            var1 = var23.bind(var24)(var22, var1);
            var51 = !var1;
 1248:
            if(!var51) { _fun0004_ip = 1280; continue _fun0004 }
 1251:
            var22 = _closure1_slot1;
            var23 = _closure1_slot2;
            var1 = 30;
            var1 = var23[var1];
            var1 = var22.bind(var3)(var1);
            var1 = var1.bind(var3)(var5);
            var51 = var12 === var1;
 1280:
            var1 = !var19;
            if(var19) { _fun0004_ip = 1293; continue _fun0004 }
 1286:
            var6 = var14 === var6;
            var1 = !var6;
 1293:
            if(!var1) { _fun0004_ip = 1349; continue _fun0004 }
 1296:
            var6 = var5.interactionData;
            var6 = var11 == var6;
            if(var6) { _fun0004_ip = 1346; continue _fun0004 }
 1309:
            var19 = _closure1_slot0;
            var22 = _closure1_slot2;
            var14 = 31;
            var14 = var22[var14];
            var22 = var19.bind(var3)(var14);
            var19 = var22.canRetryInteractionData;
            var14 = var5.interactionData;
            var6 = var19.bind(var22)(var14);
 1346:
            var1 = var6;
 1349:
            var19 = var5.attachments;
            var14 = var19.filter;
            var6 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = arg1;
                    var2 = var3.flags;
                    var1 = null;
                    var1 = var1 == var2;
                    if(var1) { _fun0006_ip = 72; continue _fun0006 }
 17:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 29;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.hasFlag;
                    var3 = var3.flags;
                    var2 = _closure1_slot17;
                    var2 = var2.IS_THUMBNAIL;
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = !var2;
 72:
                    return var1;
                }
            };
            var6 = var14.bind(var19)(var6);
            var14 = var5.author;
            var14 = var14.id;
            var24 = var14 === var46;
            if(!var24) { _fun0004_ip = 1418; continue _fun0004 }
 1390:
            var6 = var6.length;
            var6 = var6 > var12;
            if(var6) { _fun0004_ip = 1415; continue _fun0004 }
 1402:
            var19 = var5.content;
            var14 = '';
            var6 = var14 !== var19;
 1415:
            var24 = var6;
 1418:
            var6 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = var14[var2];
            var23 = var6.bind(var3)(var2);
            var22 = var23.useStateFromStores;
            var2 = _closure1_slot6;
            var19 = new Array(1);
            var19[0] = var2;
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
            var26 = var22.bind(var23)(var19, var2);
            var2 = 32;
            var2 = var14[var2];
            var14 = var6.bind(var3)(var2);
            var6 = var14.useIsReportToModEnabled;
            var19 = var11 == var15;
            var2 = undefined;
            if(var19) { _fun0004_ip = 1497; continue _fun0004 }
 1492:
            var2 = var15.id;
 1497:
            var66 = var6.bind(var14)(var2);
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
                var11 = _closure1_slot23;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 33;
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
                    var1 = 34;
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
 0:
                    var10 = arg1;
                    var4 = _closure1_slot23;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var1 = 11;
                    var1 = var11[var1];
                    var3 = undefined;
                    var1 = var9.bind(var3)(var1);
                    var2 = var1.AnalyticsLocationProvider;
                    var1 = {};
                    var5 = _closure2_slot1;
                    var1['value'] = var5;
                    var5 = 35;
                    var5 = var11[var5];
                    var5 = var9.bind(var3)(var5);
                    var6 = var5.ActionSheet;
                    var5 = {};
                    var7 = true;
                    var5['showGradient'] = var7;
                    var7 = 36;
                    var7 = var11[var7];
                    var14 = var9.bind(var3)(var7);
                    var13 = var14.shouldShowEmojiRow;
                    var11 = _closure2_slot8;
                    var9 = _closure2_slot3;
                    var7 = _closure2_slot10;
                    var7 = var13.bind(var14)(var11, var9, var7);
                    if(!var7) { _fun0007_ip = 166; continue _fun0007 }
 118:
                    var11 = _closure1_slot23;
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
 166:
                    var5['header'] = var7;
                    var7 = null;
                    var8 = var7 == var10;
                    var7 = undefined;
                    if(var8) { _fun0007_ip = 200; continue _fun0007 }
 181:
                    var9 = var10.map;
                    var8 = function(arg1, arg2) {
                        var7 = arg1;
                        var5 = _closure1_slot23;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 33;
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
                            var5 = _closure1_slot23;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 33;
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
 200:
                    var5['children'] = var7;
                    var5 = var4.bind(var3)(var6, var5);
                    var1['children'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var15 = var5.state;
            var14 = _closure1_slot19;
            var14 = var14.SEND_FAILED;
            if(!(var15 !== var14)) { _fun0004_ip = 6868; continue _fun0004 }
 1538:
            var15 = var5.type;
            var14 = _closure1_slot20;
            var14 = var14.THREAD_STARTER_MESSAGE;
            if(!(var15 !== var14)) { _fun0004_ip = 6737; continue _fun0004 }
 1560:
            var14 = {};
            var68 = _closure1_slot0;
            var69 = _closure1_slot2;
            var82 = 38;
            var15 = var69[var82];
            var15 = var68.bind(var3)(var15);
            var22 = var15.intl;
            var19 = var22.string;
            var15 = var69[var82];
            var15 = var68.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.fsBWmZ;
            var15 = var19.bind(var22)(var15);
            var14['label'] = var15;
            var15 = 43;
            var15 = var69[var15];
            var15 = var68.bind(var3)(var15);
            var15 = var15.PencilIcon;
            var14['IconComponent'] = var15;
            var55 = _closure1_slot24;
            var15 = var55.PRIMARY;
            var14['section'] = var15;
            var14['sortKey'] = var12;
            var53 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var69[var82];
            var15 = var68.bind(var3)(var15);
            var22 = var15.intl;
            var19 = var22.string;
            var15 = var69[var82];
            var15 = var68.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.5IEsGx;
            var15 = var19.bind(var22)(var15);
            var14['label'] = var15;
            var15 = 44;
            var15 = var69[var15];
            var15 = var68.bind(var3)(var15);
            var15 = var15.ArrowAngleLeftUpIcon;
            var14['IconComponent'] = var15;
            var15 = var55.PRIMARY;
            var14['section'] = var15;
            var14['sortKey'] = var8;
            var39 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var69[var82];
            var15 = var68.bind(var3)(var15);
            var22 = var15.intl;
            var19 = var22.string;
            var15 = var69[var82];
            var15 = var68.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.I3ltXF;
            var15 = var19.bind(var22)(var15);
            var14['label'] = var15;
            var19 = _closure1_slot1;
            var15 = 45;
            var15 = var69[var15];
            var15 = var19.bind(var3)(var15);
            var14['IconComponent'] = var15;
            var15 = var55.PRIMARY;
            var14['section'] = var15;
            var15 = 3;
            var14['sortKey'] = var15;
            var37 = var6.bind(var3)(var14);
            var14 = {};
            var19 = var69[var82];
            var19 = var68.bind(var3)(var19);
            var23 = var19.intl;
            var22 = var23.string;
            var19 = var69[var82];
            var19 = var68.bind(var3)(var19);
            var19 = var19.t;
            var19 = var19.Gp2rPj;
            var19 = var22.bind(var23)(var19);
            var14['label'] = var19;
            var19 = 46;
            var19 = var69[var19];
            var19 = var68.bind(var3)(var19);
            var19 = var19.PencilSparkleIcon;
            var14['IconComponent'] = var19;
            var19 = var55.GENERAL;
            var14['section'] = var19;
            var14['sortKey'] = var15;
            var28 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var69[var82];
            var15 = var68.bind(var3)(var15);
            var22 = var15.intl;
            var19 = var22.string;
            var15 = var69[var82];
            var15 = var68.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.rBIGBA;
            var15 = var19.bind(var22)(var15);
            var14['label'] = var15;
            var19 = 47;
            var15 = var69[var19];
            var15 = var68.bind(var3)(var15);
            var15 = var15.ThreadIcon;
            var14['IconComponent'] = var15;
            var15 = var55.PRIMARY;
            var14['section'] = var15;
            var15 = 4;
            var14['sortKey'] = var15;
            var75 = var6.bind(var3)(var14);
            var14 = {};
            var22 = var69[var82];
            var22 = var68.bind(var3)(var22);
            var40 = var22.intl;
            var23 = var40.string;
            var22 = var69[var82];
            var22 = var68.bind(var3)(var22);
            var22 = var22.t;
            var22 = var22.39d0Wl;
            var22 = var23.bind(var40)(var22);
            var14['label'] = var22;
            var19 = var69[var19];
            var19 = var68.bind(var3)(var19);
            var19 = var19.ThreadIcon;
            var14['IconComponent'] = var19;
            var19 = var55.GENERAL;
            var14['section'] = var19;
            var14['sortKey'] = var15;
            var76 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var69[var82];
            var15 = var68.bind(var3)(var15);
            var22 = var15.intl;
            var19 = var22.string;
            var15 = var69[var82];
            var15 = var68.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.JrGD7O;
            var15 = var19.bind(var22)(var15);
            var14['label'] = var15;
            var15 = 40;
            var15 = var69[var15];
            var15 = var68.bind(var3)(var15);
            var15 = var15.CopyIcon;
            var14['IconComponent'] = var15;
            var15 = var55.GENERAL;
            var14['section'] = var15;
            var15 = 5;
            var14['sortKey'] = var15;
            var41 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var69[var82];
            var15 = var68.bind(var3)(var15);
            var22 = var15.intl;
            var19 = var22.string;
            var15 = var69[var82];
            var15 = var68.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.RpE9k5;
            var15 = var19.bind(var22)(var15);
            var14['label'] = var15;
            var15 = 48;
            var15 = var69[var15];
            var15 = var68.bind(var3)(var15);
            var15 = var15.ChatMarkUnreadIcon;
            var14['IconComponent'] = var15;
            var15 = var55.GENERAL;
            var14['section'] = var15;
            var15 = 6;
            var14['sortKey'] = var15;
            var67 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var69[var82];
            var15 = var68.bind(var3)(var15);
            var22 = var15.intl;
            var19 = var22.string;
            var15 = var69[var82];
            var15 = var68.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.grdwws;
            var15 = var19.bind(var22)(var15);
            var14['label'] = var15;
            var15 = 49;
            var15 = var69[var15];
            var15 = var68.bind(var3)(var15);
            var15 = var15.ClockXIcon;
            var14['IconComponent'] = var15;
            var15 = var55.GENERAL;
            var14['section'] = var15;
            var15 = 7;
            var14['sortKey'] = var15;
            var19 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var69[var82];
            var15 = var68.bind(var3)(var15);
            var23 = var15.intl;
            var22 = var23.string;
            var15 = var69[var82];
            var15 = var68.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.gHp0Cw;
            var15 = var22.bind(var23)(var15);
            var14['label'] = var15;
            var72 = 50;
            var15 = var69[var72];
            var15 = var68.bind(var3)(var15);
            var15 = var15.ReactionIcon;
            var14['IconComponent'] = var15;
            var15 = var55.GENERAL;
            var14['section'] = var15;
            var15 = 8;
            var14['sortKey'] = var15;
            var22 = var6.bind(var3)(var14);
            var14 = {};
            var15 = var69[var82];
            var15 = var68.bind(var3)(var15);
            var40 = var15.intl;
            var23 = var40.string;
            var15 = var69[var82];
            var15 = var68.bind(var3)(var15);
            var15 = var15.t;
            var15 = var15.MFGE5+;
            var15 = var23.bind(var40)(var15);
            var14['label'] = var15;
            var15 = 51;
            var23 = var69[var15];
            var23 = var68.bind(var3)(var23);
            var23 = var23.AnnouncementsIcon;
            var14['IconComponent'] = var23;
            var23 = var55.GENERAL;
            var14['section'] = var23;
            var23 = 9;
            var14['sortKey'] = var23;
            var49 = var6.bind(var3)(var14);
            var14 = {};
            var23 = var69[var82];
            var23 = var68.bind(var3)(var23);
            var43 = var23.intl;
            var40 = var43.string;
            var23 = var69[var82];
            var23 = var68.bind(var3)(var23);
            var23 = var23.t;
            var23 = var23.CvQ18/;
            var23 = var40.bind(var43)(var23);
            var14['label'] = var23;
            var23 = 52;
            var40 = var69[var23];
            var40 = var68.bind(var3)(var40);
            var40 = var40.PinIcon;
            var14['IconComponent'] = var40;
            var40 = var55.GENERAL;
            var14['section'] = var40;
            var43 = 10;
            var14['sortKey'] = var43;
            var40 = var6.bind(var3)(var14);
            var14 = {};
            var45 = var69[var82];
            var45 = var68.bind(var3)(var45);
            var58 = var45.intl;
            var48 = var58.string;
            var45 = var69[var82];
            var45 = var68.bind(var3)(var45);
            var45 = var45.t;
            var45 = var45.Bse+Fx;
            var45 = var48.bind(var58)(var45);
            var14['label'] = var45;
            var45 = var69[var23];
            var45 = var68.bind(var3)(var45);
            var45 = var45.PinIcon;
            var14['IconComponent'] = var45;
            var45 = var55.GENERAL;
            var14['section'] = var45;
            var14['sortKey'] = var43;
            var43 = var6.bind(var3)(var14);
            var14 = {};
            var45 = var69[var82];
            var45 = var68.bind(var3)(var45);
            var58 = var45.intl;
            var48 = var58.string;
            var45 = var69[var82];
            var45 = var68.bind(var3)(var45);
            var45 = var45.t;
            var45 = var45.tpxJtr;
            var45 = var48.bind(var58)(var45);
            var14['label'] = var45;
            var45 = 53;
            var45 = var69[var45];
            var45 = var68.bind(var3)(var45);
            var45 = var45.NitroWheelIcon;
            var14['IconComponent'] = var45;
            var45 = var55.GENERAL;
            var14['section'] = var45;
            var14['sortKey'] = var33;
            var64 = var6.bind(var3)(var14);
            var14 = {};
            var45 = var69[var82];
            var45 = var68.bind(var3)(var45);
            var58 = var45.intl;
            var48 = var58.string;
            var45 = var69[var82];
            var45 = var68.bind(var3)(var45);
            var45 = var45.t;
            var45 = var45.tpxJtr;
            var45 = var48.bind(var58)(var45);
            var14['label'] = var45;
            var45 = 54;
            var45 = var69[var45];
            var45 = var68.bind(var3)(var45);
            var45 = var45.BookmarkOutlineIcon;
            var14['IconComponent'] = var45;
            var45 = var55.GENERAL;
            var14['section'] = var45;
            var14['sortKey'] = var33;
            var62 = var6.bind(var3)(var14);
            var14 = {};
            var45 = var69[var82];
            var45 = var68.bind(var3)(var45);
            var58 = var45.intl;
            var48 = var58.string;
            var45 = var69[var82];
            var45 = var68.bind(var3)(var45);
            var45 = var45.t;
            var45 = var45.SvXS1d;
            var45 = var48.bind(var58)(var45);
            var14['label'] = var45;
            var45 = 55;
            var45 = var69[var45];
            var45 = var68.bind(var3)(var45);
            var45 = var45.BookmarkIcon;
            var14['IconComponent'] = var45;
            var45 = var55.GENERAL;
            var14['section'] = var45;
            var14['sortKey'] = var33;
            var61 = var6.bind(var3)(var14);
            var14 = {};
            var33 = var69[var82];
            var33 = var68.bind(var3)(var33);
            var48 = var33.intl;
            var45 = var48.string;
            var33 = var69[var82];
            var33 = var68.bind(var3)(var33);
            var33 = var33.t;
            var33 = var33.mJ3P0N;
            var33 = var45.bind(var48)(var33);
            var14['label'] = var33;
            var70 = 56;
            var33 = var69[var70];
            var33 = var68.bind(var3)(var33);
            var33 = var33.ClockIcon;
            var14['IconComponent'] = var33;
            var14['arrow'] = var56;
            var33 = var55.GENERAL;
            var14['section'] = var33;
            var14['sortKey'] = var16;
            var59 = var6.bind(var3)(var14);
            var14 = {};
            var33 = var69[var82];
            var33 = var68.bind(var3)(var33);
            var48 = var33.intl;
            var45 = var48.string;
            var33 = var69[var82];
            var33 = var68.bind(var3)(var33);
            var33 = var33.t;
            var33 = var33.vrbqs7;
            var33 = var45.bind(var48)(var33);
            var14['label'] = var33;
            var33 = var69[var70];
            var33 = var68.bind(var3)(var33);
            var33 = var33.ClockIcon;
            var14['IconComponent'] = var33;
            var14['arrow'] = var56;
            var33 = var55.GENERAL;
            var14['section'] = var33;
            var14['sortKey'] = var16;
            var58 = var6.bind(var3)(var14);
            var14 = {};
            var16 = var69[var82];
            var16 = var68.bind(var3)(var16);
            var45 = var16.intl;
            var33 = var45.string;
            var16 = var69[var82];
            var16 = var68.bind(var3)(var16);
            var16 = var16.t;
            var16 = var16.PHjkRE;
            var16 = var33.bind(var45)(var16);
            var14['label'] = var16;
            var16 = 57;
            var16 = var69[var16];
            var16 = var68.bind(var3)(var16);
            var16 = var16.RobotIcon;
            var14['IconComponent'] = var16;
            var14['arrow'] = var56;
            var16 = var55.GENERAL;
            var14['section'] = var16;
            var16 = 13;
            var14['sortKey'] = var16;
            var16 = var6.bind(var3)(var14);
            var14 = {};
            var33 = var69[var82];
            var33 = var68.bind(var3)(var33);
            var48 = var33.intl;
            var45 = var48.string;
            var33 = var69[var82];
            var33 = var68.bind(var3)(var33);
            var33 = var33.t;
            var33 = var33.g33r/P;
            var33 = var45.bind(var48)(var33);
            var14['label'] = var33;
            var33 = 58;
            var33 = var69[var33];
            var33 = var68.bind(var3)(var33);
            var33 = var33.ChatIcon;
            var14['IconComponent'] = var33;
            var33 = var55.GENERAL;
            var14['section'] = var33;
            var33 = 14;
            var14['sortKey'] = var33;
            var45 = var6.bind(var3)(var14);
            var14 = {};
            var33 = var69[var82];
            var33 = var68.bind(var3)(var33);
            var74 = var33.intl;
            var48 = var74.string;
            var33 = var69[var82];
            var33 = var68.bind(var3)(var33);
            var33 = var33.t;
            var33 = var33.P8tvKC;
            var33 = var48.bind(var74)(var33);
            var14['label'] = var33;
            var33 = 59;
            var33 = var69[var33];
            var33 = var68.bind(var3)(var33);
            var33 = var33.AtIcon;
            var14['IconComponent'] = var33;
            var33 = var55.GENERAL;
            var14['section'] = var33;
            var14['sortKey'] = var27;
            var48 = var6.bind(var3)(var14);
            var14 = {};
            var27 = var69[var82];
            var27 = var68.bind(var3)(var27);
            var74 = var27.intl;
            var33 = var74.string;
            var27 = var69[var82];
            var27 = var68.bind(var3)(var27);
            var27 = var27.t;
            var27 = var27.S/xNKS;
            var27 = var33.bind(var74)(var27);
            var14['label'] = var27;
            var74 = 60;
            var27 = var69[var74];
            var27 = var68.bind(var3)(var27);
            var27 = var27.DownloadIcon;
            var14['IconComponent'] = var27;
            var27 = var55.GENERAL;
            var14['section'] = var27;
            var14['sortKey'] = var34;
            var27 = var6.bind(var3)(var14);
            var14 = {};
            var33 = var69[var82];
            var33 = var68.bind(var3)(var33);
            var79 = var33.intl;
            var78 = var79.string;
            var33 = var69[var82];
            var33 = var68.bind(var3)(var33);
            var33 = var33.t;
            var33 = var33.JVuuz8;
            var33 = var78.bind(var79)(var33);
            var14['label'] = var33;
            var33 = var69[var74];
            var33 = var68.bind(var3)(var33);
            var33 = var33.DownloadIcon;
            var14['IconComponent'] = var33;
            var33 = var55.GENERAL;
            var14['section'] = var33;
            var14['sortKey'] = var34;
            var33 = var6.bind(var3)(var14);
            var14 = {};
            var78 = var69[var82];
            var78 = var68.bind(var3)(var78);
            var80 = var78.intl;
            var79 = var80.string;
            var78 = var69[var82];
            var78 = var68.bind(var3)(var78);
            var78 = var78.t;
            var78 = var78.vbAEaG;
            var78 = var79.bind(var80)(var78);
            var14['label'] = var78;
            var74 = var69[var74];
            var74 = var68.bind(var3)(var74);
            var74 = var74.DownloadIcon;
            var14['IconComponent'] = var74;
            var74 = var55.GENERAL;
            var14['section'] = var74;
            var14['sortKey'] = var34;
            var34 = var6.bind(var3)(var14);
            var14 = {};
            var74 = var69[var82];
            var74 = var68.bind(var3)(var74);
            var79 = var74.intl;
            var78 = var79.string;
            var74 = var69[var82];
            var74 = var68.bind(var3)(var74);
            var74 = var74.t;
            var74 = var74.92CPQ0;
            var74 = var78.bind(var79)(var74);
            var14['label'] = var74;
            var74 = 42;
            var78 = var69[var74];
            var78 = var68.bind(var3)(var78);
            var78 = var78.LinkIcon;
            var14['IconComponent'] = var78;
            var78 = var55.GENERAL;
            var14['section'] = var78;
            var14['sortKey'] = var35;
            var35 = var6.bind(var3)(var14);
            var14 = {};
            var78 = var69[var82];
            var78 = var68.bind(var3)(var78);
            var80 = var78.intl;
            var79 = var80.string;
            var78 = var69[var82];
            var78 = var68.bind(var3)(var78);
            var78 = var78.t;
            var78 = var78.Xrt5Pj;
            var78 = var79.bind(var80)(var78);
            var14['label'] = var78;
            var74 = var69[var74];
            var74 = var68.bind(var3)(var74);
            var74 = var74.LinkIcon;
            var14['IconComponent'] = var74;
            var74 = var55.GENERAL;
            var14['section'] = var74;
            var14['sortKey'] = var72;
            var74 = var6.bind(var3)(var14);
            var14 = {};
            var72 = var69[var82];
            var72 = var68.bind(var3)(var72);
            var79 = var72.intl;
            var78 = var79.string;
            var72 = var69[var82];
            var72 = var68.bind(var3)(var72);
            var72 = var72.t;
            var72 = var72.Rjezb2;
            var72 = var78.bind(var79)(var72);
            var14['label'] = var72;
            var70 = var69[var70];
            var70 = var68.bind(var3)(var70);
            var70 = var70.ClockIcon;
            var14['IconComponent'] = var70;
            var14['arrow'] = var56;
            var56 = var55.GENERAL;
            var14['section'] = var56;
            var14['sortKey'] = var15;
            var14 = var6.bind(var3)(var14);
            var15 = {};
            var56 = var69[var82];
            var56 = var68.bind(var3)(var56);
            var72 = var56.intl;
            var70 = var72.string;
            var56 = var69[var82];
            var56 = var68.bind(var3)(var56);
            var56 = var56.t;
            var56 = var56.zBoHlZ;
            var56 = var70.bind(var72)(var56);
            var15['label'] = var56;
            var56 = 61;
            var56 = var69[var56];
            var56 = var68.bind(var3)(var56);
            var56 = var56.IdIcon;
            var15['IconComponent'] = var56;
            var55 = var55.GENERAL;
            var15['section'] = var55;
            var15['sortKey'] = var23;
            var72 = var6.bind(var3)(var15);
            var15 = {};
            if(!(!(var18 > var12))) { _fun0004_ip = 4266; continue _fun0004 }
 4212:
            var56 = _closure1_slot0;
            var18 = _closure1_slot2;
            var23 = var18[var82];
            var23 = var56.bind(var3)(var23);
            var55 = var23.intl;
            var23 = var55.string;
            var18 = var18[var82];
            var18 = var56.bind(var3)(var18);
            var18 = var18.t;
            var18 = var18.4sxKOT;
            var18 = var23.bind(var55)(var18);
            _fun0004_ip = 4318; continue _fun0004;
 4266:
            var68 = _closure1_slot0;
            var23 = _closure1_slot2;
            var55 = var23[var82];
            var55 = var68.bind(var3)(var55);
            var56 = var55.intl;
            var55 = var56.string;
            var23 = var23[var82];
            var23 = var68.bind(var3)(var23);
            var23 = var23.t;
            var23 = var23.wUIMqa;
            var18 = var55.bind(var56)(var23);
 4318:
            var15['label'] = var18;
            var80 = _closure1_slot0;
            var81 = _closure1_slot2;
            var18 = 62;
            var18 = var81[var18];
            var18 = var80.bind(var3)(var18);
            var18 = var18.XSmallBoldIcon;
            var15['IconComponent'] = var18;
            var78 = 'danger';
            var15['variant'] = var78;
            var55 = _closure1_slot24;
            var18 = var55.DESTRUCTIVE;
            var15['section'] = var18;
            var18 = 98;
            var15['sortKey'] = var18;
            var56 = var6.bind(var3)(var15);
            var15 = {};
            var18 = var81[var82];
            var18 = var80.bind(var3)(var18);
            var68 = var18.intl;
            var23 = var68.string;
            var18 = var81[var82];
            var18 = var80.bind(var3)(var18);
            var18 = var18.t;
            var18 = var18.ZbtGBg;
            var18 = var23.bind(var68)(var18);
            var15['label'] = var18;
            var79 = 41;
            var18 = var81[var79];
            var18 = var80.bind(var3)(var18);
            var18 = var18.TrashIcon;
            var15['IconComponent'] = var18;
            var15['variant'] = var78;
            var18 = var55.DESTRUCTIVE;
            var15['section'] = var18;
            var18 = 99;
            var15['sortKey'] = var18;
            var18 = var6.bind(var3)(var15);
            var15 = {};
            var23 = var81[var82];
            var23 = var80.bind(var3)(var23);
            var69 = var23.intl;
            var68 = var69.string;
            var23 = var81[var82];
            var23 = var80.bind(var3)(var23);
            var23 = var23.t;
            var23 = var23.kFwAsb;
            var23 = var68.bind(var69)(var23);
            var15['label'] = var23;
            var23 = var81[var79];
            var23 = var80.bind(var3)(var23);
            var23 = var23.TrashIcon;
            var15['IconComponent'] = var23;
            var15['variant'] = var78;
            var23 = var55.DESTRUCTIVE;
            var15['section'] = var23;
            var23 = 100;
            var15['sortKey'] = var23;
            var23 = var6.bind(var3)(var15);
            var15 = {};
            var68 = var81[var82];
            var68 = var80.bind(var3)(var68);
            var70 = var68.intl;
            var69 = var70.string;
            var68 = var81[var82];
            var68 = var80.bind(var3)(var68);
            var68 = var68.t;
            var68 = var68.+78Pfn;
            var68 = var69.bind(var70)(var68);
            var15['label'] = var68;
            var68 = 63;
            var69 = var81[var68];
            var69 = var80.bind(var3)(var69);
            var69 = var69.FlagIcon;
            var15['IconComponent'] = var69;
            var15['variant'] = var78;
            var69 = var55.DESTRUCTIVE;
            var15['section'] = var69;
            var69 = 101;
            var15['sortKey'] = var69;
            var70 = var6.bind(var3)(var15);
            var15 = {};
            var83 = var81[var82];
            var83 = var80.bind(var3)(var83);
            var85 = var83.intl;
            var84 = var85.string;
            var83 = var81[var82];
            var83 = var80.bind(var3)(var83);
            var83 = var83.t;
            var83 = var83.n5EBAA;
            var83 = var84.bind(var85)(var83);
            var15['label'] = var83;
            var15['variant'] = var78;
            var83 = 64;
            var83 = var81[var83];
            var83 = var80.bind(var3)(var83);
            var83 = var83.ClydeIcon;
            var15['IconComponent'] = var83;
            var83 = var55.DESTRUCTIVE;
            var15['section'] = var83;
            var15['sortKey'] = var69;
            var69 = var6.bind(var3)(var15);
            var15 = {};
            var83 = var81[var82];
            var83 = var80.bind(var3)(var83);
            var85 = var83.intl;
            var84 = var85.string;
            var86 = _closure1_slot1;
            var83 = 65;
            var83 = var81[var83];
            var83 = var86.bind(var3)(var83);
            var83 = var83.1D+vq6;
            var83 = var84.bind(var85)(var83);
            var15['label'] = var83;
            var68 = var81[var68];
            var68 = var80.bind(var3)(var68);
            var68 = var68.FlagIcon;
            var15['IconComponent'] = var68;
            var68 = var55.DESTRUCTIVE;
            var15['section'] = var68;
            var68 = 102;
            var15['sortKey'] = var68;
            var15['disabled'] = var26;
            var68 = var6.bind(var3)(var15);
            var15 = {};
            var26 = var81[var82];
            var26 = var80.bind(var3)(var26);
            var84 = var26.intl;
            var83 = var84.string;
            var26 = var81[var82];
            var26 = var80.bind(var3)(var26);
            var26 = var26.t;
            var26 = var26.ZH7P2t;
            var26 = var83.bind(var84)(var26);
            var15['label'] = var26;
            var26 = 66;
            var26 = var81[var26];
            var26 = var80.bind(var3)(var26);
            var26 = var26.ImageWarningIcon;
            var15['IconComponent'] = var26;
            var26 = var55.DESTRUCTIVE;
            var15['section'] = var26;
            var26 = 103;
            var15['sortKey'] = var26;
            var26 = var6.bind(var3)(var15);
            var15 = {};
            var83 = var81[var82];
            var83 = var80.bind(var3)(var83);
            var84 = var83.intl;
            var83 = var84.string;
            var82 = var81[var82];
            var82 = var80.bind(var3)(var82);
            var82 = var82.t;
            var82 = var82.xwMqDw;
            var82 = var83.bind(var84)(var82);
            var15['label'] = var82;
            var79 = var81[var79];
            var79 = var80.bind(var3)(var79);
            var79 = var79.TrashIcon;
            var15['IconComponent'] = var79;
            var15['variant'] = var78;
            var55 = var55.DESTRUCTIVE;
            var15['section'] = var55;
            var55 = 110;
            var15['sortKey'] = var55;
            var55 = var6.bind(var3)(var15);
            var78 = new Array(0);
            var15 = 'Preview';
            var15 = var15 === var77;
            if(var15) { _fun0004_ip = 5138; continue _fun0004 }
 5091:
            var79 = _closure1_slot0;
            var80 = _closure1_slot2;
            var77 = 29;
            var77 = var80[var77];
            var81 = var79.bind(var3)(var77);
            var80 = var81.hasFlag;
            var79 = var5.flags;
            var77 = _closure1_slot18;
            var77 = var77.EPHEMERAL;
            var15 = var80.bind(var81)(var79, var77);
 5138:
            if(!var15) { _fun0004_ip = 5198; continue _fun0004 }
 5141:
            var15 = var78.push;
            r104 = var78;
            r103 = var75;
            r102 = var67;
            r101 = var62;
            r100 = var61;
            var100 = var64;
            var99 = var59;
            var98 = var58;
            var97 = var56;
            var96 = var55;
            var95 = var53;
            var94 = var48;
            var93 = var45;
            var92 = var39;
            var91 = var16;
            var90 = var18;
            var15 = r104[var15](r103, r102, r101, r100, var100, var99, var98, var97, var96, var95, var94, var93, var92, var91, var90, var89);
 5198:
            if(!var10) { _fun0004_ip = 5251; continue _fun0004 }
 5201:
            var77 = _closure1_slot0;
            var79 = _closure1_slot2;
            var15 = 29;
            var15 = var79[var15];
            var80 = var77.bind(var3)(var15);
            var79 = var80.hasFlag;
            var77 = var5.flags;
            var15 = _closure1_slot18;
            var15 = var15.EPHEMERAL;
            var15 = var79.bind(var80)(var77, var15);
            var10 = !var15;
 5251:
            if(var10) { _fun0004_ip = 5320; continue _fun0004 }
 5254:
            var10 = var78.push;
            r104 = var78;
            r103 = var53;
            r102 = var39;
            r101 = var37;
            r100 = var56;
            var100 = var23;
            var99 = var55;
            var98 = var49;
            var97 = var40;
            var96 = var43;
            var95 = var64;
            var94 = var62;
            var93 = var61;
            var92 = var59;
            var91 = var58;
            var90 = var67;
            var89 = var48;
            var88 = var16;
            var87 = var18;
            var10 = r104[var10](r103, r102, r101, r100, var100, var99, var98, var97, var96, var95, var94, var93, var92, var91, var90, var89, var88, var87, var86);
 5320:
            var15 = _closure1_slot0;
            var77 = _closure1_slot2;
            var10 = 29;
            var10 = var77[var10];
            var79 = var15.bind(var3)(var10);
            var77 = var79.hasFlag;
            var15 = var5.flags;
            var10 = _closure1_slot18;
            var10 = var10.EPHEMERAL;
            var10 = var77.bind(var79)(var15, var10);
            if(!var10) { _fun0004_ip = 5410; continue _fun0004 }
 5370:
            var10 = var78.push;
            var10 = var10.bind(var78)(var74);
            var10 = var78.push;
            var10 = var10.bind(var78)(var70);
            var10 = var78.push;
            var10 = var10.bind(var78)(var69);
            var10 = var78.push;
            var10 = var10.bind(var78)(var68);
 5410:
            var10 = global;
            var15 = var10.Set;
            var77 = var15.prototype;
            var77 = Object.create(var77, {constructor: {value: var15}});
            r104 = var77;
            r103 = var78;
            var15 = new r104[var15](r103, r102);
            var15 = var15 instanceof Object ? var15 : var77;
            var _closure2_slot11 = var15;
            var15 = new Array(0);
            if(var73) { _fun0004_ip = 5489; continue _fun0004 }
 5452:
            var77 = var5.hasFlag;
            var73 = _closure1_slot18;
            var73 = var73.HAS_THREAD;
            var73 = var77.bind(var5)(var73);
            if(!var73) { _fun0004_ip = 5500; continue _fun0004 }
 5476:
            var73 = var15.unshift;
            var73 = var73.bind(var15)(var76);
            _fun0004_ip = 5500; continue _fun0004;
 5489:
            var73 = var15.unshift;
            var73 = var73.bind(var15)(var75);
 5500:
            var73 = var15.unshift;
            var73 = var73.bind(var15)(var74);
            if(!var71) { _fun0004_ip = 5525; continue _fun0004 }
 5514:
            var71 = var15.unshift;
            var71 = var71.bind(var15)(var72);
 5525:
            if(!var66) { _fun0004_ip = 5562; continue _fun0004 }
 5528:
            var71 = _closure1_slot0;
            var72 = _closure1_slot2;
            var66 = 67;
            var66 = var72[var66];
            var71 = var71.bind(var3)(var66);
            var66 = var71.canReportMessageToMods;
            var66 = var66.bind(var71)(var5);
            if(var66) { _fun0004_ip = 5650; continue _fun0004 }
 5562:
            var66 = var11 != var47;
            if(!var66) { _fun0004_ip = 5600; continue _fun0004 }
 5569:
            var72 = _closure1_slot0;
            var73 = _closure1_slot2;
            var71 = 68;
            var71 = var73[var71];
            var72 = var72.bind(var3)(var71);
            var71 = var72.canReportUser;
            var66 = var71.bind(var72)(var47);
 5600:
            if(!var66) { _fun0004_ip = 5634; continue _fun0004 }
 5603:
            var72 = _closure1_slot0;
            var73 = _closure1_slot2;
            var71 = 68;
            var71 = var73[var71];
            var72 = var72.bind(var3)(var71);
            var71 = var72.canReportMessage;
            var66 = var71.bind(var72)(var5);
 5634:
            if(!var66) { _fun0004_ip = 5672; continue _fun0004 }
 5637:
            var66 = var15.unshift;
            var66 = var66.bind(var15)(var70);
            _fun0004_ip = 5672; continue _fun0004;
 5650:
            var66 = var15.unshift;
            var66 = var66.bind(var15)(var69);
            var66 = var15.unshift;
            var66 = var66.bind(var15)(var68);
 5672:
            var66 = var15.unshift;
            var66 = var66.bind(var15)(var67);
            if(!var65) { _fun0004_ip = 5759; continue _fun0004 }
 5686:
            if(!var63) { _fun0004_ip = 5708; continue _fun0004 }
 5689:
            if(var57) { _fun0004_ip = 5708; continue _fun0004 }
 5692:
            if(var60) { _fun0004_ip = 5708; continue _fun0004 }
 5695:
            var63 = var15.unshift;
            var63 = var63.bind(var15)(var64);
            _fun0004_ip = 5759; continue _fun0004;
 5708:
            if(var57) { _fun0004_ip = 5727; continue _fun0004 }
 5711:
            if(var60) { _fun0004_ip = 5727; continue _fun0004 }
 5714:
            var57 = var15.unshift;
            var57 = var57.bind(var15)(var62);
            _fun0004_ip = 5738; continue _fun0004;
 5727:
            var57 = var15.unshift;
            var57 = var57.bind(var15)(var61);
 5738:
            var57 = var15.unshift;
            if(var60) { _fun0004_ip = 5754; continue _fun0004 }
 5747:
            var59 = var57.bind(var15)(var59);
            _fun0004_ip = 5759; continue _fun0004;
 5754:
            var57 = var57.bind(var15)(var58);
 5759:
            if(!var51) { _fun0004_ip = 5773; continue _fun0004 }
 5762:
            var51 = var15.unshift;
            var51 = var51.bind(var15)(var56);
 5773:
            var51 = !var13;
            if(!var51) { _fun0004_ip = 5793; continue _fun0004 }
 5779:
            var56 = var5.canDeleteOwnMessage;
            var56 = var56.bind(var5)(var46);
            var51 = !var56;
 5793:
            if(var51) { _fun0004_ip = 5821; continue _fun0004 }
 5796:
            var56 = _closure1_slot21;
            var58 = var56.UNDELETABLE;
            var57 = var58.has;
            var56 = var5.type;
            var51 = var57.bind(var58)(var56);
 5821:
            if(var51) { _fun0004_ip = 5835; continue _fun0004 }
 5824:
            var51 = var15.unshift;
            var51 = var51.bind(var15)(var55);
 5835:
            var55 = _closure1_slot1;
            var56 = _closure1_slot2;
            var51 = 69;
            var51 = var56[var51];
            var51 = var55.bind(var3)(var51);
            var51 = var51.bind(var3)(var5, var46);
            if(!var51) { _fun0004_ip = 5867; continue _fun0004 }
 5864:
            var51 = !var54;
 5867:
            if(!var51) { _fun0004_ip = 5881; continue _fun0004 }
 5870:
            var51 = var15.unshift;
            var51 = var51.bind(var15)(var53);
 5881:
            if(!var44) { _fun0004_ip = 5895; continue _fun0004 }
 5884:
            var44 = var15.unshift;
            var44 = var44.bind(var15)(var49);
 5895:
            var49 = var52.type;
            var44 = _closure1_slot14;
            var44 = var44.GROUP_DM;
            var49 = var49 === var44;
            var44 = var52.isPrivate;
            var44 = var44.bind(var52)();
            if(!var44) { _fun0004_ip = 5930; continue _fun0004 }
 5927:
            var44 = !var49;
 5930:
            if(var44) { _fun0004_ip = 5936; continue _fun0004 }
 5933:
            var44 = var50;
 5936:
            if(var44) { _fun0004_ip = 6014; continue _fun0004 }
 5939:
            var51 = _closure1_slot10;
            var50 = var51.can;
            var44 = _closure1_slot22;
            var44 = var44.SEND_MESSAGES;
            var44 = var50.bind(var51)(var44, var52);
            if(var44) { _fun0004_ip = 5971; continue _fun0004 }
 5968:
            var44 = var49;
 5971:
            if(!var44) { _fun0004_ip = 5985; continue _fun0004 }
 5974:
            var44 = var15.unshift;
            var44 = var44.bind(var15)(var48);
 5985:
            var48 = var11 == var47;
            var44 = undefined;
            if(var48) { _fun0004_ip = 5999; continue _fun0004 }
 5994:
            var44 = var47.id;
 5999:
            if(!(var46 !== var44)) { _fun0004_ip = 6014; continue _fun0004 }
 6003:
            var44 = var15.unshift;
            var44 = var44.bind(var15)(var45);
 6014:
            if(!var42) { _fun0004_ip = 6040; continue _fun0004 }
 6017:
            var42 = var15.unshift;
            var44 = var5.pinned;
            if(!var44) { _fun0004_ip = 6035; continue _fun0004 }
 6032:
            var40 = var43;
 6035:
            var40 = var42.bind(var15)(var40);
 6040:
            var40 = var5.getContentMessage;
            var42 = var40.bind(var5)();
            var40 = var11 != var42;
            if(!var40) { _fun0004_ip = 6066; continue _fun0004 }
 6057:
            var43 = var42.content;
            var40 = var11 != var43;
 6066:
            if(!var40) { _fun0004_ip = 6082; continue _fun0004 }
 6069:
            var44 = var42.content;
            var43 = '';
            var40 = var43 !== var44;
 6082:
            if(!var40) { _fun0004_ip = 6099; continue _fun0004 }
 6085:
            var42 = var42.content;
            var42 = var42.length;
            var40 = var42 > var9;
 6099:
            if(!var40) { _fun0004_ip = 6106; continue _fun0004 }
 6102:
            var40 = var11 == var21;
 6106:
            if(!var40) { _fun0004_ip = 6120; continue _fun0004 }
 6109:
            var40 = var15.unshift;
            var40 = var40.bind(var15)(var41);
 6120:
            if(!var38) { _fun0004_ip = 6134; continue _fun0004 }
 6123:
            var38 = var15.unshift;
            var38 = var38.bind(var15)(var39);
 6134:
            if(!var32) { _fun0004_ip = 6148; continue _fun0004 }
 6137:
            var32 = var15.unshift;
            var32 = var32.bind(var15)(var37);
 6148:
            var32 = var11 == var21;
            if(var32) { _fun0004_ip = 6158; continue _fun0004 }
 6155:
            var32 = var36;
 6158:
            if(var32) { _fun0004_ip = 6389; continue _fun0004 }
 6164:
            var32 = var15.unshift;
            var32 = var32.bind(var15)(var35);
            var35 = var21.mediaType;
            var32 = 'image';
            if(!(var32 !== var35)) { _fun0004_ip = 6263; continue _fun0004 }
 6189:
            var35 = var21.mediaType;
            var32 = 'video';
            if(!(var32 !== var35)) { _fun0004_ip = 6250; continue _fun0004 }
 6203:
            var35 = var21.mediaType;
            var32 = 'audio';
            var32 = var32 !== var35;
            if(!var32) { _fun0004_ip = 6234; continue _fun0004 }
 6220:
            var36 = var21.mediaType;
            var35 = 'file';
            var32 = var35 !== var36;
 6234:
            if(var32) { _fun0004_ip = 6310; continue _fun0004 }
 6237:
            var32 = var15.unshift;
            var32 = var32.bind(var15)(var34);
            _fun0004_ip = 6310; continue _fun0004;
 6250:
            var32 = var15.unshift;
            var32 = var32.bind(var15)(var33);
            _fun0004_ip = 6310; continue _fun0004;
 6263:
            var25 = var11 != var25;
            if(!var25) { _fun0004_ip = 6285; continue _fun0004 }
 6270:
            if(var29) { _fun0004_ip = 6282; continue _fun0004 }
 6273:
            if(!var30) { _fun0004_ip = 6279; continue _fun0004 }
 6276:
            var30 = var31;
 6279:
            var29 = var30;
 6282:
            var25 = var29;
 6285:
            if(!var25) { _fun0004_ip = 6299; continue _fun0004 }
 6288:
            var25 = var15.unshift;
            var25 = var25.bind(var15)(var28);
 6299:
            var25 = var15.unshift;
            var25 = var25.bind(var15)(var27);
 6310:
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var25 = 70;
            var25 = var28[var25];
            var27 = var27.bind(var3)(var25);
            var25 = var27.messageHasObscurableMedia;
            var25 = var25.bind(var27)(var5);
            if(!var25) { _fun0004_ip = 6355; continue _fun0004 }
 6344:
            var25 = var15.unshift;
            var25 = var25.bind(var15)(var26);
 6355:
            var25 = var21.sourceType;
            var21 = 'attachment';
            var21 = var21 === var25;
            if(!var21) { _fun0004_ip = 6375; continue _fun0004 }
 6372:
            var21 = var24;
 6375:
            if(!var21) { _fun0004_ip = 6389; continue _fun0004 }
 6378:
            var21 = var15.unshift;
            var21 = var21.bind(var15)(var23);
 6389:
            var21 = var5.reactions;
            var21 = var21.length;
            var21 = var21 > var9;
            if(!var21) { _fun0004_ip = 6457; continue _fun0004 }
 6407:
            var23 = var5.isPoll;
            var23 = var23.bind(var5)();
            var23 = !var23;
            if(var23) { _fun0004_ip = 6454; continue _fun0004 }
 6423:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var24 = 71;
            var24 = var26[var24];
            var25 = var25.bind(var3)(var24);
            var24 = var25.hasNonVoteReactions;
            var23 = var24.bind(var25)(var5);
 6454:
            var21 = var23;
 6457:
            if(!var21) { _fun0004_ip = 6485; continue _fun0004 }
 6460:
            var21 = var15.unshift;
            var21 = var21.bind(var15)(var22);
            if(!var13) { _fun0004_ip = 6485; continue _fun0004 }
 6474:
            var13 = var15.unshift;
            var13 = var13.bind(var15)(var18);
 6485:
            var13 = _closure1_slot25;
            var18 = var13.bind(var3)(var17);
            var17 = var18.bind(var3)();
            var13 = var17.done;
            if(var13) { _fun0004_ip = 6570; continue _fun0004 }
 6506:
            var21 = var17.value;
            var22 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var20];
            var13 = var22.bind(var3)(var13);
            var13 = var13.PollMessageContextItemTypes;
            var13 = var13.END_EARLY;
            if(!(var21 === var13)) { _fun0004_ip = 6555; continue _fun0004 }
 6544:
            var13 = var15.unshift;
            var13 = var13.bind(var15)(var19);
 6555:
            var21 = var18.bind(var3)();
            var13 = var21.done;
            var17 = var21;
            if(!var13) { _fun0004_ip = 6506; continue _fun0004 }
 6570:
            var13 = var15.unshift;
            var13 = var13.bind(var15)(var16);
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 72;
            var13 = var17[var13];
            var16 = var16.bind(var3)(var13);
            var13 = var16.canViewInteractionInfo;
            var13 = var13.bind(var16)(var5);
            if(!var13) { _fun0004_ip = 6626; continue _fun0004 }
 6615:
            var13 = var15.unshift;
            var13 = var13.bind(var15)(var14);
 6626:
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
            var13 = 73;
            var13 = var15[var13];
            var15 = var14.bind(var3)(var13);
            var14 = var15.groupBy;
            var13 = 'section';
            var14 = var14.bind(var15)(var16, var13);
            var13 = var10.Object;
            var10 = var13.values;
            var13 = var10.bind(var13)(var14);
            var10 = var13.map;
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
            var4 = var10.bind(var13)(var4);
            var4 = var2.bind(var3)(var4);
            return var4;
 6737:
            var4 = {};
            var10 = _closure1_slot24;
            var10 = var10.PRIMARY;
            var4['section'] = var10;
            var4['sortKey'] = var12;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 38;
            var15 = var14[var10];
            var15 = var13.bind(var3)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var10 = var14[var10];
            var10 = var13.bind(var3)(var10);
            var10 = var10.t;
            var10 = var10.k5WiPT;
            var10 = var15.bind(var16)(var10);
            var4['label'] = var10;
            var10 = 42;
            var10 = var14[var10];
            var10 = var13.bind(var3)(var10);
            var10 = var10.LinkIcon;
            var4['IconComponent'] = var10;
            var4 = var6.bind(var3)(var4);
            var10 = new Array(1);
            var10[0] = var4;
            var4 = new Array(1);
            var4[0] = var10;
            var4 = var2.bind(var3)(var4);
            return var4;
 6868:
            var4 = new Array(0);
            if(!var1) { _fun0004_ip = 6993; continue _fun0004 }
 6875:
            var10 = var4.push;
            var1 = {};
            var13 = _closure1_slot24;
            var13 = var13.PRIMARY;
            var1['section'] = var13;
            var1['sortKey'] = var12;
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
            var12 = var12.5911LS;
            var12 = var15.bind(var16)(var12);
            var1['label'] = var12;
            var12 = 39;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.RetryIcon;
            var1['IconComponent'] = var12;
            var1 = var6.bind(var3)(var1);
            var1 = var10.bind(var4)(var1);
 6993:
            var1 = var5.getContentMessage;
            var5 = var1.bind(var5)();
            var1 = var11 != var5;
            if(!var1) { _fun0004_ip = 7019; continue _fun0004 }
 7010:
            var10 = var5.content;
            var1 = var11 != var10;
 7019:
            if(!var1) { _fun0004_ip = 7036; continue _fun0004 }
 7022:
            var5 = var5.content;
            var5 = var5.length;
            var1 = var5 > var9;
 7036:
            if(!var1) { _fun0004_ip = 7157; continue _fun0004 }
 7039:
            var5 = var4.push;
            var1 = {};
            var9 = _closure1_slot24;
            var9 = var9.PRIMARY;
            var1['section'] = var9;
            var1['sortKey'] = var8;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 38;
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
            var8 = 40;
            var8 = var10[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.CopyIcon;
            var1['IconComponent'] = var8;
            var1 = var6.bind(var3)(var1);
            var1 = var5.bind(var4)(var1);
 7157:
            var5 = var4.push;
            var1 = {};
            var8 = _closure1_slot24;
            var8 = var8.PRIMARY;
            var1['section'] = var8;
            var8 = 3;
            var1['sortKey'] = var8;
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
            var7 = var7.xwMqDw;
            var7 = var10.bind(var11)(var7);
            var1['label'] = var7;
            var7 = 41;
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
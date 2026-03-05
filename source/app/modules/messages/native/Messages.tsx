// app/modules/messages/native/Messages.tsx
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
            var9 = _closure1_slot69;
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
            var7 = _closure1_slot69;
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
    var _closure1_slot68 = var1;
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
    var _closure1_slot69 = var1;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var8);
    var _closure1_slot5 = var8;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.updateShouldShowJumpToPresentButton;
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot19 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot20 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot21 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot22 = var4;
    var4 = 20;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot23 = var4;
    var4 = 21;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot24 = var4;
    var4 = 22;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot25 = var4;
    var4 = 23;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.useChannelPollInteractions;
    var _closure1_slot26 = var9;
    var4 = var4.useMessagePollInteractions;
    var _closure1_slot27 = var4;
    var4 = 24;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot28 = var4;
    var4 = 25;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot29 = var4;
    var4 = 26;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot30 = var4;
    var4 = 27;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot31 = var4;
    var4 = 28;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot32 = var4;
    var4 = 29;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot33 = var4;
    var4 = 30;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot34 = var4;
    var4 = 31;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot35 = var4;
    var4 = 32;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot36 = var4;
    var4 = 33;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot37 = var4;
    var4 = 34;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot38 = var4;
    var4 = 35;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot39 = var4;
    var4 = 36;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot40 = var4;
    var4 = 37;
    var9 = var6[var4];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot41 = var9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getUserCommunicationDisabledVersion;
    var _closure1_slot42 = var4;
    var4 = 38;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot43 = var4;
    var4 = 39;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot44 = var4;
    var4 = 40;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot45 = var4;
    var4 = 41;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot46 = var4;
    var4 = 42;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot47 = var4;
    var4 = 43;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot48 = var4;
    var4 = 44;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot49 = var4;
    var4 = 45;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot50 = var4;
    var4 = 46;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot51 = var4;
    var4 = 47;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot52 = var4;
    var4 = 48;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot53 = var4;
    var4 = 49;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot54 = var4;
    var4 = 50;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot55 = var4;
    var4 = 51;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.ChannelTypesSets;
    var _closure1_slot56 = var9;
    var9 = var4.MessageTypes;
    var _closure1_slot57 = var9;
    var9 = var4.MessageFlags;
    var _closure1_slot58 = var9;
    var9 = var4.Permissions;
    var _closure1_slot59 = var9;
    var9 = var4.ME;
    var _closure1_slot60 = var9;
    var4 = var4.ActivityActionTypes;
    var _closure1_slot61 = var4;
    var4 = 52;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot62 = var9;
    var4 = var4.PremiumTypes;
    var _closure1_slot63 = var4;
    var4 = 53;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot64 = var9;
    var9 = var4.Fragment;
    var _closure1_slot65 = var9;
    var4 = var4.jsxs;
    var _closure1_slot66 = var4;
    var4 = 54;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var4 = var7.prototype;
    var9 = Object.create(var4, {constructor: {value: var7}});
    var4 = 'Messages';
    var13 = var9;
    var12 = var4;
    var7 = new var13[var7](var12, var11);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot67 = var7;
    var7 = var8.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var69 = arg1;
            var _closure2_slot0 = var69;
            var8 = var69.channel;
            var _closure2_slot1 = var8;
            var18 = var69.screenIndex;
            var _closure2_slot2 = var18;
            var14 = var69.chatInputRef;
            var _closure2_slot3 = var14;
            var22 = var69.isResourceChannel;
            var _closure2_slot4 = var22;
            var25 = var69.style;
            var23 = var69.visibleMessagesWindowHandler;
            var _closure2_slot5 = var23;
            var21 = var69.onPressKey;
            var11 = var69.children;
            var16 = var69.HACK_fixModalInteraction;
            var26 = var69.alwaysRespectKeyboard;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 55;
            var7 = var2[var3];
            var4 = undefined;
            var13 = var5.bind(var4)(var7);
            var12 = var13.useStateFromStores;
            var7 = _closure1_slot46;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = var8.id;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var3 = _closure1_slot46;
                var2 = var3.getMessages;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var12.bind(var13)(var10, var7, var9);
            var _closure2_slot6 = var9;
            var10 = var8.id;
            var _closure2_slot7 = var10;
            var7 = var8.getGuildId;
            var12 = var7.bind(var8)();
            var _closure2_slot8 = var12;
            var2 = var2[var3];
            var13 = var5.bind(var4)(var2);
            var7 = var13.useStateFromStores;
            var2 = _closure1_slot43;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot43;
                var2 = var3.getGuild;
                var1 = _closure2_slot8;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var30 = var7.bind(var13)(var5, var2);
            var _closure2_slot9 = var30;
            var5 = null;
            var2 = var5 == var30;
            var61 = undefined;
            if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var61 = var30.systemChannelFlags;
case 36:
            var _closure2_slot10 = var61;
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = var15[var3];
            var20 = var7.bind(var4)(var2);
            var19 = var20.useStateFromStores;
            var2 = _closure1_slot37;
            var17 = new Array(1);
            var17[0] = var2;
            var13 = function() {
                var2 = _closure1_slot37;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var74 = var19.bind(var20)(var17, var13, var2);
            var _closure2_slot11 = var74;
            var2 = 56;
            var13 = var15[var2];
            var13 = var7.bind(var4)(var13);
            var17 = var13.InlineAttachmentMedia;
            var13 = var17.useSetting;
            var60 = var13.bind(var17)();
            var _closure2_slot12 = var60;
            var13 = var15[var2];
            var13 = var7.bind(var4)(var13);
            var17 = var13.InlineEmbedMedia;
            var13 = var17.useSetting;
            var59 = var13.bind(var17)();
            var _closure2_slot13 = var59;
            var13 = var15[var2];
            var13 = var7.bind(var4)(var13);
            var17 = var13.RenderEmbeds;
            var13 = var17.useSetting;
            var56 = var13.bind(var17)();
            var _closure2_slot14 = var56;
            var13 = var15[var2];
            var13 = var7.bind(var4)(var13);
            var17 = var13.RenderReactions;
            var13 = var17.useSetting;
            var55 = var13.bind(var17)();
            var _closure2_slot15 = var55;
            var13 = var15[var2];
            var13 = var7.bind(var4)(var13);
            var17 = var13.AnimateEmoji;
            var13 = var17.useSetting;
            var20 = var13.bind(var17)();
            var _closure2_slot16 = var20;
            var13 = var15[var2];
            var13 = var7.bind(var4)(var13);
            var17 = var13.AnimateStickers;
            var13 = var17.useSetting;
            var66 = var13.bind(var17)();
            var _closure2_slot17 = var66;
            var13 = var15[var2];
            var13 = var7.bind(var4)(var13);
            var17 = var13.GifAutoPlay;
            var13 = var17.useSetting;
            var64 = var13.bind(var17)();
            var _closure2_slot18 = var64;
            var13 = var15[var3];
            var27 = var7.bind(var4)(var13);
            var24 = var27.useStateFromStores;
            var13 = _closure1_slot36;
            var19 = new Array(1);
            var19[0] = var13;
            var17 = function() {
                var1 = _closure1_slot36;
                var1 = var1.theme;
                return var1;
            };
            var13 = new Array(0);
            var51 = var24.bind(var27)(var19, var17, var13);
            var _closure2_slot19 = var51;
            var13 = 57;
            var13 = var15[var13];
            var17 = var7.bind(var4)(var13);
            var13 = var17.useIsMessageSwipeActionsEnabled;
            var46 = var13.bind(var17)();
            var _closure2_slot20 = var46;
            var2 = var15[var2];
            var2 = var7.bind(var4)(var2);
            var13 = var2.TimestampHourCycle;
            var2 = var13.useSetting;
            var63 = var2.bind(var13)();
            var _closure2_slot21 = var63;
            r134 = 58;
            var2 = var15[r134];
            var13 = var7.bind(var4)(var2);
            var2 = var13.useMessageAuthorActivities;
            r103 = var2.bind(var13)(var9);
            var _closure2_slot22 = r103;
            var2 = var15[r134];
            var13 = var7.bind(var4)(var2);
            var2 = var13.useFetchMessageApplications;
            var2 = var2.bind(var13)(var9);
            var24 = _closure1_slot1;
            var2 = 59;
            var2 = var15[var2];
            var2 = var24.bind(var4)(var2);
            var2 = var2.bind(var4)(var9, var8);
            var17 = _closure1_slot4;
            var36 = 2;
            var2 = var17.bind(var4)(var2, var36);
            var19 = 0;
            r102 = var2[var19];
            var _closure2_slot23 = r102;
            var13 = 1;
            var2 = var2[var13];
            var2 = var15[var3];
            var31 = var7.bind(var4)(var2);
            var29 = var31.useStateFromStores;
            var2 = _closure1_slot45;
            var28 = new Array(1);
            var28[0] = var2;
            var27 = function() {
                var2 = _closure1_slot45;
                var1 = var2.getInvites;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var79 = var29.bind(var31)(var28, var27, var2);
            var _closure2_slot24 = var79;
            var2 = var15[var3];
            var31 = var7.bind(var4)(var2);
            var29 = var31.useStateFromStoresObject;
            var2 = _closure1_slot17;
            var28 = new Array(1);
            var28[0] = var2;
            var27 = function() {
                var1 = {};
                var3 = _closure1_slot17;
                var2 = var3.getApplications;
                var2 = var2.bind(var3)();
                var1['appDirectoryEmbedApplications'] = var2;
                var2 = var3.getInvalidApplicationIds;
                var2 = var2.bind(var3)();
                var1['invalidAppDirectoryEmbedApplicationIds'] = var2;
                var2 = var3.getApplicationFetchStates;
                var2 = var2.bind(var3)();
                var1['appDirectoryEmbedApplicationFetchStates'] = var2;
                return var1;
            };
            var2 = new Array(0);
            var2 = var29.bind(var31)(var28, var27, var2);
            r101 = var2.appDirectoryEmbedApplications;
            var _closure2_slot25 = r101;
            r100 = var2.invalidAppDirectoryEmbedApplicationIds;
            var _closure2_slot26 = r100;
            var100 = var2.appDirectoryEmbedApplicationFetchStates;
            var _closure2_slot27 = var100;
            var2 = var15[var3];
            var29 = var7.bind(var4)(var2);
            var28 = var29.useStateFromStoresArray;
            var2 = _closure1_slot9;
            var27 = new Array(1);
            var27[0] = var2;
            var2 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getFetchingOrFailedFetchingIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            r109 = var28.bind(var29)(var27, var2);
            var _closure2_slot28 = r109;
            var2 = var15[var3];
            var29 = var7.bind(var4)(var2);
            var28 = var29.useStateFromStoresArray;
            var2 = _closure1_slot8;
            var27 = new Array(1);
            var27[0] = var2;
            var2 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getFetchingIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var99 = var28.bind(var29)(var27, var2);
            var _closure2_slot29 = var99;
            var2 = var15[var3];
            var32 = var7.bind(var4)(var2);
            var31 = var32.useStateFromStoresArray;
            var2 = _closure1_slot7;
            var29 = new Array(1);
            var29[0] = var2;
            var28 = new Array(1);
            var28[0] = var10;
            var27 = function() {
                var4 = _closure1_slot7;
                var3 = var4.getEmbeddedActivitiesForChannel;
                var2 = _closure2_slot7;
                var4 = var3.bind(var4)(var2);
                var3 = var4.map;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.launchId;
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.filter;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 60;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            r116 = var31.bind(var32)(var29, var27, var28);
            var _closure2_slot30 = r116;
            var27 = var15[var3];
            var31 = var7.bind(var4)(var27);
            var29 = var31.useStateFromStoresArray;
            var28 = new Array(2);
            var28[0] = var2;
            var27 = _closure1_slot48;
            var28[1] = var27;
            var27 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var6 = function _loop(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var5 = arg1;
                            var _closure4_slot0 = var5;
                            var4 = _closure1_slot48;
                            var3 = var4.findActivity;
                            var6 = var5.userIds;
                            var2 = var6.values;
                            var6 = var2.bind(var6)();
                            var2 = var6.next;
                            var2 = var2.bind(var6)();
                            var2 = var2.value;
                            var1 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.application_id;
                                var1 = _closure4_slot0;
                                var1 = var1.applicationId;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2, var1);
                            var4 = null;
                            var6 = var4 == var2;
                            var1 = undefined;
                            var3 = undefined;
                            if(var6) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                            var3 = var2.details;
case 38:
                            if(!(var4 != var3)) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                            var4 = _closure3_slot0;
                            var3 = var4.push;
                            var8 = var5.launchId;
                            var7 = var2.details;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var6 = var2.concat;
                            var5 = '';
                            var2 = ':';
                            var2 = var6.bind(var5)(var8, var2, var7);
                            var2 = var3.bind(var4)(var2);
case 40:
                            return var1;
                        }
                    };
                    var3 = _closure1_slot68;
                    var5 = _closure1_slot7;
                    var4 = var5.getEmbeddedActivitiesForChannel;
                    var2 = _closure2_slot7;
                    var2 = var4.bind(var5)(var2);
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if(var2) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var2 = var3.value;
                    var2 = var6.bind(var5)(var2);
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0005_ip = 43; continue _fun0005 }
case 42:
                    return var1;
                }
            };
            r114 = var29.bind(var31)(var28, var27);
            var _closure2_slot31 = r114;
            var27 = var15[var3];
            var31 = var7.bind(var4)(var27);
            var29 = var31.useStateFromStoresArray;
            var28 = new Array(1);
            var28[0] = var2;
            var27 = function() {
                var1 = global;
                var3 = var1.Set;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var7 = var4;
                var3 = new var7[var3](var6);
                var3 = var3 instanceof Object ? var3 : var4;
                var _closure3_slot0 = var3;
                var5 = _closure1_slot7;
                var4 = var5.getEmbeddedActivitiesByChannel;
                var5 = var4.bind(var5)();
                var4 = var5.forEach;
                var2 = function(arg1, arg2) {
                    var3 = arg1;
                    var2 = arg2;
                    var _closure4_slot0 = var2;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.userIds;
                        var2 = var3.forEach;
                        var1 = function(arg1) {
                            var3 = _closure3_slot0;
                            var2 = var3.add;
                            var7 = _closure4_slot0;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var6 = var1.concat;
                            var5 = '';
                            var4 = ':';
                            var1 = arg1;
                            var1 = var6.bind(var5)(var7, var4, var1);
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = var4.bind(var5)(var2);
                var2 = var1.Array;
                var1 = var2.from;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            r115 = var29.bind(var31)(var28, var27);
            var _closure2_slot32 = r115;
            var27 = var15[var3];
            var29 = var7.bind(var4)(var27);
            var28 = var29.useStateFromStoresArray;
            var27 = new Array(1);
            var27[0] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = new Array(0);
                    var3 = _closure1_slot68;
                    var4 = _closure1_slot7;
                    var2 = var4.getLaunchStates;
                    var2 = var2.bind(var4)();
                    var9 = undefined;
                    var8 = var3.bind(var9)(var2);
                    var3 = var8.bind(var9)();
                    var2 = var3.done;
                    var7 = 0;
                    var6 = null;
                    var5 = 2;
                    var4 = 1;
                    if(var2) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                    var11 = var3.value;
                    var2 = _closure1_slot4;
                    var2 = var2.bind(var9)(var11, var5);
                    var11 = var2[var7];
                    var2 = var2[var4];
                    var11 = var2.isLaunching;
                    if(!var11) { _fun0007_ip = 11; continue _fun0007 }
case 9:
                    var12 = var2.componentId;
                    var11 = var6 != var12;
case 11:
                    if(!var11) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                    var12 = var2.componentId;
                    var12 = var12.length;
                    var11 = var12 > var7;
case 46:
                    if(!var11) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                    var11 = var1.push;
                    var2 = var2.componentId;
                    var2 = var11.bind(var1)(var2);
case 48:
                    var11 = var8.bind(var9)();
                    var2 = var11.done;
                    var3 = var11;
                    if(!var2) { _fun0007_ip = 45; continue _fun0007 }
case 44:
                    return var1;
                }
            };
            r113 = var28.bind(var29)(var27, var2);
            var _closure2_slot33 = r113;
            var2 = var15[var3];
            var29 = var7.bind(var4)(var2);
            var28 = var29.useStateFromStores;
            var2 = _closure1_slot24;
            var27 = new Array(1);
            var27[0] = var2;
            var2 = function() {
                var2 = _closure1_slot24;
                var1 = var2.getMediaPostEmbeds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var98 = var28.bind(var29)(var27, var2);
            var _closure2_slot34 = var98;
            var2 = var15[var3];
            var31 = var7.bind(var4)(var2);
            var29 = var31.useStateFromStores;
            var2 = _closure1_slot21;
            var28 = new Array(1);
            var28[0] = var2;
            var27 = function() {
                var2 = _closure1_slot21;
                var1 = var2.getGuildTemplates;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var96 = var29.bind(var31)(var28, var27, var2);
            var _closure2_slot35 = var96;
            var2 = var15[var3];
            var31 = var7.bind(var4)(var2);
            var29 = var31.useStateFromStores;
            var2 = _closure1_slot10;
            var28 = new Array(1);
            var28[0] = var2;
            var27 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getBuildOverrides;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var95 = var29.bind(var31)(var28, var27, var2);
            var _closure2_slot36 = var95;
            var2 = 61;
            var2 = var15[var2];
            var27 = var7.bind(var4)(var2);
            var2 = var27.useCodedLinksExperimentEmbeds;
            var94 = var2.bind(var27)();
            var _closure2_slot37 = var94;
            var2 = 62;
            var2 = var15[var2];
            var28 = var7.bind(var4)(var2);
            var27 = var28.useQuests;
            var2 = {'fetchPolicy': 'cache-or-network', 'callerSource': 'messages_native_fn'};
            var2 = var27.bind(var28)(var2);
            var93 = var2.quests;
            var _closure2_slot38 = var93;
            var92 = var2.isFetchingCurrentQuests;
            var _closure2_slot39 = var92;
            var27 = var9.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot57;
                var1 = var1.PREMIUM_REFERRAL;
                var1 = var2 === var1;
                return var1;
            };
            var28 = var27.bind(var9)(var2);
            var27 = var28.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.referralTrialOfferId;
                return var1;
            };
            var28 = var27.bind(var28)(var2);
            var27 = var28.filter;
            var2 = 60;
            var2 = var15[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.isNotNullish;
            var2 = var27.bind(var28)(var2);
            var _closure2_slot40 = var2;
            var2 = var15[var3];
            var29 = var7.bind(var4)(var2);
            var28 = var29.useStateFromStoresArray;
            var2 = _closure1_slot28;
            var27 = new Array(1);
            var27[0] = var2;
            var2 = function() {
                var3 = _closure2_slot40;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var3 = _closure1_slot28;
                        var2 = var3.getRelevantUserTrialOffer;
                        var1 = arg1;
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        var3 = var1 == var2;
                        var1 = undefined;
                        if(var3) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                        var1 = var2.id;
case 50:
                        return var1;
                    }
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 60;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            r108 = var28.bind(var29)(var27, var2);
            var _closure2_slot41 = r108;
            var2 = 63;
            var2 = var15[var2];
            var28 = var7.bind(var4)(var2);
            var27 = var28.useTrialOffer;
            var2 = _closure1_slot62;
            var88 = var27.bind(var28)(var2);
            var _closure2_slot42 = var88;
            var2 = var15[var3];
            var29 = var7.bind(var4)(var2);
            var28 = var29.useStateFromStores;
            var2 = _closure1_slot53;
            var27 = new Array(1);
            var27[0] = var2;
            var2 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 64;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.isPremiumExactly;
                var5 = _closure1_slot53;
                var2 = var5.getCurrentUser;
                var2 = var2.bind(var5)();
                var1 = _closure1_slot63;
                var1 = var1.TIER_2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var87 = var28.bind(var29)(var27, var2);
            var _closure2_slot43 = var87;
            var2 = var15[var3];
            var31 = var7.bind(var4)(var2);
            var29 = var31.useStateFromStores;
            var2 = _closure1_slot39;
            var28 = new Array(1);
            var28[0] = var2;
            var27 = new Array(1);
            var27[0] = var10;
            var2 = function() {
                var3 = _closure1_slot39;
                var2 = var3.getEditingMessageId;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var83 = var29.bind(var31)(var28, var2, var27);
            var _closure2_slot44 = var83;
            var2 = var15[var3];
            var31 = var7.bind(var4)(var2);
            var29 = var31.useStateFromStores;
            var2 = _closure1_slot30;
            var28 = new Array(1);
            var28[0] = var2;
            var27 = new Array(1);
            var27[0] = var10;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure1_slot30;
                    var2 = var3.getPendingReply;
                    var1 = _closure2_slot7;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0009_ip = 2; continue _fun0009 }
case 52:
                    var2 = var2.message;
                    var1 = var2.id;
case 2:
                    return var1;
                }
            };
            var71 = var29.bind(var31)(var28, var2, var27);
            var _closure2_slot45 = var71;
            var2 = var15[var3];
            var31 = var7.bind(var4)(var2);
            var29 = var31.useStateFromStores;
            var2 = _closure1_slot50;
            var28 = new Array(1);
            var28[0] = var2;
            var27 = new Array(1);
            var27[0] = var10;
            var2 = function() {
                var3 = _closure1_slot50;
                var2 = var3.getOldestUnreadMessageId;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var37 = var29.bind(var31)(var28, var2, var27);
            var _closure2_slot46 = var37;
            var2 = var15[var3];
            var31 = var7.bind(var4)(var2);
            var29 = var31.useStateFromStores;
            var2 = _closure1_slot44;
            var28 = new Array(1);
            var28[0] = var2;
            var27 = new Array(1);
            var27[0] = var12;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0010_ip = 53; continue _fun0010 }
case 54:
                    var4 = _closure1_slot44;
                    var3 = var4.canChatInGuild;
                    var2 = _closure2_slot8;
                    var1 = var3.bind(var4)(var2);
case 53:
                    return var1;
                }
            };
            var40 = var29.bind(var31)(var28, var2, var27);
            var _closure2_slot47 = var40;
            var2 = var15[var3];
            var31 = var7.bind(var4)(var2);
            var29 = var31.useStateFromStores;
            var2 = _closure1_slot47;
            var28 = new Array(1);
            var28[0] = var2;
            var27 = new Array(1);
            var27[0] = var8;
            var2 = function() {
                var4 = _closure1_slot47;
                var3 = var4.can;
                var1 = _closure1_slot59;
                var2 = var1.SEND_MESSAGES;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var82 = var29.bind(var31)(var28, var2, var27);
            var _closure2_slot48 = var82;
            var2 = 65;
            var2 = var15[var2];
            var2 = var24.bind(var4)(var2);
            var73 = var2.bind(var4)(var10);
            var _closure2_slot49 = var73;
            var2 = var15[var3];
            var29 = var7.bind(var4)(var2);
            var28 = var29.useStateFromStores;
            var2 = _closure1_slot54;
            var27 = new Array(1);
            var27[0] = var2;
            var24 = new Array(1);
            var24[0] = var74;
            var2 = function() {
                var4 = _closure1_slot54;
                var3 = var4.getUserVoiceChannelId;
                var2 = _closure1_slot60;
                var1 = _closure2_slot11;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var80 = var28.bind(var29)(var27, var2, var24);
            var _closure2_slot50 = var80;
            var2 = var15[var3];
            var31 = var7.bind(var4)(var2);
            var29 = var31.useStateFromStores;
            var2 = _closure1_slot31;
            var28 = new Array(1);
            var28[0] = var2;
            var27 = new Array(1);
            var27[0] = var8;
            var24 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure1_slot56;
                    var4 = var1.THREADS;
                    var3 = var4.has;
                    var1 = _closure2_slot1;
                    var1 = var1.type;
                    var3 = var3.bind(var4)(var1);
                    var4 = null;
                    var1 = null;
                    if(!var3) { _fun0011_ip = 55; continue _fun0011 }
case 56:
                    var3 = _closure2_slot1;
                    var3 = var3.parent_id;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0011_ip = 55; continue _fun0011 }
case 7:
                    var4 = _closure1_slot31;
                    var3 = var4.getMessageByReference;
                    var2 = {};
                    var6 = _closure2_slot1;
                    var6 = var6.parent_id;
                    var2['channel_id'] = var6;
                    var6 = _closure2_slot1;
                    var6 = var6.id;
                    var2['message_id'] = var6;
                    var5 = _closure2_slot1;
                    var5 = var5.guild_id;
                    var2['guild_id'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var1 = var2.message;
case 55:
                    return var1;
                }
            };
            r106 = var29.bind(var31)(var28, var24, var27);
            var _closure2_slot51 = r106;
            var24 = var15[var3];
            var31 = var7.bind(var4)(var24);
            var29 = var31.useStateFromStoresObject;
            var24 = _closure1_slot40;
            var28 = new Array(1);
            var28[0] = var24;
            var27 = function() {
                var1 = {};
                var3 = _closure1_slot40;
                var2 = var3.getResolvingCodes;
                var2 = var2.bind(var3)();
                var1['resolvingGiftCodes'] = var2;
                var2 = var3.getResolvedCodes;
                var2 = var2.bind(var3)();
                var1['resolvedGiftCodes'] = var2;
                var2 = var3.getAcceptingCodes;
                var2 = var2.bind(var3)();
                var1['acceptingGiftCodes'] = var2;
                return var1;
            };
            var24 = new Array(0);
            var24 = var29.bind(var31)(var28, var27, var24);
            var91 = var24.resolvingGiftCodes;
            var _closure2_slot52 = var91;
            var90 = var24.resolvedGiftCodes;
            var _closure2_slot53 = var90;
            var89 = var24.acceptingGiftCodes;
            var _closure2_slot54 = var89;
            var24 = var15[var3];
            var31 = var7.bind(var4)(var24);
            var29 = var31.useStateFromStores;
            var24 = _closure1_slot12;
            var28 = new Array(1);
            var28[0] = var24;
            var27 = new Array(1);
            var27[0] = var10;
            var24 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getParticipants;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                var1 = var1.length;
                return var1;
            };
            var72 = var29.bind(var31)(var28, var24, var27);
            var _closure2_slot55 = var72;
            var24 = var15[var3];
            var31 = var7.bind(var4)(var24);
            var29 = var31.useStateFromStores;
            var24 = _closure1_slot52;
            var28 = new Array(1);
            var28[0] = var24;
            var27 = new Array(1);
            var27[0] = var10;
            var24 = function() {
                var3 = _closure1_slot52;
                var2 = var3.getFiles;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var68 = var29.bind(var31)(var28, var24, var27);
            var _closure2_slot56 = var68;
            var24 = var15[var3];
            var29 = var7.bind(var4)(var24);
            var28 = var29.useStateFromStores;
            var27 = new Array(1);
            var27[0] = var2;
            var24 = new Array(1);
            var24[0] = var10;
            var2 = function() {
                var3 = _closure1_slot31;
                var2 = var3.getReplyIdsForChannel;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            r127 = var28.bind(var29)(var27, var2, var24);
            var _closure2_slot57 = r127;
            var2 = var15[var3];
            var29 = var7.bind(var4)(var2);
            var28 = var29.useStateFromStoresObject;
            var2 = _closure1_slot6;
            var27 = new Array(1);
            var27[0] = var2;
            var24 = function() {
                var1 = {};
                var2 = _closure1_slot6;
                var3 = var2.useReducedMotion;
                var1['useReducedMotion'] = var3;
                var3 = var2.roleStyle;
                var1['roleStyle'] = var3;
                var3 = var2.saturation;
                var1['saturation'] = var3;
                var2 = var2.displayNameStylesEnabled;
                var1['displayNameStylesEnabled'] = var2;
                return var1;
            };
            var2 = new Array(0);
            var2 = var28.bind(var29)(var27, var24, var2);
            var32 = var2.useReducedMotion;
            var _closure2_slot58 = var32;
            var24 = var2.roleStyle;
            var _closure2_slot59 = var24;
            var50 = var2.saturation;
            var _closure2_slot60 = var50;
            var44 = var2.displayNameStylesEnabled;
            var _closure2_slot61 = var44;
            var2 = var15[var3];
            var31 = var7.bind(var4)(var2);
            var29 = var31.useStateFromStores;
            var2 = _closure1_slot34;
            var28 = new Array(1);
            var28[0] = var2;
            var27 = new Array(1);
            var27[0] = var10;
            var2 = function() {
                var3 = _closure1_slot34;
                var2 = var3.getChannelThreadsVersion;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            r129 = var29.bind(var31)(var28, var2, var27);
            var _closure2_slot62 = r129;
            var2 = var15[var3];
            var29 = var7.bind(var4)(var2);
            var28 = var29.useStateFromStoresObject;
            var2 = _closure1_slot23;
            var27 = new Array(1);
            var27[0] = var2;
            var2 = function() {
                var2 = _closure1_slot23;
                var1 = var2.getMessageInteractionStates;
                var1 = var1.bind(var2)();
                return var1;
            };
            r122 = var28.bind(var29)(var27, var2);
            var _closure2_slot63 = r122;
            var2 = var15[var3];
            var33 = var7.bind(var4)(var2);
            var31 = var33.useStateFromStores;
            var2 = _closure1_slot22;
            var29 = new Array(1);
            var29[0] = var2;
            var2 = 66;
            var2 = var15[var2];
            var2 = var7.bind(var4)(var2);
            r137 = var2.isVersionEqual;
            r139 = function() {
                var3 = _closure1_slot22;
                var1 = var3.getInteractionComponentStates;
                var2 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var2;
                var2 = var3.getInteractionComponentStateVersion;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            r138 = new Array(0);
            r141 = var33;
            r140 = var29;
            var2 = r141[var31](r140, r139, r138, r137, r136);
            var2 = var17.bind(var4)(var2, var36);
            r121 = var2[var19];
            var _closure2_slot64 = r121;
            r120 = var2[var13];
            var _closure2_slot65 = r120;
            var2 = var15[var3];
            var28 = var7.bind(var4)(var2);
            var27 = var28.useStateFromStores;
            var2 = _closure1_slot15;
            var17 = new Array(1);
            var17[0] = var2;
            var2 = function() {
                var1 = _closure1_slot15;
                var1 = var1.hasLoadedExperiments;
                return var1;
            };
            r126 = var27.bind(var28)(var17, var2);
            var _closure2_slot66 = r126;
            var2 = 67;
            var2 = var15[var2];
            var27 = var7.bind(var4)(var2);
            var17 = var27.useIsSpamMessageRequest;
            var2 = var8.id;
            var78 = var17.bind(var27)(var2);
            var _closure2_slot67 = var78;
            var2 = 68;
            var2 = var15[var2];
            var15 = var7.bind(var4)(var2);
            var7 = var15.useIsMessageRequest;
            var2 = var8.id;
            var77 = var7.bind(var15)(var2);
            var _closure2_slot68 = var77;
            r130 = var5 != var9;
            if(!r130) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var2 = var9.ready;
            if(var2) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var2 = var9.cached;
case 59:
            r130 = var2;
case 57:
            var _closure2_slot69 = r130;
            var41 = var5 != var9;
            if(!var41) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var41 = var9.cached;
case 61:
            var _closure2_slot70 = var41;
            r133 = var5 != var9;
            if(!r133) { _fun0004_ip = 63; continue _fun0004 }
case 64:
            r133 = var9.ready;
case 63:
            if(!r133) { _fun0004_ip = 65; continue _fun0004 }
case 66:
            var2 = var9.loadingMore;
            r133 = !var2;
case 65:
            var _closure2_slot71 = r133;
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = var15[var3];
            var28 = var7.bind(var4)(var2);
            var27 = var28.useStateFromStores;
            var2 = _closure1_slot20;
            var17 = new Array(1);
            var17[0] = var2;
            var2 = function() {
                var2 = _closure1_slot20;
                var1 = var2.getRsvpVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            r128 = var27.bind(var28)(var17, var2);
            var _closure2_slot72 = r128;
            var2 = var15[var3];
            var28 = var7.bind(var4)(var2);
            var27 = var28.useStateFromStores;
            var2 = _closure1_slot19;
            var17 = new Array(1);
            var17[0] = var2;
            var2 = function() {
                var2 = _closure1_slot19;
                var1 = var2.getMessagesVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            r123 = var27.bind(var28)(var17, var2);
            var _closure2_slot73 = r123;
            var2 = var15[var3];
            var29 = var7.bind(var4)(var2);
            var28 = var29.useStateFromStores;
            var2 = _closure1_slot41;
            var27 = new Array(1);
            var27[0] = var2;
            var17 = function() {
                var2 = _closure1_slot41;
                var1 = var2.getCommunicationDisabledVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            r125 = var28.bind(var29)(var27, var17);
            var _closure2_slot74 = r125;
            var17 = var15[var3];
            var29 = var7.bind(var4)(var17);
            var28 = var29.useStateFromStoresObject;
            var27 = new Array(1);
            var27[0] = var2;
            var17 = new Array(2);
            var17[0] = var12;
            var17[1] = var9;
            var2 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = _closure2_slot8;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0012_ip = 67; continue _fun0012 }
case 68:
                    var1 = _closure2_slot6;
                    if(!(var4 != var1)) { _fun0012_ip = 67; continue _fun0012 }
case 31:
                    var1 = {};
                    var _closure3_slot0 = var1;
                    var4 = _closure2_slot6;
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var2 = arg1;
                            var5 = var2.author;
                            var3 = null;
                            var6 = var3 == var5;
                            var1 = undefined;
                            var4 = undefined;
                            if(var6) { _fun0013_ip = 69; continue _fun0013 }
case 70:
                            var4 = var5.id;
case 69:
                            if(!(var3 != var4)) { _fun0013_ip = 71; continue _fun0013 }
case 72:
                            var7 = _closure1_slot41;
                            var6 = var7.getMember;
                            var5 = _closure2_slot8;
                            var4 = var2.author;
                            var4 = var4.id;
                            var4 = var6.bind(var7)(var5, var4);
                            if(!(var3 != var4)) { _fun0013_ip = 71; continue _fun0013 }
case 73:
                            var3 = _closure3_slot0;
                            var2 = var2.author;
                            var2 = var2.id;
                            var3[var2] = var4;
case 71:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 67:
                    var1 = {};
                    return var1;
                }
            };
            r124 = var28.bind(var29)(var27, var2, var17);
            var _closure2_slot75 = r124;
            var2 = var15[var3];
            var28 = var7.bind(var4)(var2);
            var27 = var28.useStateFromStores;
            var2 = _closure1_slot47;
            var17 = new Array(1);
            var17[0] = var2;
            var2 = function() {
                var4 = _closure1_slot47;
                var3 = var4.can;
                var1 = _closure1_slot59;
                var2 = var1.MODERATE_MEMBERS;
                var1 = _closure2_slot9;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var75 = var27.bind(var28)(var17, var2);
            var _closure2_slot76 = var75;
            var2 = 69;
            var2 = var15[var2];
            var15 = var7.bind(var4)(var2);
            var7 = var15.useCurrentUserCommunicationDisabled;
            var17 = var5 == var30;
            var2 = undefined;
            if(var17) { _fun0004_ip = 74; continue _fun0004 }
case 75:
            var2 = var30.id;
case 74:
            var2 = var7.bind(var15)(var2);
            var33 = _closure1_slot4;
            var2 = var33.bind(var4)(var2, var36);
            var76 = var2[var13];
            var _closure2_slot77 = var76;
            var35 = _closure1_slot0;
            r132 = _closure1_slot2;
            var2 = r132[var3];
            var17 = var35.bind(var4)(var2);
            var15 = var17.useStateFromStores;
            var2 = _closure1_slot35;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var1 = _closure1_slot35;
                var1 = var1.locale;
                return var1;
            };
            var85 = var15.bind(var17)(var7, var2);
            var _closure2_slot78 = var85;
            var70 = _closure1_slot1;
            var2 = 70;
            var2 = r132[var2];
            var17 = var70.bind(var4)(var2);
            var15 = var17.useExperiment;
            var7 = {};
            var2 = '41de6d_2';
            var7['location'] = var2;
            var2 = {};
            var34 = false;
            var2['autoTrackExposure'] = var34;
            var2 = var15.bind(var17)(var7, var2);
            var17 = var2.paymentsBlocked;
            var _closure2_slot79 = var17;
            var2 = r132[var3];
            var27 = var35.bind(var4)(var2);
            var15 = var27.useStateFromStores;
            var2 = _closure1_slot33;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = var3.isForumPost;
                    var1 = var1.bind(var3)();
                    var3 = !var1;
                    var1 = !var3;
                    if(var3) { _fun0014_ip = 76; continue _fun0014 }
case 77:
                    var4 = _closure1_slot33;
                    var3 = var4.hasJoined;
                    var2 = _closure2_slot7;
                    var1 = var3.bind(var4)(var2);
case 76:
                    return var1;
                }
            };
            r105 = var15.bind(var27)(var7, var2);
            var _closure2_slot80 = r105;
            var2 = r132[var3];
            var27 = var35.bind(var4)(var2);
            var15 = var27.useStateFromStores;
            var2 = _closure1_slot25;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var3 = _closure1_slot25;
                var2 = var3.shouldDisplayPrompt;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            r104 = var15.bind(var27)(var7, var2);
            var _closure2_slot81 = r104;
            var2 = r132[var3];
            var27 = var35.bind(var4)(var2);
            var15 = var27.useStateFromStores;
            var2 = _closure1_slot29;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var2 = _closure1_slot29;
                var1 = var2.isEligible;
                var1 = var1.bind(var2)();
                return var1;
            };
            var86 = var15.bind(var27)(var7, var2);
            var _closure2_slot82 = var86;
            var2 = r132[var3];
            var27 = var35.bind(var4)(var2);
            var15 = var27.useStateFromStores;
            var2 = _closure1_slot11;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getLazyCacheStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            r107 = var15.bind(var27)(var7, var2);
            var _closure2_slot83 = r107;
            var2 = 71;
            var2 = r132[var2];
            var7 = var35.bind(var4)(var2);
            var2 = var7.useMessageJumpAndroidKeyboardHeight;
            var81 = var2.bind(var7)();
            var _closure2_slot84 = var81;
            var2 = 72;
            var2 = r132[var2];
            var2 = var70.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var _closure2_slot85 = var2;
            var7 = 73;
            var7 = r132[var7];
            var15 = var35.bind(var4)(var7);
            var7 = var15.useChannelSummariesExperiment;
            var7 = var7.bind(var15)(var8);
            var _closure2_slot86 = var7;
            var15 = r132[var3];
            var29 = var35.bind(var4)(var15);
            var28 = var29.useStateFromStores;
            var15 = _closure1_slot32;
            var27 = new Array(1);
            var27[0] = var15;
            var15 = new Array(2);
            var15[0] = var7;
            var7 = var8.id;
            var15[1] = var7;
            var7 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure2_slot86;
                    var1 = null;
                    if(!var3) { _fun0015_ip = 78; continue _fun0015 }
case 79:
                    var4 = _closure1_slot32;
                    var3 = var4.selectedSummary;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 78:
                    return var1;
                }
            };
            var54 = var28.bind(var29)(var27, var7, var15);
            var _closure2_slot87 = var54;
            var7 = r132[var3];
            var29 = var35.bind(var4)(var7);
            var28 = var29.useStateFromStores;
            var7 = _closure1_slot53;
            var27 = new Array(1);
            var27[0] = var7;
            var15 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure1_slot53;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0016_ip = 33; continue _fun0016 }
case 69:
                    var1 = var2.displayNameStyles;
case 33:
                    return var1;
                }
            };
            var45 = var28.bind(var29)(var27, var15);
            var _closure2_slot88 = var45;
            r131 = _closure1_slot5;
            var28 = r131.useEffect;
            var15 = var8.id;
            var27 = new Array(5);
            var27[0] = var15;
            var15 = var9.hasMoreAfter;
            var27[1] = var15;
            var15 = var9.hasMoreBefore;
            var27[2] = var15;
            var15 = var9.length;
            var27[3] = var15;
            var15 = var9.ready;
            var27[4] = var15;
            var15 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var2 = var2.ready;
                    var2 = !var2;
                    if(var2) { _fun0017_ip = 80; continue _fun0017 }
case 81:
                    var3 = _closure2_slot6;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var3 !== var4;
case 80:
                    if(var2) { _fun0017_ip = 82; continue _fun0017 }
case 50:
                    var3 = _closure2_slot6;
                    var2 = var3.hasMoreBefore;
case 82:
                    if(var2) { _fun0017_ip = 83; continue _fun0017 }
case 84:
                    var3 = _closure2_slot6;
                    var2 = var3.hasMoreAfter;
case 83:
                    if(var2) { _fun0017_ip = 85; continue _fun0017 }
case 86:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 74;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var5 = var6.updateChannelDimensions;
                    var1 = _closure2_slot1;
                    var11 = var1.id;
                    var1 = global;
                    var2 = var1.Date;
                    var1 = var2.now;
                    var10 = var1.bind(var2)();
                    var2 = 1;
                    var7 = 0;
                    var12 = var6;
                    var9 = var2;
                    var8 = var2;
                    var1 = var12[var5](var11, var10, var9, var8, var7, var6);
case 85:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var28.bind(r131)(var15, var27);
            var15 = 75;
            var27 = r132[var15];
            var29 = var35.bind(var4)(var27);
            var28 = var29.useShouldTrackAnnouncementMessageViews;
            var27 = {};
            var27['guild'] = var30;
            var27['channel'] = var8;
            var27['messages'] = var9;
            var27['isMessagesReady'] = r130;
            r135 = 'Messages';
            var27['location'] = r135;
            var29 = var28.bind(var29)(var27);
            var _closure2_slot89 = var29;
            var15 = r132[var15];
            var28 = var35.bind(var4)(var15);
            var27 = var28.useShouldTrackRichPresenceInviteEmbedViews;
            var15 = {};
            var15['messages'] = var9;
            var15['isMessagesReady'] = r130;
            var28 = var27.bind(var28)(var15);
            var _closure2_slot90 = var28;
            var15 = 76;
            var15 = r132[var15];
            var27 = var35.bind(var4)(var15);
            var15 = var27.useShouldDisplaySpoilerObscurity;
            var52 = var15.bind(var27)(var8);
            var _closure2_slot91 = var52;
            var15 = 77;
            var15 = r132[var15];
            var27 = var35.bind(var4)(var15);
            var15 = var27.useIsAgeVerified;
            var58 = var15.bind(var27)();
            var _closure2_slot92 = var58;
            var30 = r131.useEffect;
            var27 = new Array(2);
            var27[0] = var10;
            var27[1] = var12;
            var15 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 78;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.handleChannelSelect;
                var1 = var1.bind(var2)();
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 78;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleChannelSelect;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                return var1;
            };
            var15 = var30.bind(r131)(var15, var27);
            var15 = 79;
            var15 = r132[var15];
            var30 = var35.bind(var4)(var15);
            var27 = var30.useShouldDisableInteractiveComponents;
            var15 = var8.id;
            r119 = var27.bind(var30)(var15);
            var _closure2_slot93 = r119;
            var27 = _closure1_slot26;
            var15 = var8.id;
            r118 = var27.bind(var4)(var15);
            var _closure2_slot94 = r118;
            var27 = new Array(0);
            var _closure2_slot95 = var27;
            var30 = var9.forEach;
            var15 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.messageReference;
                    var2 = null;
                    var5 = var2 == var3;
                    var1 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0018_ip = 34; continue _fun0018 }
case 70:
                    var4 = var3.message_id;
case 34:
                    if(!(var2 != var4)) { _fun0018_ip = 5; continue _fun0018 }
case 51:
                    var3 = _closure2_slot95;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var4);
case 5:
                    return var1;
                }
            };
            var15 = var30.bind(var9)(var15);
            var15 = _closure1_slot27;
            r117 = var15.bind(var4)(var27);
            var _closure2_slot96 = r117;
            var15 = r132[var3];
            var38 = var35.bind(var4)(var15);
            var31 = var38.useStateFromStores;
            var15 = _closure1_slot16;
            var30 = new Array(1);
            var30[0] = var15;
            var27 = new Array(1);
            var27[0] = var10;
            var15 = function() {
                var3 = _closure1_slot16;
                var2 = var3.getChannelFpInfo;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var97 = var31.bind(var38)(var30, var15, var27);
            var _closure2_slot97 = var97;
            var15 = 80;
            var15 = r132[var15];
            var15 = var70.bind(var4)(var15);
            var65 = var15.bind(var4)();
            var _closure2_slot98 = var65;
            var15 = 81;
            var15 = r132[var15];
            var15 = var70.bind(var4)(var15);
            var15 = var15.bind(var4)(var9);
            var49 = var15.unloadedContentEntryMessageIds;
            var _closure2_slot99 = var49;
            var39 = var15.unloadableContentEntryMessageIds;
            var _closure2_slot100 = var39;
            var15 = r132[var3];
            var30 = var35.bind(var4)(var15);
            var27 = var30.useStateFromStores;
            var15 = new Array(1);
            var15[0] = var7;
            var7 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var2 = _closure1_slot53;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0019_ip = 50; continue _fun0019 }
case 69:
                    var3 = var4.isStaff;
                    var2 = var3.bind(var4)();
case 50:
                    var1 = var1 != var2;
                    if(!var1) { _fun0019_ip = 82; continue _fun0019 }
case 87:
                    var1 = var2;
case 82:
                    return var1;
                }
            };
            var57 = var27.bind(var30)(var15, var7);
            var _closure2_slot101 = var57;
            var7 = r132[var3];
            var30 = var35.bind(var4)(var7);
            var27 = var30.useStateFromStores;
            var7 = _closure1_slot18;
            var15 = new Array(1);
            var15[0] = var7;
            var7 = function() {
                var2 = _closure1_slot18;
                var1 = var2.getVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var84 = var27.bind(var30)(var15, var7);
            var _closure2_slot102 = var84;
            var7 = 82;
            var7 = r132[var7];
            var27 = var35.bind(var4)(var7);
            var15 = var27.useColorStore;
            var7 = function(arg1) {
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = arg1;
                var1 = var1.palette;
                var1 = var2.bind(var3)(var1);
                var1 = var1.length;
                return var1;
            };
            var62 = var15.bind(var27)(var7);
            var _closure2_slot103 = var62;
            var7 = r132[var3];
            var30 = var35.bind(var4)(var7);
            var27 = var30.useStateFromStores;
            var7 = _closure1_slot14;
            var15 = new Array(1);
            var15[0] = var7;
            var7 = function() {
                var3 = _closure1_slot14;
                var2 = var3.getGuildEmoji;
                var1 = _closure2_slot8;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var47 = var27.bind(var30)(var15, var7);
            var _closure2_slot104 = var47;
            var7 = r132[var3];
            var31 = var35.bind(var4)(var7);
            var30 = var31.useStateFromStores;
            var7 = _closure1_slot49;
            var27 = new Array(1);
            var27[0] = var7;
            var15 = function() {
                var2 = _closure1_slot49;
                var1 = var2.getChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = new Array(0);
            r111 = var30.bind(var31)(var27, var15, var7);
            var _closure2_slot105 = r111;
            var7 = r132[var3];
            var30 = var35.bind(var4)(var7);
            var27 = var30.useStateFromStoresArray;
            var7 = _closure1_slot51;
            var15 = new Array(1);
            var15[0] = var7;
            var7 = function() {
                var5 = _closure1_slot51;
                var2 = var5.getRemoteActivities;
                var7 = var2.bind(var5)();
                var3 = new Array(0);
                var6 = 0;
                var8 = var3;
                var6 = arraySpread(var8, var7, var6);
                var2 = var5.getHiddenActivities;
                var7 = var2.bind(var5)();
                var8 = var3;
                var2 = arraySpread(var8, var7, var6);
                var2 = var3.filter;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 60;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            r110 = var27.bind(var30)(var15, var7);
            var _closure2_slot106 = r110;
            var7 = r132[var3];
            var31 = var35.bind(var4)(var7);
            var30 = var31.useStateFromStoresArray;
            var7 = _closure1_slot38;
            var27 = new Array(1);
            var27[0] = var7;
            var15 = function() {
                var3 = _closure1_slot38;
                var1 = var3.getNewestTokens;
                var2 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var2;
                var2 = var3.getApplicationFetchStateVersion;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            var7 = new Array(0);
            var43 = var30.bind(var31)(var27, var15, var7);
            var _closure2_slot107 = var43;
            var3 = r132[var3];
            var27 = var35.bind(var4)(var3);
            var15 = var27.useStateFromStoresObject;
            var3 = _closure1_slot55;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var4 = _closure2_slot106;
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var1 = arg1;
                        var2 = arg2;
                        var3 = var2.application_id;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0020_ip = 88; continue _fun0020 }
case 89:
                        var7 = _closure1_slot55;
                        var6 = var7.getState;
                        var5 = var2.application_id;
                        var3 = _closure1_slot61;
                        var3 = var3.JOIN;
                        var3 = var6.bind(var7)(var5, var3);
                        if(!(var4 != var3)) { _fun0020_ip = 30; continue _fun0020 }
case 90:
                        var2 = var2.application_id;
                        var1[var2] = var3;
case 30:
                        return var1;
case 88:
                        return var1;
                    }
                };
                var1 = {};
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            r112 = var15.bind(var27)(var7, var3);
            var _closure2_slot108 = r112;
            var3 = r131.useRef;
            var27 = var3.bind(r131)(var5);
            var _closure2_slot109 = var27;
            var3 = r132[r134];
            var7 = var35.bind(var4)(var3);
            var3 = var7.useScrollState;
            var3 = var3.bind(var7)();
            var3 = var33.bind(var4)(var3, var36);
            var31 = var3[var19];
            var _closure2_slot110 = var31;
            var15 = var3[var13];
            var _closure2_slot111 = var15;
            var3 = r131.useState;
            var3 = var3.bind(r131)(var5);
            var3 = var33.bind(var4)(var3, var36);
            var30 = var3[var19];
            var _closure2_slot112 = var30;
            var3 = var3[var13];
            var _closure2_slot113 = var3;
            var38 = r131.useState;
            var7 = global;
            var7 = var7.Set;
            var42 = var7.prototype;
            var42 = Object.create(var42, {constructor: {value: var7}});
            r141 = var42;
            var7 = new r141[var7](r140);
            var7 = var7 instanceof Object ? var7 : var42;
            var7 = var38.bind(r131)(var7);
            var7 = var33.bind(var4)(var7, var36);
            var48 = var7[var19];
            var _closure2_slot114 = var48;
            var7 = var7[var13];
            var _closure2_slot115 = var7;
            var7 = r132[r134];
            var13 = var35.bind(var4)(var7);
            var7 = var13.useMessagesState;
            var7 = var7.bind(var13)();
            var53 = var7.shouldForceRender;
            var _closure2_slot116 = var53;
            var38 = var7.hasJumpedToOriginalPost;
            var _closure2_slot117 = var38;
            var33 = var7.setHasJumpedToOriginalPost;
            var _closure2_slot118 = var33;
            var67 = var7.setShouldForceRender;
            var _closure2_slot119 = var67;
            var19 = r131.useEffect;
            var13 = new Array(1);
            var13[0] = var10;
            var7 = function() {
                var3 = _closure2_slot115;
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var5 = var2;
                var1 = new var5[var1](var4);
                var2 = var1 instanceof Object ? var1 : var2;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7 = var19.bind(r131)(var7, var13);
            var19 = r131.useMemo;
            var13 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 83;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var5 = var2;
                var1 = new var5[var1](var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var7 = new Array(0);
            var7 = var19.bind(r131)(var13, var7);
            var _closure2_slot120 = var7;
            var36 = r131.useMemo;
            var19 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 84;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var5 = var2;
                var1 = new var5[var1](var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var13 = new Array(0);
            var19 = var36.bind(r131)(var19, var13);
            var _closure2_slot121 = var19;
            var13 = r131.useRef;
            var13 = var13.bind(r131)(var34);
            var _closure2_slot122 = var13;
            var36 = r131.useRef;
            var13 = 85;
            var13 = r132[var13];
            var13 = var70.bind(var4)(var13);
            var42 = var13.prototype;
            var42 = Object.create(var42, {constructor: {value: var13}});
            r141 = var42;
            r140 = r135;
            var13 = new r141[var13](r140, r139);
            var13 = var13 instanceof Object ? var13 : var42;
            var13 = var36.bind(r131)(var13);
            var _closure2_slot123 = var13;
            var13 = r131.useRef;
            var13 = var13.bind(r131)(var34);
            var _closure2_slot124 = var13;
            var36 = r131.useCallback;
            var34 = function(arg1) {
                var2 = arg1;
                var13 = var2.rows;
                var3 = var2.hasMoreMessagesAfter;
                var11 = var2.scrollData;
                var10 = var2.HACK_iOSForceAnimations;
                var9 = var2.forceReload;
                var8 = var2.isAnimated;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 86;
                var5 = var6[var1];
                var1 = undefined;
                var14 = var7.bind(var1)(var5);
                var12 = var14.isLoadingAtTop;
                var7 = var2.rows;
                var5 = _closure2_slot124;
                var5 = var5.current;
                var12 = var12.bind(var14)(var7, var5);
                var5 = _closure1_slot1;
                var4 = 87;
                var4 = var6[var4];
                var7 = var5.bind(var1)(var4);
                var6 = var7.updateRows;
                var4 = _closure2_slot109;
                var5 = var4.current;
                var4 = {};
                var4['rows'] = var13;
                var4['isLoadingAtTop'] = var12;
                var4['scrollData'] = var11;
                var4['HACK_iOSForceAnimations'] = var10;
                var4['forceReload'] = var9;
                var4['isAnimated'] = var8;
                var4 = var6.bind(var7)(var5, var4);
                var2 = _closure2_slot124;
                var2['current'] = var3;
                return var1;
            };
            var13 = new Array(0);
            var34 = var36.bind(r131)(var34, var13);
            var _closure2_slot125 = var34;
            var13 = r132[r134];
            var35 = var35.bind(var4)(var13);
            var13 = var35.useChatUpdatesQueue;
            var13 = var13.bind(var35)(var27, var34);
            var _closure2_slot126 = var13;
            var36 = r131.useCallback;
            var35 = new Array(4);
            var35[0] = var13;
            var35[1] = var34;
            var34 = var31.decelerating;
            var35[2] = var34;
            var34 = var31.dragging;
            var35[3] = var34;
            var34 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot126;
                    var2 = var2.isBlocking;
                    if(var2) { _fun0021_ip = 91; continue _fun0021 }
case 92:
                    var2 = var3.isLoadingAtTop;
                    if(!var2) { _fun0021_ip = 28; continue _fun0021 }
case 3:
                    var2 = _closure2_slot110;
                    var2 = var2.decelerating;
                    if(var2) { _fun0021_ip = 88; continue _fun0021 }
case 93:
                    var2 = _closure2_slot110;
                    var2 = var2.dragging;
                    if(var2) { _fun0021_ip = 88; continue _fun0021 }
case 28:
                    var4 = _closure2_slot125;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0021_ip = 47; continue _fun0021;
case 88:
                    var4 = _closure2_slot126;
                    var2 = var4.add;
                    var2 = var2.bind(var4)(var3);
                    _fun0021_ip = 47; continue _fun0021;
case 91:
                    var2 = _closure2_slot126;
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var3);
case 47:
                    var1 = undefined;
                    return var1;
                }
            };
            var36 = var36.bind(r131)(var34, var35);
            var _closure2_slot127 = var36;
            var35 = r131.useCallback;
            var34 = new Array(28);
            var34[0] = var8;
            var34[1] = var9;
            var34[2] = r130;
            var34[3] = var60;
            var34[4] = var59;
            var34[5] = var56;
            var34[6] = var55;
            var34[7] = var20;
            var34[8] = var30;
            var34[9] = var65;
            var34[10] = var64;
            var34[11] = var63;
            var34[12] = var75;
            var34[13] = var46;
            var34[14] = var52;
            var34[15] = r119;
            var34[16] = var68;
            var34[17] = var37;
            var34[18] = var71;
            var34[19] = var74;
            var34[20] = var40;
            var34[21] = var54;
            var34[22] = var24;
            var34[23] = var22;
            var34[24] = var39;
            var34[25] = var48;
            var34[26] = var7;
            var34[27] = var19;
            var19 = function(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.forceRender;
                    var _closure3_slot0 = var3;
                    var3 = var1.updateMessageIds;
                    var _closure3_slot1 = var3;
                    var1 = var1.ignoreEmbedDescriptionCache;
                    var _closure3_slot2 = var1;
                    var1 = _closure2_slot1;
                    var4 = null;
                    var5 = var4 != var1;
                    var1 = null;
                    if(!var5) { _fun0022_ip = 55; continue _fun0022 }
case 94:
                    var5 = _closure2_slot6;
                    var5 = var4 != var5;
                    var1 = null;
                    if(!var5) { _fun0022_ip = 55; continue _fun0022 }
case 95:
                    var3 = _closure2_slot69;
                    var1 = null;
                    if(!var3) { _fun0022_ip = 55; continue _fun0022 }
case 96:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 88;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var4 = var3.firstRowGenerator;
                    var3 = var4.measure;
                    var2 = function() {
                        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                            var4 = _closure2_slot120;
                            var3 = var4.setup;
                            var2 = _closure2_slot6;
                            var2 = var3.bind(var4)(var2);
                            var4 = _closure2_slot121;
                            var3 = var4.setOptions;
                            var2 = {};
                            var5 = _closure2_slot12;
                            var2['inlineAttachmentMedia'] = var5;
                            var5 = _closure2_slot13;
                            var2['inlineEmbedMedia'] = var5;
                            var5 = _closure2_slot14;
                            var2['renderEmbeds'] = var5;
                            var5 = _closure2_slot15;
                            var2['renderReactions'] = var5;
                            var5 = _closure2_slot16;
                            var2['animateEmoji'] = var5;
                            var5 = _closure2_slot21;
                            var2['timestampHourCycle'] = var5;
                            var5 = _closure2_slot112;
                            var2['animatingStickerMessageId'] = var5;
                            var5 = _closure2_slot98;
                            var2['constrainedWidth'] = var5;
                            var5 = _closure2_slot18;
                            var2['gifAutoPlay'] = var5;
                            var5 = _closure2_slot76;
                            var2['renderCommunicationDisabled'] = var5;
                            var5 = _closure3_slot2;
                            var2['ignoreEmbedDescriptionCache'] = var5;
                            var5 = _closure2_slot20;
                            var2['enableSwipeActions'] = var5;
                            var5 = _closure2_slot91;
                            var2['shouldObscureSpoiler'] = var5;
                            var5 = _closure2_slot93;
                            var2['shouldDisableInteractiveComponents'] = var5;
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure1_slot68;
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 89;
                            var2 = var5[var2];
                            var5 = undefined;
                            var4 = var4.bind(var5)(var2);
                            var2 = {};
                            var8 = _closure2_slot1;
                            var2['channel'] = var8;
                            var8 = _closure2_slot6;
                            var2['messages'] = var8;
                            var9 = _closure2_slot56;
                            var8 = null;
                            if(!(var8 == var9)) { _fun0023_ip = 97; continue _fun0023 }
case 98:
                            var8 = new Array(0);
                            _fun0023_ip = 37; continue _fun0023;
case 97:
                            var8 = _closure2_slot56;
case 37:
                            var2['uploads'] = var8;
                            var8 = _closure2_slot46;
                            var2['oldestUnreadMessageId'] = var8;
                            var8 = _closure2_slot45;
                            var2['replyingMessageId'] = var8;
                            var8 = _closure2_slot11;
                            var2['currentUserId'] = var8;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 86;
                            var7 = var9[var7];
                            var10 = var8.bind(var5)(var7);
                            var9 = var10.canAddNewReactions;
                            var8 = _closure2_slot1;
                            var7 = _closure2_slot47;
                            var7 = var9.bind(var10)(var8, var7);
                            var2['canAddNewReactions'] = var7;
                            var7 = _closure2_slot87;
                            var2['selectedSummary'] = var7;
                            var7 = _closure2_slot120;
                            var2['chatManager'] = var7;
                            var7 = _closure2_slot59;
                            var2['roleStyle'] = var7;
                            var7 = _closure3_slot0;
                            var2['forceRender'] = var7;
                            var6 = _closure3_slot1;
                            var2['updateMessageIds'] = var6;
                            var6 = _closure2_slot4;
                            var2['isResourceChannel'] = var6;
                            var6 = _closure2_slot100;
                            var2['unloadableContentEntryMessageIds'] = var6;
                            var6 = _closure2_slot114;
                            var2['dismissedMessageIds'] = var6;
                            var2 = var4.bind(var5)(var2);
                            var4 = var3.bind(var5)(var2);
                            var3 = var4.bind(var5)();
                            var2 = var3.done;
                            if(var2) { _fun0023_ip = 99; continue _fun0023 }
case 100:
                            var7 = var3.value;
                            var6 = _closure2_slot121;
                            var2 = var6.generate;
                            var7 = var2.bind(var6)(var7);
                            var6 = _closure2_slot120;
                            var2 = var6.createRow;
                            var2 = var2.bind(var6)(var7);
                            var6 = var4.bind(var5)();
                            var2 = var6.done;
                            var3 = var6;
                            if(!var2) { _fun0023_ip = 100; continue _fun0023 }
case 99:
                            var2 = _closure2_slot120;
                            var1 = var2.createChangeset;
                            var1 = var1.bind(var2)();
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2);
case 55:
                    return var1;
                }
            };
            var39 = var35.bind(r131)(var19, var34);
            var _closure2_slot128 = var39;
            var35 = r131.useCallback;
            var34 = new Array(1);
            var34[0] = var7;
            var19 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 86;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.findMessageIndexInRows;
                var2 = _closure2_slot120;
                var1 = var2.getPreviousRows;
                var2 = var1.bind(var2)();
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var19 = var35.bind(r131)(var19, var34);
            var _closure2_slot129 = var19;
            var35 = r131.useCallback;
            var34 = new Array(14);
            var34[0] = var39;
            var39 = var31.animated;
            var34[1] = var39;
            var34[2] = var13;
            var34[3] = var36;
            var34[4] = var19;
            var34[5] = var38;
            var34[6] = var8;
            var34[7] = var10;
            var34[8] = var9;
            var34[9] = var41;
            var34[10] = var54;
            var34[11] = var22;
            var34[12] = var7;
            var34[13] = var32;
            var22 = function() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var3 = arguments[0];
                    var1 = undefined;
                    if(!(var3 === var1)) { _fun0024_ip = 101; continue _fun0024 }
case 102:
                    var3 = {};
case 101:
                    var12 = var3.forceRender;
                    if(!(var12 === var1)) { _fun0024_ip = 103; continue _fun0024 }
case 31:
                    var12 = false;
case 103:
                    var8 = var3.forceReload;
                    var11 = var3.updateMessageIds;
                    if(!(var11 === var1)) { _fun0024_ip = 88; continue _fun0024 }
case 104:
                    var4 = global;
                    var4 = var4.Set;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {constructor: {value: var4}});
                    var31 = var5;
                    var4 = new var31[var4](var30);
                    var11 = var4 instanceof Object ? var4 : var5;
case 88:
                    var18 = var3.scrollToMessageId;
                    if(!(var18 === var1)) { _fun0024_ip = 105; continue _fun0024 }
case 106:
                    var18 = null;
case 105:
                    var17 = var3.jumpTargetId;
                    if(!(var17 === var1)) { _fun0024_ip = 107; continue _fun0024 }
case 108:
                    var17 = null;
case 107:
                    var21 = var3.jumpType;
                    if(!(var21 === var1)) { _fun0024_ip = 85; continue _fun0024 }
case 109:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 90;
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.JumpTypes;
                    var21 = var4.ANIMATED;
case 85:
                    var10 = var3.focusTargetId;
                    if(!(var10 === var1)) { _fun0024_ip = 110; continue _fun0024 }
case 44:
                    var10 = null;
case 110:
                    var6 = var3.ignoreEmbedDescriptionCache;
                    if(!(var6 === var1)) { _fun0024_ip = 111; continue _fun0024 }
case 112:
                    var6 = false;
case 111:
                    var9 = var3.messagesNewlyLoaded;
                    if(!(var9 === var1)) { _fun0024_ip = 113; continue _fun0024 }
case 114:
                    var9 = false;
case 113:
                    var15 = var3.shouldInitialScroll;
                    if(!(var15 === var1)) { _fun0024_ip = 115; continue _fun0024 }
case 116:
                    var15 = false;
case 115:
                    var20 = var3.minimizeScrolling;
                    if(!(var20 === var1)) { _fun0024_ip = 117; continue _fun0024 }
case 118:
                    var20 = false;
case 117:
                    var19 = var3.isRescrolling;
                    if(!(var19 === var1)) { _fun0024_ip = 119; continue _fun0024 }
case 120:
                    var19 = false;
case 119:
                    var13 = var3.overrideScrollJumpType;
                    var7 = var3.isAnimated;
                    if(!(var7 === var1)) { _fun0024_ip = 121; continue _fun0024 }
case 98:
                    var7 = true;
case 121:
                    var3 = _closure2_slot109;
                    var3 = var3.current;
                    var16 = null;
                    if(!(var16 != var3)) { _fun0024_ip = 122; continue _fun0024 }
case 18:
                    var5 = _closure2_slot128;
                    var3 = {};
                    var3['forceRender'] = var12;
                    var3['updateMessageIds'] = var11;
                    var3['ignoreEmbedDescriptionCache'] = var6;
                    var14 = var5.bind(var1)(var3);
                    var3 = _closure2_slot122;
                    var6 = var3.current;
                    var3 = _closure2_slot87;
                    var3 = var16 != var3;
                    var12 = undefined;
                    if(!var3) { _fun0024_ip = 123; continue _fun0024 }
case 124:
                    var3 = _closure2_slot87;
                    var3 = var3.startId;
                    var12 = undefined;
                    if(!(var3 === var18)) { _fun0024_ip = 123; continue _fun0024 }
case 125:
                    var5 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var3 = 87;
                    var3 = var11[var3];
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.ChatScrollPosition;
                    var12 = var3.MIDDLE;
case 123:
                    if(!(var16 != var14)) { _fun0024_ip = 126; continue _fun0024 }
case 127:
                    var5 = var14.length;
                    var3 = 0;
                    if(!(!(var5 > var3))) { _fun0024_ip = 128; continue _fun0024 }
case 126:
                    var3 = _closure2_slot122;
                    var3 = var3.current;
                    if(!var3) { _fun0024_ip = 129; continue _fun0024 }
case 130:
                    var5 = _closure2_slot126;
                    var3 = var5.hasUpdates;
                    var3 = var3.bind(var5)();
                    if(var3) { _fun0024_ip = 131; continue _fun0024 }
case 129:
                    var3 = _closure2_slot122;
                    var3 = var3.current;
                    if(var3) { _fun0024_ip = 132; continue _fun0024 }
case 133:
                    if(!(var16 != var14)) { _fun0024_ip = 132; continue _fun0024 }
case 134:
                    var5 = var14.length;
                    var3 = 0;
                    if(!(var3 === var5)) { _fun0024_ip = 132; continue _fun0024 }
case 135:
                    var5 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var3 = 87;
                    var3 = var11[var3];
                    var11 = var5.bind(var1)(var3);
                    var5 = var11.fadeIn;
                    var3 = _closure2_slot109;
                    var3 = var3.current;
                    var3 = var5.bind(var11)(var3);
                    _fun0024_ip = 136; continue _fun0024;
case 132:
                    if(!(var16 != var18)) { _fun0024_ip = 137; continue _fun0024 }
case 138:
                    var22 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var11 = 86;
                    var5 = var5[var11];
                    var26 = var22.bind(var1)(var5);
                    var25 = var26.shouldJumpToOriginalPost;
                    var30 = _closure2_slot1;
                    var29 = _closure2_slot7;
                    var28 = _closure2_slot6;
                    var27 = _closure2_slot117;
                    var31 = var26;
                    var5 = var31[var25](var30, var29, var28, var27, var26);
                    if(var5) { _fun0024_ip = 137; continue _fun0024 }
case 139:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var11];
                    var11 = var5.bind(var1)(var3);
                    var5 = var11.scrollToMessageIdWithRescroll;
                    var3 = {};
                    var3['scrollToMessageId'] = var18;
                    var3['jumpTargetId'] = var17;
                    var3['jumpType'] = var21;
                    var3['scrollPosition'] = var12;
                    var3['minimizeScrolling'] = var20;
                    var3['isRescrolling'] = var19;
                    var19 = _closure2_slot58;
                    var3['useReducedMotion'] = var19;
                    var19 = _closure2_slot109;
                    var3['chatRef'] = var19;
                    var19 = _closure2_slot129;
                    var3['findMessageIndex'] = var19;
                    var19 = _closure2_slot130;
                    var3['updateRows'] = var19;
                    var3 = var5.bind(var11)(var3);
                    _fun0024_ip = 136; continue _fun0024;
case 137:
                    if(!(var16 != var10)) { _fun0024_ip = 136; continue _fun0024 }
case 140:
                    var3 = _closure2_slot129;
                    var19 = var3.bind(var1)(var10);
                    if(!(var16 != var19)) { _fun0024_ip = 136; continue _fun0024 }
case 141:
                    var5 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var3 = 87;
                    var3 = var11[var3];
                    var11 = var5.bind(var1)(var3);
                    var5 = var11.focus;
                    var3 = _closure2_slot109;
                    var3 = var3.current;
                    var3 = var5.bind(var11)(var3, var19);
                    _fun0024_ip = 136; continue _fun0024;
case 131:
                    var5 = _closure2_slot126;
                    var3 = var5.tryFlush;
                    var3 = var3.bind(var5)();
                    _fun0024_ip = 136; continue _fun0024;
case 128:
                    var5 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var3 = 91;
                    var3 = var19[var3];
                    var5 = var5.bind(var1)(var3);
                    var3 = {};
                    var20 = _closure2_slot120;
                    var19 = var20.getPreviousRows;
                    var19 = var19.bind(var20)();
                    var3['rows'] = var19;
                    var3['scrollToMessageId'] = var18;
                    var3['jumpTargetId'] = var17;
                    if(!(var16 == var13)) { _fun0024_ip = 142; continue _fun0024 }
case 143:
                    var16 = _closure2_slot6;
                    var13 = var16.jumpType;
case 142:
                    var3['jumpType'] = var13;
                    var13 = _closure2_slot122;
                    var13 = var13.current;
                    var13 = !var13;
                    if(var13) { _fun0024_ip = 144; continue _fun0024 }
case 145:
                    var13 = var15;
case 144:
                    var3['shouldInitialScroll'] = var13;
                    var13 = _closure2_slot110;
                    var13 = var13.animated;
                    var3['animated'] = var13;
                    var3['scrollPosition'] = var12;
                    var3['focusTargetId'] = var10;
                    var10 = function getInitialScrollMessageId() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 92;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getOldestUnreadMentionOnLoad;
                        var1 = {};
                        var5 = _closure2_slot1;
                        var1['channel'] = var5;
                        var4 = _closure2_slot6;
                        var1['messages'] = var4;
                        var4 = true;
                        var1['track'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3['getInitialScrollMessageId'] = var10;
                    var10 = var5.bind(var1)(var3);
                    var5 = _closure2_slot122;
                    var3 = true;
                    var5['current'] = var3;
                    var5 = _closure2_slot127;
                    var3 = {};
                    var3['rows'] = var14;
                    var12 = _closure2_slot6;
                    var12 = var12.hasMoreAfter;
                    var3['hasMoreMessagesAfter'] = var12;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var11 = 86;
                    var11 = var13[var11];
                    var13 = var12.bind(var1)(var11);
                    var12 = var13.isLoadingAtTop;
                    var11 = _closure2_slot124;
                    var11 = var11.current;
                    var11 = var12.bind(var13)(var14, var11);
                    var3['isLoadingAtTop'] = var11;
                    var3['scrollData'] = var10;
                    var3['HACK_iOSForceAnimations'] = var9;
                    var3['forceReload'] = var8;
                    var3['isAnimated'] = var7;
                    var3 = var5.bind(var1)(var3);
                    if(var6) { _fun0024_ip = 136; continue _fun0024 }
case 146:
                    var3 = _closure2_slot123;
                    var7 = var3.current;
                    var5 = var7.finish;
                    var3 = {};
                    var8 = _closure2_slot7;
                    var3['channelId'] = var8;
                    var8 = _closure2_slot70;
                    var3['areMessagesCached'] = var8;
                    var3 = var5.bind(var7)(var3);
case 136:
                    var3 = _closure2_slot122;
                    var3 = var3.current;
                    if(!var3) { _fun0024_ip = 147; continue _fun0024 }
case 148:
                    var5 = _closure2_slot122;
                    var5 = var5.current;
                    var3 = var5 !== var6;
case 147:
                    if(!var3) { _fun0024_ip = 149; continue _fun0024 }
case 150:
                    var3 = _closure2_slot4;
case 149:
                    if(!var3) { _fun0024_ip = 122; continue _fun0024 }
case 151:
                    var3 = global;
                    var4 = var3.setTimeout;
                    var3 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 86;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.scrollToTopMessage;
                        var2 = _closure2_slot109;
                        var1 = _closure2_slot120;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var2 = 100;
                    var2 = var4.bind(var1)(var3, var2);
case 122:
                    return var1;
                }
            };
            var22 = var35.bind(r131)(var22, var34);
            var _closure2_slot130 = var22;
            var36 = r131.useCallback;
            var35 = new Array(4);
            var35[0] = var32;
            var35[1] = var27;
            var35[2] = var19;
            var35[3] = var22;
            var34 = function(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var2 = arg1;
                    var10 = var2.scrollToMessageId;
                    var9 = var2.jumpTargetId;
                    var1 = undefined;
                    if(!(var9 === var1)) { _fun0025_ip = 31; continue _fun0025 }
case 92:
                    var9 = null;
case 31:
                    var8 = var2.jumpType;
                    if(!(var8 === var1)) { _fun0025_ip = 152; continue _fun0025 }
case 33:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 90;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.JumpTypes;
                    var8 = var3.ANIMATED;
case 152:
                    var7 = var2.scrollPosition;
                    if(!(var7 === var1)) { _fun0025_ip = 153; continue _fun0025 }
case 154:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 87;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.ChatScrollPosition;
                    var7 = var3.TOP;
case 153:
                    var6 = var2.minimizeScrolling;
                    if(!(var6 === var1)) { _fun0025_ip = 155; continue _fun0025 }
case 156:
                    var6 = false;
case 155:
                    var5 = var2.isRescrolling;
                    if(!(var5 === var1)) { _fun0025_ip = 157; continue _fun0025 }
case 158:
                    var5 = false;
case 157:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 86;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.scrollToMessageIdWithRescroll;
                    var2 = {};
                    var2['scrollToMessageId'] = var10;
                    var2['jumpTargetId'] = var9;
                    var2['jumpType'] = var8;
                    var2['scrollPosition'] = var7;
                    var2['minimizeScrolling'] = var6;
                    var2['isRescrolling'] = var5;
                    var6 = _closure2_slot58;
                    var2['useReducedMotion'] = var6;
                    var6 = _closure2_slot109;
                    var2['chatRef'] = var6;
                    var6 = _closure2_slot129;
                    var2['findMessageIndex'] = var6;
                    var5 = _closure2_slot130;
                    var2['updateRows'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var39 = var36.bind(r131)(var34, var35);
            var _closure2_slot131 = var39;
            var36 = r131.useCallback;
            var35 = new Array(2);
            var35[0] = var19;
            var35[1] = var22;
            var34 = function(arg1) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var6 = arguments[1];
                    var2 = arguments[2];
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0026_ip = 32; continue _fun0026 }
case 79:
                    var6 = false;
case 32:
                    if(!(var2 === var1)) { _fun0026_ip = 94; continue _fun0026 }
case 89:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 90;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.JumpTypes;
                    var2 = var3.INSTANT;
case 94:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 86;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.maybeRescrollToMessageId;
                    var3 = {};
                    var8 = _closure2_slot109;
                    var3['chatRef'] = var8;
                    var8 = _closure2_slot129;
                    var3['findMessageIndex'] = var8;
                    var7 = _closure2_slot130;
                    var3['updateRows'] = var7;
                    var3['updateRowsEnabled'] = var6;
                    var3['jumpType'] = var2;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                }
            };
            var36 = var36.bind(r131)(var34, var35);
            var _closure2_slot132 = var36;
            var40 = r131.useCallback;
            var35 = new Array(5);
            var35[0] = var10;
            var35[1] = var18;
            var35[2] = var15;
            var35[3] = var3;
            var35[4] = var7;
            var34 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 86;
                var2 = var2[var1];
                var1 = undefined;
                var8 = var3.bind(var1)(var2);
                var7 = var8.clearRows;
                var13 = _closure2_slot109;
                var12 = _closure2_slot120;
                var11 = _closure2_slot7;
                var10 = _closure2_slot2;
                var9 = function(arg1) {
                    var4 = _closure2_slot111;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot113;
                    var3 = null;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot122;
                    var2 = false;
                    var3['current'] = var2;
                    return var1;
                };
                var14 = var8;
                var2 = var14[var7](var13, var12, var11, var10, var9, var8);
                return var1;
            };
            var35 = var40.bind(r131)(var34, var35);
            var _closure2_slot133 = var35;
            var42 = r131.useCallback;
            var40 = new Array(2);
            var40[0] = var7;
            var40[1] = var10;
            var34 = function(arg1) {
                var1 = arg1;
                var7 = var1.firstVisibleMessageRowIndex;
                var6 = var1.lastVisibleMessageRowIndex;
                var5 = var1.firstVisibleMessagePercentVisible;
                var4 = var1.lastVisibleMessagePercentVisible;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 86;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVisibleMessages;
                var1 = {};
                var1['firstVisibleMessageRowIndex'] = var7;
                var1['lastVisibleMessageRowIndex'] = var6;
                var1['firstVisibleMessagePercentVisible'] = var5;
                var1['lastVisibleMessagePercentVisible'] = var4;
                var5 = _closure2_slot120;
                var1['chatManager'] = var5;
                var4 = _closure2_slot7;
                var1['channelId'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var34 = var42.bind(r131)(var34, var40);
            var _closure2_slot134 = var34;
            var42 = r131.useCallback;
            var40 = new Array(7);
            var40[0] = var10;
            var40[1] = var14;
            var40[2] = var9;
            var40[3] = var68;
            var40[4] = var17;
            var40[5] = var15;
            var40[6] = var67;
            var17 = function() {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var1 = {};
                    var3 = function getMessage(arg1) {
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 93;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.find;
                        var5 = _closure2_slot6;
                        var2 = var5.toArray;
                        var2 = var2.bind(var5)();
                        var1 = function(arg1) {
                            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                                var1 = arg1;
                                var4 = var1.id;
                                var3 = var1.nonce;
                                var1 = _closure4_slot0;
                                var1 = var4 === var1;
                                if(var1) { _fun0028_ip = 52; continue _fun0028 }
case 34:
                                var2 = _closure4_slot0;
                                var1 = var3 === var2;
case 52:
                                return var1;
                            }
                        };
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var1['getMessage'] = var3;
                    var3 = _closure2_slot3;
                    var1['chatInputRef'] = var3;
                    var3 = _closure2_slot7;
                    var1['selectedChannelId'] = var3;
                    var3 = _closure2_slot6;
                    var3 = var3.revealedMessageId;
                    var1['revealedMessageId'] = var3;
                    var3 = _closure2_slot56;
                    var5 = null;
                    if(!(var5 == var3)) { _fun0027_ip = 152; continue _fun0027 }
case 159:
                    var3 = new Array(0);
                    _fun0027_ip = 73; continue _fun0027;
case 152:
                    var3 = _closure2_slot56;
case 73:
                    var1['uploads'] = var3;
                    var3 = _closure2_slot79;
                    var3 = var5 != var3;
                    if(!var3) { _fun0027_ip = 160; continue _fun0027 }
case 161:
                    var3 = _closure2_slot79;
case 160:
                    var1['paymentsBlocked'] = var3;
                    var3 = function loadMoreBefore() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 86;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.loadMoreBefore;
                        var3 = _closure2_slot7;
                        var2 = _closure2_slot6;
                        var1 = function(arg1) {
                            var3 = _closure2_slot111;
                            var2 = {};
                            var1 = arg1;
                            var2['animated'] = var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var1;
                    };
                    var1['loadMoreBefore'] = var3;
                    var3 = function loadMoreAfter() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 86;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.loadMoreAfter;
                        var3 = _closure2_slot7;
                        var2 = _closure2_slot6;
                        var1 = function(arg1) {
                            var3 = _closure2_slot111;
                            var2 = {};
                            var1 = arg1;
                            var2['animated'] = var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var1;
                    };
                    var1['loadMoreAfter'] = var3;
                    var2 = function dismissMessage(arg1) {
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var4 = _closure2_slot115;
                        var1 = undefined;
                        var3 = function(arg1) {
                            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                                var1 = global;
                                var3 = var1.Set;
                                var1 = var3.prototype;
                                var2 = Object.create(var1, {constructor: {value: var3}});
                                var7 = arg1;
                                var8 = var2;
                                var1 = new var8[var3](var7, var6);
                                var1 = var1 instanceof Object ? var1 : var2;
                                var3 = _closure1_slot68;
                                var2 = _closure4_slot0;
                                var5 = undefined;
                                var4 = var3.bind(var5)(var2);
                                var3 = var4.bind(var5)();
                                var2 = var3.done;
                                if(var2) { _fun0029_ip = 71; continue _fun0029 }
case 162:
                                var6 = var3.value;
                                var2 = var1.add;
                                var2 = var2.bind(var1)(var6);
                                var6 = var4.bind(var5)();
                                var2 = var6.done;
                                var3 = var6;
                                if(!var2) { _fun0029_ip = 162; continue _fun0029 }
case 71:
                                return var1;
                            }
                        };
                        var3 = var4.bind(var1)(var3);
                        var3 = _closure2_slot119;
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1['dismissMessage'] = var2;
                    return var1;
                }
            };
            var17 = var42.bind(r131)(var17, var40);
            var _closure2_slot135 = var17;
            var42 = r131.useMemo;
            var40 = new Array(1);
            var40[0] = var17;
            var17 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 94;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.MessagesHandlers;
                var4 = _closure2_slot135;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var17 = var42.bind(r131)(var17, var40);
            var _closure2_slot136 = var17;
            var42 = r131.useCallback;
            var40 = new Array(7);
            var40[0] = var69;
            var40[1] = var8;
            var40[2] = var9;
            var40[3] = var13;
            var40[4] = var31;
            var40[5] = var10;
            var40[6] = var15;
            var13 = function(arg1) {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    var1 = arg1;
                    var12 = var1.eventTimestamp;
                    var6 = var1.isAtBottom;
                    var10 = var1.isNearBottom;
                    var4 = undefined;
                    if(!(var10 === var4)) { _fun0030_ip = 72; continue _fun0030 }
case 163:
                    var10 = false;
case 72:
                    var13 = var1.isNearTop;
                    if(!(var13 === var4)) { _fun0030_ip = 93; continue _fun0030 }
case 104:
                    var13 = false;
case 93:
                    var14 = var1.dragging;
                    if(!(var14 === var4)) { _fun0030_ip = 4; continue _fun0030 }
case 94:
                    var14 = false;
case 4:
                    var16 = var1.decelerating;
                    if(!(var16 === var4)) { _fun0030_ip = 30; continue _fun0030 }
case 43:
                    var16 = false;
case 30:
                    var5 = var1.isFirstMessageVisible;
                    if(!(var5 === var4)) { _fun0030_ip = 106; continue _fun0030 }
case 39:
                    var5 = false;
case 106:
                    var2 = _closure2_slot0;
                    var3 = var2.onScroll;
                    var7 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var7)) { _fun0030_ip = 164; continue _fun0030 }
case 165:
                    var7 = _closure2_slot6;
                    var7 = var7.length;
                    var11 = 0;
                    if(!(var11 === var7)) { _fun0030_ip = 166; continue _fun0030 }
case 167:
                    var7 = _closure2_slot6;
                    var7 = var7.loadingMore;
                    if(var7) { _fun0030_ip = 164; continue _fun0030 }
case 166:
                    var15 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var9 = 95;
                    var9 = var17[var9];
                    var15 = var15.bind(var4)(var9);
                    var9 = var15.getIsScreenReaderEnabled;
                    var15 = var9.bind(var15)();
                    var9 = _closure2_slot6;
                    var9 = var9.loadingMore;
                    var9 = !var9;
                    if(!var9) { _fun0030_ip = 168; continue _fun0030 }
case 169:
                    if(var14) { _fun0030_ip = 170; continue _fun0030 }
case 171:
                    var14 = var16;
case 170:
                    if(var14) { _fun0030_ip = 172; continue _fun0030 }
case 173:
                    var14 = var15;
case 172:
                    var9 = var14;
case 168:
                    if(!var9) { _fun0030_ip = 174; continue _fun0030 }
case 175:
                    var15 = _closure2_slot126;
                    var14 = var15.hasUpdates;
                    var14 = var14.bind(var15)();
                    var9 = !var14;
case 174:
                    var14 = _closure2_slot110;
                    var14 = var14.isNearTop;
                    if(var14) { _fun0030_ip = 176; continue _fun0030 }
case 177:
                    if(!var13) { _fun0030_ip = 176; continue _fun0030 }
case 37:
                    var13 = _closure2_slot6;
                    var13 = var13.hasMoreBefore;
                    if(!var13) { _fun0030_ip = 176; continue _fun0030 }
case 18:
                    if(!var9) { _fun0030_ip = 176; continue _fun0030 }
case 178:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var13 = 86;
                    var13 = var15[var13];
                    var17 = var14.bind(var4)(var13);
                    var16 = var17.loadMoreBefore;
                    var15 = _closure2_slot7;
                    var14 = _closure2_slot6;
                    var13 = function(arg1) {
                        var3 = _closure2_slot111;
                        var2 = {};
                        var1 = arg1;
                        var2['animated'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var13 = var16.bind(var17)(var15, var14, var13);
                    _fun0030_ip = 179; continue _fun0030;
case 176:
                    var13 = _closure2_slot110;
                    var13 = var13.isNearBottom;
                    if(var13) { _fun0030_ip = 180; continue _fun0030 }
case 181:
                    if(!var10) { _fun0030_ip = 180; continue _fun0030 }
case 182:
                    var10 = _closure2_slot6;
                    var10 = var10.hasMoreAfter;
                    if(!var10) { _fun0030_ip = 180; continue _fun0030 }
case 183:
                    if(!var9) { _fun0030_ip = 180; continue _fun0030 }
case 184:
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var9 = 86;
                    var9 = var13[var9];
                    var14 = var10.bind(var4)(var9);
                    var13 = var14.loadMoreAfter;
                    var10 = _closure2_slot7;
                    var9 = _closure2_slot6;
                    var8 = function(arg1) {
                        var3 = _closure2_slot111;
                        var2 = {};
                        var1 = arg1;
                        var2['animated'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8 = var13.bind(var14)(var10, var9, var8);
                    _fun0030_ip = 179; continue _fun0030;
case 180:
                    var8 = _closure2_slot110;
                    var8 = var8.isAtBottom;
                    var8 = var8 === var6;
                    if(!var8) { _fun0030_ip = 134; continue _fun0030 }
case 185:
                    var9 = _closure2_slot110;
                    var8 = var9.hasHandledScroll;
case 134:
                    if(var8) { _fun0030_ip = 179; continue _fun0030 }
case 186:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 74;
                    var7 = var9[var7];
                    var10 = var8.bind(var4)(var7);
                    var9 = var10.updateChannelDimensions;
                    var7 = _closure2_slot1;
                    var8 = var7.id;
                    var7 = 0;
                    if(!var6) { _fun0030_ip = 187; continue _fun0030 }
case 99:
                    var7 = 1;
case 187:
                    var19 = 1;
                    var23 = var10;
                    var22 = var8;
                    var21 = var12;
                    var20 = var7;
                    var18 = 0;
                    var6 = var23[var9](var22, var21, var20, var19, var18, var17);
                    var7 = _closure2_slot111;
                    var6 = {};
                    var8 = true;
                    var6['hasHandledScroll'] = var8;
                    var6 = var7.bind(var4)(var6);
case 179:
                    if(!(var2 != var3)) { _fun0030_ip = 188; continue _fun0030 }
case 189:
                    var2 = {};
                    var2['isFirstMessageVisible'] = var5;
                    var2 = var3.bind(var4)(var2);
case 188:
                    var2 = _closure2_slot126;
                    var1 = var2.tryFlush;
                    var1 = var1.bind(var2)();
                    var1 = true;
                    return var1;
case 164:
                    var1 = false;
                    return var1;
                }
            };
            var13 = var42.bind(r131)(var13, var40);
            var _closure2_slot137 = var13;
            var40 = r131.useRef;
            var40 = var40.bind(r131)(var4);
            var _closure2_slot138 = var40;
            var69 = r131.useEffect;
            var42 = new Array(1);
            var42[0] = var10;
            var40 = function() {
                var2 = _closure2_slot138;
                var1 = undefined;
                var2['current'] = var1;
                return var1;
            };
            var40 = var69.bind(r131)(var40, var42);
            var42 = r131.useCallback;
            var40 = new Array(13);
            var40[0] = var27;
            var40[1] = var10;
            var40[2] = var29;
            var40[3] = var28;
            var40[4] = var12;
            var40[5] = var8;
            var40[6] = var9;
            var40[7] = var15;
            var40[8] = var57;
            var40[9] = var18;
            var40[10] = var23;
            var40[11] = var7;
            var40[12] = var13;
            var23 = function(arg1) {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    var1 = arg1;
                    var8 = var1.timeStamp;
                    var1 = var1.nativeEvent;
                    var17 = var1.isAtBottom;
                    var16 = var1.isNearBottom;
                    var15 = var1.isNearTop;
                    var14 = var1.dragging;
                    var13 = var1.decelerating;
                    var11 = var1.firstVisibleMessageIndex;
                    var22 = var1.firstVisibleMessagePercentVisible;
                    var10 = var1.lastVisibleMessageIndex;
                    var19 = var1.lastVisibleMessagePercentVisible;
                    var12 = var1.shouldShowJumpToPresent;
                    var4 = var1.isFirstMessageVisible;
                    var7 = var1.changesetUpdateId;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 96;
                    var2 = var2[var1];
                    var1 = undefined;
                    var9 = var5.bind(var1)(var2);
                    var6 = var9.getChangesetIdForChat;
                    var5 = _closure2_slot109;
                    var5 = var5.current;
                    var6 = var6.bind(var9)(var5);
                    if(!(var7 === var6)) { _fun0031_ip = 190; continue _fun0031 }
case 40:
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var5 = 86;
                    var5 = var21[var5];
                    var18 = var20.bind(var1)(var5);
                    var9 = var18.handleVisibleMessagesChange;
                    var5 = {};
                    var5['firstVisibleMessageRowIndex'] = var11;
                    var5['firstVisibleMessagePercentVisible'] = var22;
                    var5['lastVisibleMessageRowIndex'] = var10;
                    var5['lastVisibleMessagePercentVisible'] = var19;
                    var19 = 97;
                    var19 = var21[var19];
                    var19 = var20.bind(var1)(var19);
                    var19 = var19.QuestsVisibleMessagesChangedSource;
                    var19 = var19.SCROLL;
                    var5['source'] = var19;
                    var19 = _closure2_slot120;
                    var5['chatManager'] = var19;
                    var19 = _closure2_slot89;
                    var5['shouldTrackAnnouncementMessageViews'] = var19;
                    var19 = _closure2_slot90;
                    var5['shouldTrackRichPresenceInviteEmbedViews'] = var19;
                    var19 = _closure2_slot8;
                    var5['guildId'] = var19;
                    var19 = _closure2_slot7;
                    var5['channelId'] = var19;
                    var19 = _closure2_slot1;
                    var5['channel'] = var19;
                    var5 = var9.bind(var18)(var5);
                    var5 = _closure2_slot138;
                    var9 = var5.current;
                    var5 = null;
                    var18 = var8;
                    if(!(var5 != var9)) { _fun0031_ip = 124; continue _fun0031 }
case 191:
                    var18 = var9;
case 124:
                    var9 = _closure2_slot138;
                    var9['current'] = var1;
                    var9 = {};
                    var9['eventTimestamp'] = var18;
                    var9['isAtBottom'] = var17;
                    var9['isNearBottom'] = var16;
                    var9['isNearTop'] = var15;
                    var9['dragging'] = var14;
                    var9['decelerating'] = var13;
                    var9['shouldShowJumpToPresent'] = var12;
                    var9['isFirstMessageVisible'] = var4;
                    var4 = function(arg1) {
                        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                            var3 = arg1;
                            var12 = var3.eventTimestamp;
                            var9 = var3.isAtBottom;
                            var8 = var3.isNearBottom;
                            var1 = undefined;
                            if(!(var8 === var1)) { _fun0032_ip = 72; continue _fun0032 }
case 163:
                            var8 = false;
case 72:
                            var7 = var3.isNearTop;
                            if(!(var7 === var1)) { _fun0032_ip = 93; continue _fun0032 }
case 104:
                            var7 = false;
case 93:
                            var6 = var3.dragging;
                            if(!(var6 === var1)) { _fun0032_ip = 4; continue _fun0032 }
case 94:
                            var6 = false;
case 4:
                            var5 = var3.decelerating;
                            if(!(var5 === var1)) { _fun0032_ip = 30; continue _fun0032 }
case 43:
                            var5 = false;
case 30:
                            var4 = var3.shouldShowJumpToPresent;
                            if(!(var4 === var1)) { _fun0032_ip = 106; continue _fun0032 }
case 39:
                            var4 = false;
case 106:
                            var _closure4_slot0 = var4;
                            var11 = var3.isFirstMessageVisible;
                            if(!(var11 === var1)) { _fun0032_ip = 192; continue _fun0032 }
case 107:
                            var11 = false;
case 192:
                            var10 = _closure2_slot137;
                            var4 = {};
                            var4['eventTimestamp'] = var12;
                            var4['isAtBottom'] = var9;
                            var4['isNearBottom'] = var8;
                            var4['isNearTop'] = var7;
                            var4['dragging'] = var6;
                            var4['decelerating'] = var5;
                            var4['isFirstMessageVisible'] = var11;
                            var4 = var10.bind(var1)(var4);
                            if(!var4) { _fun0032_ip = 193; continue _fun0032 }
case 194:
                            var4 = _closure2_slot111;
                            var3 = {};
                            var3['isAtBottom'] = var9;
                            var3['isNearBottom'] = var8;
                            var3['isNearTop'] = var7;
                            var3['dragging'] = var6;
                            var3['decelerating'] = var5;
                            var3 = var4.bind(var1)(var3);
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 98;
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.batchUpdates;
                            var2 = function() {
                                _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                                    var5 = _closure1_slot13;
                                    var4 = _closure2_slot7;
                                    var3 = _closure2_slot2;
                                    var2 = _closure4_slot0;
                                    if(var2) { _fun0033_ip = 53; continue _fun0033 }
case 34:
                                    var1 = _closure2_slot6;
                                    var2 = var1.hasMoreAfter;
case 53:
                                    var1 = undefined;
                                    var2 = var5.bind(var1)(var4, var3, var2);
                                    return var1;
                                }
                            };
                            var2 = var3.bind(var4)(var2);
case 193:
                            return var1;
                        }
                    };
                    var4 = var4.bind(var1)(var9);
                    var4 = _closure2_slot5;
                    if(!(var5 != var4)) { _fun0031_ip = 186; continue _fun0031 }
case 195:
                    var9 = _closure2_slot5;
                    var5 = var9.handleScrollPosition;
                    var4 = {};
                    var13 = _closure2_slot120;
                    var12 = var13.getPreviousRows;
                    var12 = var12.bind(var13)();
                    var4['rows'] = var12;
                    var4['firstVisibleMessageRowIndex'] = var11;
                    var4['lastVisibleMessageRowIndex'] = var10;
                    var4 = var5.bind(var9)(var4);
case 186:
                    return var1;
case 190:
                    var1 = _closure2_slot138;
                    var4 = var1.current;
                    var1 = null;
                    if(!(var1 == var4)) { _fun0031_ip = 196; continue _fun0031 }
case 197:
                    var1 = _closure2_slot138;
                    var1['current'] = var8;
case 196:
                    var1 = _closure2_slot101;
                    if(!var1) { _fun0031_ip = 198; continue _fun0031 }
case 199:
                    var5 = _closure1_slot67;
                    var4 = var5.log;
                    var27 = _closure2_slot7;
                    var28 = 'STAFF-ACK-LOG: Ignoring outdated scroll event.';
                    var29 = var5;
                    var26 = var7;
                    var25 = var6;
                    var24 = var8;
                    var1 = var29[var4](var28, var27, var26, var25, var24, var23);
case 198:
                    var1 = undefined;
                    return var1;
                }
            };
            var23 = var42.bind(r131)(var23, var40);
            var42 = r131.useMemo;
            var40 = new Array(1);
            var40[0] = var17;
            var17 = function() {
                var1 = {};
                var3 = function handleTapImage(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapImage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapImage'] = var3;
                var3 = function handleTapChannel(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapChannel;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapChannel'] = var3;
                var3 = function handleLongPressChannel(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleLongPressChannel;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressChannel'] = var3;
                var3 = function handleTapAttachmentLink(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapAttachmentLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapAttachmentLink'] = var3;
                var3 = function handleLongPressAttachmentLink(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleLongPressAttachmentLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressAttachmentLink'] = var3;
                var3 = function handleTapCall(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapCall;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapCall'] = var3;
                var3 = function handleTapMention(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapMention;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapMention'] = var3;
                var3 = function handleTapCommandMention(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapCommandMention;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapCommandMention'] = var3;
                var3 = function handleLongPressCommandMention(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleLongPressCommandMention;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressCommandMention'] = var3;
                var3 = function handleTapLink(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapLink'] = var3;
                var3 = function handleLongPressLink(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleLongPressLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressLink'] = var3;
                var3 = function handleTapReaction(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapReaction;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapReaction'] = var3;
                var3 = function handleLongPressReaction(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleLongPressReaction;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressReaction'] = var3;
                var3 = function handleOpenSticker(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleOpenSticker;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleOpenSticker'] = var3;
                var3 = function handleTapAvatar(arg1) {
                    var4 = _closure2_slot136;
                    var3 = var4.handleOpenProfile;
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 99;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.AVATAR;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1['handleTapAvatar'] = var3;
                var3 = function handleTapUsername(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapUsername;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapUsername'] = var3;
                var3 = function handleLongPressUsername(arg1) {
                    var4 = _closure2_slot136;
                    var3 = var4.handleOpenProfile;
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 99;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.USERNAME;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1['handleLongPressUsername'] = var3;
                var3 = function handleTapThreadEmbed(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapThreadEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapThreadEmbed'] = var3;
                var3 = function handleTapReply(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapReply;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapReply'] = var3;
                var3 = function handleTapSummary(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapSummary;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSummary'] = var3;
                var3 = function handleTapSummaryJump(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapSummaryJump;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSummaryJump'] = var3;
                var3 = function handleLongPressMessage(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleLongPressMessage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressMessage'] = var3;
                var3 = function handleInitiateReply(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleInitiateReply;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleInitiateReply'] = var3;
                var3 = function handleInitiateEdit(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleInitiateEdit;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleInitiateEdit'] = var3;
                var3 = function handleInitiateThread(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleInitiateThread;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleInitiateThread'] = var3;
                var3 = function handleTapMessage(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapMessage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapMessage'] = var3;
                var3 = function handleTapSeparator(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapSeparator;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSeparator'] = var3;
                var3 = function handleDoubleTapMessage(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleDoubleTapMessage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleDoubleTapMessage'] = var3;
                var3 = function handleTapCancelUploadItem(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapCancelUploadItem;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapCancelUploadItem'] = var3;
                var3 = function handleTapInviteEmbedAccept(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapInviteEmbedAccept;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInviteEmbedAccept'] = var3;
                var3 = function handleTapInviteEmbed(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapInviteEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInviteEmbed'] = var3;
                var3 = function handleTapJoinActivity(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapJoinActivity;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapJoinActivity'] = var3;
                var3 = function handleTapJoinRichPresence(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapJoinRichPresence;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapJoinRichPresence'] = var3;
                var3 = function handleTapGiftCodeEmbed(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapGiftCodeEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapGiftCodeEmbed'] = var3;
                var3 = function handleTapGiftCodeAccept(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapGiftCodeAccept;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapGiftCodeAccept'] = var3;
                var3 = function handleTapReferralRedeem(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapReferralRedeem;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapReferralRedeem'] = var3;
                var3 = function handleTapEmoji(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapEmoji;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapEmoji'] = var3;
                var3 = function handleTapTimestamp(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapTimestamp;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapTimestamp'] = var3;
                var3 = function handleTapInlineCode(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapInlineCode;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInlineCode'] = var3;
                var3 = function handleTapRoleIcon(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapRoleIcon;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapRoleIcon'] = var3;
                var3 = function handleTapGameIcon(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapGameIcon;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapGameIcon'] = var3;
                var3 = function handleTapSuppressNotificationsIcon(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapSuppressNotificationsIcon;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSuppressNotificationsIcon'] = var3;
                var3 = function handleTapConnectionsRoleTag(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapConnectionsRoleTag;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapConnectionsRoleTag'] = var3;
                var3 = function handleTapTimeoutIcon() {
                    var2 = _closure2_slot136;
                    var1 = var2.handleTapTimeoutIcon;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['handleTapTimeoutIcon'] = var3;
                var3 = function handleTapButtonActionComponent(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapButtonActionComponent;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapButtonActionComponent'] = var3;
                var3 = function handleTapSelectActionComponent(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapSelectActionComponent;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSelectActionComponent'] = var3;
                var3 = function handleTapWelcomeReply(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapWelcomeReply;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapWelcomeReply'] = var3;
                var3 = function handleTapInviteToSpeak(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapInviteToSpeak;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInviteToSpeak'] = var3;
                var3 = function handleTapAutoModerationActions(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapAutoModerationActions;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapAutoModerationActions'] = var3;
                var3 = function handleTapAutoModerationFeedback(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapAutoModerationFeedback;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapAutoModerationFeedback'] = var3;
                var3 = function handleTapFollowForumPost(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapFollowForumPost;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapFollowForumPost'] = var3;
                var3 = function handleTapShareForumPost(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapShareForumPost;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapShareForumPost'] = var3;
                var3 = function handleTapReactionOverflow(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapReactionOverflow;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapReactionOverflow'] = var3;
                var3 = function handleCopyText(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleCopyText;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleCopyText'] = var3;
                var3 = function handleTapOpTag(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapOpTag;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapOpTag'] = var3;
                var3 = function handleTapTag(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapTag;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapTag'] = var3;
                var3 = function handleMediaAttachmentPlaybackStarted(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleMediaAttachmentPlaybackStarted;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleMediaAttachmentPlaybackStarted'] = var3;
                var3 = function handleMediaAttachmentPlaybackEnded(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleMediaAttachmentPlaybackEnded;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleMediaAttachmentPlaybackEnded'] = var3;
                var3 = function handlerVoiceMessagePlaybackFailed(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleVoiceMessagePlaybackFailed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handlerVoiceMessagePlaybackFailed'] = var3;
                var3 = function handleTapPostPreviewEmbed(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapPostPreviewEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapPostPreviewEmbed'] = var3;
                var3 = function handleTapDismissMediaPostSharePrompt(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapDismissMediaPostSharePrompt;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapDismissMediaPostSharePrompt'] = var3;
                var3 = function handleTapChannelPromptButton(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapChannelPromptButton;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapChannelPromptButton'] = var3;
                var3 = function handleTapObscuredMediaLearnMore(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapObscuredMediaLearnMore;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapObscuredMediaLearnMore'] = var3;
                var3 = function handleTapObscuredMediaToggle(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.onTapObscuredMediaToggle;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapObscuredMediaToggle'] = var3;
                var3 = function handleTapSafetyPolicyNoticeEmbed(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapSafetyPolicyNoticeEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSafetyPolicyNoticeEmbed'] = var3;
                var3 = function handleTapSafetySystemNotificationCta(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapSafetySystemNotificationCta;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSafetySystemNotificationCta'] = var3;
                var3 = function handleTapPollAnswer(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapPollAnswer;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapPollAnswer'] = var3;
                var3 = function handleTapPollSubmitVote(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapPollSubmitVote;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapPollSubmitVote'] = var3;
                var3 = function handleTapPollAction(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapPollAction;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapPollAction'] = var3;
                var3 = function handleLongPressPollImage(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleLongPressPollImage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressPollImage'] = var3;
                var3 = function handleTapCtaButton(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapCtaButton;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapCtaButton'] = var3;
                var3 = function handleMessageAccessibilityAction(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleMessageAccessibilityAction;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleMessageAccessibilityAction'] = var3;
                var3 = function handleTapForwardFooter(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapForwardFooter;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapForwardFooter'] = var3;
                var3 = function handleTapInlineForward(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapInlineForward;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInlineForward'] = var3;
                var3 = function handleTapClanTagChiplet(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapClanTagChiplet;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapClanTagChiplet'] = var3;
                var3 = function handleTapContentInventoryEntryEmbed(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapContentInventoryEntryEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapContentInventoryEntryEmbed'] = var3;
                var3 = function handleTapCheckpointCard(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapCheckpointCard;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapCheckpointCard'] = var3;
                var3 = function handleTapSoundmoji(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapSoundmoji;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSoundmoji'] = var3;
                var3 = function handleTapAppMessageEmbed(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapAppMessageEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapAppMessageEmbed'] = var3;
                var3 = function handleTapSharedClientTheme(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleTapPreviewSharedClientTheme;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSharedClientTheme'] = var3;
                var2 = function handleSharedClientThemeViewed(arg1) {
                    var3 = _closure2_slot136;
                    var2 = var3.handleSharedClientThemeViewed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleSharedClientThemeViewed'] = var2;
                return var1;
            };
            var17 = var42.bind(r131)(var17, var40);
            var69 = r131.useMemo;
            var42 = new Array(87);
            var42[0] = r129;
            var42[1] = r128;
            var42[2] = r125;
            var42[3] = r124;
            var42[4] = r123;
            var42[5] = r120;
            var42[6] = var84;
            var42[7] = r126;
            var42[8] = r105;
            var42[9] = r104;
            var42[10] = r119;
            var42[11] = var73;
            var42[12] = var80;
            var42[13] = var72;
            var42[14] = var83;
            var42[15] = var71;
            var42[16] = var37;
            var42[17] = var78;
            var42[18] = var77;
            var42[19] = var76;
            var42[20] = var81;
            var42[21] = var75;
            var42[22] = var62;
            var42[23] = r107;
            var42[24] = var53;
            var42[25] = var41;
            var42[26] = var60;
            var42[27] = var59;
            var42[28] = var56;
            var42[29] = var55;
            var42[30] = var20;
            var42[31] = var66;
            var42[32] = var64;
            var42[33] = var63;
            var42[34] = var65;
            var42[35] = var61;
            var42[36] = var85;
            var42[37] = var24;
            var42[38] = var82;
            var42[39] = var86;
            var42[40] = var54;
            var42[41] = var52;
            var42[42] = var97;
            var42[43] = var57;
            var42[44] = var58;
            var42[45] = var51;
            var42[46] = var50;
            var42[47] = var44;
            var42[48] = r116;
            var42[49] = r115;
            var42[50] = r114;
            var42[51] = r113;
            var42[52] = r109;
            var42[53] = var99;
            var42[54] = r101;
            var42[55] = r100;
            var42[56] = var100;
            var42[57] = r108;
            var42[58] = r103;
            var42[59] = r102;
            var42[60] = var91;
            var42[61] = var90;
            var42[62] = var89;
            var42[63] = var98;
            var42[64] = var96;
            var42[65] = var95;
            var42[66] = var94;
            var42[67] = var93;
            var42[68] = var92;
            var42[69] = var79;
            var42[70] = r127;
            var42[71] = r118;
            var42[72] = r117;
            var42[73] = var49;
            var42[74] = r122;
            var42[75] = r121;
            var42[76] = var88;
            var42[77] = var87;
            var42[78] = r106;
            var42[79] = var68;
            var42[80] = var47;
            var42[81] = var46;
            var42[82] = var45;
            var42[83] = r111;
            var42[84] = r110;
            var42[85] = r112;
            var42[86] = var43;
            var40 = function() {
                var1 = {};
                var3 = _closure2_slot62;
                var1['channelThreadsVersion'] = var3;
                var3 = _closure2_slot72;
                var1['rsvpVersion'] = var3;
                var3 = _closure2_slot74;
                var1['communicationDisabledVersion'] = var3;
                var3 = _closure2_slot75;
                var1['messageAuthorMembers'] = var3;
                var3 = _closure2_slot73;
                var1['failedMessagesVersion'] = var3;
                var3 = _closure2_slot65;
                var1['interactionComponentStatesVersion'] = var3;
                var3 = _closure2_slot102;
                var1['forwardGuildsVersion'] = var3;
                var3 = _closure2_slot66;
                var1['hasLoadedExperiments'] = var3;
                var3 = _closure2_slot80;
                var1['isFollowingForumPost'] = var3;
                var3 = _closure2_slot81;
                var1['showMediaPostSharePrompt'] = var3;
                var3 = _closure2_slot93;
                var1['shouldDisableInteractiveComponents'] = var3;
                var3 = _closure2_slot49;
                var1['isCallActive'] = var3;
                var3 = _closure2_slot50;
                var1['voiceStateChannelId'] = var3;
                var3 = _closure2_slot55;
                var1['participantsLength'] = var3;
                var3 = _closure2_slot44;
                var1['editingMessageId'] = var3;
                var3 = _closure2_slot45;
                var1['replyingMessageId'] = var3;
                var3 = _closure2_slot46;
                var1['oldestUnreadMessageId'] = var3;
                var3 = _closure2_slot67;
                var1['isSpamMessageRequest'] = var3;
                var3 = _closure2_slot68;
                var1['isMessageRequest'] = var3;
                var3 = _closure2_slot77;
                var1['currentUserCommunicationDisabled'] = var3;
                var3 = _closure2_slot84;
                var1['androidKeyboardHeight'] = var3;
                var3 = _closure2_slot76;
                var1['renderCommunicationDisabled'] = var3;
                var3 = _closure2_slot103;
                var1['guildInviteColorsFetched'] = var3;
                var3 = _closure2_slot83;
                var1['lazyCacheStatus'] = var3;
                var3 = _closure2_slot116;
                var1['shouldForceRender'] = var3;
                var3 = _closure2_slot70;
                var1['isMessagesCached'] = var3;
                var3 = _closure2_slot104;
                var1['guildEmojis'] = var3;
                var3 = _closure2_slot20;
                var1['enableSwipeActions'] = var3;
                var3 = _closure2_slot12;
                var1['inlineAttachmentMedia'] = var3;
                var3 = _closure2_slot13;
                var1['inlineEmbedMedia'] = var3;
                var3 = _closure2_slot14;
                var1['renderEmbeds'] = var3;
                var3 = _closure2_slot15;
                var1['renderReactions'] = var3;
                var3 = _closure2_slot16;
                var1['animateEmoji'] = var3;
                var3 = _closure2_slot17;
                var1['animateStickers'] = var3;
                var3 = _closure2_slot18;
                var1['gifAutoPlay'] = var3;
                var3 = _closure2_slot21;
                var1['timestampHourCycle'] = var3;
                var3 = _closure2_slot98;
                var1['containerWidth'] = var3;
                var3 = _closure2_slot10;
                var1['guildSystemChannelFlags'] = var3;
                var3 = _closure2_slot78;
                var1['userSettingsLocale'] = var3;
                var3 = _closure2_slot59;
                var1['roleStyle'] = var3;
                var3 = _closure2_slot48;
                var1['canSendMessages'] = var3;
                var3 = _closure2_slot82;
                var1['showPushFeedback'] = var3;
                var3 = _closure2_slot87;
                var1['selectedSummary'] = var3;
                var3 = _closure2_slot91;
                var1['shouldObscureSpoiler'] = var3;
                var3 = _closure2_slot97;
                var1['explicitMediaFalsePositiveInfo'] = var3;
                var3 = _closure2_slot101;
                var1['isStaff'] = var3;
                var3 = _closure2_slot92;
                var1['isAgeVerified'] = var3;
                var3 = _closure2_slot19;
                var1['theme'] = var3;
                var3 = _closure2_slot60;
                var1['saturation'] = var3;
                var3 = _closure2_slot61;
                var1['displayNameStylesEnabled'] = var3;
                var3 = _closure2_slot30;
                var1['activityInstanceIds'] = var3;
                var3 = _closure2_slot32;
                var1['activityParticipants'] = var3;
                var3 = _closure2_slot31;
                var1['activityInstancePresenceDetails'] = var3;
                var3 = _closure2_slot33;
                var1['messagesWithActivitiesLaunching'] = var3;
                var3 = _closure2_slot28;
                var1['invalidApplicationIds'] = var3;
                var3 = _closure2_slot29;
                var1['applicationAssetFetchingIds'] = var3;
                var3 = _closure2_slot25;
                var1['appDirectoryEmbedApplications'] = var3;
                var3 = _closure2_slot26;
                var1['invalidAppDirectoryEmbedApplicationIds'] = var3;
                var3 = _closure2_slot27;
                var1['appDirectoryEmbedApplicationFetchStates'] = var3;
                var3 = _closure2_slot41;
                var1['referralTrialOfferIds'] = var3;
                var3 = _closure2_slot22;
                var1['messageAuthorActivities'] = var3;
                var3 = _closure2_slot23;
                var1['activityInviteMessageIds'] = var3;
                var3 = _closure2_slot52;
                var1['resolvingGiftCodes'] = var3;
                var3 = _closure2_slot53;
                var1['resolvedGiftCodes'] = var3;
                var3 = _closure2_slot54;
                var1['acceptingGiftCodes'] = var3;
                var3 = _closure2_slot34;
                var1['mediaPostPreviewEmbeds'] = var3;
                var3 = _closure2_slot35;
                var1['guildTemplates'] = var3;
                var3 = _closure2_slot36;
                var1['buildOverrides'] = var3;
                var3 = _closure2_slot37;
                var1['experimentEmbeds'] = var3;
                var3 = _closure2_slot38;
                var1['quests'] = var3;
                var3 = _closure2_slot39;
                var1['isFetchingCurrentQuests'] = var3;
                var3 = _closure2_slot24;
                var1['invites'] = var3;
                var3 = _closure2_slot57;
                var1['repliedIds'] = var3;
                var3 = _closure2_slot94;
                var1['channelPolls'] = var3;
                var3 = _closure2_slot96;
                var1['messageReferencePolls'] = var3;
                var3 = _closure2_slot99;
                var1['unloadedContentEntryMessageIds'] = var3;
                var3 = _closure2_slot63;
                var1['interactionStates'] = var3;
                var3 = _closure2_slot64;
                var1['interactionComponentStates'] = var3;
                var3 = _closure2_slot42;
                var1['trialOffer'] = var3;
                var3 = _closure2_slot43;
                var1['isPremiumTier2User'] = var3;
                var3 = _closure2_slot51;
                var1['threadStartingReferenceMessage'] = var3;
                var3 = _closure2_slot56;
                var1['uploads'] = var3;
                var3 = _closure2_slot88;
                var1['currentUserDisplayNameStyles'] = var3;
                var3 = _closure2_slot105;
                var1['currentClientVoiceChannelId'] = var3;
                var3 = _closure2_slot106;
                var1['selfActivities'] = var3;
                var3 = _closure2_slot108;
                var1['activityLaunchJoinStates'] = var3;
                var2 = _closure2_slot107;
                var1['authorizedAppsTokens'] = var2;
                return var1;
            };
            var42 = var69.bind(r131)(var40, var42);
            var69 = 100;
            var40 = r132[var69];
            var40 = var70.bind(var4)(var40);
            var42 = var40.bind(var4)(var42);
            var _closure2_slot139 = var42;
            var40 = r132[var69];
            var40 = var70.bind(var4)(var40);
            r131 = var40.bind(var4)(var10);
            var _closure2_slot140 = r131;
            var40 = r132[var69];
            var40 = var70.bind(var4)(var40);
            var40 = var40.bind(var4)(r133);
            var _closure2_slot141 = var40;
            var69 = r132[var69];
            var69 = var70.bind(var4)(var69);
            var69 = var69.bind(var4)(var9);
            var _closure2_slot142 = var69;
            var70 = r130;
            if(!var70) { _fun0004_ip = 200; continue _fun0004 }
case 201:
            var70 = !var41;
case 200:
            if(!var70) { _fun0004_ip = 202; continue _fun0004 }
case 203:
            r132 = var5 == var42;
            var41 = undefined;
            if(r132) { _fun0004_ip = 204; continue _fun0004 }
case 205:
            var41 = var42.isMessagesCached;
case 204:
            var70 = var41;
case 202:
            var _closure2_slot143 = var70;
            var41 = _closure1_slot5;
            r135 = var41.useEffect;
            r132 = new Array(7);
            r132[0] = var8;
            r132[1] = var10;
            r132[2] = var38;
            r132[3] = var9;
            r132[4] = var37;
            r132[5] = r131;
            r132[6] = var35;
            r131 = function() {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                    var1 = _closure2_slot140;
                    var3 = null;
                    var2 = var3 != var1;
                    if(!var2) { _fun0034_ip = 34; continue _fun0034 }
case 54:
                    var5 = _closure2_slot140;
                    var1 = _closure2_slot7;
                    var2 = var5 !== var1;
case 34:
                    var1 = _closure2_slot140;
                    var1 = var3 == var1;
                    if(!var2) { _fun0034_ip = 41; continue _fun0034 }
case 78:
                    var3 = _closure2_slot133;
                    var6 = undefined;
                    var3 = var3.bind(var6)();
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 74;
                    var3 = var7[var3];
                    var6 = var5.bind(var6)(var3);
                    var5 = var6.clearChannelDimensions;
                    var3 = _closure2_slot7;
                    var3 = var5.bind(var6)(var3);
case 41:
                    if(var1) { _fun0034_ip = 107; continue _fun0034 }
case 42:
                    var1 = var2;
case 107:
                    if(!var1) { _fun0034_ip = 98; continue _fun0034 }
case 47:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 86;
                    var1 = var8[var5];
                    var6 = undefined;
                    var3 = var7.bind(var6)(var1);
                    var2 = var3.startOrCancelChannelLatestMessagesLoad;
                    var1 = {};
                    var9 = _closure2_slot6;
                    var9 = var9.jumpTargetId;
                    var1['jumpTargetId'] = var9;
                    var9 = _closure2_slot46;
                    var1['oldestUnreadMessageId'] = var9;
                    var5 = var8[var5];
                    var10 = var7.bind(var6)(var5);
                    var9 = var10.shouldJumpToOriginalPost;
                    var14 = _closure2_slot1;
                    var13 = _closure2_slot7;
                    var12 = _closure2_slot6;
                    var11 = _closure2_slot117;
                    var15 = var10;
                    var5 = var15[var9](var14, var13, var12, var11, var10);
                    var1['shouldJumpToOriginalPost'] = var5;
                    var5 = _closure2_slot7;
                    var1['channelId'] = var5;
                    var4 = _closure2_slot123;
                    var4 = var4.current;
                    var1['tracker'] = var4;
                    var1 = var2.bind(var3)(var1);
case 98:
                    var1 = undefined;
                    return var1;
                }
            };
            r131 = r135.bind(var41)(r131, r132);
            r132 = _closure1_slot0;
            r131 = _closure1_slot2;
            r131 = r131[r134];
            r134 = r132.bind(var4)(r131);
            r132 = r134.useMessagesLifecycle;
            r131 = {};
            r131['messages'] = var9;
            r131['isMessagesReady'] = r130;
            r131['oldestUnreadMessageId'] = var37;
            r131['channelId'] = var10;
            r131['screenIndex'] = var18;
            r131['updateRows'] = var22;
            r131['scrollToMessageId'] = var39;
            r131 = r132.bind(r134)(r131);
            r132 = var41.useEffect;
            r131 = new Array(3);
            r131[0] = r133;
            r131[1] = var40;
            r131[2] = var15;
            var40 = function() {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    var2 = _closure2_slot141;
                    var2 = !var2;
                    if(!var2) { _fun0035_ip = 206; continue _fun0035 }
case 101:
                    var2 = _closure2_slot71;
case 206:
                    if(!var2) { _fun0035_ip = 207; continue _fun0035 }
case 29:
                    var3 = _closure2_slot111;
                    var2 = {};
                    var1 = false;
                    var2['hasHandledScroll'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 207:
                    var1 = undefined;
                    return var1;
                }
            };
            var40 = r132.bind(var41)(var40, r131);
            r131 = var41.useEffect;
            var40 = new Array(8);
            var40[0] = var8;
            var40[1] = var10;
            var40[2] = var9;
            var40[3] = var38;
            var40[4] = var32;
            var40[5] = var69;
            var40[6] = r130;
            var40[7] = var33;
            var33 = function() {
                _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var5 = 86;
                    var2 = var1[var5];
                    var1 = undefined;
                    var10 = var4.bind(var1)(var2);
                    var9 = var10.shouldJumpToOriginalPost;
                    var14 = _closure2_slot1;
                    var13 = _closure2_slot7;
                    var12 = _closure2_slot6;
                    var11 = _closure2_slot117;
                    var15 = var10;
                    var4 = var15[var9](var14, var13, var12, var11, var10);
                    if(!var4) { _fun0036_ip = 14; continue _fun0036 }
case 83:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.scrollToTop;
                    var5 = _closure2_slot109;
                    var4 = _closure2_slot58;
                    var3 = false;
                    var3 = var6.bind(var7)(var5, var4, var3);
                    var3 = _closure2_slot142;
                    var5 = null;
                    var3 = var5 == var3;
                    var4 = undefined;
                    if(var3) { _fun0036_ip = 155; continue _fun0036 }
case 208:
                    var3 = _closure2_slot142;
                    var4 = var3.jumpSequenceId;
case 155:
                    var3 = _closure2_slot6;
                    var5 = var5 == var3;
                    var3 = undefined;
                    if(var5) { _fun0036_ip = 44; continue _fun0036 }
case 85:
                    var5 = _closure2_slot6;
                    var3 = var5.jumpSequenceId;
case 44:
                    if(!(var4 === var3)) { _fun0036_ip = 14; continue _fun0036 }
case 209:
                    var3 = _closure2_slot118;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
case 14:
                    return var1;
                }
            };
            var33 = r131.bind(var41)(var33, var40);
            var40 = var41.useEffect;
            var33 = new Array(185);
            var33[0] = r130;
            var33[1] = var9;
            var33[2] = r129;
            var33[3] = r128;
            var33[4] = r127;
            var33[5] = r126;
            var33[6] = r125;
            var33[7] = r124;
            var33[8] = r123;
            var33[9] = r122;
            var33[10] = r121;
            var33[11] = r120;
            var33[12] = r119;
            var33[13] = r118;
            var33[14] = r117;
            var33[15] = r116;
            var33[16] = r115;
            var33[17] = r114;
            var33[18] = r113;
            var33[19] = r112;
            var33[20] = r111;
            var33[21] = r110;
            var33[22] = r109;
            var33[23] = r108;
            var33[24] = r107;
            var33[25] = r106;
            var33[26] = r105;
            var33[27] = r104;
            var33[28] = r103;
            var33[29] = r102;
            var33[30] = r101;
            var33[31] = r100;
            var33[32] = var100;
            var33[33] = var99;
            var33[34] = var98;
            var33[35] = var97;
            var33[36] = var96;
            var33[37] = var95;
            var33[38] = var94;
            var33[39] = var93;
            var33[40] = var92;
            var33[41] = var91;
            var33[42] = var90;
            var33[43] = var89;
            var33[44] = var88;
            var33[45] = var87;
            var33[46] = var86;
            var33[47] = var85;
            var33[48] = var84;
            var33[49] = var83;
            var33[50] = var82;
            var33[51] = var81;
            var33[52] = var80;
            var33[53] = var79;
            var33[54] = var78;
            var33[55] = var77;
            var33[56] = var76;
            var33[57] = var75;
            var33[58] = var74;
            var33[59] = var12;
            var33[60] = var10;
            var33[61] = var8;
            var33[62] = var22;
            var33[63] = var73;
            var33[64] = var72;
            var33[65] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 210; continue _fun0004 }
case 211:
            var71 = var42.channelThreadsVersion;
case 210:
            var33[66] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 212; continue _fun0004 }
case 213:
            var71 = var42.rsvpVersion;
case 212:
            var33[67] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 214; continue _fun0004 }
case 215:
            var71 = var42.repliedIds;
case 214:
            var33[68] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 216; continue _fun0004 }
case 217:
            var71 = var42.hasLoadedExperiments;
case 216:
            var33[69] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 218; continue _fun0004 }
case 219:
            var71 = var42.communicationDisabledVersion;
case 218:
            var33[70] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 220; continue _fun0004 }
case 221:
            var71 = var42.messageAuthorMembers;
case 220:
            var33[71] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 222; continue _fun0004 }
case 223:
            var71 = var42.failedMessagesVersion;
case 222:
            var33[72] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 224; continue _fun0004 }
case 225:
            var71 = var42.interactionStates;
case 224:
            var33[73] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 226; continue _fun0004 }
case 227:
            var71 = var42.interactionComponentStates;
case 226:
            var33[74] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 228; continue _fun0004 }
case 229:
            var71 = var42.interactionComponentStatesVersion;
case 228:
            var33[75] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 230; continue _fun0004 }
case 231:
            var71 = var42.shouldDisableInteractiveComponents;
case 230:
            var33[76] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 232; continue _fun0004 }
case 233:
            var71 = var42.channelPolls;
case 232:
            var33[77] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 234; continue _fun0004 }
case 235:
            var71 = var42.messageReferencePolls;
case 234:
            var33[78] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 236; continue _fun0004 }
case 237:
            var71 = var42.activityInstanceIds;
case 236:
            var33[79] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 238; continue _fun0004 }
case 239:
            var71 = var42.activityParticipants;
case 238:
            var33[80] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 240; continue _fun0004 }
case 241:
            var71 = var42.activityInstancePresenceDetails;
case 240:
            var33[81] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 242; continue _fun0004 }
case 243:
            var71 = var42.messagesWithActivitiesLaunching;
case 242:
            var33[82] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 244; continue _fun0004 }
case 245:
            var71 = var42.activityLaunchJoinStates;
case 244:
            var33[83] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 246; continue _fun0004 }
case 247:
            var71 = var42.currentClientVoiceChannelId;
case 246:
            var33[84] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 248; continue _fun0004 }
case 249:
            var71 = var42.selfActivities;
case 248:
            var33[85] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 250; continue _fun0004 }
case 251:
            var71 = var42.invalidApplicationIds;
case 250:
            var33[86] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 252; continue _fun0004 }
case 253:
            var71 = var42.applicationAssetFetchingIds;
case 252:
            var33[87] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 254; continue _fun0004 }
case 255:
            var71 = var42.appDirectoryEmbedApplications;
case 254:
            var33[88] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 256; continue _fun0004 }
case 257:
            var71 = var42.invalidAppDirectoryEmbedApplicationIds;
case 256:
            var33[89] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 258; continue _fun0004 }
case 259:
            var71 = var42.appDirectoryEmbedApplicationFetchStates;
case 258:
            var33[90] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 260; continue _fun0004 }
case 261:
            var71 = var42.lazyCacheStatus;
case 260:
            var33[91] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 262; continue _fun0004 }
case 263:
            var71 = var42.isFollowingForumPost;
case 262:
            var33[92] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 264; continue _fun0004 }
case 265:
            var71 = var42.showMediaPostSharePrompt;
case 264:
            var33[93] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 266; continue _fun0004 }
case 267:
            var71 = var42.referralTrialOfferIds;
case 266:
            var33[94] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 268; continue _fun0004 }
case 269:
            var71 = var42.trialOffer;
case 268:
            var33[95] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 270; continue _fun0004 }
case 271:
            var71 = var42.isPremiumTier2User;
case 270:
            var33[96] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 272; continue _fun0004 }
case 273:
            var71 = var42.messageAuthorActivities;
case 272:
            var33[97] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 274; continue _fun0004 }
case 275:
            var71 = var42.activityInviteMessageIds;
case 274:
            var33[98] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 276; continue _fun0004 }
case 277:
            var71 = var42.resolvingGiftCodes;
case 276:
            var33[99] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 278; continue _fun0004 }
case 279:
            var71 = var42.resolvedGiftCodes;
case 278:
            var33[100] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 280; continue _fun0004 }
case 281:
            var71 = var42.acceptingGiftCodes;
case 280:
            var33[101] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 282; continue _fun0004 }
case 283:
            var71 = var42.mediaPostPreviewEmbeds;
case 282:
            var33[102] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 284; continue _fun0004 }
case 285:
            var71 = var42.explicitMediaFalsePositiveInfo;
case 284:
            var33[103] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 286; continue _fun0004 }
case 287:
            var71 = var42.guildTemplates;
case 286:
            var33[104] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 288; continue _fun0004 }
case 289:
            var71 = var42.buildOverrides;
case 288:
            var33[105] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 290; continue _fun0004 }
case 291:
            var71 = var42.experimentEmbeds;
case 290:
            var33[106] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 292; continue _fun0004 }
case 293:
            var71 = var42.quests;
case 292:
            var33[107] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 294; continue _fun0004 }
case 295:
            var71 = var42.isFetchingCurrentQuests;
case 294:
            var33[108] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 296; continue _fun0004 }
case 297:
            var71 = var42.showPushFeedback;
case 296:
            var33[109] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 298; continue _fun0004 }
case 299:
            var71 = var42.forwardGuildsVersion;
case 298:
            var33[110] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 300; continue _fun0004 }
case 301:
            var71 = var42.renderCommunicationDisabled;
case 300:
            var33[111] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 302; continue _fun0004 }
case 303:
            var71 = var42.editingMessageId;
case 302:
            var33[112] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 304; continue _fun0004 }
case 305:
            var71 = var42.replyingMessageId;
case 304:
            var33[113] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 306; continue _fun0004 }
case 307:
            var71 = var42.oldestUnreadMessageId;
case 306:
            var33[114] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 308; continue _fun0004 }
case 309:
            var71 = var42.isCallActive;
case 308:
            var33[115] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 310; continue _fun0004 }
case 311:
            var71 = var42.voiceStateChannelId;
case 310:
            var33[116] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 312; continue _fun0004 }
case 313:
            var71 = var42.participantsLength;
case 312:
            var33[117] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 314; continue _fun0004 }
case 315:
            var71 = var42.invites;
case 314:
            var33[118] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 316; continue _fun0004 }
case 317:
            var71 = var42.isSpamMessageRequest;
case 316:
            var33[119] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 318; continue _fun0004 }
case 319:
            var71 = var42.isMessageRequest;
case 318:
            var33[120] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 320; continue _fun0004 }
case 321:
            var71 = var42.currentUserCommunicationDisabled;
case 320:
            var33[121] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 322; continue _fun0004 }
case 323:
            var71 = var42.androidKeyboardHeight;
case 322:
            var33[122] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 324; continue _fun0004 }
case 325:
            var71 = var42.inlineAttachmentMedia;
case 324:
            var33[123] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 326; continue _fun0004 }
case 327:
            var71 = var42.inlineEmbedMedia;
case 326:
            var33[124] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 328; continue _fun0004 }
case 329:
            var71 = var42.renderEmbeds;
case 328:
            var33[125] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 330; continue _fun0004 }
case 331:
            var71 = var42.renderReactions;
case 330:
            var33[126] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 332; continue _fun0004 }
case 333:
            var71 = var42.animateEmoji;
case 332:
            var33[127] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 334; continue _fun0004 }
case 335:
            var71 = var42.animateStickers;
case 334:
            var33[128] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 336; continue _fun0004 }
case 337:
            var71 = var42.gifAutoPlay;
case 336:
            var33[129] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 338; continue _fun0004 }
case 339:
            var71 = var42.containerWidth;
case 338:
            var33[130] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 340; continue _fun0004 }
case 341:
            var71 = var42.timestampHourCycle;
case 340:
            var33[131] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 342; continue _fun0004 }
case 343:
            var71 = var42.guildSystemChannelFlags;
case 342:
            var33[132] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 344; continue _fun0004 }
case 345:
            var71 = var42.userSettingsLocale;
case 344:
            var33[133] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 346; continue _fun0004 }
case 347:
            var71 = var42.roleStyle;
case 346:
            var33[134] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 348; continue _fun0004 }
case 349:
            var71 = var42.canSendMessages;
case 348:
            var33[135] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 350; continue _fun0004 }
case 351:
            var71 = var42.selectedSummary;
case 350:
            var33[136] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 352; continue _fun0004 }
case 353:
            var71 = var42.shouldObscureSpoiler;
case 352:
            var33[137] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 354; continue _fun0004 }
case 355:
            var71 = var42.isStaff;
case 354:
            var33[138] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 356; continue _fun0004 }
case 357:
            var71 = var42.isAgeVerified;
case 356:
            var33[139] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 358; continue _fun0004 }
case 359:
            var71 = var42.theme;
case 358:
            var33[140] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 360; continue _fun0004 }
case 361:
            var71 = var42.saturation;
case 360:
            var33[141] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 362; continue _fun0004 }
case 363:
            var71 = var42.threadStartingReferenceMessage;
case 362:
            var33[142] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 364; continue _fun0004 }
case 365:
            var71 = var42.unloadedContentEntryMessageIds;
case 364:
            var33[143] = var71;
            var72 = var5 == var42;
            var71 = undefined;
            if(var72) { _fun0004_ip = 366; continue _fun0004 }
case 367:
            var71 = var42.guildInviteColorsFetched;
case 366:
            var33[144] = var71;
            var33[145] = var70;
            var33[146] = var69;
            var69 = var31.isAtBottom;
            var33[147] = var69;
            var33[148] = var68;
            var69 = var5 == var42;
            var68 = undefined;
            if(var69) { _fun0004_ip = 368; continue _fun0004 }
case 369:
            var68 = var42.uploads;
case 368:
            var33[149] = var68;
            var33[150] = var67;
            var33[151] = var20;
            var33[152] = var66;
            var33[153] = var65;
            var33[154] = var64;
            var33[155] = var63;
            var33[156] = var62;
            var33[157] = var61;
            var33[158] = var60;
            var33[159] = var59;
            var33[160] = var58;
            var33[161] = var57;
            var33[162] = var37;
            var58 = var5 == var42;
            var57 = undefined;
            if(var58) { _fun0004_ip = 370; continue _fun0004 }
case 371:
            var57 = var42.shouldForceRender;
case 370:
            var33[163] = var57;
            var33[164] = var56;
            var33[165] = var55;
            var33[166] = var24;
            var33[167] = var54;
            var33[168] = var53;
            var33[169] = var52;
            var33[170] = var51;
            var33[171] = var50;
            var33[172] = var49;
            var33[173] = var7;
            var33[174] = var48;
            var33[175] = var47;
            var48 = var5 == var42;
            var47 = undefined;
            if(var48) { _fun0004_ip = 372; continue _fun0004 }
case 373:
            var47 = var42.guildEmojis;
case 372:
            var33[176] = var47;
            var33[177] = var46;
            var47 = var5 == var42;
            var46 = undefined;
            if(var47) { _fun0004_ip = 374; continue _fun0004 }
case 375:
            var46 = var42.enableSwipeActions;
case 374:
            var33[178] = var46;
            var47 = var5 == var42;
            var46 = undefined;
            if(var47) { _fun0004_ip = 376; continue _fun0004 }
case 377:
            var46 = var42.displayNameStylesEnabled;
case 376:
            var33[179] = var46;
            var33[180] = var44;
            var46 = var5 == var42;
            var44 = undefined;
            if(var46) { _fun0004_ip = 378; continue _fun0004 }
case 379:
            var46 = var42.currentUserDisplayNameStyles;
            var47 = var5 == var46;
            var44 = undefined;
            if(var47) { _fun0004_ip = 378; continue _fun0004 }
case 380:
            var44 = var46.fontId;
case 378:
            var33[181] = var44;
            var46 = var5 == var45;
            var44 = undefined;
            if(var46) { _fun0004_ip = 381; continue _fun0004 }
case 382:
            var44 = var45.fontId;
case 381:
            var33[182] = var44;
            var33[183] = var43;
            var43 = var5 == var42;
            var5 = undefined;
            if(var43) { _fun0004_ip = 383; continue _fun0004 }
case 384:
            var5 = var42.authorizedAppsTokens;
case 383:
            var33[184] = var5;
            var5 = function() {
                _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                    var2 = _closure2_slot11;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0037_ip = 385; continue _fun0037 }
case 89:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var4 = undefined;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 93; continue _fun0037 }
case 33:
                    var2 = _closure2_slot139;
                    var6 = var2.theme;
case 93:
                    var2 = _closure2_slot19;
                    var15 = var6 !== var2;
                    if(var15) { _fun0037_ip = 91; continue _fun0037 }
case 45:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 39; continue _fun0037 }
case 30:
                    var2 = _closure2_slot139;
                    var6 = var2.saturation;
case 39:
                    var2 = _closure2_slot60;
                    var15 = var6 !== var2;
case 91:
                    var16 = var15;
                    if(var16) { _fun0037_ip = 386; continue _fun0037 }
case 108:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 46; continue _fun0037 }
case 387:
                    var2 = _closure2_slot139;
                    var6 = var2.inlineAttachmentMedia;
case 46:
                    var2 = _closure2_slot12;
                    var16 = var6 !== var2;
case 386:
                    if(var16) { _fun0037_ip = 388; continue _fun0037 }
case 155:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 44; continue _fun0037 }
case 85:
                    var2 = _closure2_slot139;
                    var6 = var2.inlineEmbedMedia;
case 44:
                    var2 = _closure2_slot13;
                    var16 = var6 !== var2;
case 388:
                    if(var16) { _fun0037_ip = 389; continue _fun0037 }
case 390:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 391; continue _fun0037 }
case 114:
                    var2 = _closure2_slot139;
                    var6 = var2.renderEmbeds;
case 391:
                    var2 = _closure2_slot14;
                    var16 = var6 !== var2;
case 389:
                    if(var16) { _fun0037_ip = 193; continue _fun0037 }
case 392:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 393; continue _fun0037 }
case 394:
                    var2 = _closure2_slot139;
                    var6 = var2.renderReactions;
case 393:
                    var2 = _closure2_slot15;
                    var16 = var6 !== var2;
case 193:
                    if(var16) { _fun0037_ip = 395; continue _fun0037 }
case 396:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 397; continue _fun0037 }
case 398:
                    var2 = _closure2_slot139;
                    var6 = var2.animateEmoji;
case 397:
                    var2 = _closure2_slot16;
                    var16 = var6 !== var2;
case 395:
                    if(var16) { _fun0037_ip = 399; continue _fun0037 }
case 400:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 401; continue _fun0037 }
case 402:
                    var2 = _closure2_slot139;
                    var6 = var2.animateStickers;
case 401:
                    var2 = _closure2_slot17;
                    var16 = var6 !== var2;
case 399:
                    if(var16) { _fun0037_ip = 27; continue _fun0037 }
case 403:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 181; continue _fun0037 }
case 404:
                    var2 = _closure2_slot139;
                    var6 = var2.gifAutoPlay;
case 181:
                    var2 = _closure2_slot18;
                    var16 = var6 !== var2;
case 27:
                    if(var16) { _fun0037_ip = 405; continue _fun0037 }
case 406:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 127; continue _fun0037 }
case 407:
                    var2 = _closure2_slot139;
                    var6 = var2.timestampHourCycle;
case 127:
                    var2 = _closure2_slot21;
                    var16 = var6 !== var2;
case 405:
                    if(var16) { _fun0037_ip = 408; continue _fun0037 }
case 409:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 410; continue _fun0037 }
case 411:
                    var2 = _closure2_slot139;
                    var6 = var2.containerWidth;
case 410:
                    var2 = _closure2_slot98;
                    var16 = var6 !== var2;
case 408:
                    if(var16) { _fun0037_ip = 412; continue _fun0037 }
case 413:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 414; continue _fun0037 }
case 133:
                    var2 = _closure2_slot139;
                    var6 = var2.guildSystemChannelFlags;
case 414:
                    var2 = _closure2_slot10;
                    var16 = var6 !== var2;
case 412:
                    if(var16) { _fun0037_ip = 415; continue _fun0037 }
case 416:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 417; continue _fun0037 }
case 196:
                    var2 = _closure2_slot139;
                    var6 = var2.userSettingsLocale;
case 417:
                    var2 = _closure2_slot78;
                    var16 = var6 !== var2;
case 415:
                    if(var16) { _fun0037_ip = 418; continue _fun0037 }
case 419:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 420; continue _fun0037 }
case 421:
                    var2 = _closure2_slot139;
                    var6 = var2.roleStyle;
case 420:
                    var2 = _closure2_slot59;
                    var16 = var6 !== var2;
case 418:
                    if(var16) { _fun0037_ip = 422; continue _fun0037 }
case 179:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 423; continue _fun0037 }
case 424:
                    var2 = _closure2_slot139;
                    var6 = var2.canSendMessages;
case 423:
                    var2 = _closure2_slot48;
                    var16 = var6 !== var2;
case 422:
                    if(var16) { _fun0037_ip = 425; continue _fun0037 }
case 164:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 426; continue _fun0037 }
case 427:
                    var2 = _closure2_slot139;
                    var6 = var2.showPushFeedback;
case 426:
                    var2 = _closure2_slot82;
                    var16 = var6 !== var2;
case 425:
                    if(var16) { _fun0037_ip = 428; continue _fun0037 }
case 429:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 430; continue _fun0037 }
case 431:
                    var2 = _closure2_slot139;
                    var6 = var2.selectedSummary;
case 430:
                    var2 = _closure2_slot87;
                    var16 = var6 !== var2;
case 428:
                    if(var16) { _fun0037_ip = 432; continue _fun0037 }
case 433:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 434; continue _fun0037 }
case 435:
                    var2 = _closure2_slot139;
                    var6 = var2.shouldObscureSpoiler;
case 434:
                    var2 = _closure2_slot91;
                    var16 = var6 !== var2;
case 432:
                    if(var16) { _fun0037_ip = 436; continue _fun0037 }
case 437:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 438; continue _fun0037 }
case 439:
                    var2 = _closure2_slot139;
                    var6 = var2.explicitMediaFalsePositiveInfo;
case 438:
                    var2 = _closure2_slot97;
                    var16 = var6 !== var2;
case 436:
                    if(var16) { _fun0037_ip = 440; continue _fun0037 }
case 441:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 442; continue _fun0037 }
case 443:
                    var2 = _closure2_slot139;
                    var6 = var2.isStaff;
case 442:
                    var2 = _closure2_slot101;
                    var16 = var6 !== var2;
case 440:
                    if(var16) { _fun0037_ip = 444; continue _fun0037 }
case 445:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 446; continue _fun0037 }
case 447:
                    var2 = _closure2_slot139;
                    var6 = var2.isAgeVerified;
case 446:
                    var2 = _closure2_slot92;
                    var16 = var6 !== var2;
case 444:
                    if(var16) { _fun0037_ip = 448; continue _fun0037 }
case 449:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 450; continue _fun0037 }
case 451:
                    var2 = _closure2_slot139;
                    var6 = var2.displayNameStylesEnabled;
case 450:
                    var2 = _closure2_slot61;
                    var16 = var6 !== var2;
case 448:
                    if(var16) { _fun0037_ip = 452; continue _fun0037 }
case 453:
                    var2 = _closure2_slot139;
                    var2 = var5 == var2;
                    var6 = undefined;
                    if(var2) { _fun0037_ip = 454; continue _fun0037 }
case 455:
                    var2 = _closure2_slot139;
                    var6 = var2.shouldForceRender;
case 454:
                    var2 = _closure2_slot116;
                    var2 = var6 !== var2;
                    if(!var2) { _fun0037_ip = 456; continue _fun0037 }
case 457:
                    var2 = _closure2_slot116;
case 456:
                    var16 = var2;
case 452:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 71;
                    var6 = var8[var6];
                    var9 = var7.bind(var4)(var6);
                    var8 = {};
                    var6 = _closure2_slot6;
                    var8['messages'] = var6;
                    var6 = _closure2_slot84;
                    var8['androidKeyboardHeight'] = var6;
                    var6 = _closure2_slot45;
                    var8['replyingMessageId'] = var6;
                    var7 = {};
                    var6 = _closure2_slot110;
                    var6 = var6.isAtBottom;
                    var7['isAtBottom'] = var6;
                    var10 = _closure2_slot120;
                    var6 = var10.getPreviousMessages;
                    var6 = var6.bind(var10)();
                    var6 = var5 != var6;
                    var7['hasPreviousMessages'] = var6;
                    var6 = {};
                    var10 = _closure2_slot142;
                    if(!(var5 == var10)) { _fun0037_ip = 458; continue _fun0037 }
case 459:
                    var10 = _closure2_slot6;
                    _fun0037_ip = 460; continue _fun0037;
case 458:
                    var10 = _closure2_slot142;
case 460:
                    var6['messages'] = var10;
                    var10 = _closure2_slot139;
                    var11 = var5 == var10;
                    var10 = undefined;
                    if(var11) { _fun0037_ip = 461; continue _fun0037 }
case 462:
                    var11 = _closure2_slot139;
                    var10 = var11.androidKeyboardHeight;
case 461:
                    if(!(var5 == var10)) { _fun0037_ip = 463; continue _fun0037 }
case 464:
                    var10 = _closure2_slot84;
case 463:
                    var6['androidKeyboardHeight'] = var10;
                    var6 = var9.bind(var4)(var8, var7, var6);
                    var13 = var6.scrollToMessageId;
                    var12 = var6.jumpTargetId;
                    var11 = var6.jumpType;
                    var7 = var6.minimizeScrolling;
                    var10 = var6.focusTargetId;
                    var8 = var6.shouldInitialScroll;
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var9 = undefined;
                    if(var6) { _fun0037_ip = 465; continue _fun0037 }
case 466:
                    var6 = _closure2_slot139;
                    var9 = var6.resolvingGiftCodes;
case 465:
                    var6 = _closure2_slot52;
                    var41 = var9 !== var6;
                    if(var41) { _fun0037_ip = 122; continue _fun0037 }
case 150:
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var9 = undefined;
                    if(var6) { _fun0037_ip = 467; continue _fun0037 }
case 468:
                    var6 = _closure2_slot139;
                    var9 = var6.resolvedGiftCodes;
case 467:
                    var6 = _closure2_slot53;
                    var41 = var9 !== var6;
case 122:
                    if(var41) { _fun0037_ip = 469; continue _fun0037 }
case 470:
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var9 = undefined;
                    if(var6) { _fun0037_ip = 471; continue _fun0037 }
case 472:
                    var6 = _closure2_slot139;
                    var9 = var6.acceptingGiftCodes;
case 471:
                    var6 = _closure2_slot54;
                    var41 = var9 !== var6;
case 469:
                    var _closure3_slot0 = var41;
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var40 = undefined;
                    if(var6) { _fun0037_ip = 473; continue _fun0037 }
case 474:
                    var6 = _closure2_slot139;
                    var40 = var6.uploads;
case 473:
                    var39 = _closure2_slot56;
                    var9 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var14 = 101;
                    var6 = var6[var14];
                    var17 = var9.bind(var4)(var6);
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var9 = undefined;
                    if(var6) { _fun0037_ip = 475; continue _fun0037 }
case 476:
                    var6 = _closure2_slot139;
                    var9 = var6.interactionStates;
case 475:
                    var6 = _closure2_slot63;
                    var6 = var17.bind(var4)(var9, var6);
                    var31 = !var6;
                    var _closure3_slot1 = var31;
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var9 = undefined;
                    if(var6) { _fun0037_ip = 477; continue _fun0037 }
case 478:
                    var6 = _closure2_slot139;
                    var9 = var6.channelPolls;
case 477:
                    var6 = _closure2_slot94;
                    var28 = var9 !== var6;
                    var _closure3_slot2 = var28;
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var9 = undefined;
                    if(var6) { _fun0037_ip = 479; continue _fun0037 }
case 480:
                    var6 = _closure2_slot139;
                    var9 = var6.messageReferencePolls;
case 479:
                    var6 = _closure2_slot96;
                    var27 = var9 !== var6;
                    var _closure3_slot3 = var27;
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var9 = undefined;
                    if(var6) { _fun0037_ip = 481; continue _fun0037 }
case 482:
                    var6 = _closure2_slot139;
                    var9 = var6.interactionComponentStatesVersion;
case 481:
                    var6 = _closure2_slot65;
                    var30 = var9 !== var6;
                    var _closure3_slot4 = var30;
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var9 = undefined;
                    if(var6) { _fun0037_ip = 483; continue _fun0037 }
case 484:
                    var6 = _closure2_slot139;
                    var9 = var6.shouldDisableInteractiveComponents;
case 483:
                    var6 = _closure2_slot93;
                    var6 = var9 !== var6;
                    var _closure3_slot5 = var6;
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var9 = undefined;
                    if(var6) { _fun0037_ip = 485; continue _fun0037 }
case 486:
                    var6 = _closure2_slot139;
                    var9 = var6.communicationDisabledVersion;
case 485:
                    var6 = _closure2_slot74;
                    var37 = var9 !== var6;
                    var _closure3_slot6 = var37;
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var9 = undefined;
                    if(var6) { _fun0037_ip = 487; continue _fun0037 }
case 488:
                    var6 = _closure2_slot139;
                    var9 = var6.messageAuthorMembers;
case 487:
                    var6 = _closure2_slot75;
                    var36 = var9 !== var6;
                    var _closure3_slot7 = var36;
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var9 = undefined;
                    if(var6) { _fun0037_ip = 489; continue _fun0037 }
case 490:
                    var6 = _closure2_slot139;
                    var9 = var6.failedMessagesVersion;
case 489:
                    var6 = _closure2_slot73;
                    var35 = var9 !== var6;
                    var _closure3_slot8 = var35;
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var9 = undefined;
                    if(var6) { _fun0037_ip = 491; continue _fun0037 }
case 492:
                    var6 = _closure2_slot139;
                    var9 = var6.renderCommunicationDisabled;
case 491:
                    var6 = _closure2_slot76;
                    var32 = var9 !== var6;
                    var _closure3_slot9 = var32;
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var34 = undefined;
                    if(var6) { _fun0037_ip = 493; continue _fun0037 }
case 494:
                    var6 = _closure2_slot139;
                    var34 = var6.forwardGuildsVersion;
case 493:
                    var33 = _closure2_slot102;
                    var9 = _closure2_slot1;
                    var6 = var9.isForumPost;
                    var29 = var6.bind(var9)();
                    if(!var29) { _fun0037_ip = 495; continue _fun0037 }
case 496:
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var9 = undefined;
                    if(var6) { _fun0037_ip = 497; continue _fun0037 }
case 498:
                    var6 = _closure2_slot139;
                    var9 = var6.isFollowingForumPost;
case 497:
                    var6 = _closure2_slot80;
                    var29 = var9 !== var6;
case 495:
                    var _closure3_slot10 = var29;
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var9 = undefined;
                    if(var6) { _fun0037_ip = 499; continue _fun0037 }
case 500:
                    var6 = _closure2_slot139;
                    var9 = var6.showMediaPostSharePrompt;
case 499:
                    var6 = _closure2_slot81;
                    var26 = var9 !== var6;
                    var _closure3_slot11 = var26;
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var9 = undefined;
                    if(var6) { _fun0037_ip = 501; continue _fun0037 }
case 502:
                    var6 = _closure2_slot139;
                    var9 = var6.unloadedContentEntryMessageIds;
case 501:
                    var6 = _closure2_slot99;
                    var25 = var9 !== var6;
                    var _closure3_slot12 = var25;
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var9 = undefined;
                    if(var6) { _fun0037_ip = 503; continue _fun0037 }
case 504:
                    var6 = _closure2_slot139;
                    var9 = var6.invalidApplicationIds;
case 503:
                    var6 = _closure2_slot28;
                    var6 = var9 !== var6;
                    var _closure3_slot13 = var6;
                    var9 = _closure2_slot139;
                    var9 = var5 == var9;
                    var17 = undefined;
                    if(var9) { _fun0037_ip = 505; continue _fun0037 }
case 506:
                    var9 = _closure2_slot139;
                    var17 = var9.activityInstanceIds;
case 505:
                    var9 = _closure2_slot30;
                    var38 = var17 !== var9;
                    if(var38) { _fun0037_ip = 507; continue _fun0037 }
case 508:
                    var9 = _closure2_slot139;
                    var9 = var5 == var9;
                    var17 = undefined;
                    if(var9) { _fun0037_ip = 509; continue _fun0037 }
case 510:
                    var9 = _closure2_slot139;
                    var17 = var9.activityParticipants;
case 509:
                    var9 = _closure2_slot32;
                    var38 = var17 !== var9;
case 507:
                    if(var38) { _fun0037_ip = 511; continue _fun0037 }
case 512:
                    var9 = _closure2_slot139;
                    var9 = var5 == var9;
                    var17 = undefined;
                    if(var9) { _fun0037_ip = 513; continue _fun0037 }
case 514:
                    var9 = _closure2_slot139;
                    var17 = var9.applicationAssetFetchingIds;
case 513:
                    var9 = _closure2_slot29;
                    var38 = var17 !== var9;
case 511:
                    if(var38) { _fun0037_ip = 515; continue _fun0037 }
case 516:
                    var9 = _closure2_slot139;
                    var9 = var5 == var9;
                    var17 = undefined;
                    if(var9) { _fun0037_ip = 517; continue _fun0037 }
case 518:
                    var9 = _closure2_slot139;
                    var17 = var9.activityInstancePresenceDetails;
case 517:
                    var9 = _closure2_slot31;
                    var38 = var17 !== var9;
case 515:
                    if(var38) { _fun0037_ip = 519; continue _fun0037 }
case 520:
                    var9 = _closure2_slot139;
                    var9 = var5 == var9;
                    var17 = undefined;
                    if(var9) { _fun0037_ip = 521; continue _fun0037 }
case 522:
                    var9 = _closure2_slot139;
                    var17 = var9.messagesWithActivitiesLaunching;
case 521:
                    var9 = _closure2_slot33;
                    var38 = var17 !== var9;
case 519:
                    if(var38) { _fun0037_ip = 523; continue _fun0037 }
case 524:
                    var38 = var6;
case 523:
                    var _closure3_slot14 = var38;
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var14];
                    var18 = var9.bind(var4)(var6);
                    var17 = var18.areArraysShallowEqual;
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var9 = undefined;
                    if(var6) { _fun0037_ip = 525; continue _fun0037 }
case 526:
                    var6 = _closure2_slot139;
                    var9 = var6.activityInviteMessageIds;
case 525:
                    if(!(var5 == var9)) { _fun0037_ip = 527; continue _fun0037 }
case 528:
                    var9 = new Array(0);
case 527:
                    var6 = _closure2_slot23;
                    if(!(var5 == var6)) { _fun0037_ip = 529; continue _fun0037 }
case 530:
                    var6 = new Array(0);
                    _fun0037_ip = 531; continue _fun0037;
case 529:
                    var6 = _closure2_slot23;
case 531:
                    var6 = var17.bind(var18)(var9, var6);
                    var24 = !var6;
                    var _closure3_slot15 = var24;
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var14];
                    var17 = var9.bind(var4)(var6);
                    var14 = var17.areArraysShallowEqual;
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var9 = undefined;
                    if(var6) { _fun0037_ip = 532; continue _fun0037 }
case 533:
                    var6 = _closure2_slot139;
                    var9 = var6.referralTrialOfferIds;
case 532:
                    if(!(var5 == var9)) { _fun0037_ip = 534; continue _fun0037 }
case 535:
                    var9 = new Array(0);
case 534:
                    var6 = _closure2_slot41;
                    if(!(var5 == var6)) { _fun0037_ip = 536; continue _fun0037 }
case 537:
                    var6 = new Array(0);
                    _fun0037_ip = 538; continue _fun0037;
case 536:
                    var6 = _closure2_slot41;
case 538:
                    var6 = var14.bind(var17)(var9, var6);
                    var23 = !var6;
                    if(var23) { _fun0037_ip = 539; continue _fun0037 }
case 540:
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var9 = undefined;
                    if(var6) { _fun0037_ip = 541; continue _fun0037 }
case 542:
                    var6 = _closure2_slot139;
                    var9 = var6.trialOffer;
case 541:
                    var6 = _closure2_slot42;
                    var23 = var9 !== var6;
case 539:
                    if(var23) { _fun0037_ip = 543; continue _fun0037 }
case 544:
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var9 = undefined;
                    if(var6) { _fun0037_ip = 545; continue _fun0037 }
case 546:
                    var6 = _closure2_slot139;
                    var9 = var6.isPremiumTier2User;
case 545:
                    var6 = _closure2_slot43;
                    var23 = var9 !== var6;
case 543:
                    var _closure3_slot16 = var23;
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var9 = undefined;
                    if(var6) { _fun0037_ip = 547; continue _fun0037 }
case 548:
                    var6 = _closure2_slot139;
                    var9 = var6.guildInviteColorsFetched;
case 547:
                    var6 = _closure2_slot103;
                    var22 = var9 !== var6;
                    var _closure3_slot17 = var22;
                    var6 = _closure2_slot139;
                    var6 = var5 == var6;
                    var9 = undefined;
                    if(var6) { _fun0037_ip = 549; continue _fun0037 }
case 550:
                    var6 = _closure2_slot139;
                    var9 = var6.guildEmojis;
case 549:
                    var6 = _closure2_slot104;
                    var21 = var9 !== var6;
                    var _closure3_slot18 = var21;
                    var6 = _closure2_slot83;
                    var14 = 'initializing';
                    var6 = var14 !== var6;
                    var9 = _closure2_slot139;
                    var17 = var5 == var9;
                    var9 = undefined;
                    if(var17) { _fun0037_ip = 551; continue _fun0037 }
case 552:
                    var17 = _closure2_slot139;
                    var9 = var17.lazyCacheStatus;
case 551:
                    var17 = var14 !== var9;
                    var9 = _closure2_slot139;
                    var9 = var5 == var9;
                    var14 = undefined;
                    if(var9) { _fun0037_ip = 553; continue _fun0037 }
case 554:
                    var9 = _closure2_slot139;
                    var9 = var9.currentUserDisplayNameStyles;
                    var18 = var5 == var9;
                    var14 = undefined;
                    if(var18) { _fun0037_ip = 553; continue _fun0037 }
case 555:
                    var14 = var9.fontId;
case 553:
                    var9 = _closure2_slot88;
                    var18 = var5 == var9;
                    var9 = undefined;
                    if(var18) { _fun0037_ip = 556; continue _fun0037 }
case 557:
                    var18 = _closure2_slot88;
                    var9 = var18.fontId;
case 556:
                    var20 = var14 !== var9;
                    var _closure3_slot19 = var20;
                    var9 = _closure2_slot139;
                    var9 = var5 == var9;
                    var14 = undefined;
                    if(var9) { _fun0037_ip = 558; continue _fun0037 }
case 559:
                    var9 = _closure2_slot139;
                    var14 = var9.selfActivities;
case 558:
                    var9 = _closure2_slot106;
                    var19 = var14 !== var9;
                    var _closure3_slot20 = var19;
                    var9 = _closure2_slot139;
                    var9 = var5 == var9;
                    var14 = undefined;
                    if(var9) { _fun0037_ip = 560; continue _fun0037 }
case 561:
                    var9 = _closure2_slot139;
                    var14 = var9.currentClientVoiceChannelId;
case 560:
                    var9 = _closure2_slot105;
                    var14 = var14 !== var9;
                    var _closure3_slot21 = var14;
                    var9 = _closure2_slot139;
                    var9 = var5 == var9;
                    var18 = undefined;
                    if(var9) { _fun0037_ip = 562; continue _fun0037 }
case 563:
                    var9 = _closure2_slot139;
                    var18 = var9.activityLaunchJoinStates;
case 562:
                    var9 = _closure2_slot108;
                    var18 = var18 !== var9;
                    var _closure3_slot22 = var18;
                    var9 = _closure2_slot139;
                    var9 = var5 == var9;
                    var42 = undefined;
                    if(var9) { _fun0037_ip = 564; continue _fun0037 }
case 565:
                    var9 = _closure2_slot139;
                    var42 = var9.authorizedAppsTokens;
case 564:
                    var9 = _closure2_slot107;
                    var9 = var42 !== var9;
                    var _closure3_slot23 = var9;
                    if(var16) { _fun0037_ip = 566; continue _fun0037 }
case 567:
                    if(var41) { _fun0037_ip = 566; continue _fun0037 }
case 568:
                    if(!(var40 === var39)) { _fun0037_ip = 566; continue _fun0037 }
case 569:
                    if(var38) { _fun0037_ip = 566; continue _fun0037 }
case 570:
                    var39 = _closure2_slot142;
                    var38 = _closure2_slot6;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 571:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 572; continue _fun0037 }
case 573:
                    var38 = _closure2_slot139;
                    var39 = var38.editingMessageId;
case 572:
                    var38 = _closure2_slot44;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 574:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 575; continue _fun0037 }
case 576:
                    var38 = _closure2_slot139;
                    var39 = var38.replyingMessageId;
case 575:
                    var38 = _closure2_slot45;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 577:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 578; continue _fun0037 }
case 57:
                    var38 = _closure2_slot139;
                    var39 = var38.voiceStateChannelId;
case 578:
                    var38 = _closure2_slot50;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 579:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 580; continue _fun0037 }
case 63:
                    var38 = _closure2_slot139;
                    var39 = var38.messageAuthorActivities;
case 580:
                    var38 = _closure2_slot22;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 581:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 582; continue _fun0037 }
case 583:
                    var38 = _closure2_slot139;
                    var39 = var38.oldestUnreadMessageId;
case 582:
                    var38 = _closure2_slot46;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 584:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 585; continue _fun0037 }
case 586:
                    var38 = _closure2_slot139;
                    var39 = var38.invites;
case 585:
                    var38 = _closure2_slot24;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 587:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 588; continue _fun0037 }
case 589:
                    var38 = _closure2_slot139;
                    var39 = var38.appDirectoryEmbedApplications;
case 588:
                    var38 = _closure2_slot25;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 590:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 591; continue _fun0037 }
case 592:
                    var38 = _closure2_slot139;
                    var39 = var38.invalidAppDirectoryEmbedApplicationIds;
case 591:
                    var38 = _closure2_slot26;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 593:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 594; continue _fun0037 }
case 595:
                    var38 = _closure2_slot139;
                    var39 = var38.appDirectoryEmbedApplicationFetchStates;
case 594:
                    var38 = _closure2_slot27;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 596:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 597; continue _fun0037 }
case 598:
                    var38 = _closure2_slot139;
                    var39 = var38.guildTemplates;
case 597:
                    var38 = _closure2_slot35;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 599:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 600; continue _fun0037 }
case 601:
                    var38 = _closure2_slot139;
                    var39 = var38.buildOverrides;
case 600:
                    var38 = _closure2_slot36;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 602:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 603; continue _fun0037 }
case 604:
                    var38 = _closure2_slot139;
                    var39 = var38.experimentEmbeds;
case 603:
                    var38 = _closure2_slot37;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 605:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 606; continue _fun0037 }
case 607:
                    var38 = _closure2_slot139;
                    var39 = var38.quests;
case 606:
                    var38 = _closure2_slot38;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 608:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 609; continue _fun0037 }
case 610:
                    var38 = _closure2_slot139;
                    var39 = var38.isFetchingCurrentQuests;
case 609:
                    var38 = _closure2_slot39;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 611:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 612; continue _fun0037 }
case 613:
                    var38 = _closure2_slot139;
                    var39 = var38.participantsLength;
case 612:
                    var38 = _closure2_slot55;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 614:
                    var39 = _closure2_slot69;
                    var38 = _closure2_slot142;
                    var38 = var5 != var38;
                    if(!var38) { _fun0037_ip = 615; continue _fun0037 }
case 616:
                    var40 = _closure2_slot142;
                    var40 = var40.ready;
                    if(var40) { _fun0037_ip = 617; continue _fun0037 }
case 618:
                    var41 = _closure2_slot142;
                    var40 = var41.cached;
case 617:
                    var38 = var40;
case 615:
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 619:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 620; continue _fun0037 }
case 621:
                    var38 = _closure2_slot139;
                    var39 = var38.channelThreadsVersion;
case 620:
                    var38 = _closure2_slot62;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 622:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 623; continue _fun0037 }
case 624:
                    var38 = _closure2_slot139;
                    var39 = var38.rsvpVersion;
case 623:
                    var38 = _closure2_slot72;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 625:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 626; continue _fun0037 }
case 627:
                    var38 = _closure2_slot139;
                    var39 = var38.repliedIds;
case 626:
                    var38 = _closure2_slot57;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 628:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 629; continue _fun0037 }
case 630:
                    var38 = _closure2_slot139;
                    var39 = var38.hasLoadedExperiments;
case 629:
                    var38 = _closure2_slot66;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 631:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 632; continue _fun0037 }
case 633:
                    var38 = _closure2_slot139;
                    var39 = var38.isMessageRequest;
case 632:
                    var38 = _closure2_slot68;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 634:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 635; continue _fun0037 }
case 636:
                    var38 = _closure2_slot139;
                    var39 = var38.isSpamMessageRequest;
case 635:
                    var38 = _closure2_slot67;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 637:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 638; continue _fun0037 }
case 639:
                    var38 = _closure2_slot139;
                    var39 = var38.currentUserCommunicationDisabled;
case 638:
                    var38 = _closure2_slot77;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 640:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 641; continue _fun0037 }
case 642:
                    var38 = _closure2_slot139;
                    var39 = var38.userSettingsLocale;
case 641:
                    var38 = _closure2_slot78;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 643:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 644; continue _fun0037 }
case 645:
                    var38 = _closure2_slot139;
                    var39 = var38.selectedSummary;
case 644:
                    var38 = _closure2_slot87;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 646:
                    var38 = _closure2_slot139;
                    var38 = var5 == var38;
                    var39 = undefined;
                    if(var38) { _fun0037_ip = 647; continue _fun0037 }
case 648:
                    var38 = _closure2_slot139;
                    var39 = var38.showPushFeedback;
case 647:
                    var38 = _closure2_slot82;
                    if(!(var39 === var38)) { _fun0037_ip = 566; continue _fun0037 }
case 649:
                    if(!(var17 === var6)) { _fun0037_ip = 566; continue _fun0037 }
case 650:
                    if(var37) { _fun0037_ip = 566; continue _fun0037 }
case 651:
                    if(var36) { _fun0037_ip = 566; continue _fun0037 }
case 652:
                    if(var35) { _fun0037_ip = 566; continue _fun0037 }
case 653:
                    if(!(var34 === var33)) { _fun0037_ip = 566; continue _fun0037 }
case 654:
                    if(var32) { _fun0037_ip = 566; continue _fun0037 }
case 655:
                    if(var31) { _fun0037_ip = 566; continue _fun0037 }
case 656:
                    if(var30) { _fun0037_ip = 566; continue _fun0037 }
case 657:
                    if(var29) { _fun0037_ip = 566; continue _fun0037 }
case 658:
                    if(!(var5 == var12)) { _fun0037_ip = 566; continue _fun0037 }
case 659:
                    if(!(var5 == var10)) { _fun0037_ip = 566; continue _fun0037 }
case 660:
                    var29 = _closure2_slot139;
                    var29 = var5 == var29;
                    var30 = undefined;
                    if(var29) { _fun0037_ip = 661; continue _fun0037 }
case 662:
                    var29 = _closure2_slot139;
                    var30 = var29.androidKeyboardHeight;
case 661:
                    var29 = _closure2_slot84;
                    if(!(var30 === var29)) { _fun0037_ip = 566; continue _fun0037 }
case 663:
                    var29 = _closure2_slot139;
                    var29 = var5 == var29;
                    var30 = undefined;
                    if(var29) { _fun0037_ip = 664; continue _fun0037 }
case 665:
                    var29 = _closure2_slot139;
                    var30 = var29.mediaPostPreviewEmbeds;
case 664:
                    var29 = _closure2_slot34;
                    if(!(var30 === var29)) { _fun0037_ip = 566; continue _fun0037 }
case 666:
                    var29 = _closure2_slot139;
                    var29 = var5 == var29;
                    var30 = undefined;
                    if(var29) { _fun0037_ip = 667; continue _fun0037 }
case 668:
                    var29 = _closure2_slot139;
                    var30 = var29.shouldObscureSpoiler;
case 667:
                    var29 = _closure2_slot91;
                    if(!(var30 === var29)) { _fun0037_ip = 566; continue _fun0037 }
case 669:
                    var29 = _closure2_slot139;
                    var29 = var5 == var29;
                    var30 = undefined;
                    if(var29) { _fun0037_ip = 670; continue _fun0037 }
case 671:
                    var29 = _closure2_slot139;
                    var30 = var29.shouldDisableInteractiveComponents;
case 670:
                    var29 = _closure2_slot93;
                    if(!(var30 === var29)) { _fun0037_ip = 566; continue _fun0037 }
case 672:
                    if(var28) { _fun0037_ip = 566; continue _fun0037 }
case 673:
                    if(var27) { _fun0037_ip = 566; continue _fun0037 }
case 674:
                    if(var26) { _fun0037_ip = 566; continue _fun0037 }
case 675:
                    var26 = _closure2_slot139;
                    var26 = var5 == var26;
                    var27 = undefined;
                    if(var26) { _fun0037_ip = 676; continue _fun0037 }
case 677:
                    var26 = _closure2_slot139;
                    var27 = var26.threadStartingReferenceMessage;
case 676:
                    var26 = _closure2_slot51;
                    if(!(var27 === var26)) { _fun0037_ip = 566; continue _fun0037 }
case 678:
                    if(var25) { _fun0037_ip = 566; continue _fun0037 }
case 679:
                    if(var24) { _fun0037_ip = 566; continue _fun0037 }
case 680:
                    if(var23) { _fun0037_ip = 566; continue _fun0037 }
case 681:
                    if(var22) { _fun0037_ip = 566; continue _fun0037 }
case 682:
                    if(var21) { _fun0037_ip = 566; continue _fun0037 }
case 683:
                    if(var20) { _fun0037_ip = 566; continue _fun0037 }
case 684:
                    if(var19) { _fun0037_ip = 566; continue _fun0037 }
case 685:
                    if(var18) { _fun0037_ip = 566; continue _fun0037 }
case 686:
                    if(var14) { _fun0037_ip = 566; continue _fun0037 }
case 687:
                    if(var9) { _fun0037_ip = 566; continue _fun0037 }
case 688:
                    var14 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var9 = 86;
                    var9 = var18[var9];
                    var19 = var14.bind(var4)(var9);
                    var18 = var19.recordTimings;
                    var14 = _closure2_slot7;
                    var9 = _closure2_slot6;
                    var9 = var18.bind(var19)(var14, var9);
                    _fun0037_ip = 385; continue _fun0037;
case 566:
                    var9 = global;
                    var9 = var9.Set;
                    var14 = var9.prototype;
                    var14 = Object.create(var14, {constructor: {value: var9}});
                    var46 = var14;
                    var9 = new var46[var9](var45);
                    var14 = var9 instanceof Object ? var9 : var14;
                    var _closure3_slot24 = var14;
                    var9 = _closure2_slot139;
                    var9 = var5 == var9;
                    var18 = undefined;
                    if(var9) { _fun0037_ip = 689; continue _fun0037 }
case 690:
                    var9 = _closure2_slot139;
                    var18 = var9.editingMessageId;
case 689:
                    var9 = _closure2_slot44;
                    if(!(var18 !== var9)) { _fun0037_ip = 691; continue _fun0037 }
case 692:
                    var9 = _closure2_slot44;
                    if(!(var5 != var9)) { _fun0037_ip = 693; continue _fun0037 }
case 694:
                    var18 = var14.add;
                    var9 = _closure2_slot44;
                    var9 = var18.bind(var14)(var9);
case 693:
                    var9 = _closure2_slot139;
                    var18 = var5 == var9;
                    var9 = undefined;
                    if(var18) { _fun0037_ip = 695; continue _fun0037 }
case 696:
                    var18 = _closure2_slot139;
                    var9 = var18.editingMessageId;
case 695:
                    if(!(var5 != var9)) { _fun0037_ip = 691; continue _fun0037 }
case 697:
                    var18 = var14.add;
                    var9 = _closure2_slot139;
                    var19 = var5 == var9;
                    var9 = undefined;
                    if(var19) { _fun0037_ip = 698; continue _fun0037 }
case 699:
                    var19 = _closure2_slot139;
                    var9 = var19.editingMessageId;
case 698:
                    var9 = var18.bind(var14)(var9);
case 691:
                    var9 = _closure2_slot139;
                    var9 = var5 == var9;
                    var18 = undefined;
                    if(var9) { _fun0037_ip = 700; continue _fun0037 }
case 701:
                    var9 = _closure2_slot139;
                    var18 = var9.replyingMessageId;
case 700:
                    var9 = _closure2_slot45;
                    if(!(var18 !== var9)) { _fun0037_ip = 702; continue _fun0037 }
case 703:
                    var9 = _closure2_slot45;
                    if(!(var5 != var9)) { _fun0037_ip = 704; continue _fun0037 }
case 705:
                    var18 = var14.add;
                    var9 = _closure2_slot45;
                    var9 = var18.bind(var14)(var9);
case 704:
                    var9 = _closure2_slot139;
                    var18 = var5 == var9;
                    var9 = undefined;
                    if(var18) { _fun0037_ip = 706; continue _fun0037 }
case 707:
                    var18 = _closure2_slot139;
                    var9 = var18.replyingMessageId;
case 706:
                    if(!(var5 != var9)) { _fun0037_ip = 702; continue _fun0037 }
case 708:
                    var18 = var14.add;
                    var9 = _closure2_slot139;
                    var19 = var5 == var9;
                    var9 = undefined;
                    if(var19) { _fun0037_ip = 709; continue _fun0037 }
case 710:
                    var19 = _closure2_slot139;
                    var9 = var19.replyingMessageId;
case 709:
                    var9 = var18.bind(var14)(var9);
case 702:
                    var18 = _closure2_slot69;
                    var9 = _closure2_slot142;
                    var9 = var5 != var9;
                    if(!var9) { _fun0037_ip = 711; continue _fun0037 }
case 712:
                    var19 = _closure2_slot142;
                    var19 = var19.ready;
                    if(var19) { _fun0037_ip = 713; continue _fun0037 }
case 714:
                    var20 = _closure2_slot142;
                    var19 = var20.cached;
case 713:
                    var9 = var19;
case 711:
                    if(!(var18 === var9)) { _fun0037_ip = 715; continue _fun0037 }
case 716:
                    var9 = _closure2_slot139;
                    var9 = var5 == var9;
                    var18 = undefined;
                    if(var9) { _fun0037_ip = 717; continue _fun0037 }
case 718:
                    var9 = _closure2_slot139;
                    var18 = var9.isCallActive;
case 717:
                    var9 = _closure2_slot49;
                    if(!(var18 === var9)) { _fun0037_ip = 715; continue _fun0037 }
case 719:
                    var9 = _closure2_slot139;
                    var9 = var5 == var9;
                    var18 = undefined;
                    if(var9) { _fun0037_ip = 720; continue _fun0037 }
case 721:
                    var9 = _closure2_slot139;
                    var18 = var9.voiceStateChannelId;
case 720:
                    var9 = _closure2_slot50;
                    if(!(var18 === var9)) { _fun0037_ip = 715; continue _fun0037 }
case 722:
                    var9 = _closure2_slot139;
                    var9 = var5 == var9;
                    var18 = undefined;
                    if(var9) { _fun0037_ip = 723; continue _fun0037 }
case 724:
                    var9 = _closure2_slot139;
                    var18 = var9.participantsLength;
case 723:
                    var9 = _closure2_slot55;
                    if(!(var18 !== var9)) { _fun0037_ip = 725; continue _fun0037 }
case 715:
                    var18 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var9 = 93;
                    var9 = var19[var9];
                    var20 = var18.bind(var4)(var9);
                    var19 = var20.find;
                    var18 = _closure2_slot6;
                    var9 = var18.toArray;
                    var18 = var9.bind(var18)();
                    var9 = var18.reverse;
                    var18 = var9.bind(var18)();
                    var9 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = _closure1_slot57;
                        var1 = var1.CALL;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var9 = var19.bind(var20)(var18, var9);
                    if(!(var5 != var9)) { _fun0037_ip = 725; continue _fun0037 }
case 726:
                    var18 = var14.add;
                    var9 = var9.id;
                    var9 = var18.bind(var14)(var9);
case 725:
                    var9 = _closure2_slot139;
                    var9 = var5 == var9;
                    var18 = undefined;
                    if(var9) { _fun0037_ip = 727; continue _fun0037 }
case 728:
                    var9 = _closure2_slot139;
                    var18 = var9.channelThreadsVersion;
case 727:
                    var9 = _closure2_slot62;
                    var9 = var18 !== var9;
                    var _closure3_slot25 = var9;
                    var9 = _closure2_slot139;
                    var9 = var5 == var9;
                    var18 = undefined;
                    if(var9) { _fun0037_ip = 729; continue _fun0037 }
case 730:
                    var9 = _closure2_slot139;
                    var18 = var9.rsvpVersion;
case 729:
                    var9 = _closure2_slot72;
                    var9 = var18 !== var9;
                    var _closure3_slot26 = var9;
                    var9 = _closure2_slot139;
                    var9 = var5 == var9;
                    var18 = undefined;
                    if(var9) { _fun0037_ip = 731; continue _fun0037 }
case 732:
                    var9 = _closure2_slot139;
                    var18 = var9.repliedIds;
case 731:
                    var9 = _closure2_slot57;
                    var9 = var18 !== var9;
                    var _closure3_slot27 = var9;
                    var9 = _closure2_slot139;
                    var9 = var5 == var9;
                    var18 = undefined;
                    if(var9) { _fun0037_ip = 733; continue _fun0037 }
case 734:
                    var9 = _closure2_slot139;
                    var18 = var9.hasLoadedExperiments;
case 733:
                    var9 = _closure2_slot66;
                    var9 = var18 !== var9;
                    var _closure3_slot28 = var9;
                    var9 = _closure2_slot139;
                    var9 = var5 == var9;
                    var18 = undefined;
                    if(var9) { _fun0037_ip = 735; continue _fun0037 }
case 736:
                    var9 = _closure2_slot139;
                    var18 = var9.communicationDisabledVersion;
case 735:
                    var19 = var5 != var18;
                    var9 = -1;
                    if(!var19) { _fun0037_ip = 737; continue _fun0037 }
case 738:
                    var9 = var18;
case 737:
                    var _closure3_slot29 = var9;
                    var9 = !var17;
                    if(var17) { _fun0037_ip = 739; continue _fun0037 }
case 740:
                    var9 = var6;
case 739:
                    var _closure3_slot30 = var9;
                    var17 = _closure2_slot6;
                    var6 = var17.forEach;
                    var3 = function(arg1) {
                        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                            var1 = arg1;
                            var3 = _closure3_slot21;
                            if(!var3) { _fun0038_ip = 4; continue _fun0038 }
case 101:
                            var3 = var1.activity;
                            var4 = null;
                            var5 = var4 == var3;
                            var4 = undefined;
                            if(var5) { _fun0038_ip = 741; continue _fun0038 }
case 3:
                            var4 = var3.type;
case 741:
                            var3 = _closure1_slot61;
                            var3 = var3.STREAM_REQUEST;
                            if(!(var4 !== var3)) { _fun0038_ip = 742; continue _fun0038 }
case 4:
                            var3 = _closure3_slot28;
                            if(!var3) { _fun0038_ip = 41; continue _fun0038 }
case 159:
                            var4 = var1.type;
                            var3 = _closure1_slot57;
                            var3 = var3.USER_JOIN;
                            if(!(var4 !== var3)) { _fun0038_ip = 743; continue _fun0038 }
case 41:
                            var3 = _closure3_slot27;
                            if(!var3) { _fun0038_ip = 744; continue _fun0038 }
case 71:
                            var4 = var1.type;
                            var3 = _closure1_slot57;
                            var3 = var3.REPLY;
                            if(!(var4 === var3)) { _fun0038_ip = 744; continue _fun0038 }
case 745:
                            var3 = var1.messageReference;
                            var4 = null;
                            if(!(var4 != var3)) { _fun0038_ip = 744; continue _fun0038 }
case 746:
                            var5 = _closure2_slot57;
                            var4 = var5.has;
                            var3 = var3.message_id;
                            var3 = var4.bind(var5)(var3);
                            if(var3) { _fun0038_ip = 747; continue _fun0038 }
case 744:
                            var3 = _closure3_slot25;
                            if(!var3) { _fun0038_ip = 173; continue _fun0038 }
case 748:
                            var4 = var1.hasFlag;
                            var3 = _closure1_slot58;
                            var3 = var3.HAS_THREAD;
                            var3 = var4.bind(var1)(var3);
                            if(var3) { _fun0038_ip = 644; continue _fun0038 }
case 173:
                            var3 = _closure3_slot26;
                            if(!var3) { _fun0038_ip = 749; continue _fun0038 }
case 750:
                            var3 = var1.codedLinks;
                            var4 = var3.length;
                            var3 = 0;
                            if(!(!(var4 > var3))) { _fun0038_ip = 751; continue _fun0038 }
case 749:
                            var3 = _closure3_slot18;
                            if(!var3) { _fun0038_ip = 752; continue _fun0038 }
case 121:
                            var4 = var1.type;
                            var3 = _closure1_slot57;
                            var3 = var3.EMOJI_ADDED;
                            if(!(var4 !== var3)) { _fun0038_ip = 753; continue _fun0038 }
case 752:
                            var3 = _closure3_slot9;
                            if(var3) { _fun0038_ip = 754; continue _fun0038 }
case 755:
                            var3 = _closure3_slot6;
                            if(!var3) { _fun0038_ip = 756; continue _fun0038 }
case 12:
                            var5 = _closure2_slot8;
                            var4 = null;
                            if(!(var4 != var5)) { _fun0038_ip = 756; continue _fun0038 }
case 10:
                            var6 = _closure1_slot42;
                            var5 = _closure2_slot8;
                            var3 = var1.author;
                            var4 = var3.id;
                            var3 = undefined;
                            var4 = var6.bind(var3)(var5, var4);
                            var3 = _closure3_slot29;
                            if(!(!(var4 > var3))) { _fun0038_ip = 754; continue _fun0038 }
case 756:
                            var3 = _closure3_slot7;
                            if(!var3) { _fun0038_ip = 195; continue _fun0038 }
case 757:
                            var3 = _closure2_slot8;
                            var5 = null;
                            if(!(var5 != var3)) { _fun0038_ip = 195; continue _fun0038 }
case 758:
                            var4 = var1.author;
                            var8 = var5 == var4;
                            var3 = undefined;
                            if(var8) { _fun0038_ip = 759; continue _fun0038 }
case 760:
                            var3 = var4.id;
case 759:
                            if(!(var5 == var3)) { _fun0038_ip = 761; continue _fun0038 }
case 195:
                            var3 = _closure3_slot8;
                            if(!var3) { _fun0038_ip = 762; continue _fun0038 }
case 130:
                            var3 = var1.author;
                            var4 = var3.id;
                            var3 = _closure2_slot11;
                            if(!(var4 !== var3)) { _fun0038_ip = 763; continue _fun0038 }
case 762:
                            var3 = _closure3_slot1;
                            if(!var3) { _fun0038_ip = 764; continue _fun0038 }
case 133:
                            var4 = _closure2_slot139;
                            var9 = null;
                            var4 = var9 == var4;
                            var8 = undefined;
                            if(var4) { _fun0038_ip = 765; continue _fun0038 }
case 412:
                            var4 = _closure2_slot139;
                            var8 = var4.interactionStates;
case 765:
                            if(!(var9 == var8)) { _fun0038_ip = 196; continue _fun0038 }
case 766:
                            var8 = {};
case 196:
                            var4 = var1.id;
                            var4 = var8[var4];
                            var8 = _closure2_slot63;
                            if(!(var9 == var8)) { _fun0038_ip = 419; continue _fun0038 }
case 767:
                            var8 = {};
                            _fun0038_ip = 768; continue _fun0038;
case 419:
                            var8 = _closure2_slot63;
case 768:
                            var3 = var1.id;
                            var3 = var8[var3];
                            if(!(var4 === var3)) { _fun0038_ip = 769; continue _fun0038 }
case 764:
                            var3 = _closure3_slot4;
                            if(!var3) { _fun0038_ip = 770; continue _fun0038 }
case 771:
                            var3 = _closure2_slot139;
                            var10 = null;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0038_ip = 772; continue _fun0038 }
case 773:
                            var9 = _closure2_slot139;
                            var12 = var9.interactionComponentStates;
                            var9 = var10 == var12;
                            var3 = undefined;
                            if(var9) { _fun0038_ip = 772; continue _fun0038 }
case 774:
                            var11 = var12.get;
                            var9 = var1.id;
                            var3 = var11.bind(var12)(var9);
case 772:
                            var9 = _closure2_slot64;
                            var9 = var10 == var9;
                            var4 = undefined;
                            if(var9) { _fun0038_ip = 775; continue _fun0038 }
case 776:
                            var10 = _closure2_slot64;
                            var9 = var10.get;
                            var8 = var1.id;
                            var4 = var9.bind(var10)(var8);
case 775:
                            if(!(var3 === var4)) { _fun0038_ip = 777; continue _fun0038 }
case 770:
                            var3 = _closure3_slot5;
                            if(!var3) { _fun0038_ip = 778; continue _fun0038 }
case 430:
                            var3 = var1.components;
                            var4 = var3.length;
                            var3 = 0;
                            if(!(var3 === var4)) { _fun0038_ip = 779; continue _fun0038 }
case 778:
                            var3 = _closure3_slot2;
                            if(!var3) { _fun0038_ip = 442; continue _fun0038 }
case 780:
                            var4 = _closure2_slot139;
                            var9 = null;
                            var4 = var9 == var4;
                            var8 = undefined;
                            if(var4) { _fun0038_ip = 781; continue _fun0038 }
case 437:
                            var4 = _closure2_slot139;
                            var8 = var4.channelPolls;
case 781:
                            if(!(var9 == var8)) { _fun0038_ip = 782; continue _fun0038 }
case 783:
                            var8 = {};
case 782:
                            var4 = var1.id;
                            var4 = var8[var4];
                            var8 = _closure2_slot94;
                            if(!(var9 == var8)) { _fun0038_ip = 784; continue _fun0038 }
case 785:
                            var8 = {};
                            _fun0038_ip = 786; continue _fun0038;
case 784:
                            var8 = _closure2_slot94;
case 786:
                            var3 = var1.id;
                            var3 = var8[var3];
                            if(!(var4 === var3)) { _fun0038_ip = 787; continue _fun0038 }
case 442:
                            var3 = _closure3_slot3;
                            if(!var3) { _fun0038_ip = 788; continue _fun0038 }
case 789:
                            var4 = var1.messageReference;
                            var10 = null;
                            var9 = var10 == var4;
                            var8 = undefined;
                            if(var9) { _fun0038_ip = 790; continue _fun0038 }
case 447:
                            var8 = var4.message_id;
case 790:
                            if(!(var10 != var8)) { _fun0038_ip = 788; continue _fun0038 }
case 446:
                            var4 = _closure2_slot139;
                            var4 = var10 == var4;
                            var3 = undefined;
                            if(var4) { _fun0038_ip = 791; continue _fun0038 }
case 792:
                            var4 = _closure2_slot139;
                            var3 = var4.messageReferencePolls;
case 791:
                            if(!(var10 == var3)) { _fun0038_ip = 793; continue _fun0038 }
case 794:
                            var3 = {};
case 793:
                            var4 = var3[var8];
                            var3 = _closure2_slot96;
                            if(!(var10 == var3)) { _fun0038_ip = 795; continue _fun0038 }
case 796:
                            var3 = {};
                            _fun0038_ip = 797; continue _fun0038;
case 795:
                            var3 = _closure2_slot96;
case 797:
                            var3 = var3[var8];
                            if(!(var4 === var3)) { _fun0038_ip = 798; continue _fun0038 }
case 788:
                            var3 = _closure3_slot12;
                            if(!var3) { _fun0038_ip = 799; continue _fun0038 }
case 800:
                            var4 = _closure2_slot139;
                            var9 = null;
                            var4 = var9 == var4;
                            var10 = undefined;
                            if(var4) { _fun0038_ip = 801; continue _fun0038 }
case 802:
                            var4 = _closure2_slot139;
                            var10 = var4.unloadedContentEntryMessageIds;
case 801:
                            if(!(var9 == var10)) { _fun0038_ip = 803; continue _fun0038 }
case 804:
                            var4 = global;
                            var4 = var4.Set;
                            var8 = var4.prototype;
                            var8 = Object.create(var8, {constructor: {value: var4}});
                            var24 = var8;
                            var4 = new var24[var4](var23);
                            var10 = var4 instanceof Object ? var4 : var8;
case 803:
                            var8 = var10.has;
                            var4 = var1.id;
                            var4 = var8.bind(var10)(var4);
                            var8 = _closure2_slot99;
                            if(!(var9 == var8)) { _fun0038_ip = 805; continue _fun0038 }
case 806:
                            var8 = global;
                            var8 = var8.Set;
                            var9 = var8.prototype;
                            var9 = Object.create(var9, {constructor: {value: var8}});
                            var24 = var9;
                            var8 = new var24[var8](var23);
                            var9 = var8 instanceof Object ? var8 : var9;
                            _fun0038_ip = 459; continue _fun0038;
case 805:
                            var9 = _closure2_slot99;
case 459:
                            var8 = var9.has;
                            var3 = var1.id;
                            var3 = var8.bind(var9)(var3);
                            if(!(var4 === var3)) { _fun0038_ip = 807; continue _fun0038 }
case 799:
                            var8 = _closure2_slot1;
                            var3 = var8.isForumPost;
                            var3 = var3.bind(var8)();
                            if(!var3) { _fun0038_ip = 808; continue _fun0038 }
case 464:
                            var3 = _closure3_slot10;
                            if(var3) { _fun0038_ip = 809; continue _fun0038 }
case 810:
                            var3 = _closure3_slot11;
                            if(!var3) { _fun0038_ip = 808; continue _fun0038 }
case 809:
                            var8 = var1.id;
                            var10 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var3 = 102;
                            var9 = var9[var3];
                            var3 = undefined;
                            var10 = var10.bind(var3)(var9);
                            var9 = var10.castChannelIdAsMessageId;
                            var3 = _closure2_slot7;
                            var3 = var9.bind(var10)(var3);
                            if(!(var8 !== var3)) { _fun0038_ip = 811; continue _fun0038 }
case 808:
                            var3 = _closure3_slot14;
                            if(!var3) { _fun0038_ip = 812; continue _fun0038 }
case 813:
                            var8 = var1.activityInstance;
                            var3 = null;
                            if(!(var3 == var8)) { _fun0038_ip = 814; continue _fun0038 }
case 812:
                            var3 = _closure3_slot15;
                            if(!var3) { _fun0038_ip = 815; continue _fun0038 }
case 816:
                            var10 = var1.activity;
                            var9 = null;
                            var11 = var9 == var10;
                            var8 = undefined;
                            if(var11) { _fun0038_ip = 817; continue _fun0038 }
case 818:
                            var8 = var10.party_id;
case 817:
                            var3 = var9 != var8;
case 815:
                            if(!var3) { _fun0038_ip = 819; continue _fun0038 }
case 820:
                            var9 = _closure3_slot24;
                            var8 = var9.add;
                            var3 = var1.id;
                            var3 = var8.bind(var9)(var3);
case 819:
                            var3 = _closure3_slot23;
                            if(!var3) { _fun0038_ip = 821; continue _fun0038 }
case 469:
                            var8 = var1.application;
                            var3 = null;
                            if(!(var3 == var8)) { _fun0038_ip = 610; continue _fun0038 }
case 821:
                            var3 = _closure3_slot20;
                            if(var3) { _fun0038_ip = 822; continue _fun0038 }
case 823:
                            var3 = _closure3_slot22;
                            if(!var3) { _fun0038_ip = 475; continue _fun0038 }
case 822:
                            var9 = var1.activity;
                            var8 = null;
                            var10 = var8 == var9;
                            var3 = undefined;
                            if(var10) { _fun0038_ip = 824; continue _fun0038 }
case 825:
                            var3 = var9.party_id;
case 824:
                            if(!(var8 != var3)) { _fun0038_ip = 475; continue _fun0038 }
case 826:
                            var9 = _closure3_slot24;
                            var8 = var9.add;
                            var3 = var1.id;
                            var3 = var8.bind(var9)(var3);
case 475:
                            var3 = var1.author;
                            var10 = null;
                            if(!(var10 != var3)) { _fun0038_ip = 827; continue _fun0038 }
case 828:
                            var20 = {};
                            var3 = _closure2_slot139;
                            var9 = var10 == var3;
                            var8 = undefined;
                            var3 = undefined;
                            if(var9) { _fun0038_ip = 829; continue _fun0038 }
case 830:
                            var9 = _closure2_slot139;
                            var3 = var9.messageAuthorActivities;
case 829:
                            if(!(var10 == var3)) { _fun0038_ip = 831; continue _fun0038 }
case 832:
                            var3 = {};
case 831:
                            var20['messageAuthorActivities'] = var3;
                            var19 = {};
                            var3 = _closure2_slot22;
                            if(!(var10 == var3)) { _fun0038_ip = 833; continue _fun0038 }
case 834:
                            var3 = {};
                            _fun0038_ip = 835; continue _fun0038;
case 833:
                            var3 = _closure2_slot22;
case 835:
                            var19['messageAuthorActivities'] = var3;
                            var18 = {};
                            var3 = _closure2_slot139;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0038_ip = 836; continue _fun0038 }
case 837:
                            var9 = _closure2_slot139;
                            var3 = var9.invites;
case 836:
                            if(!(var10 == var3)) { _fun0038_ip = 838; continue _fun0038 }
case 839:
                            var9 = global;
                            var9 = var9.Map;
                            var11 = var9.prototype;
                            var11 = Object.create(var11, {constructor: {value: var9}});
                            var24 = var11;
                            var9 = new var24[var9](var23);
                            var3 = var9 instanceof Object ? var9 : var11;
case 838:
                            var18['invites'] = var3;
                            var3 = _closure2_slot139;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0038_ip = 840; continue _fun0038 }
case 841:
                            var9 = _closure2_slot139;
                            var3 = var9.appDirectoryEmbedApplications;
case 840:
                            if(!(var10 == var3)) { _fun0038_ip = 842; continue _fun0038 }
case 843:
                            var3 = {};
case 842:
                            var18['appDirectoryEmbedApplications'] = var3;
                            var3 = _closure2_slot139;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0038_ip = 844; continue _fun0038 }
case 845:
                            var9 = _closure2_slot139;
                            var3 = var9.invalidAppDirectoryEmbedApplicationIds;
case 844:
                            if(!(var10 == var3)) { _fun0038_ip = 846; continue _fun0038 }
case 847:
                            var9 = global;
                            var9 = var9.Set;
                            var11 = var9.prototype;
                            var11 = Object.create(var11, {constructor: {value: var9}});
                            var24 = var11;
                            var9 = new var24[var9](var23);
                            var3 = var9 instanceof Object ? var9 : var11;
case 846:
                            var18['invalidAppDirectoryEmbedApplicationIds'] = var3;
                            var3 = _closure2_slot139;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0038_ip = 848; continue _fun0038 }
case 849:
                            var9 = _closure2_slot139;
                            var3 = var9.invalidApplicationIds;
case 848:
                            if(!(var10 == var3)) { _fun0038_ip = 850; continue _fun0038 }
case 851:
                            var3 = new Array(0);
case 850:
                            var18['invalidApplicationIds'] = var3;
                            var3 = _closure2_slot139;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0038_ip = 852; continue _fun0038 }
case 853:
                            var9 = _closure2_slot139;
                            var3 = var9.activityParticipants;
case 852:
                            if(!(var10 == var3)) { _fun0038_ip = 854; continue _fun0038 }
case 855:
                            var3 = new Array(0);
case 854:
                            var18['activityParticipants'] = var3;
                            var3 = _closure2_slot139;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0038_ip = 856; continue _fun0038 }
case 857:
                            var9 = _closure2_slot139;
                            var3 = var9.applicationAssetFetchingIds;
case 856:
                            if(!(var10 == var3)) { _fun0038_ip = 858; continue _fun0038 }
case 859:
                            var3 = new Array(0);
case 858:
                            var18['applicationAssetFetchingIds'] = var3;
                            var3 = _closure2_slot139;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0038_ip = 860; continue _fun0038 }
case 861:
                            var9 = _closure2_slot139;
                            var3 = var9.appDirectoryEmbedApplicationFetchStates;
case 860:
                            if(!(var10 == var3)) { _fun0038_ip = 862; continue _fun0038 }
case 863:
                            var3 = {};
case 862:
                            var18['appDirectoryEmbedApplicationFetchStates'] = var3;
                            var3 = _closure2_slot139;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0038_ip = 864; continue _fun0038 }
case 865:
                            var9 = _closure2_slot139;
                            var3 = var9.guildTemplates;
case 864:
                            if(!(var10 == var3)) { _fun0038_ip = 866; continue _fun0038 }
case 867:
                            var9 = global;
                            var9 = var9.Map;
                            var11 = var9.prototype;
                            var11 = Object.create(var11, {constructor: {value: var9}});
                            var24 = var11;
                            var9 = new var24[var9](var23);
                            var3 = var9 instanceof Object ? var9 : var11;
case 866:
                            var18['guildTemplates'] = var3;
                            var3 = _closure2_slot139;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0038_ip = 868; continue _fun0038 }
case 869:
                            var9 = _closure2_slot139;
                            var3 = var9.buildOverrides;
case 868:
                            if(!(var10 == var3)) { _fun0038_ip = 870; continue _fun0038 }
case 871:
                            var3 = {};
case 870:
                            var18['buildOverrides'] = var3;
                            var3 = _closure2_slot139;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0038_ip = 872; continue _fun0038 }
case 873:
                            var9 = _closure2_slot139;
                            var3 = var9.experimentEmbeds;
case 872:
                            if(!(var10 == var3)) { _fun0038_ip = 874; continue _fun0038 }
case 875:
                            var3 = {};
case 874:
                            var18['experimentEmbeds'] = var3;
                            var3 = _closure2_slot139;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0038_ip = 876; continue _fun0038 }
case 508:
                            var9 = _closure2_slot139;
                            var3 = var9.quests;
case 876:
                            if(!(var10 == var3)) { _fun0038_ip = 877; continue _fun0038 }
case 878:
                            var3 = new Array(0);
case 877:
                            var18['quests'] = var3;
                            var3 = _closure2_slot139;
                            var3 = var10 == var3;
                            var9 = undefined;
                            if(var3) { _fun0038_ip = 879; continue _fun0038 }
case 880:
                            var3 = _closure2_slot139;
                            var9 = var3.isFetchingCurrentQuests;
case 879:
                            var3 = var10 != var9;
                            if(!var3) { _fun0038_ip = 881; continue _fun0038 }
case 882:
                            var3 = var9;
case 881:
                            var18['isFetchingCurrentQuests'] = var3;
                            var17 = {};
                            var3 = _closure2_slot24;
                            if(!(var10 == var3)) { _fun0038_ip = 883; continue _fun0038 }
case 884:
                            var3 = global;
                            var3 = var3.Map;
                            var9 = var3.prototype;
                            var9 = Object.create(var9, {constructor: {value: var3}});
                            var24 = var9;
                            var3 = new var24[var3](var23);
                            var3 = var3 instanceof Object ? var3 : var9;
                            _fun0038_ip = 885; continue _fun0038;
case 883:
                            var3 = _closure2_slot24;
case 885:
                            var17['invites'] = var3;
                            var3 = _closure2_slot25;
                            if(!(var10 == var3)) { _fun0038_ip = 886; continue _fun0038 }
case 887:
                            var3 = {};
                            _fun0038_ip = 888; continue _fun0038;
case 886:
                            var3 = _closure2_slot25;
case 888:
                            var17['appDirectoryEmbedApplications'] = var3;
                            var3 = _closure2_slot26;
                            if(!(var10 == var3)) { _fun0038_ip = 889; continue _fun0038 }
case 523:
                            var3 = global;
                            var3 = var3.Set;
                            var9 = var3.prototype;
                            var9 = Object.create(var9, {constructor: {value: var3}});
                            var24 = var9;
                            var3 = new var24[var3](var23);
                            var3 = var3 instanceof Object ? var3 : var9;
                            _fun0038_ip = 890; continue _fun0038;
case 889:
                            var3 = _closure2_slot26;
case 890:
                            var17['invalidAppDirectoryEmbedApplicationIds'] = var3;
                            var3 = _closure2_slot28;
                            if(!(var10 == var3)) { _fun0038_ip = 891; continue _fun0038 }
case 892:
                            var3 = new Array(0);
                            _fun0038_ip = 893; continue _fun0038;
case 891:
                            var3 = _closure2_slot28;
case 893:
                            var17['invalidApplicationIds'] = var3;
                            var3 = _closure2_slot32;
                            if(!(var10 == var3)) { _fun0038_ip = 531; continue _fun0038 }
case 894:
                            var3 = new Array(0);
                            _fun0038_ip = 895; continue _fun0038;
case 531:
                            var3 = _closure2_slot32;
case 895:
                            var17['activityParticipants'] = var3;
                            var3 = _closure2_slot29;
                            if(!(var10 == var3)) { _fun0038_ip = 896; continue _fun0038 }
case 897:
                            var3 = new Array(0);
                            _fun0038_ip = 898; continue _fun0038;
case 896:
                            var3 = _closure2_slot29;
case 898:
                            var17['applicationAssetFetchingIds'] = var3;
                            var3 = _closure2_slot27;
                            if(!(var10 == var3)) { _fun0038_ip = 899; continue _fun0038 }
case 900:
                            var3 = {};
                            _fun0038_ip = 901; continue _fun0038;
case 899:
                            var3 = _closure2_slot27;
case 901:
                            var17['appDirectoryEmbedApplicationFetchStates'] = var3;
                            var3 = _closure2_slot35;
                            if(!(var10 == var3)) { _fun0038_ip = 902; continue _fun0038 }
case 903:
                            var3 = global;
                            var3 = var3.Map;
                            var9 = var3.prototype;
                            var9 = Object.create(var9, {constructor: {value: var3}});
                            var24 = var9;
                            var3 = new var24[var3](var23);
                            var3 = var3 instanceof Object ? var3 : var9;
                            _fun0038_ip = 904; continue _fun0038;
case 902:
                            var3 = _closure2_slot35;
case 904:
                            var17['guildTemplates'] = var3;
                            var3 = _closure2_slot36;
                            if(!(var10 == var3)) { _fun0038_ip = 905; continue _fun0038 }
case 906:
                            var3 = {};
                            _fun0038_ip = 907; continue _fun0038;
case 905:
                            var3 = _closure2_slot36;
case 907:
                            var17['buildOverrides'] = var3;
                            var3 = _closure2_slot37;
                            if(!(var10 == var3)) { _fun0038_ip = 908; continue _fun0038 }
case 909:
                            var3 = {};
                            _fun0038_ip = 910; continue _fun0038;
case 908:
                            var3 = _closure2_slot37;
case 910:
                            var17['experimentEmbeds'] = var3;
                            var3 = _closure2_slot38;
                            if(!(var10 == var3)) { _fun0038_ip = 911; continue _fun0038 }
case 912:
                            var3 = new Array(0);
                            _fun0038_ip = 913; continue _fun0038;
case 911:
                            var3 = _closure2_slot38;
case 913:
                            var17['quests'] = var3;
                            var3 = _closure2_slot39;
                            var3 = var10 != var3;
                            if(!var3) { _fun0038_ip = 914; continue _fun0038 }
case 915:
                            var3 = _closure2_slot39;
case 914:
                            var17['isFetchingCurrentQuests'] = var3;
                            var16 = {};
                            var3 = _closure2_slot139;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0038_ip = 916; continue _fun0038 }
case 917:
                            var9 = _closure2_slot139;
                            var3 = var9.resolvingGiftCodes;
case 916:
                            if(!(var10 == var3)) { _fun0038_ip = 918; continue _fun0038 }
case 550:
                            var3 = new Array(0);
case 918:
                            var16['resolvingGiftCodes'] = var3;
                            var3 = _closure2_slot139;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0038_ip = 919; continue _fun0038 }
case 920:
                            var9 = _closure2_slot139;
                            var3 = var9.resolvedGiftCodes;
case 919:
                            if(!(var10 == var3)) { _fun0038_ip = 921; continue _fun0038 }
case 922:
                            var3 = new Array(0);
case 921:
                            var16['resolvedGiftCodes'] = var3;
                            var3 = _closure2_slot139;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0038_ip = 923; continue _fun0038 }
case 924:
                            var9 = _closure2_slot139;
                            var3 = var9.acceptingGiftCodes;
case 923:
                            if(!(var10 == var3)) { _fun0038_ip = 554; continue _fun0038 }
case 925:
                            var3 = new Array(0);
case 554:
                            var16['acceptingGiftCodes'] = var3;
                            var15 = {};
                            var3 = _closure2_slot52;
                            if(!(var10 == var3)) { _fun0038_ip = 926; continue _fun0038 }
case 927:
                            var3 = new Array(0);
                            _fun0038_ip = 553; continue _fun0038;
case 926:
                            var3 = _closure2_slot52;
case 553:
                            var15['resolvingGiftCodes'] = var3;
                            var3 = _closure2_slot53;
                            if(!(var10 == var3)) { _fun0038_ip = 928; continue _fun0038 }
case 557:
                            var3 = new Array(0);
                            _fun0038_ip = 556; continue _fun0038;
case 928:
                            var3 = _closure2_slot53;
case 556:
                            var15['resolvedGiftCodes'] = var3;
                            var3 = _closure2_slot54;
                            if(!(var10 == var3)) { _fun0038_ip = 929; continue _fun0038 }
case 930:
                            var3 = new Array(0);
                            _fun0038_ip = 931; continue _fun0038;
case 929:
                            var3 = _closure2_slot54;
case 931:
                            var15['acceptingGiftCodes'] = var3;
                            var13 = {};
                            var3 = _closure2_slot139;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0038_ip = 932; continue _fun0038 }
case 933:
                            var9 = _closure2_slot139;
                            var3 = var9.mediaPostPreviewEmbeds;
case 932:
                            if(!(var10 == var3)) { _fun0038_ip = 934; continue _fun0038 }
case 935:
                            var3 = {};
case 934:
                            var13['mediaPostPreviewEmbeds'] = var3;
                            var12 = {};
                            var3 = _closure2_slot34;
                            if(!(var10 == var3)) { _fun0038_ip = 936; continue _fun0038 }
case 937:
                            var3 = {};
                            _fun0038_ip = 938; continue _fun0038;
case 936:
                            var3 = _closure2_slot34;
case 938:
                            var12['mediaPostPreviewEmbeds'] = var3;
                            var11 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var14 = 103;
                            var9 = var9[var14];
                            var11 = var11.bind(var8)(var9);
                            var9 = var11.messageAuthorActivitiesChanged;
                            var9 = var9.bind(var11)(var1, var20, var19);
                            if(var9) { _fun0038_ip = 606; continue _fun0038 }
case 939:
                            var11 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var9 = var9[var14];
                            var11 = var11.bind(var8)(var9);
                            var9 = var11.codedLinksChanged;
                            var9 = var9.bind(var11)(var1, var18, var17);
                            if(var9) { _fun0038_ip = 606; continue _fun0038 }
case 940:
                            var9 = _closure3_slot0;
                            if(!var9) { _fun0038_ip = 941; continue _fun0038 }
case 942:
                            var11 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var9 = var9[var14];
                            var11 = var11.bind(var8)(var9);
                            var9 = var11.giftCodesChanged;
                            var9 = var9.bind(var11)(var1, var16, var15);
                            if(var9) { _fun0038_ip = 606; continue _fun0038 }
case 941:
                            var11 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var9 = var9[var14];
                            var11 = var11.bind(var8)(var9);
                            var9 = var11.mediaPostPreviewEmbedsChanged;
                            var9 = var9.bind(var11)(var1, var13, var12);
                            if(var9) { _fun0038_ip = 606; continue _fun0038 }
case 943:
                            var9 = _closure3_slot30;
                            if(!var9) { _fun0038_ip = 944; continue _fun0038 }
case 58:
                            var11 = var1.embeds;
                            var12 = var11.length;
                            var11 = 0;
                            var9 = var12 > var11;
case 944:
                            if(!var9) { _fun0038_ip = 579; continue _fun0038 }
case 945:
                            var12 = _closure3_slot24;
                            var11 = var12.add;
                            var9 = var1.id;
                            var9 = var11.bind(var12)(var9);
case 579:
                            var9 = var1.type;
                            var3 = _closure1_slot57;
                            var3 = var3.THREAD_STARTER_MESSAGE;
                            var3 = var9 === var3;
                            if(!var3) { _fun0038_ip = 946; continue _fun0038 }
case 947:
                            var9 = _closure2_slot139;
                            var9 = var10 == var9;
                            var11 = undefined;
                            if(var9) { _fun0038_ip = 948; continue _fun0038 }
case 949:
                            var9 = _closure2_slot139;
                            var11 = var9.threadStartingReferenceMessage;
case 948:
                            var9 = _closure2_slot51;
                            var3 = var11 !== var9;
case 946:
                            if(!var3) { _fun0038_ip = 950; continue _fun0038 }
case 951:
                            var11 = _closure3_slot24;
                            var9 = var11.add;
                            var3 = var1.id;
                            var3 = var9.bind(var11)(var3);
case 950:
                            var3 = _closure3_slot13;
                            if(!var3) { _fun0038_ip = 585; continue _fun0038 }
case 952:
                            var9 = var1.applicationId;
                            var3 = var10 != var9;
case 585:
                            if(!var3) { _fun0038_ip = 953; continue _fun0038 }
case 954:
                            var9 = _closure2_slot139;
                            var9 = var10 == var9;
                            var12 = undefined;
                            if(var9) { _fun0038_ip = 955; continue _fun0038 }
case 956:
                            var9 = _closure2_slot139;
                            var12 = var9.invalidApplicationIds;
case 955:
                            if(!(var10 == var12)) { _fun0038_ip = 588; continue _fun0038 }
case 957:
                            var12 = new Array(0);
case 588:
                            var11 = var12.includes;
                            var9 = var1.applicationId;
                            var3 = var11.bind(var12)(var9);
case 953:
                            if(!var3) { _fun0038_ip = 958; continue _fun0038 }
case 959:
                            var11 = _closure3_slot24;
                            var9 = var11.add;
                            var3 = var1.id;
                            var3 = var9.bind(var11)(var3);
case 958:
                            var3 = _closure3_slot16;
                            if(!var3) { _fun0038_ip = 960; continue _fun0038 }
case 961:
                            var12 = var1.referralTrialOfferId;
                            var3 = var10 != var12;
                            if(!var3) { _fun0038_ip = 962; continue _fun0038 }
case 963:
                            var11 = _closure2_slot41;
                            var9 = var11.includes;
                            var3 = var9.bind(var11)(var12);
case 962:
                            if(!var3) { _fun0038_ip = 960; continue _fun0038 }
case 964:
                            var11 = _closure3_slot24;
                            var9 = var11.add;
                            var3 = var1.id;
                            var3 = var9.bind(var11)(var3);
case 960:
                            var3 = _closure3_slot17;
                            if(!var3) { _fun0038_ip = 965; continue _fun0038 }
case 966:
                            var9 = var1.codedLinks;
                            var11 = var9.length;
                            var9 = 0;
                            var3 = var11 > var9;
case 965:
                            if(!var3) { _fun0038_ip = 967; continue _fun0038 }
case 968:
                            var11 = _closure3_slot24;
                            var9 = var11.add;
                            var3 = var1.id;
                            var3 = var9.bind(var11)(var3);
case 967:
                            var3 = _closure3_slot19;
                            if(!var3) { _fun0038_ip = 969; continue _fun0038 }
case 970:
                            var9 = var1.author;
                            var10 = var10 == var9;
                            var8 = undefined;
                            if(var10) { _fun0038_ip = 971; continue _fun0038 }
case 972:
                            var8 = var9.id;
case 971:
                            var4 = _closure2_slot11;
                            var3 = var8 === var4;
case 969:
                            if(!var3) { _fun0038_ip = 827; continue _fun0038 }
case 973:
                            var8 = _closure3_slot24;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0038_ip = 827; continue _fun0038;
case 606:
                            var8 = _closure3_slot24;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0038_ip = 827; continue _fun0038;
case 610:
                            var8 = _closure3_slot24;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0038_ip = 827; continue _fun0038;
case 814:
                            var8 = _closure3_slot24;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0038_ip = 827; continue _fun0038;
case 811:
                            var8 = _closure3_slot24;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0038_ip = 827; continue _fun0038;
case 807:
                            var8 = _closure3_slot24;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            var3 = undefined;
                            return var3;
case 798:
                            var8 = _closure3_slot24;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            var3 = undefined;
                            return var3;
case 787:
                            var8 = _closure3_slot24;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            var3 = undefined;
                            return var3;
case 779:
                            var8 = _closure3_slot24;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0038_ip = 827; continue _fun0038;
case 777:
                            var8 = _closure3_slot24;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            var3 = undefined;
                            return var3;
case 769:
                            var8 = _closure3_slot24;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            var3 = undefined;
                            return var3;
case 763:
                            var8 = _closure3_slot24;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0038_ip = 827; continue _fun0038;
case 761:
                            var4 = _closure2_slot75;
                            var3 = var1.author;
                            var3 = var3.id;
                            var4 = var4[var3];
                            var3 = _closure2_slot139;
                            var8 = var5 == var3;
                            var3 = undefined;
                            if(var8) { _fun0038_ip = 974; continue _fun0038 }
case 975:
                            var6 = _closure2_slot139;
                            var6 = var6.messageAuthorMembers;
                            var5 = var5 == var6;
                            var3 = undefined;
                            if(var5) { _fun0038_ip = 974; continue _fun0038 }
case 636:
                            var5 = var1.author;
                            var5 = var5.id;
                            var3 = var6[var5];
case 974:
                            if(!(var4 !== var3)) { _fun0038_ip = 827; continue _fun0038 }
case 976:
                            var5 = _closure3_slot24;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0038_ip = 827; continue _fun0038;
case 754:
                            var5 = _closure3_slot24;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0038_ip = 827; continue _fun0038;
case 753:
                            var5 = _closure3_slot24;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0038_ip = 827; continue _fun0038;
case 751:
                            var5 = _closure3_slot24;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0038_ip = 827; continue _fun0038;
case 644:
                            var5 = _closure3_slot24;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0038_ip = 827; continue _fun0038;
case 747:
                            var5 = _closure3_slot24;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            var3 = undefined;
                            return var3;
case 743:
                            var5 = _closure3_slot24;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0038_ip = 827; continue _fun0038;
case 742:
                            var3 = _closure3_slot24;
                            var2 = var3.add;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
case 827:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var6.bind(var17)(var3);
                    var3 = _closure2_slot142;
                    var3 = var5 == var3;
                    var6 = undefined;
                    if(var3) { _fun0037_ip = 977; continue _fun0037 }
case 978:
                    var3 = _closure2_slot142;
                    var6 = var3.channelId;
case 977:
                    var3 = _closure2_slot6;
                    var3 = var3.channelId;
                    var6 = var6 !== var3;
                    if(var6) { _fun0037_ip = 979; continue _fun0037 }
case 980:
                    var3 = _closure2_slot142;
                    var3 = var5 == var3;
                    var5 = undefined;
                    if(var3) { _fun0037_ip = 981; continue _fun0037 }
case 982:
                    var3 = _closure2_slot142;
                    var5 = var3.suppressRowAnimationSequenceId;
case 981:
                    var3 = _closure2_slot6;
                    var3 = var3.suppressRowAnimationSequenceId;
                    var6 = var5 === var3;
case 979:
                    var5 = _closure2_slot130;
                    var3 = {};
                    var3['forceRender'] = var16;
                    var3['forceReload'] = var15;
                    var3['updateMessageIds'] = var14;
                    var3['scrollToMessageId'] = var13;
                    var3['jumpTargetId'] = var12;
                    var3['jumpType'] = var11;
                    var3['focusTargetId'] = var10;
                    var3['ignoreEmbedDescriptionCache'] = var9;
                    var9 = _closure2_slot143;
                    var3['messagesNewlyLoaded'] = var9;
                    var3['shouldInitialScroll'] = var8;
                    var3['minimizeScrolling'] = var7;
                    var3['isAnimated'] = var6;
                    var3 = var5.bind(var4)(var3);
                    var5 = _closure2_slot119;
                    var3 = false;
                    var3 = var5.bind(var4)(var3);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 86;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.recordTimings;
                    var2 = _closure2_slot7;
                    var1 = _closure2_slot6;
                    var1 = var3.bind(var4)(var2, var1);
case 385:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var40.bind(var41)(var5, var33);
            var5 = _closure1_slot5;
            var40 = var5.useEffect;
            var33 = new Array(2);
            var33[0] = var10;
            var33[1] = var18;
            var18 = function() {
                var1 = function() {
                    var5 = _closure1_slot13;
                    var4 = _closure2_slot7;
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    var2 = false;
                    var2 = var5.bind(var1)(var4, var3, var2);
                    return var1;
                };
                return var1;
            };
            var18 = var40.bind(var5)(var18, var33);
            var33 = var5.useImperativeHandle;
            var18 = new Array(15);
            var18[0] = var19;
            var18[1] = var22;
            var18[2] = var39;
            var18[3] = var32;
            var18[4] = var9;
            var18[5] = var8;
            var18[6] = var10;
            var18[7] = var38;
            var18[8] = var37;
            var18[9] = var36;
            var18[10] = var35;
            var18[11] = var34;
            var18[12] = var7;
            var18[13] = var15;
            var18[14] = var13;
            var15 = arg2;
            var13 = function() {
                var1 = {};
                var4 = _closure2_slot129;
                var1['findMessageIndex'] = var4;
                var4 = _closure2_slot130;
                var1['updateRows'] = var4;
                var4 = _closure2_slot131;
                var1['scrollToMessageId'] = var4;
                var4 = function scrollToBottom() {
                    _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                        var7 = arguments[0];
                        var1 = undefined;
                        if(!(var7 === var1)) { _fun0039_ip = 102; continue _fun0039 }
case 983:
                        var7 = true;
case 102:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 86;
                        var2 = var4[var2];
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.scrollToBottom;
                        var11 = _closure2_slot109;
                        var10 = _closure2_slot58;
                        var9 = _closure2_slot137;
                        var12 = var6;
                        var8 = var7;
                        var2 = var12[var5](var11, var10, var9, var8, var7);
                        return var1;
                    }
                };
                var1['scrollToBottom'] = var4;
                var4 = function scrollToTop() {
                    _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                        var5 = arguments[0];
                        var3 = undefined;
                        if(!(var5 === var3)) { _fun0040_ip = 102; continue _fun0040 }
case 983:
                        var5 = true;
case 102:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 86;
                        var1 = var4[var1];
                        var4 = var2.bind(var3)(var1);
                        var3 = var4.scrollToTop;
                        var2 = _closure2_slot109;
                        var1 = _closure2_slot58;
                        var1 = var3.bind(var4)(var2, var1, var5);
                        return var1;
                    }
                };
                var1['scrollToTop'] = var4;
                var4 = function scrollToRelativeOffset(arg1) {
                    _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                        var6 = arguments[1];
                        var3 = undefined;
                        if(!(var6 === var3)) { _fun0041_ip = 102; continue _fun0041 }
case 983:
                        var6 = true;
case 102:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 86;
                        var1 = var4[var1];
                        var5 = var2.bind(var3)(var1);
                        var4 = var5.scrollToRelativeOffset;
                        var10 = _closure2_slot109;
                        var9 = _closure2_slot58;
                        var8 = arg1;
                        var11 = var5;
                        var7 = var6;
                        var1 = var11[var4](var10, var9, var8, var7, var6);
                        return var1;
                    }
                };
                var1['scrollToRelativeOffset'] = var4;
                var4 = function scrollToTopMessage() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 86;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.scrollToTopMessage;
                    var2 = _closure2_slot109;
                    var1 = _closure2_slot120;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1['scrollToTopMessage'] = var4;
                var4 = function jumpToPresent() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 86;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.jumpToPresent;
                    var4 = _closure2_slot6;
                    var3 = _closure2_slot1;
                    var2 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 86;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var6 = var7.scrollToBottom;
                        var11 = _closure2_slot109;
                        var10 = _closure2_slot58;
                        var9 = _closure2_slot137;
                        var8 = true;
                        var12 = var7;
                        var2 = var12[var6](var11, var10, var9, var8, var7);
                        return var1;
                    };
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                };
                var1['jumpToPresent'] = var4;
                var4 = function scrollToNewMessages() {
                    _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 86;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.scrollToNewMessages;
                        var1 = {};
                        var5 = _closure2_slot1;
                        var1['channel'] = var5;
                        var5 = _closure2_slot7;
                        var1['channelId'] = var5;
                        var5 = _closure2_slot6;
                        var1['messages'] = var5;
                        var5 = _closure2_slot117;
                        var1['hasJumpedToOriginalPost'] = var5;
                        var5 = _closure2_slot58;
                        var1['useReducedMotion'] = var5;
                        var6 = _closure2_slot46;
                        var5 = null;
                        var6 = var5 != var6;
                        if(!var6) { _fun0042_ip = 11; continue _fun0042 }
case 160:
                        var5 = _closure2_slot46;
case 11:
                        var1['oldestUnreadMessageId'] = var5;
                        var6 = _closure2_slot120;
                        var5 = var6.getPreviousRows;
                        var5 = var5.bind(var6)();
                        var1['chatManagerRows'] = var5;
                        var5 = _closure2_slot129;
                        var1['findMessageIndex'] = var5;
                        var4 = _closure2_slot109;
                        var1['chatRef'] = var4;
                        var4 = function loadMoreBefore() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 86;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.loadMoreBefore;
                            var3 = _closure2_slot7;
                            var2 = _closure2_slot6;
                            var1 = function(arg1) {
                                var3 = _closure2_slot111;
                                var2 = {};
                                var1 = arg1;
                                var2['animated'] = var1;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var1;
                        };
                        var1['loadMoreBefore'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var1['scrollToNewMessages'] = var4;
                var3 = function getChatRef() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 86;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getChatRef;
                    var1 = _closure2_slot109;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['getChatRef'] = var3;
                var3 = _closure2_slot132;
                var1['maybeRescrollToMessageId'] = var3;
                var3 = _closure2_slot133;
                var1['clearRows'] = var3;
                var2 = _closure2_slot134;
                var1['getVisibleMessages'] = var2;
                return var1;
            };
            var13 = var33.bind(var5)(var15, var13, var18);
            var18 = var5.useCallback;
            var15 = _closure1_slot3;
            var13 = function* () {
                var1 = function* anon_0_() {
                    _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0043_ip = 984; continue _fun0043 }
case 985:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 86;
                        var2 = var3[var2];
                        var3 = undefined;
                        var5 = var4.bind(var3)(var2);
                        var4 = var5.handleTapNavBar;
                        var2 = {};
                        var7 = _closure2_slot1;
                        var2['channel'] = var7;
                        var7 = _closure2_slot58;
                        var2['useReducedMotion'] = var7;
                        var7 = _closure2_slot110;
                        var7 = var7.isNearTop;
                        var2['isNearTop'] = var7;
                        var7 = _closure2_slot6;
                        var2['messages'] = var7;
                        var7 = _closure2_slot129;
                        var2['findMessageIndex'] = var7;
                        var7 = function scrollToTop() {
                            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                                var5 = arguments[0];
                                var3 = undefined;
                                if(!(var5 === var3)) { _fun0044_ip = 102; continue _fun0044 }
case 983:
                                var5 = true;
case 102:
                                var2 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 86;
                                var1 = var4[var1];
                                var4 = var2.bind(var3)(var1);
                                var3 = var4.scrollToTop;
                                var2 = _closure2_slot109;
                                var1 = _closure2_slot58;
                                var1 = var3.bind(var4)(var2, var1, var5);
                                return var1;
                            }
                        };
                        var2['scrollToTop'] = var7;
                        var6 = _closure2_slot109;
                        var2['chatRef'] = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=128);
case 986:
                        return var2;
case 746:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0043_ip = 157; continue _fun0043 }
case 987:
                        return var3;
case 157:
                        return var2;
case 984:
                        return var1;
                    }
                };
                return var1;
            };
            var15 = var15.bind(var4)(var13);
            var13 = new Array(6);
            var13[0] = var8;
            var13[1] = var32;
            var31 = var31.isNearTop;
            var13[2] = var31;
            var13[3] = var9;
            var13[4] = var19;
            var13[5] = var27;
            var19 = var18.bind(var5)(var15, var13);
            var18 = var5.useCallback;
            var15 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var4 = var1.description;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 104;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var2['description'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var13 = new Array(0);
            var18 = var18.bind(var5)(var15, var13);
            var15 = var5.useCallback;
            var13 = new Array(3);
            var13[0] = var30;
            var13[1] = var22;
            var13[2] = var3;
            var3 = function(arg1) {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 105;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.getNativeSyntheticEventData;
                var2 = arg1;
                var2 = var5.bind(var6)(var2);
                var7 = var2.messageId;
                var2 = 86;
                var2 = var4[var2];
                var6 = var3.bind(var1)(var2);
                var5 = var6.handleLongPressSticker;
                var4 = _closure2_slot112;
                var3 = _closure2_slot130;
                var3 = var5.bind(var6)(var7, var4, var3);
                var2 = _closure2_slot113;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var22 = var15.bind(var5)(var3, var13);
            var13 = var5.useCallback;
            var3 = new Array(2);
            var3[0] = var14;
            var3[1] = var2;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 86;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.handleTapTableView;
                var2 = _closure2_slot3;
                var1 = _closure2_slot85;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var15 = var13.bind(var5)(var2, var3);
            var13 = var5.useCallback;
            var3 = new Array(6);
            var3[0] = var29;
            var3[1] = var28;
            var3[2] = var12;
            var3[3] = var10;
            var3[4] = var8;
            var3[5] = var7;
            var2 = function(arg1) {
                _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var7 = var1.firstVisibleMessageIndex;
                    var6 = var1.lastVisibleMessageIndex;
                    var5 = var1.firstVisibleMessagePercentVisible;
                    var4 = var1.lastVisibleMessagePercentVisible;
                    var2 = null;
                    var1 = var2 != var7;
                    if(!var1) { _fun0045_ip = 2; continue _fun0045 }
case 56:
                    var1 = var2 != var6;
case 2:
                    if(!var1) { _fun0045_ip = 94; continue _fun0045 }
case 5:
                    var1 = var2 != var5;
case 94:
                    if(!var1) { _fun0045_ip = 83; continue _fun0045 }
case 28:
                    var1 = var2 != var4;
case 83:
                    if(!var1) { _fun0045_ip = 386; continue _fun0045 }
case 86:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 86;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleFirstLayout;
                    var12 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 86;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.handleVisibleMessagesChange;
                        var1 = {};
                        var7 = arg1;
                        var8 = var1;
                        var4 = copyDataProperties(var8, var7);
                        var6 = _closure2_slot120;
                        var5 = 'chatManager';
                        var1[var5] = var6;
                        var6 = _closure2_slot89;
                        var5 = 'shouldTrackAnnouncementMessageViews';
                        var1[var5] = var6;
                        var6 = _closure2_slot90;
                        var5 = 'shouldTrackRichPresenceInviteEmbedViews';
                        var1[var5] = var6;
                        var6 = _closure2_slot8;
                        var5 = 'guildId';
                        var1[var5] = var6;
                        var6 = _closure2_slot7;
                        var5 = 'channelId';
                        var1[var5] = var6;
                        var5 = _closure2_slot1;
                        var4 = 'channel';
                        var1[var4] = var5;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var13 = var3;
                    var11 = var7;
                    var10 = var6;
                    var9 = var5;
                    var8 = var4;
                    var1 = var13[var2](var12, var11, var10, var9, var8, var7);
case 386:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var13.bind(var5)(var2, var3);
            var13 = var5.useCallback;
            var3 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 86;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.handleMediaPlayFinishedAnalytics;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = new Array(0);
            var13 = var13.bind(var5)(var3, var2);
            var3 = var5.useCallback;
            var2 = new Array(6);
            var2[0] = var29;
            var2[1] = var28;
            var2[2] = var12;
            var2[3] = var10;
            var2[4] = var8;
            var2[5] = var7;
            var1 = function(arg1) {
                _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var7 = var1.firstVisibleMessageIndex;
                    var6 = var1.lastVisibleMessageIndex;
                    var5 = var1.firstVisibleMessagePercentVisible;
                    var4 = var1.lastVisibleMessagePercentVisible;
                    var2 = null;
                    var1 = var2 != var7;
                    if(!var1) { _fun0046_ip = 2; continue _fun0046 }
case 56:
                    var1 = var2 != var6;
case 2:
                    if(!var1) { _fun0046_ip = 94; continue _fun0046 }
case 5:
                    var1 = var2 != var5;
case 94:
                    if(!var1) { _fun0046_ip = 83; continue _fun0046 }
case 28:
                    var1 = var2 != var4;
case 83:
                    if(!var1) { _fun0046_ip = 386; continue _fun0046 }
case 86:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 86;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleMessageVisibilityChanged;
                    var12 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 86;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.handleVisibleMessagesChange;
                        var1 = {};
                        var7 = arg1;
                        var8 = var1;
                        var4 = copyDataProperties(var8, var7);
                        var6 = _closure2_slot120;
                        var5 = 'chatManager';
                        var1[var5] = var6;
                        var6 = _closure2_slot89;
                        var5 = 'shouldTrackAnnouncementMessageViews';
                        var1[var5] = var6;
                        var6 = _closure2_slot90;
                        var5 = 'shouldTrackRichPresenceInviteEmbedViews';
                        var1[var5] = var6;
                        var6 = _closure2_slot8;
                        var5 = 'guildId';
                        var1[var5] = var6;
                        var6 = _closure2_slot7;
                        var5 = 'channelId';
                        var1[var5] = var6;
                        var5 = _closure2_slot1;
                        var4 = 'channel';
                        var1[var4] = var5;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var13 = var3;
                    var11 = var7;
                    var10 = var6;
                    var9 = var5;
                    var8 = var4;
                    var1 = var13[var2](var12, var11, var10, var9, var8, var7);
case 386:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot66;
            var2 = _closure1_slot65;
            var1 = {};
            var8 = _closure1_slot64;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 106;
            var5 = var10[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['ref'] = var27;
            var27 = true;
            var5['inverted'] = var27;
            var5['alwaysRespectKeyboard'] = var26;
            var5['style'] = var25;
            var5['roleStyle'] = var24;
            var5['onChatScrollPosition'] = var23;
            var23 = var17.handleTapImage;
            var5['onTapImage'] = var23;
            var23 = var17.handleTapChannel;
            var5['onTapChannel'] = var23;
            var23 = var17.handleLongPressChannel;
            var5['onLongPressChannel'] = var23;
            var23 = var17.handleTapAttachmentLink;
            var5['onTapAttachmentLink'] = var23;
            var23 = var17.handleLongPressAttachmentLink;
            var5['onLongPressAttachmentLink'] = var23;
            var23 = var17.handleTapCall;
            var5['onTapCall'] = var23;
            var23 = var17.handleTapMention;
            var5['onTapMention'] = var23;
            var23 = var17.handleTapCommandMention;
            var5['onTapCommandMention'] = var23;
            var23 = var17.handleLongPressCommandMention;
            var5['onLongPressCommandMention'] = var23;
            var23 = var17.handleTapLink;
            var5['onTapLink'] = var23;
            var23 = var17.handleLongPressLink;
            var5['onLongPressLink'] = var23;
            var23 = var17.handleTapReaction;
            var5['onTapReaction'] = var23;
            var23 = var17.handleLongPressReaction;
            var5['onLongPressReaction'] = var23;
            var23 = var17.handleTapAvatar;
            var5['onTapAvatar'] = var23;
            var23 = var17.handleTapUsername;
            var5['onTapUsername'] = var23;
            var23 = var17.handleLongPressUsername;
            var5['onLongPressUsername'] = var23;
            var23 = var17.handleOpenSticker;
            var5['onTapSticker'] = var23;
            var5['onLongPressSticker'] = var22;
            var22 = var17.handleLongPressMessage;
            var5['onLongPressMessage'] = var22;
            var22 = var17.handleInitiateReply;
            var5['onInitiateReply'] = var22;
            var22 = var17.handleInitiateEdit;
            var5['onInitiateEdit'] = var22;
            var22 = var17.handleInitiateThread;
            var5['onInitiateThread'] = var22;
            var22 = var17.handleTapMessage;
            var5['onTapMessage'] = var22;
            var22 = var17.handleDoubleTapMessage;
            var5['onDoubleTapMessage'] = var22;
            var22 = var17.handleTapSeparator;
            var5['onTapSeparator'] = var22;
            var22 = var17.handleTapInviteEmbed;
            var5['onTapInviteEmbed'] = var22;
            var22 = var17.handleTapInviteEmbedAccept;
            var5['onTapInviteEmbedAccept'] = var22;
            var22 = var17.handleTapJoinActivity;
            var5['onTapJoinActivity'] = var22;
            var22 = var17.handleTapJoinRichPresence;
            var5['onTapJoinRichPresence'] = var22;
            var5['onPressKey'] = var21;
            var5['animateEmoji'] = var20;
            var20 = var17.handleTapGiftCodeEmbed;
            var5['onTapGiftCodeEmbed'] = var20;
            var20 = var17.handleTapCancelUploadItem;
            var5['onTapCancelUploadItem'] = var20;
            var20 = var17.handleTapReply;
            var5['onTapMessageReply'] = var20;
            var20 = var17.handleTapSummary;
            var5['onTapSummary'] = var20;
            var20 = var17.handleTapSummaryJump;
            var5['onTapSummaryJump'] = var20;
            var20 = var17.handleTapGiftCodeAccept;
            var5['onTapGiftCodeAccept'] = var20;
            var20 = var17.handleTapReferralRedeem;
            var5['onTapReferralRedeem'] = var20;
            var20 = var17.handleTapThreadEmbed;
            var5['onTapThreadEmbed'] = var20;
            var20 = var17.handleTapEmoji;
            var5['onTapEmoji'] = var20;
            var20 = var17.handleTapTimestamp;
            var5['onTapTimestamp'] = var20;
            var20 = var17.handleTapInlineCode;
            var5['onTapInlineCode'] = var20;
            var20 = var17.handleTapRoleIcon;
            var5['onTapRoleIcon'] = var20;
            var20 = var17.handleTapGameIcon;
            var5['onTapGameIcon'] = var20;
            var20 = var17.handleTapSuppressNotificationsIcon;
            var5['onTapSuppressNotificationsIcon'] = var20;
            var20 = var17.handleTapConnectionsRoleTag;
            var5['onTapConnectionsRoleTag'] = var20;
            var20 = var17.handleTapTimeoutIcon;
            var5['onTapTimeoutIcon'] = var20;
            var20 = var17.handleTapButtonActionComponent;
            var5['onTapButtonActionComponent'] = var20;
            var20 = var17.handleTapSelectActionComponent;
            var5['onTapSelectActionComponent'] = var20;
            var20 = var17.handleTapWelcomeReply;
            var5['onTapWelcomeReply'] = var20;
            var20 = var17.handleTapInviteToSpeak;
            var5['onTapInviteToSpeak'] = var20;
            var20 = var17.handleTapAutoModerationActions;
            var5['onTapAutoModerationActions'] = var20;
            var20 = var17.handleTapAutoModerationFeedback;
            var5['onTapAutoModerationFeedback'] = var20;
            var20 = var17.handleTapFollowForumPost;
            var5['onTapFollowForumPost'] = var20;
            var20 = var17.handleTapShareForumPost;
            var5['onTapShareForumPost'] = var20;
            var20 = var17.handleTapReactionOverflow;
            var5['onTapReactionOverflow'] = var20;
            var5['onTapNavBar'] = var19;
            var19 = var17.handleCopyText;
            var5['onTapCopyText'] = var19;
            var19 = var17.handleTapOpTag;
            var5['onTapOpTag'] = var19;
            var19 = var17.handleTapTag;
            var5['onTapTag'] = var19;
            var19 = var17.handleMediaAttachmentPlaybackEnded;
            var5['onMediaAttachmentPlaybackEnded'] = var19;
            var19 = var17.handleMediaAttachmentPlaybackStarted;
            var5['onMediaAttachmentPlaybackStarted'] = var19;
            var19 = var17.handlerVoiceMessagePlaybackFailed;
            var5['onVoiceMessagePlaybackFailed'] = var19;
            var5['onTapShowAltText'] = var18;
            var18 = var17.handleTapPostPreviewEmbed;
            var5['onTapPostPreviewEmbed'] = var18;
            var18 = var17.handleTapDismissMediaPostSharePrompt;
            var5['onTapDismissMediaPostSharePrompt'] = var18;
            var18 = var17.handleTapChannelPromptButton;
            var5['onTapChannelPromptButton'] = var18;
            var18 = var17.handleTapObscuredMediaLearnMore;
            var5['onTapObscuredMediaLearnMore'] = var18;
            var18 = var17.handleTapObscuredMediaToggle;
            var5['onTapObscuredMediaToggle'] = var18;
            var18 = var17.handleTapSafetyPolicyNoticeEmbed;
            var5['onTapSafetyPolicyNoticeEmbed'] = var18;
            var18 = var17.handleTapSafetySystemNotificationCta;
            var5['onTapSafetySystemNotificationCta'] = var18;
            var18 = var17.handleTapPollAnswer;
            var5['onTapPollAnswer'] = var18;
            var18 = var17.handleTapPollSubmitVote;
            var5['onTapPollSubmitVote'] = var18;
            var18 = var17.handleTapPollAction;
            var5['onTapPollAction'] = var18;
            var18 = var17.handleLongPressPollImage;
            var5['onLongPressPollImage'] = var18;
            var18 = var17.handleTapCtaButton;
            var5['onTapCtaButton'] = var18;
            var18 = var17.handleMessageAccessibilityAction;
            var5['onMessageAccessibilityAction'] = var18;
            var18 = var17.handleTapForwardFooter;
            var5['onTapForwardFooter'] = var18;
            var18 = var17.handleTapInlineForward;
            var5['onTapInlineForward'] = var18;
            var18 = var17.handleTapClanTagChiplet;
            var5['onTapClanTagChiplet'] = var18;
            var18 = var17.handleTapContentInventoryEntryEmbed;
            var5['onTapContentInventoryEntryEmbed'] = var18;
            var18 = var17.handleTapCheckpointCard;
            var5['onTapCheckpointCard'] = var18;
            var18 = var17.handleTapSoundmoji;
            var5['onTapSoundmoji'] = var18;
            var18 = var17.handleTapAppMessageEmbed;
            var5['onTapAppMessageEmbed'] = var18;
            var18 = var17.handleTapSharedClientTheme;
            var5['onTapPreviewSharedClientTheme'] = var18;
            var17 = var17.handleSharedClientThemeViewed;
            var5['onSharedClientThemeViewed'] = var17;
            var5['HACK_fixModalInteraction'] = var16;
            var5['onTapTableView'] = var15;
            var5['onFirstLayout'] = var14;
            var5['onMediaPlayFinishedAnalytics'] = var13;
            var5['onMessageVisibilityChanged'] = var12;
            var5['children'] = var11;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = _closure1_slot0;
            var6 = 107;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.ChatTTITracker;
            var6 = {};
            var6['messages'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var7.bind(var8)(var2);
    var2['displayName'] = var4;
    var4 = 108;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/Messages.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
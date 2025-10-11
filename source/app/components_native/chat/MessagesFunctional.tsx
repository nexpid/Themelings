// app/components_native/chat/MessagesFunctional.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
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
            var9 = _closure1_slot63;
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
            var7 = _closure1_slot63;
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
    var _closure1_slot62 = var1;
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
    var _closure1_slot63 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.updateShouldShowJumpToPresentButton;
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot19 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot20 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot21 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot22 = var4;
    var4 = 20;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot23 = var4;
    var4 = 21;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot24 = var4;
    var4 = 22;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot25 = var4;
    var4 = 23;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useChannelPollInteractions;
    var _closure1_slot26 = var4;
    var4 = 24;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot27 = var4;
    var4 = 25;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot28 = var4;
    var4 = 26;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot29 = var4;
    var4 = 27;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot30 = var4;
    var4 = 28;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot31 = var4;
    var4 = 29;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot32 = var4;
    var4 = 30;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot33 = var4;
    var4 = 31;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot34 = var4;
    var4 = 32;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot35 = var4;
    var4 = 33;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot36 = var4;
    var4 = 34;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot37 = var4;
    var4 = 35;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot38 = var4;
    var4 = 36;
    var9 = var6[var4];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot39 = var9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getUserCommunicationDisabledVersion;
    var _closure1_slot40 = var4;
    var4 = 37;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot41 = var4;
    var4 = 38;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot42 = var4;
    var4 = 39;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot43 = var4;
    var4 = 40;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot44 = var4;
    var4 = 41;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot45 = var4;
    var4 = 42;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot46 = var4;
    var4 = 43;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot47 = var4;
    var4 = 44;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot48 = var4;
    var4 = 45;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot49 = var4;
    var4 = 46;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot50 = var4;
    var4 = 47;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.ChannelTypesSets;
    var _closure1_slot51 = var9;
    var9 = var4.MessageTypes;
    var _closure1_slot52 = var9;
    var9 = var4.MessageFlags;
    var _closure1_slot53 = var9;
    var9 = var4.Permissions;
    var _closure1_slot54 = var9;
    var4 = var4.ME;
    var _closure1_slot55 = var4;
    var4 = 48;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot56 = var9;
    var4 = var4.PremiumTypes;
    var _closure1_slot57 = var4;
    var4 = 49;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot58 = var9;
    var9 = var4.Fragment;
    var _closure1_slot59 = var9;
    var4 = var4.jsxs;
    var _closure1_slot60 = var4;
    var4 = 50;
    var4 = var6[var4];
    var9 = var8.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'Messages';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot61 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            r126 = arg1;
            var _closure2_slot0 = r126;
            var8 = r126.channel;
            var _closure2_slot1 = var8;
            var18 = r126.screenIndex;
            var _closure2_slot2 = var18;
            var14 = r126.chatInputRef;
            var _closure2_slot3 = var14;
            var23 = r126.isResourceChannel;
            var _closure2_slot4 = var23;
            var26 = r126.style;
            var24 = r126.visibleMessagesWindowHandler;
            var _closure2_slot5 = var24;
            var21 = r126.onPressKey;
            var11 = r126.children;
            var16 = r126.HACK_fixModalInteraction;
            var27 = r126.alwaysRespectKeyboard;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 51;
            var7 = var2[var3];
            var4 = undefined;
            var13 = var5.bind(var4)(var7);
            var12 = var13.useStateFromStores;
            var7 = _closure1_slot44;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = var8.id;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var3 = _closure1_slot44;
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
            var2 = _closure1_slot41;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot41;
                var2 = var3.getGuild;
                var1 = _closure2_slot8;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var34 = var7.bind(var13)(var5, var2);
            var _closure2_slot9 = var34;
            var5 = null;
            var2 = var5 == var34;
            var59 = undefined;
            if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var59 = var34.systemChannelFlags;
case 36:
            var _closure2_slot10 = var59;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = var17[var3];
            var20 = var15.bind(var4)(var2);
            var19 = var20.useStateFromStores;
            var2 = _closure1_slot36;
            var13 = new Array(1);
            var13[0] = var2;
            var7 = function() {
                var2 = _closure1_slot36;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var71 = var19.bind(var20)(var13, var7, var2);
            var _closure2_slot11 = var71;
            var2 = 52;
            var7 = var17[var2];
            var7 = var15.bind(var4)(var7);
            var13 = var7.InlineAttachmentMedia;
            var7 = var13.useSetting;
            var58 = var7.bind(var13)();
            var _closure2_slot12 = var58;
            var7 = var17[var2];
            var7 = var15.bind(var4)(var7);
            var13 = var7.InlineEmbedMedia;
            var7 = var13.useSetting;
            var57 = var7.bind(var13)();
            var _closure2_slot13 = var57;
            var7 = var17[var2];
            var7 = var15.bind(var4)(var7);
            var13 = var7.RenderEmbeds;
            var7 = var13.useSetting;
            var54 = var7.bind(var13)();
            var _closure2_slot14 = var54;
            var7 = var17[var2];
            var7 = var15.bind(var4)(var7);
            var13 = var7.RenderReactions;
            var7 = var13.useSetting;
            var53 = var7.bind(var13)();
            var _closure2_slot15 = var53;
            var7 = var17[var2];
            var7 = var15.bind(var4)(var7);
            var13 = var7.AnimateEmoji;
            var7 = var13.useSetting;
            var20 = var7.bind(var13)();
            var _closure2_slot16 = var20;
            var7 = var17[var2];
            var7 = var15.bind(var4)(var7);
            var13 = var7.AnimateStickers;
            var7 = var13.useSetting;
            var63 = var7.bind(var13)();
            var _closure2_slot17 = var63;
            var2 = var17[var2];
            var2 = var15.bind(var4)(var2);
            var7 = var2.GifAutoPlay;
            var2 = var7.useSetting;
            var61 = var2.bind(var7)();
            var _closure2_slot18 = var61;
            var2 = var17[var3];
            var22 = var15.bind(var4)(var2);
            var19 = var22.useStateFromStores;
            var2 = _closure1_slot35;
            var13 = new Array(1);
            var13[0] = var2;
            var7 = function() {
                var1 = _closure1_slot35;
                var1 = var1.theme;
                return var1;
            };
            var2 = new Array(0);
            var48 = var19.bind(var22)(var13, var7, var2);
            var _closure2_slot19 = var48;
            var2 = 53;
            var2 = var17[var2];
            var7 = var15.bind(var4)(var2);
            var2 = var7.useIsMessageSwipeActionsEnabled;
            var44 = var2.bind(var7)();
            var _closure2_slot20 = var44;
            var41 = 54;
            var2 = var17[var41];
            var7 = var15.bind(var4)(var2);
            var2 = var7.useMessageAuthorActivities;
            var100 = var2.bind(var7)(var9);
            var _closure2_slot21 = var100;
            var2 = var17[var41];
            var7 = var15.bind(var4)(var2);
            var2 = var7.useFetchMessageApplications;
            var2 = var2.bind(var7)(var9);
            var22 = _closure1_slot1;
            var2 = 55;
            var2 = var17[var2];
            var2 = var22.bind(var4)(var2);
            var2 = var2.bind(var4)(var9, var8);
            var19 = _closure1_slot4;
            var31 = 2;
            var2 = var19.bind(var4)(var2, var31);
            var13 = 0;
            var99 = var2[var13];
            var _closure2_slot22 = var99;
            var7 = 1;
            var2 = var2[var7];
            var2 = var17[var3];
            var30 = var15.bind(var4)(var2);
            var29 = var30.useStateFromStores;
            var2 = _closure1_slot43;
            var28 = new Array(1);
            var28[0] = var2;
            var25 = function() {
                var2 = _closure1_slot43;
                var1 = var2.getInvites;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var76 = var29.bind(var30)(var28, var25, var2);
            var _closure2_slot23 = var76;
            var2 = var17[var3];
            var30 = var15.bind(var4)(var2);
            var29 = var30.useStateFromStoresObject;
            var2 = _closure1_slot17;
            var28 = new Array(1);
            var28[0] = var2;
            var25 = function() {
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
            var2 = var29.bind(var30)(var28, var25, var2);
            var98 = var2.appDirectoryEmbedApplications;
            var _closure2_slot24 = var98;
            var97 = var2.invalidAppDirectoryEmbedApplicationIds;
            var _closure2_slot25 = var97;
            var96 = var2.appDirectoryEmbedApplicationFetchStates;
            var _closure2_slot26 = var96;
            var2 = var17[var3];
            var29 = var15.bind(var4)(var2);
            var28 = var29.useStateFromStoresArray;
            var2 = _closure1_slot9;
            var25 = new Array(1);
            var25[0] = var2;
            var2 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getFetchingOrFailedFetchingIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            r105 = var28.bind(var29)(var25, var2);
            var _closure2_slot27 = r105;
            var2 = var17[var3];
            var29 = var15.bind(var4)(var2);
            var28 = var29.useStateFromStoresArray;
            var2 = _closure1_slot8;
            var25 = new Array(1);
            var25[0] = var2;
            var2 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getFetchingIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var95 = var28.bind(var29)(var25, var2);
            var _closure2_slot28 = var95;
            var2 = var17[var3];
            var32 = var15.bind(var4)(var2);
            var30 = var32.useStateFromStoresArray;
            var2 = _closure1_slot7;
            var29 = new Array(1);
            var29[0] = var2;
            var28 = new Array(1);
            var28[0] = var10;
            var25 = function() {
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
                var1 = 56;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            r109 = var30.bind(var32)(var29, var25, var28);
            var _closure2_slot29 = r109;
            var25 = var17[var3];
            var30 = var15.bind(var4)(var25);
            var29 = var30.useStateFromStoresArray;
            var28 = new Array(2);
            var28[0] = var2;
            var25 = _closure1_slot46;
            var28[1] = var25;
            var25 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var6 = function _loop(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var5 = arg1;
                            var _closure4_slot0 = var5;
                            var4 = _closure1_slot46;
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
                    var3 = _closure1_slot62;
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
            r107 = var29.bind(var30)(var28, var25);
            var _closure2_slot30 = r107;
            var25 = var17[var3];
            var30 = var15.bind(var4)(var25);
            var29 = var30.useStateFromStoresArray;
            var28 = new Array(1);
            var28[0] = var2;
            var25 = function() {
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
            r108 = var29.bind(var30)(var28, var25);
            var _closure2_slot31 = r108;
            var25 = var17[var3];
            var29 = var15.bind(var4)(var25);
            var28 = var29.useStateFromStoresArray;
            var25 = new Array(1);
            var25[0] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = new Array(0);
                    var3 = _closure1_slot62;
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
            r106 = var28.bind(var29)(var25, var2);
            var _closure2_slot32 = r106;
            var2 = var17[var3];
            var29 = var15.bind(var4)(var2);
            var28 = var29.useStateFromStores;
            var2 = _closure1_slot24;
            var25 = new Array(1);
            var25[0] = var2;
            var2 = function() {
                var2 = _closure1_slot24;
                var1 = var2.getMediaPostEmbeds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var94 = var28.bind(var29)(var25, var2);
            var _closure2_slot33 = var94;
            var2 = var17[var3];
            var30 = var15.bind(var4)(var2);
            var29 = var30.useStateFromStores;
            var2 = _closure1_slot21;
            var28 = new Array(1);
            var28[0] = var2;
            var25 = function() {
                var2 = _closure1_slot21;
                var1 = var2.getGuildTemplates;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var92 = var29.bind(var30)(var28, var25, var2);
            var _closure2_slot34 = var92;
            var2 = var17[var3];
            var30 = var15.bind(var4)(var2);
            var29 = var30.useStateFromStores;
            var2 = _closure1_slot10;
            var28 = new Array(1);
            var28[0] = var2;
            var25 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getBuildOverrides;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var91 = var29.bind(var30)(var28, var25, var2);
            var _closure2_slot35 = var91;
            var2 = 57;
            var2 = var17[var2];
            var28 = var15.bind(var4)(var2);
            var25 = var28.useQuests;
            var2 = {'fetchPolicy': 'cache-or-network', 'callerSource': 'messages_native_fn'};
            var2 = var25.bind(var28)(var2);
            var90 = var2.quests;
            var _closure2_slot36 = var90;
            var89 = var2.isFetchingCurrentQuests;
            var _closure2_slot37 = var89;
            var25 = var9.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot52;
                var1 = var1.PREMIUM_REFERRAL;
                var1 = var2 === var1;
                return var1;
            };
            var28 = var25.bind(var9)(var2);
            var25 = var28.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.referralTrialOfferId;
                return var1;
            };
            var28 = var25.bind(var28)(var2);
            var25 = var28.filter;
            var2 = 56;
            var2 = var17[var2];
            var2 = var15.bind(var4)(var2);
            var2 = var2.isNotNullish;
            var2 = var25.bind(var28)(var2);
            var _closure2_slot38 = var2;
            var2 = var17[var3];
            var29 = var15.bind(var4)(var2);
            var28 = var29.useStateFromStoresArray;
            var2 = _closure1_slot27;
            var25 = new Array(1);
            var25[0] = var2;
            var2 = function() {
                var3 = _closure2_slot38;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var3 = _closure1_slot27;
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
                var1 = 56;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            r104 = var28.bind(var29)(var25, var2);
            var _closure2_slot39 = r104;
            var2 = 58;
            var2 = var17[var2];
            var28 = var15.bind(var4)(var2);
            var25 = var28.useTrialOffer;
            var2 = _closure1_slot56;
            var85 = var25.bind(var28)(var2);
            var _closure2_slot40 = var85;
            var2 = var17[var3];
            var29 = var15.bind(var4)(var2);
            var28 = var29.useStateFromStores;
            var2 = _closure1_slot49;
            var25 = new Array(1);
            var25[0] = var2;
            var2 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 59;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.isPremiumExactly;
                var5 = _closure1_slot49;
                var2 = var5.getCurrentUser;
                var2 = var2.bind(var5)();
                var1 = _closure1_slot57;
                var1 = var1.TIER_2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var84 = var28.bind(var29)(var25, var2);
            var _closure2_slot41 = var84;
            var2 = var17[var3];
            var30 = var15.bind(var4)(var2);
            var29 = var30.useStateFromStores;
            var2 = _closure1_slot37;
            var28 = new Array(1);
            var28[0] = var2;
            var25 = new Array(1);
            var25[0] = var10;
            var2 = function() {
                var3 = _closure1_slot37;
                var2 = var3.getEditingMessageId;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var80 = var29.bind(var30)(var28, var2, var25);
            var _closure2_slot42 = var80;
            var2 = var17[var3];
            var30 = var15.bind(var4)(var2);
            var29 = var30.useStateFromStores;
            var2 = _closure1_slot29;
            var28 = new Array(1);
            var28[0] = var2;
            var25 = new Array(1);
            var25[0] = var10;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure1_slot29;
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
            var68 = var29.bind(var30)(var28, var2, var25);
            var _closure2_slot43 = var68;
            var2 = var17[var3];
            var30 = var15.bind(var4)(var2);
            var29 = var30.useStateFromStores;
            var2 = _closure1_slot47;
            var28 = new Array(1);
            var28[0] = var2;
            var25 = new Array(1);
            var25[0] = var10;
            var2 = function() {
                var3 = _closure1_slot47;
                var2 = var3.getOldestUnreadMessageId;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var38 = var29.bind(var30)(var28, var2, var25);
            var _closure2_slot44 = var38;
            var2 = var17[var3];
            var30 = var15.bind(var4)(var2);
            var29 = var30.useStateFromStores;
            var2 = _closure1_slot42;
            var28 = new Array(1);
            var28[0] = var2;
            var25 = new Array(1);
            var25[0] = var12;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0010_ip = 53; continue _fun0010 }
case 54:
                    var4 = _closure1_slot42;
                    var3 = var4.canChatInGuild;
                    var2 = _closure2_slot8;
                    var1 = var3.bind(var4)(var2);
case 53:
                    return var1;
                }
            };
            var66 = var29.bind(var30)(var28, var2, var25);
            var _closure2_slot45 = var66;
            var2 = var17[var3];
            var30 = var15.bind(var4)(var2);
            var29 = var30.useStateFromStores;
            var2 = _closure1_slot45;
            var28 = new Array(1);
            var28[0] = var2;
            var25 = new Array(1);
            var25[0] = var8;
            var2 = function() {
                var4 = _closure1_slot45;
                var3 = var4.can;
                var1 = _closure1_slot54;
                var2 = var1.SEND_MESSAGES;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var79 = var29.bind(var30)(var28, var2, var25);
            var _closure2_slot46 = var79;
            var2 = 60;
            var2 = var17[var2];
            var2 = var22.bind(var4)(var2);
            var70 = var2.bind(var4)(var10);
            var _closure2_slot47 = var70;
            var2 = var17[var3];
            var29 = var15.bind(var4)(var2);
            var28 = var29.useStateFromStores;
            var2 = _closure1_slot50;
            var25 = new Array(1);
            var25[0] = var2;
            var22 = new Array(1);
            var22[0] = var71;
            var2 = function() {
                var4 = _closure1_slot50;
                var3 = var4.getUserVoiceChannelId;
                var2 = _closure1_slot55;
                var1 = _closure2_slot11;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var77 = var28.bind(var29)(var25, var2, var22);
            var _closure2_slot48 = var77;
            var2 = var17[var3];
            var30 = var15.bind(var4)(var2);
            var29 = var30.useStateFromStores;
            var2 = _closure1_slot30;
            var28 = new Array(1);
            var28[0] = var2;
            var25 = new Array(1);
            var25[0] = var8;
            var22 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure1_slot51;
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
                    var4 = _closure1_slot30;
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
            r102 = var29.bind(var30)(var28, var22, var25);
            var _closure2_slot49 = r102;
            var22 = var17[var3];
            var30 = var15.bind(var4)(var22);
            var29 = var30.useStateFromStoresObject;
            var22 = _closure1_slot38;
            var28 = new Array(1);
            var28[0] = var22;
            var25 = function() {
                var1 = {};
                var3 = _closure1_slot38;
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
            var22 = new Array(0);
            var22 = var29.bind(var30)(var28, var25, var22);
            var88 = var22.resolvingGiftCodes;
            var _closure2_slot50 = var88;
            var87 = var22.resolvedGiftCodes;
            var _closure2_slot51 = var87;
            var86 = var22.acceptingGiftCodes;
            var _closure2_slot52 = var86;
            var22 = var17[var3];
            var30 = var15.bind(var4)(var22);
            var29 = var30.useStateFromStores;
            var22 = _closure1_slot12;
            var28 = new Array(1);
            var28[0] = var22;
            var25 = new Array(1);
            var25[0] = var10;
            var22 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getParticipants;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                var1 = var1.length;
                return var1;
            };
            var69 = var29.bind(var30)(var28, var22, var25);
            var _closure2_slot53 = var69;
            var22 = var17[var3];
            var30 = var15.bind(var4)(var22);
            var29 = var30.useStateFromStores;
            var22 = _closure1_slot48;
            var28 = new Array(1);
            var28[0] = var22;
            var25 = new Array(1);
            var25[0] = var10;
            var22 = function() {
                var3 = _closure1_slot48;
                var2 = var3.getFiles;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var65 = var29.bind(var30)(var28, var22, var25);
            var _closure2_slot54 = var65;
            var22 = var17[var3];
            var29 = var15.bind(var4)(var22);
            var28 = var29.useStateFromStores;
            var25 = new Array(1);
            var25[0] = var2;
            var22 = new Array(1);
            var22[0] = var10;
            var2 = function() {
                var3 = _closure1_slot30;
                var2 = var3.getReplyIdsForChannel;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            r119 = var28.bind(var29)(var25, var2, var22);
            var _closure2_slot55 = r119;
            var2 = var17[var3];
            var29 = var15.bind(var4)(var2);
            var28 = var29.useStateFromStoresObject;
            var2 = _closure1_slot6;
            var25 = new Array(1);
            var25[0] = var2;
            var22 = function() {
                var1 = {};
                var2 = _closure1_slot6;
                var3 = var2.useReducedMotion;
                var1['useReducedMotion'] = var3;
                var3 = var2.roleStyle;
                var1['roleStyle'] = var3;
                var2 = var2.saturation;
                var1['saturation'] = var2;
                return var1;
            };
            var2 = new Array(0);
            var2 = var28.bind(var29)(var25, var22, var2);
            var33 = var2.useReducedMotion;
            var _closure2_slot56 = var33;
            var25 = var2.roleStyle;
            var _closure2_slot57 = var25;
            var47 = var2.saturation;
            var _closure2_slot58 = var47;
            var2 = var17[var3];
            var30 = var15.bind(var4)(var2);
            var29 = var30.useStateFromStores;
            var2 = _closure1_slot33;
            var28 = new Array(1);
            var28[0] = var2;
            var22 = new Array(1);
            var22[0] = var10;
            var2 = function() {
                var3 = _closure1_slot33;
                var2 = var3.getChannelThreadsVersion;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            r121 = var29.bind(var30)(var28, var2, var22);
            var _closure2_slot59 = r121;
            var2 = var17[var3];
            var29 = var15.bind(var4)(var2);
            var28 = var29.useStateFromStoresObject;
            var2 = _closure1_slot23;
            var22 = new Array(1);
            var22[0] = var2;
            var2 = function() {
                var2 = _closure1_slot23;
                var1 = var2.getMessageInteractionStates;
                var1 = var1.bind(var2)();
                return var1;
            };
            r114 = var28.bind(var29)(var22, var2);
            var _closure2_slot60 = r114;
            var2 = var17[var3];
            var32 = var15.bind(var4)(var2);
            var30 = var32.useStateFromStores;
            var2 = _closure1_slot22;
            var29 = new Array(1);
            var29[0] = var2;
            var2 = 61;
            var2 = var17[var2];
            var2 = var15.bind(var4)(var2);
            r128 = var2.isVersionEqual;
            r130 = function() {
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
            r129 = new Array(0);
            r132 = var32;
            r131 = var29;
            var2 = r132[var30](r131, r130, r129, r128, r127);
            var2 = var19.bind(var4)(var2, var31);
            r113 = var2[var13];
            var _closure2_slot61 = r113;
            r112 = var2[var7];
            var _closure2_slot62 = r112;
            var2 = var17[var3];
            var28 = var15.bind(var4)(var2);
            var22 = var28.useStateFromStores;
            var2 = _closure1_slot15;
            var19 = new Array(1);
            var19[0] = var2;
            var2 = function() {
                var1 = _closure1_slot15;
                var1 = var1.hasLoadedExperiments;
                return var1;
            };
            r118 = var22.bind(var28)(var19, var2);
            var _closure2_slot63 = r118;
            var2 = 62;
            var2 = var17[var2];
            var22 = var15.bind(var4)(var2);
            var19 = var22.useIsSpamMessageRequest;
            var2 = var8.id;
            var75 = var19.bind(var22)(var2);
            var _closure2_slot64 = var75;
            var2 = 63;
            var2 = var17[var2];
            var17 = var15.bind(var4)(var2);
            var15 = var17.useIsMessageRequest;
            var2 = var8.id;
            var74 = var15.bind(var17)(var2);
            var _closure2_slot65 = var74;
            r122 = var5 != var9;
            if(!r122) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var2 = var9.ready;
            if(var2) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var2 = var9.cached;
case 59:
            r122 = var2;
case 57:
            var _closure2_slot66 = r122;
            var42 = var5 != var9;
            if(!var42) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var42 = var9.cached;
case 61:
            var _closure2_slot67 = var42;
            r125 = var5 != var9;
            if(!r125) { _fun0004_ip = 63; continue _fun0004 }
case 64:
            r125 = var9.ready;
case 63:
            if(!r125) { _fun0004_ip = 65; continue _fun0004 }
case 66:
            var2 = var9.loadingMore;
            r125 = !var2;
case 65:
            var _closure2_slot68 = r125;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = var17[var3];
            var28 = var15.bind(var4)(var2);
            var22 = var28.useStateFromStores;
            var2 = _closure1_slot20;
            var19 = new Array(1);
            var19[0] = var2;
            var2 = function() {
                var2 = _closure1_slot20;
                var1 = var2.getRsvpVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            r120 = var22.bind(var28)(var19, var2);
            var _closure2_slot69 = r120;
            var2 = var17[var3];
            var28 = var15.bind(var4)(var2);
            var22 = var28.useStateFromStores;
            var2 = _closure1_slot19;
            var19 = new Array(1);
            var19[0] = var2;
            var2 = function() {
                var2 = _closure1_slot19;
                var1 = var2.getMessagesVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            r115 = var22.bind(var28)(var19, var2);
            var _closure2_slot70 = r115;
            var2 = var17[var3];
            var29 = var15.bind(var4)(var2);
            var28 = var29.useStateFromStores;
            var2 = _closure1_slot39;
            var22 = new Array(1);
            var22[0] = var2;
            var19 = function() {
                var2 = _closure1_slot39;
                var1 = var2.getCommunicationDisabledVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            r117 = var28.bind(var29)(var22, var19);
            var _closure2_slot71 = r117;
            var19 = var17[var3];
            var29 = var15.bind(var4)(var19);
            var28 = var29.useStateFromStoresObject;
            var22 = new Array(1);
            var22[0] = var2;
            var19 = new Array(2);
            var19[0] = var12;
            var19[1] = var9;
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
                            var7 = _closure1_slot39;
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
            r116 = var28.bind(var29)(var22, var2, var19);
            var _closure2_slot72 = r116;
            var2 = var17[var3];
            var28 = var15.bind(var4)(var2);
            var22 = var28.useStateFromStores;
            var2 = _closure1_slot45;
            var19 = new Array(1);
            var19[0] = var2;
            var2 = function() {
                var4 = _closure1_slot45;
                var3 = var4.can;
                var1 = _closure1_slot54;
                var2 = var1.MODERATE_MEMBERS;
                var1 = _closure2_slot9;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var72 = var22.bind(var28)(var19, var2);
            var _closure2_slot73 = var72;
            var2 = 64;
            var2 = var17[var2];
            var17 = var15.bind(var4)(var2);
            var15 = var17.useCurrentUserCommunicationDisabled;
            var19 = var5 == var34;
            var2 = undefined;
            if(var19) { _fun0004_ip = 74; continue _fun0004 }
case 75:
            var2 = var34.id;
case 74:
            var15 = var15.bind(var17)(var2);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var15, var31);
            var73 = var2[var7];
            var _closure2_slot74 = var73;
            var19 = _closure1_slot0;
            var28 = _closure1_slot2;
            var2 = var28[var3];
            var22 = var19.bind(var4)(var2);
            var17 = var22.useStateFromStores;
            var2 = _closure1_slot34;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function() {
                var1 = _closure1_slot34;
                var1 = var1.locale;
                return var1;
            };
            var82 = var17.bind(var22)(var15, var2);
            var _closure2_slot75 = var82;
            var17 = _closure1_slot1;
            var2 = 65;
            var2 = var28[var2];
            var29 = var17.bind(var4)(var2);
            var22 = var29.useExperiment;
            var15 = {};
            var2 = '41de6d_2';
            var15['location'] = var2;
            var2 = {};
            var35 = false;
            var2['autoTrackExposure'] = var35;
            var2 = var22.bind(var29)(var15, var2);
            var22 = var2.paymentsBlocked;
            var _closure2_slot76 = var22;
            var2 = var28[var3];
            var30 = var19.bind(var4)(var2);
            var29 = var30.useStateFromStores;
            var2 = _closure1_slot32;
            var15 = new Array(1);
            var15[0] = var2;
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
                    var4 = _closure1_slot32;
                    var3 = var4.hasJoined;
                    var2 = _closure2_slot7;
                    var1 = var3.bind(var4)(var2);
case 76:
                    return var1;
                }
            };
            r101 = var29.bind(var30)(var15, var2);
            var _closure2_slot77 = r101;
            var2 = var28[var3];
            var30 = var19.bind(var4)(var2);
            var29 = var30.useStateFromStores;
            var2 = _closure1_slot25;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function() {
                var3 = _closure1_slot25;
                var2 = var3.shouldDisplayPrompt;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            r100 = var29.bind(var30)(var15, var2);
            var _closure2_slot78 = r100;
            var2 = var28[var3];
            var30 = var19.bind(var4)(var2);
            var29 = var30.useStateFromStores;
            var2 = _closure1_slot28;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function() {
                var2 = _closure1_slot28;
                var1 = var2.isEligible;
                var1 = var1.bind(var2)();
                return var1;
            };
            var83 = var29.bind(var30)(var15, var2);
            var _closure2_slot79 = var83;
            var2 = var28[var3];
            var30 = var19.bind(var4)(var2);
            var29 = var30.useStateFromStores;
            var2 = _closure1_slot11;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getLazyCacheStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            r103 = var29.bind(var30)(var15, var2);
            var _closure2_slot80 = r103;
            var2 = 66;
            var2 = var28[var2];
            var15 = var19.bind(var4)(var2);
            var2 = var15.useMessageJumpAndroidKeyboardHeight;
            var78 = var2.bind(var15)();
            var _closure2_slot81 = var78;
            var2 = 67;
            var2 = var28[var2];
            var2 = var17.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var _closure2_slot82 = var2;
            var15 = 68;
            var15 = var28[var15];
            var29 = var19.bind(var4)(var15);
            var15 = var29.useChannelSummariesExperiment;
            var15 = var15.bind(var29)(var8);
            var _closure2_slot83 = var15;
            var29 = var28[var3];
            var36 = var19.bind(var4)(var29);
            var32 = var36.useStateFromStores;
            var29 = _closure1_slot31;
            var30 = new Array(1);
            var30[0] = var29;
            var29 = new Array(2);
            var29[0] = var15;
            var15 = var8.id;
            var29[1] = var15;
            var15 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure2_slot83;
                    var1 = null;
                    if(!var3) { _fun0015_ip = 78; continue _fun0015 }
case 79:
                    var4 = _closure1_slot31;
                    var3 = var4.selectedSummary;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 78:
                    return var1;
                }
            };
            var52 = var32.bind(var36)(var30, var15, var29);
            var _closure2_slot84 = var52;
            var36 = _closure1_slot5;
            var30 = var36.useEffect;
            var15 = var8.id;
            var29 = new Array(5);
            var29[0] = var15;
            var15 = var9.hasMoreAfter;
            var29[1] = var15;
            var15 = var9.hasMoreBefore;
            var29[2] = var15;
            var15 = var9.length;
            var29[3] = var15;
            var15 = var9.ready;
            var29[4] = var15;
            var15 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var2 = var2.ready;
                    var2 = !var2;
                    if(var2) { _fun0016_ip = 80; continue _fun0016 }
case 81:
                    var3 = _closure2_slot6;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var3 !== var4;
case 80:
                    if(var2) { _fun0016_ip = 82; continue _fun0016 }
case 50:
                    var3 = _closure2_slot6;
                    var2 = var3.hasMoreBefore;
case 82:
                    if(var2) { _fun0016_ip = 83; continue _fun0016 }
case 84:
                    var3 = _closure2_slot6;
                    var2 = var3.hasMoreAfter;
case 83:
                    if(var2) { _fun0016_ip = 85; continue _fun0016 }
case 86:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 69;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.updateChannelDimensions;
                    var1 = _closure2_slot1;
                    var9 = var1.id;
                    var2 = 1;
                    var6 = 0;
                    var10 = var5;
                    var8 = var2;
                    var7 = var2;
                    var1 = var10[var4](var9, var8, var7, var6, var5);
case 85:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var30.bind(var36)(var15, var29);
            var15 = 70;
            var29 = var28[var15];
            var32 = var19.bind(var4)(var29);
            var30 = var32.useShouldTrackAnnouncementMessageViews;
            var29 = {};
            var29['guild'] = var34;
            var29['channel'] = var8;
            var29['messages'] = var9;
            var29['isMessagesReady'] = r122;
            var34 = 'MessagesFunctional';
            var29['location'] = var34;
            var30 = var30.bind(var32)(var29);
            var _closure2_slot85 = var30;
            var15 = var28[var15];
            var32 = var19.bind(var4)(var15);
            var29 = var32.useShouldTrackRichPresenceInviteEmbedViews;
            var15 = {};
            var15['messages'] = var9;
            var15['isMessagesReady'] = r122;
            var29 = var29.bind(var32)(var15);
            var _closure2_slot86 = var29;
            var15 = 71;
            var15 = var28[var15];
            var32 = var19.bind(var4)(var15);
            var15 = var32.useShouldDisplaySpoilerObscurity;
            var49 = var15.bind(var32)(var8);
            var _closure2_slot87 = var49;
            var15 = 72;
            var15 = var28[var15];
            var32 = var19.bind(var4)(var15);
            var15 = var32.useIsAgeVerified;
            var56 = var15.bind(var32)();
            var _closure2_slot88 = var56;
            var34 = var36.useEffect;
            var32 = new Array(2);
            var32[0] = var10;
            var32[1] = var12;
            var15 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 73;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.handleChannelSelect;
                var1 = var1.bind(var2)();
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 73;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleChannelSelect;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                return var1;
            };
            var15 = var34.bind(var36)(var15, var32);
            var15 = 74;
            var15 = var28[var15];
            var34 = var19.bind(var4)(var15);
            var32 = var34.useShouldDisableInteractiveComponents;
            var15 = var8.id;
            r111 = var32.bind(var34)(var15);
            var _closure2_slot89 = r111;
            var32 = _closure1_slot26;
            var15 = var8.id;
            r110 = var32.bind(var4)(var15);
            var _closure2_slot90 = r110;
            var15 = var28[var3];
            var37 = var19.bind(var4)(var15);
            var36 = var37.useStateFromStores;
            var15 = _closure1_slot16;
            var34 = new Array(1);
            var34[0] = var15;
            var32 = new Array(1);
            var32[0] = var10;
            var15 = function() {
                var3 = _closure1_slot16;
                var2 = var3.getChannelFpInfo;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var93 = var36.bind(var37)(var34, var15, var32);
            var _closure2_slot91 = var93;
            var15 = 75;
            var15 = var28[var15];
            var15 = var17.bind(var4)(var15);
            var62 = var15.bind(var4)();
            var _closure2_slot92 = var62;
            var15 = 76;
            var15 = var28[var15];
            var15 = var17.bind(var4)(var15);
            var15 = var15.bind(var4)(var9);
            var46 = var15.unloadedContentEntryMessageIds;
            var _closure2_slot93 = var46;
            var40 = var15.unloadableContentEntryMessageIds;
            var _closure2_slot94 = var40;
            var15 = var28[var3];
            var34 = var19.bind(var4)(var15);
            var32 = var34.useStateFromStores;
            var15 = _closure1_slot49;
            var17 = new Array(1);
            var17[0] = var15;
            var15 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var2 = _closure1_slot49;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0017_ip = 50; continue _fun0017 }
case 69:
                    var3 = var4.isStaff;
                    var2 = var3.bind(var4)();
case 50:
                    var1 = var1 != var2;
                    if(!var1) { _fun0017_ip = 82; continue _fun0017 }
case 87:
                    var1 = var2;
case 82:
                    return var1;
                }
            };
            var55 = var32.bind(var34)(var17, var15);
            var _closure2_slot95 = var55;
            var15 = 77;
            var15 = var28[var15];
            var17 = var19.bind(var4)(var15);
            var15 = var17.useShouldFilterKeywords;
            var51 = var15.bind(var17)();
            var _closure2_slot96 = var51;
            var15 = var28[var3];
            var34 = var19.bind(var4)(var15);
            var32 = var34.useStateFromStores;
            var15 = _closure1_slot18;
            var17 = new Array(1);
            var17[0] = var15;
            var15 = function() {
                var2 = _closure1_slot18;
                var1 = var2.getVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var81 = var32.bind(var34)(var17, var15);
            var _closure2_slot97 = var81;
            var15 = 78;
            var15 = var28[var15];
            var17 = var19.bind(var4)(var15);
            var15 = var17.useGuildProfileInviteEmbedHoldoutEnabled;
            var17 = var15.bind(var17)(var35);
            var15 = 79;
            var15 = var28[var15];
            var28 = var19.bind(var4)(var15);
            var19 = var28.useColorStore;
            var15 = function(arg1) {
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = arg1;
                var1 = var1.palette;
                var1 = var2.bind(var3)(var1);
                var1 = var1.length;
                return var1;
            };
            var15 = var19.bind(var28)(var15);
            var60 = 0;
            if(var17) { _fun0004_ip = 88; continue _fun0004 }
case 89:
            var60 = var15;
case 88:
            var _closure2_slot98 = var60;
            var43 = _closure1_slot0;
            r124 = _closure1_slot2;
            var3 = r124[var3];
            var19 = var43.bind(var4)(var3);
            var17 = var19.useStateFromStores;
            var3 = _closure1_slot14;
            var15 = new Array(1);
            var15[0] = var3;
            var3 = function() {
                var3 = _closure1_slot14;
                var2 = var3.getGuildEmoji;
                var1 = _closure2_slot8;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var45 = var17.bind(var19)(var15, var3);
            var _closure2_slot99 = var45;
            var3 = 80;
            var3 = r124[var3];
            var19 = var43.bind(var4)(var3);
            var17 = var19.useDoubleTapToReactExperiment;
            var15 = {};
            var15['autoTrackExposure'] = var35;
            var3 = 'Messages';
            var3 = var17.bind(var19)(var3, var15);
            var17 = var3.enabled;
            var _closure2_slot100 = var17;
            var67 = _closure1_slot5;
            var3 = var67.useRef;
            var28 = var3.bind(var67)(var5);
            var _closure2_slot101 = var28;
            var3 = r124[var41];
            var15 = var43.bind(var4)(var3);
            var3 = var15.useScrollState;
            var3 = var3.bind(var15)();
            var19 = _closure1_slot4;
            var3 = var19.bind(var4)(var3, var31);
            var32 = var3[var13];
            var _closure2_slot102 = var32;
            var15 = var3[var7];
            var _closure2_slot103 = var15;
            var3 = var67.useState;
            var3 = var3.bind(var67)(var5);
            var3 = var19.bind(var4)(var3, var31);
            var31 = var3[var13];
            var _closure2_slot104 = var31;
            var3 = var3[var7];
            var _closure2_slot105 = var3;
            var7 = r124[var41];
            var13 = var43.bind(var4)(var7);
            var7 = var13.useMessagesState;
            var7 = var7.bind(var13)();
            var50 = var7.shouldForceRender;
            var _closure2_slot106 = var50;
            var39 = var7.hasJumpedToOriginalPost;
            var _closure2_slot107 = var39;
            var34 = var7.setHasJumpedToOriginalPost;
            var _closure2_slot108 = var34;
            var64 = var7.setShouldForceRender;
            var _closure2_slot109 = var64;
            var19 = var67.useMemo;
            var13 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 81;
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
            var7 = var19.bind(var67)(var13, var7);
            var _closure2_slot110 = var7;
            var36 = var67.useMemo;
            var19 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 82;
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
            var19 = var36.bind(var67)(var19, var13);
            var _closure2_slot111 = var19;
            var13 = var67.useRef;
            var13 = var13.bind(var67)(var35);
            var _closure2_slot112 = var13;
            var13 = var67.useRef;
            var13 = var13.bind(var67)(var35);
            var _closure2_slot113 = var13;
            var36 = var67.useCallback;
            var35 = function(arg1) {
                var2 = arg1;
                var11 = var2.rows;
                var3 = var2.hasMoreMessagesAfter;
                var9 = var2.scrollData;
                var8 = var2.HACK_iOSForceAnimations;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 83;
                var5 = var6[var1];
                var1 = undefined;
                var12 = var7.bind(var1)(var5);
                var10 = var12.isLoadingAtTop;
                var7 = var2.rows;
                var5 = _closure2_slot113;
                var5 = var5.current;
                var10 = var10.bind(var12)(var7, var5);
                var5 = _closure1_slot1;
                var4 = 84;
                var4 = var6[var4];
                var7 = var5.bind(var1)(var4);
                var6 = var7.updateRows;
                var4 = _closure2_slot101;
                var5 = var4.current;
                var4 = {};
                var4['rows'] = var11;
                var4['isLoadingAtTop'] = var10;
                var4['scrollData'] = var9;
                var4['HACK_iOSForceAnimations'] = var8;
                var4 = var6.bind(var7)(var5, var4);
                var2 = _closure2_slot113;
                var2['current'] = var3;
                return var1;
            };
            var13 = new Array(0);
            var35 = var36.bind(var67)(var35, var13);
            var _closure2_slot114 = var35;
            var13 = r124[var41];
            var36 = var43.bind(var4)(var13);
            var13 = var36.useChatUpdatesQueue;
            var13 = var13.bind(var36)(var28, var35);
            var _closure2_slot115 = var13;
            var37 = var67.useCallback;
            var36 = new Array(4);
            var36[0] = var13;
            var36[1] = var35;
            var35 = var32.decelerating;
            var36[2] = var35;
            var35 = var32.dragging;
            var36[3] = var35;
            var35 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot115;
                    var2 = var2.isBlocking;
                    if(var2) { _fun0018_ip = 38; continue _fun0018 }
case 81:
                    var2 = var3.isLoadingAtTop;
                    if(!var2) { _fun0018_ip = 45; continue _fun0018 }
case 34:
                    var2 = _closure2_slot102;
                    var2 = var2.decelerating;
                    if(var2) { _fun0018_ip = 30; continue _fun0018 }
case 90:
                    var2 = _closure2_slot102;
                    var2 = var2.dragging;
                    if(var2) { _fun0018_ip = 30; continue _fun0018 }
case 45:
                    var4 = _closure2_slot114;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0018_ip = 91; continue _fun0018;
case 30:
                    var4 = _closure2_slot115;
                    var2 = var4.add;
                    var2 = var2.bind(var4)(var3);
                    _fun0018_ip = 91; continue _fun0018;
case 38:
                    var2 = _closure2_slot115;
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var3);
case 91:
                    var1 = undefined;
                    return var1;
                }
            };
            var37 = var37.bind(var67)(var35, var36);
            var _closure2_slot116 = var37;
            var36 = var67.useCallback;
            var35 = new Array(27);
            var35[0] = var8;
            var35[1] = var9;
            var35[2] = r122;
            var35[3] = var58;
            var35[4] = var57;
            var35[5] = var54;
            var35[6] = var53;
            var35[7] = var20;
            var35[8] = var31;
            var35[9] = var62;
            var35[10] = var61;
            var35[11] = var72;
            var35[12] = var44;
            var35[13] = var49;
            var35[14] = r111;
            var35[15] = var51;
            var35[16] = var65;
            var35[17] = var38;
            var35[18] = var68;
            var35[19] = var71;
            var35[20] = var66;
            var35[21] = var52;
            var35[22] = var25;
            var35[23] = var23;
            var35[24] = var40;
            var35[25] = var7;
            var35[26] = var19;
            var19 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
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
                    if(!var5) { _fun0019_ip = 55; continue _fun0019 }
case 92:
                    var5 = _closure2_slot6;
                    var5 = var4 != var5;
                    var1 = null;
                    if(!var5) { _fun0019_ip = 55; continue _fun0019 }
case 93:
                    var3 = _closure2_slot66;
                    var1 = null;
                    if(!var3) { _fun0019_ip = 55; continue _fun0019 }
case 94:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 85;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var4 = var3.firstRowGenerator;
                    var3 = var4.measure;
                    var2 = function() {
                        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                            var4 = _closure2_slot110;
                            var3 = var4.setup;
                            var2 = _closure2_slot6;
                            var2 = var3.bind(var4)(var2);
                            var4 = _closure2_slot111;
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
                            var5 = _closure2_slot104;
                            var2['animatingStickerMessageId'] = var5;
                            var5 = _closure2_slot92;
                            var2['constrainedWidth'] = var5;
                            var5 = _closure2_slot18;
                            var2['gifAutoPlay'] = var5;
                            var5 = _closure2_slot73;
                            var2['renderCommunicationDisabled'] = var5;
                            var5 = _closure3_slot2;
                            var2['ignoreEmbedDescriptionCache'] = var5;
                            var5 = _closure2_slot20;
                            var2['enableSwipeActions'] = var5;
                            var5 = _closure2_slot87;
                            var2['shouldObscureSpoiler'] = var5;
                            var5 = _closure2_slot89;
                            var2['shouldDisableInteractiveComponents'] = var5;
                            var5 = _closure2_slot96;
                            var2['shouldFilterKeywords'] = var5;
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure1_slot62;
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 86;
                            var2 = var5[var2];
                            var5 = undefined;
                            var4 = var4.bind(var5)(var2);
                            var2 = {};
                            var8 = _closure2_slot1;
                            var2['channel'] = var8;
                            var8 = _closure2_slot6;
                            var2['messages'] = var8;
                            var9 = _closure2_slot54;
                            var8 = null;
                            if(!(var8 == var9)) { _fun0020_ip = 95; continue _fun0020 }
case 96:
                            var8 = new Array(0);
                            _fun0020_ip = 37; continue _fun0020;
case 95:
                            var8 = _closure2_slot54;
case 37:
                            var2['uploads'] = var8;
                            var8 = _closure2_slot44;
                            var2['oldestUnreadMessageId'] = var8;
                            var8 = _closure2_slot43;
                            var2['replyingMessageId'] = var8;
                            var8 = _closure2_slot11;
                            var2['currentUserId'] = var8;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 83;
                            var7 = var9[var7];
                            var10 = var8.bind(var5)(var7);
                            var9 = var10.canAddNewReactions;
                            var8 = _closure2_slot1;
                            var7 = _closure2_slot45;
                            var7 = var9.bind(var10)(var8, var7);
                            var2['canAddNewReactions'] = var7;
                            var7 = _closure2_slot84;
                            var2['selectedSummary'] = var7;
                            var7 = _closure2_slot110;
                            var2['chatManager'] = var7;
                            var7 = _closure2_slot57;
                            var2['roleStyle'] = var7;
                            var7 = _closure3_slot0;
                            var2['forceRender'] = var7;
                            var6 = _closure3_slot1;
                            var2['updateMessageIds'] = var6;
                            var6 = _closure2_slot4;
                            var2['isResourceChannel'] = var6;
                            var6 = _closure2_slot94;
                            var2['unloadableContentEntryMessageIds'] = var6;
                            var2 = var4.bind(var5)(var2);
                            var4 = var3.bind(var5)(var2);
                            var3 = var4.bind(var5)();
                            var2 = var3.done;
                            if(var2) { _fun0020_ip = 97; continue _fun0020 }
case 98:
                            var7 = var3.value;
                            var6 = _closure2_slot111;
                            var2 = var6.generate;
                            var7 = var2.bind(var6)(var7);
                            var6 = _closure2_slot110;
                            var2 = var6.createRow;
                            var2 = var2.bind(var6)(var7);
                            var6 = var4.bind(var5)();
                            var2 = var6.done;
                            var3 = var6;
                            if(!var2) { _fun0020_ip = 98; continue _fun0020 }
case 97:
                            var2 = _closure2_slot110;
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
            var66 = var36.bind(var67)(var19, var35);
            var _closure2_slot117 = var66;
            var36 = var67.useCallback;
            var35 = new Array(1);
            var35[0] = var7;
            var19 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 83;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.findMessageIndexInRows;
                var2 = _closure2_slot110;
                var1 = var2.getPreviousRows;
                var2 = var1.bind(var2)();
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var19 = var36.bind(var67)(var19, var35);
            var _closure2_slot118 = var19;
            var40 = var67.useCallback;
            var36 = new Array(2);
            var36[0] = var33;
            var36[1] = var19;
            var35 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var3 = arg1;
                    var10 = var3.scrollToMessageId;
                    var _closure3_slot0 = var10;
                    var9 = var3.jumpTargetId;
                    var1 = undefined;
                    if(!(var9 === var1)) { _fun0021_ip = 99; continue _fun0021 }
case 69:
                    var9 = null;
case 99:
                    var _closure3_slot1 = var9;
                    var11 = var3.jumpType;
                    if(!(var11 === var1)) { _fun0021_ip = 100; continue _fun0021 }
case 101:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 87;
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.JumpTypes;
                    var11 = var4.ANIMATED;
case 100:
                    var8 = var3.scrollPosition;
                    if(!(var8 === var1)) { _fun0021_ip = 102; continue _fun0021 }
case 103:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 84;
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.ChatScrollPosition;
                    var8 = var4.TOP;
case 102:
                    var5 = var3.minimizeScrolling;
                    if(!(var5 === var1)) { _fun0021_ip = 104; continue _fun0021 }
case 48:
                    var5 = false;
case 104:
                    var6 = var3.isRescrolling;
                    if(!(var6 === var1)) { _fun0021_ip = 105; continue _fun0021 }
case 106:
                    var6 = false;
case 105:
                    var _closure3_slot2 = var1;
                    var _closure3_slot3 = var1;
                    var4 = _closure2_slot56;
                    if(var4) { _fun0021_ip = 107; continue _fun0021 }
case 108:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 87;
                    var7 = var13[var7];
                    var7 = var12.bind(var1)(var7);
                    var7 = var7.JumpTypes;
                    var7 = var7.INSTANT;
                    var4 = var11 === var7;
case 107:
                    var11 = !var4;
                    _closure3_slot2 = var11;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 88;
                    var7 = var13[var7];
                    var12 = var12.bind(var1)(var7);
                    var7 = var12.isIOS;
                    var7 = var7.bind(var12)();
                    if(!var7) { _fun0021_ip = 109; continue _fun0021 }
case 23:
                    if(var6) { _fun0021_ip = 109; continue _fun0021 }
case 110:
                    var6 = _closure2_slot118;
                    var14 = var6.bind(var1)(var10);
                    var6 = null;
                    if(!(var6 != var14)) { _fun0021_ip = 111; continue _fun0021 }
case 112:
                    var7 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var6 = 84;
                    var6 = var12[var6];
                    var13 = var7.bind(var1)(var6);
                    var12 = var13.scrollTo;
                    var6 = _closure2_slot101;
                    var7 = var6.current;
                    var6 = {};
                    var6['animated'] = var11;
                    var15 = var9 === var10;
                    var6['highlight'] = var15;
                    var6['position'] = var8;
                    var6 = var12.bind(var13)(var7, var14, var6);
                    _fun0021_ip = 111; continue _fun0021;
case 109:
                    var6 = _closure2_slot118;
                    var7 = var6.bind(var1)(var10);
                    _closure3_slot3 = var7;
                    var6 = null;
                    if(!(var6 != var7)) { _fun0021_ip = 111; continue _fun0021 }
case 113:
                    if(var5) { _fun0021_ip = 114; continue _fun0021 }
case 115:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 84;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.scrollTo;
                    var3 = _closure2_slot101;
                    var4 = var3.current;
                    var3 = {};
                    var3['animated'] = var11;
                    var9 = var9 === var10;
                    var3['highlight'] = var9;
                    var3['position'] = var8;
                    var3 = var5.bind(var6)(var4, var7, var3);
                    _fun0021_ip = 111; continue _fun0021;
case 114:
                    var3 = global;
                    var4 = var3.setTimeout;
                    var3 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 84;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.scrollIntoView;
                        var2 = _closure2_slot101;
                        var4 = var2.current;
                        var3 = _closure3_slot3;
                        var2 = {};
                        var8 = _closure3_slot2;
                        var2['animated'] = var8;
                        var8 = _closure3_slot1;
                        var7 = _closure3_slot0;
                        var7 = var8 === var7;
                        var2['highlight'] = var7;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        return var1;
                    };
                    var2 = 5;
                    var2 = var4.bind(var1)(var3, var2);
case 111:
                    return var1;
                }
            };
            var40 = var40.bind(var67)(var35, var36);
            var _closure2_slot119 = var40;
            var36 = var67.useCallback;
            var35 = new Array(13);
            var35[0] = var66;
            var66 = var32.animated;
            var35[1] = var66;
            var35[2] = var13;
            var35[3] = var37;
            var35[4] = var19;
            var35[5] = var39;
            var35[6] = var40;
            var35[7] = var8;
            var35[8] = var10;
            var35[9] = var9;
            var35[10] = var52;
            var35[11] = var23;
            var35[12] = var7;
            var23 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var2 = arguments[0];
                    var1 = undefined;
                    if(!(var2 === var1)) { _fun0022_ip = 116; continue _fun0022 }
case 117:
                    var2 = {};
case 116:
                    var11 = var2.forceRender;
                    if(!(var11 === var1)) { _fun0022_ip = 31; continue _fun0022 }
case 118:
                    var11 = false;
case 31:
                    var9 = var2.updateMessageIds;
                    if(!(var9 === var1)) { _fun0022_ip = 7; continue _fun0022 }
case 33:
                    var3 = global;
                    var3 = var3.Set;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var26 = var4;
                    var3 = new var26[var3](var25);
                    var9 = var3 instanceof Object ? var3 : var4;
case 7:
                    var15 = var2.scrollToMessageId;
                    if(!(var15 === var1)) { _fun0022_ip = 119; continue _fun0022 }
case 120:
                    var15 = null;
case 119:
                    var14 = var2.jumpTargetId;
                    if(!(var14 === var1)) { _fun0022_ip = 121; continue _fun0022 }
case 38:
                    var14 = null;
case 121:
                    var17 = var2.jumpType;
                    if(!(var17 === var1)) { _fun0022_ip = 122; continue _fun0022 }
case 123:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 87;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.JumpTypes;
                    var17 = var3.ANIMATED;
case 122:
                    var7 = var2.focusTargetId;
                    if(!(var7 === var1)) { _fun0022_ip = 124; continue _fun0022 }
case 125:
                    var7 = null;
case 124:
                    var5 = var2.ignoreEmbedDescriptionCache;
                    if(!(var5 === var1)) { _fun0022_ip = 126; continue _fun0022 }
case 127:
                    var5 = false;
case 126:
                    var6 = var2.messagesNewlyLoaded;
                    if(!(var6 === var1)) { _fun0022_ip = 128; continue _fun0022 }
case 129:
                    var6 = false;
case 128:
                    var12 = var2.shouldInitialScroll;
                    if(!(var12 === var1)) { _fun0022_ip = 130; continue _fun0022 }
case 131:
                    var12 = false;
case 130:
                    var16 = var2.minimizeScrolling;
                    if(!(var16 === var1)) { _fun0022_ip = 132; continue _fun0022 }
case 133:
                    var16 = false;
case 132:
                    var8 = var2.isRescrolling;
                    if(!(var8 === var1)) { _fun0022_ip = 134; continue _fun0022 }
case 135:
                    var8 = false;
case 134:
                    var10 = var2.overrideScrollJumpType;
                    var2 = _closure2_slot101;
                    var2 = var2.current;
                    var13 = null;
                    if(!(var13 != var2)) { _fun0022_ip = 136; continue _fun0022 }
case 137:
                    var4 = _closure2_slot117;
                    var2 = {};
                    var2['forceRender'] = var11;
                    var2['updateMessageIds'] = var9;
                    var2['ignoreEmbedDescriptionCache'] = var5;
                    var11 = var4.bind(var1)(var2);
                    var2 = _closure2_slot112;
                    var5 = var2.current;
                    var2 = _closure2_slot84;
                    var2 = var13 != var2;
                    var9 = undefined;
                    if(!var2) { _fun0022_ip = 138; continue _fun0022 }
case 139:
                    var2 = _closure2_slot84;
                    var2 = var2.startId;
                    var9 = undefined;
                    if(!(var2 === var15)) { _fun0022_ip = 138; continue _fun0022 }
case 140:
                    var4 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var2 = 84;
                    var2 = var18[var2];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.ChatScrollPosition;
                    var9 = var2.MIDDLE;
case 138:
                    if(!(var13 != var11)) { _fun0022_ip = 141; continue _fun0022 }
case 109:
                    var4 = var11.length;
                    var2 = 0;
                    if(!(!(var4 > var2))) { _fun0022_ip = 142; continue _fun0022 }
case 141:
                    var2 = _closure2_slot112;
                    var2 = var2.current;
                    if(!var2) { _fun0022_ip = 143; continue _fun0022 }
case 144:
                    var4 = _closure2_slot115;
                    var2 = var4.hasUpdates;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0022_ip = 145; continue _fun0022 }
case 143:
                    var2 = _closure2_slot112;
                    var2 = var2.current;
                    if(var2) { _fun0022_ip = 146; continue _fun0022 }
case 147:
                    if(!(var13 != var11)) { _fun0022_ip = 146; continue _fun0022 }
case 148:
                    var4 = var11.length;
                    var2 = 0;
                    if(!(var2 === var4)) { _fun0022_ip = 146; continue _fun0022 }
case 149:
                    var4 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var2 = 84;
                    var2 = var18[var2];
                    var18 = var4.bind(var1)(var2);
                    var4 = var18.fadeIn;
                    var2 = _closure2_slot101;
                    var2 = var2.current;
                    var2 = var4.bind(var18)(var2);
                    _fun0022_ip = 150; continue _fun0022;
case 146:
                    if(!(var13 != var15)) { _fun0022_ip = 151; continue _fun0022 }
case 152:
                    var4 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var2 = 83;
                    var2 = var18[var2];
                    var21 = var4.bind(var1)(var2);
                    var20 = var21.shouldJumpToOriginalPost;
                    var25 = _closure2_slot1;
                    var24 = _closure2_slot7;
                    var23 = _closure2_slot6;
                    var22 = _closure2_slot107;
                    var26 = var21;
                    var2 = var26[var20](var25, var24, var23, var22, var21);
                    if(var2) { _fun0022_ip = 151; continue _fun0022 }
case 153:
                    var4 = _closure2_slot119;
                    var2 = {};
                    var2['scrollToMessageId'] = var15;
                    var2['jumpTargetId'] = var14;
                    var2['jumpType'] = var17;
                    var2['scrollPosition'] = var9;
                    var2['minimizeScrolling'] = var16;
                    var2['isRescrolling'] = var8;
                    var2 = var4.bind(var1)(var2);
                    _fun0022_ip = 150; continue _fun0022;
case 151:
                    if(!(var13 != var7)) { _fun0022_ip = 150; continue _fun0022 }
case 154:
                    var2 = _closure2_slot118;
                    var16 = var2.bind(var1)(var7);
                    if(!(var13 != var16)) { _fun0022_ip = 150; continue _fun0022 }
case 155:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 84;
                    var2 = var8[var2];
                    var8 = var4.bind(var1)(var2);
                    var4 = var8.focus;
                    var2 = _closure2_slot101;
                    var2 = var2.current;
                    var2 = var4.bind(var8)(var2, var16);
                    _fun0022_ip = 150; continue _fun0022;
case 145:
                    var4 = _closure2_slot115;
                    var2 = var4.tryFlush;
                    var2 = var2.bind(var4)();
                    _fun0022_ip = 150; continue _fun0022;
case 142:
                    var4 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var2 = 89;
                    var2 = var16[var2];
                    var4 = var4.bind(var1)(var2);
                    var2 = {};
                    var17 = _closure2_slot110;
                    var16 = var17.getPreviousRows;
                    var16 = var16.bind(var17)();
                    var2['rows'] = var16;
                    var2['scrollToMessageId'] = var15;
                    var2['jumpTargetId'] = var14;
                    if(!(var13 == var10)) { _fun0022_ip = 156; continue _fun0022 }
case 157:
                    var13 = _closure2_slot6;
                    var10 = var13.jumpType;
case 156:
                    var2['jumpType'] = var10;
                    var10 = _closure2_slot112;
                    var10 = var10.current;
                    var10 = !var10;
                    if(var10) { _fun0022_ip = 158; continue _fun0022 }
case 159:
                    var10 = var12;
case 158:
                    var2['shouldInitialScroll'] = var10;
                    var10 = _closure2_slot102;
                    var10 = var10.animated;
                    var2['animated'] = var10;
                    var2['scrollPosition'] = var9;
                    var2['focusTargetId'] = var7;
                    var7 = var4.bind(var1)(var2);
                    var4 = _closure2_slot112;
                    var2 = true;
                    var4['current'] = var2;
                    var4 = _closure2_slot116;
                    var2 = {};
                    var2['rows'] = var11;
                    var9 = _closure2_slot6;
                    var9 = var9.hasMoreAfter;
                    var2['hasMoreMessagesAfter'] = var9;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 83;
                    var8 = var10[var8];
                    var10 = var9.bind(var1)(var8);
                    var9 = var10.isLoadingAtTop;
                    var8 = _closure2_slot113;
                    var8 = var8.current;
                    var8 = var9.bind(var10)(var11, var8);
                    var2['isLoadingAtTop'] = var8;
                    var2['scrollData'] = var7;
                    var2['HACK_iOSForceAnimations'] = var6;
                    var2 = var4.bind(var1)(var2);
case 150:
                    var2 = _closure2_slot112;
                    var2 = var2.current;
                    if(!var2) { _fun0022_ip = 160; continue _fun0022 }
case 161:
                    var4 = _closure2_slot112;
                    var4 = var4.current;
                    var2 = var4 !== var5;
case 160:
                    if(!var2) { _fun0022_ip = 162; continue _fun0022 }
case 163:
                    var2 = _closure2_slot4;
case 162:
                    if(!var2) { _fun0022_ip = 136; continue _fun0022 }
case 164:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 83;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.scrollToTopMessage;
                        var2 = _closure2_slot101;
                        var1 = _closure2_slot110;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var2 = 100;
                    var2 = var4.bind(var1)(var3, var2);
case 136:
                    return var1;
                }
            };
            var23 = var36.bind(var67)(var23, var35);
            var _closure2_slot120 = var23;
            var37 = var67.useCallback;
            var36 = new Array(2);
            var36[0] = var19;
            var36[1] = var23;
            var35 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var6 = arguments[1];
                    var2 = arguments[2];
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0023_ip = 32; continue _fun0023 }
case 79:
                    var6 = false;
case 32:
                    if(!(var2 === var1)) { _fun0023_ip = 92; continue _fun0023 }
case 165:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 87;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.JumpTypes;
                    var2 = var3.INSTANT;
case 92:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 83;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.maybeRescrollToMessageId;
                    var3 = {};
                    var8 = _closure2_slot101;
                    var3['chatRef'] = var8;
                    var8 = _closure2_slot118;
                    var3['findMessageIndex'] = var8;
                    var7 = _closure2_slot120;
                    var3['updateRows'] = var7;
                    var3['updateRowsEnabled'] = var6;
                    var3['jumpType'] = var2;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                }
            };
            var37 = var37.bind(var67)(var35, var36);
            var _closure2_slot121 = var37;
            var66 = var67.useCallback;
            var36 = new Array(5);
            var36[0] = var10;
            var36[1] = var18;
            var36[2] = var15;
            var36[3] = var3;
            var36[4] = var7;
            var35 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 83;
                var2 = var2[var1];
                var1 = undefined;
                var8 = var3.bind(var1)(var2);
                var7 = var8.clearRows;
                var13 = _closure2_slot101;
                var12 = _closure2_slot110;
                var11 = _closure2_slot7;
                var10 = _closure2_slot2;
                var9 = function(arg1) {
                    var4 = _closure2_slot103;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot105;
                    var3 = null;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot112;
                    var2 = false;
                    var3['current'] = var2;
                    return var1;
                };
                var14 = var8;
                var2 = var14[var7](var13, var12, var11, var10, var9, var8);
                return var1;
            };
            var36 = var66.bind(var67)(var35, var36);
            var _closure2_slot122 = var36;
            r123 = var67.useCallback;
            var66 = new Array(2);
            var66[0] = var7;
            var66[1] = var10;
            var35 = function(arg1) {
                var1 = arg1;
                var7 = var1.firstVisibleMessageRowIndex;
                var6 = var1.lastVisibleMessageRowIndex;
                var5 = var1.firstVisibleMessagePercentVisible;
                var4 = var1.lastVisibleMessagePercentVisible;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 83;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVisibleMessages;
                var1 = {};
                var1['firstVisibleMessageRowIndex'] = var7;
                var1['lastVisibleMessageRowIndex'] = var6;
                var1['firstVisibleMessagePercentVisible'] = var5;
                var1['lastVisibleMessagePercentVisible'] = var4;
                var5 = _closure2_slot110;
                var1['chatManager'] = var5;
                var4 = _closure2_slot7;
                var1['channelId'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var35 = r123.bind(var67)(var35, var66);
            var _closure2_slot123 = var35;
            r123 = var67.useCallback;
            var66 = new Array(5);
            var66[0] = var10;
            var66[1] = var14;
            var66[2] = var9;
            var66[3] = var65;
            var66[4] = var22;
            var22 = function() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = {};
                    var2 = function getMessage(arg1) {
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 90;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.find;
                        var5 = _closure2_slot6;
                        var2 = var5.toArray;
                        var2 = var2.bind(var5)();
                        var1 = function(arg1) {
                            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                                var1 = arg1;
                                var4 = var1.id;
                                var3 = var1.nonce;
                                var1 = _closure4_slot0;
                                var1 = var4 === var1;
                                if(var1) { _fun0025_ip = 52; continue _fun0025 }
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
                    var1['getMessage'] = var2;
                    var2 = _closure2_slot3;
                    var1['chatInputRef'] = var2;
                    var2 = _closure2_slot7;
                    var1['selectedChannelId'] = var2;
                    var2 = _closure2_slot6;
                    var2 = var2.revealedMessageId;
                    var1['revealedMessageId'] = var2;
                    var2 = _closure2_slot54;
                    var4 = null;
                    if(!(var4 == var2)) { _fun0024_ip = 166; continue _fun0024 }
case 167:
                    var2 = new Array(0);
                    _fun0024_ip = 73; continue _fun0024;
case 166:
                    var2 = _closure2_slot54;
case 73:
                    var1['uploads'] = var2;
                    var2 = _closure2_slot76;
                    var2 = var4 != var2;
                    if(!var2) { _fun0024_ip = 168; continue _fun0024 }
case 103:
                    var2 = _closure2_slot76;
case 168:
                    var1['paymentsBlocked'] = var2;
                    return var1;
                }
            };
            var22 = r123.bind(var67)(var22, var66);
            var _closure2_slot124 = var22;
            r123 = var67.useMemo;
            var66 = new Array(1);
            var66[0] = var22;
            var22 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 91;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.MessagesHandlers;
                var4 = _closure2_slot124;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var22 = r123.bind(var67)(var22, var66);
            var _closure2_slot125 = var22;
            r123 = var67.useCallback;
            var66 = new Array(7);
            var66[0] = r126;
            var66[1] = var8;
            var66[2] = var9;
            var66[3] = var13;
            var66[4] = var32;
            var66[5] = var10;
            var66[6] = var15;
            var13 = function(arg1) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var1 = arg1;
                    var6 = var1.isAtBottom;
                    var10 = var1.isNearBottom;
                    var4 = undefined;
                    if(!(var10 === var4)) { _fun0026_ip = 169; continue _fun0026 }
case 31:
                    var10 = false;
case 169:
                    var12 = var1.isNearTop;
                    if(!(var12 === var4)) { _fun0026_ip = 50; continue _fun0026 }
case 170:
                    var12 = false;
case 50:
                    var13 = var1.dragging;
                    if(!(var13 === var4)) { _fun0026_ip = 5; continue _fun0026 }
case 82:
                    var13 = false;
case 5:
                    var15 = var1.decelerating;
                    if(!(var15 === var4)) { _fun0026_ip = 7; continue _fun0026 }
case 171:
                    var15 = false;
case 7:
                    var5 = var1.isFirstMessageVisible;
                    if(!(var5 === var4)) { _fun0026_ip = 119; continue _fun0026 }
case 120:
                    var5 = false;
case 119:
                    var2 = _closure2_slot0;
                    var3 = var2.onScroll;
                    var7 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var7)) { _fun0026_ip = 172; continue _fun0026 }
case 47:
                    var7 = _closure2_slot6;
                    var7 = var7.length;
                    var11 = 0;
                    if(!(var11 === var7)) { _fun0026_ip = 122; continue _fun0026 }
case 46:
                    var7 = _closure2_slot6;
                    var7 = var7.loadingMore;
                    if(var7) { _fun0026_ip = 172; continue _fun0026 }
case 122:
                    var14 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var9 = 92;
                    var9 = var16[var9];
                    var14 = var14.bind(var4)(var9);
                    var9 = var14.getIsScreenReaderEnabled;
                    var14 = var9.bind(var14)();
                    var9 = _closure2_slot6;
                    var9 = var9.loadingMore;
                    var9 = !var9;
                    if(!var9) { _fun0026_ip = 173; continue _fun0026 }
case 16:
                    if(var13) { _fun0026_ip = 174; continue _fun0026 }
case 175:
                    var13 = var15;
case 174:
                    if(var13) { _fun0026_ip = 176; continue _fun0026 }
case 133:
                    var13 = var14;
case 176:
                    var9 = var13;
case 173:
                    if(!var9) { _fun0026_ip = 177; continue _fun0026 }
case 178:
                    var14 = _closure2_slot115;
                    var13 = var14.hasUpdates;
                    var13 = var13.bind(var14)();
                    var9 = !var13;
case 177:
                    var13 = _closure2_slot102;
                    var13 = var13.isNearTop;
                    if(var13) { _fun0026_ip = 179; continue _fun0026 }
case 180:
                    if(!var12) { _fun0026_ip = 179; continue _fun0026 }
case 181:
                    var12 = _closure2_slot6;
                    var12 = var12.hasMoreBefore;
                    if(!var12) { _fun0026_ip = 179; continue _fun0026 }
case 182:
                    if(!var9) { _fun0026_ip = 179; continue _fun0026 }
case 183:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var12 = 83;
                    var12 = var14[var12];
                    var16 = var13.bind(var4)(var12);
                    var15 = var16.loadMoreBefore;
                    var14 = _closure2_slot7;
                    var13 = _closure2_slot6;
                    var12 = function(arg1) {
                        var3 = _closure2_slot103;
                        var2 = {};
                        var1 = arg1;
                        var2['animated'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var12 = var15.bind(var16)(var14, var13, var12);
                    _fun0026_ip = 184; continue _fun0026;
case 179:
                    var12 = _closure2_slot102;
                    var12 = var12.isNearBottom;
                    if(var12) { _fun0026_ip = 185; continue _fun0026 }
case 186:
                    if(!var10) { _fun0026_ip = 185; continue _fun0026 }
case 187:
                    var10 = _closure2_slot6;
                    var10 = var10.hasMoreAfter;
                    if(!var10) { _fun0026_ip = 185; continue _fun0026 }
case 138:
                    if(!var9) { _fun0026_ip = 185; continue _fun0026 }
case 188:
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 83;
                    var9 = var12[var9];
                    var13 = var10.bind(var4)(var9);
                    var12 = var13.loadMoreAfter;
                    var10 = _closure2_slot7;
                    var9 = _closure2_slot6;
                    var8 = function(arg1) {
                        var3 = _closure2_slot103;
                        var2 = {};
                        var1 = arg1;
                        var2['animated'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8 = var12.bind(var13)(var10, var9, var8);
                    _fun0026_ip = 184; continue _fun0026;
case 185:
                    var8 = _closure2_slot102;
                    var8 = var8.isAtBottom;
                    if(!(var8 !== var6)) { _fun0026_ip = 184; continue _fun0026 }
case 189:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 69;
                    var7 = var9[var7];
                    var10 = var8.bind(var4)(var7);
                    var9 = var10.updateChannelDimensions;
                    var7 = _closure2_slot1;
                    var8 = var7.id;
                    var7 = 0;
                    if(!var6) { _fun0026_ip = 190; continue _fun0026 }
case 191:
                    var7 = 1;
case 190:
                    var18 = 1;
                    var21 = var10;
                    var20 = var8;
                    var19 = var7;
                    var17 = 0;
                    var6 = var21[var9](var20, var19, var18, var17, var16);
case 184:
                    if(!(var2 != var3)) { _fun0026_ip = 192; continue _fun0026 }
case 193:
                    var2 = {};
                    var2['isFirstMessageVisible'] = var5;
                    var2 = var3.bind(var4)(var2);
case 192:
                    var2 = _closure2_slot115;
                    var1 = var2.tryFlush;
                    var1 = var1.bind(var2)();
                    var1 = true;
                    return var1;
case 172:
                    var1 = false;
                    return var1;
                }
            };
            var13 = r123.bind(var67)(var13, var66);
            var _closure2_slot126 = var13;
            r123 = var67.useCallback;
            var66 = new Array(13);
            var66[0] = var28;
            var66[1] = var10;
            var66[2] = var30;
            var66[3] = var29;
            var66[4] = var12;
            var66[5] = var8;
            var66[6] = var9;
            var66[7] = var15;
            var66[8] = var55;
            var66[9] = var18;
            var66[10] = var24;
            var66[11] = var7;
            var66[12] = var13;
            var24 = function(arg1) {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var12 = var1.isAtBottom;
                    var11 = var1.isNearBottom;
                    var10 = var1.isNearTop;
                    var9 = var1.dragging;
                    var8 = var1.decelerating;
                    var6 = var1.firstVisibleMessageIndex;
                    var18 = var1.firstVisibleMessagePercentVisible;
                    var5 = var1.lastVisibleMessageIndex;
                    var15 = var1.lastVisibleMessagePercentVisible;
                    var4 = var1.shouldShowJumpToPresent;
                    var2 = var1.isFirstMessageVisible;
                    var20 = var1.changesetUpdateId;
                    var13 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 93;
                    var7 = var7[var1];
                    var1 = undefined;
                    var16 = var13.bind(var1)(var7);
                    var14 = var16.getChangesetIdForChat;
                    var13 = _closure2_slot101;
                    var13 = var13.current;
                    var19 = var14.bind(var16)(var13);
                    if(!(var20 !== var19)) { _fun0027_ip = 194; continue _fun0027 }
case 195:
                    var13 = _closure2_slot95;
                    if(!var13) { _fun0027_ip = 196; continue _fun0027 }
case 124:
                    var17 = _closure1_slot61;
                    var16 = var17.log;
                    var23 = _closure2_slot7;
                    var24 = 'STAFF-ACK-LOG: Ignoring outdated scroll event.';
                    var25 = var17;
                    var22 = var20;
                    var21 = var19;
                    var13 = var25[var16](var24, var23, var22, var21, var20);
                    _fun0027_ip = 196; continue _fun0027;
case 194:
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var3 = 83;
                    var3 = var17[var3];
                    var14 = var16.bind(var1)(var3);
                    var13 = var14.handleVisibleMessagesChange;
                    var3 = {};
                    var3['firstVisibleMessageRowIndex'] = var6;
                    var3['firstVisibleMessagePercentVisible'] = var18;
                    var3['lastVisibleMessageRowIndex'] = var5;
                    var3['lastVisibleMessagePercentVisible'] = var15;
                    var15 = 94;
                    var15 = var17[var15];
                    var15 = var16.bind(var1)(var15);
                    var15 = var15.QuestsVisibleMessagesChangedSource;
                    var15 = var15.SCROLL;
                    var3['source'] = var15;
                    var15 = _closure2_slot110;
                    var3['chatManager'] = var15;
                    var15 = _closure2_slot85;
                    var3['shouldTrackAnnouncementMessageViews'] = var15;
                    var15 = _closure2_slot86;
                    var3['shouldTrackRichPresenceInviteEmbedViews'] = var15;
                    var15 = _closure2_slot8;
                    var3['guildId'] = var15;
                    var15 = _closure2_slot7;
                    var3['channelId'] = var15;
                    var15 = _closure2_slot1;
                    var3['channel'] = var15;
                    var3 = var13.bind(var14)(var3);
                    var3 = {};
                    var3['isAtBottom'] = var12;
                    var3['isNearBottom'] = var11;
                    var3['isNearTop'] = var10;
                    var3['dragging'] = var9;
                    var3['decelerating'] = var8;
                    var3['shouldShowJumpToPresent'] = var4;
                    var3['isFirstMessageVisible'] = var2;
                    var2 = function(arg1) {
                        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                            var3 = arg1;
                            var9 = var3.isAtBottom;
                            var8 = var3.isNearBottom;
                            var1 = undefined;
                            if(!(var8 === var1)) { _fun0028_ip = 169; continue _fun0028 }
case 31:
                            var8 = false;
case 169:
                            var7 = var3.isNearTop;
                            if(!(var7 === var1)) { _fun0028_ip = 50; continue _fun0028 }
case 170:
                            var7 = false;
case 50:
                            var6 = var3.dragging;
                            if(!(var6 === var1)) { _fun0028_ip = 5; continue _fun0028 }
case 82:
                            var6 = false;
case 5:
                            var5 = var3.decelerating;
                            if(!(var5 === var1)) { _fun0028_ip = 7; continue _fun0028 }
case 171:
                            var5 = false;
case 7:
                            var4 = var3.shouldShowJumpToPresent;
                            if(!(var4 === var1)) { _fun0028_ip = 119; continue _fun0028 }
case 120:
                            var4 = false;
case 119:
                            var _closure4_slot0 = var4;
                            var11 = var3.isFirstMessageVisible;
                            if(!(var11 === var1)) { _fun0028_ip = 197; continue _fun0028 }
case 41:
                            var11 = false;
case 197:
                            var10 = _closure2_slot126;
                            var4 = {};
                            var4['isAtBottom'] = var9;
                            var4['isNearBottom'] = var8;
                            var4['isNearTop'] = var7;
                            var4['dragging'] = var6;
                            var4['decelerating'] = var5;
                            var4['isFirstMessageVisible'] = var11;
                            var4 = var10.bind(var1)(var4);
                            if(!var4) { _fun0028_ip = 198; continue _fun0028 }
case 199:
                            var4 = _closure2_slot103;
                            var3 = {};
                            var3['isAtBottom'] = var9;
                            var3['isNearBottom'] = var8;
                            var3['isNearTop'] = var7;
                            var3['dragging'] = var6;
                            var3['decelerating'] = var5;
                            var3 = var4.bind(var1)(var3);
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 95;
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.batchUpdates;
                            var2 = function() {
                                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                                    var5 = _closure1_slot13;
                                    var4 = _closure2_slot7;
                                    var3 = _closure2_slot2;
                                    var2 = _closure4_slot0;
                                    if(var2) { _fun0029_ip = 53; continue _fun0029 }
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
case 198:
                            return var1;
                        }
                    };
                    var2 = var2.bind(var1)(var3);
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0027_ip = 196; continue _fun0027 }
case 200:
                    var4 = _closure2_slot5;
                    var3 = var4.handleScrollPosition;
                    var2 = {};
                    var8 = _closure2_slot110;
                    var7 = var8.getPreviousRows;
                    var7 = var7.bind(var8)();
                    var2['rows'] = var7;
                    var2['firstVisibleMessageRowIndex'] = var6;
                    var2['lastVisibleMessageRowIndex'] = var5;
                    var2 = var3.bind(var4)(var2);
case 196:
                    return var1;
                }
            };
            var24 = r123.bind(var67)(var24, var66);
            r123 = var67.useMemo;
            var66 = new Array(2);
            var66[0] = var17;
            var66[1] = var22;
            var17 = function() {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    var1 = {};
                    var3 = function handleTapImage(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapImage;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapImage'] = var3;
                    var3 = function handleTapChannel(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapChannel;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapChannel'] = var3;
                    var3 = function handleLongPressChannel(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleLongPressChannel;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleLongPressChannel'] = var3;
                    var3 = function handleTapAttachmentLink(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapAttachmentLink;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapAttachmentLink'] = var3;
                    var3 = function handleLongPressAttachmentLink(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleLongPressAttachmentLink;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleLongPressAttachmentLink'] = var3;
                    var3 = function handleTapCall(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapCall;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapCall'] = var3;
                    var3 = function handleTapMention(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapMention;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapMention'] = var3;
                    var3 = function handleTapCommandMention(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapCommandMention;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapCommandMention'] = var3;
                    var3 = function handleLongPressCommandMention(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleLongPressCommandMention;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleLongPressCommandMention'] = var3;
                    var3 = function handleTapLink(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapLink;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapLink'] = var3;
                    var3 = function handleLongPressLink(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleLongPressLink;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleLongPressLink'] = var3;
                    var3 = function handleTapReaction(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapReaction;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapReaction'] = var3;
                    var3 = function handleLongPressReaction(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleLongPressReaction;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleLongPressReaction'] = var3;
                    var3 = function handleOpenSticker(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleOpenSticker;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleOpenSticker'] = var3;
                    var3 = function handleTapAvatar(arg1) {
                        var4 = _closure2_slot125;
                        var3 = var4.handleOpenProfile;
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 96;
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
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapUsername;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapUsername'] = var3;
                    var3 = function handleLongPressUsername(arg1) {
                        var4 = _closure2_slot125;
                        var3 = var4.handleOpenProfile;
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 96;
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
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapThreadEmbed;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapThreadEmbed'] = var3;
                    var3 = function handleTapReply(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapReply;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapReply'] = var3;
                    var3 = function handleTapSummary(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapSummary;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapSummary'] = var3;
                    var3 = function handleTapSummaryJump(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapSummaryJump;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapSummaryJump'] = var3;
                    var3 = function handleLongPressMessage(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleLongPressMessage;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleLongPressMessage'] = var3;
                    var3 = function handleInitiateReply(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleInitiateReply;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleInitiateReply'] = var3;
                    var3 = function handleInitiateEdit(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleInitiateEdit;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleInitiateEdit'] = var3;
                    var3 = function handleInitiateThread(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleInitiateThread;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleInitiateThread'] = var3;
                    var3 = function handleTapMessage(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapMessage;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapMessage'] = var3;
                    var4 = _closure2_slot100;
                    var3 = undefined;
                    if(!var4) { _fun0030_ip = 201; continue _fun0030 }
case 138:
                    var3 = function(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleDoubleTapMessage;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
case 201:
                    var1['handleDoubleTapMessage'] = var3;
                    var3 = function handleTapCancelUploadItem(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapCancelUploadItem;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapCancelUploadItem'] = var3;
                    var3 = function handleTapInviteEmbedAccept(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapInviteEmbedAccept;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapInviteEmbedAccept'] = var3;
                    var3 = function handleTapInviteEmbed(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapInviteEmbed;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapInviteEmbed'] = var3;
                    var3 = function handleTapJoinActivity(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapJoinActivity;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapJoinActivity'] = var3;
                    var3 = function handleTapJoinRichPresence(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapJoinRichPresence;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapJoinRichPresence'] = var3;
                    var3 = function handleTapGiftCodeEmbed(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapGiftCodeEmbed;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapGiftCodeEmbed'] = var3;
                    var3 = function handleTapGiftCodeAccept(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapGiftCodeAccept;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapGiftCodeAccept'] = var3;
                    var3 = function handleTapReferralRedeem(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapReferralRedeem;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapReferralRedeem'] = var3;
                    var3 = function handleTapEmoji(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapEmoji;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapEmoji'] = var3;
                    var3 = function handleTapTimestamp(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapTimestamp;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapTimestamp'] = var3;
                    var3 = function handleTapInlineCode(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapInlineCode;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapInlineCode'] = var3;
                    var3 = function handleTapRoleIcon(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapRoleIcon;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapRoleIcon'] = var3;
                    var3 = function handleTapGameIcon(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapGameIcon;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapGameIcon'] = var3;
                    var3 = function handleTapSuppressNotificationsIcon(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapSuppressNotificationsIcon;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapSuppressNotificationsIcon'] = var3;
                    var3 = function handleTapConnectionsRoleTag(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapConnectionsRoleTag;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapConnectionsRoleTag'] = var3;
                    var3 = function handleTapTimeoutIcon() {
                        var2 = _closure2_slot125;
                        var1 = var2.handleTapTimeoutIcon;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var1['handleTapTimeoutIcon'] = var3;
                    var3 = function handleTapButtonActionComponent(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapButtonActionComponent;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapButtonActionComponent'] = var3;
                    var3 = function handleTapSelectActionComponent(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapSelectActionComponent;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapSelectActionComponent'] = var3;
                    var3 = function handleTapWelcomeReply(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapWelcomeReply;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapWelcomeReply'] = var3;
                    var3 = function handleTapInviteToSpeak(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapInviteToSpeak;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapInviteToSpeak'] = var3;
                    var3 = function handleTapAutoModerationActions(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapAutoModerationActions;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapAutoModerationActions'] = var3;
                    var3 = function handleTapAutoModerationFeedback(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapAutoModerationFeedback;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapAutoModerationFeedback'] = var3;
                    var3 = function handleTapFollowForumPost(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapFollowForumPost;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapFollowForumPost'] = var3;
                    var3 = function handleTapShareForumPost(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapShareForumPost;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapShareForumPost'] = var3;
                    var3 = function handleTapReactionOverflow(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapReactionOverflow;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapReactionOverflow'] = var3;
                    var3 = function handleCopyText(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleCopyText;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleCopyText'] = var3;
                    var3 = function handleTapOpTag(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapOpTag;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapOpTag'] = var3;
                    var3 = function handleTapTag(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapTag;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapTag'] = var3;
                    var3 = function handleTapRemix(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapRemix;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapRemix'] = var3;
                    var3 = function handleMediaAttachmentPlaybackStarted(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleMediaAttachmentPlaybackStarted;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleMediaAttachmentPlaybackStarted'] = var3;
                    var3 = function handleMediaAttachmentPlaybackEnded(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleMediaAttachmentPlaybackEnded;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleMediaAttachmentPlaybackEnded'] = var3;
                    var3 = function handlerVoiceMessagePlaybackFailed(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleVoiceMessagePlaybackFailed;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handlerVoiceMessagePlaybackFailed'] = var3;
                    var3 = function handleTapPostPreviewEmbed(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapPostPreviewEmbed;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapPostPreviewEmbed'] = var3;
                    var3 = function handleTapDismissMediaPostSharePrompt(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapDismissMediaPostSharePrompt;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapDismissMediaPostSharePrompt'] = var3;
                    var3 = function handleTapChannelPromptButton(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapChannelPromptButton;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapChannelPromptButton'] = var3;
                    var3 = function handleTapObscuredMediaLearnMore(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapObscuredMediaLearnMore;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapObscuredMediaLearnMore'] = var3;
                    var3 = function handleTapObscuredMediaToggle(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.onTapObscuredMediaToggle;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapObscuredMediaToggle'] = var3;
                    var3 = function handleTapSafetyPolicyNoticeEmbed(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapSafetyPolicyNoticeEmbed;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapSafetyPolicyNoticeEmbed'] = var3;
                    var3 = function handleTapSafetySystemNotificationCta(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapSafetySystemNotificationCta;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapSafetySystemNotificationCta'] = var3;
                    var3 = function handleTapPollAnswer(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapPollAnswer;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapPollAnswer'] = var3;
                    var3 = function handleTapPollSubmitVote(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapPollSubmitVote;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapPollSubmitVote'] = var3;
                    var3 = function handleTapPollAction(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapPollAction;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapPollAction'] = var3;
                    var3 = function handleLongPressPollImage(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleLongPressPollImage;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleLongPressPollImage'] = var3;
                    var3 = function handleTapCtaButton(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapCtaButton;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapCtaButton'] = var3;
                    var3 = function handleMessageAccessibilityAction(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleMessageAccessibilityAction;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleMessageAccessibilityAction'] = var3;
                    var3 = function handleTapForwardFooter(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapForwardFooter;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapForwardFooter'] = var3;
                    var3 = function handleTapInlineForward(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapInlineForward;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapInlineForward'] = var3;
                    var3 = function handleTapClanTagChiplet(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapClanTagChiplet;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapClanTagChiplet'] = var3;
                    var3 = function handleTapContentInventoryEntryEmbed(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapContentInventoryEntryEmbed;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapContentInventoryEntryEmbed'] = var3;
                    var3 = function handleTapSoundmoji(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapSoundmoji;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapSoundmoji'] = var3;
                    var3 = function handleTapAppMessageEmbed(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapAppMessageEmbed;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapAppMessageEmbed'] = var3;
                    var3 = function handleTapSharedClientTheme(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleTapPreviewSharedClientTheme;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapSharedClientTheme'] = var3;
                    var2 = function handleSharedClientThemeViewed(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleSharedClientThemeViewed;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleSharedClientThemeViewed'] = var2;
                    return var1;
                }
            };
            var17 = r123.bind(var67)(var17, var66);
            r123 = var67.useCallback;
            var66 = new Array(4);
            var66[0] = var22;
            var66[1] = var10;
            var66[2] = var9;
            var66[3] = var15;
            var22 = function(arg1) {
                var5 = _closure2_slot125;
                var4 = var5.handleTapSeparator;
                var3 = arg1;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 83;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.loadMoreBefore;
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot6;
                    var1 = function(arg1) {
                        var3 = _closure2_slot103;
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
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 83;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.loadMoreAfter;
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot6;
                    var1 = function(arg1) {
                        var3 = _closure2_slot103;
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
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var22 = r123.bind(var67)(var22, var66);
            var41 = r124[var41];
            var66 = var43.bind(var4)(var41);
            var43 = var66.useMessagesLifecycle;
            var41 = {};
            var41['messages'] = var9;
            var41['isMessagesReady'] = r122;
            var41['oldestUnreadMessageId'] = var38;
            var41['channelId'] = var10;
            var41['screenIndex'] = var18;
            var41['updateRows'] = var23;
            var41['scrollToMessageId'] = var40;
            var41 = var43.bind(var66)(var41);
            var66 = var67.useMemo;
            var43 = new Array(79);
            var43[0] = r121;
            var43[1] = r120;
            var43[2] = r117;
            var43[3] = r116;
            var43[4] = r115;
            var43[5] = r112;
            var43[6] = var81;
            var43[7] = r118;
            var43[8] = r101;
            var43[9] = r100;
            var43[10] = r111;
            var43[11] = var70;
            var43[12] = var77;
            var43[13] = var69;
            var43[14] = var80;
            var43[15] = var68;
            var43[16] = var38;
            var43[17] = var75;
            var43[18] = var74;
            var43[19] = var73;
            var43[20] = var78;
            var43[21] = var72;
            var43[22] = var60;
            var43[23] = r103;
            var43[24] = var50;
            var43[25] = var42;
            var43[26] = var58;
            var43[27] = var57;
            var43[28] = var54;
            var43[29] = var53;
            var43[30] = var20;
            var43[31] = var63;
            var43[32] = var61;
            var43[33] = var62;
            var43[34] = var59;
            var43[35] = var82;
            var43[36] = var25;
            var43[37] = var79;
            var43[38] = var83;
            var43[39] = var52;
            var43[40] = var49;
            var43[41] = var51;
            var43[42] = var93;
            var43[43] = var55;
            var43[44] = var56;
            var43[45] = var48;
            var43[46] = var47;
            var43[47] = r109;
            var43[48] = r108;
            var43[49] = r107;
            var43[50] = r106;
            var43[51] = r105;
            var43[52] = var95;
            var43[53] = var98;
            var43[54] = var97;
            var43[55] = var96;
            var43[56] = r104;
            var43[57] = var100;
            var43[58] = var99;
            var43[59] = var88;
            var43[60] = var87;
            var43[61] = var86;
            var43[62] = var94;
            var43[63] = var92;
            var43[64] = var91;
            var43[65] = var90;
            var43[66] = var89;
            var43[67] = var76;
            var43[68] = r119;
            var43[69] = r110;
            var43[70] = var46;
            var43[71] = r114;
            var43[72] = r113;
            var43[73] = var85;
            var43[74] = var84;
            var43[75] = r102;
            var43[76] = var65;
            var43[77] = var45;
            var43[78] = var44;
            var41 = function() {
                var1 = {};
                var3 = _closure2_slot59;
                var1['channelThreadsVersion'] = var3;
                var3 = _closure2_slot69;
                var1['rsvpVersion'] = var3;
                var3 = _closure2_slot71;
                var1['communicationDisabledVersion'] = var3;
                var3 = _closure2_slot72;
                var1['messageAuthorMembers'] = var3;
                var3 = _closure2_slot70;
                var1['failedMessagesVersion'] = var3;
                var3 = _closure2_slot62;
                var1['interactionComponentStatesVersion'] = var3;
                var3 = _closure2_slot97;
                var1['forwardGuildsVersion'] = var3;
                var3 = _closure2_slot63;
                var1['hasLoadedExperiments'] = var3;
                var3 = _closure2_slot77;
                var1['isFollowingForumPost'] = var3;
                var3 = _closure2_slot78;
                var1['showMediaPostSharePrompt'] = var3;
                var3 = _closure2_slot89;
                var1['shouldDisableInteractiveComponents'] = var3;
                var3 = _closure2_slot47;
                var1['isCallActive'] = var3;
                var3 = _closure2_slot48;
                var1['voiceStateChannelId'] = var3;
                var3 = _closure2_slot53;
                var1['participantsLength'] = var3;
                var3 = _closure2_slot42;
                var1['editingMessageId'] = var3;
                var3 = _closure2_slot43;
                var1['replyingMessageId'] = var3;
                var3 = _closure2_slot44;
                var1['oldestUnreadMessageId'] = var3;
                var3 = _closure2_slot64;
                var1['isSpamMessageRequest'] = var3;
                var3 = _closure2_slot65;
                var1['isMessageRequest'] = var3;
                var3 = _closure2_slot74;
                var1['currentUserCommunicationDisabled'] = var3;
                var3 = _closure2_slot81;
                var1['androidKeyboardHeight'] = var3;
                var3 = _closure2_slot73;
                var1['renderCommunicationDisabled'] = var3;
                var3 = _closure2_slot98;
                var1['guildInviteColorsFetched'] = var3;
                var3 = _closure2_slot80;
                var1['lazyCacheStatus'] = var3;
                var3 = _closure2_slot106;
                var1['shouldForceRender'] = var3;
                var3 = _closure2_slot67;
                var1['isMessagesCached'] = var3;
                var3 = _closure2_slot99;
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
                var3 = _closure2_slot92;
                var1['containerWidth'] = var3;
                var3 = _closure2_slot10;
                var1['guildSystemChannelFlags'] = var3;
                var3 = _closure2_slot75;
                var1['userSettingsLocale'] = var3;
                var3 = _closure2_slot57;
                var1['roleStyle'] = var3;
                var3 = _closure2_slot46;
                var1['canSendMessages'] = var3;
                var3 = _closure2_slot79;
                var1['showPushFeedback'] = var3;
                var3 = _closure2_slot84;
                var1['selectedSummary'] = var3;
                var3 = _closure2_slot87;
                var1['shouldObscureSpoiler'] = var3;
                var3 = _closure2_slot96;
                var1['shouldFilterKeywords'] = var3;
                var3 = _closure2_slot91;
                var1['explicitMediaFalsePositiveInfo'] = var3;
                var3 = _closure2_slot95;
                var1['isStaff'] = var3;
                var3 = _closure2_slot88;
                var1['isAgeVerified'] = var3;
                var3 = _closure2_slot19;
                var1['theme'] = var3;
                var3 = _closure2_slot58;
                var1['saturation'] = var3;
                var3 = _closure2_slot29;
                var1['activityInstanceIds'] = var3;
                var3 = _closure2_slot31;
                var1['activityParticipants'] = var3;
                var3 = _closure2_slot30;
                var1['activityInstancePresenceDetails'] = var3;
                var3 = _closure2_slot32;
                var1['messagesWithActivitiesLaunching'] = var3;
                var3 = _closure2_slot27;
                var1['invalidApplicationIds'] = var3;
                var3 = _closure2_slot28;
                var1['applicationAssetFetchingIds'] = var3;
                var3 = _closure2_slot24;
                var1['appDirectoryEmbedApplications'] = var3;
                var3 = _closure2_slot25;
                var1['invalidAppDirectoryEmbedApplicationIds'] = var3;
                var3 = _closure2_slot26;
                var1['appDirectoryEmbedApplicationFetchStates'] = var3;
                var3 = _closure2_slot39;
                var1['referralTrialOfferIds'] = var3;
                var3 = _closure2_slot21;
                var1['messageAuthorActivities'] = var3;
                var3 = _closure2_slot22;
                var1['activityInviteMessageIds'] = var3;
                var3 = _closure2_slot50;
                var1['resolvingGiftCodes'] = var3;
                var3 = _closure2_slot51;
                var1['resolvedGiftCodes'] = var3;
                var3 = _closure2_slot52;
                var1['acceptingGiftCodes'] = var3;
                var3 = _closure2_slot33;
                var1['mediaPostPreviewEmbeds'] = var3;
                var3 = _closure2_slot34;
                var1['guildTemplates'] = var3;
                var3 = _closure2_slot35;
                var1['buildOverrides'] = var3;
                var3 = _closure2_slot36;
                var1['quests'] = var3;
                var3 = _closure2_slot37;
                var1['isFetchingCurrentQuests'] = var3;
                var3 = _closure2_slot23;
                var1['invites'] = var3;
                var3 = _closure2_slot55;
                var1['repliedIds'] = var3;
                var3 = _closure2_slot90;
                var1['channelPolls'] = var3;
                var3 = _closure2_slot93;
                var1['unloadedContentEntryMessageIds'] = var3;
                var3 = _closure2_slot60;
                var1['interactionStates'] = var3;
                var3 = _closure2_slot61;
                var1['interactionComponentStates'] = var3;
                var3 = _closure2_slot40;
                var1['trialOffer'] = var3;
                var3 = _closure2_slot41;
                var1['isPremiumTier2User'] = var3;
                var3 = _closure2_slot49;
                var1['threadStartingReferenceMessage'] = var3;
                var2 = _closure2_slot54;
                var1['uploads'] = var2;
                return var1;
            };
            var43 = var66.bind(var67)(var41, var43);
            var67 = _closure1_slot1;
            var66 = 97;
            var41 = r124[var66];
            var41 = var67.bind(var4)(var41);
            var43 = var41.bind(var4)(var43);
            var _closure2_slot127 = var43;
            var41 = r124[var66];
            var41 = var67.bind(var4)(var41);
            r123 = var41.bind(var4)(var10);
            var _closure2_slot128 = r123;
            var41 = r124[var66];
            var41 = var67.bind(var4)(var41);
            var41 = var41.bind(var4)(r125);
            var _closure2_slot129 = var41;
            var66 = r124[var66];
            var66 = var67.bind(var4)(var66);
            var66 = var66.bind(var4)(var9);
            var _closure2_slot130 = var66;
            var67 = r122;
            if(!var67) { _fun0004_ip = 202; continue _fun0004 }
case 203:
            var67 = !var42;
case 202:
            if(!var67) { _fun0004_ip = 204; continue _fun0004 }
case 205:
            r124 = var5 == var43;
            var42 = undefined;
            if(r124) { _fun0004_ip = 206; continue _fun0004 }
case 207:
            var42 = var43.isMessagesCached;
case 206:
            var67 = var42;
case 204:
            var _closure2_slot131 = var67;
            var42 = _closure1_slot5;
            r126 = var42.useEffect;
            r124 = new Array(3);
            r124[0] = var10;
            r124[1] = r123;
            r124[2] = var36;
            r123 = function() {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    var3 = _closure2_slot128;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0031_ip = 34; continue _fun0031 }
case 54:
                    var4 = _closure2_slot128;
                    var3 = _closure2_slot7;
                    var2 = var4 !== var3;
case 34:
                    if(!var2) { _fun0031_ip = 208; continue _fun0031 }
case 72:
                    var2 = _closure2_slot122;
                    var4 = undefined;
                    var2 = var2.bind(var4)();
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 69;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.clearChannelDimensions;
                    var1 = _closure2_slot7;
                    var1 = var2.bind(var3)(var1);
case 208:
                    var1 = undefined;
                    return var1;
                }
            };
            r123 = r126.bind(var42)(r123, r124);
            r124 = var42.useEffect;
            r123 = new Array(3);
            r123[0] = r125;
            r123[1] = var41;
            r123[2] = var15;
            var41 = function() {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                    var2 = _closure2_slot129;
                    var2 = !var2;
                    if(!var2) { _fun0032_ip = 209; continue _fun0032 }
case 210:
                    var2 = _closure2_slot68;
case 209:
                    if(!var2) { _fun0032_ip = 211; continue _fun0032 }
case 29:
                    var3 = _closure2_slot103;
                    var2 = {};
                    var1 = false;
                    var2['hasHandledScroll'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 211:
                    var1 = undefined;
                    return var1;
                }
            };
            var41 = r124.bind(var42)(var41, r123);
            r123 = var42.useEffect;
            var41 = new Array(8);
            var41[0] = var8;
            var41[1] = var10;
            var41[2] = var9;
            var41[3] = var39;
            var41[4] = var33;
            var41[5] = var66;
            var41[6] = r122;
            var41[7] = var34;
            var34 = function() {
                _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var5 = 83;
                    var2 = var1[var5];
                    var1 = undefined;
                    var10 = var4.bind(var1)(var2);
                    var9 = var10.shouldJumpToOriginalPost;
                    var14 = _closure2_slot1;
                    var13 = _closure2_slot7;
                    var12 = _closure2_slot6;
                    var11 = _closure2_slot107;
                    var15 = var10;
                    var4 = var15[var9](var14, var13, var12, var11, var10);
                    if(!var4) { _fun0033_ip = 14; continue _fun0033 }
case 83:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.scrollToTop;
                    var5 = _closure2_slot101;
                    var4 = _closure2_slot56;
                    var3 = false;
                    var3 = var6.bind(var7)(var5, var4, var3);
                    var3 = _closure2_slot130;
                    var5 = null;
                    var3 = var5 == var3;
                    var4 = undefined;
                    if(var3) { _fun0033_ip = 212; continue _fun0033 }
case 213:
                    var3 = _closure2_slot130;
                    var4 = var3.jumpSequenceId;
case 212:
                    var3 = _closure2_slot6;
                    var5 = var5 == var3;
                    var3 = undefined;
                    if(var5) { _fun0033_ip = 44; continue _fun0033 }
case 214:
                    var5 = _closure2_slot6;
                    var3 = var5.jumpSequenceId;
case 44:
                    if(!(var4 === var3)) { _fun0033_ip = 14; continue _fun0033 }
case 127:
                    var3 = _closure2_slot108;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
case 14:
                    return var1;
                }
            };
            var34 = r123.bind(var42)(var34, var41);
            var41 = var42.useEffect;
            var34 = new Array(168);
            var34[0] = r122;
            var34[1] = var9;
            var34[2] = r121;
            var34[3] = r120;
            var34[4] = r119;
            var34[5] = r118;
            var34[6] = r117;
            var34[7] = r116;
            var34[8] = r115;
            var34[9] = r114;
            var34[10] = r113;
            var34[11] = r112;
            var34[12] = r111;
            var34[13] = r110;
            var34[14] = r109;
            var34[15] = r108;
            var34[16] = r107;
            var34[17] = r106;
            var34[18] = r105;
            var34[19] = r104;
            var34[20] = r103;
            var34[21] = r102;
            var34[22] = r101;
            var34[23] = r100;
            var34[24] = var100;
            var34[25] = var99;
            var34[26] = var98;
            var34[27] = var97;
            var34[28] = var96;
            var34[29] = var95;
            var34[30] = var94;
            var34[31] = var93;
            var34[32] = var92;
            var34[33] = var91;
            var34[34] = var90;
            var34[35] = var89;
            var34[36] = var88;
            var34[37] = var87;
            var34[38] = var86;
            var34[39] = var85;
            var34[40] = var84;
            var34[41] = var83;
            var34[42] = var82;
            var34[43] = var81;
            var34[44] = var80;
            var34[45] = var79;
            var34[46] = var78;
            var34[47] = var77;
            var34[48] = var76;
            var34[49] = var75;
            var34[50] = var74;
            var34[51] = var73;
            var34[52] = var72;
            var34[53] = var71;
            var34[54] = var12;
            var34[55] = var10;
            var34[56] = var8;
            var34[57] = var23;
            var34[58] = var70;
            var34[59] = var69;
            var34[60] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 215; continue _fun0004 }
case 216:
            var68 = var43.channelThreadsVersion;
case 215:
            var34[61] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 217; continue _fun0004 }
case 218:
            var68 = var43.rsvpVersion;
case 217:
            var34[62] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 219; continue _fun0004 }
case 220:
            var68 = var43.repliedIds;
case 219:
            var34[63] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 221; continue _fun0004 }
case 222:
            var68 = var43.hasLoadedExperiments;
case 221:
            var34[64] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 223; continue _fun0004 }
case 224:
            var68 = var43.communicationDisabledVersion;
case 223:
            var34[65] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 225; continue _fun0004 }
case 226:
            var68 = var43.messageAuthorMembers;
case 225:
            var34[66] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 227; continue _fun0004 }
case 228:
            var68 = var43.failedMessagesVersion;
case 227:
            var34[67] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 229; continue _fun0004 }
case 230:
            var68 = var43.interactionStates;
case 229:
            var34[68] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 231; continue _fun0004 }
case 232:
            var68 = var43.interactionComponentStates;
case 231:
            var34[69] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 233; continue _fun0004 }
case 234:
            var68 = var43.interactionComponentStatesVersion;
case 233:
            var34[70] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 235; continue _fun0004 }
case 236:
            var68 = var43.shouldDisableInteractiveComponents;
case 235:
            var34[71] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 237; continue _fun0004 }
case 238:
            var68 = var43.channelPolls;
case 237:
            var34[72] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 239; continue _fun0004 }
case 240:
            var68 = var43.activityInstanceIds;
case 239:
            var34[73] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 241; continue _fun0004 }
case 242:
            var68 = var43.activityParticipants;
case 241:
            var34[74] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 243; continue _fun0004 }
case 244:
            var68 = var43.activityInstancePresenceDetails;
case 243:
            var34[75] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 245; continue _fun0004 }
case 246:
            var68 = var43.messagesWithActivitiesLaunching;
case 245:
            var34[76] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 247; continue _fun0004 }
case 248:
            var68 = var43.invalidApplicationIds;
case 247:
            var34[77] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 249; continue _fun0004 }
case 250:
            var68 = var43.applicationAssetFetchingIds;
case 249:
            var34[78] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 251; continue _fun0004 }
case 252:
            var68 = var43.appDirectoryEmbedApplications;
case 251:
            var34[79] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 253; continue _fun0004 }
case 254:
            var68 = var43.invalidAppDirectoryEmbedApplicationIds;
case 253:
            var34[80] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 255; continue _fun0004 }
case 256:
            var68 = var43.appDirectoryEmbedApplicationFetchStates;
case 255:
            var34[81] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 257; continue _fun0004 }
case 258:
            var68 = var43.lazyCacheStatus;
case 257:
            var34[82] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 259; continue _fun0004 }
case 260:
            var68 = var43.isFollowingForumPost;
case 259:
            var34[83] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 261; continue _fun0004 }
case 262:
            var68 = var43.showMediaPostSharePrompt;
case 261:
            var34[84] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 263; continue _fun0004 }
case 264:
            var68 = var43.referralTrialOfferIds;
case 263:
            var34[85] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 265; continue _fun0004 }
case 266:
            var68 = var43.trialOffer;
case 265:
            var34[86] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 267; continue _fun0004 }
case 268:
            var68 = var43.isPremiumTier2User;
case 267:
            var34[87] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 269; continue _fun0004 }
case 270:
            var68 = var43.messageAuthorActivities;
case 269:
            var34[88] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 271; continue _fun0004 }
case 272:
            var68 = var43.activityInviteMessageIds;
case 271:
            var34[89] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 273; continue _fun0004 }
case 274:
            var68 = var43.resolvingGiftCodes;
case 273:
            var34[90] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 275; continue _fun0004 }
case 276:
            var68 = var43.resolvedGiftCodes;
case 275:
            var34[91] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 277; continue _fun0004 }
case 278:
            var68 = var43.acceptingGiftCodes;
case 277:
            var34[92] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 279; continue _fun0004 }
case 280:
            var68 = var43.mediaPostPreviewEmbeds;
case 279:
            var34[93] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 281; continue _fun0004 }
case 282:
            var68 = var43.explicitMediaFalsePositiveInfo;
case 281:
            var34[94] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 283; continue _fun0004 }
case 284:
            var68 = var43.guildTemplates;
case 283:
            var34[95] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 285; continue _fun0004 }
case 286:
            var68 = var43.buildOverrides;
case 285:
            var34[96] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 287; continue _fun0004 }
case 288:
            var68 = var43.quests;
case 287:
            var34[97] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 289; continue _fun0004 }
case 290:
            var68 = var43.isFetchingCurrentQuests;
case 289:
            var34[98] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 291; continue _fun0004 }
case 292:
            var68 = var43.showPushFeedback;
case 291:
            var34[99] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 293; continue _fun0004 }
case 294:
            var68 = var43.forwardGuildsVersion;
case 293:
            var34[100] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 295; continue _fun0004 }
case 296:
            var68 = var43.renderCommunicationDisabled;
case 295:
            var34[101] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 297; continue _fun0004 }
case 298:
            var68 = var43.editingMessageId;
case 297:
            var34[102] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 299; continue _fun0004 }
case 300:
            var68 = var43.replyingMessageId;
case 299:
            var34[103] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 301; continue _fun0004 }
case 302:
            var68 = var43.oldestUnreadMessageId;
case 301:
            var34[104] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 303; continue _fun0004 }
case 304:
            var68 = var43.isCallActive;
case 303:
            var34[105] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 305; continue _fun0004 }
case 306:
            var68 = var43.voiceStateChannelId;
case 305:
            var34[106] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 307; continue _fun0004 }
case 308:
            var68 = var43.participantsLength;
case 307:
            var34[107] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 309; continue _fun0004 }
case 310:
            var68 = var43.invites;
case 309:
            var34[108] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 311; continue _fun0004 }
case 312:
            var68 = var43.isSpamMessageRequest;
case 311:
            var34[109] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 313; continue _fun0004 }
case 314:
            var68 = var43.isMessageRequest;
case 313:
            var34[110] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 315; continue _fun0004 }
case 316:
            var68 = var43.currentUserCommunicationDisabled;
case 315:
            var34[111] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 317; continue _fun0004 }
case 318:
            var68 = var43.androidKeyboardHeight;
case 317:
            var34[112] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 319; continue _fun0004 }
case 320:
            var68 = var43.inlineAttachmentMedia;
case 319:
            var34[113] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 321; continue _fun0004 }
case 322:
            var68 = var43.inlineEmbedMedia;
case 321:
            var34[114] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 323; continue _fun0004 }
case 324:
            var68 = var43.renderEmbeds;
case 323:
            var34[115] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 325; continue _fun0004 }
case 326:
            var68 = var43.renderReactions;
case 325:
            var34[116] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 327; continue _fun0004 }
case 328:
            var68 = var43.animateEmoji;
case 327:
            var34[117] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 329; continue _fun0004 }
case 330:
            var68 = var43.animateStickers;
case 329:
            var34[118] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 331; continue _fun0004 }
case 332:
            var68 = var43.gifAutoPlay;
case 331:
            var34[119] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 333; continue _fun0004 }
case 334:
            var68 = var43.containerWidth;
case 333:
            var34[120] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 335; continue _fun0004 }
case 336:
            var68 = var43.guildSystemChannelFlags;
case 335:
            var34[121] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 337; continue _fun0004 }
case 338:
            var68 = var43.userSettingsLocale;
case 337:
            var34[122] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 339; continue _fun0004 }
case 340:
            var68 = var43.roleStyle;
case 339:
            var34[123] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 341; continue _fun0004 }
case 342:
            var68 = var43.canSendMessages;
case 341:
            var34[124] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 343; continue _fun0004 }
case 344:
            var68 = var43.selectedSummary;
case 343:
            var34[125] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 345; continue _fun0004 }
case 346:
            var68 = var43.shouldObscureSpoiler;
case 345:
            var34[126] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 347; continue _fun0004 }
case 348:
            var68 = var43.shouldFilterKeywords;
case 347:
            var34[127] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 349; continue _fun0004 }
case 350:
            var68 = var43.isStaff;
case 349:
            var34[128] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 351; continue _fun0004 }
case 352:
            var68 = var43.isAgeVerified;
case 351:
            var34[129] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 353; continue _fun0004 }
case 354:
            var68 = var43.theme;
case 353:
            var34[130] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 355; continue _fun0004 }
case 356:
            var68 = var43.saturation;
case 355:
            var34[131] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 357; continue _fun0004 }
case 358:
            var68 = var43.threadStartingReferenceMessage;
case 357:
            var34[132] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 359; continue _fun0004 }
case 360:
            var68 = var43.unloadedContentEntryMessageIds;
case 359:
            var34[133] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 361; continue _fun0004 }
case 362:
            var68 = var43.guildInviteColorsFetched;
case 361:
            var34[134] = var68;
            var34[135] = var67;
            var34[136] = var66;
            var66 = var32.isAtBottom;
            var34[137] = var66;
            var34[138] = var65;
            var66 = var5 == var43;
            var65 = undefined;
            if(var66) { _fun0004_ip = 363; continue _fun0004 }
case 364:
            var65 = var43.uploads;
case 363:
            var34[139] = var65;
            var34[140] = var64;
            var34[141] = var20;
            var34[142] = var63;
            var34[143] = var62;
            var34[144] = var61;
            var34[145] = var60;
            var34[146] = var59;
            var34[147] = var58;
            var34[148] = var57;
            var34[149] = var56;
            var34[150] = var55;
            var34[151] = var38;
            var56 = var5 == var43;
            var55 = undefined;
            if(var56) { _fun0004_ip = 365; continue _fun0004 }
case 366:
            var55 = var43.shouldForceRender;
case 365:
            var34[152] = var55;
            var34[153] = var54;
            var34[154] = var53;
            var34[155] = var25;
            var34[156] = var52;
            var34[157] = var51;
            var34[158] = var50;
            var34[159] = var49;
            var34[160] = var48;
            var34[161] = var47;
            var34[162] = var46;
            var34[163] = var7;
            var34[164] = var45;
            var46 = var5 == var43;
            var45 = undefined;
            if(var46) { _fun0004_ip = 367; continue _fun0004 }
case 368:
            var45 = var43.guildEmojis;
case 367:
            var34[165] = var45;
            var34[166] = var44;
            var44 = var5 == var43;
            var5 = undefined;
            if(var44) { _fun0004_ip = 369; continue _fun0004 }
case 370:
            var5 = var43.enableSwipeActions;
case 369:
            var34[167] = var5;
            var5 = function() {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                    var2 = _closure2_slot11;
                    var8 = null;
                    if(!(var8 != var2)) { _fun0034_ip = 371; continue _fun0034 }
case 165:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var4 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 101; continue _fun0034 }
case 33:
                    var2 = _closure2_slot127;
                    var5 = var2.inlineAttachmentMedia;
case 101:
                    var2 = _closure2_slot12;
                    var14 = var5 !== var2;
                    if(var14) { _fun0034_ip = 121; continue _fun0034 }
case 45:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 39; continue _fun0034 }
case 30:
                    var2 = _closure2_slot127;
                    var5 = var2.inlineEmbedMedia;
case 39:
                    var2 = _closure2_slot13;
                    var14 = var5 !== var2;
case 121:
                    if(var14) { _fun0034_ip = 372; continue _fun0034 }
case 103:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 373; continue _fun0034 }
case 374:
                    var2 = _closure2_slot127;
                    var5 = var2.renderEmbeds;
case 373:
                    var2 = _closure2_slot14;
                    var14 = var5 !== var2;
case 372:
                    if(var14) { _fun0034_ip = 375; continue _fun0034 }
case 376:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 106; continue _fun0034 }
case 104:
                    var2 = _closure2_slot127;
                    var5 = var2.renderReactions;
case 106:
                    var2 = _closure2_slot15;
                    var14 = var5 !== var2;
case 375:
                    if(var14) { _fun0034_ip = 19; continue _fun0034 }
case 377:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 16; continue _fun0034 }
case 17:
                    var2 = _closure2_slot127;
                    var5 = var2.animateEmoji;
case 16:
                    var2 = _closure2_slot16;
                    var14 = var5 !== var2;
case 19:
                    if(var14) { _fun0034_ip = 378; continue _fun0034 }
case 132:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 198; continue _fun0034 }
case 379:
                    var2 = _closure2_slot127;
                    var5 = var2.animateStickers;
case 198:
                    var2 = _closure2_slot17;
                    var14 = var5 !== var2;
case 378:
                    if(var14) { _fun0034_ip = 380; continue _fun0034 }
case 381:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 23; continue _fun0034 }
case 382:
                    var2 = _closure2_slot127;
                    var5 = var2.gifAutoPlay;
case 23:
                    var2 = _closure2_slot18;
                    var14 = var5 !== var2;
case 380:
                    if(var14) { _fun0034_ip = 25; continue _fun0034 }
case 383:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 384; continue _fun0034 }
case 385:
                    var2 = _closure2_slot127;
                    var5 = var2.containerWidth;
case 384:
                    var2 = _closure2_slot92;
                    var14 = var5 !== var2;
case 25:
                    if(var14) { _fun0034_ip = 8; continue _fun0034 }
case 386:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 187; continue _fun0034 }
case 387:
                    var2 = _closure2_slot127;
                    var5 = var2.guildSystemChannelFlags;
case 187:
                    var2 = _closure2_slot10;
                    var14 = var5 !== var2;
case 8:
                    if(var14) { _fun0034_ip = 388; continue _fun0034 }
case 27:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 389; continue _fun0034 }
case 390:
                    var2 = _closure2_slot127;
                    var5 = var2.userSettingsLocale;
case 389:
                    var2 = _closure2_slot75;
                    var14 = var5 !== var2;
case 388:
                    if(var14) { _fun0034_ip = 391; continue _fun0034 }
case 392:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 393; continue _fun0034 }
case 200:
                    var2 = _closure2_slot127;
                    var5 = var2.roleStyle;
case 393:
                    var2 = _closure2_slot57;
                    var14 = var5 !== var2;
case 391:
                    if(var14) { _fun0034_ip = 394; continue _fun0034 }
case 148:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 395; continue _fun0034 }
case 396:
                    var2 = _closure2_slot127;
                    var5 = var2.canSendMessages;
case 395:
                    var2 = _closure2_slot46;
                    var14 = var5 !== var2;
case 394:
                    if(var14) { _fun0034_ip = 397; continue _fun0034 }
case 398:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 399; continue _fun0034 }
case 400:
                    var2 = _closure2_slot127;
                    var5 = var2.showPushFeedback;
case 399:
                    var2 = _closure2_slot79;
                    var14 = var5 !== var2;
case 397:
                    if(var14) { _fun0034_ip = 401; continue _fun0034 }
case 402:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 403; continue _fun0034 }
case 404:
                    var2 = _closure2_slot127;
                    var5 = var2.selectedSummary;
case 403:
                    var2 = _closure2_slot84;
                    var14 = var5 !== var2;
case 401:
                    if(var14) { _fun0034_ip = 405; continue _fun0034 }
case 406:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 407; continue _fun0034 }
case 408:
                    var2 = _closure2_slot127;
                    var5 = var2.shouldObscureSpoiler;
case 407:
                    var2 = _closure2_slot87;
                    var14 = var5 !== var2;
case 405:
                    if(var14) { _fun0034_ip = 409; continue _fun0034 }
case 410:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 411; continue _fun0034 }
case 412:
                    var2 = _closure2_slot127;
                    var5 = var2.shouldFilterKeywords;
case 411:
                    var2 = _closure2_slot96;
                    var14 = var5 !== var2;
case 409:
                    if(var14) { _fun0034_ip = 413; continue _fun0034 }
case 414:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 415; continue _fun0034 }
case 416:
                    var2 = _closure2_slot127;
                    var5 = var2.explicitMediaFalsePositiveInfo;
case 415:
                    var2 = _closure2_slot91;
                    var14 = var5 !== var2;
case 413:
                    if(var14) { _fun0034_ip = 417; continue _fun0034 }
case 418:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 419; continue _fun0034 }
case 420:
                    var2 = _closure2_slot127;
                    var5 = var2.isStaff;
case 419:
                    var2 = _closure2_slot95;
                    var14 = var5 !== var2;
case 417:
                    if(var14) { _fun0034_ip = 421; continue _fun0034 }
case 422:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 423; continue _fun0034 }
case 424:
                    var2 = _closure2_slot127;
                    var5 = var2.isAgeVerified;
case 423:
                    var2 = _closure2_slot88;
                    var14 = var5 !== var2;
case 421:
                    if(var14) { _fun0034_ip = 425; continue _fun0034 }
case 426:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 427; continue _fun0034 }
case 428:
                    var2 = _closure2_slot127;
                    var5 = var2.theme;
case 427:
                    var2 = _closure2_slot19;
                    var14 = var5 !== var2;
case 425:
                    if(var14) { _fun0034_ip = 429; continue _fun0034 }
case 430:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 431; continue _fun0034 }
case 432:
                    var2 = _closure2_slot127;
                    var5 = var2.saturation;
case 431:
                    var2 = _closure2_slot58;
                    var14 = var5 !== var2;
case 429:
                    if(var14) { _fun0034_ip = 433; continue _fun0034 }
case 434:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 435; continue _fun0034 }
case 436:
                    var2 = _closure2_slot127;
                    var5 = var2.shouldForceRender;
case 435:
                    var2 = _closure2_slot106;
                    var2 = var5 !== var2;
                    if(!var2) { _fun0034_ip = 437; continue _fun0034 }
case 438:
                    var2 = _closure2_slot106;
case 437:
                    var14 = var2;
case 433:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 66;
                    var5 = var7[var5];
                    var9 = var6.bind(var4)(var5);
                    var7 = {};
                    var5 = _closure2_slot6;
                    var7['messages'] = var5;
                    var5 = _closure2_slot81;
                    var7['androidKeyboardHeight'] = var5;
                    var5 = _closure2_slot43;
                    var7['replyingMessageId'] = var5;
                    var6 = {};
                    var5 = _closure2_slot102;
                    var5 = var5.isAtBottom;
                    var6['isAtBottom'] = var5;
                    var10 = _closure2_slot110;
                    var5 = var10.getPreviousMessages;
                    var5 = var5.bind(var10)();
                    var5 = var8 != var5;
                    var6['hasPreviousMessages'] = var5;
                    var5 = {};
                    var10 = _closure2_slot130;
                    if(!(var8 == var10)) { _fun0034_ip = 439; continue _fun0034 }
case 440:
                    var10 = _closure2_slot6;
                    _fun0034_ip = 441; continue _fun0034;
case 439:
                    var10 = _closure2_slot130;
case 441:
                    var5['messages'] = var10;
                    var10 = _closure2_slot127;
                    var11 = var8 == var10;
                    var10 = undefined;
                    if(var11) { _fun0034_ip = 442; continue _fun0034 }
case 443:
                    var11 = _closure2_slot127;
                    var10 = var11.androidKeyboardHeight;
case 442:
                    if(!(var8 == var10)) { _fun0034_ip = 444; continue _fun0034 }
case 445:
                    var10 = _closure2_slot81;
case 444:
                    var5['androidKeyboardHeight'] = var10;
                    var5 = var9.bind(var4)(var7, var6, var5);
                    var12 = var5.scrollToMessageId;
                    var11 = var5.jumpTargetId;
                    var10 = var5.jumpType;
                    var6 = var5.minimizeScrolling;
                    var9 = var5.focusTargetId;
                    var7 = var5.shouldInitialScroll;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 446; continue _fun0034 }
case 447:
                    var5 = _closure2_slot127;
                    var13 = var5.resolvingGiftCodes;
case 446:
                    var5 = _closure2_slot50;
                    var34 = var13 !== var5;
                    if(var34) { _fun0034_ip = 448; continue _fun0034 }
case 449:
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 450; continue _fun0034 }
case 451:
                    var5 = _closure2_slot127;
                    var13 = var5.resolvedGiftCodes;
case 450:
                    var5 = _closure2_slot51;
                    var34 = var13 !== var5;
case 448:
                    if(var34) { _fun0034_ip = 452; continue _fun0034 }
case 453:
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 454; continue _fun0034 }
case 455:
                    var5 = _closure2_slot127;
                    var13 = var5.acceptingGiftCodes;
case 454:
                    var5 = _closure2_slot52;
                    var34 = var13 !== var5;
case 452:
                    var _closure3_slot0 = var34;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var33 = undefined;
                    if(var5) { _fun0034_ip = 456; continue _fun0034 }
case 457:
                    var5 = _closure2_slot127;
                    var33 = var5.uploads;
case 456:
                    var32 = _closure2_slot54;
                    var13 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var15 = 98;
                    var5 = var5[var15];
                    var16 = var13.bind(var4)(var5);
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 458; continue _fun0034 }
case 459:
                    var5 = _closure2_slot127;
                    var13 = var5.interactionStates;
case 458:
                    var5 = _closure2_slot60;
                    var5 = var16.bind(var4)(var13, var5);
                    var24 = !var5;
                    var _closure3_slot1 = var24;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 460; continue _fun0034 }
case 461:
                    var5 = _closure2_slot127;
                    var13 = var5.channelPolls;
case 460:
                    var5 = _closure2_slot90;
                    var21 = var13 !== var5;
                    var _closure3_slot2 = var21;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 462; continue _fun0034 }
case 463:
                    var5 = _closure2_slot127;
                    var13 = var5.interactionComponentStatesVersion;
case 462:
                    var5 = _closure2_slot62;
                    var23 = var13 !== var5;
                    var _closure3_slot3 = var23;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 464; continue _fun0034 }
case 465:
                    var5 = _closure2_slot127;
                    var13 = var5.shouldDisableInteractiveComponents;
case 464:
                    var5 = _closure2_slot89;
                    var5 = var13 !== var5;
                    var _closure3_slot4 = var5;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 466; continue _fun0034 }
case 467:
                    var5 = _closure2_slot127;
                    var13 = var5.communicationDisabledVersion;
case 466:
                    var5 = _closure2_slot71;
                    var30 = var13 !== var5;
                    var _closure3_slot5 = var30;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 468; continue _fun0034 }
case 469:
                    var5 = _closure2_slot127;
                    var13 = var5.messageAuthorMembers;
case 468:
                    var5 = _closure2_slot72;
                    var29 = var13 !== var5;
                    var _closure3_slot6 = var29;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 470; continue _fun0034 }
case 471:
                    var5 = _closure2_slot127;
                    var13 = var5.failedMessagesVersion;
case 470:
                    var5 = _closure2_slot70;
                    var28 = var13 !== var5;
                    var _closure3_slot7 = var28;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 472; continue _fun0034 }
case 473:
                    var5 = _closure2_slot127;
                    var13 = var5.renderCommunicationDisabled;
case 472:
                    var5 = _closure2_slot73;
                    var25 = var13 !== var5;
                    var _closure3_slot8 = var25;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var27 = undefined;
                    if(var5) { _fun0034_ip = 474; continue _fun0034 }
case 475:
                    var5 = _closure2_slot127;
                    var27 = var5.forwardGuildsVersion;
case 474:
                    var26 = _closure2_slot97;
                    var13 = _closure2_slot1;
                    var5 = var13.isForumPost;
                    var22 = var5.bind(var13)();
                    if(!var22) { _fun0034_ip = 476; continue _fun0034 }
case 477:
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 478; continue _fun0034 }
case 479:
                    var5 = _closure2_slot127;
                    var13 = var5.isFollowingForumPost;
case 478:
                    var5 = _closure2_slot77;
                    var22 = var13 !== var5;
case 476:
                    var _closure3_slot9 = var22;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 480; continue _fun0034 }
case 481:
                    var5 = _closure2_slot127;
                    var13 = var5.showMediaPostSharePrompt;
case 480:
                    var5 = _closure2_slot78;
                    var20 = var13 !== var5;
                    var _closure3_slot10 = var20;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 482; continue _fun0034 }
case 483:
                    var5 = _closure2_slot127;
                    var13 = var5.unloadedContentEntryMessageIds;
case 482:
                    var5 = _closure2_slot93;
                    var19 = var13 !== var5;
                    var _closure3_slot11 = var19;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 484; continue _fun0034 }
case 485:
                    var5 = _closure2_slot127;
                    var13 = var5.invalidApplicationIds;
case 484:
                    var5 = _closure2_slot27;
                    var5 = var13 !== var5;
                    var _closure3_slot12 = var5;
                    var13 = _closure2_slot127;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0034_ip = 486; continue _fun0034 }
case 487:
                    var13 = _closure2_slot127;
                    var16 = var13.activityInstanceIds;
case 486:
                    var13 = _closure2_slot29;
                    var31 = var16 !== var13;
                    if(var31) { _fun0034_ip = 488; continue _fun0034 }
case 489:
                    var13 = _closure2_slot127;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0034_ip = 490; continue _fun0034 }
case 491:
                    var13 = _closure2_slot127;
                    var16 = var13.activityParticipants;
case 490:
                    var13 = _closure2_slot31;
                    var31 = var16 !== var13;
case 488:
                    if(var31) { _fun0034_ip = 492; continue _fun0034 }
case 493:
                    var13 = _closure2_slot127;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0034_ip = 494; continue _fun0034 }
case 495:
                    var13 = _closure2_slot127;
                    var16 = var13.applicationAssetFetchingIds;
case 494:
                    var13 = _closure2_slot28;
                    var31 = var16 !== var13;
case 492:
                    if(var31) { _fun0034_ip = 496; continue _fun0034 }
case 497:
                    var13 = _closure2_slot127;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0034_ip = 498; continue _fun0034 }
case 499:
                    var13 = _closure2_slot127;
                    var16 = var13.activityInstancePresenceDetails;
case 498:
                    var13 = _closure2_slot30;
                    var31 = var16 !== var13;
case 496:
                    if(var31) { _fun0034_ip = 500; continue _fun0034 }
case 501:
                    var13 = _closure2_slot127;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0034_ip = 502; continue _fun0034 }
case 503:
                    var13 = _closure2_slot127;
                    var16 = var13.messagesWithActivitiesLaunching;
case 502:
                    var13 = _closure2_slot32;
                    var31 = var16 !== var13;
case 500:
                    if(var31) { _fun0034_ip = 504; continue _fun0034 }
case 505:
                    var31 = var5;
case 504:
                    var _closure3_slot13 = var31;
                    var13 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var15];
                    var17 = var13.bind(var4)(var5);
                    var16 = var17.areArraysShallowEqual;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 506; continue _fun0034 }
case 507:
                    var5 = _closure2_slot127;
                    var13 = var5.activityInviteMessageIds;
case 506:
                    if(!(var8 == var13)) { _fun0034_ip = 508; continue _fun0034 }
case 509:
                    var13 = new Array(0);
case 508:
                    var5 = _closure2_slot22;
                    if(!(var8 == var5)) { _fun0034_ip = 510; continue _fun0034 }
case 511:
                    var5 = new Array(0);
                    _fun0034_ip = 512; continue _fun0034;
case 510:
                    var5 = _closure2_slot22;
case 512:
                    var5 = var16.bind(var17)(var13, var5);
                    var18 = !var5;
                    var _closure3_slot14 = var18;
                    var13 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var15];
                    var16 = var13.bind(var4)(var5);
                    var15 = var16.areArraysShallowEqual;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 513; continue _fun0034 }
case 514:
                    var5 = _closure2_slot127;
                    var13 = var5.referralTrialOfferIds;
case 513:
                    if(!(var8 == var13)) { _fun0034_ip = 515; continue _fun0034 }
case 516:
                    var13 = new Array(0);
case 515:
                    var5 = _closure2_slot39;
                    if(!(var8 == var5)) { _fun0034_ip = 517; continue _fun0034 }
case 518:
                    var5 = new Array(0);
                    _fun0034_ip = 519; continue _fun0034;
case 517:
                    var5 = _closure2_slot39;
case 519:
                    var5 = var15.bind(var16)(var13, var5);
                    var17 = !var5;
                    if(var17) { _fun0034_ip = 520; continue _fun0034 }
case 521:
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 522; continue _fun0034 }
case 523:
                    var5 = _closure2_slot127;
                    var13 = var5.trialOffer;
case 522:
                    var5 = _closure2_slot40;
                    var17 = var13 !== var5;
case 520:
                    if(var17) { _fun0034_ip = 524; continue _fun0034 }
case 525:
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 526; continue _fun0034 }
case 527:
                    var5 = _closure2_slot127;
                    var13 = var5.isPremiumTier2User;
case 526:
                    var5 = _closure2_slot41;
                    var17 = var13 !== var5;
case 524:
                    var _closure3_slot15 = var17;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 528; continue _fun0034 }
case 529:
                    var5 = _closure2_slot127;
                    var13 = var5.guildInviteColorsFetched;
case 528:
                    var5 = _closure2_slot98;
                    var16 = var13 !== var5;
                    var _closure3_slot16 = var16;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 530; continue _fun0034 }
case 531:
                    var5 = _closure2_slot127;
                    var13 = var5.guildEmojis;
case 530:
                    var5 = _closure2_slot99;
                    var13 = var13 !== var5;
                    var _closure3_slot17 = var13;
                    var5 = _closure2_slot80;
                    var35 = 'initializing';
                    var5 = var35 !== var5;
                    var15 = _closure2_slot127;
                    var36 = var8 == var15;
                    var15 = undefined;
                    if(var36) { _fun0034_ip = 532; continue _fun0034 }
case 533:
                    var36 = _closure2_slot127;
                    var15 = var36.lazyCacheStatus;
case 532:
                    var15 = var35 !== var15;
                    if(var14) { _fun0034_ip = 534; continue _fun0034 }
case 535:
                    if(var34) { _fun0034_ip = 534; continue _fun0034 }
case 536:
                    if(!(var33 === var32)) { _fun0034_ip = 534; continue _fun0034 }
case 537:
                    if(var31) { _fun0034_ip = 534; continue _fun0034 }
case 538:
                    var32 = _closure2_slot130;
                    var31 = _closure2_slot6;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 539:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 540; continue _fun0034 }
case 541:
                    var31 = _closure2_slot127;
                    var32 = var31.editingMessageId;
case 540:
                    var31 = _closure2_slot42;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 542:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 543; continue _fun0034 }
case 544:
                    var31 = _closure2_slot127;
                    var32 = var31.replyingMessageId;
case 543:
                    var31 = _closure2_slot43;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 545:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 546; continue _fun0034 }
case 547:
                    var31 = _closure2_slot127;
                    var32 = var31.voiceStateChannelId;
case 546:
                    var31 = _closure2_slot48;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 548:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 549; continue _fun0034 }
case 550:
                    var31 = _closure2_slot127;
                    var32 = var31.messageAuthorActivities;
case 549:
                    var31 = _closure2_slot21;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 551:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 552; continue _fun0034 }
case 553:
                    var31 = _closure2_slot127;
                    var32 = var31.oldestUnreadMessageId;
case 552:
                    var31 = _closure2_slot44;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 554:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 555; continue _fun0034 }
case 556:
                    var31 = _closure2_slot127;
                    var32 = var31.invites;
case 555:
                    var31 = _closure2_slot23;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 557:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 558; continue _fun0034 }
case 559:
                    var31 = _closure2_slot127;
                    var32 = var31.appDirectoryEmbedApplications;
case 558:
                    var31 = _closure2_slot24;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 560:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 561; continue _fun0034 }
case 562:
                    var31 = _closure2_slot127;
                    var32 = var31.invalidAppDirectoryEmbedApplicationIds;
case 561:
                    var31 = _closure2_slot25;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 563:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 564; continue _fun0034 }
case 565:
                    var31 = _closure2_slot127;
                    var32 = var31.appDirectoryEmbedApplicationFetchStates;
case 564:
                    var31 = _closure2_slot26;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 566:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 567; continue _fun0034 }
case 568:
                    var31 = _closure2_slot127;
                    var32 = var31.guildTemplates;
case 567:
                    var31 = _closure2_slot34;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 569:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 570; continue _fun0034 }
case 571:
                    var31 = _closure2_slot127;
                    var32 = var31.buildOverrides;
case 570:
                    var31 = _closure2_slot35;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 572:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 573; continue _fun0034 }
case 574:
                    var31 = _closure2_slot127;
                    var32 = var31.quests;
case 573:
                    var31 = _closure2_slot36;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 575:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 576; continue _fun0034 }
case 577:
                    var31 = _closure2_slot127;
                    var32 = var31.isFetchingCurrentQuests;
case 576:
                    var31 = _closure2_slot37;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 578:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 579; continue _fun0034 }
case 580:
                    var31 = _closure2_slot127;
                    var32 = var31.participantsLength;
case 579:
                    var31 = _closure2_slot53;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 581:
                    var32 = _closure2_slot66;
                    var31 = _closure2_slot130;
                    var31 = var8 != var31;
                    if(!var31) { _fun0034_ip = 582; continue _fun0034 }
case 583:
                    var33 = _closure2_slot130;
                    var33 = var33.ready;
                    if(var33) { _fun0034_ip = 584; continue _fun0034 }
case 585:
                    var34 = _closure2_slot130;
                    var33 = var34.cached;
case 584:
                    var31 = var33;
case 582:
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 586:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 587; continue _fun0034 }
case 588:
                    var31 = _closure2_slot127;
                    var32 = var31.channelThreadsVersion;
case 587:
                    var31 = _closure2_slot59;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 589:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 590; continue _fun0034 }
case 591:
                    var31 = _closure2_slot127;
                    var32 = var31.rsvpVersion;
case 590:
                    var31 = _closure2_slot69;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 592:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 593; continue _fun0034 }
case 594:
                    var31 = _closure2_slot127;
                    var32 = var31.repliedIds;
case 593:
                    var31 = _closure2_slot55;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 595:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 596; continue _fun0034 }
case 597:
                    var31 = _closure2_slot127;
                    var32 = var31.hasLoadedExperiments;
case 596:
                    var31 = _closure2_slot63;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 598:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 599; continue _fun0034 }
case 600:
                    var31 = _closure2_slot127;
                    var32 = var31.isMessageRequest;
case 599:
                    var31 = _closure2_slot65;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 601:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 602; continue _fun0034 }
case 603:
                    var31 = _closure2_slot127;
                    var32 = var31.isSpamMessageRequest;
case 602:
                    var31 = _closure2_slot64;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 604:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 605; continue _fun0034 }
case 606:
                    var31 = _closure2_slot127;
                    var32 = var31.currentUserCommunicationDisabled;
case 605:
                    var31 = _closure2_slot74;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 607:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 608; continue _fun0034 }
case 609:
                    var31 = _closure2_slot127;
                    var32 = var31.userSettingsLocale;
case 608:
                    var31 = _closure2_slot75;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 610:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 611; continue _fun0034 }
case 612:
                    var31 = _closure2_slot127;
                    var32 = var31.selectedSummary;
case 611:
                    var31 = _closure2_slot84;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 613:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 614; continue _fun0034 }
case 615:
                    var31 = _closure2_slot127;
                    var32 = var31.showPushFeedback;
case 614:
                    var31 = _closure2_slot79;
                    if(!(var32 === var31)) { _fun0034_ip = 534; continue _fun0034 }
case 616:
                    if(!(var15 === var5)) { _fun0034_ip = 534; continue _fun0034 }
case 617:
                    if(var30) { _fun0034_ip = 534; continue _fun0034 }
case 618:
                    if(var29) { _fun0034_ip = 534; continue _fun0034 }
case 619:
                    if(var28) { _fun0034_ip = 534; continue _fun0034 }
case 620:
                    if(!(var27 === var26)) { _fun0034_ip = 534; continue _fun0034 }
case 621:
                    if(var25) { _fun0034_ip = 534; continue _fun0034 }
case 622:
                    if(var24) { _fun0034_ip = 534; continue _fun0034 }
case 623:
                    if(var23) { _fun0034_ip = 534; continue _fun0034 }
case 624:
                    if(var22) { _fun0034_ip = 534; continue _fun0034 }
case 625:
                    if(!(var8 == var11)) { _fun0034_ip = 534; continue _fun0034 }
case 626:
                    if(!(var8 == var9)) { _fun0034_ip = 534; continue _fun0034 }
case 627:
                    var22 = _closure2_slot127;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0034_ip = 628; continue _fun0034 }
case 629:
                    var22 = _closure2_slot127;
                    var23 = var22.androidKeyboardHeight;
case 628:
                    var22 = _closure2_slot81;
                    if(!(var23 === var22)) { _fun0034_ip = 534; continue _fun0034 }
case 630:
                    var22 = _closure2_slot127;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0034_ip = 631; continue _fun0034 }
case 632:
                    var22 = _closure2_slot127;
                    var23 = var22.mediaPostPreviewEmbeds;
case 631:
                    var22 = _closure2_slot33;
                    if(!(var23 === var22)) { _fun0034_ip = 534; continue _fun0034 }
case 633:
                    var22 = _closure2_slot127;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0034_ip = 634; continue _fun0034 }
case 635:
                    var22 = _closure2_slot127;
                    var23 = var22.shouldObscureSpoiler;
case 634:
                    var22 = _closure2_slot87;
                    if(!(var23 === var22)) { _fun0034_ip = 534; continue _fun0034 }
case 636:
                    var22 = _closure2_slot127;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0034_ip = 637; continue _fun0034 }
case 638:
                    var22 = _closure2_slot127;
                    var23 = var22.shouldFilterKeywords;
case 637:
                    var22 = _closure2_slot96;
                    if(!(var23 === var22)) { _fun0034_ip = 534; continue _fun0034 }
case 639:
                    var22 = _closure2_slot127;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0034_ip = 640; continue _fun0034 }
case 641:
                    var22 = _closure2_slot127;
                    var23 = var22.shouldDisableInteractiveComponents;
case 640:
                    var22 = _closure2_slot89;
                    if(!(var23 === var22)) { _fun0034_ip = 534; continue _fun0034 }
case 642:
                    if(var21) { _fun0034_ip = 534; continue _fun0034 }
case 643:
                    if(var20) { _fun0034_ip = 534; continue _fun0034 }
case 644:
                    var20 = _closure2_slot127;
                    var20 = var8 == var20;
                    var21 = undefined;
                    if(var20) { _fun0034_ip = 645; continue _fun0034 }
case 646:
                    var20 = _closure2_slot127;
                    var21 = var20.threadStartingReferenceMessage;
case 645:
                    var20 = _closure2_slot49;
                    if(!(var21 === var20)) { _fun0034_ip = 534; continue _fun0034 }
case 647:
                    if(var19) { _fun0034_ip = 534; continue _fun0034 }
case 648:
                    if(var18) { _fun0034_ip = 534; continue _fun0034 }
case 649:
                    if(var17) { _fun0034_ip = 534; continue _fun0034 }
case 650:
                    if(var16) { _fun0034_ip = 534; continue _fun0034 }
case 651:
                    if(var13) { _fun0034_ip = 534; continue _fun0034 }
case 652:
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var13 = 83;
                    var13 = var17[var13];
                    var18 = var16.bind(var4)(var13);
                    var17 = var18.recordTimings;
                    var16 = _closure2_slot7;
                    var13 = _closure2_slot6;
                    var13 = var17.bind(var18)(var16, var13);
                    _fun0034_ip = 371; continue _fun0034;
case 534:
                    var13 = global;
                    var13 = var13.Set;
                    var16 = var13.prototype;
                    var16 = Object.create(var16, {constructor: {value: var13}});
                    var40 = var16;
                    var13 = new var40[var13](var39);
                    var13 = var13 instanceof Object ? var13 : var16;
                    var _closure3_slot18 = var13;
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0034_ip = 653; continue _fun0034 }
case 654:
                    var16 = _closure2_slot127;
                    var17 = var16.editingMessageId;
case 653:
                    var16 = _closure2_slot42;
                    if(!(var17 !== var16)) { _fun0034_ip = 655; continue _fun0034 }
case 656:
                    var16 = _closure2_slot42;
                    if(!(var8 != var16)) { _fun0034_ip = 657; continue _fun0034 }
case 658:
                    var17 = var13.add;
                    var16 = _closure2_slot42;
                    var16 = var17.bind(var13)(var16);
case 657:
                    var16 = _closure2_slot127;
                    var17 = var8 == var16;
                    var16 = undefined;
                    if(var17) { _fun0034_ip = 659; continue _fun0034 }
case 660:
                    var17 = _closure2_slot127;
                    var16 = var17.editingMessageId;
case 659:
                    if(!(var8 != var16)) { _fun0034_ip = 655; continue _fun0034 }
case 661:
                    var17 = var13.add;
                    var16 = _closure2_slot127;
                    var18 = var8 == var16;
                    var16 = undefined;
                    if(var18) { _fun0034_ip = 662; continue _fun0034 }
case 663:
                    var18 = _closure2_slot127;
                    var16 = var18.editingMessageId;
case 662:
                    var16 = var17.bind(var13)(var16);
case 655:
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0034_ip = 664; continue _fun0034 }
case 665:
                    var16 = _closure2_slot127;
                    var17 = var16.replyingMessageId;
case 664:
                    var16 = _closure2_slot43;
                    if(!(var17 !== var16)) { _fun0034_ip = 666; continue _fun0034 }
case 667:
                    var16 = _closure2_slot43;
                    if(!(var8 != var16)) { _fun0034_ip = 668; continue _fun0034 }
case 669:
                    var17 = var13.add;
                    var16 = _closure2_slot43;
                    var16 = var17.bind(var13)(var16);
case 668:
                    var16 = _closure2_slot127;
                    var17 = var8 == var16;
                    var16 = undefined;
                    if(var17) { _fun0034_ip = 670; continue _fun0034 }
case 671:
                    var17 = _closure2_slot127;
                    var16 = var17.replyingMessageId;
case 670:
                    if(!(var8 != var16)) { _fun0034_ip = 666; continue _fun0034 }
case 672:
                    var17 = var13.add;
                    var16 = _closure2_slot127;
                    var18 = var8 == var16;
                    var16 = undefined;
                    if(var18) { _fun0034_ip = 673; continue _fun0034 }
case 674:
                    var18 = _closure2_slot127;
                    var16 = var18.replyingMessageId;
case 673:
                    var16 = var17.bind(var13)(var16);
case 666:
                    var17 = _closure2_slot66;
                    var16 = _closure2_slot130;
                    var16 = var8 != var16;
                    if(!var16) { _fun0034_ip = 675; continue _fun0034 }
case 676:
                    var18 = _closure2_slot130;
                    var18 = var18.ready;
                    if(var18) { _fun0034_ip = 677; continue _fun0034 }
case 678:
                    var19 = _closure2_slot130;
                    var18 = var19.cached;
case 677:
                    var16 = var18;
case 675:
                    if(!(var17 === var16)) { _fun0034_ip = 679; continue _fun0034 }
case 680:
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0034_ip = 681; continue _fun0034 }
case 682:
                    var16 = _closure2_slot127;
                    var17 = var16.isCallActive;
case 681:
                    var16 = _closure2_slot47;
                    if(!(var17 === var16)) { _fun0034_ip = 679; continue _fun0034 }
case 683:
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0034_ip = 684; continue _fun0034 }
case 685:
                    var16 = _closure2_slot127;
                    var17 = var16.voiceStateChannelId;
case 684:
                    var16 = _closure2_slot48;
                    if(!(var17 === var16)) { _fun0034_ip = 679; continue _fun0034 }
case 686:
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0034_ip = 687; continue _fun0034 }
case 688:
                    var16 = _closure2_slot127;
                    var17 = var16.participantsLength;
case 687:
                    var16 = _closure2_slot53;
                    if(!(var17 !== var16)) { _fun0034_ip = 689; continue _fun0034 }
case 679:
                    var17 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var16 = 90;
                    var16 = var18[var16];
                    var19 = var17.bind(var4)(var16);
                    var18 = var19.find;
                    var17 = _closure2_slot6;
                    var16 = var17.toArray;
                    var17 = var16.bind(var17)();
                    var16 = var17.reverse;
                    var17 = var16.bind(var17)();
                    var16 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = _closure1_slot52;
                        var1 = var1.CALL;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var16 = var18.bind(var19)(var17, var16);
                    if(!(var8 != var16)) { _fun0034_ip = 689; continue _fun0034 }
case 690:
                    var17 = var13.add;
                    var16 = var16.id;
                    var16 = var17.bind(var13)(var16);
case 689:
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0034_ip = 691; continue _fun0034 }
case 692:
                    var16 = _closure2_slot127;
                    var17 = var16.channelThreadsVersion;
case 691:
                    var16 = _closure2_slot59;
                    var16 = var17 !== var16;
                    var _closure3_slot19 = var16;
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0034_ip = 693; continue _fun0034 }
case 694:
                    var16 = _closure2_slot127;
                    var17 = var16.rsvpVersion;
case 693:
                    var16 = _closure2_slot69;
                    var16 = var17 !== var16;
                    var _closure3_slot20 = var16;
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0034_ip = 695; continue _fun0034 }
case 696:
                    var16 = _closure2_slot127;
                    var17 = var16.repliedIds;
case 695:
                    var16 = _closure2_slot55;
                    var16 = var17 !== var16;
                    var _closure3_slot21 = var16;
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0034_ip = 697; continue _fun0034 }
case 698:
                    var16 = _closure2_slot127;
                    var17 = var16.hasLoadedExperiments;
case 697:
                    var16 = _closure2_slot63;
                    var16 = var17 !== var16;
                    var _closure3_slot22 = var16;
                    var16 = _closure2_slot127;
                    var17 = var8 == var16;
                    var16 = undefined;
                    if(var17) { _fun0034_ip = 699; continue _fun0034 }
case 700:
                    var17 = _closure2_slot127;
                    var16 = var17.communicationDisabledVersion;
case 699:
                    var17 = var8 != var16;
                    var8 = -1;
                    if(!var17) { _fun0034_ip = 701; continue _fun0034 }
case 702:
                    var8 = var16;
case 701:
                    var _closure3_slot23 = var8;
                    var8 = !var15;
                    if(var15) { _fun0034_ip = 703; continue _fun0034 }
case 704:
                    var8 = var5;
case 703:
                    var _closure3_slot24 = var8;
                    var15 = _closure2_slot6;
                    var5 = var15.forEach;
                    var3 = function(arg1) {
                        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                            var1 = arg1;
                            var3 = _closure3_slot22;
                            if(!var3) { _fun0035_ip = 53; continue _fun0035 }
case 210:
                            var4 = var1.type;
                            var3 = _closure1_slot52;
                            var3 = var3.USER_JOIN;
                            if(!(var4 !== var3)) { _fun0035_ip = 705; continue _fun0035 }
case 53:
                            var3 = _closure3_slot21;
                            if(!var3) { _fun0035_ip = 706; continue _fun0035 }
case 707:
                            var4 = var1.type;
                            var3 = _closure1_slot52;
                            var3 = var3.REPLY;
                            if(!(var4 === var3)) { _fun0035_ip = 706; continue _fun0035 }
case 30:
                            var3 = var1.messageReference;
                            var4 = null;
                            if(!(var4 != var3)) { _fun0035_ip = 706; continue _fun0035 }
case 208:
                            var5 = _closure2_slot55;
                            var4 = var5.has;
                            var3 = var3.message_id;
                            var3 = var4.bind(var5)(var3);
                            if(var3) { _fun0035_ip = 708; continue _fun0035 }
case 706:
                            var3 = _closure3_slot19;
                            if(!var3) { _fun0035_ip = 106; continue _fun0035 }
case 213:
                            var4 = var1.hasFlag;
                            var3 = _closure1_slot53;
                            var3 = var3.HAS_THREAD;
                            var3 = var4.bind(var1)(var3);
                            if(var3) { _fun0035_ip = 709; continue _fun0035 }
case 106:
                            var3 = _closure3_slot20;
                            if(!var3) { _fun0035_ip = 710; continue _fun0035 }
case 127:
                            var3 = var1.codedLinks;
                            var4 = var3.length;
                            var3 = 0;
                            if(!(!(var4 > var3))) { _fun0035_ip = 711; continue _fun0035 }
case 710:
                            var3 = _closure3_slot17;
                            if(!var3) { _fun0035_ip = 107; continue _fun0035 }
case 16:
                            var4 = var1.type;
                            var3 = _closure1_slot52;
                            var3 = var3.EMOJI_ADDED;
                            if(!(var4 !== var3)) { _fun0035_ip = 712; continue _fun0035 }
case 107:
                            var3 = _closure3_slot8;
                            if(var3) { _fun0035_ip = 713; continue _fun0035 }
case 177:
                            var3 = _closure3_slot5;
                            if(!var3) { _fun0035_ip = 714; continue _fun0035 }
case 378:
                            var5 = _closure2_slot8;
                            var4 = null;
                            if(!(var4 != var5)) { _fun0035_ip = 714; continue _fun0035 }
case 21:
                            var6 = _closure1_slot40;
                            var5 = _closure2_slot8;
                            var3 = var1.author;
                            var4 = var3.id;
                            var3 = undefined;
                            var4 = var6.bind(var3)(var5, var4);
                            var3 = _closure3_slot23;
                            if(!(!(var4 > var3))) { _fun0035_ip = 713; continue _fun0035 }
case 714:
                            var3 = _closure3_slot6;
                            if(!var3) { _fun0035_ip = 715; continue _fun0035 }
case 716:
                            var3 = _closure2_slot8;
                            var5 = null;
                            if(!(var5 != var3)) { _fun0035_ip = 715; continue _fun0035 }
case 717:
                            var4 = var1.author;
                            var8 = var5 == var4;
                            var3 = undefined;
                            if(var8) { _fun0035_ip = 187; continue _fun0035 }
case 718:
                            var3 = var4.id;
case 187:
                            if(!(var5 == var3)) { _fun0035_ip = 719; continue _fun0035 }
case 715:
                            var3 = _closure3_slot7;
                            if(!var3) { _fun0035_ip = 115; continue _fun0035 }
case 720:
                            var3 = var1.author;
                            var4 = var3.id;
                            var3 = _closure2_slot11;
                            if(!(var4 !== var3)) { _fun0035_ip = 721; continue _fun0035 }
case 115:
                            var3 = _closure3_slot1;
                            if(!var3) { _fun0035_ip = 722; continue _fun0035 }
case 723:
                            var4 = _closure2_slot127;
                            var9 = null;
                            var4 = var9 == var4;
                            var8 = undefined;
                            if(var4) { _fun0035_ip = 724; continue _fun0035 }
case 725:
                            var4 = _closure2_slot127;
                            var8 = var4.interactionStates;
case 724:
                            if(!(var9 == var8)) { _fun0035_ip = 189; continue _fun0035 }
case 726:
                            var8 = {};
case 189:
                            var4 = var1.id;
                            var4 = var8[var4];
                            var8 = _closure2_slot60;
                            if(!(var9 == var8)) { _fun0035_ip = 727; continue _fun0035 }
case 728:
                            var8 = {};
                            _fun0035_ip = 729; continue _fun0035;
case 727:
                            var8 = _closure2_slot60;
case 729:
                            var3 = var1.id;
                            var3 = var8[var3];
                            if(!(var4 === var3)) { _fun0035_ip = 730; continue _fun0035 }
case 722:
                            var3 = _closure3_slot3;
                            if(!var3) { _fun0035_ip = 731; continue _fun0035 }
case 732:
                            var3 = _closure2_slot127;
                            var10 = null;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0035_ip = 733; continue _fun0035 }
case 734:
                            var9 = _closure2_slot127;
                            var12 = var9.interactionComponentStates;
                            var9 = var10 == var12;
                            var3 = undefined;
                            if(var9) { _fun0035_ip = 733; continue _fun0035 }
case 735:
                            var11 = var12.get;
                            var9 = var1.id;
                            var3 = var11.bind(var12)(var9);
case 733:
                            var9 = _closure2_slot61;
                            var9 = var10 == var9;
                            var4 = undefined;
                            if(var9) { _fun0035_ip = 405; continue _fun0035 }
case 736:
                            var10 = _closure2_slot61;
                            var9 = var10.get;
                            var8 = var1.id;
                            var4 = var9.bind(var10)(var8);
case 405:
                            if(!(var3 === var4)) { _fun0035_ip = 582; continue _fun0035 }
case 731:
                            var3 = _closure3_slot4;
                            if(!var3) { _fun0035_ip = 409; continue _fun0035 }
case 737:
                            var3 = var1.components;
                            var4 = var3.length;
                            var3 = 0;
                            if(!(var3 === var4)) { _fun0035_ip = 738; continue _fun0035 }
case 409:
                            var3 = _closure3_slot2;
                            if(!var3) { _fun0035_ip = 739; continue _fun0035 }
case 740:
                            var4 = _closure2_slot127;
                            var9 = null;
                            var4 = var9 == var4;
                            var8 = undefined;
                            if(var4) { _fun0035_ip = 741; continue _fun0035 }
case 742:
                            var4 = _closure2_slot127;
                            var8 = var4.channelPolls;
case 741:
                            if(!(var9 == var8)) { _fun0035_ip = 743; continue _fun0035 }
case 744:
                            var8 = {};
case 743:
                            var4 = var1.id;
                            var4 = var8[var4];
                            var8 = _closure2_slot90;
                            if(!(var9 == var8)) { _fun0035_ip = 745; continue _fun0035 }
case 746:
                            var8 = {};
                            _fun0035_ip = 747; continue _fun0035;
case 745:
                            var8 = _closure2_slot90;
case 747:
                            var3 = var1.id;
                            var3 = var8[var3];
                            if(!(var4 === var3)) { _fun0035_ip = 748; continue _fun0035 }
case 739:
                            var3 = _closure3_slot11;
                            if(!var3) { _fun0035_ip = 749; continue _fun0035 }
case 750:
                            var4 = _closure2_slot127;
                            var9 = null;
                            var4 = var9 == var4;
                            var10 = undefined;
                            if(var4) { _fun0035_ip = 751; continue _fun0035 }
case 752:
                            var4 = _closure2_slot127;
                            var10 = var4.unloadedContentEntryMessageIds;
case 751:
                            if(!(var9 == var10)) { _fun0035_ip = 432; continue _fun0035 }
case 753:
                            var4 = global;
                            var4 = var4.Set;
                            var8 = var4.prototype;
                            var8 = Object.create(var8, {constructor: {value: var4}});
                            var24 = var8;
                            var4 = new var24[var4](var23);
                            var10 = var4 instanceof Object ? var4 : var8;
case 432:
                            var8 = var10.has;
                            var4 = var1.id;
                            var4 = var8.bind(var10)(var4);
                            var8 = _closure2_slot93;
                            if(!(var9 == var8)) { _fun0035_ip = 754; continue _fun0035 }
case 755:
                            var8 = global;
                            var8 = var8.Set;
                            var9 = var8.prototype;
                            var9 = Object.create(var9, {constructor: {value: var8}});
                            var24 = var9;
                            var8 = new var24[var8](var23);
                            var9 = var8 instanceof Object ? var8 : var9;
                            _fun0035_ip = 756; continue _fun0035;
case 754:
                            var9 = _closure2_slot93;
case 756:
                            var8 = var9.has;
                            var3 = var1.id;
                            var3 = var8.bind(var9)(var3);
                            if(!(var4 === var3)) { _fun0035_ip = 757; continue _fun0035 }
case 749:
                            var8 = _closure2_slot1;
                            var3 = var8.isForumPost;
                            var3 = var3.bind(var8)();
                            if(!var3) { _fun0035_ip = 758; continue _fun0035 }
case 759:
                            var3 = _closure3_slot9;
                            if(var3) { _fun0035_ip = 760; continue _fun0035 }
case 761:
                            var3 = _closure3_slot10;
                            if(!var3) { _fun0035_ip = 758; continue _fun0035 }
case 760:
                            var8 = var1.id;
                            var10 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var3 = 99;
                            var9 = var9[var3];
                            var3 = undefined;
                            var10 = var10.bind(var3)(var9);
                            var9 = var10.castChannelIdAsMessageId;
                            var3 = _closure2_slot7;
                            var3 = var9.bind(var10)(var3);
                            if(!(var8 !== var3)) { _fun0035_ip = 762; continue _fun0035 }
case 758:
                            var3 = _closure3_slot13;
                            if(!var3) { _fun0035_ip = 763; continue _fun0035 }
case 764:
                            var8 = var1.activityInstance;
                            var3 = null;
                            if(!(var3 == var8)) { _fun0035_ip = 765; continue _fun0035 }
case 763:
                            var3 = _closure3_slot14;
                            if(!var3) { _fun0035_ip = 766; continue _fun0035 }
case 767:
                            var10 = var1.activity;
                            var9 = null;
                            var11 = var9 == var10;
                            var8 = undefined;
                            if(var11) { _fun0035_ip = 768; continue _fun0035 }
case 769:
                            var8 = var10.party_id;
case 768:
                            var3 = var9 != var8;
case 766:
                            if(!var3) { _fun0035_ip = 770; continue _fun0035 }
case 771:
                            var9 = _closure3_slot18;
                            var8 = var9.add;
                            var3 = var1.id;
                            var3 = var8.bind(var9)(var3);
case 770:
                            var8 = var1.author;
                            var3 = null;
                            if(!(var3 != var8)) { _fun0035_ip = 772; continue _fun0035 }
case 773:
                            var20 = {};
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var10 = undefined;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 774; continue _fun0035 }
case 775:
                            var9 = _closure2_slot127;
                            var8 = var9.messageAuthorActivities;
case 774:
                            if(!(var3 == var8)) { _fun0035_ip = 776; continue _fun0035 }
case 777:
                            var8 = {};
case 776:
                            var20['messageAuthorActivities'] = var8;
                            var19 = {};
                            var8 = _closure2_slot21;
                            if(!(var3 == var8)) { _fun0035_ip = 778; continue _fun0035 }
case 779:
                            var8 = {};
                            _fun0035_ip = 780; continue _fun0035;
case 778:
                            var8 = _closure2_slot21;
case 780:
                            var19['messageAuthorActivities'] = var8;
                            var18 = {};
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 781; continue _fun0035 }
case 782:
                            var9 = _closure2_slot127;
                            var8 = var9.invites;
case 781:
                            if(!(var3 == var8)) { _fun0035_ip = 783; continue _fun0035 }
case 784:
                            var9 = global;
                            var9 = var9.Map;
                            var11 = var9.prototype;
                            var11 = Object.create(var11, {constructor: {value: var9}});
                            var24 = var11;
                            var9 = new var24[var9](var23);
                            var8 = var9 instanceof Object ? var9 : var11;
case 783:
                            var18['invites'] = var8;
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 785; continue _fun0035 }
case 786:
                            var9 = _closure2_slot127;
                            var8 = var9.appDirectoryEmbedApplications;
case 785:
                            if(!(var3 == var8)) { _fun0035_ip = 787; continue _fun0035 }
case 788:
                            var8 = {};
case 787:
                            var18['appDirectoryEmbedApplications'] = var8;
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 789; continue _fun0035 }
case 790:
                            var9 = _closure2_slot127;
                            var8 = var9.invalidAppDirectoryEmbedApplicationIds;
case 789:
                            if(!(var3 == var8)) { _fun0035_ip = 791; continue _fun0035 }
case 792:
                            var9 = global;
                            var9 = var9.Set;
                            var11 = var9.prototype;
                            var11 = Object.create(var11, {constructor: {value: var9}});
                            var24 = var11;
                            var9 = new var24[var9](var23);
                            var8 = var9 instanceof Object ? var9 : var11;
case 791:
                            var18['invalidAppDirectoryEmbedApplicationIds'] = var8;
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 793; continue _fun0035 }
case 794:
                            var9 = _closure2_slot127;
                            var8 = var9.invalidApplicationIds;
case 793:
                            if(!(var3 == var8)) { _fun0035_ip = 462; continue _fun0035 }
case 795:
                            var8 = new Array(0);
case 462:
                            var18['invalidApplicationIds'] = var8;
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 796; continue _fun0035 }
case 797:
                            var9 = _closure2_slot127;
                            var8 = var9.activityParticipants;
case 796:
                            if(!(var3 == var8)) { _fun0035_ip = 798; continue _fun0035 }
case 799:
                            var8 = new Array(0);
case 798:
                            var18['activityParticipants'] = var8;
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 800; continue _fun0035 }
case 801:
                            var9 = _closure2_slot127;
                            var8 = var9.applicationAssetFetchingIds;
case 800:
                            if(!(var3 == var8)) { _fun0035_ip = 802; continue _fun0035 }
case 803:
                            var8 = new Array(0);
case 802:
                            var18['applicationAssetFetchingIds'] = var8;
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 804; continue _fun0035 }
case 805:
                            var9 = _closure2_slot127;
                            var8 = var9.appDirectoryEmbedApplicationFetchStates;
case 804:
                            if(!(var3 == var8)) { _fun0035_ip = 806; continue _fun0035 }
case 807:
                            var8 = {};
case 806:
                            var18['appDirectoryEmbedApplicationFetchStates'] = var8;
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 808; continue _fun0035 }
case 809:
                            var9 = _closure2_slot127;
                            var8 = var9.guildTemplates;
case 808:
                            if(!(var3 == var8)) { _fun0035_ip = 810; continue _fun0035 }
case 811:
                            var9 = global;
                            var9 = var9.Map;
                            var11 = var9.prototype;
                            var11 = Object.create(var11, {constructor: {value: var9}});
                            var24 = var11;
                            var9 = new var24[var9](var23);
                            var8 = var9 instanceof Object ? var9 : var11;
case 810:
                            var18['guildTemplates'] = var8;
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 812; continue _fun0035 }
case 813:
                            var9 = _closure2_slot127;
                            var8 = var9.buildOverrides;
case 812:
                            if(!(var3 == var8)) { _fun0035_ip = 475; continue _fun0035 }
case 814:
                            var8 = {};
case 475:
                            var18['buildOverrides'] = var8;
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 815; continue _fun0035 }
case 816:
                            var9 = _closure2_slot127;
                            var8 = var9.quests;
case 815:
                            if(!(var3 == var8)) { _fun0035_ip = 817; continue _fun0035 }
case 818:
                            var8 = new Array(0);
case 817:
                            var18['quests'] = var8;
                            var8 = _closure2_slot127;
                            var8 = var3 == var8;
                            var9 = undefined;
                            if(var8) { _fun0035_ip = 819; continue _fun0035 }
case 478:
                            var8 = _closure2_slot127;
                            var9 = var8.isFetchingCurrentQuests;
case 819:
                            var8 = var3 != var9;
                            if(!var8) { _fun0035_ip = 820; continue _fun0035 }
case 821:
                            var8 = var9;
case 820:
                            var18['isFetchingCurrentQuests'] = var8;
                            var17 = {};
                            var8 = _closure2_slot23;
                            if(!(var3 == var8)) { _fun0035_ip = 822; continue _fun0035 }
case 480:
                            var8 = global;
                            var8 = var8.Map;
                            var9 = var8.prototype;
                            var9 = Object.create(var9, {constructor: {value: var8}});
                            var24 = var9;
                            var8 = new var24[var8](var23);
                            var8 = var8 instanceof Object ? var8 : var9;
                            _fun0035_ip = 823; continue _fun0035;
case 822:
                            var8 = _closure2_slot23;
case 823:
                            var17['invites'] = var8;
                            var8 = _closure2_slot24;
                            if(!(var3 == var8)) { _fun0035_ip = 824; continue _fun0035 }
case 825:
                            var8 = {};
                            _fun0035_ip = 826; continue _fun0035;
case 824:
                            var8 = _closure2_slot24;
case 826:
                            var17['appDirectoryEmbedApplications'] = var8;
                            var8 = _closure2_slot25;
                            if(!(var3 == var8)) { _fun0035_ip = 827; continue _fun0035 }
case 828:
                            var8 = global;
                            var8 = var8.Set;
                            var9 = var8.prototype;
                            var9 = Object.create(var9, {constructor: {value: var8}});
                            var24 = var9;
                            var8 = new var24[var8](var23);
                            var8 = var8 instanceof Object ? var8 : var9;
                            _fun0035_ip = 829; continue _fun0035;
case 827:
                            var8 = _closure2_slot25;
case 829:
                            var17['invalidAppDirectoryEmbedApplicationIds'] = var8;
                            var8 = _closure2_slot27;
                            if(!(var3 == var8)) { _fun0035_ip = 830; continue _fun0035 }
case 831:
                            var8 = new Array(0);
                            _fun0035_ip = 832; continue _fun0035;
case 830:
                            var8 = _closure2_slot27;
case 832:
                            var17['invalidApplicationIds'] = var8;
                            var8 = _closure2_slot31;
                            if(!(var3 == var8)) { _fun0035_ip = 833; continue _fun0035 }
case 834:
                            var8 = new Array(0);
                            _fun0035_ip = 835; continue _fun0035;
case 833:
                            var8 = _closure2_slot31;
case 835:
                            var17['activityParticipants'] = var8;
                            var8 = _closure2_slot28;
                            if(!(var3 == var8)) { _fun0035_ip = 836; continue _fun0035 }
case 837:
                            var8 = new Array(0);
                            _fun0035_ip = 838; continue _fun0035;
case 836:
                            var8 = _closure2_slot28;
case 838:
                            var17['applicationAssetFetchingIds'] = var8;
                            var8 = _closure2_slot26;
                            if(!(var3 == var8)) { _fun0035_ip = 839; continue _fun0035 }
case 497:
                            var8 = {};
                            _fun0035_ip = 840; continue _fun0035;
case 839:
                            var8 = _closure2_slot26;
case 840:
                            var17['appDirectoryEmbedApplicationFetchStates'] = var8;
                            var8 = _closure2_slot34;
                            if(!(var3 == var8)) { _fun0035_ip = 841; continue _fun0035 }
case 842:
                            var8 = global;
                            var8 = var8.Map;
                            var9 = var8.prototype;
                            var9 = Object.create(var9, {constructor: {value: var8}});
                            var24 = var9;
                            var8 = new var24[var8](var23);
                            var8 = var8 instanceof Object ? var8 : var9;
                            _fun0035_ip = 843; continue _fun0035;
case 841:
                            var8 = _closure2_slot34;
case 843:
                            var17['guildTemplates'] = var8;
                            var8 = _closure2_slot35;
                            if(!(var3 == var8)) { _fun0035_ip = 844; continue _fun0035 }
case 505:
                            var8 = {};
                            _fun0035_ip = 845; continue _fun0035;
case 844:
                            var8 = _closure2_slot35;
case 845:
                            var17['buildOverrides'] = var8;
                            var8 = _closure2_slot36;
                            if(!(var3 == var8)) { _fun0035_ip = 846; continue _fun0035 }
case 847:
                            var8 = new Array(0);
                            _fun0035_ip = 848; continue _fun0035;
case 846:
                            var8 = _closure2_slot36;
case 848:
                            var17['quests'] = var8;
                            var8 = _closure2_slot37;
                            var8 = var3 != var8;
                            if(!var8) { _fun0035_ip = 849; continue _fun0035 }
case 850:
                            var8 = _closure2_slot37;
case 849:
                            var17['isFetchingCurrentQuests'] = var8;
                            var16 = {};
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 851; continue _fun0035 }
case 852:
                            var9 = _closure2_slot127;
                            var8 = var9.resolvingGiftCodes;
case 851:
                            if(!(var3 == var8)) { _fun0035_ip = 853; continue _fun0035 }
case 854:
                            var8 = new Array(0);
case 853:
                            var16['resolvingGiftCodes'] = var8;
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 855; continue _fun0035 }
case 856:
                            var9 = _closure2_slot127;
                            var8 = var9.resolvedGiftCodes;
case 855:
                            if(!(var3 == var8)) { _fun0035_ip = 857; continue _fun0035 }
case 858:
                            var8 = new Array(0);
case 857:
                            var16['resolvedGiftCodes'] = var8;
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 859; continue _fun0035 }
case 860:
                            var9 = _closure2_slot127;
                            var8 = var9.acceptingGiftCodes;
case 859:
                            if(!(var3 == var8)) { _fun0035_ip = 861; continue _fun0035 }
case 862:
                            var8 = new Array(0);
case 861:
                            var16['acceptingGiftCodes'] = var8;
                            var15 = {};
                            var8 = _closure2_slot50;
                            if(!(var3 == var8)) { _fun0035_ip = 863; continue _fun0035 }
case 521:
                            var8 = new Array(0);
                            _fun0035_ip = 864; continue _fun0035;
case 863:
                            var8 = _closure2_slot50;
case 864:
                            var15['resolvingGiftCodes'] = var8;
                            var8 = _closure2_slot51;
                            if(!(var3 == var8)) { _fun0035_ip = 865; continue _fun0035 }
case 522:
                            var8 = new Array(0);
                            _fun0035_ip = 866; continue _fun0035;
case 865:
                            var8 = _closure2_slot51;
case 866:
                            var15['resolvedGiftCodes'] = var8;
                            var8 = _closure2_slot52;
                            if(!(var3 == var8)) { _fun0035_ip = 867; continue _fun0035 }
case 868:
                            var8 = new Array(0);
                            _fun0035_ip = 869; continue _fun0035;
case 867:
                            var8 = _closure2_slot52;
case 869:
                            var15['acceptingGiftCodes'] = var8;
                            var13 = {};
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 870; continue _fun0035 }
case 871:
                            var9 = _closure2_slot127;
                            var8 = var9.mediaPostPreviewEmbeds;
case 870:
                            if(!(var3 == var8)) { _fun0035_ip = 528; continue _fun0035 }
case 872:
                            var8 = {};
case 528:
                            var13['mediaPostPreviewEmbeds'] = var8;
                            var12 = {};
                            var8 = _closure2_slot33;
                            if(!(var3 == var8)) { _fun0035_ip = 873; continue _fun0035 }
case 874:
                            var8 = {};
                            _fun0035_ip = 875; continue _fun0035;
case 873:
                            var8 = _closure2_slot33;
case 875:
                            var12['mediaPostPreviewEmbeds'] = var8;
                            var11 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var14 = 100;
                            var9 = var9[var14];
                            var11 = var11.bind(var10)(var9);
                            var9 = var11.messageAuthorActivitiesChanged;
                            var9 = var9.bind(var11)(var1, var20, var19);
                            if(var9) { _fun0035_ip = 876; continue _fun0035 }
case 877:
                            var11 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var9 = var9[var14];
                            var11 = var11.bind(var10)(var9);
                            var9 = var11.codedLinksChanged;
                            var9 = var9.bind(var11)(var1, var18, var17);
                            if(var9) { _fun0035_ip = 876; continue _fun0035 }
case 878:
                            var9 = _closure3_slot0;
                            if(!var9) { _fun0035_ip = 879; continue _fun0035 }
case 538:
                            var11 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var9 = var9[var14];
                            var11 = var11.bind(var10)(var9);
                            var9 = var11.giftCodesChanged;
                            var9 = var9.bind(var11)(var1, var16, var15);
                            if(var9) { _fun0035_ip = 876; continue _fun0035 }
case 879:
                            var11 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var9 = var9[var14];
                            var11 = var11.bind(var10)(var9);
                            var9 = var11.mediaPostPreviewEmbedsChanged;
                            var9 = var9.bind(var11)(var1, var13, var12);
                            if(var9) { _fun0035_ip = 876; continue _fun0035 }
case 543:
                            var9 = _closure3_slot24;
                            if(!var9) { _fun0035_ip = 547; continue _fun0035 }
case 880:
                            var11 = var1.embeds;
                            var12 = var11.length;
                            var11 = 0;
                            var9 = var12 > var11;
case 547:
                            if(!var9) { _fun0035_ip = 881; continue _fun0035 }
case 882:
                            var12 = _closure3_slot18;
                            var11 = var12.add;
                            var9 = var1.id;
                            var9 = var11.bind(var12)(var9);
case 881:
                            var9 = var1.type;
                            var8 = _closure1_slot52;
                            var8 = var8.THREAD_STARTER_MESSAGE;
                            var8 = var9 === var8;
                            if(!var8) { _fun0035_ip = 883; continue _fun0035 }
case 549:
                            var9 = _closure2_slot127;
                            var9 = var3 == var9;
                            var11 = undefined;
                            if(var9) { _fun0035_ip = 884; continue _fun0035 }
case 885:
                            var9 = _closure2_slot127;
                            var11 = var9.threadStartingReferenceMessage;
case 884:
                            var9 = _closure2_slot49;
                            var8 = var11 !== var9;
case 883:
                            if(!var8) { _fun0035_ip = 886; continue _fun0035 }
case 552:
                            var11 = _closure3_slot18;
                            var9 = var11.add;
                            var8 = var1.id;
                            var8 = var9.bind(var11)(var8);
case 886:
                            var8 = _closure3_slot12;
                            if(!var8) { _fun0035_ip = 887; continue _fun0035 }
case 888:
                            var9 = var1.applicationId;
                            var8 = var3 != var9;
case 887:
                            if(!var8) { _fun0035_ip = 889; continue _fun0035 }
case 890:
                            var9 = _closure2_slot127;
                            var9 = var3 == var9;
                            var11 = undefined;
                            if(var9) { _fun0035_ip = 891; continue _fun0035 }
case 892:
                            var9 = _closure2_slot127;
                            var11 = var9.invalidApplicationIds;
case 891:
                            if(!(var3 == var11)) { _fun0035_ip = 893; continue _fun0035 }
case 894:
                            var11 = new Array(0);
case 893:
                            var10 = var11.includes;
                            var9 = var1.applicationId;
                            var8 = var10.bind(var11)(var9);
case 889:
                            if(!var8) { _fun0035_ip = 895; continue _fun0035 }
case 896:
                            var10 = _closure3_slot18;
                            var9 = var10.add;
                            var8 = var1.id;
                            var8 = var9.bind(var10)(var8);
case 895:
                            var8 = _closure3_slot15;
                            if(!var8) { _fun0035_ip = 897; continue _fun0035 }
case 563:
                            var9 = var1.referralTrialOfferId;
                            var3 = var3 != var9;
                            if(!var3) { _fun0035_ip = 57; continue _fun0035 }
case 565:
                            var8 = _closure2_slot39;
                            var4 = var8.includes;
                            var3 = var4.bind(var8)(var9);
case 57:
                            if(!var3) { _fun0035_ip = 897; continue _fun0035 }
case 898:
                            var8 = _closure3_slot18;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
case 897:
                            var3 = _closure3_slot16;
                            if(!var3) { _fun0035_ip = 65; continue _fun0035 }
case 899:
                            var4 = var1.codedLinks;
                            var8 = var4.length;
                            var4 = 0;
                            var3 = var8 > var4;
case 65:
                            if(!var3) { _fun0035_ip = 772; continue _fun0035 }
case 900:
                            var8 = _closure3_slot18;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0035_ip = 772; continue _fun0035;
case 876:
                            var8 = _closure3_slot18;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0035_ip = 772; continue _fun0035;
case 765:
                            var8 = _closure3_slot18;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0035_ip = 772; continue _fun0035;
case 762:
                            var8 = _closure3_slot18;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0035_ip = 772; continue _fun0035;
case 757:
                            var8 = _closure3_slot18;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            var3 = undefined;
                            return var3;
case 748:
                            var8 = _closure3_slot18;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            var3 = undefined;
                            return var3;
case 738:
                            var8 = _closure3_slot18;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0035_ip = 772; continue _fun0035;
case 582:
                            var8 = _closure3_slot18;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            var3 = undefined;
                            return var3;
case 730:
                            var8 = _closure3_slot18;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            var3 = undefined;
                            return var3;
case 721:
                            var8 = _closure3_slot18;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0035_ip = 772; continue _fun0035;
case 719:
                            var4 = _closure2_slot72;
                            var3 = var1.author;
                            var3 = var3.id;
                            var4 = var4[var3];
                            var3 = _closure2_slot127;
                            var8 = var5 == var3;
                            var3 = undefined;
                            if(var8) { _fun0035_ip = 901; continue _fun0035 }
case 902:
                            var6 = _closure2_slot127;
                            var6 = var6.messageAuthorMembers;
                            var5 = var5 == var6;
                            var3 = undefined;
                            if(var5) { _fun0035_ip = 901; continue _fun0035 }
case 903:
                            var5 = var1.author;
                            var5 = var5.id;
                            var3 = var6[var5];
case 901:
                            if(!(var4 !== var3)) { _fun0035_ip = 772; continue _fun0035 }
case 598:
                            var5 = _closure3_slot18;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0035_ip = 772; continue _fun0035;
case 713:
                            var5 = _closure3_slot18;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0035_ip = 772; continue _fun0035;
case 712:
                            var5 = _closure3_slot18;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0035_ip = 772; continue _fun0035;
case 711:
                            var5 = _closure3_slot18;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0035_ip = 772; continue _fun0035;
case 709:
                            var5 = _closure3_slot18;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0035_ip = 772; continue _fun0035;
case 708:
                            var5 = _closure3_slot18;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            var3 = undefined;
                            return var3;
case 705:
                            var3 = _closure3_slot18;
                            var2 = var3.add;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
case 772:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var5.bind(var15)(var3);
                    var5 = _closure2_slot120;
                    var3 = {};
                    var3['forceRender'] = var14;
                    var3['updateMessageIds'] = var13;
                    var3['scrollToMessageId'] = var12;
                    var3['jumpTargetId'] = var11;
                    var3['jumpType'] = var10;
                    var3['focusTargetId'] = var9;
                    var3['ignoreEmbedDescriptionCache'] = var8;
                    var8 = _closure2_slot131;
                    var3['messagesNewlyLoaded'] = var8;
                    var3['shouldInitialScroll'] = var7;
                    var3['minimizeScrolling'] = var6;
                    var3 = var5.bind(var4)(var3);
                    var5 = _closure2_slot109;
                    var3 = false;
                    var3 = var5.bind(var4)(var3);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 83;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.recordTimings;
                    var2 = _closure2_slot7;
                    var1 = _closure2_slot6;
                    var1 = var3.bind(var4)(var2, var1);
case 371:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var41.bind(var42)(var5, var34);
            var5 = _closure1_slot5;
            var41 = var5.useEffect;
            var34 = new Array(2);
            var34[0] = var10;
            var34[1] = var18;
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
            var18 = var41.bind(var5)(var18, var34);
            var34 = var5.useImperativeHandle;
            var18 = new Array(15);
            var18[0] = var19;
            var18[1] = var23;
            var18[2] = var40;
            var18[3] = var33;
            var18[4] = var9;
            var18[5] = var8;
            var18[6] = var10;
            var18[7] = var39;
            var18[8] = var38;
            var18[9] = var37;
            var18[10] = var36;
            var18[11] = var35;
            var18[12] = var7;
            var18[13] = var15;
            var18[14] = var13;
            var15 = arg2;
            var13 = function() {
                var1 = {};
                var4 = _closure2_slot118;
                var1['findMessageIndex'] = var4;
                var4 = _closure2_slot120;
                var1['updateRows'] = var4;
                var4 = _closure2_slot119;
                var1['scrollToMessageId'] = var4;
                var4 = function scrollToBottom() {
                    _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                        var7 = arguments[0];
                        var1 = undefined;
                        if(!(var7 === var1)) { _fun0036_ip = 116; continue _fun0036 }
case 117:
                        var7 = true;
case 116:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 83;
                        var2 = var4[var2];
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.scrollToBottom;
                        var11 = _closure2_slot101;
                        var10 = _closure2_slot56;
                        var9 = _closure2_slot126;
                        var12 = var6;
                        var8 = var7;
                        var2 = var12[var5](var11, var10, var9, var8, var7);
                        return var1;
                    }
                };
                var1['scrollToBottom'] = var4;
                var4 = function scrollToTop() {
                    _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                        var5 = arguments[0];
                        var3 = undefined;
                        if(!(var5 === var3)) { _fun0037_ip = 116; continue _fun0037 }
case 117:
                        var5 = true;
case 116:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 83;
                        var1 = var4[var1];
                        var4 = var2.bind(var3)(var1);
                        var3 = var4.scrollToTop;
                        var2 = _closure2_slot101;
                        var1 = _closure2_slot56;
                        var1 = var3.bind(var4)(var2, var1, var5);
                        return var1;
                    }
                };
                var1['scrollToTop'] = var4;
                var4 = function scrollToRelativeOffset(arg1) {
                    _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                        var6 = arguments[1];
                        var3 = undefined;
                        if(!(var6 === var3)) { _fun0038_ip = 116; continue _fun0038 }
case 117:
                        var6 = true;
case 116:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 83;
                        var1 = var4[var1];
                        var5 = var2.bind(var3)(var1);
                        var4 = var5.scrollToRelativeOffset;
                        var10 = _closure2_slot101;
                        var9 = _closure2_slot56;
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
                    var1 = 83;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.scrollToTopMessage;
                    var2 = _closure2_slot101;
                    var1 = _closure2_slot110;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1['scrollToTopMessage'] = var4;
                var4 = function jumpToPresent() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 83;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.jumpToPresent;
                    var4 = _closure2_slot6;
                    var3 = _closure2_slot1;
                    var2 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 83;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var6 = var7.scrollToBottom;
                        var11 = _closure2_slot101;
                        var10 = _closure2_slot56;
                        var9 = _closure2_slot126;
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
                    _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 83;
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
                        var5 = _closure2_slot107;
                        var1['hasJumpedToOriginalPost'] = var5;
                        var5 = _closure2_slot56;
                        var1['useReducedMotion'] = var5;
                        var6 = _closure2_slot44;
                        var5 = null;
                        var6 = var5 != var6;
                        if(!var6) { _fun0039_ip = 11; continue _fun0039 }
case 168:
                        var5 = _closure2_slot44;
case 11:
                        var1['oldestUnreadMessageId'] = var5;
                        var6 = _closure2_slot110;
                        var5 = var6.getPreviousRows;
                        var5 = var5.bind(var6)();
                        var1['chatManagerRows'] = var5;
                        var5 = _closure2_slot118;
                        var1['findMessageIndex'] = var5;
                        var4 = _closure2_slot101;
                        var1['chatRef'] = var4;
                        var4 = function loadMoreBefore() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 83;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.loadMoreBefore;
                            var3 = _closure2_slot7;
                            var2 = _closure2_slot6;
                            var1 = function(arg1) {
                                var3 = _closure2_slot103;
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
                    var1 = 83;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getChatRef;
                    var1 = _closure2_slot101;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['getChatRef'] = var3;
                var3 = _closure2_slot121;
                var1['maybeRescrollToMessageId'] = var3;
                var3 = _closure2_slot122;
                var1['clearRows'] = var3;
                var2 = _closure2_slot123;
                var1['getVisibleMessages'] = var2;
                return var1;
            };
            var13 = var34.bind(var5)(var15, var13, var18);
            var18 = var5.useCallback;
            var15 = _closure1_slot3;
            var13 = function* () {
                var1 = function* anon_0_() {
                    _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0040_ip = 125; continue _fun0040 }
case 904:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 83;
                        var2 = var3[var2];
                        var3 = undefined;
                        var5 = var4.bind(var3)(var2);
                        var4 = var5.handleTapNavBar;
                        var2 = {};
                        var7 = _closure2_slot1;
                        var2['channel'] = var7;
                        var7 = _closure2_slot56;
                        var2['useReducedMotion'] = var7;
                        var7 = _closure2_slot102;
                        var7 = var7.isNearTop;
                        var2['isNearTop'] = var7;
                        var7 = _closure2_slot6;
                        var2['messages'] = var7;
                        var7 = _closure2_slot118;
                        var2['findMessageIndex'] = var7;
                        var7 = function scrollToTop() {
                            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                                var5 = arguments[0];
                                var3 = undefined;
                                if(!(var5 === var3)) { _fun0041_ip = 116; continue _fun0041 }
case 117:
                                var5 = true;
case 116:
                                var2 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 83;
                                var1 = var4[var1];
                                var4 = var2.bind(var3)(var1);
                                var3 = var4.scrollToTop;
                                var2 = _closure2_slot101;
                                var1 = _closure2_slot56;
                                var1 = var3.bind(var4)(var2, var1, var5);
                                return var1;
                            }
                        };
                        var2['scrollToTop'] = var7;
                        var6 = _closure2_slot101;
                        var2['chatRef'] = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=128);
case 905:
                        return var2;
case 906:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0040_ip = 907; continue _fun0040 }
case 908:
                        return var3;
case 907:
                        return var2;
case 125:
                        return var1;
                    }
                };
                return var1;
            };
            var15 = var15.bind(var4)(var13);
            var13 = new Array(6);
            var13[0] = var8;
            var13[1] = var33;
            var32 = var32.isNearTop;
            var13[2] = var32;
            var13[3] = var9;
            var13[4] = var19;
            var13[5] = var28;
            var19 = var18.bind(var5)(var15, var13);
            var18 = var5.useCallback;
            var15 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var4 = var1.description;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 83;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.handleTapShowAltText;
                var2 = var2.bind(var3)(var4);
                return var1;
            };
            var13 = new Array(0);
            var18 = var18.bind(var5)(var15, var13);
            var15 = var5.useCallback;
            var13 = new Array(3);
            var13[0] = var31;
            var13[1] = var23;
            var13[2] = var3;
            var3 = function(arg1) {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 101;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.getNativeSyntheticEventData;
                var2 = arg1;
                var2 = var5.bind(var6)(var2);
                var7 = var2.messageId;
                var2 = 83;
                var2 = var4[var2];
                var6 = var3.bind(var1)(var2);
                var5 = var6.handleLongPressSticker;
                var4 = _closure2_slot104;
                var3 = _closure2_slot120;
                var3 = var5.bind(var6)(var7, var4, var3);
                var2 = _closure2_slot105;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var23 = var15.bind(var5)(var3, var13);
            var13 = var5.useCallback;
            var3 = new Array(2);
            var3[0] = var14;
            var3[1] = var2;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 83;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.handleTapTableView;
                var2 = _closure2_slot3;
                var1 = _closure2_slot82;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var15 = var13.bind(var5)(var2, var3);
            var13 = var5.useCallback;
            var3 = new Array(6);
            var3[0] = var30;
            var3[1] = var29;
            var3[2] = var12;
            var3[3] = var10;
            var3[4] = var8;
            var3[5] = var7;
            var2 = function(arg1) {
                _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var7 = var1.firstVisibleMessageIndex;
                    var6 = var1.lastVisibleMessageIndex;
                    var5 = var1.firstVisibleMessagePercentVisible;
                    var4 = var1.lastVisibleMessagePercentVisible;
                    var2 = null;
                    var1 = var2 != var7;
                    if(!var1) { _fun0042_ip = 707; continue _fun0042 }
case 90:
                    var1 = var2 != var6;
case 707:
                    if(!var1) { _fun0042_ip = 67; continue _fun0042 }
case 76:
                    var1 = var2 != var5;
case 67:
                    if(!var1) { _fun0042_ip = 171; continue _fun0042 }
case 4:
                    var1 = var2 != var4;
case 171:
                    if(!var1) { _fun0042_ip = 85; continue _fun0042 }
case 167:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 83;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleFirstLayout;
                    var12 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 83;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.handleVisibleMessagesChange;
                        var1 = {};
                        var7 = arg1;
                        var8 = var1;
                        var4 = copyDataProperties(var8, var7);
                        var6 = _closure2_slot110;
                        var5 = 'chatManager';
                        var1[var5] = var6;
                        var6 = _closure2_slot85;
                        var5 = 'shouldTrackAnnouncementMessageViews';
                        var1[var5] = var6;
                        var6 = _closure2_slot86;
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
case 85:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var13.bind(var5)(var2, var3);
            var13 = var5.useCallback;
            var3 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 83;
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
            var2[0] = var30;
            var2[1] = var29;
            var2[2] = var12;
            var2[3] = var10;
            var2[4] = var8;
            var2[5] = var7;
            var1 = function(arg1) {
                _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var7 = var1.firstVisibleMessageIndex;
                    var6 = var1.lastVisibleMessageIndex;
                    var5 = var1.firstVisibleMessagePercentVisible;
                    var4 = var1.lastVisibleMessagePercentVisible;
                    var2 = null;
                    var1 = var2 != var7;
                    if(!var1) { _fun0043_ip = 707; continue _fun0043 }
case 90:
                    var1 = var2 != var6;
case 707:
                    if(!var1) { _fun0043_ip = 67; continue _fun0043 }
case 76:
                    var1 = var2 != var5;
case 67:
                    if(!var1) { _fun0043_ip = 171; continue _fun0043 }
case 4:
                    var1 = var2 != var4;
case 171:
                    if(!var1) { _fun0043_ip = 85; continue _fun0043 }
case 167:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 83;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleMessageVisibilityChanged;
                    var12 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 83;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.handleVisibleMessagesChange;
                        var1 = {};
                        var7 = arg1;
                        var8 = var1;
                        var4 = copyDataProperties(var8, var7);
                        var6 = _closure2_slot110;
                        var5 = 'chatManager';
                        var1[var5] = var6;
                        var6 = _closure2_slot85;
                        var5 = 'shouldTrackAnnouncementMessageViews';
                        var1[var5] = var6;
                        var6 = _closure2_slot86;
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
case 85:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot60;
            var2 = _closure1_slot59;
            var1 = {};
            var8 = _closure1_slot58;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 102;
            var5 = var10[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['ref'] = var28;
            var28 = true;
            var5['inverted'] = var28;
            var5['alwaysRespectKeyboard'] = var27;
            var5['style'] = var26;
            var5['roleStyle'] = var25;
            var5['onChatScrollPosition'] = var24;
            var24 = var17.handleTapImage;
            var5['onTapImage'] = var24;
            var24 = var17.handleTapChannel;
            var5['onTapChannel'] = var24;
            var24 = var17.handleLongPressChannel;
            var5['onLongPressChannel'] = var24;
            var24 = var17.handleTapAttachmentLink;
            var5['onTapAttachmentLink'] = var24;
            var24 = var17.handleLongPressAttachmentLink;
            var5['onLongPressAttachmentLink'] = var24;
            var24 = var17.handleTapCall;
            var5['onTapCall'] = var24;
            var24 = var17.handleTapMention;
            var5['onTapMention'] = var24;
            var24 = var17.handleTapCommandMention;
            var5['onTapCommandMention'] = var24;
            var24 = var17.handleLongPressCommandMention;
            var5['onLongPressCommandMention'] = var24;
            var24 = var17.handleTapLink;
            var5['onTapLink'] = var24;
            var24 = var17.handleLongPressLink;
            var5['onLongPressLink'] = var24;
            var24 = var17.handleTapReaction;
            var5['onTapReaction'] = var24;
            var24 = var17.handleLongPressReaction;
            var5['onLongPressReaction'] = var24;
            var24 = var17.handleTapAvatar;
            var5['onTapAvatar'] = var24;
            var24 = var17.handleTapUsername;
            var5['onTapUsername'] = var24;
            var24 = var17.handleLongPressUsername;
            var5['onLongPressUsername'] = var24;
            var24 = var17.handleOpenSticker;
            var5['onTapSticker'] = var24;
            var5['onLongPressSticker'] = var23;
            var23 = var17.handleLongPressMessage;
            var5['onLongPressMessage'] = var23;
            var23 = var17.handleInitiateReply;
            var5['onInitiateReply'] = var23;
            var23 = var17.handleInitiateEdit;
            var5['onInitiateEdit'] = var23;
            var23 = var17.handleInitiateThread;
            var5['onInitiateThread'] = var23;
            var23 = var17.handleTapMessage;
            var5['onTapMessage'] = var23;
            var23 = var17.handleDoubleTapMessage;
            var5['onDoubleTapMessage'] = var23;
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
            var19 = var17.handleTapRemix;
            var5['onTapRemix'] = var19;
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
            var6 = 103;
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
    var2 = var4.bind(var7)(var2);
    var4 = 104;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/chat/MessagesFunctional.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
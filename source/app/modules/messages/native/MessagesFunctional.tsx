// app/modules/messages/native/MessagesFunctional.tsx
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
            var9 = _closure1_slot64;
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
            var7 = _closure1_slot64;
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
    var _closure1_slot63 = var1;
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
    var _closure1_slot64 = var1;
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
    var9 = var4.useChannelPollInteractions;
    var _closure1_slot26 = var9;
    var4 = var4.useMessagePollInteractions;
    var _closure1_slot27 = var4;
    var4 = 24;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot28 = var4;
    var4 = 25;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot29 = var4;
    var4 = 26;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot30 = var4;
    var4 = 27;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot31 = var4;
    var4 = 28;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot32 = var4;
    var4 = 29;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot33 = var4;
    var4 = 30;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot34 = var4;
    var4 = 31;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot35 = var4;
    var4 = 32;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot36 = var4;
    var4 = 33;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot37 = var4;
    var4 = 34;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot38 = var4;
    var4 = 35;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot39 = var4;
    var4 = 36;
    var9 = var6[var4];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot40 = var9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getUserCommunicationDisabledVersion;
    var _closure1_slot41 = var4;
    var4 = 37;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot42 = var4;
    var4 = 38;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot43 = var4;
    var4 = 39;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot44 = var4;
    var4 = 40;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot45 = var4;
    var4 = 41;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot46 = var4;
    var4 = 42;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot47 = var4;
    var4 = 43;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot48 = var4;
    var4 = 44;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot49 = var4;
    var4 = 45;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot50 = var4;
    var4 = 46;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot51 = var4;
    var4 = 47;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.ChannelTypesSets;
    var _closure1_slot52 = var9;
    var9 = var4.MessageTypes;
    var _closure1_slot53 = var9;
    var9 = var4.MessageFlags;
    var _closure1_slot54 = var9;
    var9 = var4.Permissions;
    var _closure1_slot55 = var9;
    var4 = var4.ME;
    var _closure1_slot56 = var4;
    var4 = 48;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot57 = var9;
    var4 = var4.PremiumTypes;
    var _closure1_slot58 = var4;
    var4 = 49;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot59 = var9;
    var9 = var4.Fragment;
    var _closure1_slot60 = var9;
    var4 = var4.jsxs;
    var _closure1_slot61 = var4;
    var4 = 50;
    var4 = var6[var4];
    var9 = var8.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'Messages';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot62 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var66 = arg1;
            var _closure2_slot0 = var66;
            var8 = var66.channel;
            var _closure2_slot1 = var8;
            var18 = var66.screenIndex;
            var _closure2_slot2 = var18;
            var14 = var66.chatInputRef;
            var _closure2_slot3 = var14;
            var22 = var66.isResourceChannel;
            var _closure2_slot4 = var22;
            var25 = var66.style;
            var23 = var66.visibleMessagesWindowHandler;
            var _closure2_slot5 = var23;
            var21 = var66.onPressKey;
            var11 = var66.children;
            var16 = var66.HACK_fixModalInteraction;
            var26 = var66.alwaysRespectKeyboard;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 51;
            var7 = var2[var3];
            var4 = undefined;
            var13 = var5.bind(var4)(var7);
            var12 = var13.useStateFromStores;
            var7 = _closure1_slot45;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = var8.id;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var3 = _closure1_slot45;
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
            var2 = _closure1_slot42;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot42;
                var2 = var3.getGuild;
                var1 = _closure2_slot8;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var33 = var7.bind(var13)(var5, var2);
            var _closure2_slot9 = var33;
            var5 = null;
            var2 = var5 == var33;
            var59 = undefined;
            if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var59 = var33.systemChannelFlags;
case 36:
            var _closure2_slot10 = var59;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = var17[var3];
            var20 = var15.bind(var4)(var2);
            var19 = var20.useStateFromStores;
            var2 = _closure1_slot37;
            var13 = new Array(1);
            var13[0] = var2;
            var7 = function() {
                var2 = _closure1_slot37;
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
            var24 = var15.bind(var4)(var2);
            var19 = var24.useStateFromStores;
            var2 = _closure1_slot36;
            var13 = new Array(1);
            var13[0] = var2;
            var7 = function() {
                var1 = _closure1_slot36;
                var1 = var1.theme;
                return var1;
            };
            var2 = new Array(0);
            var49 = var19.bind(var24)(var13, var7, var2);
            var _closure2_slot19 = var49;
            var2 = 53;
            var2 = var17[var2];
            var7 = var15.bind(var4)(var2);
            var2 = var7.useIsMessageSwipeActionsEnabled;
            var45 = var2.bind(var7)();
            var _closure2_slot20 = var45;
            r128 = 54;
            var2 = var17[r128];
            var7 = var15.bind(var4)(var2);
            var2 = var7.useMessageAuthorActivities;
            r100 = var2.bind(var7)(var9);
            var _closure2_slot21 = r100;
            var2 = var17[r128];
            var7 = var15.bind(var4)(var2);
            var2 = var7.useFetchMessageApplications;
            var2 = var2.bind(var7)(var9);
            var24 = _closure1_slot1;
            var2 = 55;
            var2 = var17[var2];
            var2 = var24.bind(var4)(var2);
            var2 = var2.bind(var4)(var9, var8);
            var19 = _closure1_slot4;
            var30 = 2;
            var2 = var19.bind(var4)(var2, var30);
            var13 = 0;
            var100 = var2[var13];
            var _closure2_slot22 = var100;
            var7 = 1;
            var2 = var2[var7];
            var2 = var17[var3];
            var31 = var15.bind(var4)(var2);
            var29 = var31.useStateFromStores;
            var2 = _closure1_slot44;
            var28 = new Array(1);
            var28[0] = var2;
            var27 = function() {
                var2 = _closure1_slot44;
                var1 = var2.getInvites;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var76 = var29.bind(var31)(var28, var27, var2);
            var _closure2_slot23 = var76;
            var2 = var17[var3];
            var31 = var15.bind(var4)(var2);
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
            var99 = var2.appDirectoryEmbedApplications;
            var _closure2_slot24 = var99;
            var98 = var2.invalidAppDirectoryEmbedApplicationIds;
            var _closure2_slot25 = var98;
            var97 = var2.appDirectoryEmbedApplicationFetchStates;
            var _closure2_slot26 = var97;
            var2 = var17[var3];
            var29 = var15.bind(var4)(var2);
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
            r106 = var28.bind(var29)(var27, var2);
            var _closure2_slot27 = r106;
            var2 = var17[var3];
            var29 = var15.bind(var4)(var2);
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
            var96 = var28.bind(var29)(var27, var2);
            var _closure2_slot28 = var96;
            var2 = var17[var3];
            var32 = var15.bind(var4)(var2);
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
                var1 = 56;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            r110 = var31.bind(var32)(var29, var27, var28);
            var _closure2_slot29 = r110;
            var27 = var17[var3];
            var31 = var15.bind(var4)(var27);
            var29 = var31.useStateFromStoresArray;
            var28 = new Array(2);
            var28[0] = var2;
            var27 = _closure1_slot47;
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
                            var4 = _closure1_slot47;
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
                    var3 = _closure1_slot63;
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
            r108 = var29.bind(var31)(var28, var27);
            var _closure2_slot30 = r108;
            var27 = var17[var3];
            var31 = var15.bind(var4)(var27);
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
            r109 = var29.bind(var31)(var28, var27);
            var _closure2_slot31 = r109;
            var27 = var17[var3];
            var29 = var15.bind(var4)(var27);
            var28 = var29.useStateFromStoresArray;
            var27 = new Array(1);
            var27[0] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = new Array(0);
                    var3 = _closure1_slot63;
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
            r107 = var28.bind(var29)(var27, var2);
            var _closure2_slot32 = r107;
            var2 = var17[var3];
            var29 = var15.bind(var4)(var2);
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
            var95 = var28.bind(var29)(var27, var2);
            var _closure2_slot33 = var95;
            var2 = var17[var3];
            var31 = var15.bind(var4)(var2);
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
            var93 = var29.bind(var31)(var28, var27, var2);
            var _closure2_slot34 = var93;
            var2 = var17[var3];
            var31 = var15.bind(var4)(var2);
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
            var92 = var29.bind(var31)(var28, var27, var2);
            var _closure2_slot35 = var92;
            var2 = 57;
            var2 = var17[var2];
            var27 = var15.bind(var4)(var2);
            var2 = var27.useCodedLinksExperimentEmbeds;
            var91 = var2.bind(var27)();
            var _closure2_slot36 = var91;
            var2 = 58;
            var2 = var17[var2];
            var28 = var15.bind(var4)(var2);
            var27 = var28.useQuests;
            var2 = {'fetchPolicy': 'cache-or-network', 'callerSource': 'messages_native_fn'};
            var2 = var27.bind(var28)(var2);
            var90 = var2.quests;
            var _closure2_slot37 = var90;
            var89 = var2.isFetchingCurrentQuests;
            var _closure2_slot38 = var89;
            var27 = var9.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot53;
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
            var2 = 56;
            var2 = var17[var2];
            var2 = var15.bind(var4)(var2);
            var2 = var2.isNotNullish;
            var2 = var27.bind(var28)(var2);
            var _closure2_slot39 = var2;
            var2 = var17[var3];
            var29 = var15.bind(var4)(var2);
            var28 = var29.useStateFromStoresArray;
            var2 = _closure1_slot28;
            var27 = new Array(1);
            var27[0] = var2;
            var2 = function() {
                var3 = _closure2_slot39;
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
                var1 = 56;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            r105 = var28.bind(var29)(var27, var2);
            var _closure2_slot40 = r105;
            var2 = 59;
            var2 = var17[var2];
            var28 = var15.bind(var4)(var2);
            var27 = var28.useTrialOffer;
            var2 = _closure1_slot57;
            var85 = var27.bind(var28)(var2);
            var _closure2_slot41 = var85;
            var2 = var17[var3];
            var29 = var15.bind(var4)(var2);
            var28 = var29.useStateFromStores;
            var2 = _closure1_slot50;
            var27 = new Array(1);
            var27[0] = var2;
            var2 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 60;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.isPremiumExactly;
                var5 = _closure1_slot50;
                var2 = var5.getCurrentUser;
                var2 = var2.bind(var5)();
                var1 = _closure1_slot58;
                var1 = var1.TIER_2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var84 = var28.bind(var29)(var27, var2);
            var _closure2_slot42 = var84;
            var2 = var17[var3];
            var31 = var15.bind(var4)(var2);
            var29 = var31.useStateFromStores;
            var2 = _closure1_slot38;
            var28 = new Array(1);
            var28[0] = var2;
            var27 = new Array(1);
            var27[0] = var10;
            var2 = function() {
                var3 = _closure1_slot38;
                var2 = var3.getEditingMessageId;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var80 = var29.bind(var31)(var28, var2, var27);
            var _closure2_slot43 = var80;
            var2 = var17[var3];
            var31 = var15.bind(var4)(var2);
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
            var68 = var29.bind(var31)(var28, var2, var27);
            var _closure2_slot44 = var68;
            var2 = var17[var3];
            var31 = var15.bind(var4)(var2);
            var29 = var31.useStateFromStores;
            var2 = _closure1_slot48;
            var28 = new Array(1);
            var28[0] = var2;
            var27 = new Array(1);
            var27[0] = var10;
            var2 = function() {
                var3 = _closure1_slot48;
                var2 = var3.getOldestUnreadMessageId;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var37 = var29.bind(var31)(var28, var2, var27);
            var _closure2_slot45 = var37;
            var2 = var17[var3];
            var31 = var15.bind(var4)(var2);
            var29 = var31.useStateFromStores;
            var2 = _closure1_slot43;
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
                    var4 = _closure1_slot43;
                    var3 = var4.canChatInGuild;
                    var2 = _closure2_slot8;
                    var1 = var3.bind(var4)(var2);
case 53:
                    return var1;
                }
            };
            var40 = var29.bind(var31)(var28, var2, var27);
            var _closure2_slot46 = var40;
            var2 = var17[var3];
            var31 = var15.bind(var4)(var2);
            var29 = var31.useStateFromStores;
            var2 = _closure1_slot46;
            var28 = new Array(1);
            var28[0] = var2;
            var27 = new Array(1);
            var27[0] = var8;
            var2 = function() {
                var4 = _closure1_slot46;
                var3 = var4.can;
                var1 = _closure1_slot55;
                var2 = var1.SEND_MESSAGES;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var79 = var29.bind(var31)(var28, var2, var27);
            var _closure2_slot47 = var79;
            var2 = 61;
            var2 = var17[var2];
            var2 = var24.bind(var4)(var2);
            var70 = var2.bind(var4)(var10);
            var _closure2_slot48 = var70;
            var2 = var17[var3];
            var29 = var15.bind(var4)(var2);
            var28 = var29.useStateFromStores;
            var2 = _closure1_slot51;
            var27 = new Array(1);
            var27[0] = var2;
            var24 = new Array(1);
            var24[0] = var71;
            var2 = function() {
                var4 = _closure1_slot51;
                var3 = var4.getUserVoiceChannelId;
                var2 = _closure1_slot56;
                var1 = _closure2_slot11;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var77 = var28.bind(var29)(var27, var2, var24);
            var _closure2_slot49 = var77;
            var2 = var17[var3];
            var31 = var15.bind(var4)(var2);
            var29 = var31.useStateFromStores;
            var2 = _closure1_slot31;
            var28 = new Array(1);
            var28[0] = var2;
            var27 = new Array(1);
            var27[0] = var8;
            var24 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure1_slot52;
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
            r103 = var29.bind(var31)(var28, var24, var27);
            var _closure2_slot50 = r103;
            var24 = var17[var3];
            var31 = var15.bind(var4)(var24);
            var29 = var31.useStateFromStoresObject;
            var24 = _closure1_slot39;
            var28 = new Array(1);
            var28[0] = var24;
            var27 = function() {
                var1 = {};
                var3 = _closure1_slot39;
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
            var88 = var24.resolvingGiftCodes;
            var _closure2_slot51 = var88;
            var87 = var24.resolvedGiftCodes;
            var _closure2_slot52 = var87;
            var86 = var24.acceptingGiftCodes;
            var _closure2_slot53 = var86;
            var24 = var17[var3];
            var31 = var15.bind(var4)(var24);
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
            var69 = var29.bind(var31)(var28, var24, var27);
            var _closure2_slot54 = var69;
            var24 = var17[var3];
            var31 = var15.bind(var4)(var24);
            var29 = var31.useStateFromStores;
            var24 = _closure1_slot49;
            var28 = new Array(1);
            var28[0] = var24;
            var27 = new Array(1);
            var27[0] = var10;
            var24 = function() {
                var3 = _closure1_slot49;
                var2 = var3.getFiles;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var65 = var29.bind(var31)(var28, var24, var27);
            var _closure2_slot55 = var65;
            var24 = var17[var3];
            var29 = var15.bind(var4)(var24);
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
            r121 = var28.bind(var29)(var27, var2, var24);
            var _closure2_slot56 = r121;
            var2 = var17[var3];
            var29 = var15.bind(var4)(var2);
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
            var _closure2_slot57 = var32;
            var24 = var2.roleStyle;
            var _closure2_slot58 = var24;
            var48 = var2.saturation;
            var _closure2_slot59 = var48;
            var43 = var2.displayNameStylesEnabled;
            var _closure2_slot60 = var43;
            var2 = var17[var3];
            var31 = var15.bind(var4)(var2);
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
            r123 = var29.bind(var31)(var28, var2, var27);
            var _closure2_slot61 = r123;
            var2 = var17[var3];
            var29 = var15.bind(var4)(var2);
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
            r116 = var28.bind(var29)(var27, var2);
            var _closure2_slot62 = r116;
            var2 = var17[var3];
            var34 = var15.bind(var4)(var2);
            var31 = var34.useStateFromStores;
            var2 = _closure1_slot22;
            var29 = new Array(1);
            var29[0] = var2;
            var2 = 62;
            var2 = var17[var2];
            var2 = var15.bind(var4)(var2);
            r131 = var2.isVersionEqual;
            r133 = function() {
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
            r132 = new Array(0);
            r135 = var34;
            r134 = var29;
            var2 = r135[var31](r134, r133, r132, r131, r130);
            var2 = var19.bind(var4)(var2, var30);
            r115 = var2[var13];
            var _closure2_slot63 = r115;
            r114 = var2[var7];
            var _closure2_slot64 = r114;
            var2 = var17[var3];
            var28 = var15.bind(var4)(var2);
            var27 = var28.useStateFromStores;
            var2 = _closure1_slot15;
            var19 = new Array(1);
            var19[0] = var2;
            var2 = function() {
                var1 = _closure1_slot15;
                var1 = var1.hasLoadedExperiments;
                return var1;
            };
            r120 = var27.bind(var28)(var19, var2);
            var _closure2_slot65 = r120;
            var2 = 63;
            var2 = var17[var2];
            var27 = var15.bind(var4)(var2);
            var19 = var27.useIsSpamMessageRequest;
            var2 = var8.id;
            var75 = var19.bind(var27)(var2);
            var _closure2_slot66 = var75;
            var2 = 64;
            var2 = var17[var2];
            var17 = var15.bind(var4)(var2);
            var15 = var17.useIsMessageRequest;
            var2 = var8.id;
            var74 = var15.bind(var17)(var2);
            var _closure2_slot67 = var74;
            r124 = var5 != var9;
            if(!r124) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var2 = var9.ready;
            if(var2) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var2 = var9.cached;
case 59:
            r124 = var2;
case 57:
            var _closure2_slot68 = r124;
            var41 = var5 != var9;
            if(!var41) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var41 = var9.cached;
case 61:
            var _closure2_slot69 = var41;
            r127 = var5 != var9;
            if(!r127) { _fun0004_ip = 63; continue _fun0004 }
case 64:
            r127 = var9.ready;
case 63:
            if(!r127) { _fun0004_ip = 65; continue _fun0004 }
case 66:
            var2 = var9.loadingMore;
            r127 = !var2;
case 65:
            var _closure2_slot70 = r127;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = var17[var3];
            var28 = var15.bind(var4)(var2);
            var27 = var28.useStateFromStores;
            var2 = _closure1_slot20;
            var19 = new Array(1);
            var19[0] = var2;
            var2 = function() {
                var2 = _closure1_slot20;
                var1 = var2.getRsvpVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            r122 = var27.bind(var28)(var19, var2);
            var _closure2_slot71 = r122;
            var2 = var17[var3];
            var28 = var15.bind(var4)(var2);
            var27 = var28.useStateFromStores;
            var2 = _closure1_slot19;
            var19 = new Array(1);
            var19[0] = var2;
            var2 = function() {
                var2 = _closure1_slot19;
                var1 = var2.getMessagesVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            r117 = var27.bind(var28)(var19, var2);
            var _closure2_slot72 = r117;
            var2 = var17[var3];
            var29 = var15.bind(var4)(var2);
            var28 = var29.useStateFromStores;
            var2 = _closure1_slot40;
            var27 = new Array(1);
            var27[0] = var2;
            var19 = function() {
                var2 = _closure1_slot40;
                var1 = var2.getCommunicationDisabledVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            r119 = var28.bind(var29)(var27, var19);
            var _closure2_slot73 = r119;
            var19 = var17[var3];
            var29 = var15.bind(var4)(var19);
            var28 = var29.useStateFromStoresObject;
            var27 = new Array(1);
            var27[0] = var2;
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
                            var7 = _closure1_slot40;
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
            r118 = var28.bind(var29)(var27, var2, var19);
            var _closure2_slot74 = r118;
            var2 = var17[var3];
            var28 = var15.bind(var4)(var2);
            var27 = var28.useStateFromStores;
            var2 = _closure1_slot46;
            var19 = new Array(1);
            var19[0] = var2;
            var2 = function() {
                var4 = _closure1_slot46;
                var3 = var4.can;
                var1 = _closure1_slot55;
                var2 = var1.MODERATE_MEMBERS;
                var1 = _closure2_slot9;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var72 = var27.bind(var28)(var19, var2);
            var _closure2_slot75 = var72;
            var2 = 65;
            var2 = var17[var2];
            var17 = var15.bind(var4)(var2);
            var15 = var17.useCurrentUserCommunicationDisabled;
            var19 = var5 == var33;
            var2 = undefined;
            if(var19) { _fun0004_ip = 74; continue _fun0004 }
case 75:
            var2 = var33.id;
case 74:
            var2 = var15.bind(var17)(var2);
            var19 = _closure1_slot4;
            var2 = var19.bind(var4)(var2, var30);
            var73 = var2[var7];
            var _closure2_slot76 = var73;
            var35 = _closure1_slot0;
            r126 = _closure1_slot2;
            var2 = r126[var3];
            var27 = var35.bind(var4)(var2);
            var17 = var27.useStateFromStores;
            var2 = _closure1_slot35;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function() {
                var1 = _closure1_slot35;
                var1 = var1.locale;
                return var1;
            };
            var82 = var17.bind(var27)(var15, var2);
            var _closure2_slot77 = var82;
            var67 = _closure1_slot1;
            var2 = 66;
            var2 = r126[var2];
            var27 = var67.bind(var4)(var2);
            var17 = var27.useExperiment;
            var15 = {};
            var2 = '41de6d_2';
            var15['location'] = var2;
            var2 = {};
            var34 = false;
            var2['autoTrackExposure'] = var34;
            var2 = var17.bind(var27)(var15, var2);
            var17 = var2.paymentsBlocked;
            var _closure2_slot78 = var17;
            var2 = r126[var3];
            var28 = var35.bind(var4)(var2);
            var27 = var28.useStateFromStores;
            var2 = _closure1_slot33;
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
                    var4 = _closure1_slot33;
                    var3 = var4.hasJoined;
                    var2 = _closure2_slot7;
                    var1 = var3.bind(var4)(var2);
case 76:
                    return var1;
                }
            };
            r102 = var27.bind(var28)(var15, var2);
            var _closure2_slot79 = r102;
            var2 = r126[var3];
            var28 = var35.bind(var4)(var2);
            var27 = var28.useStateFromStores;
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
            r101 = var27.bind(var28)(var15, var2);
            var _closure2_slot80 = r101;
            var2 = r126[var3];
            var28 = var35.bind(var4)(var2);
            var27 = var28.useStateFromStores;
            var2 = _closure1_slot29;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function() {
                var2 = _closure1_slot29;
                var1 = var2.isEligible;
                var1 = var1.bind(var2)();
                return var1;
            };
            var83 = var27.bind(var28)(var15, var2);
            var _closure2_slot81 = var83;
            var2 = r126[var3];
            var28 = var35.bind(var4)(var2);
            var27 = var28.useStateFromStores;
            var2 = _closure1_slot11;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getLazyCacheStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            r104 = var27.bind(var28)(var15, var2);
            var _closure2_slot82 = r104;
            var2 = 67;
            var2 = r126[var2];
            var15 = var35.bind(var4)(var2);
            var2 = var15.useMessageJumpAndroidKeyboardHeight;
            var78 = var2.bind(var15)();
            var _closure2_slot83 = var78;
            var2 = 68;
            var2 = r126[var2];
            var2 = var67.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var _closure2_slot84 = var2;
            var15 = 69;
            var15 = r126[var15];
            var27 = var35.bind(var4)(var15);
            var15 = var27.useChannelSummariesExperiment;
            var15 = var15.bind(var27)(var8);
            var _closure2_slot85 = var15;
            var27 = r126[var3];
            var31 = var35.bind(var4)(var27);
            var29 = var31.useStateFromStores;
            var27 = _closure1_slot32;
            var28 = new Array(1);
            var28[0] = var27;
            var27 = new Array(2);
            var27[0] = var15;
            var15 = var8.id;
            var27[1] = var15;
            var15 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure2_slot85;
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
            var52 = var29.bind(var31)(var28, var15, var27);
            var _closure2_slot86 = var52;
            var15 = r126[var3];
            var31 = var35.bind(var4)(var15);
            var29 = var31.useStateFromStores;
            var15 = _closure1_slot50;
            var28 = new Array(1);
            var28[0] = var15;
            var27 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure1_slot50;
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
            var42 = var29.bind(var31)(var28, var27);
            var _closure2_slot87 = var42;
            r125 = _closure1_slot5;
            var29 = r125.useEffect;
            var27 = var8.id;
            var28 = new Array(5);
            var28[0] = var27;
            var27 = var9.hasMoreAfter;
            var28[1] = var27;
            var27 = var9.hasMoreBefore;
            var28[2] = var27;
            var27 = var9.length;
            var28[3] = var27;
            var27 = var9.ready;
            var28[4] = var27;
            var27 = function() {
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
                    var2 = 70;
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
            var27 = var29.bind(r125)(var27, var28);
            var27 = 71;
            var28 = r126[var27];
            var31 = var35.bind(var4)(var28);
            var29 = var31.useShouldTrackAnnouncementMessageViews;
            var28 = {};
            var28['guild'] = var33;
            var28['channel'] = var8;
            var28['messages'] = var9;
            var28['isMessagesReady'] = r124;
            r129 = 'MessagesFunctional';
            var28['location'] = r129;
            var29 = var29.bind(var31)(var28);
            var _closure2_slot88 = var29;
            var27 = r126[var27];
            var31 = var35.bind(var4)(var27);
            var28 = var31.useShouldTrackRichPresenceInviteEmbedViews;
            var27 = {};
            var27['messages'] = var9;
            var27['isMessagesReady'] = r124;
            var28 = var28.bind(var31)(var27);
            var _closure2_slot89 = var28;
            var27 = 72;
            var27 = r126[var27];
            var31 = var35.bind(var4)(var27);
            var27 = var31.useShouldDisplaySpoilerObscurity;
            var50 = var27.bind(var31)(var8);
            var _closure2_slot90 = var50;
            var27 = 73;
            var27 = r126[var27];
            var31 = var35.bind(var4)(var27);
            var27 = var31.useIsAgeVerified;
            var56 = var27.bind(var31)();
            var _closure2_slot91 = var56;
            var33 = r125.useEffect;
            var31 = new Array(2);
            var31[0] = var10;
            var31[1] = var12;
            var27 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 74;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.handleChannelSelect;
                var1 = var1.bind(var2)();
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 74;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleChannelSelect;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                return var1;
            };
            var27 = var33.bind(r125)(var27, var31);
            var27 = 75;
            var27 = r126[var27];
            var33 = var35.bind(var4)(var27);
            var31 = var33.useShouldDisableInteractiveComponents;
            var27 = var8.id;
            r113 = var31.bind(var33)(var27);
            var _closure2_slot92 = r113;
            var31 = _closure1_slot26;
            var27 = var8.id;
            r112 = var31.bind(var4)(var27);
            var _closure2_slot93 = r112;
            var31 = new Array(0);
            var _closure2_slot94 = var31;
            var33 = var9.forEach;
            var27 = function(arg1) {
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
                    var3 = _closure2_slot94;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var4);
case 5:
                    return var1;
                }
            };
            var27 = var33.bind(var9)(var27);
            var27 = _closure1_slot27;
            r111 = var27.bind(var4)(var31);
            var _closure2_slot95 = r111;
            var27 = r126[var3];
            var38 = var35.bind(var4)(var27);
            var36 = var38.useStateFromStores;
            var27 = _closure1_slot16;
            var33 = new Array(1);
            var33[0] = var27;
            var31 = new Array(1);
            var31[0] = var10;
            var27 = function() {
                var3 = _closure1_slot16;
                var2 = var3.getChannelFpInfo;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var94 = var36.bind(var38)(var33, var27, var31);
            var _closure2_slot96 = var94;
            var27 = 76;
            var27 = r126[var27];
            var27 = var67.bind(var4)(var27);
            var62 = var27.bind(var4)();
            var _closure2_slot97 = var62;
            var27 = 77;
            var27 = r126[var27];
            var27 = var67.bind(var4)(var27);
            var27 = var27.bind(var4)(var9);
            var47 = var27.unloadedContentEntryMessageIds;
            var _closure2_slot98 = var47;
            var39 = var27.unloadableContentEntryMessageIds;
            var _closure2_slot99 = var39;
            var27 = r126[var3];
            var33 = var35.bind(var4)(var27);
            var31 = var33.useStateFromStores;
            var27 = new Array(1);
            var27[0] = var15;
            var15 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var2 = _closure1_slot50;
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
            var55 = var31.bind(var33)(var27, var15);
            var _closure2_slot100 = var55;
            var15 = r126[var3];
            var33 = var35.bind(var4)(var15);
            var31 = var33.useStateFromStores;
            var15 = _closure1_slot18;
            var27 = new Array(1);
            var27[0] = var15;
            var15 = function() {
                var2 = _closure1_slot18;
                var1 = var2.getVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var81 = var31.bind(var33)(var27, var15);
            var _closure2_slot101 = var81;
            var15 = 78;
            var15 = r126[var15];
            var31 = var35.bind(var4)(var15);
            var27 = var31.useColorStore;
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
            var60 = var27.bind(var31)(var15);
            var _closure2_slot102 = var60;
            var3 = r126[var3];
            var31 = var35.bind(var4)(var3);
            var27 = var31.useStateFromStores;
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
            var46 = var27.bind(var31)(var15, var3);
            var _closure2_slot103 = var46;
            var3 = r125.useRef;
            var27 = var3.bind(r125)(var5);
            var _closure2_slot104 = var27;
            var3 = r126[r128];
            var15 = var35.bind(var4)(var3);
            var3 = var15.useScrollState;
            var3 = var3.bind(var15)();
            var3 = var19.bind(var4)(var3, var30);
            var31 = var3[var13];
            var _closure2_slot105 = var31;
            var15 = var3[var7];
            var _closure2_slot106 = var15;
            var3 = r125.useState;
            var3 = var3.bind(r125)(var5);
            var3 = var19.bind(var4)(var3, var30);
            var30 = var3[var13];
            var _closure2_slot107 = var30;
            var3 = var3[var7];
            var _closure2_slot108 = var3;
            var7 = r126[r128];
            var13 = var35.bind(var4)(var7);
            var7 = var13.useMessagesState;
            var7 = var7.bind(var13)();
            var51 = var7.shouldForceRender;
            var _closure2_slot109 = var51;
            var38 = var7.hasJumpedToOriginalPost;
            var _closure2_slot110 = var38;
            var33 = var7.setHasJumpedToOriginalPost;
            var _closure2_slot111 = var33;
            var64 = var7.setShouldForceRender;
            var _closure2_slot112 = var64;
            var19 = r125.useMemo;
            var13 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 79;
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
            var7 = var19.bind(r125)(var13, var7);
            var _closure2_slot113 = var7;
            var36 = r125.useMemo;
            var19 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 80;
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
            var19 = var36.bind(r125)(var19, var13);
            var _closure2_slot114 = var19;
            var13 = r125.useRef;
            var13 = var13.bind(r125)(var34);
            var _closure2_slot115 = var13;
            var36 = r125.useRef;
            var13 = 81;
            var13 = r126[var13];
            var13 = var67.bind(var4)(var13);
            var44 = var13.prototype;
            var44 = Object.create(var44, {constructor: {value: var13}});
            r135 = var44;
            r134 = r129;
            var13 = new r135[var13](r134, r133);
            var13 = var13 instanceof Object ? var13 : var44;
            var13 = var36.bind(r125)(var13);
            var _closure2_slot116 = var13;
            var13 = r125.useRef;
            var13 = var13.bind(r125)(var34);
            var _closure2_slot117 = var13;
            var36 = r125.useCallback;
            var34 = function(arg1) {
                var2 = arg1;
                var11 = var2.rows;
                var3 = var2.hasMoreMessagesAfter;
                var9 = var2.scrollData;
                var8 = var2.HACK_iOSForceAnimations;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 82;
                var5 = var6[var1];
                var1 = undefined;
                var12 = var7.bind(var1)(var5);
                var10 = var12.isLoadingAtTop;
                var7 = var2.rows;
                var5 = _closure2_slot117;
                var5 = var5.current;
                var10 = var10.bind(var12)(var7, var5);
                var5 = _closure1_slot1;
                var4 = 83;
                var4 = var6[var4];
                var7 = var5.bind(var1)(var4);
                var6 = var7.updateRows;
                var4 = _closure2_slot104;
                var5 = var4.current;
                var4 = {};
                var4['rows'] = var11;
                var4['isLoadingAtTop'] = var10;
                var4['scrollData'] = var9;
                var4['HACK_iOSForceAnimations'] = var8;
                var4 = var6.bind(var7)(var5, var4);
                var2 = _closure2_slot117;
                var2['current'] = var3;
                return var1;
            };
            var13 = new Array(0);
            var34 = var36.bind(r125)(var34, var13);
            var _closure2_slot118 = var34;
            var13 = r126[r128];
            var35 = var35.bind(var4)(var13);
            var13 = var35.useChatUpdatesQueue;
            var13 = var13.bind(var35)(var27, var34);
            var _closure2_slot119 = var13;
            var36 = r125.useCallback;
            var35 = new Array(4);
            var35[0] = var13;
            var35[1] = var34;
            var34 = var31.decelerating;
            var35[2] = var34;
            var34 = var31.dragging;
            var35[3] = var34;
            var34 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot119;
                    var2 = var2.isBlocking;
                    if(var2) { _fun0020_ip = 38; continue _fun0020 }
case 81:
                    var2 = var3.isLoadingAtTop;
                    if(!var2) { _fun0020_ip = 45; continue _fun0020 }
case 34:
                    var2 = _closure2_slot105;
                    var2 = var2.decelerating;
                    if(var2) { _fun0020_ip = 30; continue _fun0020 }
case 88:
                    var2 = _closure2_slot105;
                    var2 = var2.dragging;
                    if(var2) { _fun0020_ip = 30; continue _fun0020 }
case 45:
                    var4 = _closure2_slot118;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0020_ip = 89; continue _fun0020;
case 30:
                    var4 = _closure2_slot119;
                    var2 = var4.add;
                    var2 = var2.bind(var4)(var3);
                    _fun0020_ip = 89; continue _fun0020;
case 38:
                    var2 = _closure2_slot119;
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var3);
case 89:
                    var1 = undefined;
                    return var1;
                }
            };
            var36 = var36.bind(r125)(var34, var35);
            var _closure2_slot120 = var36;
            var35 = r125.useCallback;
            var34 = new Array(26);
            var34[0] = var8;
            var34[1] = var9;
            var34[2] = r124;
            var34[3] = var58;
            var34[4] = var57;
            var34[5] = var54;
            var34[6] = var53;
            var34[7] = var20;
            var34[8] = var30;
            var34[9] = var62;
            var34[10] = var61;
            var34[11] = var72;
            var34[12] = var45;
            var34[13] = var50;
            var34[14] = r113;
            var34[15] = var65;
            var34[16] = var37;
            var34[17] = var68;
            var34[18] = var71;
            var34[19] = var40;
            var34[20] = var52;
            var34[21] = var24;
            var34[22] = var22;
            var34[23] = var39;
            var34[24] = var7;
            var34[25] = var19;
            var19 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
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
                    if(!var5) { _fun0021_ip = 55; continue _fun0021 }
case 90:
                    var5 = _closure2_slot6;
                    var5 = var4 != var5;
                    var1 = null;
                    if(!var5) { _fun0021_ip = 55; continue _fun0021 }
case 91:
                    var3 = _closure2_slot68;
                    var1 = null;
                    if(!var3) { _fun0021_ip = 55; continue _fun0021 }
case 92:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 84;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var4 = var3.firstRowGenerator;
                    var3 = var4.measure;
                    var2 = function() {
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                            var4 = _closure2_slot113;
                            var3 = var4.setup;
                            var2 = _closure2_slot6;
                            var2 = var3.bind(var4)(var2);
                            var4 = _closure2_slot114;
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
                            var5 = _closure2_slot107;
                            var2['animatingStickerMessageId'] = var5;
                            var5 = _closure2_slot97;
                            var2['constrainedWidth'] = var5;
                            var5 = _closure2_slot18;
                            var2['gifAutoPlay'] = var5;
                            var5 = _closure2_slot75;
                            var2['renderCommunicationDisabled'] = var5;
                            var5 = _closure3_slot2;
                            var2['ignoreEmbedDescriptionCache'] = var5;
                            var5 = _closure2_slot20;
                            var2['enableSwipeActions'] = var5;
                            var5 = _closure2_slot90;
                            var2['shouldObscureSpoiler'] = var5;
                            var5 = _closure2_slot92;
                            var2['shouldDisableInteractiveComponents'] = var5;
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure1_slot63;
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 85;
                            var2 = var5[var2];
                            var5 = undefined;
                            var4 = var4.bind(var5)(var2);
                            var2 = {};
                            var8 = _closure2_slot1;
                            var2['channel'] = var8;
                            var8 = _closure2_slot6;
                            var2['messages'] = var8;
                            var9 = _closure2_slot55;
                            var8 = null;
                            if(!(var8 == var9)) { _fun0022_ip = 93; continue _fun0022 }
case 94:
                            var8 = new Array(0);
                            _fun0022_ip = 95; continue _fun0022;
case 93:
                            var8 = _closure2_slot55;
case 95:
                            var2['uploads'] = var8;
                            var8 = _closure2_slot45;
                            var2['oldestUnreadMessageId'] = var8;
                            var8 = _closure2_slot44;
                            var2['replyingMessageId'] = var8;
                            var8 = _closure2_slot11;
                            var2['currentUserId'] = var8;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 82;
                            var7 = var9[var7];
                            var10 = var8.bind(var5)(var7);
                            var9 = var10.canAddNewReactions;
                            var8 = _closure2_slot1;
                            var7 = _closure2_slot46;
                            var7 = var9.bind(var10)(var8, var7);
                            var2['canAddNewReactions'] = var7;
                            var7 = _closure2_slot86;
                            var2['selectedSummary'] = var7;
                            var7 = _closure2_slot113;
                            var2['chatManager'] = var7;
                            var7 = _closure2_slot58;
                            var2['roleStyle'] = var7;
                            var7 = _closure3_slot0;
                            var2['forceRender'] = var7;
                            var6 = _closure3_slot1;
                            var2['updateMessageIds'] = var6;
                            var6 = _closure2_slot4;
                            var2['isResourceChannel'] = var6;
                            var6 = _closure2_slot99;
                            var2['unloadableContentEntryMessageIds'] = var6;
                            var2 = var4.bind(var5)(var2);
                            var4 = var3.bind(var5)(var2);
                            var3 = var4.bind(var5)();
                            var2 = var3.done;
                            if(var2) { _fun0022_ip = 96; continue _fun0022 }
case 97:
                            var7 = var3.value;
                            var6 = _closure2_slot114;
                            var2 = var6.generate;
                            var7 = var2.bind(var6)(var7);
                            var6 = _closure2_slot113;
                            var2 = var6.createRow;
                            var2 = var2.bind(var6)(var7);
                            var6 = var4.bind(var5)();
                            var2 = var6.done;
                            var3 = var6;
                            if(!var2) { _fun0022_ip = 97; continue _fun0022 }
case 96:
                            var2 = _closure2_slot113;
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
            var40 = var35.bind(r125)(var19, var34);
            var _closure2_slot121 = var40;
            var35 = r125.useCallback;
            var34 = new Array(1);
            var34[0] = var7;
            var19 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 82;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.findMessageIndexInRows;
                var2 = _closure2_slot113;
                var1 = var2.getPreviousRows;
                var2 = var1.bind(var2)();
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var19 = var35.bind(r125)(var19, var34);
            var _closure2_slot122 = var19;
            var39 = r125.useCallback;
            var35 = new Array(2);
            var35[0] = var32;
            var35[1] = var19;
            var34 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var3 = arg1;
                    var10 = var3.scrollToMessageId;
                    var _closure3_slot0 = var10;
                    var9 = var3.jumpTargetId;
                    var1 = undefined;
                    if(!(var9 === var1)) { _fun0023_ip = 98; continue _fun0023 }
case 69:
                    var9 = null;
case 98:
                    var _closure3_slot1 = var9;
                    var11 = var3.jumpType;
                    if(!(var11 === var1)) { _fun0023_ip = 99; continue _fun0023 }
case 100:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 86;
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.JumpTypes;
                    var11 = var4.ANIMATED;
case 99:
                    var8 = var3.scrollPosition;
                    if(!(var8 === var1)) { _fun0023_ip = 101; continue _fun0023 }
case 102:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 83;
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.ChatScrollPosition;
                    var8 = var4.TOP;
case 101:
                    var5 = var3.minimizeScrolling;
                    if(!(var5 === var1)) { _fun0023_ip = 103; continue _fun0023 }
case 48:
                    var5 = false;
case 103:
                    var6 = var3.isRescrolling;
                    if(!(var6 === var1)) { _fun0023_ip = 104; continue _fun0023 }
case 105:
                    var6 = false;
case 104:
                    var _closure3_slot2 = var1;
                    var _closure3_slot3 = var1;
                    var4 = _closure2_slot57;
                    if(var4) { _fun0023_ip = 106; continue _fun0023 }
case 107:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 86;
                    var7 = var13[var7];
                    var7 = var12.bind(var1)(var7);
                    var7 = var7.JumpTypes;
                    var7 = var7.INSTANT;
                    var4 = var11 === var7;
case 106:
                    var11 = !var4;
                    _closure3_slot2 = var11;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 87;
                    var7 = var13[var7];
                    var12 = var12.bind(var1)(var7);
                    var7 = var12.isIOS;
                    var7 = var7.bind(var12)();
                    if(!var7) { _fun0023_ip = 108; continue _fun0023 }
case 23:
                    if(var6) { _fun0023_ip = 108; continue _fun0023 }
case 109:
                    var6 = _closure2_slot122;
                    var14 = var6.bind(var1)(var10);
                    var6 = null;
                    if(!(var6 != var14)) { _fun0023_ip = 110; continue _fun0023 }
case 111:
                    var7 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var6 = 83;
                    var6 = var12[var6];
                    var13 = var7.bind(var1)(var6);
                    var12 = var13.scrollTo;
                    var6 = _closure2_slot104;
                    var7 = var6.current;
                    var6 = {};
                    var6['animated'] = var11;
                    var15 = var9 === var10;
                    var6['highlight'] = var15;
                    var6['position'] = var8;
                    var6 = var12.bind(var13)(var7, var14, var6);
                    _fun0023_ip = 110; continue _fun0023;
case 108:
                    var6 = _closure2_slot122;
                    var7 = var6.bind(var1)(var10);
                    _closure3_slot3 = var7;
                    var6 = null;
                    if(!(var6 != var7)) { _fun0023_ip = 110; continue _fun0023 }
case 112:
                    if(var5) { _fun0023_ip = 113; continue _fun0023 }
case 114:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 83;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.scrollTo;
                    var3 = _closure2_slot104;
                    var4 = var3.current;
                    var3 = {};
                    var3['animated'] = var11;
                    var9 = var9 === var10;
                    var3['highlight'] = var9;
                    var3['position'] = var8;
                    var3 = var5.bind(var6)(var4, var7, var3);
                    _fun0023_ip = 110; continue _fun0023;
case 113:
                    var3 = global;
                    var4 = var3.setTimeout;
                    var3 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 83;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.scrollIntoView;
                        var2 = _closure2_slot104;
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
case 110:
                    return var1;
                }
            };
            var39 = var39.bind(r125)(var34, var35);
            var _closure2_slot123 = var39;
            var35 = r125.useCallback;
            var34 = new Array(14);
            var34[0] = var40;
            var40 = var31.animated;
            var34[1] = var40;
            var34[2] = var13;
            var34[3] = var36;
            var34[4] = var19;
            var34[5] = var38;
            var34[6] = var39;
            var34[7] = var8;
            var34[8] = var10;
            var34[9] = var9;
            var34[10] = var41;
            var34[11] = var52;
            var34[12] = var22;
            var34[13] = var7;
            var22 = function() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var3 = arguments[0];
                    var1 = undefined;
                    if(!(var3 === var1)) { _fun0024_ip = 115; continue _fun0024 }
case 116:
                    var3 = {};
case 115:
                    var12 = var3.forceRender;
                    if(!(var12 === var1)) { _fun0024_ip = 117; continue _fun0024 }
case 31:
                    var12 = false;
case 117:
                    var10 = var3.updateMessageIds;
                    if(!(var10 === var1)) { _fun0024_ip = 86; continue _fun0024 }
case 118:
                    var4 = global;
                    var4 = var4.Set;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {constructor: {value: var4}});
                    var27 = var5;
                    var4 = new var27[var4](var26);
                    var10 = var4 instanceof Object ? var4 : var5;
case 86:
                    var16 = var3.scrollToMessageId;
                    if(!(var16 === var1)) { _fun0024_ip = 92; continue _fun0024 }
case 119:
                    var16 = null;
case 92:
                    var15 = var3.jumpTargetId;
                    if(!(var15 === var1)) { _fun0024_ip = 41; continue _fun0024 }
case 120:
                    var15 = null;
case 41:
                    var18 = var3.jumpType;
                    if(!(var18 === var1)) { _fun0024_ip = 121; continue _fun0024 }
case 89:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 86;
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.JumpTypes;
                    var18 = var4.ANIMATED;
case 121:
                    var8 = var3.focusTargetId;
                    if(!(var8 === var1)) { _fun0024_ip = 40; continue _fun0024 }
case 122:
                    var8 = null;
case 40:
                    var6 = var3.ignoreEmbedDescriptionCache;
                    if(!(var6 === var1)) { _fun0024_ip = 123; continue _fun0024 }
case 124:
                    var6 = false;
case 123:
                    var7 = var3.messagesNewlyLoaded;
                    if(!(var7 === var1)) { _fun0024_ip = 125; continue _fun0024 }
case 126:
                    var7 = false;
case 125:
                    var13 = var3.shouldInitialScroll;
                    if(!(var13 === var1)) { _fun0024_ip = 127; continue _fun0024 }
case 128:
                    var13 = false;
case 127:
                    var17 = var3.minimizeScrolling;
                    if(!(var17 === var1)) { _fun0024_ip = 129; continue _fun0024 }
case 130:
                    var17 = false;
case 129:
                    var9 = var3.isRescrolling;
                    if(!(var9 === var1)) { _fun0024_ip = 106; continue _fun0024 }
case 131:
                    var9 = false;
case 106:
                    var11 = var3.overrideScrollJumpType;
                    var3 = _closure2_slot104;
                    var3 = var3.current;
                    var14 = null;
                    if(!(var14 != var3)) { _fun0024_ip = 132; continue _fun0024 }
case 133:
                    var5 = _closure2_slot121;
                    var3 = {};
                    var3['forceRender'] = var12;
                    var3['updateMessageIds'] = var10;
                    var3['ignoreEmbedDescriptionCache'] = var6;
                    var12 = var5.bind(var1)(var3);
                    var3 = _closure2_slot115;
                    var6 = var3.current;
                    var3 = _closure2_slot86;
                    var3 = var14 != var3;
                    var10 = undefined;
                    if(!var3) { _fun0024_ip = 26; continue _fun0024 }
case 134:
                    var3 = _closure2_slot86;
                    var3 = var3.startId;
                    var10 = undefined;
                    if(!(var3 === var16)) { _fun0024_ip = 26; continue _fun0024 }
case 135:
                    var5 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var3 = 83;
                    var3 = var19[var3];
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.ChatScrollPosition;
                    var10 = var3.MIDDLE;
case 26:
                    if(!(var14 != var12)) { _fun0024_ip = 136; continue _fun0024 }
case 137:
                    var5 = var12.length;
                    var3 = 0;
                    if(!(!(var5 > var3))) { _fun0024_ip = 138; continue _fun0024 }
case 136:
                    var3 = _closure2_slot115;
                    var3 = var3.current;
                    if(!var3) { _fun0024_ip = 139; continue _fun0024 }
case 140:
                    var5 = _closure2_slot119;
                    var3 = var5.hasUpdates;
                    var3 = var3.bind(var5)();
                    if(var3) { _fun0024_ip = 141; continue _fun0024 }
case 139:
                    var3 = _closure2_slot115;
                    var3 = var3.current;
                    if(var3) { _fun0024_ip = 142; continue _fun0024 }
case 143:
                    if(!(var14 != var12)) { _fun0024_ip = 142; continue _fun0024 }
case 144:
                    var5 = var12.length;
                    var3 = 0;
                    if(!(var3 === var5)) { _fun0024_ip = 142; continue _fun0024 }
case 145:
                    var5 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var3 = 83;
                    var3 = var19[var3];
                    var19 = var5.bind(var1)(var3);
                    var5 = var19.fadeIn;
                    var3 = _closure2_slot104;
                    var3 = var3.current;
                    var3 = var5.bind(var19)(var3);
                    _fun0024_ip = 146; continue _fun0024;
case 142:
                    if(!(var14 != var16)) { _fun0024_ip = 147; continue _fun0024 }
case 148:
                    var5 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var3 = 82;
                    var3 = var19[var3];
                    var22 = var5.bind(var1)(var3);
                    var21 = var22.shouldJumpToOriginalPost;
                    var26 = _closure2_slot1;
                    var25 = _closure2_slot7;
                    var24 = _closure2_slot6;
                    var23 = _closure2_slot110;
                    var27 = var22;
                    var3 = var27[var21](var26, var25, var24, var23, var22);
                    if(var3) { _fun0024_ip = 147; continue _fun0024 }
case 149:
                    var5 = _closure2_slot123;
                    var3 = {};
                    var3['scrollToMessageId'] = var16;
                    var3['jumpTargetId'] = var15;
                    var3['jumpType'] = var18;
                    var3['scrollPosition'] = var10;
                    var3['minimizeScrolling'] = var17;
                    var3['isRescrolling'] = var9;
                    var3 = var5.bind(var1)(var3);
                    _fun0024_ip = 146; continue _fun0024;
case 147:
                    if(!(var14 != var8)) { _fun0024_ip = 146; continue _fun0024 }
case 150:
                    var3 = _closure2_slot122;
                    var17 = var3.bind(var1)(var8);
                    if(!(var14 != var17)) { _fun0024_ip = 146; continue _fun0024 }
case 151:
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 83;
                    var3 = var9[var3];
                    var9 = var5.bind(var1)(var3);
                    var5 = var9.focus;
                    var3 = _closure2_slot104;
                    var3 = var3.current;
                    var3 = var5.bind(var9)(var3, var17);
                    _fun0024_ip = 146; continue _fun0024;
case 141:
                    var5 = _closure2_slot119;
                    var3 = var5.tryFlush;
                    var3 = var3.bind(var5)();
                    _fun0024_ip = 146; continue _fun0024;
case 138:
                    var5 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var3 = 88;
                    var3 = var17[var3];
                    var5 = var5.bind(var1)(var3);
                    var3 = {};
                    var18 = _closure2_slot113;
                    var17 = var18.getPreviousRows;
                    var17 = var17.bind(var18)();
                    var3['rows'] = var17;
                    var3['scrollToMessageId'] = var16;
                    var3['jumpTargetId'] = var15;
                    if(!(var14 == var11)) { _fun0024_ip = 152; continue _fun0024 }
case 153:
                    var14 = _closure2_slot6;
                    var11 = var14.jumpType;
case 152:
                    var3['jumpType'] = var11;
                    var11 = _closure2_slot115;
                    var11 = var11.current;
                    var11 = !var11;
                    if(var11) { _fun0024_ip = 154; continue _fun0024 }
case 155:
                    var11 = var13;
case 154:
                    var3['shouldInitialScroll'] = var11;
                    var11 = _closure2_slot105;
                    var11 = var11.animated;
                    var3['animated'] = var11;
                    var3['scrollPosition'] = var10;
                    var3['focusTargetId'] = var8;
                    var8 = function onComputedScrollToUnread() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 89;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.trackMentionsOnInitialUnreadChannelScroll;
                        var3 = _closure2_slot1;
                        var2 = _closure2_slot6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var3['onComputedScrollToUnread'] = var8;
                    var8 = var5.bind(var1)(var3);
                    var5 = _closure2_slot115;
                    var3 = true;
                    var5['current'] = var3;
                    var5 = _closure2_slot120;
                    var3 = {};
                    var3['rows'] = var12;
                    var10 = _closure2_slot6;
                    var10 = var10.hasMoreAfter;
                    var3['hasMoreMessagesAfter'] = var10;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 82;
                    var9 = var11[var9];
                    var11 = var10.bind(var1)(var9);
                    var10 = var11.isLoadingAtTop;
                    var9 = _closure2_slot117;
                    var9 = var9.current;
                    var9 = var10.bind(var11)(var12, var9);
                    var3['isLoadingAtTop'] = var9;
                    var3['scrollData'] = var8;
                    var3['HACK_iOSForceAnimations'] = var7;
                    var3 = var5.bind(var1)(var3);
                    if(var6) { _fun0024_ip = 146; continue _fun0024 }
case 156:
                    var3 = _closure2_slot116;
                    var7 = var3.current;
                    var5 = var7.finish;
                    var3 = {};
                    var8 = _closure2_slot7;
                    var3['channelId'] = var8;
                    var8 = _closure2_slot69;
                    var3['areMessagesCached'] = var8;
                    var3 = var5.bind(var7)(var3);
case 146:
                    var3 = _closure2_slot115;
                    var3 = var3.current;
                    if(!var3) { _fun0024_ip = 157; continue _fun0024 }
case 158:
                    var5 = _closure2_slot115;
                    var5 = var5.current;
                    var3 = var5 !== var6;
case 157:
                    if(!var3) { _fun0024_ip = 159; continue _fun0024 }
case 160:
                    var3 = _closure2_slot4;
case 159:
                    if(!var3) { _fun0024_ip = 132; continue _fun0024 }
case 161:
                    var3 = global;
                    var4 = var3.setTimeout;
                    var3 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 82;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.scrollToTopMessage;
                        var2 = _closure2_slot104;
                        var1 = _closure2_slot113;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var2 = 100;
                    var2 = var4.bind(var1)(var3, var2);
case 132:
                    return var1;
                }
            };
            var22 = var35.bind(r125)(var22, var34);
            var _closure2_slot124 = var22;
            var36 = r125.useCallback;
            var35 = new Array(2);
            var35[0] = var19;
            var35[1] = var22;
            var34 = function(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var6 = arguments[1];
                    var2 = arguments[2];
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0025_ip = 32; continue _fun0025 }
case 79:
                    var6 = false;
case 32:
                    if(!(var2 === var1)) { _fun0025_ip = 90; continue _fun0025 }
case 162:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 86;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.JumpTypes;
                    var2 = var3.INSTANT;
case 90:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 82;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.maybeRescrollToMessageId;
                    var3 = {};
                    var8 = _closure2_slot104;
                    var3['chatRef'] = var8;
                    var8 = _closure2_slot122;
                    var3['findMessageIndex'] = var8;
                    var7 = _closure2_slot124;
                    var3['updateRows'] = var7;
                    var3['updateRowsEnabled'] = var6;
                    var3['jumpType'] = var2;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                }
            };
            var36 = var36.bind(r125)(var34, var35);
            var _closure2_slot125 = var36;
            var40 = r125.useCallback;
            var35 = new Array(5);
            var35[0] = var10;
            var35[1] = var18;
            var35[2] = var15;
            var35[3] = var3;
            var35[4] = var7;
            var34 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 82;
                var2 = var2[var1];
                var1 = undefined;
                var8 = var3.bind(var1)(var2);
                var7 = var8.clearRows;
                var13 = _closure2_slot104;
                var12 = _closure2_slot113;
                var11 = _closure2_slot7;
                var10 = _closure2_slot2;
                var9 = function(arg1) {
                    var4 = _closure2_slot106;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot108;
                    var3 = null;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot115;
                    var2 = false;
                    var3['current'] = var2;
                    return var1;
                };
                var14 = var8;
                var2 = var14[var7](var13, var12, var11, var10, var9, var8);
                return var1;
            };
            var35 = var40.bind(r125)(var34, var35);
            var _closure2_slot126 = var35;
            var44 = r125.useCallback;
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
                var1 = 82;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVisibleMessages;
                var1 = {};
                var1['firstVisibleMessageRowIndex'] = var7;
                var1['lastVisibleMessageRowIndex'] = var6;
                var1['firstVisibleMessagePercentVisible'] = var5;
                var1['lastVisibleMessagePercentVisible'] = var4;
                var5 = _closure2_slot113;
                var1['chatManager'] = var5;
                var4 = _closure2_slot7;
                var1['channelId'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var34 = var44.bind(r125)(var34, var40);
            var _closure2_slot127 = var34;
            var44 = r125.useCallback;
            var40 = new Array(6);
            var40[0] = var10;
            var40[1] = var14;
            var40[2] = var9;
            var40[3] = var65;
            var40[4] = var17;
            var40[5] = var15;
            var17 = function() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var1 = {};
                    var3 = function getMessage(arg1) {
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
                            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                                var1 = arg1;
                                var4 = var1.id;
                                var3 = var1.nonce;
                                var1 = _closure4_slot0;
                                var1 = var4 === var1;
                                if(var1) { _fun0027_ip = 52; continue _fun0027 }
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
                    var3 = _closure2_slot55;
                    var5 = null;
                    if(!(var5 == var3)) { _fun0026_ip = 163; continue _fun0026 }
case 164:
                    var3 = new Array(0);
                    _fun0026_ip = 73; continue _fun0026;
case 163:
                    var3 = _closure2_slot55;
case 73:
                    var1['uploads'] = var3;
                    var3 = _closure2_slot78;
                    var3 = var5 != var3;
                    if(!var3) { _fun0026_ip = 165; continue _fun0026 }
case 102:
                    var3 = _closure2_slot78;
case 165:
                    var1['paymentsBlocked'] = var3;
                    var3 = function loadMoreBefore() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 82;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.loadMoreBefore;
                        var3 = _closure2_slot7;
                        var2 = _closure2_slot6;
                        var1 = function(arg1) {
                            var3 = _closure2_slot106;
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
                    var2 = function loadMoreAfter() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 82;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.loadMoreAfter;
                        var3 = _closure2_slot7;
                        var2 = _closure2_slot6;
                        var1 = function(arg1) {
                            var3 = _closure2_slot106;
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
                    var1['loadMoreAfter'] = var2;
                    return var1;
                }
            };
            var17 = var44.bind(r125)(var17, var40);
            var _closure2_slot128 = var17;
            var44 = r125.useMemo;
            var40 = new Array(1);
            var40[0] = var17;
            var17 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 91;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.MessagesHandlers;
                var4 = _closure2_slot128;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var17 = var44.bind(r125)(var17, var40);
            var _closure2_slot129 = var17;
            var44 = r125.useCallback;
            var40 = new Array(7);
            var40[0] = var66;
            var40[1] = var8;
            var40[2] = var9;
            var40[3] = var13;
            var40[4] = var31;
            var40[5] = var10;
            var40[6] = var15;
            var13 = function(arg1) {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var1 = arg1;
                    var6 = var1.isAtBottom;
                    var10 = var1.isNearBottom;
                    var4 = undefined;
                    if(!(var10 === var4)) { _fun0028_ip = 117; continue _fun0028 }
case 31:
                    var10 = false;
case 117:
                    var12 = var1.isNearTop;
                    if(!(var12 === var4)) { _fun0028_ip = 50; continue _fun0028 }
case 118:
                    var12 = false;
case 50:
                    var13 = var1.dragging;
                    if(!(var13 === var4)) { _fun0028_ip = 5; continue _fun0028 }
case 82:
                    var13 = false;
case 5:
                    var15 = var1.decelerating;
                    if(!(var15 === var4)) { _fun0028_ip = 7; continue _fun0028 }
case 166:
                    var15 = false;
case 7:
                    var5 = var1.isFirstMessageVisible;
                    if(!(var5 === var4)) { _fun0028_ip = 119; continue _fun0028 }
case 167:
                    var5 = false;
case 119:
                    var2 = _closure2_slot0;
                    var3 = var2.onScroll;
                    var7 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var7)) { _fun0028_ip = 168; continue _fun0028 }
case 47:
                    var7 = _closure2_slot6;
                    var7 = var7.length;
                    var11 = 0;
                    if(!(var11 === var7)) { _fun0028_ip = 169; continue _fun0028 }
case 46:
                    var7 = _closure2_slot6;
                    var7 = var7.loadingMore;
                    if(var7) { _fun0028_ip = 168; continue _fun0028 }
case 169:
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
                    if(!var9) { _fun0028_ip = 170; continue _fun0028 }
case 16:
                    if(var13) { _fun0028_ip = 171; continue _fun0028 }
case 172:
                    var13 = var15;
case 171:
                    if(var13) { _fun0028_ip = 173; continue _fun0028 }
case 174:
                    var13 = var14;
case 173:
                    var9 = var13;
case 170:
                    if(!var9) { _fun0028_ip = 175; continue _fun0028 }
case 176:
                    var14 = _closure2_slot119;
                    var13 = var14.hasUpdates;
                    var13 = var13.bind(var14)();
                    var9 = !var13;
case 175:
                    var13 = _closure2_slot105;
                    var13 = var13.isNearTop;
                    if(var13) { _fun0028_ip = 177; continue _fun0028 }
case 95:
                    if(!var12) { _fun0028_ip = 177; continue _fun0028 }
case 178:
                    var12 = _closure2_slot6;
                    var12 = var12.hasMoreBefore;
                    if(!var12) { _fun0028_ip = 177; continue _fun0028 }
case 179:
                    if(!var9) { _fun0028_ip = 177; continue _fun0028 }
case 180:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var12 = 82;
                    var12 = var14[var12];
                    var16 = var13.bind(var4)(var12);
                    var15 = var16.loadMoreBefore;
                    var14 = _closure2_slot7;
                    var13 = _closure2_slot6;
                    var12 = function(arg1) {
                        var3 = _closure2_slot106;
                        var2 = {};
                        var1 = arg1;
                        var2['animated'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var12 = var15.bind(var16)(var14, var13, var12);
                    _fun0028_ip = 181; continue _fun0028;
case 177:
                    var12 = _closure2_slot105;
                    var12 = var12.isNearBottom;
                    if(var12) { _fun0028_ip = 182; continue _fun0028 }
case 183:
                    if(!var10) { _fun0028_ip = 182; continue _fun0028 }
case 184:
                    var10 = _closure2_slot6;
                    var10 = var10.hasMoreAfter;
                    if(!var10) { _fun0028_ip = 182; continue _fun0028 }
case 185:
                    if(!var9) { _fun0028_ip = 182; continue _fun0028 }
case 186:
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 82;
                    var9 = var12[var9];
                    var13 = var10.bind(var4)(var9);
                    var12 = var13.loadMoreAfter;
                    var10 = _closure2_slot7;
                    var9 = _closure2_slot6;
                    var8 = function(arg1) {
                        var3 = _closure2_slot106;
                        var2 = {};
                        var1 = arg1;
                        var2['animated'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8 = var12.bind(var13)(var10, var9, var8);
                    _fun0028_ip = 181; continue _fun0028;
case 182:
                    var8 = _closure2_slot105;
                    var8 = var8.isAtBottom;
                    var8 = var8 === var6;
                    if(!var8) { _fun0028_ip = 187; continue _fun0028 }
case 188:
                    var9 = _closure2_slot105;
                    var8 = var9.hasHandledScroll;
case 187:
                    if(var8) { _fun0028_ip = 181; continue _fun0028 }
case 189:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 70;
                    var7 = var9[var7];
                    var10 = var8.bind(var4)(var7);
                    var9 = var10.updateChannelDimensions;
                    var7 = _closure2_slot1;
                    var8 = var7.id;
                    var7 = 0;
                    if(!var6) { _fun0028_ip = 190; continue _fun0028 }
case 191:
                    var7 = 1;
case 190:
                    var18 = 1;
                    var21 = var10;
                    var20 = var8;
                    var19 = var7;
                    var17 = 0;
                    var6 = var21[var9](var20, var19, var18, var17, var16);
                    var7 = _closure2_slot106;
                    var6 = {};
                    var8 = true;
                    var6['hasHandledScroll'] = var8;
                    var6 = var7.bind(var4)(var6);
case 181:
                    if(!(var2 != var3)) { _fun0028_ip = 192; continue _fun0028 }
case 193:
                    var2 = {};
                    var2['isFirstMessageVisible'] = var5;
                    var2 = var3.bind(var4)(var2);
case 192:
                    var2 = _closure2_slot119;
                    var1 = var2.tryFlush;
                    var1 = var1.bind(var2)();
                    var1 = true;
                    return var1;
case 168:
                    var1 = false;
                    return var1;
                }
            };
            var13 = var44.bind(r125)(var13, var40);
            var _closure2_slot130 = var13;
            var44 = r125.useCallback;
            var40 = new Array(13);
            var40[0] = var27;
            var40[1] = var10;
            var40[2] = var29;
            var40[3] = var28;
            var40[4] = var12;
            var40[5] = var8;
            var40[6] = var9;
            var40[7] = var15;
            var40[8] = var55;
            var40[9] = var18;
            var40[10] = var23;
            var40[11] = var7;
            var40[12] = var13;
            var23 = function(arg1) {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
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
                    var13 = _closure2_slot104;
                    var13 = var13.current;
                    var19 = var14.bind(var16)(var13);
                    if(!(var20 !== var19)) { _fun0029_ip = 127; continue _fun0029 }
case 48:
                    var13 = _closure2_slot100;
                    if(!var13) { _fun0029_ip = 194; continue _fun0029 }
case 195:
                    var17 = _closure1_slot62;
                    var16 = var17.log;
                    var23 = _closure2_slot7;
                    var24 = 'STAFF-ACK-LOG: Ignoring outdated scroll event.';
                    var25 = var17;
                    var22 = var20;
                    var21 = var19;
                    var13 = var25[var16](var24, var23, var22, var21, var20);
                    _fun0029_ip = 194; continue _fun0029;
case 127:
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var3 = 82;
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
                    var15 = _closure2_slot113;
                    var3['chatManager'] = var15;
                    var15 = _closure2_slot88;
                    var3['shouldTrackAnnouncementMessageViews'] = var15;
                    var15 = _closure2_slot89;
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
                        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                            var3 = arg1;
                            var9 = var3.isAtBottom;
                            var8 = var3.isNearBottom;
                            var1 = undefined;
                            if(!(var8 === var1)) { _fun0030_ip = 117; continue _fun0030 }
case 31:
                            var8 = false;
case 117:
                            var7 = var3.isNearTop;
                            if(!(var7 === var1)) { _fun0030_ip = 50; continue _fun0030 }
case 118:
                            var7 = false;
case 50:
                            var6 = var3.dragging;
                            if(!(var6 === var1)) { _fun0030_ip = 5; continue _fun0030 }
case 82:
                            var6 = false;
case 5:
                            var5 = var3.decelerating;
                            if(!(var5 === var1)) { _fun0030_ip = 7; continue _fun0030 }
case 166:
                            var5 = false;
case 7:
                            var4 = var3.shouldShowJumpToPresent;
                            if(!(var4 === var1)) { _fun0030_ip = 119; continue _fun0030 }
case 167:
                            var4 = false;
case 119:
                            var _closure4_slot0 = var4;
                            var11 = var3.isFirstMessageVisible;
                            if(!(var11 === var1)) { _fun0030_ip = 196; continue _fun0030 }
case 41:
                            var11 = false;
case 196:
                            var10 = _closure2_slot130;
                            var4 = {};
                            var4['isAtBottom'] = var9;
                            var4['isNearBottom'] = var8;
                            var4['isNearTop'] = var7;
                            var4['dragging'] = var6;
                            var4['decelerating'] = var5;
                            var4['isFirstMessageVisible'] = var11;
                            var4 = var10.bind(var1)(var4);
                            if(!var4) { _fun0030_ip = 197; continue _fun0030 }
case 198:
                            var4 = _closure2_slot106;
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
                                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                                    var5 = _closure1_slot13;
                                    var4 = _closure2_slot7;
                                    var3 = _closure2_slot2;
                                    var2 = _closure4_slot0;
                                    if(var2) { _fun0031_ip = 53; continue _fun0031 }
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
case 197:
                            return var1;
                        }
                    };
                    var2 = var2.bind(var1)(var3);
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0029_ip = 194; continue _fun0029 }
case 199:
                    var4 = _closure2_slot5;
                    var3 = var4.handleScrollPosition;
                    var2 = {};
                    var8 = _closure2_slot113;
                    var7 = var8.getPreviousRows;
                    var7 = var7.bind(var8)();
                    var2['rows'] = var7;
                    var2['firstVisibleMessageRowIndex'] = var6;
                    var2['lastVisibleMessageRowIndex'] = var5;
                    var2 = var3.bind(var4)(var2);
case 194:
                    return var1;
                }
            };
            var23 = var44.bind(r125)(var23, var40);
            var44 = r125.useMemo;
            var40 = new Array(1);
            var40[0] = var17;
            var17 = function() {
                var1 = {};
                var3 = function handleTapImage(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapImage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapImage'] = var3;
                var3 = function handleTapChannel(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapChannel;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapChannel'] = var3;
                var3 = function handleLongPressChannel(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleLongPressChannel;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressChannel'] = var3;
                var3 = function handleTapAttachmentLink(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapAttachmentLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapAttachmentLink'] = var3;
                var3 = function handleLongPressAttachmentLink(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleLongPressAttachmentLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressAttachmentLink'] = var3;
                var3 = function handleTapCall(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapCall;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapCall'] = var3;
                var3 = function handleTapMention(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapMention;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapMention'] = var3;
                var3 = function handleTapCommandMention(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapCommandMention;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapCommandMention'] = var3;
                var3 = function handleLongPressCommandMention(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleLongPressCommandMention;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressCommandMention'] = var3;
                var3 = function handleTapLink(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapLink'] = var3;
                var3 = function handleLongPressLink(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleLongPressLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressLink'] = var3;
                var3 = function handleTapReaction(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapReaction;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapReaction'] = var3;
                var3 = function handleLongPressReaction(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleLongPressReaction;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressReaction'] = var3;
                var3 = function handleOpenSticker(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleOpenSticker;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleOpenSticker'] = var3;
                var3 = function handleTapAvatar(arg1) {
                    var4 = _closure2_slot129;
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
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapUsername;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapUsername'] = var3;
                var3 = function handleLongPressUsername(arg1) {
                    var4 = _closure2_slot129;
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
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapThreadEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapThreadEmbed'] = var3;
                var3 = function handleTapReply(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapReply;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapReply'] = var3;
                var3 = function handleTapSummary(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapSummary;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSummary'] = var3;
                var3 = function handleTapSummaryJump(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapSummaryJump;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSummaryJump'] = var3;
                var3 = function handleLongPressMessage(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleLongPressMessage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressMessage'] = var3;
                var3 = function handleInitiateReply(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleInitiateReply;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleInitiateReply'] = var3;
                var3 = function handleInitiateEdit(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleInitiateEdit;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleInitiateEdit'] = var3;
                var3 = function handleInitiateThread(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleInitiateThread;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleInitiateThread'] = var3;
                var3 = function handleTapMessage(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapMessage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapMessage'] = var3;
                var3 = function handleTapSeparator(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapSeparator;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSeparator'] = var3;
                var3 = function handleDoubleTapMessage(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleDoubleTapMessage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleDoubleTapMessage'] = var3;
                var3 = function handleTapCancelUploadItem(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapCancelUploadItem;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapCancelUploadItem'] = var3;
                var3 = function handleTapInviteEmbedAccept(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapInviteEmbedAccept;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInviteEmbedAccept'] = var3;
                var3 = function handleTapInviteEmbed(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapInviteEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInviteEmbed'] = var3;
                var3 = function handleTapJoinActivity(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapJoinActivity;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapJoinActivity'] = var3;
                var3 = function handleTapJoinRichPresence(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapJoinRichPresence;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapJoinRichPresence'] = var3;
                var3 = function handleTapGiftCodeEmbed(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapGiftCodeEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapGiftCodeEmbed'] = var3;
                var3 = function handleTapGiftCodeAccept(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapGiftCodeAccept;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapGiftCodeAccept'] = var3;
                var3 = function handleTapReferralRedeem(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapReferralRedeem;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapReferralRedeem'] = var3;
                var3 = function handleTapEmoji(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapEmoji;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapEmoji'] = var3;
                var3 = function handleTapTimestamp(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapTimestamp;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapTimestamp'] = var3;
                var3 = function handleTapInlineCode(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapInlineCode;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInlineCode'] = var3;
                var3 = function handleTapRoleIcon(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapRoleIcon;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapRoleIcon'] = var3;
                var3 = function handleTapGameIcon(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapGameIcon;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapGameIcon'] = var3;
                var3 = function handleTapSuppressNotificationsIcon(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapSuppressNotificationsIcon;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSuppressNotificationsIcon'] = var3;
                var3 = function handleTapConnectionsRoleTag(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapConnectionsRoleTag;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapConnectionsRoleTag'] = var3;
                var3 = function handleTapTimeoutIcon() {
                    var2 = _closure2_slot129;
                    var1 = var2.handleTapTimeoutIcon;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['handleTapTimeoutIcon'] = var3;
                var3 = function handleTapButtonActionComponent(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapButtonActionComponent;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapButtonActionComponent'] = var3;
                var3 = function handleTapSelectActionComponent(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapSelectActionComponent;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSelectActionComponent'] = var3;
                var3 = function handleTapWelcomeReply(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapWelcomeReply;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapWelcomeReply'] = var3;
                var3 = function handleTapInviteToSpeak(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapInviteToSpeak;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInviteToSpeak'] = var3;
                var3 = function handleTapAutoModerationActions(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapAutoModerationActions;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapAutoModerationActions'] = var3;
                var3 = function handleTapAutoModerationFeedback(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapAutoModerationFeedback;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapAutoModerationFeedback'] = var3;
                var3 = function handleTapFollowForumPost(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapFollowForumPost;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapFollowForumPost'] = var3;
                var3 = function handleTapShareForumPost(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapShareForumPost;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapShareForumPost'] = var3;
                var3 = function handleTapReactionOverflow(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapReactionOverflow;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapReactionOverflow'] = var3;
                var3 = function handleCopyText(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleCopyText;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleCopyText'] = var3;
                var3 = function handleTapOpTag(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapOpTag;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapOpTag'] = var3;
                var3 = function handleTapTag(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapTag;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapTag'] = var3;
                var3 = function handleMediaAttachmentPlaybackStarted(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleMediaAttachmentPlaybackStarted;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleMediaAttachmentPlaybackStarted'] = var3;
                var3 = function handleMediaAttachmentPlaybackEnded(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleMediaAttachmentPlaybackEnded;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleMediaAttachmentPlaybackEnded'] = var3;
                var3 = function handlerVoiceMessagePlaybackFailed(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleVoiceMessagePlaybackFailed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handlerVoiceMessagePlaybackFailed'] = var3;
                var3 = function handleTapPostPreviewEmbed(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapPostPreviewEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapPostPreviewEmbed'] = var3;
                var3 = function handleTapDismissMediaPostSharePrompt(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapDismissMediaPostSharePrompt;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapDismissMediaPostSharePrompt'] = var3;
                var3 = function handleTapChannelPromptButton(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapChannelPromptButton;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapChannelPromptButton'] = var3;
                var3 = function handleTapObscuredMediaLearnMore(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapObscuredMediaLearnMore;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapObscuredMediaLearnMore'] = var3;
                var3 = function handleTapObscuredMediaToggle(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.onTapObscuredMediaToggle;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapObscuredMediaToggle'] = var3;
                var3 = function handleTapSafetyPolicyNoticeEmbed(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapSafetyPolicyNoticeEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSafetyPolicyNoticeEmbed'] = var3;
                var3 = function handleTapSafetySystemNotificationCta(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapSafetySystemNotificationCta;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSafetySystemNotificationCta'] = var3;
                var3 = function handleTapPollAnswer(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapPollAnswer;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapPollAnswer'] = var3;
                var3 = function handleTapPollSubmitVote(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapPollSubmitVote;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapPollSubmitVote'] = var3;
                var3 = function handleTapPollAction(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapPollAction;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapPollAction'] = var3;
                var3 = function handleLongPressPollImage(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleLongPressPollImage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressPollImage'] = var3;
                var3 = function handleTapCtaButton(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapCtaButton;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapCtaButton'] = var3;
                var3 = function handleMessageAccessibilityAction(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleMessageAccessibilityAction;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleMessageAccessibilityAction'] = var3;
                var3 = function handleTapForwardFooter(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapForwardFooter;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapForwardFooter'] = var3;
                var3 = function handleTapInlineForward(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapInlineForward;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInlineForward'] = var3;
                var3 = function handleTapClanTagChiplet(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapClanTagChiplet;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapClanTagChiplet'] = var3;
                var3 = function handleTapContentInventoryEntryEmbed(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapContentInventoryEntryEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapContentInventoryEntryEmbed'] = var3;
                var3 = function handleTapCheckpointCard(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapCheckpointCard;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapCheckpointCard'] = var3;
                var3 = function handleTapSoundmoji(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapSoundmoji;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSoundmoji'] = var3;
                var3 = function handleTapAppMessageEmbed(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapAppMessageEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapAppMessageEmbed'] = var3;
                var3 = function handleTapSharedClientTheme(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleTapPreviewSharedClientTheme;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSharedClientTheme'] = var3;
                var2 = function handleSharedClientThemeViewed(arg1) {
                    var3 = _closure2_slot129;
                    var2 = var3.handleSharedClientThemeViewed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleSharedClientThemeViewed'] = var2;
                return var1;
            };
            var17 = var44.bind(r125)(var17, var40);
            var66 = r125.useMemo;
            var44 = new Array(82);
            var44[0] = r123;
            var44[1] = r122;
            var44[2] = r119;
            var44[3] = r118;
            var44[4] = r117;
            var44[5] = r114;
            var44[6] = var81;
            var44[7] = r120;
            var44[8] = r102;
            var44[9] = r101;
            var44[10] = r113;
            var44[11] = var70;
            var44[12] = var77;
            var44[13] = var69;
            var44[14] = var80;
            var44[15] = var68;
            var44[16] = var37;
            var44[17] = var75;
            var44[18] = var74;
            var44[19] = var73;
            var44[20] = var78;
            var44[21] = var72;
            var44[22] = var60;
            var44[23] = r104;
            var44[24] = var51;
            var44[25] = var41;
            var44[26] = var58;
            var44[27] = var57;
            var44[28] = var54;
            var44[29] = var53;
            var44[30] = var20;
            var44[31] = var63;
            var44[32] = var61;
            var44[33] = var62;
            var44[34] = var59;
            var44[35] = var82;
            var44[36] = var24;
            var44[37] = var79;
            var44[38] = var83;
            var44[39] = var52;
            var44[40] = var50;
            var44[41] = var94;
            var44[42] = var55;
            var44[43] = var56;
            var44[44] = var49;
            var44[45] = var48;
            var44[46] = var43;
            var44[47] = r110;
            var44[48] = r109;
            var44[49] = r108;
            var44[50] = r107;
            var44[51] = r106;
            var44[52] = var96;
            var44[53] = var99;
            var44[54] = var98;
            var44[55] = var97;
            var44[56] = r105;
            var44[57] = r100;
            var44[58] = var100;
            var44[59] = var88;
            var44[60] = var87;
            var44[61] = var86;
            var44[62] = var95;
            var44[63] = var93;
            var44[64] = var92;
            var44[65] = var91;
            var44[66] = var90;
            var44[67] = var89;
            var44[68] = var76;
            var44[69] = r121;
            var44[70] = r112;
            var44[71] = r111;
            var44[72] = var47;
            var44[73] = r116;
            var44[74] = r115;
            var44[75] = var85;
            var44[76] = var84;
            var44[77] = r103;
            var44[78] = var65;
            var44[79] = var46;
            var44[80] = var45;
            var44[81] = var42;
            var40 = function() {
                var1 = {};
                var3 = _closure2_slot61;
                var1['channelThreadsVersion'] = var3;
                var3 = _closure2_slot71;
                var1['rsvpVersion'] = var3;
                var3 = _closure2_slot73;
                var1['communicationDisabledVersion'] = var3;
                var3 = _closure2_slot74;
                var1['messageAuthorMembers'] = var3;
                var3 = _closure2_slot72;
                var1['failedMessagesVersion'] = var3;
                var3 = _closure2_slot64;
                var1['interactionComponentStatesVersion'] = var3;
                var3 = _closure2_slot101;
                var1['forwardGuildsVersion'] = var3;
                var3 = _closure2_slot65;
                var1['hasLoadedExperiments'] = var3;
                var3 = _closure2_slot79;
                var1['isFollowingForumPost'] = var3;
                var3 = _closure2_slot80;
                var1['showMediaPostSharePrompt'] = var3;
                var3 = _closure2_slot92;
                var1['shouldDisableInteractiveComponents'] = var3;
                var3 = _closure2_slot48;
                var1['isCallActive'] = var3;
                var3 = _closure2_slot49;
                var1['voiceStateChannelId'] = var3;
                var3 = _closure2_slot54;
                var1['participantsLength'] = var3;
                var3 = _closure2_slot43;
                var1['editingMessageId'] = var3;
                var3 = _closure2_slot44;
                var1['replyingMessageId'] = var3;
                var3 = _closure2_slot45;
                var1['oldestUnreadMessageId'] = var3;
                var3 = _closure2_slot66;
                var1['isSpamMessageRequest'] = var3;
                var3 = _closure2_slot67;
                var1['isMessageRequest'] = var3;
                var3 = _closure2_slot76;
                var1['currentUserCommunicationDisabled'] = var3;
                var3 = _closure2_slot83;
                var1['androidKeyboardHeight'] = var3;
                var3 = _closure2_slot75;
                var1['renderCommunicationDisabled'] = var3;
                var3 = _closure2_slot102;
                var1['guildInviteColorsFetched'] = var3;
                var3 = _closure2_slot82;
                var1['lazyCacheStatus'] = var3;
                var3 = _closure2_slot109;
                var1['shouldForceRender'] = var3;
                var3 = _closure2_slot69;
                var1['isMessagesCached'] = var3;
                var3 = _closure2_slot103;
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
                var3 = _closure2_slot97;
                var1['containerWidth'] = var3;
                var3 = _closure2_slot10;
                var1['guildSystemChannelFlags'] = var3;
                var3 = _closure2_slot77;
                var1['userSettingsLocale'] = var3;
                var3 = _closure2_slot58;
                var1['roleStyle'] = var3;
                var3 = _closure2_slot47;
                var1['canSendMessages'] = var3;
                var3 = _closure2_slot81;
                var1['showPushFeedback'] = var3;
                var3 = _closure2_slot86;
                var1['selectedSummary'] = var3;
                var3 = _closure2_slot90;
                var1['shouldObscureSpoiler'] = var3;
                var3 = _closure2_slot96;
                var1['explicitMediaFalsePositiveInfo'] = var3;
                var3 = _closure2_slot100;
                var1['isStaff'] = var3;
                var3 = _closure2_slot91;
                var1['isAgeVerified'] = var3;
                var3 = _closure2_slot19;
                var1['theme'] = var3;
                var3 = _closure2_slot59;
                var1['saturation'] = var3;
                var3 = _closure2_slot60;
                var1['displayNameStylesEnabled'] = var3;
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
                var3 = _closure2_slot40;
                var1['referralTrialOfferIds'] = var3;
                var3 = _closure2_slot21;
                var1['messageAuthorActivities'] = var3;
                var3 = _closure2_slot22;
                var1['activityInviteMessageIds'] = var3;
                var3 = _closure2_slot51;
                var1['resolvingGiftCodes'] = var3;
                var3 = _closure2_slot52;
                var1['resolvedGiftCodes'] = var3;
                var3 = _closure2_slot53;
                var1['acceptingGiftCodes'] = var3;
                var3 = _closure2_slot33;
                var1['mediaPostPreviewEmbeds'] = var3;
                var3 = _closure2_slot34;
                var1['guildTemplates'] = var3;
                var3 = _closure2_slot35;
                var1['buildOverrides'] = var3;
                var3 = _closure2_slot36;
                var1['experimentEmbeds'] = var3;
                var3 = _closure2_slot37;
                var1['quests'] = var3;
                var3 = _closure2_slot38;
                var1['isFetchingCurrentQuests'] = var3;
                var3 = _closure2_slot23;
                var1['invites'] = var3;
                var3 = _closure2_slot56;
                var1['repliedIds'] = var3;
                var3 = _closure2_slot93;
                var1['channelPolls'] = var3;
                var3 = _closure2_slot95;
                var1['messageReferencePolls'] = var3;
                var3 = _closure2_slot98;
                var1['unloadedContentEntryMessageIds'] = var3;
                var3 = _closure2_slot62;
                var1['interactionStates'] = var3;
                var3 = _closure2_slot63;
                var1['interactionComponentStates'] = var3;
                var3 = _closure2_slot41;
                var1['trialOffer'] = var3;
                var3 = _closure2_slot42;
                var1['isPremiumTier2User'] = var3;
                var3 = _closure2_slot50;
                var1['threadStartingReferenceMessage'] = var3;
                var3 = _closure2_slot55;
                var1['uploads'] = var3;
                var2 = _closure2_slot87;
                var1['currentUserDisplayNameStyles'] = var2;
                return var1;
            };
            var44 = var66.bind(r125)(var40, var44);
            var66 = 97;
            var40 = r126[var66];
            var40 = var67.bind(var4)(var40);
            var44 = var40.bind(var4)(var44);
            var _closure2_slot131 = var44;
            var40 = r126[var66];
            var40 = var67.bind(var4)(var40);
            r125 = var40.bind(var4)(var10);
            var _closure2_slot132 = r125;
            var40 = r126[var66];
            var40 = var67.bind(var4)(var40);
            var40 = var40.bind(var4)(r127);
            var _closure2_slot133 = var40;
            var66 = r126[var66];
            var66 = var67.bind(var4)(var66);
            var66 = var66.bind(var4)(var9);
            var _closure2_slot134 = var66;
            var67 = r124;
            if(!var67) { _fun0004_ip = 200; continue _fun0004 }
case 201:
            var67 = !var41;
case 200:
            if(!var67) { _fun0004_ip = 202; continue _fun0004 }
case 203:
            r126 = var5 == var44;
            var41 = undefined;
            if(r126) { _fun0004_ip = 204; continue _fun0004 }
case 205:
            var41 = var44.isMessagesCached;
case 204:
            var67 = var41;
case 202:
            var _closure2_slot135 = var67;
            var41 = _closure1_slot5;
            r129 = var41.useEffect;
            r126 = new Array(7);
            r126[0] = var8;
            r126[1] = var10;
            r126[2] = var38;
            r126[3] = var9;
            r126[4] = var37;
            r126[5] = r125;
            r126[6] = var35;
            r125 = function() {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                    var1 = _closure2_slot132;
                    var3 = null;
                    var2 = var3 != var1;
                    if(!var2) { _fun0032_ip = 34; continue _fun0032 }
case 54:
                    var5 = _closure2_slot132;
                    var1 = _closure2_slot7;
                    var2 = var5 !== var1;
case 34:
                    var1 = _closure2_slot132;
                    var1 = var3 == var1;
                    if(!var2) { _fun0032_ip = 41; continue _fun0032 }
case 78:
                    var3 = _closure2_slot126;
                    var6 = undefined;
                    var3 = var3.bind(var6)();
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 70;
                    var3 = var7[var3];
                    var6 = var5.bind(var6)(var3);
                    var5 = var6.clearChannelDimensions;
                    var3 = _closure2_slot7;
                    var3 = var5.bind(var6)(var3);
case 41:
                    if(var1) { _fun0032_ip = 206; continue _fun0032 }
case 42:
                    var1 = var2;
case 206:
                    if(!var1) { _fun0032_ip = 207; continue _fun0032 }
case 47:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 82;
                    var1 = var8[var5];
                    var6 = undefined;
                    var3 = var7.bind(var6)(var1);
                    var2 = var3.startOrCancelChannelLatestMessagesLoad;
                    var1 = {};
                    var9 = _closure2_slot6;
                    var9 = var9.jumpTargetId;
                    var1['jumpTargetId'] = var9;
                    var9 = _closure2_slot45;
                    var1['oldestUnreadMessageId'] = var9;
                    var5 = var8[var5];
                    var10 = var7.bind(var6)(var5);
                    var9 = var10.shouldJumpToOriginalPost;
                    var14 = _closure2_slot1;
                    var13 = _closure2_slot7;
                    var12 = _closure2_slot6;
                    var11 = _closure2_slot110;
                    var15 = var10;
                    var5 = var15[var9](var14, var13, var12, var11, var10);
                    var1['shouldJumpToOriginalPost'] = var5;
                    var5 = _closure2_slot7;
                    var1['channelId'] = var5;
                    var4 = _closure2_slot116;
                    var4 = var4.current;
                    var1['tracker'] = var4;
                    var1 = var2.bind(var3)(var1);
case 207:
                    var1 = undefined;
                    return var1;
                }
            };
            r125 = r129.bind(var41)(r125, r126);
            r126 = _closure1_slot0;
            r125 = _closure1_slot2;
            r125 = r125[r128];
            r128 = r126.bind(var4)(r125);
            r126 = r128.useMessagesLifecycle;
            r125 = {};
            r125['messages'] = var9;
            r125['isMessagesReady'] = r124;
            r125['oldestUnreadMessageId'] = var37;
            r125['channelId'] = var10;
            r125['screenIndex'] = var18;
            r125['updateRows'] = var22;
            r125['scrollToMessageId'] = var39;
            r125 = r126.bind(r128)(r125);
            r126 = var41.useEffect;
            r125 = new Array(3);
            r125[0] = r127;
            r125[1] = var40;
            r125[2] = var15;
            var40 = function() {
                _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                    var2 = _closure2_slot133;
                    var2 = !var2;
                    if(!var2) { _fun0033_ip = 208; continue _fun0033 }
case 115:
                    var2 = _closure2_slot70;
case 208:
                    if(!var2) { _fun0033_ip = 209; continue _fun0033 }
case 29:
                    var3 = _closure2_slot106;
                    var2 = {};
                    var1 = false;
                    var2['hasHandledScroll'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 209:
                    var1 = undefined;
                    return var1;
                }
            };
            var40 = r126.bind(var41)(var40, r125);
            r125 = var41.useEffect;
            var40 = new Array(8);
            var40[0] = var8;
            var40[1] = var10;
            var40[2] = var9;
            var40[3] = var38;
            var40[4] = var32;
            var40[5] = var66;
            var40[6] = r124;
            var40[7] = var33;
            var33 = function() {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var5 = 82;
                    var2 = var1[var5];
                    var1 = undefined;
                    var10 = var4.bind(var1)(var2);
                    var9 = var10.shouldJumpToOriginalPost;
                    var14 = _closure2_slot1;
                    var13 = _closure2_slot7;
                    var12 = _closure2_slot6;
                    var11 = _closure2_slot110;
                    var15 = var10;
                    var4 = var15[var9](var14, var13, var12, var11, var10);
                    if(!var4) { _fun0034_ip = 14; continue _fun0034 }
case 83:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.scrollToTop;
                    var5 = _closure2_slot104;
                    var4 = _closure2_slot57;
                    var3 = false;
                    var3 = var6.bind(var7)(var5, var4, var3);
                    var3 = _closure2_slot134;
                    var5 = null;
                    var3 = var5 == var3;
                    var4 = undefined;
                    if(var3) { _fun0034_ip = 210; continue _fun0034 }
case 211:
                    var3 = _closure2_slot134;
                    var4 = var3.jumpSequenceId;
case 210:
                    var3 = _closure2_slot6;
                    var5 = var5 == var3;
                    var3 = undefined;
                    if(var5) { _fun0034_ip = 44; continue _fun0034 }
case 212:
                    var5 = _closure2_slot6;
                    var3 = var5.jumpSequenceId;
case 44:
                    if(!(var4 === var3)) { _fun0034_ip = 14; continue _fun0034 }
case 213:
                    var3 = _closure2_slot111;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
case 14:
                    return var1;
                }
            };
            var33 = r125.bind(var41)(var33, var40);
            var40 = var41.useEffect;
            var33 = new Array(174);
            var33[0] = r124;
            var33[1] = var9;
            var33[2] = r123;
            var33[3] = r122;
            var33[4] = r121;
            var33[5] = r120;
            var33[6] = r119;
            var33[7] = r118;
            var33[8] = r117;
            var33[9] = r116;
            var33[10] = r115;
            var33[11] = r114;
            var33[12] = r113;
            var33[13] = r112;
            var33[14] = r111;
            var33[15] = r110;
            var33[16] = r109;
            var33[17] = r108;
            var33[18] = r107;
            var33[19] = r106;
            var33[20] = r105;
            var33[21] = r104;
            var33[22] = r103;
            var33[23] = r102;
            var33[24] = r101;
            var33[25] = r100;
            var33[26] = var100;
            var33[27] = var99;
            var33[28] = var98;
            var33[29] = var97;
            var33[30] = var96;
            var33[31] = var95;
            var33[32] = var94;
            var33[33] = var93;
            var33[34] = var92;
            var33[35] = var91;
            var33[36] = var90;
            var33[37] = var89;
            var33[38] = var88;
            var33[39] = var87;
            var33[40] = var86;
            var33[41] = var85;
            var33[42] = var84;
            var33[43] = var83;
            var33[44] = var82;
            var33[45] = var81;
            var33[46] = var80;
            var33[47] = var79;
            var33[48] = var78;
            var33[49] = var77;
            var33[50] = var76;
            var33[51] = var75;
            var33[52] = var74;
            var33[53] = var73;
            var33[54] = var72;
            var33[55] = var71;
            var33[56] = var12;
            var33[57] = var10;
            var33[58] = var8;
            var33[59] = var22;
            var33[60] = var70;
            var33[61] = var69;
            var33[62] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 214; continue _fun0004 }
case 215:
            var68 = var44.channelThreadsVersion;
case 214:
            var33[63] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 216; continue _fun0004 }
case 217:
            var68 = var44.rsvpVersion;
case 216:
            var33[64] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 218; continue _fun0004 }
case 219:
            var68 = var44.repliedIds;
case 218:
            var33[65] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 220; continue _fun0004 }
case 221:
            var68 = var44.hasLoadedExperiments;
case 220:
            var33[66] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 222; continue _fun0004 }
case 223:
            var68 = var44.communicationDisabledVersion;
case 222:
            var33[67] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 224; continue _fun0004 }
case 225:
            var68 = var44.messageAuthorMembers;
case 224:
            var33[68] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 226; continue _fun0004 }
case 227:
            var68 = var44.failedMessagesVersion;
case 226:
            var33[69] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 228; continue _fun0004 }
case 229:
            var68 = var44.interactionStates;
case 228:
            var33[70] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 230; continue _fun0004 }
case 231:
            var68 = var44.interactionComponentStates;
case 230:
            var33[71] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 232; continue _fun0004 }
case 233:
            var68 = var44.interactionComponentStatesVersion;
case 232:
            var33[72] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 234; continue _fun0004 }
case 235:
            var68 = var44.shouldDisableInteractiveComponents;
case 234:
            var33[73] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 236; continue _fun0004 }
case 237:
            var68 = var44.channelPolls;
case 236:
            var33[74] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 238; continue _fun0004 }
case 239:
            var68 = var44.messageReferencePolls;
case 238:
            var33[75] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 240; continue _fun0004 }
case 241:
            var68 = var44.activityInstanceIds;
case 240:
            var33[76] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 242; continue _fun0004 }
case 243:
            var68 = var44.activityParticipants;
case 242:
            var33[77] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 244; continue _fun0004 }
case 245:
            var68 = var44.activityInstancePresenceDetails;
case 244:
            var33[78] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 246; continue _fun0004 }
case 247:
            var68 = var44.messagesWithActivitiesLaunching;
case 246:
            var33[79] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 248; continue _fun0004 }
case 249:
            var68 = var44.invalidApplicationIds;
case 248:
            var33[80] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 250; continue _fun0004 }
case 251:
            var68 = var44.applicationAssetFetchingIds;
case 250:
            var33[81] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 252; continue _fun0004 }
case 253:
            var68 = var44.appDirectoryEmbedApplications;
case 252:
            var33[82] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 254; continue _fun0004 }
case 255:
            var68 = var44.invalidAppDirectoryEmbedApplicationIds;
case 254:
            var33[83] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 256; continue _fun0004 }
case 257:
            var68 = var44.appDirectoryEmbedApplicationFetchStates;
case 256:
            var33[84] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 258; continue _fun0004 }
case 259:
            var68 = var44.lazyCacheStatus;
case 258:
            var33[85] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 260; continue _fun0004 }
case 261:
            var68 = var44.isFollowingForumPost;
case 260:
            var33[86] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 262; continue _fun0004 }
case 263:
            var68 = var44.showMediaPostSharePrompt;
case 262:
            var33[87] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 264; continue _fun0004 }
case 265:
            var68 = var44.referralTrialOfferIds;
case 264:
            var33[88] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 266; continue _fun0004 }
case 267:
            var68 = var44.trialOffer;
case 266:
            var33[89] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 268; continue _fun0004 }
case 269:
            var68 = var44.isPremiumTier2User;
case 268:
            var33[90] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 270; continue _fun0004 }
case 271:
            var68 = var44.messageAuthorActivities;
case 270:
            var33[91] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 272; continue _fun0004 }
case 273:
            var68 = var44.activityInviteMessageIds;
case 272:
            var33[92] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 274; continue _fun0004 }
case 275:
            var68 = var44.resolvingGiftCodes;
case 274:
            var33[93] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 276; continue _fun0004 }
case 277:
            var68 = var44.resolvedGiftCodes;
case 276:
            var33[94] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 278; continue _fun0004 }
case 279:
            var68 = var44.acceptingGiftCodes;
case 278:
            var33[95] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 280; continue _fun0004 }
case 281:
            var68 = var44.mediaPostPreviewEmbeds;
case 280:
            var33[96] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 282; continue _fun0004 }
case 283:
            var68 = var44.explicitMediaFalsePositiveInfo;
case 282:
            var33[97] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 284; continue _fun0004 }
case 285:
            var68 = var44.guildTemplates;
case 284:
            var33[98] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 286; continue _fun0004 }
case 287:
            var68 = var44.buildOverrides;
case 286:
            var33[99] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 288; continue _fun0004 }
case 289:
            var68 = var44.experimentEmbeds;
case 288:
            var33[100] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 290; continue _fun0004 }
case 291:
            var68 = var44.quests;
case 290:
            var33[101] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 292; continue _fun0004 }
case 293:
            var68 = var44.isFetchingCurrentQuests;
case 292:
            var33[102] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 294; continue _fun0004 }
case 295:
            var68 = var44.showPushFeedback;
case 294:
            var33[103] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 296; continue _fun0004 }
case 297:
            var68 = var44.forwardGuildsVersion;
case 296:
            var33[104] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 298; continue _fun0004 }
case 299:
            var68 = var44.renderCommunicationDisabled;
case 298:
            var33[105] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 300; continue _fun0004 }
case 301:
            var68 = var44.editingMessageId;
case 300:
            var33[106] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 302; continue _fun0004 }
case 303:
            var68 = var44.replyingMessageId;
case 302:
            var33[107] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 304; continue _fun0004 }
case 305:
            var68 = var44.oldestUnreadMessageId;
case 304:
            var33[108] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 306; continue _fun0004 }
case 307:
            var68 = var44.isCallActive;
case 306:
            var33[109] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 308; continue _fun0004 }
case 309:
            var68 = var44.voiceStateChannelId;
case 308:
            var33[110] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 310; continue _fun0004 }
case 311:
            var68 = var44.participantsLength;
case 310:
            var33[111] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 312; continue _fun0004 }
case 313:
            var68 = var44.invites;
case 312:
            var33[112] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 314; continue _fun0004 }
case 315:
            var68 = var44.isSpamMessageRequest;
case 314:
            var33[113] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 316; continue _fun0004 }
case 317:
            var68 = var44.isMessageRequest;
case 316:
            var33[114] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 318; continue _fun0004 }
case 319:
            var68 = var44.currentUserCommunicationDisabled;
case 318:
            var33[115] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 320; continue _fun0004 }
case 321:
            var68 = var44.androidKeyboardHeight;
case 320:
            var33[116] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 322; continue _fun0004 }
case 323:
            var68 = var44.inlineAttachmentMedia;
case 322:
            var33[117] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 324; continue _fun0004 }
case 325:
            var68 = var44.inlineEmbedMedia;
case 324:
            var33[118] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 326; continue _fun0004 }
case 327:
            var68 = var44.renderEmbeds;
case 326:
            var33[119] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 328; continue _fun0004 }
case 329:
            var68 = var44.renderReactions;
case 328:
            var33[120] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 330; continue _fun0004 }
case 331:
            var68 = var44.animateEmoji;
case 330:
            var33[121] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 332; continue _fun0004 }
case 333:
            var68 = var44.animateStickers;
case 332:
            var33[122] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 334; continue _fun0004 }
case 335:
            var68 = var44.gifAutoPlay;
case 334:
            var33[123] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 336; continue _fun0004 }
case 337:
            var68 = var44.containerWidth;
case 336:
            var33[124] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 338; continue _fun0004 }
case 339:
            var68 = var44.guildSystemChannelFlags;
case 338:
            var33[125] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 340; continue _fun0004 }
case 341:
            var68 = var44.userSettingsLocale;
case 340:
            var33[126] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 342; continue _fun0004 }
case 343:
            var68 = var44.roleStyle;
case 342:
            var33[127] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 344; continue _fun0004 }
case 345:
            var68 = var44.canSendMessages;
case 344:
            var33[128] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 346; continue _fun0004 }
case 347:
            var68 = var44.selectedSummary;
case 346:
            var33[129] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 348; continue _fun0004 }
case 349:
            var68 = var44.shouldObscureSpoiler;
case 348:
            var33[130] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 350; continue _fun0004 }
case 351:
            var68 = var44.isStaff;
case 350:
            var33[131] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 352; continue _fun0004 }
case 353:
            var68 = var44.isAgeVerified;
case 352:
            var33[132] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 354; continue _fun0004 }
case 355:
            var68 = var44.theme;
case 354:
            var33[133] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 356; continue _fun0004 }
case 357:
            var68 = var44.saturation;
case 356:
            var33[134] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 358; continue _fun0004 }
case 359:
            var68 = var44.threadStartingReferenceMessage;
case 358:
            var33[135] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 360; continue _fun0004 }
case 361:
            var68 = var44.unloadedContentEntryMessageIds;
case 360:
            var33[136] = var68;
            var69 = var5 == var44;
            var68 = undefined;
            if(var69) { _fun0004_ip = 362; continue _fun0004 }
case 363:
            var68 = var44.guildInviteColorsFetched;
case 362:
            var33[137] = var68;
            var33[138] = var67;
            var33[139] = var66;
            var66 = var31.isAtBottom;
            var33[140] = var66;
            var33[141] = var65;
            var66 = var5 == var44;
            var65 = undefined;
            if(var66) { _fun0004_ip = 364; continue _fun0004 }
case 365:
            var65 = var44.uploads;
case 364:
            var33[142] = var65;
            var33[143] = var64;
            var33[144] = var20;
            var33[145] = var63;
            var33[146] = var62;
            var33[147] = var61;
            var33[148] = var60;
            var33[149] = var59;
            var33[150] = var58;
            var33[151] = var57;
            var33[152] = var56;
            var33[153] = var55;
            var33[154] = var37;
            var56 = var5 == var44;
            var55 = undefined;
            if(var56) { _fun0004_ip = 366; continue _fun0004 }
case 367:
            var55 = var44.shouldForceRender;
case 366:
            var33[155] = var55;
            var33[156] = var54;
            var33[157] = var53;
            var33[158] = var24;
            var33[159] = var52;
            var33[160] = var51;
            var33[161] = var50;
            var33[162] = var49;
            var33[163] = var48;
            var33[164] = var47;
            var33[165] = var7;
            var33[166] = var46;
            var47 = var5 == var44;
            var46 = undefined;
            if(var47) { _fun0004_ip = 368; continue _fun0004 }
case 369:
            var46 = var44.guildEmojis;
case 368:
            var33[167] = var46;
            var33[168] = var45;
            var46 = var5 == var44;
            var45 = undefined;
            if(var46) { _fun0004_ip = 370; continue _fun0004 }
case 371:
            var45 = var44.enableSwipeActions;
case 370:
            var33[169] = var45;
            var46 = var5 == var44;
            var45 = undefined;
            if(var46) { _fun0004_ip = 372; continue _fun0004 }
case 373:
            var45 = var44.displayNameStylesEnabled;
case 372:
            var33[170] = var45;
            var33[171] = var43;
            var45 = var5 == var44;
            var43 = undefined;
            if(var45) { _fun0004_ip = 374; continue _fun0004 }
case 375:
            var44 = var44.currentUserDisplayNameStyles;
            var45 = var5 == var44;
            var43 = undefined;
            if(var45) { _fun0004_ip = 374; continue _fun0004 }
case 376:
            var43 = var44.fontId;
case 374:
            var33[172] = var43;
            var43 = var5 == var42;
            var5 = undefined;
            if(var43) { _fun0004_ip = 377; continue _fun0004 }
case 378:
            var5 = var42.fontId;
case 377:
            var33[173] = var5;
            var5 = function() {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    var2 = _closure2_slot11;
                    var8 = null;
                    if(!(var8 != var2)) { _fun0035_ip = 379; continue _fun0035 }
case 162:
                    var2 = _closure2_slot131;
                    var2 = var8 == var2;
                    var4 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0035_ip = 100; continue _fun0035 }
case 33:
                    var2 = _closure2_slot131;
                    var5 = var2.inlineAttachmentMedia;
case 100:
                    var2 = _closure2_slot12;
                    var14 = var5 !== var2;
                    if(var14) { _fun0035_ip = 120; continue _fun0035 }
case 45:
                    var2 = _closure2_slot131;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0035_ip = 39; continue _fun0035 }
case 30:
                    var2 = _closure2_slot131;
                    var5 = var2.inlineEmbedMedia;
case 39:
                    var2 = _closure2_slot13;
                    var14 = var5 !== var2;
case 120:
                    if(var14) { _fun0035_ip = 380; continue _fun0035 }
case 102:
                    var2 = _closure2_slot131;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0035_ip = 381; continue _fun0035 }
case 382:
                    var2 = _closure2_slot131;
                    var5 = var2.renderEmbeds;
case 381:
                    var2 = _closure2_slot14;
                    var14 = var5 !== var2;
case 380:
                    if(var14) { _fun0035_ip = 383; continue _fun0035 }
case 384:
                    var2 = _closure2_slot131;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0035_ip = 105; continue _fun0035 }
case 103:
                    var2 = _closure2_slot131;
                    var5 = var2.renderReactions;
case 105:
                    var2 = _closure2_slot15;
                    var14 = var5 !== var2;
case 383:
                    if(var14) { _fun0035_ip = 19; continue _fun0035 }
case 123:
                    var2 = _closure2_slot131;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0035_ip = 16; continue _fun0035 }
case 17:
                    var2 = _closure2_slot131;
                    var5 = var2.animateEmoji;
case 16:
                    var2 = _closure2_slot16;
                    var14 = var5 !== var2;
case 19:
                    if(var14) { _fun0035_ip = 385; continue _fun0035 }
case 130:
                    var2 = _closure2_slot131;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0035_ip = 197; continue _fun0035 }
case 386:
                    var2 = _closure2_slot131;
                    var5 = var2.animateStickers;
case 197:
                    var2 = _closure2_slot17;
                    var14 = var5 !== var2;
case 385:
                    if(var14) { _fun0035_ip = 387; continue _fun0035 }
case 388:
                    var2 = _closure2_slot131;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0035_ip = 23; continue _fun0035 }
case 389:
                    var2 = _closure2_slot131;
                    var5 = var2.gifAutoPlay;
case 23:
                    var2 = _closure2_slot18;
                    var14 = var5 !== var2;
case 387:
                    if(var14) { _fun0035_ip = 25; continue _fun0035 }
case 390:
                    var2 = _closure2_slot131;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0035_ip = 391; continue _fun0035 }
case 392:
                    var2 = _closure2_slot131;
                    var5 = var2.containerWidth;
case 391:
                    var2 = _closure2_slot97;
                    var14 = var5 !== var2;
case 25:
                    if(var14) { _fun0035_ip = 8; continue _fun0035 }
case 393:
                    var2 = _closure2_slot131;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0035_ip = 184; continue _fun0035 }
case 394:
                    var2 = _closure2_slot131;
                    var5 = var2.guildSystemChannelFlags;
case 184:
                    var2 = _closure2_slot10;
                    var14 = var5 !== var2;
case 8:
                    if(var14) { _fun0035_ip = 395; continue _fun0035 }
case 27:
                    var2 = _closure2_slot131;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0035_ip = 396; continue _fun0035 }
case 397:
                    var2 = _closure2_slot131;
                    var5 = var2.userSettingsLocale;
case 396:
                    var2 = _closure2_slot77;
                    var14 = var5 !== var2;
case 395:
                    if(var14) { _fun0035_ip = 398; continue _fun0035 }
case 140:
                    var2 = _closure2_slot131;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0035_ip = 399; continue _fun0035 }
case 199:
                    var2 = _closure2_slot131;
                    var5 = var2.roleStyle;
case 399:
                    var2 = _closure2_slot58;
                    var14 = var5 !== var2;
case 398:
                    if(var14) { _fun0035_ip = 400; continue _fun0035 }
case 401:
                    var2 = _closure2_slot131;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0035_ip = 402; continue _fun0035 }
case 145:
                    var2 = _closure2_slot131;
                    var5 = var2.canSendMessages;
case 402:
                    var2 = _closure2_slot47;
                    var14 = var5 !== var2;
case 400:
                    if(var14) { _fun0035_ip = 148; continue _fun0035 }
case 403:
                    var2 = _closure2_slot131;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0035_ip = 191; continue _fun0035 }
case 404:
                    var2 = _closure2_slot131;
                    var5 = var2.showPushFeedback;
case 191:
                    var2 = _closure2_slot81;
                    var14 = var5 !== var2;
case 148:
                    if(var14) { _fun0035_ip = 405; continue _fun0035 }
case 406:
                    var2 = _closure2_slot131;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0035_ip = 407; continue _fun0035 }
case 408:
                    var2 = _closure2_slot131;
                    var5 = var2.selectedSummary;
case 407:
                    var2 = _closure2_slot86;
                    var14 = var5 !== var2;
case 405:
                    if(var14) { _fun0035_ip = 409; continue _fun0035 }
case 410:
                    var2 = _closure2_slot131;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0035_ip = 411; continue _fun0035 }
case 412:
                    var2 = _closure2_slot131;
                    var5 = var2.shouldObscureSpoiler;
case 411:
                    var2 = _closure2_slot90;
                    var14 = var5 !== var2;
case 409:
                    if(var14) { _fun0035_ip = 413; continue _fun0035 }
case 414:
                    var2 = _closure2_slot131;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0035_ip = 415; continue _fun0035 }
case 416:
                    var2 = _closure2_slot131;
                    var5 = var2.explicitMediaFalsePositiveInfo;
case 415:
                    var2 = _closure2_slot96;
                    var14 = var5 !== var2;
case 413:
                    if(var14) { _fun0035_ip = 417; continue _fun0035 }
case 418:
                    var2 = _closure2_slot131;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0035_ip = 419; continue _fun0035 }
case 420:
                    var2 = _closure2_slot131;
                    var5 = var2.isStaff;
case 419:
                    var2 = _closure2_slot100;
                    var14 = var5 !== var2;
case 417:
                    if(var14) { _fun0035_ip = 421; continue _fun0035 }
case 422:
                    var2 = _closure2_slot131;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0035_ip = 423; continue _fun0035 }
case 424:
                    var2 = _closure2_slot131;
                    var5 = var2.isAgeVerified;
case 423:
                    var2 = _closure2_slot91;
                    var14 = var5 !== var2;
case 421:
                    if(var14) { _fun0035_ip = 425; continue _fun0035 }
case 141:
                    var2 = _closure2_slot131;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0035_ip = 426; continue _fun0035 }
case 427:
                    var2 = _closure2_slot131;
                    var5 = var2.theme;
case 426:
                    var2 = _closure2_slot19;
                    var14 = var5 !== var2;
case 425:
                    if(var14) { _fun0035_ip = 428; continue _fun0035 }
case 429:
                    var2 = _closure2_slot131;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0035_ip = 430; continue _fun0035 }
case 431:
                    var2 = _closure2_slot131;
                    var5 = var2.saturation;
case 430:
                    var2 = _closure2_slot59;
                    var14 = var5 !== var2;
case 428:
                    if(var14) { _fun0035_ip = 432; continue _fun0035 }
case 433:
                    var2 = _closure2_slot131;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0035_ip = 434; continue _fun0035 }
case 435:
                    var2 = _closure2_slot131;
                    var5 = var2.displayNameStylesEnabled;
case 434:
                    var2 = _closure2_slot60;
                    var14 = var5 !== var2;
case 432:
                    if(var14) { _fun0035_ip = 436; continue _fun0035 }
case 437:
                    var2 = _closure2_slot131;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0035_ip = 438; continue _fun0035 }
case 439:
                    var2 = _closure2_slot131;
                    var5 = var2.shouldForceRender;
case 438:
                    var2 = _closure2_slot109;
                    var2 = var5 !== var2;
                    if(!var2) { _fun0035_ip = 440; continue _fun0035 }
case 441:
                    var2 = _closure2_slot109;
case 440:
                    var14 = var2;
case 436:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 67;
                    var5 = var7[var5];
                    var9 = var6.bind(var4)(var5);
                    var7 = {};
                    var5 = _closure2_slot6;
                    var7['messages'] = var5;
                    var5 = _closure2_slot83;
                    var7['androidKeyboardHeight'] = var5;
                    var5 = _closure2_slot44;
                    var7['replyingMessageId'] = var5;
                    var6 = {};
                    var5 = _closure2_slot105;
                    var5 = var5.isAtBottom;
                    var6['isAtBottom'] = var5;
                    var10 = _closure2_slot113;
                    var5 = var10.getPreviousMessages;
                    var5 = var5.bind(var10)();
                    var5 = var8 != var5;
                    var6['hasPreviousMessages'] = var5;
                    var5 = {};
                    var10 = _closure2_slot134;
                    if(!(var8 == var10)) { _fun0035_ip = 442; continue _fun0035 }
case 443:
                    var10 = _closure2_slot6;
                    _fun0035_ip = 444; continue _fun0035;
case 442:
                    var10 = _closure2_slot134;
case 444:
                    var5['messages'] = var10;
                    var10 = _closure2_slot131;
                    var11 = var8 == var10;
                    var10 = undefined;
                    if(var11) { _fun0035_ip = 445; continue _fun0035 }
case 446:
                    var11 = _closure2_slot131;
                    var10 = var11.androidKeyboardHeight;
case 445:
                    if(!(var8 == var10)) { _fun0035_ip = 447; continue _fun0035 }
case 448:
                    var10 = _closure2_slot83;
case 447:
                    var5['androidKeyboardHeight'] = var10;
                    var5 = var9.bind(var4)(var7, var6, var5);
                    var12 = var5.scrollToMessageId;
                    var11 = var5.jumpTargetId;
                    var10 = var5.jumpType;
                    var6 = var5.minimizeScrolling;
                    var9 = var5.focusTargetId;
                    var7 = var5.shouldInitialScroll;
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0035_ip = 449; continue _fun0035 }
case 450:
                    var5 = _closure2_slot131;
                    var13 = var5.resolvingGiftCodes;
case 449:
                    var5 = _closure2_slot51;
                    var36 = var13 !== var5;
                    if(var36) { _fun0035_ip = 451; continue _fun0035 }
case 452:
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0035_ip = 453; continue _fun0035 }
case 454:
                    var5 = _closure2_slot131;
                    var13 = var5.resolvedGiftCodes;
case 453:
                    var5 = _closure2_slot52;
                    var36 = var13 !== var5;
case 451:
                    if(var36) { _fun0035_ip = 455; continue _fun0035 }
case 456:
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0035_ip = 457; continue _fun0035 }
case 458:
                    var5 = _closure2_slot131;
                    var13 = var5.acceptingGiftCodes;
case 457:
                    var5 = _closure2_slot53;
                    var36 = var13 !== var5;
case 455:
                    var _closure3_slot0 = var36;
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var35 = undefined;
                    if(var5) { _fun0035_ip = 459; continue _fun0035 }
case 460:
                    var5 = _closure2_slot131;
                    var35 = var5.uploads;
case 459:
                    var34 = _closure2_slot55;
                    var13 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var15 = 98;
                    var5 = var5[var15];
                    var16 = var13.bind(var4)(var5);
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0035_ip = 461; continue _fun0035 }
case 462:
                    var5 = _closure2_slot131;
                    var13 = var5.interactionStates;
case 461:
                    var5 = _closure2_slot62;
                    var5 = var16.bind(var4)(var13, var5);
                    var26 = !var5;
                    var _closure3_slot1 = var26;
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0035_ip = 463; continue _fun0035 }
case 464:
                    var5 = _closure2_slot131;
                    var13 = var5.channelPolls;
case 463:
                    var5 = _closure2_slot93;
                    var23 = var13 !== var5;
                    var _closure3_slot2 = var23;
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0035_ip = 465; continue _fun0035 }
case 466:
                    var5 = _closure2_slot131;
                    var13 = var5.messageReferencePolls;
case 465:
                    var5 = _closure2_slot95;
                    var22 = var13 !== var5;
                    var _closure3_slot3 = var22;
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0035_ip = 467; continue _fun0035 }
case 468:
                    var5 = _closure2_slot131;
                    var13 = var5.interactionComponentStatesVersion;
case 467:
                    var5 = _closure2_slot64;
                    var25 = var13 !== var5;
                    var _closure3_slot4 = var25;
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0035_ip = 469; continue _fun0035 }
case 470:
                    var5 = _closure2_slot131;
                    var13 = var5.shouldDisableInteractiveComponents;
case 469:
                    var5 = _closure2_slot92;
                    var5 = var13 !== var5;
                    var _closure3_slot5 = var5;
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0035_ip = 471; continue _fun0035 }
case 472:
                    var5 = _closure2_slot131;
                    var13 = var5.communicationDisabledVersion;
case 471:
                    var5 = _closure2_slot73;
                    var32 = var13 !== var5;
                    var _closure3_slot6 = var32;
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0035_ip = 473; continue _fun0035 }
case 474:
                    var5 = _closure2_slot131;
                    var13 = var5.messageAuthorMembers;
case 473:
                    var5 = _closure2_slot74;
                    var31 = var13 !== var5;
                    var _closure3_slot7 = var31;
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0035_ip = 475; continue _fun0035 }
case 476:
                    var5 = _closure2_slot131;
                    var13 = var5.failedMessagesVersion;
case 475:
                    var5 = _closure2_slot72;
                    var30 = var13 !== var5;
                    var _closure3_slot8 = var30;
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0035_ip = 477; continue _fun0035 }
case 478:
                    var5 = _closure2_slot131;
                    var13 = var5.renderCommunicationDisabled;
case 477:
                    var5 = _closure2_slot75;
                    var27 = var13 !== var5;
                    var _closure3_slot9 = var27;
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var29 = undefined;
                    if(var5) { _fun0035_ip = 479; continue _fun0035 }
case 480:
                    var5 = _closure2_slot131;
                    var29 = var5.forwardGuildsVersion;
case 479:
                    var28 = _closure2_slot101;
                    var13 = _closure2_slot1;
                    var5 = var13.isForumPost;
                    var24 = var5.bind(var13)();
                    if(!var24) { _fun0035_ip = 481; continue _fun0035 }
case 482:
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0035_ip = 483; continue _fun0035 }
case 484:
                    var5 = _closure2_slot131;
                    var13 = var5.isFollowingForumPost;
case 483:
                    var5 = _closure2_slot79;
                    var24 = var13 !== var5;
case 481:
                    var _closure3_slot10 = var24;
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0035_ip = 485; continue _fun0035 }
case 486:
                    var5 = _closure2_slot131;
                    var13 = var5.showMediaPostSharePrompt;
case 485:
                    var5 = _closure2_slot80;
                    var21 = var13 !== var5;
                    var _closure3_slot11 = var21;
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0035_ip = 487; continue _fun0035 }
case 488:
                    var5 = _closure2_slot131;
                    var13 = var5.unloadedContentEntryMessageIds;
case 487:
                    var5 = _closure2_slot98;
                    var20 = var13 !== var5;
                    var _closure3_slot12 = var20;
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0035_ip = 489; continue _fun0035 }
case 490:
                    var5 = _closure2_slot131;
                    var13 = var5.invalidApplicationIds;
case 489:
                    var5 = _closure2_slot27;
                    var5 = var13 !== var5;
                    var _closure3_slot13 = var5;
                    var13 = _closure2_slot131;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0035_ip = 491; continue _fun0035 }
case 492:
                    var13 = _closure2_slot131;
                    var16 = var13.activityInstanceIds;
case 491:
                    var13 = _closure2_slot29;
                    var33 = var16 !== var13;
                    if(var33) { _fun0035_ip = 493; continue _fun0035 }
case 494:
                    var13 = _closure2_slot131;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0035_ip = 495; continue _fun0035 }
case 496:
                    var13 = _closure2_slot131;
                    var16 = var13.activityParticipants;
case 495:
                    var13 = _closure2_slot31;
                    var33 = var16 !== var13;
case 493:
                    if(var33) { _fun0035_ip = 497; continue _fun0035 }
case 498:
                    var13 = _closure2_slot131;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0035_ip = 499; continue _fun0035 }
case 500:
                    var13 = _closure2_slot131;
                    var16 = var13.applicationAssetFetchingIds;
case 499:
                    var13 = _closure2_slot28;
                    var33 = var16 !== var13;
case 497:
                    if(var33) { _fun0035_ip = 501; continue _fun0035 }
case 502:
                    var13 = _closure2_slot131;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0035_ip = 503; continue _fun0035 }
case 504:
                    var13 = _closure2_slot131;
                    var16 = var13.activityInstancePresenceDetails;
case 503:
                    var13 = _closure2_slot30;
                    var33 = var16 !== var13;
case 501:
                    if(var33) { _fun0035_ip = 505; continue _fun0035 }
case 506:
                    var13 = _closure2_slot131;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0035_ip = 507; continue _fun0035 }
case 508:
                    var13 = _closure2_slot131;
                    var16 = var13.messagesWithActivitiesLaunching;
case 507:
                    var13 = _closure2_slot32;
                    var33 = var16 !== var13;
case 505:
                    if(var33) { _fun0035_ip = 509; continue _fun0035 }
case 510:
                    var33 = var5;
case 509:
                    var _closure3_slot14 = var33;
                    var13 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var15];
                    var17 = var13.bind(var4)(var5);
                    var16 = var17.areArraysShallowEqual;
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0035_ip = 511; continue _fun0035 }
case 512:
                    var5 = _closure2_slot131;
                    var13 = var5.activityInviteMessageIds;
case 511:
                    if(!(var8 == var13)) { _fun0035_ip = 513; continue _fun0035 }
case 514:
                    var13 = new Array(0);
case 513:
                    var5 = _closure2_slot22;
                    if(!(var8 == var5)) { _fun0035_ip = 515; continue _fun0035 }
case 516:
                    var5 = new Array(0);
                    _fun0035_ip = 517; continue _fun0035;
case 515:
                    var5 = _closure2_slot22;
case 517:
                    var5 = var16.bind(var17)(var13, var5);
                    var19 = !var5;
                    var _closure3_slot15 = var19;
                    var13 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var15];
                    var16 = var13.bind(var4)(var5);
                    var15 = var16.areArraysShallowEqual;
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0035_ip = 518; continue _fun0035 }
case 519:
                    var5 = _closure2_slot131;
                    var13 = var5.referralTrialOfferIds;
case 518:
                    if(!(var8 == var13)) { _fun0035_ip = 520; continue _fun0035 }
case 521:
                    var13 = new Array(0);
case 520:
                    var5 = _closure2_slot40;
                    if(!(var8 == var5)) { _fun0035_ip = 522; continue _fun0035 }
case 523:
                    var5 = new Array(0);
                    _fun0035_ip = 524; continue _fun0035;
case 522:
                    var5 = _closure2_slot40;
case 524:
                    var5 = var15.bind(var16)(var13, var5);
                    var18 = !var5;
                    if(var18) { _fun0035_ip = 525; continue _fun0035 }
case 526:
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0035_ip = 527; continue _fun0035 }
case 528:
                    var5 = _closure2_slot131;
                    var13 = var5.trialOffer;
case 527:
                    var5 = _closure2_slot41;
                    var18 = var13 !== var5;
case 525:
                    if(var18) { _fun0035_ip = 529; continue _fun0035 }
case 530:
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0035_ip = 531; continue _fun0035 }
case 532:
                    var5 = _closure2_slot131;
                    var13 = var5.isPremiumTier2User;
case 531:
                    var5 = _closure2_slot42;
                    var18 = var13 !== var5;
case 529:
                    var _closure3_slot16 = var18;
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0035_ip = 533; continue _fun0035 }
case 534:
                    var5 = _closure2_slot131;
                    var13 = var5.guildInviteColorsFetched;
case 533:
                    var5 = _closure2_slot102;
                    var17 = var13 !== var5;
                    var _closure3_slot17 = var17;
                    var5 = _closure2_slot131;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0035_ip = 535; continue _fun0035 }
case 536:
                    var5 = _closure2_slot131;
                    var13 = var5.guildEmojis;
case 535:
                    var5 = _closure2_slot103;
                    var16 = var13 !== var5;
                    var _closure3_slot18 = var16;
                    var5 = _closure2_slot82;
                    var15 = 'initializing';
                    var5 = var15 !== var5;
                    var13 = _closure2_slot131;
                    var37 = var8 == var13;
                    var13 = undefined;
                    if(var37) { _fun0035_ip = 537; continue _fun0035 }
case 538:
                    var37 = _closure2_slot131;
                    var13 = var37.lazyCacheStatus;
case 537:
                    var15 = var15 !== var13;
                    var13 = _closure2_slot131;
                    var13 = var8 == var13;
                    var37 = undefined;
                    if(var13) { _fun0035_ip = 539; continue _fun0035 }
case 540:
                    var13 = _closure2_slot131;
                    var13 = var13.currentUserDisplayNameStyles;
                    var38 = var8 == var13;
                    var37 = undefined;
                    if(var38) { _fun0035_ip = 539; continue _fun0035 }
case 541:
                    var37 = var13.fontId;
case 539:
                    var13 = _closure2_slot87;
                    var38 = var8 == var13;
                    var13 = undefined;
                    if(var38) { _fun0035_ip = 542; continue _fun0035 }
case 543:
                    var38 = _closure2_slot87;
                    var13 = var38.fontId;
case 542:
                    var13 = var37 !== var13;
                    var _closure3_slot19 = var13;
                    if(var14) { _fun0035_ip = 544; continue _fun0035 }
case 545:
                    if(var36) { _fun0035_ip = 544; continue _fun0035 }
case 546:
                    if(!(var35 === var34)) { _fun0035_ip = 544; continue _fun0035 }
case 547:
                    if(var33) { _fun0035_ip = 544; continue _fun0035 }
case 548:
                    var34 = _closure2_slot134;
                    var33 = _closure2_slot6;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 549:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 550; continue _fun0035 }
case 551:
                    var33 = _closure2_slot131;
                    var34 = var33.editingMessageId;
case 550:
                    var33 = _closure2_slot43;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 552:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 553; continue _fun0035 }
case 554:
                    var33 = _closure2_slot131;
                    var34 = var33.replyingMessageId;
case 553:
                    var33 = _closure2_slot44;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 555:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 556; continue _fun0035 }
case 557:
                    var33 = _closure2_slot131;
                    var34 = var33.voiceStateChannelId;
case 556:
                    var33 = _closure2_slot49;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 558:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 559; continue _fun0035 }
case 560:
                    var33 = _closure2_slot131;
                    var34 = var33.messageAuthorActivities;
case 559:
                    var33 = _closure2_slot21;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 561:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 562; continue _fun0035 }
case 563:
                    var33 = _closure2_slot131;
                    var34 = var33.oldestUnreadMessageId;
case 562:
                    var33 = _closure2_slot45;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 564:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 565; continue _fun0035 }
case 566:
                    var33 = _closure2_slot131;
                    var34 = var33.invites;
case 565:
                    var33 = _closure2_slot23;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 567:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 568; continue _fun0035 }
case 569:
                    var33 = _closure2_slot131;
                    var34 = var33.appDirectoryEmbedApplications;
case 568:
                    var33 = _closure2_slot24;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 570:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 571; continue _fun0035 }
case 572:
                    var33 = _closure2_slot131;
                    var34 = var33.invalidAppDirectoryEmbedApplicationIds;
case 571:
                    var33 = _closure2_slot25;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 573:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 574; continue _fun0035 }
case 575:
                    var33 = _closure2_slot131;
                    var34 = var33.appDirectoryEmbedApplicationFetchStates;
case 574:
                    var33 = _closure2_slot26;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 576:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 577; continue _fun0035 }
case 578:
                    var33 = _closure2_slot131;
                    var34 = var33.guildTemplates;
case 577:
                    var33 = _closure2_slot34;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 579:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 580; continue _fun0035 }
case 581:
                    var33 = _closure2_slot131;
                    var34 = var33.buildOverrides;
case 580:
                    var33 = _closure2_slot35;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 582:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 583; continue _fun0035 }
case 584:
                    var33 = _closure2_slot131;
                    var34 = var33.experimentEmbeds;
case 583:
                    var33 = _closure2_slot36;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 585:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 586; continue _fun0035 }
case 587:
                    var33 = _closure2_slot131;
                    var34 = var33.quests;
case 586:
                    var33 = _closure2_slot37;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 588:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 589; continue _fun0035 }
case 590:
                    var33 = _closure2_slot131;
                    var34 = var33.isFetchingCurrentQuests;
case 589:
                    var33 = _closure2_slot38;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 591:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 592; continue _fun0035 }
case 593:
                    var33 = _closure2_slot131;
                    var34 = var33.participantsLength;
case 592:
                    var33 = _closure2_slot54;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 594:
                    var34 = _closure2_slot68;
                    var33 = _closure2_slot134;
                    var33 = var8 != var33;
                    if(!var33) { _fun0035_ip = 595; continue _fun0035 }
case 596:
                    var35 = _closure2_slot134;
                    var35 = var35.ready;
                    if(var35) { _fun0035_ip = 597; continue _fun0035 }
case 598:
                    var36 = _closure2_slot134;
                    var35 = var36.cached;
case 597:
                    var33 = var35;
case 595:
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 599:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 600; continue _fun0035 }
case 601:
                    var33 = _closure2_slot131;
                    var34 = var33.channelThreadsVersion;
case 600:
                    var33 = _closure2_slot61;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 602:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 603; continue _fun0035 }
case 604:
                    var33 = _closure2_slot131;
                    var34 = var33.rsvpVersion;
case 603:
                    var33 = _closure2_slot71;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 605:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 606; continue _fun0035 }
case 607:
                    var33 = _closure2_slot131;
                    var34 = var33.repliedIds;
case 606:
                    var33 = _closure2_slot56;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 608:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 609; continue _fun0035 }
case 610:
                    var33 = _closure2_slot131;
                    var34 = var33.hasLoadedExperiments;
case 609:
                    var33 = _closure2_slot65;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 611:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 612; continue _fun0035 }
case 613:
                    var33 = _closure2_slot131;
                    var34 = var33.isMessageRequest;
case 612:
                    var33 = _closure2_slot67;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 614:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 615; continue _fun0035 }
case 616:
                    var33 = _closure2_slot131;
                    var34 = var33.isSpamMessageRequest;
case 615:
                    var33 = _closure2_slot66;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 617:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 618; continue _fun0035 }
case 619:
                    var33 = _closure2_slot131;
                    var34 = var33.currentUserCommunicationDisabled;
case 618:
                    var33 = _closure2_slot76;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 620:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 621; continue _fun0035 }
case 622:
                    var33 = _closure2_slot131;
                    var34 = var33.userSettingsLocale;
case 621:
                    var33 = _closure2_slot77;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 623:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 624; continue _fun0035 }
case 625:
                    var33 = _closure2_slot131;
                    var34 = var33.selectedSummary;
case 624:
                    var33 = _closure2_slot86;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 626:
                    var33 = _closure2_slot131;
                    var33 = var8 == var33;
                    var34 = undefined;
                    if(var33) { _fun0035_ip = 627; continue _fun0035 }
case 628:
                    var33 = _closure2_slot131;
                    var34 = var33.showPushFeedback;
case 627:
                    var33 = _closure2_slot81;
                    if(!(var34 === var33)) { _fun0035_ip = 544; continue _fun0035 }
case 629:
                    if(!(var15 === var5)) { _fun0035_ip = 544; continue _fun0035 }
case 630:
                    if(var32) { _fun0035_ip = 544; continue _fun0035 }
case 631:
                    if(var31) { _fun0035_ip = 544; continue _fun0035 }
case 632:
                    if(var30) { _fun0035_ip = 544; continue _fun0035 }
case 633:
                    if(!(var29 === var28)) { _fun0035_ip = 544; continue _fun0035 }
case 634:
                    if(var27) { _fun0035_ip = 544; continue _fun0035 }
case 635:
                    if(var26) { _fun0035_ip = 544; continue _fun0035 }
case 636:
                    if(var25) { _fun0035_ip = 544; continue _fun0035 }
case 637:
                    if(var24) { _fun0035_ip = 544; continue _fun0035 }
case 638:
                    if(!(var8 == var11)) { _fun0035_ip = 544; continue _fun0035 }
case 639:
                    if(!(var8 == var9)) { _fun0035_ip = 544; continue _fun0035 }
case 640:
                    var24 = _closure2_slot131;
                    var24 = var8 == var24;
                    var25 = undefined;
                    if(var24) { _fun0035_ip = 641; continue _fun0035 }
case 642:
                    var24 = _closure2_slot131;
                    var25 = var24.androidKeyboardHeight;
case 641:
                    var24 = _closure2_slot83;
                    if(!(var25 === var24)) { _fun0035_ip = 544; continue _fun0035 }
case 643:
                    var24 = _closure2_slot131;
                    var24 = var8 == var24;
                    var25 = undefined;
                    if(var24) { _fun0035_ip = 644; continue _fun0035 }
case 645:
                    var24 = _closure2_slot131;
                    var25 = var24.mediaPostPreviewEmbeds;
case 644:
                    var24 = _closure2_slot33;
                    if(!(var25 === var24)) { _fun0035_ip = 544; continue _fun0035 }
case 646:
                    var24 = _closure2_slot131;
                    var24 = var8 == var24;
                    var25 = undefined;
                    if(var24) { _fun0035_ip = 647; continue _fun0035 }
case 648:
                    var24 = _closure2_slot131;
                    var25 = var24.shouldObscureSpoiler;
case 647:
                    var24 = _closure2_slot90;
                    if(!(var25 === var24)) { _fun0035_ip = 544; continue _fun0035 }
case 649:
                    var24 = _closure2_slot131;
                    var24 = var8 == var24;
                    var25 = undefined;
                    if(var24) { _fun0035_ip = 650; continue _fun0035 }
case 651:
                    var24 = _closure2_slot131;
                    var25 = var24.shouldDisableInteractiveComponents;
case 650:
                    var24 = _closure2_slot92;
                    if(!(var25 === var24)) { _fun0035_ip = 544; continue _fun0035 }
case 652:
                    if(var23) { _fun0035_ip = 544; continue _fun0035 }
case 653:
                    if(var22) { _fun0035_ip = 544; continue _fun0035 }
case 654:
                    if(var21) { _fun0035_ip = 544; continue _fun0035 }
case 655:
                    var21 = _closure2_slot131;
                    var21 = var8 == var21;
                    var22 = undefined;
                    if(var21) { _fun0035_ip = 656; continue _fun0035 }
case 657:
                    var21 = _closure2_slot131;
                    var22 = var21.threadStartingReferenceMessage;
case 656:
                    var21 = _closure2_slot50;
                    if(!(var22 === var21)) { _fun0035_ip = 544; continue _fun0035 }
case 658:
                    if(var20) { _fun0035_ip = 544; continue _fun0035 }
case 659:
                    if(var19) { _fun0035_ip = 544; continue _fun0035 }
case 660:
                    if(var18) { _fun0035_ip = 544; continue _fun0035 }
case 661:
                    if(var17) { _fun0035_ip = 544; continue _fun0035 }
case 662:
                    if(var16) { _fun0035_ip = 544; continue _fun0035 }
case 663:
                    if(var13) { _fun0035_ip = 544; continue _fun0035 }
case 664:
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var13 = 82;
                    var13 = var17[var13];
                    var18 = var16.bind(var4)(var13);
                    var17 = var18.recordTimings;
                    var16 = _closure2_slot7;
                    var13 = _closure2_slot6;
                    var13 = var17.bind(var18)(var16, var13);
                    _fun0035_ip = 379; continue _fun0035;
case 544:
                    var13 = global;
                    var13 = var13.Set;
                    var16 = var13.prototype;
                    var16 = Object.create(var16, {constructor: {value: var13}});
                    var42 = var16;
                    var13 = new var42[var13](var41);
                    var13 = var13 instanceof Object ? var13 : var16;
                    var _closure3_slot20 = var13;
                    var16 = _closure2_slot131;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0035_ip = 665; continue _fun0035 }
case 666:
                    var16 = _closure2_slot131;
                    var17 = var16.editingMessageId;
case 665:
                    var16 = _closure2_slot43;
                    if(!(var17 !== var16)) { _fun0035_ip = 667; continue _fun0035 }
case 668:
                    var16 = _closure2_slot43;
                    if(!(var8 != var16)) { _fun0035_ip = 669; continue _fun0035 }
case 670:
                    var17 = var13.add;
                    var16 = _closure2_slot43;
                    var16 = var17.bind(var13)(var16);
case 669:
                    var16 = _closure2_slot131;
                    var17 = var8 == var16;
                    var16 = undefined;
                    if(var17) { _fun0035_ip = 671; continue _fun0035 }
case 672:
                    var17 = _closure2_slot131;
                    var16 = var17.editingMessageId;
case 671:
                    if(!(var8 != var16)) { _fun0035_ip = 667; continue _fun0035 }
case 673:
                    var17 = var13.add;
                    var16 = _closure2_slot131;
                    var18 = var8 == var16;
                    var16 = undefined;
                    if(var18) { _fun0035_ip = 674; continue _fun0035 }
case 675:
                    var18 = _closure2_slot131;
                    var16 = var18.editingMessageId;
case 674:
                    var16 = var17.bind(var13)(var16);
case 667:
                    var16 = _closure2_slot131;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0035_ip = 676; continue _fun0035 }
case 677:
                    var16 = _closure2_slot131;
                    var17 = var16.replyingMessageId;
case 676:
                    var16 = _closure2_slot44;
                    if(!(var17 !== var16)) { _fun0035_ip = 678; continue _fun0035 }
case 679:
                    var16 = _closure2_slot44;
                    if(!(var8 != var16)) { _fun0035_ip = 680; continue _fun0035 }
case 681:
                    var17 = var13.add;
                    var16 = _closure2_slot44;
                    var16 = var17.bind(var13)(var16);
case 680:
                    var16 = _closure2_slot131;
                    var17 = var8 == var16;
                    var16 = undefined;
                    if(var17) { _fun0035_ip = 682; continue _fun0035 }
case 683:
                    var17 = _closure2_slot131;
                    var16 = var17.replyingMessageId;
case 682:
                    if(!(var8 != var16)) { _fun0035_ip = 678; continue _fun0035 }
case 684:
                    var17 = var13.add;
                    var16 = _closure2_slot131;
                    var18 = var8 == var16;
                    var16 = undefined;
                    if(var18) { _fun0035_ip = 685; continue _fun0035 }
case 686:
                    var18 = _closure2_slot131;
                    var16 = var18.replyingMessageId;
case 685:
                    var16 = var17.bind(var13)(var16);
case 678:
                    var17 = _closure2_slot68;
                    var16 = _closure2_slot134;
                    var16 = var8 != var16;
                    if(!var16) { _fun0035_ip = 687; continue _fun0035 }
case 688:
                    var18 = _closure2_slot134;
                    var18 = var18.ready;
                    if(var18) { _fun0035_ip = 689; continue _fun0035 }
case 690:
                    var19 = _closure2_slot134;
                    var18 = var19.cached;
case 689:
                    var16 = var18;
case 687:
                    if(!(var17 === var16)) { _fun0035_ip = 691; continue _fun0035 }
case 692:
                    var16 = _closure2_slot131;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0035_ip = 693; continue _fun0035 }
case 694:
                    var16 = _closure2_slot131;
                    var17 = var16.isCallActive;
case 693:
                    var16 = _closure2_slot48;
                    if(!(var17 === var16)) { _fun0035_ip = 691; continue _fun0035 }
case 695:
                    var16 = _closure2_slot131;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0035_ip = 696; continue _fun0035 }
case 697:
                    var16 = _closure2_slot131;
                    var17 = var16.voiceStateChannelId;
case 696:
                    var16 = _closure2_slot49;
                    if(!(var17 === var16)) { _fun0035_ip = 691; continue _fun0035 }
case 698:
                    var16 = _closure2_slot131;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0035_ip = 699; continue _fun0035 }
case 700:
                    var16 = _closure2_slot131;
                    var17 = var16.participantsLength;
case 699:
                    var16 = _closure2_slot54;
                    if(!(var17 !== var16)) { _fun0035_ip = 701; continue _fun0035 }
case 691:
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
                        var1 = _closure1_slot53;
                        var1 = var1.CALL;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var16 = var18.bind(var19)(var17, var16);
                    if(!(var8 != var16)) { _fun0035_ip = 701; continue _fun0035 }
case 702:
                    var17 = var13.add;
                    var16 = var16.id;
                    var16 = var17.bind(var13)(var16);
case 701:
                    var16 = _closure2_slot131;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0035_ip = 703; continue _fun0035 }
case 704:
                    var16 = _closure2_slot131;
                    var17 = var16.channelThreadsVersion;
case 703:
                    var16 = _closure2_slot61;
                    var16 = var17 !== var16;
                    var _closure3_slot21 = var16;
                    var16 = _closure2_slot131;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0035_ip = 705; continue _fun0035 }
case 706:
                    var16 = _closure2_slot131;
                    var17 = var16.rsvpVersion;
case 705:
                    var16 = _closure2_slot71;
                    var16 = var17 !== var16;
                    var _closure3_slot22 = var16;
                    var16 = _closure2_slot131;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0035_ip = 707; continue _fun0035 }
case 708:
                    var16 = _closure2_slot131;
                    var17 = var16.repliedIds;
case 707:
                    var16 = _closure2_slot56;
                    var16 = var17 !== var16;
                    var _closure3_slot23 = var16;
                    var16 = _closure2_slot131;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0035_ip = 709; continue _fun0035 }
case 710:
                    var16 = _closure2_slot131;
                    var17 = var16.hasLoadedExperiments;
case 709:
                    var16 = _closure2_slot65;
                    var16 = var17 !== var16;
                    var _closure3_slot24 = var16;
                    var16 = _closure2_slot131;
                    var17 = var8 == var16;
                    var16 = undefined;
                    if(var17) { _fun0035_ip = 711; continue _fun0035 }
case 712:
                    var17 = _closure2_slot131;
                    var16 = var17.communicationDisabledVersion;
case 711:
                    var17 = var8 != var16;
                    var8 = -1;
                    if(!var17) { _fun0035_ip = 713; continue _fun0035 }
case 714:
                    var8 = var16;
case 713:
                    var _closure3_slot25 = var8;
                    var8 = !var15;
                    if(var15) { _fun0035_ip = 715; continue _fun0035 }
case 716:
                    var8 = var5;
case 715:
                    var _closure3_slot26 = var8;
                    var15 = _closure2_slot6;
                    var5 = var15.forEach;
                    var3 = function(arg1) {
                        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                            var1 = arg1;
                            var3 = _closure3_slot24;
                            if(!var3) { _fun0036_ip = 53; continue _fun0036 }
case 115:
                            var4 = var1.type;
                            var3 = _closure1_slot53;
                            var3 = var3.USER_JOIN;
                            if(!(var4 !== var3)) { _fun0036_ip = 717; continue _fun0036 }
case 53:
                            var3 = _closure3_slot23;
                            if(!var3) { _fun0036_ip = 718; continue _fun0036 }
case 719:
                            var4 = var1.type;
                            var3 = _closure1_slot53;
                            var3 = var3.REPLY;
                            if(!(var4 === var3)) { _fun0036_ip = 718; continue _fun0036 }
case 30:
                            var3 = var1.messageReference;
                            var4 = null;
                            if(!(var4 != var3)) { _fun0036_ip = 718; continue _fun0036 }
case 720:
                            var5 = _closure2_slot56;
                            var4 = var5.has;
                            var3 = var3.message_id;
                            var3 = var4.bind(var5)(var3);
                            if(var3) { _fun0036_ip = 721; continue _fun0036 }
case 718:
                            var3 = _closure3_slot21;
                            if(!var3) { _fun0036_ip = 105; continue _fun0036 }
case 211:
                            var4 = var1.hasFlag;
                            var3 = _closure1_slot54;
                            var3 = var3.HAS_THREAD;
                            var3 = var4.bind(var1)(var3);
                            if(var3) { _fun0036_ip = 722; continue _fun0036 }
case 105:
                            var3 = _closure3_slot22;
                            if(!var3) { _fun0036_ip = 723; continue _fun0036 }
case 213:
                            var3 = var1.codedLinks;
                            var4 = var3.length;
                            var3 = 0;
                            if(!(!(var4 > var3))) { _fun0036_ip = 724; continue _fun0036 }
case 723:
                            var3 = _closure3_slot18;
                            if(!var3) { _fun0036_ip = 106; continue _fun0036 }
case 16:
                            var4 = var1.type;
                            var3 = _closure1_slot53;
                            var3 = var3.EMOJI_ADDED;
                            if(!(var4 !== var3)) { _fun0036_ip = 725; continue _fun0036 }
case 106:
                            var3 = _closure3_slot9;
                            if(var3) { _fun0036_ip = 726; continue _fun0036 }
case 175:
                            var3 = _closure3_slot6;
                            if(!var3) { _fun0036_ip = 727; continue _fun0036 }
case 385:
                            var5 = _closure2_slot8;
                            var4 = null;
                            if(!(var4 != var5)) { _fun0036_ip = 727; continue _fun0036 }
case 21:
                            var6 = _closure1_slot41;
                            var5 = _closure2_slot8;
                            var3 = var1.author;
                            var4 = var3.id;
                            var3 = undefined;
                            var4 = var6.bind(var3)(var5, var4);
                            var3 = _closure3_slot25;
                            if(!(!(var4 > var3))) { _fun0036_ip = 726; continue _fun0036 }
case 727:
                            var3 = _closure3_slot7;
                            if(!var3) { _fun0036_ip = 728; continue _fun0036 }
case 729:
                            var3 = _closure2_slot8;
                            var5 = null;
                            if(!(var5 != var3)) { _fun0036_ip = 728; continue _fun0036 }
case 135:
                            var4 = var1.author;
                            var8 = var5 == var4;
                            var3 = undefined;
                            if(var8) { _fun0036_ip = 184; continue _fun0036 }
case 730:
                            var3 = var4.id;
case 184:
                            if(!(var5 == var3)) { _fun0036_ip = 731; continue _fun0036 }
case 728:
                            var3 = _closure3_slot8;
                            if(!var3) { _fun0036_ip = 114; continue _fun0036 }
case 732:
                            var3 = var1.author;
                            var4 = var3.id;
                            var3 = _closure2_slot11;
                            if(!(var4 !== var3)) { _fun0036_ip = 733; continue _fun0036 }
case 114:
                            var3 = _closure3_slot1;
                            if(!var3) { _fun0036_ip = 734; continue _fun0036 }
case 735:
                            var4 = _closure2_slot131;
                            var9 = null;
                            var4 = var9 == var4;
                            var8 = undefined;
                            if(var4) { _fun0036_ip = 97; continue _fun0036 }
case 736:
                            var4 = _closure2_slot131;
                            var8 = var4.interactionStates;
case 97:
                            if(!(var9 == var8)) { _fun0036_ip = 737; continue _fun0036 }
case 738:
                            var8 = {};
case 737:
                            var4 = var1.id;
                            var4 = var8[var4];
                            var8 = _closure2_slot62;
                            if(!(var9 == var8)) { _fun0036_ip = 739; continue _fun0036 }
case 740:
                            var8 = {};
                            _fun0036_ip = 741; continue _fun0036;
case 739:
                            var8 = _closure2_slot62;
case 741:
                            var3 = var1.id;
                            var3 = var8[var3];
                            if(!(var4 === var3)) { _fun0036_ip = 742; continue _fun0036 }
case 734:
                            var3 = _closure3_slot4;
                            if(!var3) { _fun0036_ip = 743; continue _fun0036 }
case 744:
                            var3 = _closure2_slot131;
                            var10 = null;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0036_ip = 745; continue _fun0036 }
case 746:
                            var9 = _closure2_slot131;
                            var12 = var9.interactionComponentStates;
                            var9 = var10 == var12;
                            var3 = undefined;
                            if(var9) { _fun0036_ip = 745; continue _fun0036 }
case 747:
                            var11 = var12.get;
                            var9 = var1.id;
                            var3 = var11.bind(var12)(var9);
case 745:
                            var9 = _closure2_slot63;
                            var9 = var10 == var9;
                            var4 = undefined;
                            if(var9) { _fun0036_ip = 409; continue _fun0036 }
case 748:
                            var10 = _closure2_slot63;
                            var9 = var10.get;
                            var8 = var1.id;
                            var4 = var9.bind(var10)(var8);
case 409:
                            if(!(var3 === var4)) { _fun0036_ip = 749; continue _fun0036 }
case 743:
                            var3 = _closure3_slot5;
                            if(!var3) { _fun0036_ip = 413; continue _fun0036 }
case 750:
                            var3 = var1.components;
                            var4 = var3.length;
                            var3 = 0;
                            if(!(var3 === var4)) { _fun0036_ip = 751; continue _fun0036 }
case 413:
                            var3 = _closure3_slot2;
                            if(!var3) { _fun0036_ip = 752; continue _fun0036 }
case 753:
                            var4 = _closure2_slot131;
                            var9 = null;
                            var4 = var9 == var4;
                            var8 = undefined;
                            if(var4) { _fun0036_ip = 754; continue _fun0036 }
case 755:
                            var4 = _closure2_slot131;
                            var8 = var4.channelPolls;
case 754:
                            if(!(var9 == var8)) { _fun0036_ip = 756; continue _fun0036 }
case 757:
                            var8 = {};
case 756:
                            var4 = var1.id;
                            var4 = var8[var4];
                            var8 = _closure2_slot93;
                            if(!(var9 == var8)) { _fun0036_ip = 758; continue _fun0036 }
case 759:
                            var8 = {};
                            _fun0036_ip = 760; continue _fun0036;
case 758:
                            var8 = _closure2_slot93;
case 760:
                            var3 = var1.id;
                            var3 = var8[var3];
                            if(!(var4 === var3)) { _fun0036_ip = 761; continue _fun0036 }
case 752:
                            var3 = _closure3_slot3;
                            if(!var3) { _fun0036_ip = 762; continue _fun0036 }
case 763:
                            var4 = var1.messageReference;
                            var10 = null;
                            var9 = var10 == var4;
                            var8 = undefined;
                            if(var9) { _fun0036_ip = 764; continue _fun0036 }
case 765:
                            var8 = var4.message_id;
case 764:
                            if(!(var10 != var8)) { _fun0036_ip = 762; continue _fun0036 }
case 766:
                            var4 = _closure2_slot131;
                            var4 = var10 == var4;
                            var3 = undefined;
                            if(var4) { _fun0036_ip = 767; continue _fun0036 }
case 768:
                            var4 = _closure2_slot131;
                            var3 = var4.messageReferencePolls;
case 767:
                            if(!(var10 == var3)) { _fun0036_ip = 153; continue _fun0036 }
case 769:
                            var3 = {};
case 153:
                            var4 = var3[var8];
                            var3 = _closure2_slot95;
                            if(!(var10 == var3)) { _fun0036_ip = 770; continue _fun0036 }
case 771:
                            var3 = {};
                            _fun0036_ip = 772; continue _fun0036;
case 770:
                            var3 = _closure2_slot95;
case 772:
                            var3 = var3[var8];
                            if(!(var4 === var3)) { _fun0036_ip = 773; continue _fun0036 }
case 762:
                            var3 = _closure3_slot12;
                            if(!var3) { _fun0036_ip = 774; continue _fun0036 }
case 775:
                            var4 = _closure2_slot131;
                            var9 = null;
                            var4 = var9 == var4;
                            var10 = undefined;
                            if(var4) { _fun0036_ip = 776; continue _fun0036 }
case 441:
                            var4 = _closure2_slot131;
                            var10 = var4.unloadedContentEntryMessageIds;
case 776:
                            if(!(var9 == var10)) { _fun0036_ip = 777; continue _fun0036 }
case 778:
                            var4 = global;
                            var4 = var4.Set;
                            var8 = var4.prototype;
                            var8 = Object.create(var8, {constructor: {value: var4}});
                            var24 = var8;
                            var4 = new var24[var4](var23);
                            var10 = var4 instanceof Object ? var4 : var8;
case 777:
                            var8 = var10.has;
                            var4 = var1.id;
                            var4 = var8.bind(var10)(var4);
                            var8 = _closure2_slot98;
                            if(!(var9 == var8)) { _fun0036_ip = 779; continue _fun0036 }
case 780:
                            var8 = global;
                            var8 = var8.Set;
                            var9 = var8.prototype;
                            var9 = Object.create(var9, {constructor: {value: var8}});
                            var24 = var9;
                            var8 = new var24[var8](var23);
                            var9 = var8 instanceof Object ? var8 : var9;
                            _fun0036_ip = 781; continue _fun0036;
case 779:
                            var9 = _closure2_slot98;
case 781:
                            var8 = var9.has;
                            var3 = var1.id;
                            var3 = var8.bind(var9)(var3);
                            if(!(var4 === var3)) { _fun0036_ip = 782; continue _fun0036 }
case 774:
                            var8 = _closure2_slot1;
                            var3 = var8.isForumPost;
                            var3 = var3.bind(var8)();
                            if(!var3) { _fun0036_ip = 783; continue _fun0036 }
case 784:
                            var3 = _closure3_slot10;
                            if(var3) { _fun0036_ip = 447; continue _fun0036 }
case 785:
                            var3 = _closure3_slot11;
                            if(!var3) { _fun0036_ip = 783; continue _fun0036 }
case 447:
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
                            if(!(var8 !== var3)) { _fun0036_ip = 786; continue _fun0036 }
case 783:
                            var3 = _closure3_slot14;
                            if(!var3) { _fun0036_ip = 787; continue _fun0036 }
case 788:
                            var8 = var1.activityInstance;
                            var3 = null;
                            if(!(var3 == var8)) { _fun0036_ip = 789; continue _fun0036 }
case 787:
                            var3 = _closure3_slot15;
                            if(!var3) { _fun0036_ip = 790; continue _fun0036 }
case 791:
                            var10 = var1.activity;
                            var9 = null;
                            var11 = var9 == var10;
                            var8 = undefined;
                            if(var11) { _fun0036_ip = 792; continue _fun0036 }
case 793:
                            var8 = var10.party_id;
case 792:
                            var3 = var9 != var8;
case 790:
                            if(!var3) { _fun0036_ip = 794; continue _fun0036 }
case 795:
                            var9 = _closure3_slot20;
                            var8 = var9.add;
                            var3 = var1.id;
                            var3 = var8.bind(var9)(var3);
case 794:
                            var3 = var1.author;
                            var10 = null;
                            if(!(var10 != var3)) { _fun0036_ip = 796; continue _fun0036 }
case 797:
                            var20 = {};
                            var3 = _closure2_slot131;
                            var9 = var10 == var3;
                            var8 = undefined;
                            var3 = undefined;
                            if(var9) { _fun0036_ip = 798; continue _fun0036 }
case 799:
                            var9 = _closure2_slot131;
                            var3 = var9.messageAuthorActivities;
case 798:
                            if(!(var10 == var3)) { _fun0036_ip = 800; continue _fun0036 }
case 801:
                            var3 = {};
case 800:
                            var20['messageAuthorActivities'] = var3;
                            var19 = {};
                            var3 = _closure2_slot21;
                            if(!(var10 == var3)) { _fun0036_ip = 802; continue _fun0036 }
case 803:
                            var3 = {};
                            _fun0036_ip = 804; continue _fun0036;
case 802:
                            var3 = _closure2_slot21;
case 804:
                            var19['messageAuthorActivities'] = var3;
                            var18 = {};
                            var3 = _closure2_slot131;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0036_ip = 805; continue _fun0036 }
case 461:
                            var9 = _closure2_slot131;
                            var3 = var9.invites;
case 805:
                            if(!(var10 == var3)) { _fun0036_ip = 806; continue _fun0036 }
case 807:
                            var9 = global;
                            var9 = var9.Map;
                            var11 = var9.prototype;
                            var11 = Object.create(var11, {constructor: {value: var9}});
                            var24 = var11;
                            var9 = new var24[var9](var23);
                            var3 = var9 instanceof Object ? var9 : var11;
case 806:
                            var18['invites'] = var3;
                            var3 = _closure2_slot131;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0036_ip = 808; continue _fun0036 }
case 809:
                            var9 = _closure2_slot131;
                            var3 = var9.appDirectoryEmbedApplications;
case 808:
                            if(!(var10 == var3)) { _fun0036_ip = 810; continue _fun0036 }
case 811:
                            var3 = {};
case 810:
                            var18['appDirectoryEmbedApplications'] = var3;
                            var3 = _closure2_slot131;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0036_ip = 812; continue _fun0036 }
case 813:
                            var9 = _closure2_slot131;
                            var3 = var9.invalidAppDirectoryEmbedApplicationIds;
case 812:
                            if(!(var10 == var3)) { _fun0036_ip = 814; continue _fun0036 }
case 815:
                            var9 = global;
                            var9 = var9.Set;
                            var11 = var9.prototype;
                            var11 = Object.create(var11, {constructor: {value: var9}});
                            var24 = var11;
                            var9 = new var24[var9](var23);
                            var3 = var9 instanceof Object ? var9 : var11;
case 814:
                            var18['invalidAppDirectoryEmbedApplicationIds'] = var3;
                            var3 = _closure2_slot131;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0036_ip = 816; continue _fun0036 }
case 817:
                            var9 = _closure2_slot131;
                            var3 = var9.invalidApplicationIds;
case 816:
                            if(!(var10 == var3)) { _fun0036_ip = 818; continue _fun0036 }
case 819:
                            var3 = new Array(0);
case 818:
                            var18['invalidApplicationIds'] = var3;
                            var3 = _closure2_slot131;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0036_ip = 820; continue _fun0036 }
case 821:
                            var9 = _closure2_slot131;
                            var3 = var9.activityParticipants;
case 820:
                            if(!(var10 == var3)) { _fun0036_ip = 822; continue _fun0036 }
case 823:
                            var3 = new Array(0);
case 822:
                            var18['activityParticipants'] = var3;
                            var3 = _closure2_slot131;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0036_ip = 824; continue _fun0036 }
case 825:
                            var9 = _closure2_slot131;
                            var3 = var9.applicationAssetFetchingIds;
case 824:
                            if(!(var10 == var3)) { _fun0036_ip = 826; continue _fun0036 }
case 476:
                            var3 = new Array(0);
case 826:
                            var18['applicationAssetFetchingIds'] = var3;
                            var3 = _closure2_slot131;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0036_ip = 827; continue _fun0036 }
case 828:
                            var9 = _closure2_slot131;
                            var3 = var9.appDirectoryEmbedApplicationFetchStates;
case 827:
                            if(!(var10 == var3)) { _fun0036_ip = 829; continue _fun0036 }
case 830:
                            var3 = {};
case 829:
                            var18['appDirectoryEmbedApplicationFetchStates'] = var3;
                            var3 = _closure2_slot131;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0036_ip = 831; continue _fun0036 }
case 832:
                            var9 = _closure2_slot131;
                            var3 = var9.guildTemplates;
case 831:
                            if(!(var10 == var3)) { _fun0036_ip = 833; continue _fun0036 }
case 480:
                            var9 = global;
                            var9 = var9.Map;
                            var11 = var9.prototype;
                            var11 = Object.create(var11, {constructor: {value: var9}});
                            var24 = var11;
                            var9 = new var24[var9](var23);
                            var3 = var9 instanceof Object ? var9 : var11;
case 833:
                            var18['guildTemplates'] = var3;
                            var3 = _closure2_slot131;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0036_ip = 834; continue _fun0036 }
case 835:
                            var9 = _closure2_slot131;
                            var3 = var9.buildOverrides;
case 834:
                            if(!(var10 == var3)) { _fun0036_ip = 481; continue _fun0036 }
case 836:
                            var3 = {};
case 481:
                            var18['buildOverrides'] = var3;
                            var3 = _closure2_slot131;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0036_ip = 837; continue _fun0036 }
case 838:
                            var9 = _closure2_slot131;
                            var3 = var9.experimentEmbeds;
case 837:
                            if(!(var10 == var3)) { _fun0036_ip = 839; continue _fun0036 }
case 840:
                            var3 = {};
case 839:
                            var18['experimentEmbeds'] = var3;
                            var3 = _closure2_slot131;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0036_ip = 487; continue _fun0036 }
case 488:
                            var9 = _closure2_slot131;
                            var3 = var9.quests;
case 487:
                            if(!(var10 == var3)) { _fun0036_ip = 841; continue _fun0036 }
case 842:
                            var3 = new Array(0);
case 841:
                            var18['quests'] = var3;
                            var3 = _closure2_slot131;
                            var3 = var10 == var3;
                            var9 = undefined;
                            if(var3) { _fun0036_ip = 843; continue _fun0036 }
case 844:
                            var3 = _closure2_slot131;
                            var9 = var3.isFetchingCurrentQuests;
case 843:
                            var3 = var10 != var9;
                            if(!var3) { _fun0036_ip = 845; continue _fun0036 }
case 846:
                            var3 = var9;
case 845:
                            var18['isFetchingCurrentQuests'] = var3;
                            var17 = {};
                            var3 = _closure2_slot23;
                            if(!(var10 == var3)) { _fun0036_ip = 847; continue _fun0036 }
case 848:
                            var3 = global;
                            var3 = var3.Map;
                            var9 = var3.prototype;
                            var9 = Object.create(var9, {constructor: {value: var3}});
                            var24 = var9;
                            var3 = new var24[var3](var23);
                            var3 = var3 instanceof Object ? var3 : var9;
                            _fun0036_ip = 849; continue _fun0036;
case 847:
                            var3 = _closure2_slot23;
case 849:
                            var17['invites'] = var3;
                            var3 = _closure2_slot24;
                            if(!(var10 == var3)) { _fun0036_ip = 493; continue _fun0036 }
case 850:
                            var3 = {};
                            _fun0036_ip = 851; continue _fun0036;
case 493:
                            var3 = _closure2_slot24;
case 851:
                            var17['appDirectoryEmbedApplications'] = var3;
                            var3 = _closure2_slot25;
                            if(!(var10 == var3)) { _fun0036_ip = 852; continue _fun0036 }
case 853:
                            var3 = global;
                            var3 = var3.Set;
                            var9 = var3.prototype;
                            var9 = Object.create(var9, {constructor: {value: var3}});
                            var24 = var9;
                            var3 = new var24[var3](var23);
                            var3 = var3 instanceof Object ? var3 : var9;
                            _fun0036_ip = 854; continue _fun0036;
case 852:
                            var3 = _closure2_slot25;
case 854:
                            var17['invalidAppDirectoryEmbedApplicationIds'] = var3;
                            var3 = _closure2_slot27;
                            if(!(var10 == var3)) { _fun0036_ip = 855; continue _fun0036 }
case 856:
                            var3 = new Array(0);
                            _fun0036_ip = 857; continue _fun0036;
case 855:
                            var3 = _closure2_slot27;
case 857:
                            var17['invalidApplicationIds'] = var3;
                            var3 = _closure2_slot31;
                            if(!(var10 == var3)) { _fun0036_ip = 858; continue _fun0036 }
case 859:
                            var3 = new Array(0);
                            _fun0036_ip = 860; continue _fun0036;
case 858:
                            var3 = _closure2_slot31;
case 860:
                            var17['activityParticipants'] = var3;
                            var3 = _closure2_slot28;
                            if(!(var10 == var3)) { _fun0036_ip = 861; continue _fun0036 }
case 862:
                            var3 = new Array(0);
                            _fun0036_ip = 863; continue _fun0036;
case 861:
                            var3 = _closure2_slot28;
case 863:
                            var17['applicationAssetFetchingIds'] = var3;
                            var3 = _closure2_slot26;
                            if(!(var10 == var3)) { _fun0036_ip = 864; continue _fun0036 }
case 865:
                            var3 = {};
                            _fun0036_ip = 866; continue _fun0036;
case 864:
                            var3 = _closure2_slot26;
case 866:
                            var17['appDirectoryEmbedApplicationFetchStates'] = var3;
                            var3 = _closure2_slot34;
                            if(!(var10 == var3)) { _fun0036_ip = 517; continue _fun0036 }
case 867:
                            var3 = global;
                            var3 = var3.Map;
                            var9 = var3.prototype;
                            var9 = Object.create(var9, {constructor: {value: var3}});
                            var24 = var9;
                            var3 = new var24[var3](var23);
                            var3 = var3 instanceof Object ? var3 : var9;
                            _fun0036_ip = 868; continue _fun0036;
case 517:
                            var3 = _closure2_slot34;
case 868:
                            var17['guildTemplates'] = var3;
                            var3 = _closure2_slot35;
                            if(!(var10 == var3)) { _fun0036_ip = 869; continue _fun0036 }
case 870:
                            var3 = {};
                            _fun0036_ip = 871; continue _fun0036;
case 869:
                            var3 = _closure2_slot35;
case 871:
                            var17['buildOverrides'] = var3;
                            var3 = _closure2_slot36;
                            if(!(var10 == var3)) { _fun0036_ip = 872; continue _fun0036 }
case 873:
                            var3 = {};
                            _fun0036_ip = 874; continue _fun0036;
case 872:
                            var3 = _closure2_slot36;
case 874:
                            var17['experimentEmbeds'] = var3;
                            var3 = _closure2_slot37;
                            if(!(var10 == var3)) { _fun0036_ip = 875; continue _fun0036 }
case 518:
                            var3 = new Array(0);
                            _fun0036_ip = 876; continue _fun0036;
case 875:
                            var3 = _closure2_slot37;
case 876:
                            var17['quests'] = var3;
                            var3 = _closure2_slot38;
                            var3 = var10 != var3;
                            if(!var3) { _fun0036_ip = 877; continue _fun0036 }
case 524:
                            var3 = _closure2_slot38;
case 877:
                            var17['isFetchingCurrentQuests'] = var3;
                            var16 = {};
                            var3 = _closure2_slot131;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0036_ip = 878; continue _fun0036 }
case 879:
                            var9 = _closure2_slot131;
                            var3 = var9.resolvingGiftCodes;
case 878:
                            if(!(var10 == var3)) { _fun0036_ip = 880; continue _fun0036 }
case 881:
                            var3 = new Array(0);
case 880:
                            var16['resolvingGiftCodes'] = var3;
                            var3 = _closure2_slot131;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0036_ip = 882; continue _fun0036 }
case 883:
                            var9 = _closure2_slot131;
                            var3 = var9.resolvedGiftCodes;
case 882:
                            if(!(var10 == var3)) { _fun0036_ip = 884; continue _fun0036 }
case 885:
                            var3 = new Array(0);
case 884:
                            var16['resolvedGiftCodes'] = var3;
                            var3 = _closure2_slot131;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0036_ip = 886; continue _fun0036 }
case 887:
                            var9 = _closure2_slot131;
                            var3 = var9.acceptingGiftCodes;
case 886:
                            if(!(var10 == var3)) { _fun0036_ip = 888; continue _fun0036 }
case 889:
                            var3 = new Array(0);
case 888:
                            var16['acceptingGiftCodes'] = var3;
                            var15 = {};
                            var3 = _closure2_slot51;
                            if(!(var10 == var3)) { _fun0036_ip = 890; continue _fun0036 }
case 536:
                            var3 = new Array(0);
                            _fun0036_ip = 535; continue _fun0036;
case 890:
                            var3 = _closure2_slot51;
case 535:
                            var15['resolvingGiftCodes'] = var3;
                            var3 = _closure2_slot52;
                            if(!(var10 == var3)) { _fun0036_ip = 891; continue _fun0036 }
case 892:
                            var3 = new Array(0);
                            _fun0036_ip = 893; continue _fun0036;
case 891:
                            var3 = _closure2_slot52;
case 893:
                            var15['resolvedGiftCodes'] = var3;
                            var3 = _closure2_slot53;
                            if(!(var10 == var3)) { _fun0036_ip = 894; continue _fun0036 }
case 895:
                            var3 = new Array(0);
                            _fun0036_ip = 896; continue _fun0036;
case 894:
                            var3 = _closure2_slot53;
case 896:
                            var15['acceptingGiftCodes'] = var3;
                            var13 = {};
                            var3 = _closure2_slot131;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0036_ip = 897; continue _fun0036 }
case 540:
                            var9 = _closure2_slot131;
                            var3 = var9.mediaPostPreviewEmbeds;
case 897:
                            if(!(var10 == var3)) { _fun0036_ip = 898; continue _fun0036 }
case 899:
                            var3 = {};
case 898:
                            var13['mediaPostPreviewEmbeds'] = var3;
                            var12 = {};
                            var3 = _closure2_slot33;
                            if(!(var10 == var3)) { _fun0036_ip = 900; continue _fun0036 }
case 901:
                            var3 = {};
                            _fun0036_ip = 902; continue _fun0036;
case 900:
                            var3 = _closure2_slot33;
case 902:
                            var12['mediaPostPreviewEmbeds'] = var3;
                            var11 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var14 = 100;
                            var9 = var9[var14];
                            var11 = var11.bind(var8)(var9);
                            var9 = var11.messageAuthorActivitiesChanged;
                            var9 = var9.bind(var11)(var1, var20, var19);
                            if(var9) { _fun0036_ip = 903; continue _fun0036 }
case 904:
                            var11 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var9 = var9[var14];
                            var11 = var11.bind(var8)(var9);
                            var9 = var11.codedLinksChanged;
                            var9 = var9.bind(var11)(var1, var18, var17);
                            if(var9) { _fun0036_ip = 903; continue _fun0036 }
case 905:
                            var9 = _closure3_slot0;
                            if(!var9) { _fun0036_ip = 906; continue _fun0036 }
case 907:
                            var11 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var9 = var9[var14];
                            var11 = var11.bind(var8)(var9);
                            var9 = var11.giftCodesChanged;
                            var9 = var9.bind(var11)(var1, var16, var15);
                            if(var9) { _fun0036_ip = 903; continue _fun0036 }
case 906:
                            var11 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var9 = var9[var14];
                            var11 = var11.bind(var8)(var9);
                            var9 = var11.mediaPostPreviewEmbedsChanged;
                            var9 = var9.bind(var11)(var1, var13, var12);
                            if(var9) { _fun0036_ip = 903; continue _fun0036 }
case 908:
                            var9 = _closure3_slot26;
                            if(!var9) { _fun0036_ip = 909; continue _fun0036 }
case 910:
                            var11 = var1.embeds;
                            var12 = var11.length;
                            var11 = 0;
                            var9 = var12 > var11;
case 909:
                            if(!var9) { _fun0036_ip = 911; continue _fun0036 }
case 912:
                            var12 = _closure3_slot20;
                            var11 = var12.add;
                            var9 = var1.id;
                            var9 = var11.bind(var12)(var9);
case 911:
                            var9 = var1.type;
                            var3 = _closure1_slot53;
                            var3 = var3.THREAD_STARTER_MESSAGE;
                            var3 = var9 === var3;
                            if(!var3) { _fun0036_ip = 567; continue _fun0036 }
case 913:
                            var9 = _closure2_slot131;
                            var9 = var10 == var9;
                            var11 = undefined;
                            if(var9) { _fun0036_ip = 914; continue _fun0036 }
case 915:
                            var9 = _closure2_slot131;
                            var11 = var9.threadStartingReferenceMessage;
case 914:
                            var9 = _closure2_slot50;
                            var3 = var11 !== var9;
case 567:
                            if(!var3) { _fun0036_ip = 916; continue _fun0036 }
case 917:
                            var11 = _closure3_slot20;
                            var9 = var11.add;
                            var3 = var1.id;
                            var3 = var9.bind(var11)(var3);
case 916:
                            var3 = _closure3_slot13;
                            if(!var3) { _fun0036_ip = 62; continue _fun0036 }
case 918:
                            var9 = var1.applicationId;
                            var3 = var10 != var9;
case 62:
                            if(!var3) { _fun0036_ip = 919; continue _fun0036 }
case 920:
                            var9 = _closure2_slot131;
                            var9 = var10 == var9;
                            var12 = undefined;
                            if(var9) { _fun0036_ip = 66; continue _fun0036 }
case 921:
                            var9 = _closure2_slot131;
                            var12 = var9.invalidApplicationIds;
case 66:
                            if(!(var10 == var12)) { _fun0036_ip = 922; continue _fun0036 }
case 573:
                            var12 = new Array(0);
case 922:
                            var11 = var12.includes;
                            var9 = var1.applicationId;
                            var3 = var11.bind(var12)(var9);
case 919:
                            if(!var3) { _fun0036_ip = 923; continue _fun0036 }
case 924:
                            var11 = _closure3_slot20;
                            var9 = var11.add;
                            var3 = var1.id;
                            var3 = var9.bind(var11)(var3);
case 923:
                            var3 = _closure3_slot16;
                            if(!var3) { _fun0036_ip = 925; continue _fun0036 }
case 926:
                            var12 = var1.referralTrialOfferId;
                            var3 = var10 != var12;
                            if(!var3) { _fun0036_ip = 927; continue _fun0036 }
case 928:
                            var11 = _closure2_slot40;
                            var9 = var11.includes;
                            var3 = var9.bind(var11)(var12);
case 927:
                            if(!var3) { _fun0036_ip = 925; continue _fun0036 }
case 929:
                            var11 = _closure3_slot20;
                            var9 = var11.add;
                            var3 = var1.id;
                            var3 = var9.bind(var11)(var3);
case 925:
                            var3 = _closure3_slot17;
                            if(!var3) { _fun0036_ip = 930; continue _fun0036 }
case 931:
                            var9 = var1.codedLinks;
                            var11 = var9.length;
                            var9 = 0;
                            var3 = var11 > var9;
case 930:
                            if(!var3) { _fun0036_ip = 932; continue _fun0036 }
case 933:
                            var11 = _closure3_slot20;
                            var9 = var11.add;
                            var3 = var1.id;
                            var3 = var9.bind(var11)(var3);
case 932:
                            var3 = _closure3_slot19;
                            if(!var3) { _fun0036_ip = 934; continue _fun0036 }
case 935:
                            var9 = var1.author;
                            var10 = var10 == var9;
                            var8 = undefined;
                            if(var10) { _fun0036_ip = 588; continue _fun0036 }
case 936:
                            var8 = var9.id;
case 588:
                            var4 = _closure2_slot11;
                            var3 = var8 === var4;
case 934:
                            if(!var3) { _fun0036_ip = 796; continue _fun0036 }
case 937:
                            var8 = _closure3_slot20;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0036_ip = 796; continue _fun0036;
case 903:
                            var8 = _closure3_slot20;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0036_ip = 796; continue _fun0036;
case 789:
                            var8 = _closure3_slot20;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0036_ip = 796; continue _fun0036;
case 786:
                            var8 = _closure3_slot20;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0036_ip = 796; continue _fun0036;
case 782:
                            var8 = _closure3_slot20;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            var3 = undefined;
                            return var3;
case 773:
                            var8 = _closure3_slot20;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            var3 = undefined;
                            return var3;
case 761:
                            var8 = _closure3_slot20;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            var3 = undefined;
                            return var3;
case 751:
                            var8 = _closure3_slot20;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0036_ip = 796; continue _fun0036;
case 749:
                            var8 = _closure3_slot20;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            var3 = undefined;
                            return var3;
case 742:
                            var8 = _closure3_slot20;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            var3 = undefined;
                            return var3;
case 733:
                            var8 = _closure3_slot20;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0036_ip = 796; continue _fun0036;
case 731:
                            var4 = _closure2_slot74;
                            var3 = var1.author;
                            var3 = var3.id;
                            var4 = var4[var3];
                            var3 = _closure2_slot131;
                            var8 = var5 == var3;
                            var3 = undefined;
                            if(var8) { _fun0036_ip = 938; continue _fun0036 }
case 939:
                            var6 = _closure2_slot131;
                            var6 = var6.messageAuthorMembers;
                            var5 = var5 == var6;
                            var3 = undefined;
                            if(var5) { _fun0036_ip = 938; continue _fun0036 }
case 940:
                            var5 = var1.author;
                            var5 = var5.id;
                            var3 = var6[var5];
case 938:
                            if(!(var4 !== var3)) { _fun0036_ip = 796; continue _fun0036 }
case 941:
                            var5 = _closure3_slot20;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0036_ip = 796; continue _fun0036;
case 726:
                            var5 = _closure3_slot20;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0036_ip = 796; continue _fun0036;
case 725:
                            var5 = _closure3_slot20;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0036_ip = 796; continue _fun0036;
case 724:
                            var5 = _closure3_slot20;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0036_ip = 796; continue _fun0036;
case 722:
                            var5 = _closure3_slot20;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0036_ip = 796; continue _fun0036;
case 721:
                            var5 = _closure3_slot20;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            var3 = undefined;
                            return var3;
case 717:
                            var3 = _closure3_slot20;
                            var2 = var3.add;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
case 796:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var5.bind(var15)(var3);
                    var5 = _closure2_slot124;
                    var3 = {};
                    var3['forceRender'] = var14;
                    var3['updateMessageIds'] = var13;
                    var3['scrollToMessageId'] = var12;
                    var3['jumpTargetId'] = var11;
                    var3['jumpType'] = var10;
                    var3['focusTargetId'] = var9;
                    var3['ignoreEmbedDescriptionCache'] = var8;
                    var8 = _closure2_slot135;
                    var3['messagesNewlyLoaded'] = var8;
                    var3['shouldInitialScroll'] = var7;
                    var3['minimizeScrolling'] = var6;
                    var3 = var5.bind(var4)(var3);
                    var5 = _closure2_slot112;
                    var3 = false;
                    var3 = var5.bind(var4)(var3);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 82;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.recordTimings;
                    var2 = _closure2_slot7;
                    var1 = _closure2_slot6;
                    var1 = var3.bind(var4)(var2, var1);
case 379:
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
                var4 = _closure2_slot122;
                var1['findMessageIndex'] = var4;
                var4 = _closure2_slot124;
                var1['updateRows'] = var4;
                var4 = _closure2_slot123;
                var1['scrollToMessageId'] = var4;
                var4 = function scrollToBottom() {
                    _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                        var7 = arguments[0];
                        var1 = undefined;
                        if(!(var7 === var1)) { _fun0037_ip = 116; continue _fun0037 }
case 942:
                        var7 = true;
case 116:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 82;
                        var2 = var4[var2];
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.scrollToBottom;
                        var11 = _closure2_slot104;
                        var10 = _closure2_slot57;
                        var9 = _closure2_slot130;
                        var12 = var6;
                        var8 = var7;
                        var2 = var12[var5](var11, var10, var9, var8, var7);
                        return var1;
                    }
                };
                var1['scrollToBottom'] = var4;
                var4 = function scrollToTop() {
                    _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                        var5 = arguments[0];
                        var3 = undefined;
                        if(!(var5 === var3)) { _fun0038_ip = 116; continue _fun0038 }
case 942:
                        var5 = true;
case 116:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 82;
                        var1 = var4[var1];
                        var4 = var2.bind(var3)(var1);
                        var3 = var4.scrollToTop;
                        var2 = _closure2_slot104;
                        var1 = _closure2_slot57;
                        var1 = var3.bind(var4)(var2, var1, var5);
                        return var1;
                    }
                };
                var1['scrollToTop'] = var4;
                var4 = function scrollToRelativeOffset(arg1) {
                    _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                        var6 = arguments[1];
                        var3 = undefined;
                        if(!(var6 === var3)) { _fun0039_ip = 116; continue _fun0039 }
case 942:
                        var6 = true;
case 116:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 82;
                        var1 = var4[var1];
                        var5 = var2.bind(var3)(var1);
                        var4 = var5.scrollToRelativeOffset;
                        var10 = _closure2_slot104;
                        var9 = _closure2_slot57;
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
                    var1 = 82;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.scrollToTopMessage;
                    var2 = _closure2_slot104;
                    var1 = _closure2_slot113;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1['scrollToTopMessage'] = var4;
                var4 = function jumpToPresent() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 82;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.jumpToPresent;
                    var4 = _closure2_slot6;
                    var3 = _closure2_slot1;
                    var2 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 82;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var6 = var7.scrollToBottom;
                        var11 = _closure2_slot104;
                        var10 = _closure2_slot57;
                        var9 = _closure2_slot130;
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
                    _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 82;
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
                        var5 = _closure2_slot110;
                        var1['hasJumpedToOriginalPost'] = var5;
                        var5 = _closure2_slot57;
                        var1['useReducedMotion'] = var5;
                        var6 = _closure2_slot45;
                        var5 = null;
                        var6 = var5 != var6;
                        if(!var6) { _fun0040_ip = 11; continue _fun0040 }
case 165:
                        var5 = _closure2_slot45;
case 11:
                        var1['oldestUnreadMessageId'] = var5;
                        var6 = _closure2_slot113;
                        var5 = var6.getPreviousRows;
                        var5 = var5.bind(var6)();
                        var1['chatManagerRows'] = var5;
                        var5 = _closure2_slot122;
                        var1['findMessageIndex'] = var5;
                        var4 = _closure2_slot104;
                        var1['chatRef'] = var4;
                        var4 = function loadMoreBefore() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 82;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.loadMoreBefore;
                            var3 = _closure2_slot7;
                            var2 = _closure2_slot6;
                            var1 = function(arg1) {
                                var3 = _closure2_slot106;
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
                    var1 = 82;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getChatRef;
                    var1 = _closure2_slot104;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['getChatRef'] = var3;
                var3 = _closure2_slot125;
                var1['maybeRescrollToMessageId'] = var3;
                var3 = _closure2_slot126;
                var1['clearRows'] = var3;
                var2 = _closure2_slot127;
                var1['getVisibleMessages'] = var2;
                return var1;
            };
            var13 = var33.bind(var5)(var15, var13, var18);
            var18 = var5.useCallback;
            var15 = _closure1_slot3;
            var13 = function* () {
                var1 = function* anon_0_() {
                    _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0041_ip = 943; continue _fun0041 }
case 944:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 82;
                        var2 = var3[var2];
                        var3 = undefined;
                        var5 = var4.bind(var3)(var2);
                        var4 = var5.handleTapNavBar;
                        var2 = {};
                        var7 = _closure2_slot1;
                        var2['channel'] = var7;
                        var7 = _closure2_slot57;
                        var2['useReducedMotion'] = var7;
                        var7 = _closure2_slot105;
                        var7 = var7.isNearTop;
                        var2['isNearTop'] = var7;
                        var7 = _closure2_slot6;
                        var2['messages'] = var7;
                        var7 = _closure2_slot122;
                        var2['findMessageIndex'] = var7;
                        var7 = function scrollToTop() {
                            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                                var5 = arguments[0];
                                var3 = undefined;
                                if(!(var5 === var3)) { _fun0042_ip = 116; continue _fun0042 }
case 942:
                                var5 = true;
case 116:
                                var2 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 82;
                                var1 = var4[var1];
                                var4 = var2.bind(var3)(var1);
                                var3 = var4.scrollToTop;
                                var2 = _closure2_slot104;
                                var1 = _closure2_slot57;
                                var1 = var3.bind(var4)(var2, var1, var5);
                                return var1;
                            }
                        };
                        var2['scrollToTop'] = var7;
                        var6 = _closure2_slot104;
                        var2['chatRef'] = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=128);
case 945:
                        return var2;
case 946:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0041_ip = 947; continue _fun0041 }
case 948:
                        return var3;
case 947:
                        return var2;
case 943:
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
                var1 = 101;
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
                var1 = 102;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.getNativeSyntheticEventData;
                var2 = arg1;
                var2 = var5.bind(var6)(var2);
                var7 = var2.messageId;
                var2 = 82;
                var2 = var4[var2];
                var6 = var3.bind(var1)(var2);
                var5 = var6.handleLongPressSticker;
                var4 = _closure2_slot107;
                var3 = _closure2_slot124;
                var3 = var5.bind(var6)(var7, var4, var3);
                var2 = _closure2_slot108;
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
                var1 = 82;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.handleTapTableView;
                var2 = _closure2_slot3;
                var1 = _closure2_slot84;
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
                    if(!var1) { _fun0043_ip = 2; continue _fun0043 }
case 56:
                    var1 = var2 != var6;
case 2:
                    if(!var1) { _fun0043_ip = 90; continue _fun0043 }
case 5:
                    var1 = var2 != var5;
case 90:
                    if(!var1) { _fun0043_ip = 83; continue _fun0043 }
case 28:
                    var1 = var2 != var4;
case 83:
                    if(!var1) { _fun0043_ip = 384; continue _fun0043 }
case 86:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 82;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleFirstLayout;
                    var12 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 82;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.handleVisibleMessagesChange;
                        var1 = {};
                        var7 = arg1;
                        var8 = var1;
                        var4 = copyDataProperties(var8, var7);
                        var6 = _closure2_slot113;
                        var5 = 'chatManager';
                        var1[var5] = var6;
                        var6 = _closure2_slot88;
                        var5 = 'shouldTrackAnnouncementMessageViews';
                        var1[var5] = var6;
                        var6 = _closure2_slot89;
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
case 384:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var13.bind(var5)(var2, var3);
            var13 = var5.useCallback;
            var3 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 82;
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
                _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var7 = var1.firstVisibleMessageIndex;
                    var6 = var1.lastVisibleMessageIndex;
                    var5 = var1.firstVisibleMessagePercentVisible;
                    var4 = var1.lastVisibleMessagePercentVisible;
                    var2 = null;
                    var1 = var2 != var7;
                    if(!var1) { _fun0044_ip = 2; continue _fun0044 }
case 56:
                    var1 = var2 != var6;
case 2:
                    if(!var1) { _fun0044_ip = 90; continue _fun0044 }
case 5:
                    var1 = var2 != var5;
case 90:
                    if(!var1) { _fun0044_ip = 83; continue _fun0044 }
case 28:
                    var1 = var2 != var4;
case 83:
                    if(!var1) { _fun0044_ip = 384; continue _fun0044 }
case 86:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 82;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleMessageVisibilityChanged;
                    var12 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 82;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.handleVisibleMessagesChange;
                        var1 = {};
                        var7 = arg1;
                        var8 = var1;
                        var4 = copyDataProperties(var8, var7);
                        var6 = _closure2_slot113;
                        var5 = 'chatManager';
                        var1[var5] = var6;
                        var6 = _closure2_slot88;
                        var5 = 'shouldTrackAnnouncementMessageViews';
                        var1[var5] = var6;
                        var6 = _closure2_slot89;
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
case 384:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot61;
            var2 = _closure1_slot60;
            var1 = {};
            var8 = _closure1_slot59;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 103;
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
            var6 = 104;
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
    var4 = 'MessagesFunctional';
    var2['displayName'] = var4;
    var4 = 105;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/MessagesFunctional.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
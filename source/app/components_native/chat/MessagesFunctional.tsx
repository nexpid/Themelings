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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot63;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot63;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 345:
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
 0:
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
            var32 = var7.bind(var13)(var5, var2);
            var _closure2_slot9 = var32;
            var5 = null;
            var2 = var5 == var32;
            var58 = undefined;
            if(var2) { _fun0004_ip = 242; continue _fun0004 }
 236:
            var58 = var32.systemChannelFlags;
 242:
            var _closure2_slot10 = var58;
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
            var70 = var19.bind(var20)(var13, var7, var2);
            var _closure2_slot11 = var70;
            var2 = 52;
            var7 = var17[var2];
            var7 = var15.bind(var4)(var7);
            var13 = var7.InlineAttachmentMedia;
            var7 = var13.useSetting;
            var57 = var7.bind(var13)();
            var _closure2_slot12 = var57;
            var7 = var17[var2];
            var7 = var15.bind(var4)(var7);
            var13 = var7.InlineEmbedMedia;
            var7 = var13.useSetting;
            var56 = var7.bind(var13)();
            var _closure2_slot13 = var56;
            var7 = var17[var2];
            var7 = var15.bind(var4)(var7);
            var13 = var7.RenderEmbeds;
            var7 = var13.useSetting;
            var53 = var7.bind(var13)();
            var _closure2_slot14 = var53;
            var7 = var17[var2];
            var7 = var15.bind(var4)(var7);
            var13 = var7.RenderReactions;
            var7 = var13.useSetting;
            var52 = var7.bind(var13)();
            var _closure2_slot15 = var52;
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
            var62 = var7.bind(var13)();
            var _closure2_slot17 = var62;
            var2 = var17[var2];
            var2 = var15.bind(var4)(var2);
            var7 = var2.GifAutoPlay;
            var2 = var7.useSetting;
            var60 = var2.bind(var7)();
            var _closure2_slot18 = var60;
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
            var47 = var19.bind(var22)(var13, var7, var2);
            var _closure2_slot19 = var47;
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
            var75 = var29.bind(var30)(var28, var25, var2);
            var _closure2_slot23 = var75;
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
            var30 = var15.bind(var4)(var2);
            var29 = var30.useStateFromStoresArray;
            var2 = _closure1_slot9;
            var28 = new Array(1);
            var28[0] = var2;
            var25 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getFetchingOrFailedFetchingIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            r105 = var29.bind(var30)(var28, var25);
            var _closure2_slot27 = r105;
            var25 = var17[var3];
            var30 = var15.bind(var4)(var25);
            var29 = var30.useStateFromStoresArray;
            var25 = _closure1_slot8;
            var28 = new Array(1);
            var28[0] = var25;
            var25 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getFetchingIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var95 = var29.bind(var30)(var28, var25);
            var _closure2_slot28 = var95;
            var25 = var17[var3];
            var34 = var15.bind(var4)(var25);
            var33 = var34.useStateFromStoresArray;
            var25 = _closure1_slot7;
            var30 = new Array(1);
            var30[0] = var25;
            var29 = new Array(1);
            var29[0] = var10;
            var28 = function() {
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
            r109 = var33.bind(var34)(var30, var28, var29);
            var _closure2_slot29 = r109;
            var28 = var17[var3];
            var33 = var15.bind(var4)(var28);
            var30 = var33.useStateFromStoresArray;
            var29 = new Array(2);
            var29[0] = var25;
            var28 = _closure1_slot46;
            var29[1] = var28;
            var28 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var6 = function _loop(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
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
                            if(var6) { _fun0006_ip = 83; continue _fun0006 }
 77:
                            var3 = var2.details;
 83:
                            if(!(var4 != var3)) { _fun0006_ip = 144; continue _fun0006 }
 87:
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
 144:
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
                    if(var2) { _fun0005_ip = 90; continue _fun0005 }
 65:
                    var2 = var3.value;
                    var2 = var6.bind(var5)(var2);
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0005_ip = 65; continue _fun0005 }
 90:
                    return var1;
                }
            };
            r107 = var30.bind(var33)(var29, var28);
            var _closure2_slot30 = r107;
            var28 = var17[var3];
            var33 = var15.bind(var4)(var28);
            var30 = var33.useStateFromStoresArray;
            var29 = new Array(1);
            var29[0] = var25;
            var28 = function() {
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
            r108 = var30.bind(var33)(var29, var28);
            var _closure2_slot31 = r108;
            var28 = var17[var3];
            var30 = var15.bind(var4)(var28);
            var29 = var30.useStateFromStoresArray;
            var28 = new Array(1);
            var28[0] = var25;
            var25 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
                    if(var2) { _fun0007_ip = 148; continue _fun0007 }
 54:
                    var11 = var3.value;
                    var2 = _closure1_slot4;
                    var2 = var2.bind(var9)(var11, var5);
                    var11 = var2[var7];
                    var2 = var2[var4];
                    var11 = var2.isLaunching;
                    if(!var11) { _fun0007_ip = 96; continue _fun0007 }
 86:
                    var12 = var2.componentId;
                    var11 = var6 != var12;
 96:
                    if(!var11) { _fun0007_ip = 114; continue _fun0007 }
 99:
                    var12 = var2.componentId;
                    var12 = var12.length;
                    var11 = var12 > var7;
 114:
                    if(!var11) { _fun0007_ip = 133; continue _fun0007 }
 117:
                    var11 = var1.push;
                    var2 = var2.componentId;
                    var2 = var11.bind(var1)(var2);
 133:
                    var11 = var8.bind(var9)();
                    var2 = var11.done;
                    var3 = var11;
                    if(!var2) { _fun0007_ip = 54; continue _fun0007 }
 148:
                    return var1;
                }
            };
            r106 = var29.bind(var30)(var28, var25);
            var _closure2_slot32 = r106;
            var25 = var17[var3];
            var29 = var15.bind(var4)(var25);
            var28 = var29.useStateFromStoresArray;
            var25 = new Array(1);
            var25[0] = var2;
            var2 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getApplications;
                var2 = var1.bind(var2)();
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var2 = var28.bind(var29)(var25, var2);
            var2 = var19.bind(var4)(var2, var7);
            var76 = var2[var13];
            var _closure2_slot33 = var76;
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
            var _closure2_slot34 = var94;
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
            var _closure2_slot35 = var92;
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
            var _closure2_slot36 = var91;
            var2 = 57;
            var2 = var17[var2];
            var28 = var15.bind(var4)(var2);
            var25 = var28.useQuests;
            var2 = {'fetchPolicy': 'cache-or-network', 'callerSource': 'messages_native_fn'};
            var2 = var25.bind(var28)(var2);
            var90 = var2.quests;
            var _closure2_slot37 = var90;
            var89 = var2.isFetchingCurrentQuests;
            var _closure2_slot38 = var89;
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
            var _closure2_slot39 = var2;
            var2 = var17[var3];
            var29 = var15.bind(var4)(var2);
            var28 = var29.useStateFromStoresArray;
            var2 = _closure1_slot27;
            var25 = new Array(1);
            var25[0] = var2;
            var2 = function() {
                var3 = _closure2_slot39;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var3 = _closure1_slot27;
                        var2 = var3.getRelevantUserTrialOffer;
                        var1 = arg1;
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        var3 = var1 == var2;
                        var1 = undefined;
                        if(var3) { _fun0008_ip = 37; continue _fun0008 }
 32:
                        var1 = var2.id;
 37:
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
            var _closure2_slot40 = r104;
            var2 = 58;
            var2 = var17[var2];
            var28 = var15.bind(var4)(var2);
            var25 = var28.useTrialOffer;
            var2 = _closure1_slot56;
            var85 = var25.bind(var28)(var2);
            var _closure2_slot41 = var85;
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
            var _closure2_slot42 = var84;
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
            var _closure2_slot43 = var80;
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
 0:
                    var3 = _closure1_slot29;
                    var2 = var3.getPendingReply;
                    var1 = _closure2_slot7;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0009_ip = 46; continue _fun0009 }
 36:
                    var2 = var2.message;
                    var1 = var2.id;
 46:
                    return var1;
                }
            };
            var67 = var29.bind(var30)(var28, var2, var25);
            var _closure2_slot44 = var67;
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
            var _closure2_slot45 = var38;
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
 0:
                    var3 = _closure2_slot8;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0010_ip = 38; continue _fun0010 }
 16:
                    var4 = _closure1_slot42;
                    var3 = var4.canChatInGuild;
                    var2 = _closure2_slot8;
                    var1 = var3.bind(var4)(var2);
 38:
                    return var1;
                }
            };
            var65 = var29.bind(var30)(var28, var2, var25);
            var _closure2_slot46 = var65;
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
            var _closure2_slot47 = var79;
            var2 = 60;
            var2 = var17[var2];
            var2 = var22.bind(var4)(var2);
            var69 = var2.bind(var4)(var10);
            var _closure2_slot48 = var69;
            var2 = var17[var3];
            var29 = var15.bind(var4)(var2);
            var28 = var29.useStateFromStores;
            var2 = _closure1_slot50;
            var25 = new Array(1);
            var25[0] = var2;
            var22 = new Array(1);
            var22[0] = var70;
            var2 = function() {
                var4 = _closure1_slot50;
                var3 = var4.getUserVoiceChannelId;
                var2 = _closure1_slot55;
                var1 = _closure2_slot11;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var77 = var28.bind(var29)(var25, var2, var22);
            var _closure2_slot49 = var77;
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
 0:
                    var1 = _closure1_slot51;
                    var4 = var1.THREADS;
                    var3 = var4.has;
                    var1 = _closure2_slot1;
                    var1 = var1.type;
                    var3 = var3.bind(var4)(var1);
                    var4 = null;
                    var1 = null;
                    if(!var3) { _fun0011_ip = 124; continue _fun0011 }
 42:
                    var3 = _closure2_slot1;
                    var3 = var3.parent_id;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0011_ip = 124; continue _fun0011 }
 61:
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
 124:
                    return var1;
                }
            };
            r102 = var29.bind(var30)(var28, var22, var25);
            var _closure2_slot50 = r102;
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
            var _closure2_slot51 = var88;
            var87 = var22.resolvedGiftCodes;
            var _closure2_slot52 = var87;
            var86 = var22.acceptingGiftCodes;
            var _closure2_slot53 = var86;
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
            var68 = var29.bind(var30)(var28, var22, var25);
            var _closure2_slot54 = var68;
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
            var64 = var29.bind(var30)(var28, var22, var25);
            var _closure2_slot55 = var64;
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
            r118 = var28.bind(var29)(var25, var2, var22);
            var _closure2_slot56 = r118;
            var2 = var17[var3];
            var29 = var15.bind(var4)(var2);
            var28 = var29.useStateFromStores;
            var2 = _closure1_slot6;
            var25 = new Array(1);
            var25[0] = var2;
            var22 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var33 = var28.bind(var29)(var25, var22);
            var _closure2_slot57 = var33;
            var22 = var17[var3];
            var28 = var15.bind(var4)(var22);
            var25 = var28.useStateFromStores;
            var22 = new Array(1);
            var22[0] = var2;
            var2 = function() {
                var1 = _closure1_slot6;
                var1 = var1.roleStyle;
                return var1;
            };
            var25 = var25.bind(var28)(var22, var2);
            var _closure2_slot58 = var25;
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
            r120 = var29.bind(var30)(var28, var2, var22);
            var _closure2_slot59 = r120;
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
            var34 = var15.bind(var4)(var2);
            var30 = var34.useStateFromStores;
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
            r132 = var34;
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
            r117 = var22.bind(var28)(var19, var2);
            var _closure2_slot63 = r117;
            var2 = 62;
            var2 = var17[var2];
            var22 = var15.bind(var4)(var2);
            var19 = var22.useIsSpamMessageRequest;
            var2 = var8.id;
            var74 = var19.bind(var22)(var2);
            var _closure2_slot64 = var74;
            var2 = 63;
            var2 = var17[var2];
            var17 = var15.bind(var4)(var2);
            var15 = var17.useIsMessageRequest;
            var2 = var8.id;
            var73 = var15.bind(var17)(var2);
            var _closure2_slot65 = var73;
            r121 = var5 != var9;
            if(!r121) { _fun0004_ip = 2512; continue _fun0004 }
 2494:
            var2 = var9.ready;
            if(var2) { _fun0004_ip = 2509; continue _fun0004 }
 2503:
            var2 = var9.cached;
 2509:
            r121 = var2;
 2512:
            var _closure2_slot66 = r121;
            var42 = var5 != var9;
            if(!var42) { _fun0004_ip = 2529; continue _fun0004 }
 2523:
            var42 = var9.cached;
 2529:
            var _closure2_slot67 = var42;
            r124 = var5 != var9;
            if(!r124) { _fun0004_ip = 2546; continue _fun0004 }
 2540:
            r124 = var9.ready;
 2546:
            if(!r124) { _fun0004_ip = 2558; continue _fun0004 }
 2549:
            var2 = var9.loadingMore;
            r124 = !var2;
 2558:
            var _closure2_slot68 = r124;
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
            r119 = var22.bind(var28)(var19, var2);
            var _closure2_slot69 = r119;
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
            var28 = var15.bind(var4)(var2);
            var22 = var28.useStateFromStores;
            var2 = _closure1_slot39;
            var19 = new Array(1);
            var19[0] = var2;
            var2 = function() {
                var2 = _closure1_slot39;
                var1 = var2.getCommunicationDisabledVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            r116 = var22.bind(var28)(var19, var2);
            var _closure2_slot71 = r116;
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
            var71 = var22.bind(var28)(var19, var2);
            var _closure2_slot72 = var71;
            var2 = 64;
            var2 = var17[var2];
            var17 = var15.bind(var4)(var2);
            var15 = var17.useCurrentUserCommunicationDisabled;
            var19 = var5 == var32;
            var2 = undefined;
            if(var19) { _fun0004_ip = 2774; continue _fun0004 }
 2769:
            var2 = var32.id;
 2774:
            var15 = var15.bind(var17)(var2);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var15, var31);
            var72 = var2[var7];
            var _closure2_slot73 = var72;
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
            var _closure2_slot74 = var82;
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
            var _closure2_slot75 = var22;
            var2 = var28[var3];
            var30 = var19.bind(var4)(var2);
            var29 = var30.useStateFromStores;
            var2 = _closure1_slot32;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = var3.isForumPost;
                    var1 = var1.bind(var3)();
                    var3 = !var1;
                    var1 = !var3;
                    if(var3) { _fun0012_ip = 48; continue _fun0012 }
 26:
                    var4 = _closure1_slot32;
                    var3 = var4.hasJoined;
                    var2 = _closure2_slot7;
                    var1 = var3.bind(var4)(var2);
 48:
                    return var1;
                }
            };
            r101 = var29.bind(var30)(var15, var2);
            var _closure2_slot76 = r101;
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
            var _closure2_slot77 = r100;
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
            var _closure2_slot78 = var83;
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
            var _closure2_slot79 = r103;
            var2 = 66;
            var2 = var28[var2];
            var15 = var19.bind(var4)(var2);
            var2 = var15.useMessageJumpAndroidKeyboardHeight;
            var78 = var2.bind(var15)();
            var _closure2_slot80 = var78;
            var2 = 67;
            var2 = var28[var2];
            var2 = var17.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var _closure2_slot81 = var2;
            var15 = 68;
            var15 = var28[var15];
            var29 = var19.bind(var4)(var15);
            var15 = var29.useChannelSummariesExperiment;
            var15 = var15.bind(var29)(var8);
            var _closure2_slot82 = var15;
            var29 = var28[var3];
            var36 = var19.bind(var4)(var29);
            var34 = var36.useStateFromStores;
            var29 = _closure1_slot31;
            var30 = new Array(1);
            var30[0] = var29;
            var29 = new Array(2);
            var29[0] = var15;
            var15 = var8.id;
            var29[1] = var15;
            var15 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var3 = _closure2_slot82;
                    var1 = null;
                    if(!var3) { _fun0013_ip = 39; continue _fun0013 }
 12:
                    var4 = _closure1_slot31;
                    var3 = var4.selectedSummary;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 39:
                    return var1;
                }
            };
            var51 = var34.bind(var36)(var30, var15, var29);
            var _closure2_slot83 = var51;
            var34 = _closure1_slot5;
            var30 = var34.useEffect;
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
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = _closure2_slot6;
                    var2 = var2.ready;
                    var2 = !var2;
                    if(var2) { _fun0014_ip = 34; continue _fun0014 }
 19:
                    var3 = _closure2_slot6;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var3 !== var4;
 34:
                    if(var2) { _fun0014_ip = 47; continue _fun0014 }
 37:
                    var3 = _closure2_slot6;
                    var2 = var3.hasMoreBefore;
 47:
                    if(var2) { _fun0014_ip = 60; continue _fun0014 }
 50:
                    var3 = _closure2_slot6;
                    var2 = var3.hasMoreAfter;
 60:
                    if(var2) { _fun0014_ip = 121; continue _fun0014 }
 63:
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
 121:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var30.bind(var34)(var15, var29);
            var15 = var28[var41];
            var30 = var19.bind(var4)(var15);
            var29 = var30.useShouldTrackAnnouncementMessageViews;
            var15 = {};
            var15['guild'] = var32;
            var15['channel'] = var8;
            var15['messages'] = var9;
            var15['isMessagesReady'] = r121;
            var30 = var29.bind(var30)(var15);
            var _closure2_slot84 = var30;
            var15 = 70;
            var15 = var28[var15];
            var29 = var19.bind(var4)(var15);
            var15 = var29.useShouldDisplaySpoilerObscurity;
            var48 = var15.bind(var29)(var8);
            var _closure2_slot85 = var48;
            var15 = 71;
            var15 = var28[var15];
            var29 = var19.bind(var4)(var15);
            var15 = var29.useIsAgeVerified;
            var55 = var15.bind(var29)();
            var _closure2_slot86 = var55;
            var32 = var34.useEffect;
            var29 = new Array(2);
            var29[0] = var10;
            var29[1] = var12;
            var15 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 72;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.handleChannelSelect;
                var1 = var1.bind(var2)();
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 72;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleChannelSelect;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                return var1;
            };
            var15 = var32.bind(var34)(var15, var29);
            var15 = 73;
            var15 = var28[var15];
            var32 = var19.bind(var4)(var15);
            var29 = var32.useShouldDisableInteractiveComponents;
            var15 = var8.id;
            r111 = var29.bind(var32)(var15);
            var _closure2_slot87 = r111;
            var29 = _closure1_slot26;
            var15 = var8.id;
            r110 = var29.bind(var4)(var15);
            var _closure2_slot88 = r110;
            var15 = var28[var3];
            var36 = var19.bind(var4)(var15);
            var34 = var36.useStateFromStores;
            var15 = _closure1_slot16;
            var32 = new Array(1);
            var32[0] = var15;
            var29 = new Array(1);
            var29[0] = var10;
            var15 = function() {
                var3 = _closure1_slot16;
                var2 = var3.getChannelFpInfo;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var93 = var34.bind(var36)(var32, var15, var29);
            var _closure2_slot89 = var93;
            var15 = 74;
            var15 = var28[var15];
            var15 = var17.bind(var4)(var15);
            var61 = var15.bind(var4)();
            var _closure2_slot90 = var61;
            var15 = 75;
            var15 = var28[var15];
            var15 = var17.bind(var4)(var15);
            var15 = var15.bind(var4)(var9);
            var46 = var15.unloadedContentEntryMessageIds;
            var _closure2_slot91 = var46;
            var40 = var15.unloadableContentEntryMessageIds;
            var _closure2_slot92 = var40;
            var15 = var28[var3];
            var32 = var19.bind(var4)(var15);
            var29 = var32.useStateFromStores;
            var15 = _closure1_slot49;
            var17 = new Array(1);
            var17[0] = var15;
            var15 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var2 = _closure1_slot49;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0015_ip = 37; continue _fun0015 }
 27:
                    var3 = var4.isStaff;
                    var2 = var3.bind(var4)();
 37:
                    var1 = var1 != var2;
                    if(!var1) { _fun0015_ip = 47; continue _fun0015 }
 44:
                    var1 = var2;
 47:
                    return var1;
                }
            };
            var54 = var29.bind(var32)(var17, var15);
            var _closure2_slot93 = var54;
            var15 = 76;
            var15 = var28[var15];
            var17 = var19.bind(var4)(var15);
            var15 = var17.useShouldFilterKeywords;
            var50 = var15.bind(var17)();
            var _closure2_slot94 = var50;
            var15 = var28[var3];
            var32 = var19.bind(var4)(var15);
            var29 = var32.useStateFromStores;
            var15 = _closure1_slot18;
            var17 = new Array(1);
            var17[0] = var15;
            var15 = function() {
                var2 = _closure1_slot18;
                var1 = var2.getVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var81 = var29.bind(var32)(var17, var15);
            var _closure2_slot95 = var81;
            var15 = 77;
            var15 = var28[var15];
            var17 = var19.bind(var4)(var15);
            var15 = var17.useGuildProfileInviteEmbedHoldoutEnabled;
            var17 = var15.bind(var17)(var35);
            var15 = 78;
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
            var59 = 0;
            if(var17) { _fun0004_ip = 3746; continue _fun0004 }
 3743:
            var59 = var15;
 3746:
            var _closure2_slot96 = var59;
            var43 = _closure1_slot0;
            r123 = _closure1_slot2;
            var3 = r123[var3];
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
            var _closure2_slot97 = var45;
            var66 = _closure1_slot1;
            var3 = 79;
            var3 = r123[var3];
            var19 = var66.bind(var4)(var3);
            var17 = var19.useExperiment;
            var15 = {};
            var3 = 'Messages';
            var15['location'] = var3;
            var3 = {};
            var28 = true;
            var3['autoTrackExposure'] = var28;
            var3 = var17.bind(var19)(var15, var3);
            var17 = var3.enabled;
            var _closure2_slot98 = var17;
            r122 = _closure1_slot5;
            var3 = r122.useRef;
            var29 = var3.bind(r122)(var5);
            var _closure2_slot99 = var29;
            var3 = r123[var41];
            var15 = var43.bind(var4)(var3);
            var3 = var15.useScrollState;
            var3 = var3.bind(var15)();
            var19 = _closure1_slot4;
            var3 = var19.bind(var4)(var3, var31);
            var32 = var3[var13];
            var _closure2_slot100 = var32;
            var15 = var3[var7];
            var _closure2_slot101 = var15;
            var3 = r122.useState;
            var3 = var3.bind(r122)(var5);
            var3 = var19.bind(var4)(var3, var31);
            var31 = var3[var13];
            var _closure2_slot102 = var31;
            var3 = var3[var7];
            var _closure2_slot103 = var3;
            var7 = r123[var41];
            var13 = var43.bind(var4)(var7);
            var7 = var13.useMessagesState;
            var7 = var7.bind(var13)();
            var49 = var7.shouldForceRender;
            var _closure2_slot104 = var49;
            var39 = var7.hasJumpedToOriginalPost;
            var _closure2_slot105 = var39;
            var34 = var7.setHasJumpedToOriginalPost;
            var _closure2_slot106 = var34;
            var63 = var7.setShouldForceRender;
            var _closure2_slot107 = var63;
            var19 = r122.useMemo;
            var13 = function() {
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
            var7 = new Array(0);
            var7 = var19.bind(r122)(var13, var7);
            var _closure2_slot108 = var7;
            var36 = r122.useMemo;
            var19 = function() {
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
            var13 = new Array(0);
            var19 = var36.bind(r122)(var19, var13);
            var _closure2_slot109 = var19;
            var13 = r122.useRef;
            var13 = var13.bind(r122)(var35);
            var _closure2_slot110 = var13;
            var13 = r122.useRef;
            var13 = var13.bind(r122)(var35);
            var _closure2_slot111 = var13;
            var36 = r122.useCallback;
            var35 = function(arg1) {
                var2 = arg1;
                var8 = var2.rows;
                var3 = var2.hasMoreMessagesAfter;
                var10 = var2.scrollData;
                var9 = var2.HACK_iOSForceAnimations;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 82;
                var5 = var6[var1];
                var1 = undefined;
                var12 = var7.bind(var1)(var5);
                var11 = var12.isLoadingAtTop;
                var7 = var2.rows;
                var5 = _closure2_slot111;
                var5 = var5.current;
                var11 = var11.bind(var12)(var7, var5);
                var5 = _closure1_slot1;
                var4 = 83;
                var4 = var6[var4];
                var7 = var5.bind(var1)(var4);
                var6 = var7.updateRows;
                var4 = _closure2_slot99;
                var5 = var4.current;
                var4 = {};
                var4['isLoadingAtTop'] = var11;
                var4['scrollData'] = var10;
                var4['HACK_iOSForceAnimations'] = var9;
                var4 = var6.bind(var7)(var5, var8, var4);
                var2 = _closure2_slot111;
                var2['current'] = var3;
                return var1;
            };
            var13 = new Array(0);
            var35 = var36.bind(r122)(var35, var13);
            var _closure2_slot112 = var35;
            var13 = r123[var41];
            var36 = var43.bind(var4)(var13);
            var13 = var36.useChatUpdatesQueue;
            var13 = var13.bind(var36)(var29, var35);
            var _closure2_slot113 = var13;
            var37 = r122.useCallback;
            var36 = new Array(4);
            var36[0] = var13;
            var36[1] = var35;
            var35 = var32.decelerating;
            var36[2] = var35;
            var35 = var32.dragging;
            var36[3] = var35;
            var35 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure2_slot113;
                    var2 = var2.isBlocking;
                    if(var2) { _fun0016_ip = 83; continue _fun0016 }
 19:
                    var2 = var3.isLoadingAtTop;
                    if(!var2) { _fun0016_ip = 54; continue _fun0016 }
 28:
                    var2 = _closure2_slot100;
                    var2 = var2.decelerating;
                    if(var2) { _fun0016_ip = 67; continue _fun0016 }
 41:
                    var2 = _closure2_slot100;
                    var2 = var2.dragging;
                    if(var2) { _fun0016_ip = 67; continue _fun0016 }
 54:
                    var4 = _closure2_slot112;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0016_ip = 97; continue _fun0016;
 67:
                    var4 = _closure2_slot113;
                    var2 = var4.add;
                    var2 = var2.bind(var4)(var3);
                    _fun0016_ip = 97; continue _fun0016;
 83:
                    var2 = _closure2_slot113;
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var3);
 97:
                    var1 = undefined;
                    return var1;
                }
            };
            var37 = var37.bind(r122)(var35, var36);
            var _closure2_slot114 = var37;
            var36 = r122.useCallback;
            var35 = new Array(27);
            var35[0] = var8;
            var35[1] = var9;
            var35[2] = r121;
            var35[3] = var57;
            var35[4] = var56;
            var35[5] = var53;
            var35[6] = var52;
            var35[7] = var20;
            var35[8] = var31;
            var35[9] = var61;
            var35[10] = var60;
            var35[11] = var71;
            var35[12] = var44;
            var35[13] = var48;
            var35[14] = r111;
            var35[15] = var50;
            var35[16] = var64;
            var35[17] = var38;
            var35[18] = var67;
            var35[19] = var70;
            var35[20] = var65;
            var35[21] = var51;
            var35[22] = var25;
            var35[23] = var23;
            var35[24] = var40;
            var35[25] = var7;
            var35[26] = var19;
            var19 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.forced;
                    var _closure3_slot0 = var3;
                    var3 = var1.updateMessageIds;
                    var _closure3_slot1 = var3;
                    var1 = var1.ignoreEmbedDescriptionCache;
                    var _closure3_slot2 = var1;
                    var1 = _closure2_slot1;
                    var4 = null;
                    var5 = var4 != var1;
                    var1 = null;
                    if(!var5) { _fun0017_ip = 124; continue _fun0017 }
 53:
                    var5 = _closure2_slot6;
                    var5 = var4 != var5;
                    var1 = null;
                    if(!var5) { _fun0017_ip = 124; continue _fun0017 }
 66:
                    var3 = _closure2_slot66;
                    var1 = null;
                    if(!var3) { _fun0017_ip = 124; continue _fun0017 }
 75:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 84;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var4 = var3.firstRowGenerator;
                    var3 = var4.measure;
                    var2 = function() {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                            var4 = _closure2_slot108;
                            var3 = var4.setup;
                            var2 = _closure2_slot6;
                            var2 = var3.bind(var4)(var2);
                            var4 = _closure2_slot109;
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
                            var5 = _closure2_slot102;
                            var2['animatingStickerMessageId'] = var5;
                            var5 = _closure2_slot90;
                            var2['constrainedWidth'] = var5;
                            var5 = _closure2_slot18;
                            var2['gifAutoPlay'] = var5;
                            var5 = _closure2_slot72;
                            var2['renderCommunicationDisabled'] = var5;
                            var5 = _closure3_slot2;
                            var2['ignoreEmbedDescriptionCache'] = var5;
                            var5 = _closure2_slot20;
                            var2['enableSwipeActions'] = var5;
                            var5 = _closure2_slot85;
                            var2['shouldObscureSpoiler'] = var5;
                            var5 = _closure2_slot87;
                            var2['shouldDisableInteractiveComponents'] = var5;
                            var5 = _closure2_slot94;
                            var2['shouldFilterKeywords'] = var5;
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure1_slot62;
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
                            if(!(var8 == var9)) { _fun0018_ip = 232; continue _fun0018 }
 226:
                            var8 = new Array(0);
                            _fun0018_ip = 236; continue _fun0018;
 232:
                            var8 = _closure2_slot55;
 236:
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
                            var7 = _closure2_slot83;
                            var2['selectedSummary'] = var7;
                            var7 = _closure2_slot108;
                            var2['chatManager'] = var7;
                            var7 = _closure2_slot58;
                            var2['roleStyle'] = var7;
                            var7 = _closure3_slot0;
                            var2['forced'] = var7;
                            var6 = _closure3_slot1;
                            var2['updateMessageIds'] = var6;
                            var6 = _closure2_slot4;
                            var2['isResourceChannel'] = var6;
                            var6 = _closure2_slot92;
                            var2['unloadableContentEntryMessageIds'] = var6;
                            var2 = var4.bind(var5)(var2);
                            var4 = var3.bind(var5)(var2);
                            var3 = var4.bind(var5)();
                            var2 = var3.done;
                            if(var2) { _fun0018_ip = 448; continue _fun0018 }
 398:
                            var7 = var3.value;
                            var6 = _closure2_slot109;
                            var2 = var6.generate;
                            var7 = var2.bind(var6)(var7);
                            var6 = _closure2_slot108;
                            var2 = var6.createRow;
                            var2 = var2.bind(var6)(var7);
                            var6 = var4.bind(var5)();
                            var2 = var6.done;
                            var3 = var6;
                            if(!var2) { _fun0018_ip = 398; continue _fun0018 }
 448:
                            var2 = _closure2_slot108;
                            var1 = var2.createChangeset;
                            var1 = var1.bind(var2)();
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2);
 124:
                    return var1;
                }
            };
            var65 = var36.bind(r122)(var19, var35);
            var _closure2_slot115 = var65;
            var36 = r122.useCallback;
            var35 = new Array(1);
            var35[0] = var7;
            var19 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 82;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.findMessageIndexInRows;
                var2 = _closure2_slot108;
                var1 = var2.getPreviousRows;
                var2 = var1.bind(var2)();
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var19 = var36.bind(r122)(var19, var35);
            var _closure2_slot116 = var19;
            var40 = r122.useCallback;
            var36 = new Array(2);
            var36[0] = var33;
            var36[1] = var19;
            var35 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var3 = arg1;
                    var10 = var3.scrollToMessageId;
                    var _closure3_slot0 = var10;
                    var9 = var3.jumpTargetId;
                    var1 = undefined;
                    if(!(var9 === var1)) { _fun0019_ip = 29; continue _fun0019 }
 27:
                    var9 = null;
 29:
                    var _closure3_slot1 = var9;
                    var11 = var3.jumpType;
                    if(!(var11 === var1)) { _fun0019_ip = 78; continue _fun0019 }
 43:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 86;
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.JumpTypes;
                    var11 = var4.ANIMATED;
 78:
                    var8 = var3.scrollPosition;
                    if(!(var8 === var1)) { _fun0019_ip = 123; continue _fun0019 }
 88:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 83;
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.ChatScrollPosition;
                    var8 = var4.TOP;
 123:
                    var5 = var3.minimizeScrolling;
                    if(!(var5 === var1)) { _fun0019_ip = 135; continue _fun0019 }
 133:
                    var5 = false;
 135:
                    var6 = var3.isRescrolling;
                    if(!(var6 === var1)) { _fun0019_ip = 147; continue _fun0019 }
 145:
                    var6 = false;
 147:
                    var _closure3_slot2 = var1;
                    var _closure3_slot3 = var1;
                    var4 = _closure2_slot57;
                    if(var4) { _fun0019_ip = 204; continue _fun0019 }
 165:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 86;
                    var7 = var13[var7];
                    var7 = var12.bind(var1)(var7);
                    var7 = var7.JumpTypes;
                    var7 = var7.INSTANT;
                    var4 = var11 === var7;
 204:
                    var11 = !var4;
                    _closure3_slot2 = var11;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 87;
                    var7 = var13[var7];
                    var12 = var12.bind(var1)(var7);
                    var7 = var12.isIOS;
                    var7 = var7.bind(var12)();
                    if(!var7) { _fun0019_ip = 332; continue _fun0019 }
 247:
                    if(var6) { _fun0019_ip = 332; continue _fun0019 }
 250:
                    var6 = _closure2_slot116;
                    var14 = var6.bind(var1)(var10);
                    var6 = null;
                    if(!(var6 != var14)) { _fun0019_ip = 442; continue _fun0019 }
 268:
                    var7 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var6 = 83;
                    var6 = var12[var6];
                    var13 = var7.bind(var1)(var6);
                    var12 = var13.scrollTo;
                    var6 = _closure2_slot99;
                    var7 = var6.current;
                    var6 = {};
                    var6['animated'] = var11;
                    var15 = var9 === var10;
                    var6['highlight'] = var15;
                    var6['position'] = var8;
                    var6 = var12.bind(var13)(var7, var14, var6);
                    _fun0019_ip = 442; continue _fun0019;
 332:
                    var6 = _closure2_slot116;
                    var7 = var6.bind(var1)(var10);
                    _closure3_slot3 = var7;
                    var6 = null;
                    if(!(var6 != var7)) { _fun0019_ip = 442; continue _fun0019 }
 351:
                    if(var5) { _fun0019_ip = 418; continue _fun0019 }
 354:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 83;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.scrollTo;
                    var3 = _closure2_slot99;
                    var4 = var3.current;
                    var3 = {};
                    var3['animated'] = var11;
                    var9 = var9 === var10;
                    var3['highlight'] = var9;
                    var3['position'] = var8;
                    var3 = var5.bind(var6)(var4, var7, var3);
                    _fun0019_ip = 442; continue _fun0019;
 418:
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
                        var2 = _closure2_slot99;
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
 442:
                    return var1;
                }
            };
            var40 = var40.bind(r122)(var35, var36);
            var _closure2_slot117 = var40;
            var36 = r122.useCallback;
            var35 = new Array(13);
            var35[0] = var65;
            var65 = var32.animated;
            var35[1] = var65;
            var35[2] = var13;
            var35[3] = var37;
            var35[4] = var19;
            var35[5] = var39;
            var35[6] = var40;
            var35[7] = var8;
            var35[8] = var10;
            var35[9] = var9;
            var35[10] = var51;
            var35[11] = var23;
            var35[12] = var7;
            var23 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var2 = arguments[0];
                    var1 = undefined;
                    if(!(var2 === var1)) { _fun0020_ip = 11; continue _fun0020 }
 9:
                    var2 = {};
 11:
                    var11 = var2.forced;
                    if(!(var11 === var1)) { _fun0020_ip = 23; continue _fun0020 }
 21:
                    var11 = false;
 23:
                    var9 = var2.updateMessageIds;
                    if(!(var9 === var1)) { _fun0020_ip = 61; continue _fun0020 }
 33:
                    var3 = global;
                    var3 = var3.Set;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var26 = var4;
                    var3 = new var26[var3](var25);
                    var9 = var3 instanceof Object ? var3 : var4;
 61:
                    var15 = var2.scrollToMessageId;
                    if(!(var15 === var1)) { _fun0020_ip = 73; continue _fun0020 }
 71:
                    var15 = null;
 73:
                    var14 = var2.jumpTargetId;
                    if(!(var14 === var1)) { _fun0020_ip = 85; continue _fun0020 }
 83:
                    var14 = null;
 85:
                    var17 = var2.jumpType;
                    if(!(var17 === var1)) { _fun0020_ip = 130; continue _fun0020 }
 95:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 86;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.JumpTypes;
                    var17 = var3.ANIMATED;
 130:
                    var7 = var2.focusTargetId;
                    if(!(var7 === var1)) { _fun0020_ip = 142; continue _fun0020 }
 140:
                    var7 = null;
 142:
                    var5 = var2.ignoreEmbedDescriptionCache;
                    if(!(var5 === var1)) { _fun0020_ip = 154; continue _fun0020 }
 152:
                    var5 = false;
 154:
                    var6 = var2.messagesNewlyLoaded;
                    if(!(var6 === var1)) { _fun0020_ip = 166; continue _fun0020 }
 164:
                    var6 = false;
 166:
                    var12 = var2.shouldInitialScroll;
                    if(!(var12 === var1)) { _fun0020_ip = 178; continue _fun0020 }
 176:
                    var12 = false;
 178:
                    var16 = var2.minimizeScrolling;
                    if(!(var16 === var1)) { _fun0020_ip = 190; continue _fun0020 }
 188:
                    var16 = false;
 190:
                    var8 = var2.isRescrolling;
                    if(!(var8 === var1)) { _fun0020_ip = 202; continue _fun0020 }
 200:
                    var8 = false;
 202:
                    var10 = var2.overrideScrollJumpType;
                    var2 = _closure2_slot99;
                    var2 = var2.current;
                    var13 = null;
                    if(!(var13 != var2)) { _fun0020_ip = 935; continue _fun0020 }
 229:
                    var4 = _closure2_slot115;
                    var2 = {};
                    var2['forced'] = var11;
                    var2['updateMessageIds'] = var9;
                    var2['ignoreEmbedDescriptionCache'] = var5;
                    var11 = var4.bind(var1)(var2);
                    var2 = _closure2_slot110;
                    var5 = var2.current;
                    var2 = _closure2_slot83;
                    var2 = var13 != var2;
                    var9 = undefined;
                    if(!var2) { _fun0020_ip = 328; continue _fun0020 }
 277:
                    var2 = _closure2_slot83;
                    var2 = var2.startId;
                    var9 = undefined;
                    if(!(var2 === var15)) { _fun0020_ip = 328; continue _fun0020 }
 293:
                    var4 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var2 = 83;
                    var2 = var18[var2];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.ChatScrollPosition;
                    var9 = var2.MIDDLE;
 328:
                    if(!(var13 != var11)) { _fun0020_ip = 346; continue _fun0020 }
 332:
                    var4 = var11.length;
                    var2 = 0;
                    if(!(!(var4 > var2))) { _fun0020_ip = 649; continue _fun0020 }
 346:
                    var2 = _closure2_slot110;
                    var2 = var2.current;
                    if(!var2) { _fun0020_ip = 378; continue _fun0020 }
 358:
                    var4 = _closure2_slot113;
                    var2 = var4.hasUpdates;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0020_ip = 630; continue _fun0020 }
 378:
                    var2 = _closure2_slot110;
                    var2 = var2.current;
                    if(var2) { _fun0020_ip = 453; continue _fun0020 }
 390:
                    if(!(var13 != var11)) { _fun0020_ip = 453; continue _fun0020 }
 394:
                    var4 = var11.length;
                    var2 = 0;
                    if(!(var2 === var4)) { _fun0020_ip = 453; continue _fun0020 }
 405:
                    var4 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var2 = 83;
                    var2 = var18[var2];
                    var18 = var4.bind(var1)(var2);
                    var4 = var18.fadeIn;
                    var2 = _closure2_slot99;
                    var2 = var2.current;
                    var2 = var4.bind(var18)(var2);
                    _fun0020_ip = 874; continue _fun0020;
 453:
                    if(!(var13 != var15)) { _fun0020_ip = 558; continue _fun0020 }
 457:
                    var4 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var2 = 82;
                    var2 = var18[var2];
                    var21 = var4.bind(var1)(var2);
                    var20 = var21.shouldJumpToOriginalPost;
                    var25 = _closure2_slot1;
                    var24 = _closure2_slot7;
                    var23 = _closure2_slot6;
                    var22 = _closure2_slot105;
                    var26 = var21;
                    var2 = var26[var20](var25, var24, var23, var22, var21);
                    if(var2) { _fun0020_ip = 558; continue _fun0020 }
 512:
                    var4 = _closure2_slot117;
                    var2 = {};
                    var2['scrollToMessageId'] = var15;
                    var2['jumpTargetId'] = var14;
                    var2['jumpType'] = var17;
                    var2['scrollPosition'] = var9;
                    var2['minimizeScrolling'] = var16;
                    var2['isRescrolling'] = var8;
                    var2 = var4.bind(var1)(var2);
                    _fun0020_ip = 874; continue _fun0020;
 558:
                    if(!(var13 != var7)) { _fun0020_ip = 874; continue _fun0020 }
 565:
                    var2 = _closure2_slot116;
                    var16 = var2.bind(var1)(var7);
                    if(!(var13 != var16)) { _fun0020_ip = 874; continue _fun0020 }
 581:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 83;
                    var2 = var8[var2];
                    var8 = var4.bind(var1)(var2);
                    var4 = var8.focus;
                    var2 = _closure2_slot99;
                    var2 = var2.current;
                    var2 = var4.bind(var8)(var2, var16);
                    _fun0020_ip = 874; continue _fun0020;
 630:
                    var4 = _closure2_slot113;
                    var2 = var4.tryFlush;
                    var2 = var2.bind(var4)();
                    _fun0020_ip = 874; continue _fun0020;
 649:
                    var4 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var2 = 88;
                    var2 = var16[var2];
                    var4 = var4.bind(var1)(var2);
                    var2 = {};
                    var17 = _closure2_slot108;
                    var16 = var17.getPreviousRows;
                    var16 = var16.bind(var17)();
                    var2['rows'] = var16;
                    var2['scrollToMessageId'] = var15;
                    var2['jumpTargetId'] = var14;
                    if(!(var13 == var10)) { _fun0020_ip = 717; continue _fun0020 }
 707:
                    var13 = _closure2_slot6;
                    var10 = var13.jumpType;
 717:
                    var2['jumpType'] = var10;
                    var10 = _closure2_slot110;
                    var10 = var10.current;
                    var10 = !var10;
                    if(var10) { _fun0020_ip = 740; continue _fun0020 }
 737:
                    var10 = var12;
 740:
                    var2['shouldInitialScroll'] = var10;
                    var10 = _closure2_slot100;
                    var10 = var10.animated;
                    var2['animated'] = var10;
                    var2['scrollPosition'] = var9;
                    var2['focusTargetId'] = var7;
                    var7 = var4.bind(var1)(var2);
                    var4 = _closure2_slot110;
                    var2 = true;
                    var4['current'] = var2;
                    var4 = _closure2_slot114;
                    var2 = {};
                    var2['rows'] = var11;
                    var9 = _closure2_slot6;
                    var9 = var9.hasMoreAfter;
                    var2['hasMoreMessagesAfter'] = var9;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 82;
                    var8 = var10[var8];
                    var10 = var9.bind(var1)(var8);
                    var9 = var10.isLoadingAtTop;
                    var8 = _closure2_slot111;
                    var8 = var8.current;
                    var8 = var9.bind(var10)(var11, var8);
                    var2['isLoadingAtTop'] = var8;
                    var2['scrollData'] = var7;
                    var2['HACK_iOSForceAnimations'] = var6;
                    var2 = var4.bind(var1)(var2);
 874:
                    var2 = _closure2_slot110;
                    var2 = var2.current;
                    if(!var2) { _fun0020_ip = 899; continue _fun0020 }
 886:
                    var4 = _closure2_slot110;
                    var4 = var4.current;
                    var2 = var4 !== var5;
 899:
                    if(!var2) { _fun0020_ip = 906; continue _fun0020 }
 902:
                    var2 = _closure2_slot4;
 906:
                    if(!var2) { _fun0020_ip = 935; continue _fun0020 }
 909:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 82;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.scrollToTopMessage;
                        var2 = _closure2_slot99;
                        var1 = _closure2_slot108;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var2 = 100;
                    var2 = var4.bind(var1)(var3, var2);
 935:
                    return var1;
                }
            };
            var23 = var36.bind(r122)(var23, var35);
            var _closure2_slot118 = var23;
            var37 = r122.useCallback;
            var36 = new Array(2);
            var36[0] = var19;
            var36[1] = var23;
            var35 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var6 = arguments[1];
                    var2 = arguments[2];
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0021_ip = 14; continue _fun0021 }
 12:
                    var6 = false;
 14:
                    if(!(var2 === var1)) { _fun0021_ip = 53; continue _fun0021 }
 18:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 86;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.JumpTypes;
                    var2 = var3.INSTANT;
 53:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 82;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.maybeRescrollToMessageId;
                    var3 = {};
                    var8 = _closure2_slot99;
                    var3['chatRef'] = var8;
                    var8 = _closure2_slot116;
                    var3['findMessageIndex'] = var8;
                    var7 = _closure2_slot118;
                    var3['updateRows'] = var7;
                    var3['updateRowsEnabled'] = var6;
                    var3['jumpType'] = var2;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                }
            };
            var37 = var37.bind(r122)(var35, var36);
            var _closure2_slot119 = var37;
            var65 = r122.useCallback;
            var36 = new Array(5);
            var36[0] = var10;
            var36[1] = var18;
            var36[2] = var15;
            var36[3] = var3;
            var36[4] = var7;
            var35 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 82;
                var2 = var2[var1];
                var1 = undefined;
                var8 = var3.bind(var1)(var2);
                var7 = var8.clearRows;
                var13 = _closure2_slot99;
                var12 = _closure2_slot108;
                var11 = _closure2_slot7;
                var10 = _closure2_slot2;
                var9 = function(arg1) {
                    var4 = _closure2_slot101;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot103;
                    var3 = null;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot110;
                    var2 = false;
                    var3['current'] = var2;
                    return var1;
                };
                var14 = var8;
                var2 = var14[var7](var13, var12, var11, var10, var9, var8);
                return var1;
            };
            var36 = var65.bind(r122)(var35, var36);
            var _closure2_slot120 = var36;
            r125 = r122.useCallback;
            var65 = new Array(2);
            var65[0] = var7;
            var65[1] = var10;
            var35 = function(arg1) {
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
                var5 = _closure2_slot108;
                var1['chatManager'] = var5;
                var4 = _closure2_slot7;
                var1['channelId'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var35 = r125.bind(r122)(var35, var65);
            var _closure2_slot121 = var35;
            r125 = r122.useCallback;
            var65 = new Array(5);
            var65[0] = var10;
            var65[1] = var14;
            var65[2] = var9;
            var65[3] = var64;
            var65[4] = var22;
            var22 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var1 = {};
                    var2 = function getMessage(arg1) {
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 89;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.find;
                        var5 = _closure2_slot6;
                        var2 = var5.toArray;
                        var2 = var2.bind(var5)();
                        var1 = function(arg1) {
                            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                                var1 = arg1;
                                var4 = var1.id;
                                var3 = var1.nonce;
                                var1 = _closure4_slot0;
                                var1 = var4 === var1;
                                if(var1) { _fun0023_ip = 36; continue _fun0023 }
 28:
                                var2 = _closure4_slot0;
                                var1 = var3 === var2;
 36:
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
                    var2 = _closure2_slot55;
                    var4 = null;
                    if(!(var4 == var2)) { _fun0022_ip = 68; continue _fun0022 }
 62:
                    var2 = new Array(0);
                    _fun0022_ip = 72; continue _fun0022;
 68:
                    var2 = _closure2_slot55;
 72:
                    var1['uploads'] = var2;
                    var2 = _closure2_slot75;
                    var2 = var4 != var2;
                    if(!var2) { _fun0022_ip = 92; continue _fun0022 }
 88:
                    var2 = _closure2_slot75;
 92:
                    var1['paymentsBlocked'] = var2;
                    return var1;
                }
            };
            var22 = r125.bind(r122)(var22, var65);
            var _closure2_slot122 = var22;
            r125 = r122.useMemo;
            var65 = new Array(1);
            var65[0] = var22;
            var22 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 90;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.MessagesHandlers;
                var4 = _closure2_slot122;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var22 = r125.bind(r122)(var22, var65);
            var _closure2_slot123 = var22;
            r125 = r122.useCallback;
            var65 = new Array(7);
            var65[0] = r126;
            var65[1] = var8;
            var65[2] = var9;
            var65[3] = var13;
            var65[4] = var32;
            var65[5] = var10;
            var65[6] = var15;
            var13 = function(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    var1 = arg1;
                    var6 = var1.isAtBottom;
                    var9 = var1.isNearBottom;
                    var4 = undefined;
                    if(!(var9 === var4)) { _fun0024_ip = 25; continue _fun0024 }
 23:
                    var9 = false;
 25:
                    var10 = var1.isNearTop;
                    if(!(var10 === var4)) { _fun0024_ip = 37; continue _fun0024 }
 35:
                    var10 = false;
 37:
                    var12 = var1.dragging;
                    if(!(var12 === var4)) { _fun0024_ip = 49; continue _fun0024 }
 47:
                    var12 = false;
 49:
                    var13 = var1.decelerating;
                    if(!(var13 === var4)) { _fun0024_ip = 61; continue _fun0024 }
 59:
                    var13 = false;
 61:
                    var5 = var1.isFirstMessageVisible;
                    if(!(var5 === var4)) { _fun0024_ip = 73; continue _fun0024 }
 71:
                    var5 = false;
 73:
                    var2 = _closure2_slot0;
                    var3 = var2.onScroll;
                    var8 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var8)) { _fun0024_ip = 460; continue _fun0024 }
 99:
                    var8 = _closure2_slot6;
                    var8 = var8.length;
                    var11 = 0;
                    if(!(var11 === var8)) { _fun0024_ip = 130; continue _fun0024 }
 114:
                    var8 = _closure2_slot6;
                    var8 = var8.loadingMore;
                    if(var8) { _fun0024_ip = 460; continue _fun0024 }
 130:
                    var8 = _closure2_slot6;
                    var8 = var8.loadingMore;
                    var8 = !var8;
                    if(!var8) { _fun0024_ip = 155; continue _fun0024 }
 146:
                    if(var12) { _fun0024_ip = 152; continue _fun0024 }
 149:
                    var12 = var13;
 152:
                    var8 = var12;
 155:
                    if(!var8) { _fun0024_ip = 175; continue _fun0024 }
 158:
                    var13 = _closure2_slot113;
                    var12 = var13.hasUpdates;
                    var12 = var12.bind(var13)();
                    var8 = !var12;
 175:
                    var12 = _closure2_slot100;
                    var12 = var12.isNearTop;
                    if(var12) { _fun0024_ip = 263; continue _fun0024 }
 188:
                    if(!var10) { _fun0024_ip = 263; continue _fun0024 }
 191:
                    var10 = _closure2_slot6;
                    var10 = var10.hasMoreBefore;
                    if(!var10) { _fun0024_ip = 263; continue _fun0024 }
 204:
                    if(!var8) { _fun0024_ip = 263; continue _fun0024 }
 207:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var10 = 82;
                    var10 = var13[var10];
                    var15 = var12.bind(var4)(var10);
                    var14 = var15.loadMoreBefore;
                    var13 = _closure2_slot7;
                    var12 = _closure2_slot6;
                    var10 = function(arg1) {
                        var3 = _closure2_slot101;
                        var2 = {};
                        var1 = arg1;
                        var2['animated'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var10 = var14.bind(var15)(var13, var12, var10);
                    _fun0024_ip = 426; continue _fun0024;
 263:
                    var10 = _closure2_slot100;
                    var10 = var10.isNearBottom;
                    if(var10) { _fun0024_ip = 348; continue _fun0024 }
 276:
                    if(!var9) { _fun0024_ip = 348; continue _fun0024 }
 279:
                    var9 = _closure2_slot6;
                    var9 = var9.hasMoreAfter;
                    if(!var9) { _fun0024_ip = 348; continue _fun0024 }
 292:
                    if(!var8) { _fun0024_ip = 348; continue _fun0024 }
 295:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 82;
                    var8 = var10[var8];
                    var12 = var9.bind(var4)(var8);
                    var10 = var12.loadMoreAfter;
                    var9 = _closure2_slot7;
                    var8 = _closure2_slot6;
                    var7 = function(arg1) {
                        var3 = _closure2_slot101;
                        var2 = {};
                        var1 = arg1;
                        var2['animated'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var7 = var10.bind(var12)(var9, var8, var7);
                    _fun0024_ip = 426; continue _fun0024;
 348:
                    var7 = _closure2_slot100;
                    var7 = var7.isAtBottom;
                    if(!(var7 !== var6)) { _fun0024_ip = 426; continue _fun0024 }
 362:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 69;
                    var7 = var9[var7];
                    var10 = var8.bind(var4)(var7);
                    var9 = var10.updateChannelDimensions;
                    var7 = _closure2_slot1;
                    var8 = var7.id;
                    var7 = 0;
                    if(!var6) { _fun0024_ip = 408; continue _fun0024 }
 405:
                    var7 = 1;
 408:
                    var17 = 1;
                    var20 = var10;
                    var19 = var8;
                    var18 = var7;
                    var16 = 0;
                    var6 = var20[var9](var19, var18, var17, var16, var15);
 426:
                    if(!(var2 != var3)) { _fun0024_ip = 442; continue _fun0024 }
 430:
                    var2 = {};
                    var2['isFirstMessageVisible'] = var5;
                    var2 = var3.bind(var4)(var2);
 442:
                    var2 = _closure2_slot113;
                    var1 = var2.tryFlush;
                    var1 = var1.bind(var2)();
                    var1 = true;
                    return var1;
 460:
                    var1 = false;
                    return var1;
                }
            };
            var13 = r125.bind(r122)(var13, var65);
            var _closure2_slot124 = var13;
            r125 = r122.useCallback;
            var65 = new Array(12);
            var65[0] = var29;
            var65[1] = var10;
            var65[2] = var30;
            var65[3] = var12;
            var65[4] = var8;
            var65[5] = var9;
            var65[6] = var15;
            var65[7] = var54;
            var65[8] = var18;
            var65[9] = var24;
            var65[10] = var7;
            var65[11] = var13;
            var24 = function(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
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
                    var1 = 91;
                    var7 = var7[var1];
                    var1 = undefined;
                    var16 = var13.bind(var1)(var7);
                    var14 = var16.getChangesetIdForChat;
                    var13 = _closure2_slot99;
                    var13 = var13.current;
                    var19 = var14.bind(var16)(var13);
                    if(!(var20 !== var19)) { _fun0025_ip = 180; continue _fun0025 }
 132:
                    var13 = _closure2_slot93;
                    if(!var13) { _fun0025_ip = 410; continue _fun0025 }
 142:
                    var17 = _closure1_slot61;
                    var16 = var17.log;
                    var23 = _closure2_slot7;
                    var24 = 'STAFF-ACK-LOG: Ignoring outdated scroll event.';
                    var25 = var17;
                    var22 = var20;
                    var21 = var19;
                    var13 = var25[var16](var24, var23, var22, var21, var20);
                    _fun0025_ip = 410; continue _fun0025;
 180:
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
                    var15 = 92;
                    var15 = var17[var15];
                    var15 = var16.bind(var1)(var15);
                    var15 = var15.QuestsVisibleMessagesChangedSource;
                    var15 = var15.SCROLL;
                    var3['source'] = var15;
                    var15 = _closure2_slot108;
                    var3['chatManager'] = var15;
                    var15 = _closure2_slot84;
                    var3['shouldTrackAnnouncementMessageViews'] = var15;
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
                        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                            var3 = arg1;
                            var9 = var3.isAtBottom;
                            var8 = var3.isNearBottom;
                            var1 = undefined;
                            if(!(var8 === var1)) { _fun0026_ip = 25; continue _fun0026 }
 23:
                            var8 = false;
 25:
                            var7 = var3.isNearTop;
                            if(!(var7 === var1)) { _fun0026_ip = 37; continue _fun0026 }
 35:
                            var7 = false;
 37:
                            var6 = var3.dragging;
                            if(!(var6 === var1)) { _fun0026_ip = 49; continue _fun0026 }
 47:
                            var6 = false;
 49:
                            var5 = var3.decelerating;
                            if(!(var5 === var1)) { _fun0026_ip = 61; continue _fun0026 }
 59:
                            var5 = false;
 61:
                            var4 = var3.shouldShowJumpToPresent;
                            if(!(var4 === var1)) { _fun0026_ip = 73; continue _fun0026 }
 71:
                            var4 = false;
 73:
                            var _closure4_slot0 = var4;
                            var11 = var3.isFirstMessageVisible;
                            if(!(var11 === var1)) { _fun0026_ip = 89; continue _fun0026 }
 87:
                            var11 = false;
 89:
                            var10 = _closure2_slot124;
                            var4 = {};
                            var4['isAtBottom'] = var9;
                            var4['isNearBottom'] = var8;
                            var4['isNearTop'] = var7;
                            var4['dragging'] = var6;
                            var4['decelerating'] = var5;
                            var4['isFirstMessageVisible'] = var11;
                            var4 = var10.bind(var1)(var4);
                            if(!var4) { _fun0026_ip = 213; continue _fun0026 }
 136:
                            var4 = _closure2_slot101;
                            var3 = {};
                            var3['isAtBottom'] = var9;
                            var3['isNearBottom'] = var8;
                            var3['isNearTop'] = var7;
                            var3['dragging'] = var6;
                            var3['decelerating'] = var5;
                            var3 = var4.bind(var1)(var3);
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 93;
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.batchUpdates;
                            var2 = function() {
                                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                                    var5 = _closure1_slot13;
                                    var4 = _closure2_slot7;
                                    var3 = _closure2_slot2;
                                    var2 = _closure4_slot0;
                                    if(var2) { _fun0027_ip = 38; continue _fun0027 }
 28:
                                    var1 = _closure2_slot6;
                                    var2 = var1.hasMoreAfter;
 38:
                                    var1 = undefined;
                                    var2 = var5.bind(var1)(var4, var3, var2);
                                    return var1;
                                }
                            };
                            var2 = var3.bind(var4)(var2);
 213:
                            return var1;
                        }
                    };
                    var2 = var2.bind(var1)(var3);
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0025_ip = 410; continue _fun0025 }
 364:
                    var4 = _closure2_slot5;
                    var3 = var4.handleScrollPosition;
                    var2 = {};
                    var8 = _closure2_slot108;
                    var7 = var8.getPreviousRows;
                    var7 = var7.bind(var8)();
                    var2['rows'] = var7;
                    var2['firstVisibleMessageRowIndex'] = var6;
                    var2['lastVisibleMessageRowIndex'] = var5;
                    var2 = var3.bind(var4)(var2);
 410:
                    return var1;
                }
            };
            var24 = r125.bind(r122)(var24, var65);
            r125 = r122.useMemo;
            var65 = new Array(2);
            var65[0] = var17;
            var65[1] = var22;
            var17 = function() {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                    var1 = {};
                    var3 = function handleTapImage(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapImage;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapImage'] = var3;
                    var3 = function handleTapChannel(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapChannel;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapChannel'] = var3;
                    var3 = function handleLongPressChannel(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleLongPressChannel;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleLongPressChannel'] = var3;
                    var3 = function handleTapAttachmentLink(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapAttachmentLink;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapAttachmentLink'] = var3;
                    var3 = function handleLongPressAttachmentLink(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleLongPressAttachmentLink;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleLongPressAttachmentLink'] = var3;
                    var3 = function handleTapCall(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapCall;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapCall'] = var3;
                    var3 = function handleTapMention(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapMention;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapMention'] = var3;
                    var3 = function handleTapCommandMention(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapCommandMention;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapCommandMention'] = var3;
                    var3 = function handleLongPressCommandMention(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleLongPressCommandMention;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleLongPressCommandMention'] = var3;
                    var3 = function handleTapLink(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapLink;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapLink'] = var3;
                    var3 = function handleLongPressLink(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleLongPressLink;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleLongPressLink'] = var3;
                    var3 = function handleTapReaction(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapReaction;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapReaction'] = var3;
                    var3 = function handleLongPressReaction(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleLongPressReaction;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleLongPressReaction'] = var3;
                    var3 = function handleOpenSticker(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleOpenSticker;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleOpenSticker'] = var3;
                    var3 = function handleTapAvatar(arg1) {
                        var4 = _closure2_slot123;
                        var3 = var4.handleOpenProfile;
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 94;
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
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapUsername;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapUsername'] = var3;
                    var3 = function handleLongPressUsername(arg1) {
                        var4 = _closure2_slot123;
                        var3 = var4.handleOpenProfile;
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 94;
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
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapThreadEmbed;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapThreadEmbed'] = var3;
                    var3 = function handleTapReply(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapReply;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapReply'] = var3;
                    var3 = function handleTapSummary(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapSummary;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapSummary'] = var3;
                    var3 = function handleTapSummaryJump(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapSummaryJump;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapSummaryJump'] = var3;
                    var3 = function handleLongPressMessage(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleLongPressMessage;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleLongPressMessage'] = var3;
                    var3 = function handleInitiateReply(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleInitiateReply;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleInitiateReply'] = var3;
                    var3 = function handleInitiateEdit(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleInitiateEdit;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleInitiateEdit'] = var3;
                    var3 = function handleInitiateThread(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleInitiateThread;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleInitiateThread'] = var3;
                    var3 = function handleTapMessage(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapMessage;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapMessage'] = var3;
                    var4 = _closure2_slot98;
                    var3 = undefined;
                    if(!var4) { _fun0028_ip = 335; continue _fun0028 }
 328:
                    var3 = function(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleDoubleTapMessage;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
 335:
                    var1['handleDoubleTapMessage'] = var3;
                    var3 = function handleTapCancelUploadItem(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapCancelUploadItem;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapCancelUploadItem'] = var3;
                    var3 = function handleTapInviteEmbedAccept(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapInviteEmbedAccept;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapInviteEmbedAccept'] = var3;
                    var3 = function handleTapInviteEmbed(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapInviteEmbed;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapInviteEmbed'] = var3;
                    var3 = function handleTapJoinActivity(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapJoinActivity;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapJoinActivity'] = var3;
                    var3 = function handleTapJoinRichPresence(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapJoinRichPresence;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapJoinRichPresence'] = var3;
                    var3 = function handleTapGiftCodeEmbed(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapGiftCodeEmbed;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapGiftCodeEmbed'] = var3;
                    var3 = function handleTapGiftCodeAccept(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapGiftCodeAccept;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapGiftCodeAccept'] = var3;
                    var3 = function handleTapReferralRedeem(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapReferralRedeem;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapReferralRedeem'] = var3;
                    var3 = function handleTapEmoji(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapEmoji;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapEmoji'] = var3;
                    var3 = function handleTapTimestamp(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapTimestamp;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapTimestamp'] = var3;
                    var3 = function handleTapInlineCode(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapInlineCode;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapInlineCode'] = var3;
                    var3 = function handleTapRoleIcon(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapRoleIcon;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapRoleIcon'] = var3;
                    var3 = function handleTapGameIcon(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapGameIcon;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapGameIcon'] = var3;
                    var3 = function handleTapSuppressNotificationsIcon(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapSuppressNotificationsIcon;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapSuppressNotificationsIcon'] = var3;
                    var3 = function handleTapConnectionsRoleTag(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapConnectionsRoleTag;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapConnectionsRoleTag'] = var3;
                    var3 = function handleTapTimeoutIcon() {
                        var2 = _closure2_slot123;
                        var1 = var2.handleTapTimeoutIcon;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var1['handleTapTimeoutIcon'] = var3;
                    var3 = function handleTapButtonActionComponent(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapButtonActionComponent;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapButtonActionComponent'] = var3;
                    var3 = function handleTapSelectActionComponent(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapSelectActionComponent;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapSelectActionComponent'] = var3;
                    var3 = function handleTapWelcomeReply(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapWelcomeReply;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapWelcomeReply'] = var3;
                    var3 = function handleTapInviteToSpeak(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapInviteToSpeak;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapInviteToSpeak'] = var3;
                    var3 = function handleTapAutoModerationActions(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapAutoModerationActions;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapAutoModerationActions'] = var3;
                    var3 = function handleTapAutoModerationFeedback(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapAutoModerationFeedback;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapAutoModerationFeedback'] = var3;
                    var3 = function handleTapFollowForumPost(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapFollowForumPost;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapFollowForumPost'] = var3;
                    var3 = function handleTapShareForumPost(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapShareForumPost;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapShareForumPost'] = var3;
                    var3 = function handleTapReactionOverflow(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapReactionOverflow;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapReactionOverflow'] = var3;
                    var3 = function handleCopyText(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleCopyText;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleCopyText'] = var3;
                    var3 = function handleTapOpTag(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapOpTag;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapOpTag'] = var3;
                    var3 = function handleTapTag(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapTag;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapTag'] = var3;
                    var3 = function handleTapRemix(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapRemix;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapRemix'] = var3;
                    var3 = function handleMediaAttachmentPlaybackStarted(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleMediaAttachmentPlaybackStarted;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleMediaAttachmentPlaybackStarted'] = var3;
                    var3 = function handleMediaAttachmentPlaybackEnded(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleMediaAttachmentPlaybackEnded;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleMediaAttachmentPlaybackEnded'] = var3;
                    var3 = function handlerVoiceMessagePlaybackFailed(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleVoiceMessagePlaybackFailed;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handlerVoiceMessagePlaybackFailed'] = var3;
                    var3 = function handleTapPostPreviewEmbed(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapPostPreviewEmbed;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapPostPreviewEmbed'] = var3;
                    var3 = function handleTapDismissMediaPostSharePrompt(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapDismissMediaPostSharePrompt;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapDismissMediaPostSharePrompt'] = var3;
                    var3 = function handleTapChannelPromptButton(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapChannelPromptButton;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapChannelPromptButton'] = var3;
                    var3 = function handleTapObscuredMediaLearnMore(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapObscuredMediaLearnMore;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapObscuredMediaLearnMore'] = var3;
                    var3 = function handleTapObscuredMediaToggle(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.onTapObscuredMediaToggle;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapObscuredMediaToggle'] = var3;
                    var3 = function handleTapSafetyPolicyNoticeEmbed(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapSafetyPolicyNoticeEmbed;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapSafetyPolicyNoticeEmbed'] = var3;
                    var3 = function handleTapSafetySystemNotificationCta(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapSafetySystemNotificationCta;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapSafetySystemNotificationCta'] = var3;
                    var3 = function handleTapPollAnswer(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapPollAnswer;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapPollAnswer'] = var3;
                    var3 = function handleTapPollSubmitVote(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapPollSubmitVote;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapPollSubmitVote'] = var3;
                    var3 = function handleTapPollAction(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapPollAction;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapPollAction'] = var3;
                    var3 = function handleLongPressPollImage(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleLongPressPollImage;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleLongPressPollImage'] = var3;
                    var3 = function handleTapCtaButton(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapCtaButton;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapCtaButton'] = var3;
                    var3 = function handleMessageAccessibilityAction(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleMessageAccessibilityAction;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleMessageAccessibilityAction'] = var3;
                    var3 = function handleTapForwardFooter(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapForwardFooter;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapForwardFooter'] = var3;
                    var3 = function handleTapInlineForward(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapInlineForward;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapInlineForward'] = var3;
                    var3 = function handleTapClanTagChiplet(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapClanTagChiplet;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapClanTagChiplet'] = var3;
                    var3 = function handleTapContentInventoryEntryEmbed(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapContentInventoryEntryEmbed;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapContentInventoryEntryEmbed'] = var3;
                    var3 = function handleTapSoundmoji(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapSoundmoji;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapSoundmoji'] = var3;
                    var2 = function handleTapAppMessageEmbed(arg1) {
                        var3 = _closure2_slot123;
                        var2 = var3.handleTapAppMessageEmbed;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['handleTapAppMessageEmbed'] = var2;
                    return var1;
                }
            };
            var17 = r125.bind(r122)(var17, var65);
            r125 = r122.useCallback;
            var65 = new Array(4);
            var65[0] = var22;
            var65[1] = var10;
            var65[2] = var9;
            var65[3] = var15;
            var22 = function(arg1) {
                var5 = _closure2_slot123;
                var4 = var5.handleTapSeparator;
                var3 = arg1;
                var2 = function() {
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
                        var3 = _closure2_slot101;
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
                    var1 = 82;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.loadMoreAfter;
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot6;
                    var1 = function(arg1) {
                        var3 = _closure2_slot101;
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
            var22 = r125.bind(r122)(var22, var65);
            var41 = r123[var41];
            var65 = var43.bind(var4)(var41);
            var43 = var65.useMessagesLifecycle;
            var41 = {};
            var41['messages'] = var9;
            var41['isMessagesReady'] = r121;
            var41['oldestUnreadMessageId'] = var38;
            var41['channelId'] = var10;
            var41['screenIndex'] = var18;
            var41['updateRows'] = var23;
            var41['scrollToMessageId'] = var40;
            var41 = var43.bind(var65)(var41);
            var65 = r122.useMemo;
            var43 = new Array(78);
            var43[0] = r120;
            var43[1] = r119;
            var43[2] = r116;
            var43[3] = r115;
            var43[4] = r112;
            var43[5] = var81;
            var43[6] = r117;
            var43[7] = r101;
            var43[8] = r100;
            var43[9] = r111;
            var43[10] = var69;
            var43[11] = var77;
            var43[12] = var68;
            var43[13] = var80;
            var43[14] = var67;
            var43[15] = var38;
            var43[16] = var74;
            var43[17] = var73;
            var43[18] = var72;
            var43[19] = var78;
            var43[20] = var71;
            var43[21] = var59;
            var43[22] = r103;
            var43[23] = var49;
            var43[24] = var42;
            var43[25] = var57;
            var43[26] = var56;
            var43[27] = var53;
            var43[28] = var52;
            var43[29] = var20;
            var43[30] = var62;
            var43[31] = var60;
            var43[32] = var61;
            var43[33] = var58;
            var43[34] = var82;
            var43[35] = var25;
            var43[36] = var79;
            var43[37] = var83;
            var43[38] = var51;
            var43[39] = var48;
            var43[40] = var50;
            var43[41] = var93;
            var43[42] = var54;
            var43[43] = var55;
            var43[44] = var47;
            var43[45] = r109;
            var43[46] = r108;
            var43[47] = r107;
            var43[48] = r106;
            var43[49] = r105;
            var43[50] = var95;
            var43[51] = var98;
            var43[52] = var97;
            var43[53] = var96;
            var43[54] = r104;
            var43[55] = var100;
            var43[56] = var99;
            var43[57] = var88;
            var43[58] = var87;
            var43[59] = var86;
            var43[60] = var94;
            var43[61] = var92;
            var43[62] = var91;
            var43[63] = var90;
            var43[64] = var89;
            var43[65] = var76;
            var43[66] = var75;
            var43[67] = r118;
            var43[68] = r110;
            var43[69] = var46;
            var43[70] = r114;
            var43[71] = r113;
            var43[72] = var85;
            var43[73] = var84;
            var43[74] = r102;
            var43[75] = var64;
            var43[76] = var45;
            var43[77] = var44;
            var41 = function() {
                var1 = {};
                var3 = _closure2_slot59;
                var1['channelThreadsVersion'] = var3;
                var3 = _closure2_slot69;
                var1['rsvpVersion'] = var3;
                var3 = _closure2_slot71;
                var1['communicationDisabledVersion'] = var3;
                var3 = _closure2_slot70;
                var1['failedMessagesVersion'] = var3;
                var3 = _closure2_slot62;
                var1['interactionComponentStatesVersion'] = var3;
                var3 = _closure2_slot95;
                var1['forwardGuildsVersion'] = var3;
                var3 = _closure2_slot63;
                var1['hasLoadedExperiments'] = var3;
                var3 = _closure2_slot76;
                var1['isFollowingForumPost'] = var3;
                var3 = _closure2_slot77;
                var1['showMediaPostSharePrompt'] = var3;
                var3 = _closure2_slot87;
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
                var3 = _closure2_slot64;
                var1['isSpamMessageRequest'] = var3;
                var3 = _closure2_slot65;
                var1['isMessageRequest'] = var3;
                var3 = _closure2_slot73;
                var1['currentUserCommunicationDisabled'] = var3;
                var3 = _closure2_slot80;
                var1['androidKeyboardHeight'] = var3;
                var3 = _closure2_slot72;
                var1['renderCommunicationDisabled'] = var3;
                var3 = _closure2_slot96;
                var1['guildInviteColorsFetched'] = var3;
                var3 = _closure2_slot79;
                var1['lazyCacheStatus'] = var3;
                var3 = _closure2_slot104;
                var1['shouldForceRender'] = var3;
                var3 = _closure2_slot67;
                var1['isMessagesCached'] = var3;
                var3 = _closure2_slot97;
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
                var3 = _closure2_slot90;
                var1['containerWidth'] = var3;
                var3 = _closure2_slot10;
                var1['guildSystemChannelFlags'] = var3;
                var3 = _closure2_slot74;
                var1['userSettingsLocale'] = var3;
                var3 = _closure2_slot58;
                var1['roleStyle'] = var3;
                var3 = _closure2_slot47;
                var1['canSendMessages'] = var3;
                var3 = _closure2_slot78;
                var1['showPushFeedback'] = var3;
                var3 = _closure2_slot83;
                var1['selectedSummary'] = var3;
                var3 = _closure2_slot85;
                var1['shouldObscureSpoiler'] = var3;
                var3 = _closure2_slot94;
                var1['shouldFilterKeywords'] = var3;
                var3 = _closure2_slot89;
                var1['explicitMediaFalsePositiveInfo'] = var3;
                var3 = _closure2_slot93;
                var1['isStaff'] = var3;
                var3 = _closure2_slot86;
                var1['isAgeVerified'] = var3;
                var3 = _closure2_slot19;
                var1['theme'] = var3;
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
                var3 = _closure2_slot34;
                var1['mediaPostPreviewEmbeds'] = var3;
                var3 = _closure2_slot35;
                var1['guildTemplates'] = var3;
                var3 = _closure2_slot36;
                var1['buildOverrides'] = var3;
                var3 = _closure2_slot37;
                var1['quests'] = var3;
                var3 = _closure2_slot38;
                var1['isFetchingCurrentQuests'] = var3;
                var3 = _closure2_slot33;
                var1['applications'] = var3;
                var3 = _closure2_slot23;
                var1['invites'] = var3;
                var3 = _closure2_slot56;
                var1['repliedIds'] = var3;
                var3 = _closure2_slot88;
                var1['channelPolls'] = var3;
                var3 = _closure2_slot91;
                var1['unloadedContentEntryMessageIds'] = var3;
                var3 = _closure2_slot60;
                var1['interactionStates'] = var3;
                var3 = _closure2_slot61;
                var1['interactionComponentStates'] = var3;
                var3 = _closure2_slot41;
                var1['trialOffer'] = var3;
                var3 = _closure2_slot42;
                var1['isPremiumTier2User'] = var3;
                var3 = _closure2_slot50;
                var1['threadStartingReferenceMessage'] = var3;
                var2 = _closure2_slot55;
                var1['uploads'] = var2;
                return var1;
            };
            var43 = var65.bind(r122)(var41, var43);
            var65 = 95;
            var41 = r123[var65];
            var41 = var66.bind(var4)(var41);
            var43 = var41.bind(var4)(var43);
            var _closure2_slot125 = var43;
            var41 = r123[var65];
            var41 = var66.bind(var4)(var41);
            r122 = var41.bind(var4)(var10);
            var _closure2_slot126 = r122;
            var41 = r123[var65];
            var41 = var66.bind(var4)(var41);
            var41 = var41.bind(var4)(r124);
            var _closure2_slot127 = var41;
            var65 = r123[var65];
            var65 = var66.bind(var4)(var65);
            var65 = var65.bind(var4)(var9);
            var _closure2_slot128 = var65;
            var66 = r121;
            if(!var66) { _fun0004_ip = 5334; continue _fun0004 }
 5331:
            var66 = !var42;
 5334:
            if(!var66) { _fun0004_ip = 5355; continue _fun0004 }
 5337:
            r123 = var5 == var43;
            var42 = undefined;
            if(r123) { _fun0004_ip = 5352; continue _fun0004 }
 5346:
            var42 = var43.isMessagesCached;
 5352:
            var66 = var42;
 5355:
            var _closure2_slot129 = var66;
            var42 = _closure1_slot5;
            r125 = var42.useEffect;
            r123 = new Array(3);
            r123[0] = var10;
            r123[1] = r122;
            r123[2] = var36;
            r122 = function() {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                    var3 = _closure2_slot126;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0029_ip = 28; continue _fun0029 }
 16:
                    var4 = _closure2_slot126;
                    var3 = _closure2_slot7;
                    var2 = var4 !== var3;
 28:
                    if(!var2) { _fun0029_ip = 79; continue _fun0029 }
 31:
                    var2 = _closure2_slot120;
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
 79:
                    var1 = undefined;
                    return var1;
                }
            };
            r122 = r125.bind(var42)(r122, r123);
            r123 = var42.useEffect;
            r122 = new Array(3);
            r122[0] = r124;
            r122[1] = var41;
            r122[2] = var15;
            var41 = function() {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                    var2 = _closure2_slot127;
                    var2 = !var2;
                    if(!var2) { _fun0030_ip = 17; continue _fun0030 }
 13:
                    var2 = _closure2_slot68;
 17:
                    if(!var2) { _fun0030_ip = 40; continue _fun0030 }
 20:
                    var3 = _closure2_slot101;
                    var2 = {};
                    var1 = false;
                    var2['hasHandledScroll'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 40:
                    var1 = undefined;
                    return var1;
                }
            };
            var41 = r123.bind(var42)(var41, r122);
            r122 = var42.useEffect;
            var41 = new Array(8);
            var41[0] = var8;
            var41[1] = var10;
            var41[2] = var9;
            var41[3] = var39;
            var41[4] = var33;
            var41[5] = var65;
            var41[6] = r121;
            var41[7] = var34;
            var34 = function() {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
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
                    var11 = _closure2_slot105;
                    var15 = var10;
                    var4 = var15[var9](var14, var13, var12, var11, var10);
                    if(!var4) { _fun0031_ip = 163; continue _fun0031 }
 60:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.scrollToTop;
                    var5 = _closure2_slot99;
                    var4 = _closure2_slot57;
                    var3 = false;
                    var3 = var6.bind(var7)(var5, var4, var3);
                    var3 = _closure2_slot128;
                    var5 = null;
                    var3 = var5 == var3;
                    var4 = undefined;
                    if(var3) { _fun0031_ip = 125; continue _fun0031 }
 115:
                    var3 = _closure2_slot128;
                    var4 = var3.jumpSequenceId;
 125:
                    var3 = _closure2_slot6;
                    var5 = var5 == var3;
                    var3 = undefined;
                    if(var5) { _fun0031_ip = 148; continue _fun0031 }
 138:
                    var5 = _closure2_slot6;
                    var3 = var5.jumpSequenceId;
 148:
                    if(!(var4 === var3)) { _fun0031_ip = 163; continue _fun0031 }
 152:
                    var3 = _closure2_slot106;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
 163:
                    return var1;
                }
            };
            var34 = r122.bind(var42)(var34, var41);
            var41 = var42.useEffect;
            var34 = new Array(166);
            var34[0] = r121;
            var34[1] = var9;
            var34[2] = r120;
            var34[3] = r119;
            var34[4] = r118;
            var34[5] = r117;
            var34[6] = r116;
            var34[7] = r115;
            var34[8] = r114;
            var34[9] = r113;
            var34[10] = r112;
            var34[11] = r111;
            var34[12] = r110;
            var34[13] = r109;
            var34[14] = r108;
            var34[15] = r107;
            var34[16] = r106;
            var34[17] = r105;
            var34[18] = r104;
            var34[19] = r103;
            var34[20] = r102;
            var34[21] = r101;
            var34[22] = r100;
            var34[23] = var100;
            var34[24] = var99;
            var34[25] = var98;
            var34[26] = var97;
            var34[27] = var96;
            var34[28] = var95;
            var34[29] = var94;
            var34[30] = var93;
            var34[31] = var92;
            var34[32] = var91;
            var34[33] = var90;
            var34[34] = var89;
            var34[35] = var88;
            var34[36] = var87;
            var34[37] = var86;
            var34[38] = var85;
            var34[39] = var84;
            var34[40] = var83;
            var34[41] = var82;
            var34[42] = var81;
            var34[43] = var80;
            var34[44] = var79;
            var34[45] = var78;
            var34[46] = var77;
            var34[47] = var76;
            var34[48] = var75;
            var34[49] = var74;
            var34[50] = var73;
            var34[51] = var72;
            var34[52] = var71;
            var34[53] = var70;
            var34[54] = var12;
            var34[55] = var10;
            var34[56] = var8;
            var34[57] = var23;
            var34[58] = var69;
            var34[59] = var68;
            var34[60] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5753; continue _fun0004 }
 5747:
            var67 = var43.channelThreadsVersion;
 5753:
            var34[61] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5772; continue _fun0004 }
 5766:
            var67 = var43.rsvpVersion;
 5772:
            var34[62] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5791; continue _fun0004 }
 5785:
            var67 = var43.repliedIds;
 5791:
            var34[63] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5810; continue _fun0004 }
 5804:
            var67 = var43.hasLoadedExperiments;
 5810:
            var34[64] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5829; continue _fun0004 }
 5823:
            var67 = var43.communicationDisabledVersion;
 5829:
            var34[65] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5848; continue _fun0004 }
 5842:
            var67 = var43.failedMessagesVersion;
 5848:
            var34[66] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5867; continue _fun0004 }
 5861:
            var67 = var43.interactionStates;
 5867:
            var34[67] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5886; continue _fun0004 }
 5880:
            var67 = var43.interactionComponentStates;
 5886:
            var34[68] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5905; continue _fun0004 }
 5899:
            var67 = var43.interactionComponentStatesVersion;
 5905:
            var34[69] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5924; continue _fun0004 }
 5918:
            var67 = var43.shouldDisableInteractiveComponents;
 5924:
            var34[70] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5943; continue _fun0004 }
 5937:
            var67 = var43.channelPolls;
 5943:
            var34[71] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5962; continue _fun0004 }
 5956:
            var67 = var43.activityInstanceIds;
 5962:
            var34[72] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5981; continue _fun0004 }
 5975:
            var67 = var43.activityParticipants;
 5981:
            var34[73] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6000; continue _fun0004 }
 5994:
            var67 = var43.activityInstancePresenceDetails;
 6000:
            var34[74] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6019; continue _fun0004 }
 6013:
            var67 = var43.messagesWithActivitiesLaunching;
 6019:
            var34[75] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6038; continue _fun0004 }
 6032:
            var67 = var43.invalidApplicationIds;
 6038:
            var34[76] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6057; continue _fun0004 }
 6051:
            var67 = var43.applicationAssetFetchingIds;
 6057:
            var34[77] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6076; continue _fun0004 }
 6070:
            var67 = var43.appDirectoryEmbedApplications;
 6076:
            var34[78] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6095; continue _fun0004 }
 6089:
            var67 = var43.invalidAppDirectoryEmbedApplicationIds;
 6095:
            var34[79] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6114; continue _fun0004 }
 6108:
            var67 = var43.appDirectoryEmbedApplicationFetchStates;
 6114:
            var34[80] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6133; continue _fun0004 }
 6127:
            var67 = var43.lazyCacheStatus;
 6133:
            var34[81] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6152; continue _fun0004 }
 6146:
            var67 = var43.isFollowingForumPost;
 6152:
            var34[82] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6171; continue _fun0004 }
 6165:
            var67 = var43.showMediaPostSharePrompt;
 6171:
            var34[83] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6190; continue _fun0004 }
 6184:
            var67 = var43.referralTrialOfferIds;
 6190:
            var34[84] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6209; continue _fun0004 }
 6203:
            var67 = var43.trialOffer;
 6209:
            var34[85] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6228; continue _fun0004 }
 6222:
            var67 = var43.isPremiumTier2User;
 6228:
            var34[86] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6247; continue _fun0004 }
 6241:
            var67 = var43.messageAuthorActivities;
 6247:
            var34[87] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6266; continue _fun0004 }
 6260:
            var67 = var43.activityInviteMessageIds;
 6266:
            var34[88] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6285; continue _fun0004 }
 6279:
            var67 = var43.resolvingGiftCodes;
 6285:
            var34[89] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6304; continue _fun0004 }
 6298:
            var67 = var43.resolvedGiftCodes;
 6304:
            var34[90] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6323; continue _fun0004 }
 6317:
            var67 = var43.acceptingGiftCodes;
 6323:
            var34[91] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6342; continue _fun0004 }
 6336:
            var67 = var43.mediaPostPreviewEmbeds;
 6342:
            var34[92] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6361; continue _fun0004 }
 6355:
            var67 = var43.explicitMediaFalsePositiveInfo;
 6361:
            var34[93] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6380; continue _fun0004 }
 6374:
            var67 = var43.guildTemplates;
 6380:
            var34[94] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6399; continue _fun0004 }
 6393:
            var67 = var43.buildOverrides;
 6399:
            var34[95] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6418; continue _fun0004 }
 6412:
            var67 = var43.quests;
 6418:
            var34[96] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6437; continue _fun0004 }
 6431:
            var67 = var43.isFetchingCurrentQuests;
 6437:
            var34[97] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6456; continue _fun0004 }
 6450:
            var67 = var43.showPushFeedback;
 6456:
            var34[98] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6475; continue _fun0004 }
 6469:
            var67 = var43.forwardGuildsVersion;
 6475:
            var34[99] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6494; continue _fun0004 }
 6488:
            var67 = var43.renderCommunicationDisabled;
 6494:
            var34[100] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6513; continue _fun0004 }
 6507:
            var67 = var43.editingMessageId;
 6513:
            var34[101] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6532; continue _fun0004 }
 6526:
            var67 = var43.replyingMessageId;
 6532:
            var34[102] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6551; continue _fun0004 }
 6545:
            var67 = var43.oldestUnreadMessageId;
 6551:
            var34[103] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6570; continue _fun0004 }
 6564:
            var67 = var43.isCallActive;
 6570:
            var34[104] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6589; continue _fun0004 }
 6583:
            var67 = var43.voiceStateChannelId;
 6589:
            var34[105] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6608; continue _fun0004 }
 6602:
            var67 = var43.participantsLength;
 6608:
            var34[106] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6627; continue _fun0004 }
 6621:
            var67 = var43.applications;
 6627:
            var34[107] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6646; continue _fun0004 }
 6640:
            var67 = var43.invites;
 6646:
            var34[108] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6665; continue _fun0004 }
 6659:
            var67 = var43.isSpamMessageRequest;
 6665:
            var34[109] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6684; continue _fun0004 }
 6678:
            var67 = var43.isMessageRequest;
 6684:
            var34[110] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6703; continue _fun0004 }
 6697:
            var67 = var43.currentUserCommunicationDisabled;
 6703:
            var34[111] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6722; continue _fun0004 }
 6716:
            var67 = var43.androidKeyboardHeight;
 6722:
            var34[112] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6741; continue _fun0004 }
 6735:
            var67 = var43.inlineAttachmentMedia;
 6741:
            var34[113] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6760; continue _fun0004 }
 6754:
            var67 = var43.inlineEmbedMedia;
 6760:
            var34[114] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6779; continue _fun0004 }
 6773:
            var67 = var43.renderEmbeds;
 6779:
            var34[115] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6798; continue _fun0004 }
 6792:
            var67 = var43.renderReactions;
 6798:
            var34[116] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6817; continue _fun0004 }
 6811:
            var67 = var43.animateEmoji;
 6817:
            var34[117] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6836; continue _fun0004 }
 6830:
            var67 = var43.animateStickers;
 6836:
            var34[118] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6855; continue _fun0004 }
 6849:
            var67 = var43.gifAutoPlay;
 6855:
            var34[119] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6874; continue _fun0004 }
 6868:
            var67 = var43.containerWidth;
 6874:
            var34[120] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6893; continue _fun0004 }
 6887:
            var67 = var43.guildSystemChannelFlags;
 6893:
            var34[121] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6912; continue _fun0004 }
 6906:
            var67 = var43.userSettingsLocale;
 6912:
            var34[122] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6931; continue _fun0004 }
 6925:
            var67 = var43.roleStyle;
 6931:
            var34[123] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6950; continue _fun0004 }
 6944:
            var67 = var43.canSendMessages;
 6950:
            var34[124] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6969; continue _fun0004 }
 6963:
            var67 = var43.selectedSummary;
 6969:
            var34[125] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6988; continue _fun0004 }
 6982:
            var67 = var43.shouldObscureSpoiler;
 6988:
            var34[126] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 7007; continue _fun0004 }
 7001:
            var67 = var43.shouldFilterKeywords;
 7007:
            var34[127] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 7026; continue _fun0004 }
 7020:
            var67 = var43.isStaff;
 7026:
            var34[128] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 7045; continue _fun0004 }
 7039:
            var67 = var43.isAgeVerified;
 7045:
            var34[129] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 7064; continue _fun0004 }
 7058:
            var67 = var43.theme;
 7064:
            var34[130] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 7083; continue _fun0004 }
 7077:
            var67 = var43.threadStartingReferenceMessage;
 7083:
            var34[131] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 7102; continue _fun0004 }
 7096:
            var67 = var43.unloadedContentEntryMessageIds;
 7102:
            var34[132] = var67;
            var68 = var5 == var43;
            var67 = undefined;
            if(var68) { _fun0004_ip = 7121; continue _fun0004 }
 7115:
            var67 = var43.guildInviteColorsFetched;
 7121:
            var34[133] = var67;
            var34[134] = var66;
            var34[135] = var65;
            var65 = var32.isAtBottom;
            var34[136] = var65;
            var34[137] = var64;
            var65 = var5 == var43;
            var64 = undefined;
            if(var65) { _fun0004_ip = 7162; continue _fun0004 }
 7156:
            var64 = var43.uploads;
 7162:
            var34[138] = var64;
            var34[139] = var63;
            var34[140] = var20;
            var34[141] = var62;
            var34[142] = var61;
            var34[143] = var60;
            var34[144] = var59;
            var34[145] = var58;
            var34[146] = var57;
            var34[147] = var56;
            var34[148] = var55;
            var34[149] = var54;
            var34[150] = var38;
            var55 = var5 == var43;
            var54 = undefined;
            if(var55) { _fun0004_ip = 7229; continue _fun0004 }
 7223:
            var54 = var43.shouldForceRender;
 7229:
            var34[151] = var54;
            var34[152] = var53;
            var34[153] = var52;
            var34[154] = var25;
            var34[155] = var51;
            var34[156] = var50;
            var34[157] = var49;
            var34[158] = var48;
            var34[159] = var47;
            var34[160] = var46;
            var34[161] = var7;
            var34[162] = var45;
            var46 = var5 == var43;
            var45 = undefined;
            if(var46) { _fun0004_ip = 7292; continue _fun0004 }
 7286:
            var45 = var43.guildEmojis;
 7292:
            var34[163] = var45;
            var34[164] = var44;
            var44 = var5 == var43;
            var5 = undefined;
            if(var44) { _fun0004_ip = 7315; continue _fun0004 }
 7309:
            var5 = var43.enableSwipeActions;
 7315:
            var34[165] = var5;
            var5 = function() {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                    var2 = _closure2_slot11;
                    var8 = null;
                    if(!(var8 != var2)) { _fun0032_ip = 4129; continue _fun0032 }
 18:
                    var2 = _closure2_slot125;
                    var2 = var8 == var2;
                    var4 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 43; continue _fun0032 }
 33:
                    var2 = _closure2_slot125;
                    var5 = var2.inlineAttachmentMedia;
 43:
                    var2 = _closure2_slot12;
                    var14 = var5 !== var2;
                    if(var14) { _fun0032_ip = 85; continue _fun0032 }
 54:
                    var2 = _closure2_slot125;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 77; continue _fun0032 }
 67:
                    var2 = _closure2_slot125;
                    var5 = var2.inlineEmbedMedia;
 77:
                    var2 = _closure2_slot13;
                    var14 = var5 !== var2;
 85:
                    if(var14) { _fun0032_ip = 119; continue _fun0032 }
 88:
                    var2 = _closure2_slot125;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 111; continue _fun0032 }
 101:
                    var2 = _closure2_slot125;
                    var5 = var2.renderEmbeds;
 111:
                    var2 = _closure2_slot14;
                    var14 = var5 !== var2;
 119:
                    if(var14) { _fun0032_ip = 153; continue _fun0032 }
 122:
                    var2 = _closure2_slot125;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 145; continue _fun0032 }
 135:
                    var2 = _closure2_slot125;
                    var5 = var2.renderReactions;
 145:
                    var2 = _closure2_slot15;
                    var14 = var5 !== var2;
 153:
                    if(var14) { _fun0032_ip = 187; continue _fun0032 }
 156:
                    var2 = _closure2_slot125;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 179; continue _fun0032 }
 169:
                    var2 = _closure2_slot125;
                    var5 = var2.animateEmoji;
 179:
                    var2 = _closure2_slot16;
                    var14 = var5 !== var2;
 187:
                    if(var14) { _fun0032_ip = 221; continue _fun0032 }
 190:
                    var2 = _closure2_slot125;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 213; continue _fun0032 }
 203:
                    var2 = _closure2_slot125;
                    var5 = var2.animateStickers;
 213:
                    var2 = _closure2_slot17;
                    var14 = var5 !== var2;
 221:
                    if(var14) { _fun0032_ip = 255; continue _fun0032 }
 224:
                    var2 = _closure2_slot125;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 247; continue _fun0032 }
 237:
                    var2 = _closure2_slot125;
                    var5 = var2.gifAutoPlay;
 247:
                    var2 = _closure2_slot18;
                    var14 = var5 !== var2;
 255:
                    if(var14) { _fun0032_ip = 289; continue _fun0032 }
 258:
                    var2 = _closure2_slot125;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 281; continue _fun0032 }
 271:
                    var2 = _closure2_slot125;
                    var5 = var2.containerWidth;
 281:
                    var2 = _closure2_slot90;
                    var14 = var5 !== var2;
 289:
                    if(var14) { _fun0032_ip = 323; continue _fun0032 }
 292:
                    var2 = _closure2_slot125;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 315; continue _fun0032 }
 305:
                    var2 = _closure2_slot125;
                    var5 = var2.guildSystemChannelFlags;
 315:
                    var2 = _closure2_slot10;
                    var14 = var5 !== var2;
 323:
                    if(var14) { _fun0032_ip = 357; continue _fun0032 }
 326:
                    var2 = _closure2_slot125;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 349; continue _fun0032 }
 339:
                    var2 = _closure2_slot125;
                    var5 = var2.userSettingsLocale;
 349:
                    var2 = _closure2_slot74;
                    var14 = var5 !== var2;
 357:
                    if(var14) { _fun0032_ip = 391; continue _fun0032 }
 360:
                    var2 = _closure2_slot125;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 383; continue _fun0032 }
 373:
                    var2 = _closure2_slot125;
                    var5 = var2.roleStyle;
 383:
                    var2 = _closure2_slot58;
                    var14 = var5 !== var2;
 391:
                    if(var14) { _fun0032_ip = 425; continue _fun0032 }
 394:
                    var2 = _closure2_slot125;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 417; continue _fun0032 }
 407:
                    var2 = _closure2_slot125;
                    var5 = var2.canSendMessages;
 417:
                    var2 = _closure2_slot47;
                    var14 = var5 !== var2;
 425:
                    if(var14) { _fun0032_ip = 459; continue _fun0032 }
 428:
                    var2 = _closure2_slot125;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 451; continue _fun0032 }
 441:
                    var2 = _closure2_slot125;
                    var5 = var2.showPushFeedback;
 451:
                    var2 = _closure2_slot78;
                    var14 = var5 !== var2;
 459:
                    if(var14) { _fun0032_ip = 493; continue _fun0032 }
 462:
                    var2 = _closure2_slot125;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 485; continue _fun0032 }
 475:
                    var2 = _closure2_slot125;
                    var5 = var2.selectedSummary;
 485:
                    var2 = _closure2_slot83;
                    var14 = var5 !== var2;
 493:
                    if(var14) { _fun0032_ip = 527; continue _fun0032 }
 496:
                    var2 = _closure2_slot125;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 519; continue _fun0032 }
 509:
                    var2 = _closure2_slot125;
                    var5 = var2.shouldObscureSpoiler;
 519:
                    var2 = _closure2_slot85;
                    var14 = var5 !== var2;
 527:
                    if(var14) { _fun0032_ip = 561; continue _fun0032 }
 530:
                    var2 = _closure2_slot125;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 553; continue _fun0032 }
 543:
                    var2 = _closure2_slot125;
                    var5 = var2.shouldFilterKeywords;
 553:
                    var2 = _closure2_slot94;
                    var14 = var5 !== var2;
 561:
                    if(var14) { _fun0032_ip = 595; continue _fun0032 }
 564:
                    var2 = _closure2_slot125;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 587; continue _fun0032 }
 577:
                    var2 = _closure2_slot125;
                    var5 = var2.explicitMediaFalsePositiveInfo;
 587:
                    var2 = _closure2_slot89;
                    var14 = var5 !== var2;
 595:
                    if(var14) { _fun0032_ip = 629; continue _fun0032 }
 598:
                    var2 = _closure2_slot125;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 621; continue _fun0032 }
 611:
                    var2 = _closure2_slot125;
                    var5 = var2.isStaff;
 621:
                    var2 = _closure2_slot93;
                    var14 = var5 !== var2;
 629:
                    if(var14) { _fun0032_ip = 663; continue _fun0032 }
 632:
                    var2 = _closure2_slot125;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 655; continue _fun0032 }
 645:
                    var2 = _closure2_slot125;
                    var5 = var2.isAgeVerified;
 655:
                    var2 = _closure2_slot86;
                    var14 = var5 !== var2;
 663:
                    if(var14) { _fun0032_ip = 697; continue _fun0032 }
 666:
                    var2 = _closure2_slot125;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 689; continue _fun0032 }
 679:
                    var2 = _closure2_slot125;
                    var5 = var2.theme;
 689:
                    var2 = _closure2_slot19;
                    var14 = var5 !== var2;
 697:
                    if(var14) { _fun0032_ip = 741; continue _fun0032 }
 700:
                    var2 = _closure2_slot125;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 723; continue _fun0032 }
 713:
                    var2 = _closure2_slot125;
                    var5 = var2.shouldForceRender;
 723:
                    var2 = _closure2_slot104;
                    var2 = var5 !== var2;
                    if(!var2) { _fun0032_ip = 738; continue _fun0032 }
 734:
                    var2 = _closure2_slot104;
 738:
                    var14 = var2;
 741:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 66;
                    var5 = var7[var5];
                    var9 = var6.bind(var4)(var5);
                    var7 = {};
                    var5 = _closure2_slot6;
                    var7['messages'] = var5;
                    var5 = _closure2_slot80;
                    var7['androidKeyboardHeight'] = var5;
                    var5 = _closure2_slot44;
                    var7['replyingMessageId'] = var5;
                    var6 = {};
                    var5 = _closure2_slot100;
                    var5 = var5.isAtBottom;
                    var6['isAtBottom'] = var5;
                    var10 = _closure2_slot108;
                    var5 = var10.getPreviousMessages;
                    var5 = var5.bind(var10)();
                    var5 = var8 != var5;
                    var6['hasPreviousMessages'] = var5;
                    var5 = {};
                    var10 = _closure2_slot128;
                    if(!(var8 == var10)) { _fun0032_ip = 849; continue _fun0032 }
 843:
                    var10 = _closure2_slot6;
                    _fun0032_ip = 853; continue _fun0032;
 849:
                    var10 = _closure2_slot128;
 853:
                    var5['messages'] = var10;
                    var10 = _closure2_slot125;
                    var11 = var8 == var10;
                    var10 = undefined;
                    if(var11) { _fun0032_ip = 881; continue _fun0032 }
 871:
                    var11 = _closure2_slot125;
                    var10 = var11.androidKeyboardHeight;
 881:
                    if(!(var8 == var10)) { _fun0032_ip = 889; continue _fun0032 }
 885:
                    var10 = _closure2_slot80;
 889:
                    var5['androidKeyboardHeight'] = var10;
                    var5 = var9.bind(var4)(var7, var6, var5);
                    var12 = var5.scrollToMessageId;
                    var11 = var5.jumpTargetId;
                    var10 = var5.jumpType;
                    var6 = var5.minimizeScrolling;
                    var9 = var5.focusTargetId;
                    var7 = var5.shouldInitialScroll;
                    var5 = _closure2_slot125;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 960; continue _fun0032 }
 950:
                    var5 = _closure2_slot125;
                    var13 = var5.resolvingGiftCodes;
 960:
                    var5 = _closure2_slot51;
                    var33 = var13 !== var5;
                    if(var33) { _fun0032_ip = 1002; continue _fun0032 }
 971:
                    var5 = _closure2_slot125;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 994; continue _fun0032 }
 984:
                    var5 = _closure2_slot125;
                    var13 = var5.resolvedGiftCodes;
 994:
                    var5 = _closure2_slot52;
                    var33 = var13 !== var5;
 1002:
                    if(var33) { _fun0032_ip = 1036; continue _fun0032 }
 1005:
                    var5 = _closure2_slot125;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1028; continue _fun0032 }
 1018:
                    var5 = _closure2_slot125;
                    var13 = var5.acceptingGiftCodes;
 1028:
                    var5 = _closure2_slot53;
                    var33 = var13 !== var5;
 1036:
                    var _closure3_slot0 = var33;
                    var5 = _closure2_slot125;
                    var5 = var8 == var5;
                    var32 = undefined;
                    if(var5) { _fun0032_ip = 1063; continue _fun0032 }
 1053:
                    var5 = _closure2_slot125;
                    var32 = var5.uploads;
 1063:
                    var31 = _closure2_slot55;
                    var13 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var15 = 96;
                    var5 = var5[var15];
                    var16 = var13.bind(var4)(var5);
                    var5 = _closure2_slot125;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1110; continue _fun0032 }
 1100:
                    var5 = _closure2_slot125;
                    var13 = var5.interactionStates;
 1110:
                    var5 = _closure2_slot60;
                    var5 = var16.bind(var4)(var13, var5);
                    var24 = !var5;
                    var _closure3_slot1 = var24;
                    var5 = _closure2_slot125;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1150; continue _fun0032 }
 1140:
                    var5 = _closure2_slot125;
                    var13 = var5.channelPolls;
 1150:
                    var5 = _closure2_slot88;
                    var21 = var13 !== var5;
                    var _closure3_slot2 = var21;
                    var5 = _closure2_slot125;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1185; continue _fun0032 }
 1175:
                    var5 = _closure2_slot125;
                    var13 = var5.interactionComponentStatesVersion;
 1185:
                    var5 = _closure2_slot62;
                    var23 = var13 !== var5;
                    var _closure3_slot3 = var23;
                    var5 = _closure2_slot125;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1220; continue _fun0032 }
 1210:
                    var5 = _closure2_slot125;
                    var13 = var5.shouldDisableInteractiveComponents;
 1220:
                    var5 = _closure2_slot87;
                    var5 = var13 !== var5;
                    var _closure3_slot4 = var5;
                    var5 = _closure2_slot125;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1255; continue _fun0032 }
 1245:
                    var5 = _closure2_slot125;
                    var13 = var5.communicationDisabledVersion;
 1255:
                    var5 = _closure2_slot71;
                    var29 = var13 !== var5;
                    var _closure3_slot5 = var29;
                    var5 = _closure2_slot125;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1290; continue _fun0032 }
 1280:
                    var5 = _closure2_slot125;
                    var13 = var5.failedMessagesVersion;
 1290:
                    var5 = _closure2_slot70;
                    var28 = var13 !== var5;
                    var _closure3_slot6 = var28;
                    var5 = _closure2_slot125;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1325; continue _fun0032 }
 1315:
                    var5 = _closure2_slot125;
                    var13 = var5.renderCommunicationDisabled;
 1325:
                    var5 = _closure2_slot72;
                    var25 = var13 !== var5;
                    var _closure3_slot7 = var25;
                    var5 = _closure2_slot125;
                    var5 = var8 == var5;
                    var27 = undefined;
                    if(var5) { _fun0032_ip = 1360; continue _fun0032 }
 1350:
                    var5 = _closure2_slot125;
                    var27 = var5.forwardGuildsVersion;
 1360:
                    var26 = _closure2_slot95;
                    var13 = _closure2_slot1;
                    var5 = var13.isForumPost;
                    var22 = var5.bind(var13)();
                    if(!var22) { _fun0032_ip = 1412; continue _fun0032 }
 1381:
                    var5 = _closure2_slot125;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1404; continue _fun0032 }
 1394:
                    var5 = _closure2_slot125;
                    var13 = var5.isFollowingForumPost;
 1404:
                    var5 = _closure2_slot76;
                    var22 = var13 !== var5;
 1412:
                    var _closure3_slot8 = var22;
                    var5 = _closure2_slot125;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1439; continue _fun0032 }
 1429:
                    var5 = _closure2_slot125;
                    var13 = var5.showMediaPostSharePrompt;
 1439:
                    var5 = _closure2_slot77;
                    var20 = var13 !== var5;
                    var _closure3_slot9 = var20;
                    var5 = _closure2_slot125;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1474; continue _fun0032 }
 1464:
                    var5 = _closure2_slot125;
                    var13 = var5.unloadedContentEntryMessageIds;
 1474:
                    var5 = _closure2_slot91;
                    var19 = var13 !== var5;
                    var _closure3_slot10 = var19;
                    var5 = _closure2_slot125;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1509; continue _fun0032 }
 1499:
                    var5 = _closure2_slot125;
                    var13 = var5.invalidApplicationIds;
 1509:
                    var5 = _closure2_slot27;
                    var5 = var13 !== var5;
                    var _closure3_slot11 = var5;
                    var13 = _closure2_slot125;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0032_ip = 1544; continue _fun0032 }
 1534:
                    var13 = _closure2_slot125;
                    var16 = var13.activityInstanceIds;
 1544:
                    var13 = _closure2_slot29;
                    var30 = var16 !== var13;
                    if(var30) { _fun0032_ip = 1586; continue _fun0032 }
 1555:
                    var13 = _closure2_slot125;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0032_ip = 1578; continue _fun0032 }
 1568:
                    var13 = _closure2_slot125;
                    var16 = var13.activityParticipants;
 1578:
                    var13 = _closure2_slot31;
                    var30 = var16 !== var13;
 1586:
                    if(var30) { _fun0032_ip = 1620; continue _fun0032 }
 1589:
                    var13 = _closure2_slot125;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0032_ip = 1612; continue _fun0032 }
 1602:
                    var13 = _closure2_slot125;
                    var16 = var13.applicationAssetFetchingIds;
 1612:
                    var13 = _closure2_slot28;
                    var30 = var16 !== var13;
 1620:
                    if(var30) { _fun0032_ip = 1654; continue _fun0032 }
 1623:
                    var13 = _closure2_slot125;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0032_ip = 1646; continue _fun0032 }
 1636:
                    var13 = _closure2_slot125;
                    var16 = var13.activityInstancePresenceDetails;
 1646:
                    var13 = _closure2_slot30;
                    var30 = var16 !== var13;
 1654:
                    if(var30) { _fun0032_ip = 1688; continue _fun0032 }
 1657:
                    var13 = _closure2_slot125;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0032_ip = 1680; continue _fun0032 }
 1670:
                    var13 = _closure2_slot125;
                    var16 = var13.messagesWithActivitiesLaunching;
 1680:
                    var13 = _closure2_slot32;
                    var30 = var16 !== var13;
 1688:
                    if(var30) { _fun0032_ip = 1694; continue _fun0032 }
 1691:
                    var30 = var5;
 1694:
                    var _closure3_slot12 = var30;
                    var13 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var15];
                    var17 = var13.bind(var4)(var5);
                    var16 = var17.areArraysShallowEqual;
                    var5 = _closure2_slot125;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1744; continue _fun0032 }
 1734:
                    var5 = _closure2_slot125;
                    var13 = var5.activityInviteMessageIds;
 1744:
                    if(!(var8 == var13)) { _fun0032_ip = 1752; continue _fun0032 }
 1748:
                    var13 = new Array(0);
 1752:
                    var5 = _closure2_slot22;
                    if(!(var8 == var5)) { _fun0032_ip = 1766; continue _fun0032 }
 1760:
                    var5 = new Array(0);
                    _fun0032_ip = 1770; continue _fun0032;
 1766:
                    var5 = _closure2_slot22;
 1770:
                    var5 = var16.bind(var17)(var13, var5);
                    var18 = !var5;
                    var _closure3_slot13 = var18;
                    var13 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var15];
                    var16 = var13.bind(var4)(var5);
                    var15 = var16.areArraysShallowEqual;
                    var5 = _closure2_slot125;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1829; continue _fun0032 }
 1819:
                    var5 = _closure2_slot125;
                    var13 = var5.referralTrialOfferIds;
 1829:
                    if(!(var8 == var13)) { _fun0032_ip = 1837; continue _fun0032 }
 1833:
                    var13 = new Array(0);
 1837:
                    var5 = _closure2_slot40;
                    if(!(var8 == var5)) { _fun0032_ip = 1851; continue _fun0032 }
 1845:
                    var5 = new Array(0);
                    _fun0032_ip = 1855; continue _fun0032;
 1851:
                    var5 = _closure2_slot40;
 1855:
                    var5 = var15.bind(var16)(var13, var5);
                    var17 = !var5;
                    if(var17) { _fun0032_ip = 1898; continue _fun0032 }
 1867:
                    var5 = _closure2_slot125;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1890; continue _fun0032 }
 1880:
                    var5 = _closure2_slot125;
                    var13 = var5.trialOffer;
 1890:
                    var5 = _closure2_slot41;
                    var17 = var13 !== var5;
 1898:
                    if(var17) { _fun0032_ip = 1932; continue _fun0032 }
 1901:
                    var5 = _closure2_slot125;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1924; continue _fun0032 }
 1914:
                    var5 = _closure2_slot125;
                    var13 = var5.isPremiumTier2User;
 1924:
                    var5 = _closure2_slot42;
                    var17 = var13 !== var5;
 1932:
                    var _closure3_slot14 = var17;
                    var5 = _closure2_slot125;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1959; continue _fun0032 }
 1949:
                    var5 = _closure2_slot125;
                    var13 = var5.guildInviteColorsFetched;
 1959:
                    var5 = _closure2_slot96;
                    var16 = var13 !== var5;
                    var _closure3_slot15 = var16;
                    var5 = _closure2_slot125;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1994; continue _fun0032 }
 1984:
                    var5 = _closure2_slot125;
                    var13 = var5.guildEmojis;
 1994:
                    var5 = _closure2_slot97;
                    var13 = var13 !== var5;
                    var _closure3_slot16 = var13;
                    var5 = _closure2_slot79;
                    var34 = 'initializing';
                    var5 = var34 !== var5;
                    var15 = _closure2_slot125;
                    var35 = var8 == var15;
                    var15 = undefined;
                    if(var35) { _fun0032_ip = 2043; continue _fun0032 }
 2033:
                    var35 = _closure2_slot125;
                    var15 = var35.lazyCacheStatus;
 2043:
                    var15 = var34 !== var15;
                    if(var14) { _fun0032_ip = 3319; continue _fun0032 }
 2053:
                    if(var33) { _fun0032_ip = 3319; continue _fun0032 }
 2059:
                    if(!(var32 === var31)) { _fun0032_ip = 3319; continue _fun0032 }
 2066:
                    if(var30) { _fun0032_ip = 3319; continue _fun0032 }
 2072:
                    var31 = _closure2_slot128;
                    var30 = _closure2_slot6;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2087:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2110; continue _fun0032 }
 2100:
                    var30 = _closure2_slot125;
                    var31 = var30.editingMessageId;
 2110:
                    var30 = _closure2_slot43;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2121:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2144; continue _fun0032 }
 2134:
                    var30 = _closure2_slot125;
                    var31 = var30.replyingMessageId;
 2144:
                    var30 = _closure2_slot44;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2155:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2178; continue _fun0032 }
 2168:
                    var30 = _closure2_slot125;
                    var31 = var30.voiceStateChannelId;
 2178:
                    var30 = _closure2_slot49;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2189:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2212; continue _fun0032 }
 2202:
                    var30 = _closure2_slot125;
                    var31 = var30.messageAuthorActivities;
 2212:
                    var30 = _closure2_slot21;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2223:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2246; continue _fun0032 }
 2236:
                    var30 = _closure2_slot125;
                    var31 = var30.oldestUnreadMessageId;
 2246:
                    var30 = _closure2_slot45;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2257:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2280; continue _fun0032 }
 2270:
                    var30 = _closure2_slot125;
                    var31 = var30.invites;
 2280:
                    var30 = _closure2_slot23;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2291:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2314; continue _fun0032 }
 2304:
                    var30 = _closure2_slot125;
                    var31 = var30.appDirectoryEmbedApplications;
 2314:
                    var30 = _closure2_slot24;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2325:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2348; continue _fun0032 }
 2338:
                    var30 = _closure2_slot125;
                    var31 = var30.invalidAppDirectoryEmbedApplicationIds;
 2348:
                    var30 = _closure2_slot25;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2359:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2382; continue _fun0032 }
 2372:
                    var30 = _closure2_slot125;
                    var31 = var30.appDirectoryEmbedApplicationFetchStates;
 2382:
                    var30 = _closure2_slot26;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2393:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2416; continue _fun0032 }
 2406:
                    var30 = _closure2_slot125;
                    var31 = var30.guildTemplates;
 2416:
                    var30 = _closure2_slot35;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2427:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2450; continue _fun0032 }
 2440:
                    var30 = _closure2_slot125;
                    var31 = var30.buildOverrides;
 2450:
                    var30 = _closure2_slot36;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2461:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2484; continue _fun0032 }
 2474:
                    var30 = _closure2_slot125;
                    var31 = var30.quests;
 2484:
                    var30 = _closure2_slot37;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2495:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2518; continue _fun0032 }
 2508:
                    var30 = _closure2_slot125;
                    var31 = var30.isFetchingCurrentQuests;
 2518:
                    var30 = _closure2_slot38;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2529:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2552; continue _fun0032 }
 2542:
                    var30 = _closure2_slot125;
                    var31 = var30.participantsLength;
 2552:
                    var30 = _closure2_slot54;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2563:
                    var31 = _closure2_slot66;
                    var30 = _closure2_slot128;
                    var30 = var8 != var30;
                    if(!var30) { _fun0032_ip = 2604; continue _fun0032 }
 2578:
                    var32 = _closure2_slot128;
                    var32 = var32.ready;
                    if(var32) { _fun0032_ip = 2601; continue _fun0032 }
 2591:
                    var33 = _closure2_slot128;
                    var32 = var33.cached;
 2601:
                    var30 = var32;
 2604:
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2611:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2634; continue _fun0032 }
 2624:
                    var30 = _closure2_slot125;
                    var31 = var30.channelThreadsVersion;
 2634:
                    var30 = _closure2_slot59;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2645:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2668; continue _fun0032 }
 2658:
                    var30 = _closure2_slot125;
                    var31 = var30.rsvpVersion;
 2668:
                    var30 = _closure2_slot69;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2679:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2702; continue _fun0032 }
 2692:
                    var30 = _closure2_slot125;
                    var31 = var30.repliedIds;
 2702:
                    var30 = _closure2_slot56;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2713:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2736; continue _fun0032 }
 2726:
                    var30 = _closure2_slot125;
                    var31 = var30.hasLoadedExperiments;
 2736:
                    var30 = _closure2_slot63;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2747:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2770; continue _fun0032 }
 2760:
                    var30 = _closure2_slot125;
                    var31 = var30.isMessageRequest;
 2770:
                    var30 = _closure2_slot65;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2781:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2804; continue _fun0032 }
 2794:
                    var30 = _closure2_slot125;
                    var31 = var30.isSpamMessageRequest;
 2804:
                    var30 = _closure2_slot64;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2815:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2838; continue _fun0032 }
 2828:
                    var30 = _closure2_slot125;
                    var31 = var30.currentUserCommunicationDisabled;
 2838:
                    var30 = _closure2_slot73;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2849:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2872; continue _fun0032 }
 2862:
                    var30 = _closure2_slot125;
                    var31 = var30.userSettingsLocale;
 2872:
                    var30 = _closure2_slot74;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2883:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2906; continue _fun0032 }
 2896:
                    var30 = _closure2_slot125;
                    var31 = var30.selectedSummary;
 2906:
                    var30 = _closure2_slot83;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2917:
                    var30 = _closure2_slot125;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2940; continue _fun0032 }
 2930:
                    var30 = _closure2_slot125;
                    var31 = var30.showPushFeedback;
 2940:
                    var30 = _closure2_slot78;
                    if(!(var31 === var30)) { _fun0032_ip = 3319; continue _fun0032 }
 2951:
                    if(!(var15 === var5)) { _fun0032_ip = 3319; continue _fun0032 }
 2958:
                    if(var29) { _fun0032_ip = 3319; continue _fun0032 }
 2964:
                    if(var28) { _fun0032_ip = 3319; continue _fun0032 }
 2970:
                    if(!(var27 === var26)) { _fun0032_ip = 3319; continue _fun0032 }
 2977:
                    if(var25) { _fun0032_ip = 3319; continue _fun0032 }
 2983:
                    if(var24) { _fun0032_ip = 3319; continue _fun0032 }
 2989:
                    if(var23) { _fun0032_ip = 3319; continue _fun0032 }
 2995:
                    if(var22) { _fun0032_ip = 3319; continue _fun0032 }
 3001:
                    if(!(var8 == var11)) { _fun0032_ip = 3319; continue _fun0032 }
 3008:
                    if(!(var8 == var9)) { _fun0032_ip = 3319; continue _fun0032 }
 3015:
                    var22 = _closure2_slot125;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0032_ip = 3038; continue _fun0032 }
 3028:
                    var22 = _closure2_slot125;
                    var23 = var22.androidKeyboardHeight;
 3038:
                    var22 = _closure2_slot80;
                    if(!(var23 === var22)) { _fun0032_ip = 3319; continue _fun0032 }
 3049:
                    var22 = _closure2_slot125;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0032_ip = 3072; continue _fun0032 }
 3062:
                    var22 = _closure2_slot125;
                    var23 = var22.mediaPostPreviewEmbeds;
 3072:
                    var22 = _closure2_slot34;
                    if(!(var23 === var22)) { _fun0032_ip = 3319; continue _fun0032 }
 3083:
                    var22 = _closure2_slot125;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0032_ip = 3106; continue _fun0032 }
 3096:
                    var22 = _closure2_slot125;
                    var23 = var22.shouldObscureSpoiler;
 3106:
                    var22 = _closure2_slot85;
                    if(!(var23 === var22)) { _fun0032_ip = 3319; continue _fun0032 }
 3117:
                    var22 = _closure2_slot125;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0032_ip = 3140; continue _fun0032 }
 3130:
                    var22 = _closure2_slot125;
                    var23 = var22.shouldFilterKeywords;
 3140:
                    var22 = _closure2_slot94;
                    if(!(var23 === var22)) { _fun0032_ip = 3319; continue _fun0032 }
 3151:
                    var22 = _closure2_slot125;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0032_ip = 3174; continue _fun0032 }
 3164:
                    var22 = _closure2_slot125;
                    var23 = var22.shouldDisableInteractiveComponents;
 3174:
                    var22 = _closure2_slot87;
                    if(!(var23 === var22)) { _fun0032_ip = 3319; continue _fun0032 }
 3185:
                    if(var21) { _fun0032_ip = 3319; continue _fun0032 }
 3191:
                    if(var20) { _fun0032_ip = 3319; continue _fun0032 }
 3197:
                    var20 = _closure2_slot125;
                    var20 = var8 == var20;
                    var21 = undefined;
                    if(var20) { _fun0032_ip = 3220; continue _fun0032 }
 3210:
                    var20 = _closure2_slot125;
                    var21 = var20.threadStartingReferenceMessage;
 3220:
                    var20 = _closure2_slot50;
                    if(!(var21 === var20)) { _fun0032_ip = 3319; continue _fun0032 }
 3228:
                    if(var19) { _fun0032_ip = 3319; continue _fun0032 }
 3231:
                    var19 = _closure2_slot125;
                    var19 = var8 == var19;
                    var20 = undefined;
                    if(var19) { _fun0032_ip = 3254; continue _fun0032 }
 3244:
                    var19 = _closure2_slot125;
                    var20 = var19.applications;
 3254:
                    var19 = _closure2_slot33;
                    if(!(var20 === var19)) { _fun0032_ip = 3319; continue _fun0032 }
 3262:
                    if(var18) { _fun0032_ip = 3319; continue _fun0032 }
 3265:
                    if(var17) { _fun0032_ip = 3319; continue _fun0032 }
 3268:
                    if(var16) { _fun0032_ip = 3319; continue _fun0032 }
 3271:
                    if(var13) { _fun0032_ip = 3319; continue _fun0032 }
 3274:
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var13 = 82;
                    var13 = var17[var13];
                    var18 = var16.bind(var4)(var13);
                    var17 = var18.recordTimings;
                    var16 = _closure2_slot7;
                    var13 = _closure2_slot6;
                    var13 = var17.bind(var18)(var16, var13);
                    _fun0032_ip = 4129; continue _fun0032;
 3319:
                    var13 = global;
                    var13 = var13.Set;
                    var16 = var13.prototype;
                    var16 = Object.create(var16, {constructor: {value: var13}});
                    var39 = var16;
                    var13 = new var39[var13](var38);
                    var13 = var13 instanceof Object ? var13 : var16;
                    var _closure3_slot17 = var13;
                    var16 = _closure2_slot125;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0032_ip = 3374; continue _fun0032 }
 3364:
                    var16 = _closure2_slot125;
                    var17 = var16.editingMessageId;
 3374:
                    var16 = _closure2_slot43;
                    if(!(var17 !== var16)) { _fun0032_ip = 3464; continue _fun0032 }
 3382:
                    var16 = _closure2_slot43;
                    if(!(var8 != var16)) { _fun0032_ip = 3404; continue _fun0032 }
 3390:
                    var17 = var13.add;
                    var16 = _closure2_slot43;
                    var16 = var17.bind(var13)(var16);
 3404:
                    var16 = _closure2_slot125;
                    var17 = var8 == var16;
                    var16 = undefined;
                    if(var17) { _fun0032_ip = 3427; continue _fun0032 }
 3417:
                    var17 = _closure2_slot125;
                    var16 = var17.editingMessageId;
 3427:
                    if(!(var8 != var16)) { _fun0032_ip = 3464; continue _fun0032 }
 3431:
                    var17 = var13.add;
                    var16 = _closure2_slot125;
                    var18 = var8 == var16;
                    var16 = undefined;
                    if(var18) { _fun0032_ip = 3459; continue _fun0032 }
 3449:
                    var18 = _closure2_slot125;
                    var16 = var18.editingMessageId;
 3459:
                    var16 = var17.bind(var13)(var16);
 3464:
                    var16 = _closure2_slot125;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0032_ip = 3487; continue _fun0032 }
 3477:
                    var16 = _closure2_slot125;
                    var17 = var16.replyingMessageId;
 3487:
                    var16 = _closure2_slot44;
                    if(!(var17 !== var16)) { _fun0032_ip = 3577; continue _fun0032 }
 3495:
                    var16 = _closure2_slot44;
                    if(!(var8 != var16)) { _fun0032_ip = 3517; continue _fun0032 }
 3503:
                    var17 = var13.add;
                    var16 = _closure2_slot44;
                    var16 = var17.bind(var13)(var16);
 3517:
                    var16 = _closure2_slot125;
                    var17 = var8 == var16;
                    var16 = undefined;
                    if(var17) { _fun0032_ip = 3540; continue _fun0032 }
 3530:
                    var17 = _closure2_slot125;
                    var16 = var17.replyingMessageId;
 3540:
                    if(!(var8 != var16)) { _fun0032_ip = 3577; continue _fun0032 }
 3544:
                    var17 = var13.add;
                    var16 = _closure2_slot125;
                    var18 = var8 == var16;
                    var16 = undefined;
                    if(var18) { _fun0032_ip = 3572; continue _fun0032 }
 3562:
                    var18 = _closure2_slot125;
                    var16 = var18.replyingMessageId;
 3572:
                    var16 = var17.bind(var13)(var16);
 3577:
                    var17 = _closure2_slot66;
                    var16 = _closure2_slot128;
                    var16 = var8 != var16;
                    if(!var16) { _fun0032_ip = 3618; continue _fun0032 }
 3592:
                    var18 = _closure2_slot128;
                    var18 = var18.ready;
                    if(var18) { _fun0032_ip = 3615; continue _fun0032 }
 3605:
                    var19 = _closure2_slot128;
                    var18 = var19.cached;
 3615:
                    var16 = var18;
 3618:
                    if(!(var17 === var16)) { _fun0032_ip = 3715; continue _fun0032 }
 3622:
                    var16 = _closure2_slot125;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0032_ip = 3645; continue _fun0032 }
 3635:
                    var16 = _closure2_slot125;
                    var17 = var16.isCallActive;
 3645:
                    var16 = _closure2_slot48;
                    if(!(var17 === var16)) { _fun0032_ip = 3715; continue _fun0032 }
 3653:
                    var16 = _closure2_slot125;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0032_ip = 3676; continue _fun0032 }
 3666:
                    var16 = _closure2_slot125;
                    var17 = var16.voiceStateChannelId;
 3676:
                    var16 = _closure2_slot49;
                    if(!(var17 === var16)) { _fun0032_ip = 3715; continue _fun0032 }
 3684:
                    var16 = _closure2_slot125;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0032_ip = 3707; continue _fun0032 }
 3697:
                    var16 = _closure2_slot125;
                    var17 = var16.participantsLength;
 3707:
                    var16 = _closure2_slot54;
                    if(!(var17 !== var16)) { _fun0032_ip = 3796; continue _fun0032 }
 3715:
                    var17 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var16 = 89;
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
                    if(!(var8 != var16)) { _fun0032_ip = 3796; continue _fun0032 }
 3781:
                    var17 = var13.add;
                    var16 = var16.id;
                    var16 = var17.bind(var13)(var16);
 3796:
                    var16 = _closure2_slot125;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0032_ip = 3819; continue _fun0032 }
 3809:
                    var16 = _closure2_slot125;
                    var17 = var16.channelThreadsVersion;
 3819:
                    var16 = _closure2_slot59;
                    var16 = var17 !== var16;
                    var _closure3_slot18 = var16;
                    var16 = _closure2_slot125;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0032_ip = 3854; continue _fun0032 }
 3844:
                    var16 = _closure2_slot125;
                    var17 = var16.rsvpVersion;
 3854:
                    var16 = _closure2_slot69;
                    var16 = var17 !== var16;
                    var _closure3_slot19 = var16;
                    var16 = _closure2_slot125;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0032_ip = 3889; continue _fun0032 }
 3879:
                    var16 = _closure2_slot125;
                    var17 = var16.repliedIds;
 3889:
                    var16 = _closure2_slot56;
                    var16 = var17 !== var16;
                    var _closure3_slot20 = var16;
                    var16 = _closure2_slot125;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0032_ip = 3924; continue _fun0032 }
 3914:
                    var16 = _closure2_slot125;
                    var17 = var16.hasLoadedExperiments;
 3924:
                    var16 = _closure2_slot63;
                    var16 = var17 !== var16;
                    var _closure3_slot21 = var16;
                    var16 = _closure2_slot125;
                    var17 = var8 == var16;
                    var16 = undefined;
                    if(var17) { _fun0032_ip = 3959; continue _fun0032 }
 3949:
                    var17 = _closure2_slot125;
                    var16 = var17.communicationDisabledVersion;
 3959:
                    var17 = var8 != var16;
                    var8 = -1;
                    if(!var17) { _fun0032_ip = 3975; continue _fun0032 }
 3972:
                    var8 = var16;
 3975:
                    var _closure3_slot22 = var8;
                    var8 = !var15;
                    if(var15) { _fun0032_ip = 3988; continue _fun0032 }
 3985:
                    var8 = var5;
 3988:
                    var _closure3_slot23 = var8;
                    var15 = _closure2_slot6;
                    var5 = var15.forEach;
                    var3 = function(arg1) {
                        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                            var1 = arg1;
                            var3 = _closure3_slot21;
                            if(!var3) { _fun0033_ip = 38; continue _fun0033 }
 13:
                            var4 = var1.type;
                            var3 = _closure1_slot52;
                            var3 = var3.USER_JOIN;
                            if(!(var4 !== var3)) { _fun0033_ip = 2858; continue _fun0033 }
 38:
                            var3 = _closure3_slot20;
                            if(!var3) { _fun0033_ip = 108; continue _fun0033 }
 45:
                            var4 = var1.type;
                            var3 = _closure1_slot52;
                            var3 = var3.REPLY;
                            if(!(var4 === var3)) { _fun0033_ip = 108; continue _fun0033 }
 67:
                            var3 = var1.messageReference;
                            var4 = null;
                            if(!(var4 != var3)) { _fun0033_ip = 108; continue _fun0033 }
 79:
                            var5 = _closure2_slot56;
                            var4 = var5.has;
                            var3 = var3.message_id;
                            var3 = var4.bind(var5)(var3);
                            if(var3) { _fun0033_ip = 2835; continue _fun0033 }
 108:
                            var3 = _closure3_slot18;
                            if(!var3) { _fun0033_ip = 145; continue _fun0033 }
 115:
                            var4 = var1.hasFlag;
                            var3 = _closure1_slot53;
                            var3 = var3.HAS_THREAD;
                            var3 = var4.bind(var1)(var3);
                            if(var3) { _fun0033_ip = 2814; continue _fun0033 }
 145:
                            var3 = _closure3_slot19;
                            if(!var3) { _fun0033_ip = 172; continue _fun0033 }
 152:
                            var3 = var1.codedLinks;
                            var4 = var3.length;
                            var3 = 0;
                            if(!(!(var4 > var3))) { _fun0033_ip = 2793; continue _fun0033 }
 172:
                            var3 = _closure3_slot16;
                            if(!var3) { _fun0033_ip = 204; continue _fun0033 }
 179:
                            var4 = var1.type;
                            var3 = _closure1_slot52;
                            var3 = var3.EMOJI_ADDED;
                            if(!(var4 !== var3)) { _fun0033_ip = 2772; continue _fun0033 }
 204:
                            var3 = _closure3_slot7;
                            if(var3) { _fun0033_ip = 2751; continue _fun0033 }
 214:
                            var3 = _closure3_slot5;
                            if(!var3) { _fun0033_ip = 275; continue _fun0033 }
 221:
                            var5 = _closure2_slot8;
                            var4 = null;
                            if(!(var4 != var5)) { _fun0033_ip = 275; continue _fun0033 }
 234:
                            var6 = _closure1_slot40;
                            var5 = _closure2_slot8;
                            var3 = var1.author;
                            var4 = var3.id;
                            var3 = undefined;
                            var4 = var6.bind(var3)(var5, var4);
                            var3 = _closure3_slot22;
                            if(!(!(var4 > var3))) { _fun0033_ip = 2751; continue _fun0033 }
 275:
                            var3 = _closure3_slot6;
                            if(!var3) { _fun0033_ip = 307; continue _fun0033 }
 282:
                            var3 = var1.author;
                            var4 = var3.id;
                            var3 = _closure2_slot11;
                            if(!(var4 !== var3)) { _fun0033_ip = 2727; continue _fun0033 }
 307:
                            var3 = _closure3_slot1;
                            if(!var3) { _fun0033_ip = 389; continue _fun0033 }
 314:
                            var4 = _closure2_slot125;
                            var6 = null;
                            var4 = var6 == var4;
                            var5 = undefined;
                            if(var4) { _fun0033_ip = 342; continue _fun0033 }
 332:
                            var4 = _closure2_slot125;
                            var5 = var4.interactionStates;
 342:
                            if(!(var6 == var5)) { _fun0033_ip = 348; continue _fun0033 }
 346:
                            var5 = {};
 348:
                            var4 = var1.id;
                            var4 = var5[var4];
                            var5 = _closure2_slot60;
                            if(!(var6 == var5)) { _fun0033_ip = 369; continue _fun0033 }
 365:
                            var5 = {};
                            _fun0033_ip = 373; continue _fun0033;
 369:
                            var5 = _closure2_slot60;
 373:
                            var3 = var1.id;
                            var3 = var5[var3];
                            if(!(var4 === var3)) { _fun0033_ip = 2704; continue _fun0033 }
 389:
                            var3 = _closure3_slot3;
                            if(!var3) { _fun0033_ip = 487; continue _fun0033 }
 396:
                            var3 = _closure2_slot125;
                            var7 = null;
                            var6 = var7 == var3;
                            var3 = undefined;
                            if(var6) { _fun0033_ip = 448; continue _fun0033 }
 414:
                            var6 = _closure2_slot125;
                            var9 = var6.interactionComponentStates;
                            var6 = var7 == var9;
                            var3 = undefined;
                            if(var6) { _fun0033_ip = 448; continue _fun0033 }
 433:
                            var8 = var9.get;
                            var6 = var1.id;
                            var3 = var8.bind(var9)(var6);
 448:
                            var6 = _closure2_slot61;
                            var6 = var7 == var6;
                            var4 = undefined;
                            if(var6) { _fun0033_ip = 480; continue _fun0033 }
 461:
                            var7 = _closure2_slot61;
                            var6 = var7.get;
                            var5 = var1.id;
                            var4 = var6.bind(var7)(var5);
 480:
                            if(!(var3 === var4)) { _fun0033_ip = 2681; continue _fun0033 }
 487:
                            var3 = _closure3_slot4;
                            if(!var3) { _fun0033_ip = 514; continue _fun0033 }
 494:
                            var3 = var1.components;
                            var4 = var3.length;
                            var3 = 0;
                            if(!(var3 === var4)) { _fun0033_ip = 2657; continue _fun0033 }
 514:
                            var3 = _closure3_slot2;
                            if(!var3) { _fun0033_ip = 596; continue _fun0033 }
 521:
                            var4 = _closure2_slot125;
                            var6 = null;
                            var4 = var6 == var4;
                            var5 = undefined;
                            if(var4) { _fun0033_ip = 549; continue _fun0033 }
 539:
                            var4 = _closure2_slot125;
                            var5 = var4.channelPolls;
 549:
                            if(!(var6 == var5)) { _fun0033_ip = 555; continue _fun0033 }
 553:
                            var5 = {};
 555:
                            var4 = var1.id;
                            var4 = var5[var4];
                            var5 = _closure2_slot88;
                            if(!(var6 == var5)) { _fun0033_ip = 576; continue _fun0033 }
 572:
                            var5 = {};
                            _fun0033_ip = 580; continue _fun0033;
 576:
                            var5 = _closure2_slot88;
 580:
                            var3 = var1.id;
                            var3 = var5[var3];
                            if(!(var4 === var3)) { _fun0033_ip = 2634; continue _fun0033 }
 596:
                            var3 = _closure3_slot10;
                            if(!var3) { _fun0033_ip = 745; continue _fun0033 }
 606:
                            var4 = _closure2_slot125;
                            var6 = null;
                            var4 = var6 == var4;
                            var7 = undefined;
                            if(var4) { _fun0033_ip = 634; continue _fun0033 }
 624:
                            var4 = _closure2_slot125;
                            var7 = var4.unloadedContentEntryMessageIds;
 634:
                            if(!(var6 == var7)) { _fun0033_ip = 666; continue _fun0033 }
 638:
                            var4 = global;
                            var4 = var4.Set;
                            var5 = var4.prototype;
                            var5 = Object.create(var5, {constructor: {value: var4}});
                            var21 = var5;
                            var4 = new var21[var4](var20);
                            var7 = var4 instanceof Object ? var4 : var5;
 666:
                            var5 = var7.has;
                            var4 = var1.id;
                            var4 = var5.bind(var7)(var4);
                            var5 = _closure2_slot91;
                            if(!(var6 == var5)) { _fun0033_ip = 719; continue _fun0033 }
 689:
                            var5 = global;
                            var5 = var5.Set;
                            var6 = var5.prototype;
                            var6 = Object.create(var6, {constructor: {value: var5}});
                            var21 = var6;
                            var5 = new var21[var5](var20);
                            var6 = var5 instanceof Object ? var5 : var6;
                            _fun0033_ip = 723; continue _fun0033;
 719:
                            var6 = _closure2_slot91;
 723:
                            var5 = var6.has;
                            var3 = var1.id;
                            var3 = var5.bind(var6)(var3);
                            if(!(var4 === var3)) { _fun0033_ip = 2611; continue _fun0033 }
 745:
                            var5 = _closure2_slot1;
                            var3 = var5.isForumPost;
                            var3 = var3.bind(var5)();
                            if(!var3) { _fun0033_ip = 831; continue _fun0033 }
 765:
                            var3 = _closure3_slot8;
                            if(var3) { _fun0033_ip = 779; continue _fun0033 }
 772:
                            var3 = _closure3_slot9;
                            if(!var3) { _fun0033_ip = 831; continue _fun0033 }
 779:
                            var5 = var1.id;
                            var7 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 97;
                            var6 = var6[var3];
                            var3 = undefined;
                            var7 = var7.bind(var3)(var6);
                            var6 = var7.castChannelIdAsMessageId;
                            var3 = _closure2_slot7;
                            var3 = var6.bind(var7)(var3);
                            if(!(var5 !== var3)) { _fun0033_ip = 2587; continue _fun0033 }
 831:
                            var3 = _closure3_slot12;
                            if(!var3) { _fun0033_ip = 853; continue _fun0033 }
 838:
                            var5 = var1.activityInstance;
                            var3 = null;
                            if(!(var3 == var5)) { _fun0033_ip = 2563; continue _fun0033 }
 853:
                            var3 = _closure3_slot13;
                            if(!var3) { _fun0033_ip = 887; continue _fun0033 }
 860:
                            var7 = var1.activity;
                            var6 = null;
                            var8 = var6 == var7;
                            var5 = undefined;
                            if(var8) { _fun0033_ip = 883; continue _fun0033 }
 877:
                            var5 = var7.party_id;
 883:
                            var3 = var6 != var5;
 887:
                            if(!var3) { _fun0033_ip = 909; continue _fun0033 }
 890:
                            var6 = _closure3_slot17;
                            var5 = var6.add;
                            var3 = var1.id;
                            var3 = var5.bind(var6)(var3);
 909:
                            var5 = var1.author;
                            var3 = null;
                            if(!(var3 != var5)) { _fun0033_ip = 2877; continue _fun0033 }
 924:
                            var17 = {};
                            var5 = _closure2_slot125;
                            var6 = var3 == var5;
                            var7 = undefined;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 951; continue _fun0033 }
 941:
                            var6 = _closure2_slot125;
                            var5 = var6.messageAuthorActivities;
 951:
                            if(!(var3 == var5)) { _fun0033_ip = 957; continue _fun0033 }
 955:
                            var5 = {};
 957:
                            var17['messageAuthorActivities'] = var5;
                            var16 = {};
                            var5 = _closure2_slot21;
                            if(!(var3 == var5)) { _fun0033_ip = 976; continue _fun0033 }
 972:
                            var5 = {};
                            _fun0033_ip = 980; continue _fun0033;
 976:
                            var5 = _closure2_slot21;
 980:
                            var16['messageAuthorActivities'] = var5;
                            var15 = {};
                            var5 = _closure2_slot125;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1010; continue _fun0033 }
 1000:
                            var6 = _closure2_slot125;
                            var5 = var6.invites;
 1010:
                            if(!(var3 == var5)) { _fun0033_ip = 1042; continue _fun0033 }
 1014:
                            var6 = global;
                            var6 = var6.Map;
                            var8 = var6.prototype;
                            var8 = Object.create(var8, {constructor: {value: var6}});
                            var21 = var8;
                            var6 = new var21[var6](var20);
                            var5 = var6 instanceof Object ? var6 : var8;
 1042:
                            var15['invites'] = var5;
                            var5 = _closure2_slot125;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1070; continue _fun0033 }
 1060:
                            var6 = _closure2_slot125;
                            var5 = var6.appDirectoryEmbedApplications;
 1070:
                            if(!(var3 == var5)) { _fun0033_ip = 1076; continue _fun0033 }
 1074:
                            var5 = {};
 1076:
                            var15['appDirectoryEmbedApplications'] = var5;
                            var5 = _closure2_slot125;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1104; continue _fun0033 }
 1094:
                            var6 = _closure2_slot125;
                            var5 = var6.invalidAppDirectoryEmbedApplicationIds;
 1104:
                            if(!(var3 == var5)) { _fun0033_ip = 1136; continue _fun0033 }
 1108:
                            var6 = global;
                            var6 = var6.Set;
                            var8 = var6.prototype;
                            var8 = Object.create(var8, {constructor: {value: var6}});
                            var21 = var8;
                            var6 = new var21[var6](var20);
                            var5 = var6 instanceof Object ? var6 : var8;
 1136:
                            var15['invalidAppDirectoryEmbedApplicationIds'] = var5;
                            var5 = _closure2_slot125;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1164; continue _fun0033 }
 1154:
                            var6 = _closure2_slot125;
                            var5 = var6.invalidApplicationIds;
 1164:
                            if(!(var3 == var5)) { _fun0033_ip = 1172; continue _fun0033 }
 1168:
                            var5 = new Array(0);
 1172:
                            var15['invalidApplicationIds'] = var5;
                            var5 = _closure2_slot125;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1200; continue _fun0033 }
 1190:
                            var6 = _closure2_slot125;
                            var5 = var6.activityParticipants;
 1200:
                            if(!(var3 == var5)) { _fun0033_ip = 1208; continue _fun0033 }
 1204:
                            var5 = new Array(0);
 1208:
                            var15['activityParticipants'] = var5;
                            var5 = _closure2_slot125;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1236; continue _fun0033 }
 1226:
                            var6 = _closure2_slot125;
                            var5 = var6.applicationAssetFetchingIds;
 1236:
                            if(!(var3 == var5)) { _fun0033_ip = 1244; continue _fun0033 }
 1240:
                            var5 = new Array(0);
 1244:
                            var15['applicationAssetFetchingIds'] = var5;
                            var5 = _closure2_slot125;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1272; continue _fun0033 }
 1262:
                            var6 = _closure2_slot125;
                            var5 = var6.appDirectoryEmbedApplicationFetchStates;
 1272:
                            if(!(var3 == var5)) { _fun0033_ip = 1278; continue _fun0033 }
 1276:
                            var5 = {};
 1278:
                            var15['appDirectoryEmbedApplicationFetchStates'] = var5;
                            var5 = _closure2_slot125;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1306; continue _fun0033 }
 1296:
                            var6 = _closure2_slot125;
                            var5 = var6.guildTemplates;
 1306:
                            if(!(var3 == var5)) { _fun0033_ip = 1338; continue _fun0033 }
 1310:
                            var6 = global;
                            var6 = var6.Map;
                            var8 = var6.prototype;
                            var8 = Object.create(var8, {constructor: {value: var6}});
                            var21 = var8;
                            var6 = new var21[var6](var20);
                            var5 = var6 instanceof Object ? var6 : var8;
 1338:
                            var15['guildTemplates'] = var5;
                            var5 = _closure2_slot125;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1366; continue _fun0033 }
 1356:
                            var6 = _closure2_slot125;
                            var5 = var6.buildOverrides;
 1366:
                            if(!(var3 == var5)) { _fun0033_ip = 1372; continue _fun0033 }
 1370:
                            var5 = {};
 1372:
                            var15['buildOverrides'] = var5;
                            var5 = _closure2_slot125;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1400; continue _fun0033 }
 1390:
                            var6 = _closure2_slot125;
                            var5 = var6.quests;
 1400:
                            if(!(var3 == var5)) { _fun0033_ip = 1408; continue _fun0033 }
 1404:
                            var5 = new Array(0);
 1408:
                            var15['quests'] = var5;
                            var5 = _closure2_slot125;
                            var5 = var3 == var5;
                            var6 = undefined;
                            if(var5) { _fun0033_ip = 1436; continue _fun0033 }
 1426:
                            var5 = _closure2_slot125;
                            var6 = var5.isFetchingCurrentQuests;
 1436:
                            var5 = var3 != var6;
                            if(!var5) { _fun0033_ip = 1446; continue _fun0033 }
 1443:
                            var5 = var6;
 1446:
                            var15['isFetchingCurrentQuests'] = var5;
                            var5 = _closure2_slot125;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1474; continue _fun0033 }
 1464:
                            var6 = _closure2_slot125;
                            var5 = var6.applications;
 1474:
                            if(!(var3 == var5)) { _fun0033_ip = 1480; continue _fun0033 }
 1478:
                            var5 = {};
 1480:
                            var15['applications'] = var5;
                            var14 = {};
                            var5 = _closure2_slot23;
                            if(!(var3 == var5)) { _fun0033_ip = 1525; continue _fun0033 }
 1495:
                            var5 = global;
                            var5 = var5.Map;
                            var6 = var5.prototype;
                            var6 = Object.create(var6, {constructor: {value: var5}});
                            var21 = var6;
                            var5 = new var21[var5](var20);
                            var5 = var5 instanceof Object ? var5 : var6;
                            _fun0033_ip = 1529; continue _fun0033;
 1525:
                            var5 = _closure2_slot23;
 1529:
                            var14['invites'] = var5;
                            var5 = _closure2_slot24;
                            if(!(var3 == var5)) { _fun0033_ip = 1546; continue _fun0033 }
 1542:
                            var5 = {};
                            _fun0033_ip = 1550; continue _fun0033;
 1546:
                            var5 = _closure2_slot24;
 1550:
                            var14['appDirectoryEmbedApplications'] = var5;
                            var5 = _closure2_slot25;
                            if(!(var3 == var5)) { _fun0033_ip = 1593; continue _fun0033 }
 1563:
                            var5 = global;
                            var5 = var5.Set;
                            var6 = var5.prototype;
                            var6 = Object.create(var6, {constructor: {value: var5}});
                            var21 = var6;
                            var5 = new var21[var5](var20);
                            var5 = var5 instanceof Object ? var5 : var6;
                            _fun0033_ip = 1597; continue _fun0033;
 1593:
                            var5 = _closure2_slot25;
 1597:
                            var14['invalidAppDirectoryEmbedApplicationIds'] = var5;
                            var5 = _closure2_slot27;
                            if(!(var3 == var5)) { _fun0033_ip = 1616; continue _fun0033 }
 1610:
                            var5 = new Array(0);
                            _fun0033_ip = 1620; continue _fun0033;
 1616:
                            var5 = _closure2_slot27;
 1620:
                            var14['invalidApplicationIds'] = var5;
                            var5 = _closure2_slot31;
                            if(!(var3 == var5)) { _fun0033_ip = 1639; continue _fun0033 }
 1633:
                            var5 = new Array(0);
                            _fun0033_ip = 1643; continue _fun0033;
 1639:
                            var5 = _closure2_slot31;
 1643:
                            var14['activityParticipants'] = var5;
                            var5 = _closure2_slot28;
                            if(!(var3 == var5)) { _fun0033_ip = 1662; continue _fun0033 }
 1656:
                            var5 = new Array(0);
                            _fun0033_ip = 1666; continue _fun0033;
 1662:
                            var5 = _closure2_slot28;
 1666:
                            var14['applicationAssetFetchingIds'] = var5;
                            var5 = _closure2_slot26;
                            if(!(var3 == var5)) { _fun0033_ip = 1683; continue _fun0033 }
 1679:
                            var5 = {};
                            _fun0033_ip = 1687; continue _fun0033;
 1683:
                            var5 = _closure2_slot26;
 1687:
                            var14['appDirectoryEmbedApplicationFetchStates'] = var5;
                            var5 = _closure2_slot35;
                            if(!(var3 == var5)) { _fun0033_ip = 1730; continue _fun0033 }
 1700:
                            var5 = global;
                            var5 = var5.Map;
                            var6 = var5.prototype;
                            var6 = Object.create(var6, {constructor: {value: var5}});
                            var21 = var6;
                            var5 = new var21[var5](var20);
                            var5 = var5 instanceof Object ? var5 : var6;
                            _fun0033_ip = 1734; continue _fun0033;
 1730:
                            var5 = _closure2_slot35;
 1734:
                            var14['guildTemplates'] = var5;
                            var5 = _closure2_slot36;
                            if(!(var3 == var5)) { _fun0033_ip = 1751; continue _fun0033 }
 1747:
                            var5 = {};
                            _fun0033_ip = 1755; continue _fun0033;
 1751:
                            var5 = _closure2_slot36;
 1755:
                            var14['buildOverrides'] = var5;
                            var5 = _closure2_slot37;
                            if(!(var3 == var5)) { _fun0033_ip = 1774; continue _fun0033 }
 1768:
                            var5 = new Array(0);
                            _fun0033_ip = 1778; continue _fun0033;
 1774:
                            var5 = _closure2_slot37;
 1778:
                            var14['quests'] = var5;
                            var5 = _closure2_slot38;
                            var5 = var3 != var5;
                            if(!var5) { _fun0033_ip = 1798; continue _fun0033 }
 1794:
                            var5 = _closure2_slot38;
 1798:
                            var14['isFetchingCurrentQuests'] = var5;
                            var5 = _closure2_slot33;
                            if(!(var3 == var5)) { _fun0033_ip = 1815; continue _fun0033 }
 1811:
                            var5 = {};
                            _fun0033_ip = 1819; continue _fun0033;
 1815:
                            var5 = _closure2_slot33;
 1819:
                            var14['applications'] = var5;
                            var13 = {};
                            var5 = _closure2_slot125;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1849; continue _fun0033 }
 1839:
                            var6 = _closure2_slot125;
                            var5 = var6.resolvingGiftCodes;
 1849:
                            if(!(var3 == var5)) { _fun0033_ip = 1857; continue _fun0033 }
 1853:
                            var5 = new Array(0);
 1857:
                            var13['resolvingGiftCodes'] = var5;
                            var5 = _closure2_slot125;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1885; continue _fun0033 }
 1875:
                            var6 = _closure2_slot125;
                            var5 = var6.resolvedGiftCodes;
 1885:
                            if(!(var3 == var5)) { _fun0033_ip = 1893; continue _fun0033 }
 1889:
                            var5 = new Array(0);
 1893:
                            var13['resolvedGiftCodes'] = var5;
                            var5 = _closure2_slot125;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1921; continue _fun0033 }
 1911:
                            var6 = _closure2_slot125;
                            var5 = var6.acceptingGiftCodes;
 1921:
                            if(!(var3 == var5)) { _fun0033_ip = 1929; continue _fun0033 }
 1925:
                            var5 = new Array(0);
 1929:
                            var13['acceptingGiftCodes'] = var5;
                            var12 = {};
                            var5 = _closure2_slot51;
                            if(!(var3 == var5)) { _fun0033_ip = 1950; continue _fun0033 }
 1944:
                            var5 = new Array(0);
                            _fun0033_ip = 1954; continue _fun0033;
 1950:
                            var5 = _closure2_slot51;
 1954:
                            var12['resolvingGiftCodes'] = var5;
                            var5 = _closure2_slot52;
                            if(!(var3 == var5)) { _fun0033_ip = 1973; continue _fun0033 }
 1967:
                            var5 = new Array(0);
                            _fun0033_ip = 1977; continue _fun0033;
 1973:
                            var5 = _closure2_slot52;
 1977:
                            var12['resolvedGiftCodes'] = var5;
                            var5 = _closure2_slot53;
                            if(!(var3 == var5)) { _fun0033_ip = 1996; continue _fun0033 }
 1990:
                            var5 = new Array(0);
                            _fun0033_ip = 2000; continue _fun0033;
 1996:
                            var5 = _closure2_slot53;
 2000:
                            var12['acceptingGiftCodes'] = var5;
                            var10 = {};
                            var5 = _closure2_slot125;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 2030; continue _fun0033 }
 2020:
                            var6 = _closure2_slot125;
                            var5 = var6.mediaPostPreviewEmbeds;
 2030:
                            if(!(var3 == var5)) { _fun0033_ip = 2036; continue _fun0033 }
 2034:
                            var5 = {};
 2036:
                            var10['mediaPostPreviewEmbeds'] = var5;
                            var9 = {};
                            var5 = _closure2_slot34;
                            if(!(var3 == var5)) { _fun0033_ip = 2055; continue _fun0033 }
 2051:
                            var5 = {};
                            _fun0033_ip = 2059; continue _fun0033;
 2055:
                            var5 = _closure2_slot34;
 2059:
                            var9['mediaPostPreviewEmbeds'] = var5;
                            var8 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var11 = 98;
                            var6 = var6[var11];
                            var8 = var8.bind(var7)(var6);
                            var6 = var8.messageAuthorActivitiesChanged;
                            var6 = var6.bind(var8)(var1, var17, var16);
                            if(var6) { _fun0033_ip = 2539; continue _fun0033 }
 2106:
                            var8 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var6 = var6[var11];
                            var8 = var8.bind(var7)(var6);
                            var6 = var8.codedLinksChanged;
                            var6 = var6.bind(var8)(var1, var15, var14);
                            if(var6) { _fun0033_ip = 2539; continue _fun0033 }
 2142:
                            var6 = _closure3_slot0;
                            if(!var6) { _fun0033_ip = 2185; continue _fun0033 }
 2149:
                            var8 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var6 = var6[var11];
                            var8 = var8.bind(var7)(var6);
                            var6 = var8.giftCodesChanged;
                            var6 = var6.bind(var8)(var1, var13, var12);
                            if(var6) { _fun0033_ip = 2539; continue _fun0033 }
 2185:
                            var8 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var6 = var6[var11];
                            var8 = var8.bind(var7)(var6);
                            var6 = var8.mediaPostPreviewEmbedsChanged;
                            var6 = var6.bind(var8)(var1, var10, var9);
                            if(var6) { _fun0033_ip = 2539; continue _fun0033 }
 2221:
                            var6 = _closure3_slot23;
                            if(!var6) { _fun0033_ip = 2245; continue _fun0033 }
 2228:
                            var8 = var1.embeds;
                            var9 = var8.length;
                            var8 = 0;
                            var6 = var9 > var8;
 2245:
                            if(!var6) { _fun0033_ip = 2267; continue _fun0033 }
 2248:
                            var9 = _closure3_slot17;
                            var8 = var9.add;
                            var6 = var1.id;
                            var6 = var8.bind(var9)(var6);
 2267:
                            var6 = var1.type;
                            var5 = _closure1_slot52;
                            var5 = var5.THREAD_STARTER_MESSAGE;
                            var5 = var6 === var5;
                            if(!var5) { _fun0033_ip = 2320; continue _fun0033 }
 2289:
                            var6 = _closure2_slot125;
                            var6 = var3 == var6;
                            var8 = undefined;
                            if(var6) { _fun0033_ip = 2312; continue _fun0033 }
 2302:
                            var6 = _closure2_slot125;
                            var8 = var6.threadStartingReferenceMessage;
 2312:
                            var6 = _closure2_slot50;
                            var5 = var8 !== var6;
 2320:
                            if(!var5) { _fun0033_ip = 2342; continue _fun0033 }
 2323:
                            var8 = _closure3_slot17;
                            var6 = var8.add;
                            var5 = var1.id;
                            var5 = var6.bind(var8)(var5);
 2342:
                            var5 = _closure3_slot11;
                            if(!var5) { _fun0033_ip = 2358; continue _fun0033 }
 2349:
                            var6 = var1.applicationId;
                            var5 = var3 != var6;
 2358:
                            if(!var5) { _fun0033_ip = 2407; continue _fun0033 }
 2361:
                            var6 = _closure2_slot125;
                            var6 = var3 == var6;
                            var8 = undefined;
                            if(var6) { _fun0033_ip = 2384; continue _fun0033 }
 2374:
                            var6 = _closure2_slot125;
                            var8 = var6.invalidApplicationIds;
 2384:
                            if(!(var3 == var8)) { _fun0033_ip = 2392; continue _fun0033 }
 2388:
                            var8 = new Array(0);
 2392:
                            var7 = var8.includes;
                            var6 = var1.applicationId;
                            var5 = var7.bind(var8)(var6);
 2407:
                            if(!var5) { _fun0033_ip = 2429; continue _fun0033 }
 2410:
                            var7 = _closure3_slot17;
                            var6 = var7.add;
                            var5 = var1.id;
                            var5 = var6.bind(var7)(var5);
 2429:
                            var5 = _closure3_slot14;
                            if(!var5) { _fun0033_ip = 2485; continue _fun0033 }
 2436:
                            var6 = var1.referralTrialOfferId;
                            var3 = var3 != var6;
                            if(!var3) { _fun0033_ip = 2463; continue _fun0033 }
 2449:
                            var5 = _closure2_slot40;
                            var4 = var5.includes;
                            var3 = var4.bind(var5)(var6);
 2463:
                            if(!var3) { _fun0033_ip = 2485; continue _fun0033 }
 2466:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
 2485:
                            var3 = _closure3_slot15;
                            if(!var3) { _fun0033_ip = 2509; continue _fun0033 }
 2492:
                            var4 = var1.codedLinks;
                            var5 = var4.length;
                            var4 = 0;
                            var3 = var5 > var4;
 2509:
                            if(!var3) { _fun0033_ip = 2877; continue _fun0033 }
 2515:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0033_ip = 2877; continue _fun0033;
 2539:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0033_ip = 2877; continue _fun0033;
 2563:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0033_ip = 2877; continue _fun0033;
 2587:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0033_ip = 2877; continue _fun0033;
 2611:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            var3 = undefined;
                            return var3;
 2634:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            var3 = undefined;
                            return var3;
 2657:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0033_ip = 2877; continue _fun0033;
 2681:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            var3 = undefined;
                            return var3;
 2704:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            var3 = undefined;
                            return var3;
 2727:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0033_ip = 2877; continue _fun0033;
 2751:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0033_ip = 2877; continue _fun0033;
 2772:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0033_ip = 2877; continue _fun0033;
 2793:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0033_ip = 2877; continue _fun0033;
 2814:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0033_ip = 2877; continue _fun0033;
 2835:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            var3 = undefined;
                            return var3;
 2858:
                            var3 = _closure3_slot17;
                            var2 = var3.add;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
 2877:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var5.bind(var15)(var3);
                    var5 = _closure2_slot118;
                    var3 = {};
                    var3['forced'] = var14;
                    var3['updateMessageIds'] = var13;
                    var3['scrollToMessageId'] = var12;
                    var3['jumpTargetId'] = var11;
                    var3['jumpType'] = var10;
                    var3['focusTargetId'] = var9;
                    var3['ignoreEmbedDescriptionCache'] = var8;
                    var8 = _closure2_slot129;
                    var3['messagesNewlyLoaded'] = var8;
                    var3['shouldInitialScroll'] = var7;
                    var3['minimizeScrolling'] = var6;
                    var3 = var5.bind(var4)(var3);
                    var5 = _closure2_slot107;
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
 4129:
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
                var4 = _closure2_slot116;
                var1['findMessageIndex'] = var4;
                var4 = _closure2_slot118;
                var1['updateRows'] = var4;
                var4 = _closure2_slot117;
                var1['scrollToMessageId'] = var4;
                var4 = function scrollToBottom() {
                    _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
                        var7 = arguments[0];
                        var1 = undefined;
                        if(!(var7 === var1)) { _fun0034_ip = 11; continue _fun0034 }
 9:
                        var7 = true;
 11:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 82;
                        var2 = var4[var2];
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.scrollToBottom;
                        var11 = _closure2_slot99;
                        var10 = _closure2_slot57;
                        var9 = _closure2_slot124;
                        var12 = var6;
                        var8 = var7;
                        var2 = var12[var5](var11, var10, var9, var8, var7);
                        return var1;
                    }
                };
                var1['scrollToBottom'] = var4;
                var4 = function scrollToTop() {
                    _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
                        var5 = arguments[0];
                        var3 = undefined;
                        if(!(var5 === var3)) { _fun0035_ip = 11; continue _fun0035 }
 9:
                        var5 = true;
 11:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 82;
                        var1 = var4[var1];
                        var4 = var2.bind(var3)(var1);
                        var3 = var4.scrollToTop;
                        var2 = _closure2_slot99;
                        var1 = _closure2_slot57;
                        var1 = var3.bind(var4)(var2, var1, var5);
                        return var1;
                    }
                };
                var1['scrollToTop'] = var4;
                var4 = function scrollToRelativeOffset(arg1) {
                    _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
                        var6 = arguments[1];
                        var3 = undefined;
                        if(!(var6 === var3)) { _fun0036_ip = 11; continue _fun0036 }
 9:
                        var6 = true;
 11:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 82;
                        var1 = var4[var1];
                        var5 = var2.bind(var3)(var1);
                        var4 = var5.scrollToRelativeOffset;
                        var10 = _closure2_slot99;
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
                    var2 = _closure2_slot99;
                    var1 = _closure2_slot108;
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
                        var11 = _closure2_slot99;
                        var10 = _closure2_slot57;
                        var9 = _closure2_slot124;
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
                    _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
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
                        var5 = _closure2_slot105;
                        var1['hasJumpedToOriginalPost'] = var5;
                        var5 = _closure2_slot57;
                        var1['useReducedMotion'] = var5;
                        var6 = _closure2_slot45;
                        var5 = null;
                        var6 = var5 != var6;
                        if(!var6) { _fun0037_ip = 96; continue _fun0037 }
 92:
                        var5 = _closure2_slot45;
 96:
                        var1['oldestUnreadMessageId'] = var5;
                        var6 = _closure2_slot108;
                        var5 = var6.getPreviousRows;
                        var5 = var5.bind(var6)();
                        var1['chatManagerRows'] = var5;
                        var5 = _closure2_slot116;
                        var1['findMessageIndex'] = var5;
                        var4 = _closure2_slot99;
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
                                var3 = _closure2_slot101;
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
                    var1 = _closure2_slot99;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['getChatRef'] = var3;
                var3 = _closure2_slot119;
                var1['maybeRescrollToMessageId'] = var3;
                var3 = _closure2_slot120;
                var1['clearRows'] = var3;
                var2 = _closure2_slot121;
                var1['getVisibleMessages'] = var2;
                return var1;
            };
            var13 = var34.bind(var5)(var15, var13, var18);
            var18 = var5.useCallback;
            var15 = _closure1_slot3;
            var13 = function* () {
                var1 = function* anon_0_() {
                    _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0038_ip = 140; continue _fun0038 }
 10:
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
                        var7 = _closure2_slot100;
                        var7 = var7.isNearTop;
                        var2['isNearTop'] = var7;
                        var7 = _closure2_slot6;
                        var2['messages'] = var7;
                        var7 = _closure2_slot116;
                        var2['findMessageIndex'] = var7;
                        var7 = function scrollToTop() {
                            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
                                var5 = arguments[0];
                                var3 = undefined;
                                if(!(var5 === var3)) { _fun0039_ip = 11; continue _fun0039 }
 9:
                                var5 = true;
 11:
                                var2 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 82;
                                var1 = var4[var1];
                                var4 = var2.bind(var3)(var1);
                                var3 = var4.scrollToTop;
                                var2 = _closure2_slot99;
                                var1 = _closure2_slot57;
                                var1 = var3.bind(var4)(var2, var1, var5);
                                return var1;
                            }
                        };
                        var2['scrollToTop'] = var7;
                        var6 = _closure2_slot99;
                        var2['chatRef'] = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=128);
 126:
                        return var2;
 128:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0038_ip = 137; continue _fun0038 }
 134:
                        return var3;
 137:
                        return var2;
 140:
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
            var13[5] = var29;
            var19 = var18.bind(var5)(var15, var13);
            var18 = var5.useCallback;
            var15 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var4 = var1.description;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 82;
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
                var1 = 99;
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
                var4 = _closure2_slot102;
                var3 = _closure2_slot118;
                var3 = var5.bind(var6)(var7, var4, var3);
                var2 = _closure2_slot103;
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
                var1 = 82;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.handleTapTableView;
                var2 = _closure2_slot3;
                var1 = _closure2_slot81;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var15 = var13.bind(var5)(var2, var3);
            var13 = var5.useCallback;
            var3 = new Array(5);
            var3[0] = var30;
            var3[1] = var12;
            var3[2] = var10;
            var3[3] = var8;
            var3[4] = var7;
            var2 = function(arg1) {
                _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var7 = var1.firstVisibleMessageIndex;
                    var6 = var1.lastVisibleMessageIndex;
                    var5 = var1.firstVisibleMessagePercentVisible;
                    var4 = var1.lastVisibleMessagePercentVisible;
                    var2 = null;
                    var1 = var2 != var7;
                    if(!var1) { _fun0040_ip = 45; continue _fun0040 }
 41:
                    var1 = var2 != var6;
 45:
                    if(!var1) { _fun0040_ip = 52; continue _fun0040 }
 48:
                    var1 = var2 != var5;
 52:
                    if(!var1) { _fun0040_ip = 59; continue _fun0040 }
 55:
                    var1 = var2 != var4;
 59:
                    if(!var1) { _fun0040_ip = 121; continue _fun0040 }
 62:
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
                        var6 = _closure2_slot108;
                        var5 = 'chatManager';
                        var1[var5] = var6;
                        var6 = _closure2_slot84;
                        var5 = 'shouldTrackAnnouncementMessageViews';
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
 121:
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
            var2 = new Array(5);
            var2[0] = var30;
            var2[1] = var12;
            var2[2] = var10;
            var2[3] = var8;
            var2[4] = var7;
            var1 = function(arg1) {
                _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var7 = var1.firstVisibleMessageIndex;
                    var6 = var1.lastVisibleMessageIndex;
                    var5 = var1.firstVisibleMessagePercentVisible;
                    var4 = var1.lastVisibleMessagePercentVisible;
                    var2 = null;
                    var1 = var2 != var7;
                    if(!var1) { _fun0041_ip = 45; continue _fun0041 }
 41:
                    var1 = var2 != var6;
 45:
                    if(!var1) { _fun0041_ip = 52; continue _fun0041 }
 48:
                    var1 = var2 != var5;
 52:
                    if(!var1) { _fun0041_ip = 59; continue _fun0041 }
 55:
                    var1 = var2 != var4;
 59:
                    if(!var1) { _fun0041_ip = 121; continue _fun0041 }
 62:
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
                        var6 = _closure2_slot108;
                        var5 = 'chatManager';
                        var1[var5] = var6;
                        var6 = _closure2_slot84;
                        var5 = 'shouldTrackAnnouncementMessageViews';
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
 121:
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
            var5 = 100;
            var5 = var10[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['ref'] = var29;
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
            var17 = var17.handleTapAppMessageEmbed;
            var5['onTapAppMessageEmbed'] = var17;
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
            var6 = 101;
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
    var4 = 102;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/chat/MessagesFunctional.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
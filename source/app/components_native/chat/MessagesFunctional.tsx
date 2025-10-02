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
            var34 = var7.bind(var13)(var5, var2);
            var _closure2_slot9 = var34;
            var5 = null;
            var2 = var5 == var34;
            var59 = undefined;
            if(var2) { _fun0004_ip = 242; continue _fun0004 }
 236:
            var59 = var34.systemChannelFlags;
 242:
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
            if(!r122) { _fun0004_ip = 2455; continue _fun0004 }
 2437:
            var2 = var9.ready;
            if(var2) { _fun0004_ip = 2452; continue _fun0004 }
 2446:
            var2 = var9.cached;
 2452:
            r122 = var2;
 2455:
            var _closure2_slot66 = r122;
            var42 = var5 != var9;
            if(!var42) { _fun0004_ip = 2472; continue _fun0004 }
 2466:
            var42 = var9.cached;
 2472:
            var _closure2_slot67 = var42;
            r125 = var5 != var9;
            if(!r125) { _fun0004_ip = 2489; continue _fun0004 }
 2483:
            r125 = var9.ready;
 2489:
            if(!r125) { _fun0004_ip = 2501; continue _fun0004 }
 2492:
            var2 = var9.loadingMore;
            r125 = !var2;
 2501:
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
 0:
                    var1 = _closure2_slot8;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0012_ip = 52; continue _fun0012 }
 15:
                    var1 = _closure2_slot6;
                    if(!(var4 != var1)) { _fun0012_ip = 52; continue _fun0012 }
 23:
                    var1 = {};
                    var _closure3_slot0 = var1;
                    var4 = _closure2_slot6;
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                            var2 = arg1;
                            var5 = var2.author;
                            var3 = null;
                            var6 = var3 == var5;
                            var1 = undefined;
                            var4 = undefined;
                            if(var6) { _fun0013_ip = 27; continue _fun0013 }
 22:
                            var4 = var5.id;
 27:
                            if(!(var3 != var4)) { _fun0013_ip = 94; continue _fun0013 }
 31:
                            var7 = _closure1_slot39;
                            var6 = var7.getMember;
                            var5 = _closure2_slot8;
                            var4 = var2.author;
                            var4 = var4.id;
                            var4 = var6.bind(var7)(var5, var4);
                            if(!(var3 != var4)) { _fun0013_ip = 94; continue _fun0013 }
 72:
                            var3 = _closure3_slot0;
                            var2 = var2.author;
                            var2 = var2.id;
                            var3[var2] = var4;
 94:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
 52:
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
            if(var19) { _fun0004_ip = 2770; continue _fun0004 }
 2765:
            var2 = var34.id;
 2770:
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
 0:
                    var3 = _closure2_slot1;
                    var1 = var3.isForumPost;
                    var1 = var1.bind(var3)();
                    var3 = !var1;
                    var1 = !var3;
                    if(var3) { _fun0014_ip = 48; continue _fun0014 }
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
 0:
                    var3 = _closure2_slot83;
                    var1 = null;
                    if(!var3) { _fun0015_ip = 39; continue _fun0015 }
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
 0:
                    var2 = _closure2_slot6;
                    var2 = var2.ready;
                    var2 = !var2;
                    if(var2) { _fun0016_ip = 34; continue _fun0016 }
 19:
                    var3 = _closure2_slot6;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var3 !== var4;
 34:
                    if(var2) { _fun0016_ip = 47; continue _fun0016 }
 37:
                    var3 = _closure2_slot6;
                    var2 = var3.hasMoreBefore;
 47:
                    if(var2) { _fun0016_ip = 60; continue _fun0016 }
 50:
                    var3 = _closure2_slot6;
                    var2 = var3.hasMoreAfter;
 60:
                    if(var2) { _fun0016_ip = 121; continue _fun0016 }
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
 0:
                    var2 = _closure1_slot49;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0017_ip = 37; continue _fun0017 }
 27:
                    var3 = var4.isStaff;
                    var2 = var3.bind(var4)();
 37:
                    var1 = var1 != var2;
                    if(!var1) { _fun0017_ip = 47; continue _fun0017 }
 44:
                    var1 = var2;
 47:
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
            if(var17) { _fun0004_ip = 3791; continue _fun0004 }
 3788:
            var60 = var15;
 3791:
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
 0:
                    var3 = arg1;
                    var2 = _closure2_slot115;
                    var2 = var2.isBlocking;
                    if(var2) { _fun0018_ip = 83; continue _fun0018 }
 19:
                    var2 = var3.isLoadingAtTop;
                    if(!var2) { _fun0018_ip = 54; continue _fun0018 }
 28:
                    var2 = _closure2_slot102;
                    var2 = var2.decelerating;
                    if(var2) { _fun0018_ip = 67; continue _fun0018 }
 41:
                    var2 = _closure2_slot102;
                    var2 = var2.dragging;
                    if(var2) { _fun0018_ip = 67; continue _fun0018 }
 54:
                    var4 = _closure2_slot114;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0018_ip = 97; continue _fun0018;
 67:
                    var4 = _closure2_slot115;
                    var2 = var4.add;
                    var2 = var2.bind(var4)(var3);
                    _fun0018_ip = 97; continue _fun0018;
 83:
                    var2 = _closure2_slot115;
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var3);
 97:
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
 0:
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
                    if(!var5) { _fun0019_ip = 124; continue _fun0019 }
 53:
                    var5 = _closure2_slot6;
                    var5 = var4 != var5;
                    var1 = null;
                    if(!var5) { _fun0019_ip = 124; continue _fun0019 }
 66:
                    var3 = _closure2_slot66;
                    var1 = null;
                    if(!var3) { _fun0019_ip = 124; continue _fun0019 }
 75:
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
 0:
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
                            if(!(var8 == var9)) { _fun0020_ip = 232; continue _fun0020 }
 226:
                            var8 = new Array(0);
                            _fun0020_ip = 236; continue _fun0020;
 232:
                            var8 = _closure2_slot54;
 236:
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
                            if(var2) { _fun0020_ip = 448; continue _fun0020 }
 398:
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
                            if(!var2) { _fun0020_ip = 398; continue _fun0020 }
 448:
                            var2 = _closure2_slot110;
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
 0:
                    var3 = arg1;
                    var10 = var3.scrollToMessageId;
                    var _closure3_slot0 = var10;
                    var9 = var3.jumpTargetId;
                    var1 = undefined;
                    if(!(var9 === var1)) { _fun0021_ip = 29; continue _fun0021 }
 27:
                    var9 = null;
 29:
                    var _closure3_slot1 = var9;
                    var11 = var3.jumpType;
                    if(!(var11 === var1)) { _fun0021_ip = 78; continue _fun0021 }
 43:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 87;
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.JumpTypes;
                    var11 = var4.ANIMATED;
 78:
                    var8 = var3.scrollPosition;
                    if(!(var8 === var1)) { _fun0021_ip = 123; continue _fun0021 }
 88:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 84;
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.ChatScrollPosition;
                    var8 = var4.TOP;
 123:
                    var5 = var3.minimizeScrolling;
                    if(!(var5 === var1)) { _fun0021_ip = 135; continue _fun0021 }
 133:
                    var5 = false;
 135:
                    var6 = var3.isRescrolling;
                    if(!(var6 === var1)) { _fun0021_ip = 147; continue _fun0021 }
 145:
                    var6 = false;
 147:
                    var _closure3_slot2 = var1;
                    var _closure3_slot3 = var1;
                    var4 = _closure2_slot56;
                    if(var4) { _fun0021_ip = 204; continue _fun0021 }
 165:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 87;
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
                    var7 = 88;
                    var7 = var13[var7];
                    var12 = var12.bind(var1)(var7);
                    var7 = var12.isIOS;
                    var7 = var7.bind(var12)();
                    if(!var7) { _fun0021_ip = 332; continue _fun0021 }
 247:
                    if(var6) { _fun0021_ip = 332; continue _fun0021 }
 250:
                    var6 = _closure2_slot118;
                    var14 = var6.bind(var1)(var10);
                    var6 = null;
                    if(!(var6 != var14)) { _fun0021_ip = 442; continue _fun0021 }
 268:
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
                    _fun0021_ip = 442; continue _fun0021;
 332:
                    var6 = _closure2_slot118;
                    var7 = var6.bind(var1)(var10);
                    _closure3_slot3 = var7;
                    var6 = null;
                    if(!(var6 != var7)) { _fun0021_ip = 442; continue _fun0021 }
 351:
                    if(var5) { _fun0021_ip = 418; continue _fun0021 }
 354:
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
                    _fun0021_ip = 442; continue _fun0021;
 418:
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
 442:
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
 0:
                    var2 = arguments[0];
                    var1 = undefined;
                    if(!(var2 === var1)) { _fun0022_ip = 11; continue _fun0022 }
 9:
                    var2 = {};
 11:
                    var11 = var2.forceRender;
                    if(!(var11 === var1)) { _fun0022_ip = 23; continue _fun0022 }
 21:
                    var11 = false;
 23:
                    var9 = var2.updateMessageIds;
                    if(!(var9 === var1)) { _fun0022_ip = 61; continue _fun0022 }
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
                    if(!(var15 === var1)) { _fun0022_ip = 73; continue _fun0022 }
 71:
                    var15 = null;
 73:
                    var14 = var2.jumpTargetId;
                    if(!(var14 === var1)) { _fun0022_ip = 85; continue _fun0022 }
 83:
                    var14 = null;
 85:
                    var17 = var2.jumpType;
                    if(!(var17 === var1)) { _fun0022_ip = 130; continue _fun0022 }
 95:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 87;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.JumpTypes;
                    var17 = var3.ANIMATED;
 130:
                    var7 = var2.focusTargetId;
                    if(!(var7 === var1)) { _fun0022_ip = 142; continue _fun0022 }
 140:
                    var7 = null;
 142:
                    var5 = var2.ignoreEmbedDescriptionCache;
                    if(!(var5 === var1)) { _fun0022_ip = 154; continue _fun0022 }
 152:
                    var5 = false;
 154:
                    var6 = var2.messagesNewlyLoaded;
                    if(!(var6 === var1)) { _fun0022_ip = 166; continue _fun0022 }
 164:
                    var6 = false;
 166:
                    var12 = var2.shouldInitialScroll;
                    if(!(var12 === var1)) { _fun0022_ip = 178; continue _fun0022 }
 176:
                    var12 = false;
 178:
                    var16 = var2.minimizeScrolling;
                    if(!(var16 === var1)) { _fun0022_ip = 190; continue _fun0022 }
 188:
                    var16 = false;
 190:
                    var8 = var2.isRescrolling;
                    if(!(var8 === var1)) { _fun0022_ip = 202; continue _fun0022 }
 200:
                    var8 = false;
 202:
                    var10 = var2.overrideScrollJumpType;
                    var2 = _closure2_slot101;
                    var2 = var2.current;
                    var13 = null;
                    if(!(var13 != var2)) { _fun0022_ip = 935; continue _fun0022 }
 229:
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
                    if(!var2) { _fun0022_ip = 328; continue _fun0022 }
 277:
                    var2 = _closure2_slot84;
                    var2 = var2.startId;
                    var9 = undefined;
                    if(!(var2 === var15)) { _fun0022_ip = 328; continue _fun0022 }
 293:
                    var4 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var2 = 84;
                    var2 = var18[var2];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.ChatScrollPosition;
                    var9 = var2.MIDDLE;
 328:
                    if(!(var13 != var11)) { _fun0022_ip = 346; continue _fun0022 }
 332:
                    var4 = var11.length;
                    var2 = 0;
                    if(!(!(var4 > var2))) { _fun0022_ip = 649; continue _fun0022 }
 346:
                    var2 = _closure2_slot112;
                    var2 = var2.current;
                    if(!var2) { _fun0022_ip = 378; continue _fun0022 }
 358:
                    var4 = _closure2_slot115;
                    var2 = var4.hasUpdates;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0022_ip = 630; continue _fun0022 }
 378:
                    var2 = _closure2_slot112;
                    var2 = var2.current;
                    if(var2) { _fun0022_ip = 453; continue _fun0022 }
 390:
                    if(!(var13 != var11)) { _fun0022_ip = 453; continue _fun0022 }
 394:
                    var4 = var11.length;
                    var2 = 0;
                    if(!(var2 === var4)) { _fun0022_ip = 453; continue _fun0022 }
 405:
                    var4 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var2 = 84;
                    var2 = var18[var2];
                    var18 = var4.bind(var1)(var2);
                    var4 = var18.fadeIn;
                    var2 = _closure2_slot101;
                    var2 = var2.current;
                    var2 = var4.bind(var18)(var2);
                    _fun0022_ip = 874; continue _fun0022;
 453:
                    if(!(var13 != var15)) { _fun0022_ip = 558; continue _fun0022 }
 457:
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
                    if(var2) { _fun0022_ip = 558; continue _fun0022 }
 512:
                    var4 = _closure2_slot119;
                    var2 = {};
                    var2['scrollToMessageId'] = var15;
                    var2['jumpTargetId'] = var14;
                    var2['jumpType'] = var17;
                    var2['scrollPosition'] = var9;
                    var2['minimizeScrolling'] = var16;
                    var2['isRescrolling'] = var8;
                    var2 = var4.bind(var1)(var2);
                    _fun0022_ip = 874; continue _fun0022;
 558:
                    if(!(var13 != var7)) { _fun0022_ip = 874; continue _fun0022 }
 565:
                    var2 = _closure2_slot118;
                    var16 = var2.bind(var1)(var7);
                    if(!(var13 != var16)) { _fun0022_ip = 874; continue _fun0022 }
 581:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 84;
                    var2 = var8[var2];
                    var8 = var4.bind(var1)(var2);
                    var4 = var8.focus;
                    var2 = _closure2_slot101;
                    var2 = var2.current;
                    var2 = var4.bind(var8)(var2, var16);
                    _fun0022_ip = 874; continue _fun0022;
 630:
                    var4 = _closure2_slot115;
                    var2 = var4.tryFlush;
                    var2 = var2.bind(var4)();
                    _fun0022_ip = 874; continue _fun0022;
 649:
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
                    if(!(var13 == var10)) { _fun0022_ip = 717; continue _fun0022 }
 707:
                    var13 = _closure2_slot6;
                    var10 = var13.jumpType;
 717:
                    var2['jumpType'] = var10;
                    var10 = _closure2_slot112;
                    var10 = var10.current;
                    var10 = !var10;
                    if(var10) { _fun0022_ip = 740; continue _fun0022 }
 737:
                    var10 = var12;
 740:
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
 874:
                    var2 = _closure2_slot112;
                    var2 = var2.current;
                    if(!var2) { _fun0022_ip = 899; continue _fun0022 }
 886:
                    var4 = _closure2_slot112;
                    var4 = var4.current;
                    var2 = var4 !== var5;
 899:
                    if(!var2) { _fun0022_ip = 906; continue _fun0022 }
 902:
                    var2 = _closure2_slot4;
 906:
                    if(!var2) { _fun0022_ip = 935; continue _fun0022 }
 909:
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
 935:
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
 0:
                    var6 = arguments[1];
                    var2 = arguments[2];
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0023_ip = 14; continue _fun0023 }
 12:
                    var6 = false;
 14:
                    if(!(var2 === var1)) { _fun0023_ip = 53; continue _fun0023 }
 18:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 87;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.JumpTypes;
                    var2 = var3.INSTANT;
 53:
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
 0:
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
 0:
                                var1 = arg1;
                                var4 = var1.id;
                                var3 = var1.nonce;
                                var1 = _closure4_slot0;
                                var1 = var4 === var1;
                                if(var1) { _fun0025_ip = 36; continue _fun0025 }
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
                    var2 = _closure2_slot54;
                    var4 = null;
                    if(!(var4 == var2)) { _fun0024_ip = 68; continue _fun0024 }
 62:
                    var2 = new Array(0);
                    _fun0024_ip = 72; continue _fun0024;
 68:
                    var2 = _closure2_slot54;
 72:
                    var1['uploads'] = var2;
                    var2 = _closure2_slot76;
                    var2 = var4 != var2;
                    if(!var2) { _fun0024_ip = 92; continue _fun0024 }
 88:
                    var2 = _closure2_slot76;
 92:
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
 0:
                    var1 = arg1;
                    var6 = var1.isAtBottom;
                    var9 = var1.isNearBottom;
                    var4 = undefined;
                    if(!(var9 === var4)) { _fun0026_ip = 25; continue _fun0026 }
 23:
                    var9 = false;
 25:
                    var10 = var1.isNearTop;
                    if(!(var10 === var4)) { _fun0026_ip = 37; continue _fun0026 }
 35:
                    var10 = false;
 37:
                    var12 = var1.dragging;
                    if(!(var12 === var4)) { _fun0026_ip = 49; continue _fun0026 }
 47:
                    var12 = false;
 49:
                    var13 = var1.decelerating;
                    if(!(var13 === var4)) { _fun0026_ip = 61; continue _fun0026 }
 59:
                    var13 = false;
 61:
                    var5 = var1.isFirstMessageVisible;
                    if(!(var5 === var4)) { _fun0026_ip = 73; continue _fun0026 }
 71:
                    var5 = false;
 73:
                    var2 = _closure2_slot0;
                    var3 = var2.onScroll;
                    var8 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var8)) { _fun0026_ip = 460; continue _fun0026 }
 99:
                    var8 = _closure2_slot6;
                    var8 = var8.length;
                    var11 = 0;
                    if(!(var11 === var8)) { _fun0026_ip = 130; continue _fun0026 }
 114:
                    var8 = _closure2_slot6;
                    var8 = var8.loadingMore;
                    if(var8) { _fun0026_ip = 460; continue _fun0026 }
 130:
                    var8 = _closure2_slot6;
                    var8 = var8.loadingMore;
                    var8 = !var8;
                    if(!var8) { _fun0026_ip = 155; continue _fun0026 }
 146:
                    if(var12) { _fun0026_ip = 152; continue _fun0026 }
 149:
                    var12 = var13;
 152:
                    var8 = var12;
 155:
                    if(!var8) { _fun0026_ip = 175; continue _fun0026 }
 158:
                    var13 = _closure2_slot115;
                    var12 = var13.hasUpdates;
                    var12 = var12.bind(var13)();
                    var8 = !var12;
 175:
                    var12 = _closure2_slot102;
                    var12 = var12.isNearTop;
                    if(var12) { _fun0026_ip = 263; continue _fun0026 }
 188:
                    if(!var10) { _fun0026_ip = 263; continue _fun0026 }
 191:
                    var10 = _closure2_slot6;
                    var10 = var10.hasMoreBefore;
                    if(!var10) { _fun0026_ip = 263; continue _fun0026 }
 204:
                    if(!var8) { _fun0026_ip = 263; continue _fun0026 }
 207:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var10 = 83;
                    var10 = var13[var10];
                    var15 = var12.bind(var4)(var10);
                    var14 = var15.loadMoreBefore;
                    var13 = _closure2_slot7;
                    var12 = _closure2_slot6;
                    var10 = function(arg1) {
                        var3 = _closure2_slot103;
                        var2 = {};
                        var1 = arg1;
                        var2['animated'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var10 = var14.bind(var15)(var13, var12, var10);
                    _fun0026_ip = 426; continue _fun0026;
 263:
                    var10 = _closure2_slot102;
                    var10 = var10.isNearBottom;
                    if(var10) { _fun0026_ip = 348; continue _fun0026 }
 276:
                    if(!var9) { _fun0026_ip = 348; continue _fun0026 }
 279:
                    var9 = _closure2_slot6;
                    var9 = var9.hasMoreAfter;
                    if(!var9) { _fun0026_ip = 348; continue _fun0026 }
 292:
                    if(!var8) { _fun0026_ip = 348; continue _fun0026 }
 295:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 83;
                    var8 = var10[var8];
                    var12 = var9.bind(var4)(var8);
                    var10 = var12.loadMoreAfter;
                    var9 = _closure2_slot7;
                    var8 = _closure2_slot6;
                    var7 = function(arg1) {
                        var3 = _closure2_slot103;
                        var2 = {};
                        var1 = arg1;
                        var2['animated'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var7 = var10.bind(var12)(var9, var8, var7);
                    _fun0026_ip = 426; continue _fun0026;
 348:
                    var7 = _closure2_slot102;
                    var7 = var7.isAtBottom;
                    if(!(var7 !== var6)) { _fun0026_ip = 426; continue _fun0026 }
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
                    if(!var6) { _fun0026_ip = 408; continue _fun0026 }
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
                    if(!(var2 != var3)) { _fun0026_ip = 442; continue _fun0026 }
 430:
                    var2 = {};
                    var2['isFirstMessageVisible'] = var5;
                    var2 = var3.bind(var4)(var2);
 442:
                    var2 = _closure2_slot115;
                    var1 = var2.tryFlush;
                    var1 = var1.bind(var2)();
                    var1 = true;
                    return var1;
 460:
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
                    var1 = 92;
                    var7 = var7[var1];
                    var1 = undefined;
                    var16 = var13.bind(var1)(var7);
                    var14 = var16.getChangesetIdForChat;
                    var13 = _closure2_slot101;
                    var13 = var13.current;
                    var19 = var14.bind(var16)(var13);
                    if(!(var20 !== var19)) { _fun0027_ip = 181; continue _fun0027 }
 133:
                    var13 = _closure2_slot95;
                    if(!var13) { _fun0027_ip = 420; continue _fun0027 }
 143:
                    var17 = _closure1_slot61;
                    var16 = var17.log;
                    var23 = _closure2_slot7;
                    var24 = 'STAFF-ACK-LOG: Ignoring outdated scroll event.';
                    var25 = var17;
                    var22 = var20;
                    var21 = var19;
                    var13 = var25[var16](var24, var23, var22, var21, var20);
                    _fun0027_ip = 420; continue _fun0027;
 181:
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
                    var15 = 93;
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
 0:
                            var3 = arg1;
                            var9 = var3.isAtBottom;
                            var8 = var3.isNearBottom;
                            var1 = undefined;
                            if(!(var8 === var1)) { _fun0028_ip = 25; continue _fun0028 }
 23:
                            var8 = false;
 25:
                            var7 = var3.isNearTop;
                            if(!(var7 === var1)) { _fun0028_ip = 37; continue _fun0028 }
 35:
                            var7 = false;
 37:
                            var6 = var3.dragging;
                            if(!(var6 === var1)) { _fun0028_ip = 49; continue _fun0028 }
 47:
                            var6 = false;
 49:
                            var5 = var3.decelerating;
                            if(!(var5 === var1)) { _fun0028_ip = 61; continue _fun0028 }
 59:
                            var5 = false;
 61:
                            var4 = var3.shouldShowJumpToPresent;
                            if(!(var4 === var1)) { _fun0028_ip = 73; continue _fun0028 }
 71:
                            var4 = false;
 73:
                            var _closure4_slot0 = var4;
                            var11 = var3.isFirstMessageVisible;
                            if(!(var11 === var1)) { _fun0028_ip = 89; continue _fun0028 }
 87:
                            var11 = false;
 89:
                            var10 = _closure2_slot126;
                            var4 = {};
                            var4['isAtBottom'] = var9;
                            var4['isNearBottom'] = var8;
                            var4['isNearTop'] = var7;
                            var4['dragging'] = var6;
                            var4['decelerating'] = var5;
                            var4['isFirstMessageVisible'] = var11;
                            var4 = var10.bind(var1)(var4);
                            if(!var4) { _fun0028_ip = 213; continue _fun0028 }
 136:
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
                            var3 = 94;
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.batchUpdates;
                            var2 = function() {
                                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                                    var5 = _closure1_slot13;
                                    var4 = _closure2_slot7;
                                    var3 = _closure2_slot2;
                                    var2 = _closure4_slot0;
                                    if(var2) { _fun0029_ip = 38; continue _fun0029 }
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
                    if(!(var2 != var3)) { _fun0027_ip = 420; continue _fun0027 }
 374:
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
 420:
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
 0:
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
                        var1 = 95;
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
                        var1 = 95;
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
                    if(!var4) { _fun0030_ip = 335; continue _fun0030 }
 328:
                    var3 = function(arg1) {
                        var3 = _closure2_slot125;
                        var2 = var3.handleDoubleTapMessage;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
 335:
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
            var66 = 96;
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
            if(!var67) { _fun0004_ip = 5379; continue _fun0004 }
 5376:
            var67 = !var42;
 5379:
            if(!var67) { _fun0004_ip = 5400; continue _fun0004 }
 5382:
            r124 = var5 == var43;
            var42 = undefined;
            if(r124) { _fun0004_ip = 5397; continue _fun0004 }
 5391:
            var42 = var43.isMessagesCached;
 5397:
            var67 = var42;
 5400:
            var _closure2_slot131 = var67;
            var42 = _closure1_slot5;
            r126 = var42.useEffect;
            r124 = new Array(3);
            r124[0] = var10;
            r124[1] = r123;
            r124[2] = var36;
            r123 = function() {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                    var3 = _closure2_slot128;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0031_ip = 28; continue _fun0031 }
 16:
                    var4 = _closure2_slot128;
                    var3 = _closure2_slot7;
                    var2 = var4 !== var3;
 28:
                    if(!var2) { _fun0031_ip = 79; continue _fun0031 }
 31:
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
 79:
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
 0:
                    var2 = _closure2_slot129;
                    var2 = !var2;
                    if(!var2) { _fun0032_ip = 17; continue _fun0032 }
 13:
                    var2 = _closure2_slot68;
 17:
                    if(!var2) { _fun0032_ip = 40; continue _fun0032 }
 20:
                    var3 = _closure2_slot103;
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
 0:
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
                    if(!var4) { _fun0033_ip = 163; continue _fun0033 }
 60:
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
                    if(var3) { _fun0033_ip = 125; continue _fun0033 }
 115:
                    var3 = _closure2_slot130;
                    var4 = var3.jumpSequenceId;
 125:
                    var3 = _closure2_slot6;
                    var5 = var5 == var3;
                    var3 = undefined;
                    if(var5) { _fun0033_ip = 148; continue _fun0033 }
 138:
                    var5 = _closure2_slot6;
                    var3 = var5.jumpSequenceId;
 148:
                    if(!(var4 === var3)) { _fun0033_ip = 163; continue _fun0033 }
 152:
                    var3 = _closure2_slot108;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
 163:
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
            if(var69) { _fun0004_ip = 5798; continue _fun0004 }
 5792:
            var68 = var43.channelThreadsVersion;
 5798:
            var34[61] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 5817; continue _fun0004 }
 5811:
            var68 = var43.rsvpVersion;
 5817:
            var34[62] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 5836; continue _fun0004 }
 5830:
            var68 = var43.repliedIds;
 5836:
            var34[63] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 5855; continue _fun0004 }
 5849:
            var68 = var43.hasLoadedExperiments;
 5855:
            var34[64] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 5874; continue _fun0004 }
 5868:
            var68 = var43.communicationDisabledVersion;
 5874:
            var34[65] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 5893; continue _fun0004 }
 5887:
            var68 = var43.messageAuthorMembers;
 5893:
            var34[66] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 5912; continue _fun0004 }
 5906:
            var68 = var43.failedMessagesVersion;
 5912:
            var34[67] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 5931; continue _fun0004 }
 5925:
            var68 = var43.interactionStates;
 5931:
            var34[68] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 5950; continue _fun0004 }
 5944:
            var68 = var43.interactionComponentStates;
 5950:
            var34[69] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 5969; continue _fun0004 }
 5963:
            var68 = var43.interactionComponentStatesVersion;
 5969:
            var34[70] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 5988; continue _fun0004 }
 5982:
            var68 = var43.shouldDisableInteractiveComponents;
 5988:
            var34[71] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6007; continue _fun0004 }
 6001:
            var68 = var43.channelPolls;
 6007:
            var34[72] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6026; continue _fun0004 }
 6020:
            var68 = var43.activityInstanceIds;
 6026:
            var34[73] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6045; continue _fun0004 }
 6039:
            var68 = var43.activityParticipants;
 6045:
            var34[74] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6064; continue _fun0004 }
 6058:
            var68 = var43.activityInstancePresenceDetails;
 6064:
            var34[75] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6083; continue _fun0004 }
 6077:
            var68 = var43.messagesWithActivitiesLaunching;
 6083:
            var34[76] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6102; continue _fun0004 }
 6096:
            var68 = var43.invalidApplicationIds;
 6102:
            var34[77] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6121; continue _fun0004 }
 6115:
            var68 = var43.applicationAssetFetchingIds;
 6121:
            var34[78] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6140; continue _fun0004 }
 6134:
            var68 = var43.appDirectoryEmbedApplications;
 6140:
            var34[79] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6159; continue _fun0004 }
 6153:
            var68 = var43.invalidAppDirectoryEmbedApplicationIds;
 6159:
            var34[80] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6178; continue _fun0004 }
 6172:
            var68 = var43.appDirectoryEmbedApplicationFetchStates;
 6178:
            var34[81] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6197; continue _fun0004 }
 6191:
            var68 = var43.lazyCacheStatus;
 6197:
            var34[82] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6216; continue _fun0004 }
 6210:
            var68 = var43.isFollowingForumPost;
 6216:
            var34[83] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6235; continue _fun0004 }
 6229:
            var68 = var43.showMediaPostSharePrompt;
 6235:
            var34[84] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6254; continue _fun0004 }
 6248:
            var68 = var43.referralTrialOfferIds;
 6254:
            var34[85] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6273; continue _fun0004 }
 6267:
            var68 = var43.trialOffer;
 6273:
            var34[86] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6292; continue _fun0004 }
 6286:
            var68 = var43.isPremiumTier2User;
 6292:
            var34[87] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6311; continue _fun0004 }
 6305:
            var68 = var43.messageAuthorActivities;
 6311:
            var34[88] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6330; continue _fun0004 }
 6324:
            var68 = var43.activityInviteMessageIds;
 6330:
            var34[89] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6349; continue _fun0004 }
 6343:
            var68 = var43.resolvingGiftCodes;
 6349:
            var34[90] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6368; continue _fun0004 }
 6362:
            var68 = var43.resolvedGiftCodes;
 6368:
            var34[91] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6387; continue _fun0004 }
 6381:
            var68 = var43.acceptingGiftCodes;
 6387:
            var34[92] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6406; continue _fun0004 }
 6400:
            var68 = var43.mediaPostPreviewEmbeds;
 6406:
            var34[93] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6425; continue _fun0004 }
 6419:
            var68 = var43.explicitMediaFalsePositiveInfo;
 6425:
            var34[94] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6444; continue _fun0004 }
 6438:
            var68 = var43.guildTemplates;
 6444:
            var34[95] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6463; continue _fun0004 }
 6457:
            var68 = var43.buildOverrides;
 6463:
            var34[96] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6482; continue _fun0004 }
 6476:
            var68 = var43.quests;
 6482:
            var34[97] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6501; continue _fun0004 }
 6495:
            var68 = var43.isFetchingCurrentQuests;
 6501:
            var34[98] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6520; continue _fun0004 }
 6514:
            var68 = var43.showPushFeedback;
 6520:
            var34[99] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6539; continue _fun0004 }
 6533:
            var68 = var43.forwardGuildsVersion;
 6539:
            var34[100] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6558; continue _fun0004 }
 6552:
            var68 = var43.renderCommunicationDisabled;
 6558:
            var34[101] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6577; continue _fun0004 }
 6571:
            var68 = var43.editingMessageId;
 6577:
            var34[102] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6596; continue _fun0004 }
 6590:
            var68 = var43.replyingMessageId;
 6596:
            var34[103] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6615; continue _fun0004 }
 6609:
            var68 = var43.oldestUnreadMessageId;
 6615:
            var34[104] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6634; continue _fun0004 }
 6628:
            var68 = var43.isCallActive;
 6634:
            var34[105] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6653; continue _fun0004 }
 6647:
            var68 = var43.voiceStateChannelId;
 6653:
            var34[106] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6672; continue _fun0004 }
 6666:
            var68 = var43.participantsLength;
 6672:
            var34[107] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6691; continue _fun0004 }
 6685:
            var68 = var43.invites;
 6691:
            var34[108] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6710; continue _fun0004 }
 6704:
            var68 = var43.isSpamMessageRequest;
 6710:
            var34[109] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6729; continue _fun0004 }
 6723:
            var68 = var43.isMessageRequest;
 6729:
            var34[110] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6748; continue _fun0004 }
 6742:
            var68 = var43.currentUserCommunicationDisabled;
 6748:
            var34[111] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6767; continue _fun0004 }
 6761:
            var68 = var43.androidKeyboardHeight;
 6767:
            var34[112] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6786; continue _fun0004 }
 6780:
            var68 = var43.inlineAttachmentMedia;
 6786:
            var34[113] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6805; continue _fun0004 }
 6799:
            var68 = var43.inlineEmbedMedia;
 6805:
            var34[114] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6824; continue _fun0004 }
 6818:
            var68 = var43.renderEmbeds;
 6824:
            var34[115] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6843; continue _fun0004 }
 6837:
            var68 = var43.renderReactions;
 6843:
            var34[116] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6862; continue _fun0004 }
 6856:
            var68 = var43.animateEmoji;
 6862:
            var34[117] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6881; continue _fun0004 }
 6875:
            var68 = var43.animateStickers;
 6881:
            var34[118] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6900; continue _fun0004 }
 6894:
            var68 = var43.gifAutoPlay;
 6900:
            var34[119] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6919; continue _fun0004 }
 6913:
            var68 = var43.containerWidth;
 6919:
            var34[120] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6938; continue _fun0004 }
 6932:
            var68 = var43.guildSystemChannelFlags;
 6938:
            var34[121] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6957; continue _fun0004 }
 6951:
            var68 = var43.userSettingsLocale;
 6957:
            var34[122] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6976; continue _fun0004 }
 6970:
            var68 = var43.roleStyle;
 6976:
            var34[123] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 6995; continue _fun0004 }
 6989:
            var68 = var43.canSendMessages;
 6995:
            var34[124] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 7014; continue _fun0004 }
 7008:
            var68 = var43.selectedSummary;
 7014:
            var34[125] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 7033; continue _fun0004 }
 7027:
            var68 = var43.shouldObscureSpoiler;
 7033:
            var34[126] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 7052; continue _fun0004 }
 7046:
            var68 = var43.shouldFilterKeywords;
 7052:
            var34[127] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 7071; continue _fun0004 }
 7065:
            var68 = var43.isStaff;
 7071:
            var34[128] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 7090; continue _fun0004 }
 7084:
            var68 = var43.isAgeVerified;
 7090:
            var34[129] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 7109; continue _fun0004 }
 7103:
            var68 = var43.theme;
 7109:
            var34[130] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 7128; continue _fun0004 }
 7122:
            var68 = var43.saturation;
 7128:
            var34[131] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 7147; continue _fun0004 }
 7141:
            var68 = var43.threadStartingReferenceMessage;
 7147:
            var34[132] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 7166; continue _fun0004 }
 7160:
            var68 = var43.unloadedContentEntryMessageIds;
 7166:
            var34[133] = var68;
            var69 = var5 == var43;
            var68 = undefined;
            if(var69) { _fun0004_ip = 7185; continue _fun0004 }
 7179:
            var68 = var43.guildInviteColorsFetched;
 7185:
            var34[134] = var68;
            var34[135] = var67;
            var34[136] = var66;
            var66 = var32.isAtBottom;
            var34[137] = var66;
            var34[138] = var65;
            var66 = var5 == var43;
            var65 = undefined;
            if(var66) { _fun0004_ip = 7226; continue _fun0004 }
 7220:
            var65 = var43.uploads;
 7226:
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
            if(var56) { _fun0004_ip = 7293; continue _fun0004 }
 7287:
            var55 = var43.shouldForceRender;
 7293:
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
            if(var46) { _fun0004_ip = 7360; continue _fun0004 }
 7354:
            var45 = var43.guildEmojis;
 7360:
            var34[165] = var45;
            var34[166] = var44;
            var44 = var5 == var43;
            var5 = undefined;
            if(var44) { _fun0004_ip = 7383; continue _fun0004 }
 7377:
            var5 = var43.enableSwipeActions;
 7383:
            var34[167] = var5;
            var5 = function() {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
                    var2 = _closure2_slot11;
                    var8 = null;
                    if(!(var8 != var2)) { _fun0034_ip = 4165; continue _fun0034 }
 18:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var4 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 43; continue _fun0034 }
 33:
                    var2 = _closure2_slot127;
                    var5 = var2.inlineAttachmentMedia;
 43:
                    var2 = _closure2_slot12;
                    var14 = var5 !== var2;
                    if(var14) { _fun0034_ip = 85; continue _fun0034 }
 54:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 77; continue _fun0034 }
 67:
                    var2 = _closure2_slot127;
                    var5 = var2.inlineEmbedMedia;
 77:
                    var2 = _closure2_slot13;
                    var14 = var5 !== var2;
 85:
                    if(var14) { _fun0034_ip = 119; continue _fun0034 }
 88:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 111; continue _fun0034 }
 101:
                    var2 = _closure2_slot127;
                    var5 = var2.renderEmbeds;
 111:
                    var2 = _closure2_slot14;
                    var14 = var5 !== var2;
 119:
                    if(var14) { _fun0034_ip = 153; continue _fun0034 }
 122:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 145; continue _fun0034 }
 135:
                    var2 = _closure2_slot127;
                    var5 = var2.renderReactions;
 145:
                    var2 = _closure2_slot15;
                    var14 = var5 !== var2;
 153:
                    if(var14) { _fun0034_ip = 187; continue _fun0034 }
 156:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 179; continue _fun0034 }
 169:
                    var2 = _closure2_slot127;
                    var5 = var2.animateEmoji;
 179:
                    var2 = _closure2_slot16;
                    var14 = var5 !== var2;
 187:
                    if(var14) { _fun0034_ip = 221; continue _fun0034 }
 190:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 213; continue _fun0034 }
 203:
                    var2 = _closure2_slot127;
                    var5 = var2.animateStickers;
 213:
                    var2 = _closure2_slot17;
                    var14 = var5 !== var2;
 221:
                    if(var14) { _fun0034_ip = 255; continue _fun0034 }
 224:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 247; continue _fun0034 }
 237:
                    var2 = _closure2_slot127;
                    var5 = var2.gifAutoPlay;
 247:
                    var2 = _closure2_slot18;
                    var14 = var5 !== var2;
 255:
                    if(var14) { _fun0034_ip = 289; continue _fun0034 }
 258:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 281; continue _fun0034 }
 271:
                    var2 = _closure2_slot127;
                    var5 = var2.containerWidth;
 281:
                    var2 = _closure2_slot92;
                    var14 = var5 !== var2;
 289:
                    if(var14) { _fun0034_ip = 323; continue _fun0034 }
 292:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 315; continue _fun0034 }
 305:
                    var2 = _closure2_slot127;
                    var5 = var2.guildSystemChannelFlags;
 315:
                    var2 = _closure2_slot10;
                    var14 = var5 !== var2;
 323:
                    if(var14) { _fun0034_ip = 357; continue _fun0034 }
 326:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 349; continue _fun0034 }
 339:
                    var2 = _closure2_slot127;
                    var5 = var2.userSettingsLocale;
 349:
                    var2 = _closure2_slot75;
                    var14 = var5 !== var2;
 357:
                    if(var14) { _fun0034_ip = 391; continue _fun0034 }
 360:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 383; continue _fun0034 }
 373:
                    var2 = _closure2_slot127;
                    var5 = var2.roleStyle;
 383:
                    var2 = _closure2_slot57;
                    var14 = var5 !== var2;
 391:
                    if(var14) { _fun0034_ip = 425; continue _fun0034 }
 394:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 417; continue _fun0034 }
 407:
                    var2 = _closure2_slot127;
                    var5 = var2.canSendMessages;
 417:
                    var2 = _closure2_slot46;
                    var14 = var5 !== var2;
 425:
                    if(var14) { _fun0034_ip = 459; continue _fun0034 }
 428:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 451; continue _fun0034 }
 441:
                    var2 = _closure2_slot127;
                    var5 = var2.showPushFeedback;
 451:
                    var2 = _closure2_slot79;
                    var14 = var5 !== var2;
 459:
                    if(var14) { _fun0034_ip = 493; continue _fun0034 }
 462:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 485; continue _fun0034 }
 475:
                    var2 = _closure2_slot127;
                    var5 = var2.selectedSummary;
 485:
                    var2 = _closure2_slot84;
                    var14 = var5 !== var2;
 493:
                    if(var14) { _fun0034_ip = 527; continue _fun0034 }
 496:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 519; continue _fun0034 }
 509:
                    var2 = _closure2_slot127;
                    var5 = var2.shouldObscureSpoiler;
 519:
                    var2 = _closure2_slot87;
                    var14 = var5 !== var2;
 527:
                    if(var14) { _fun0034_ip = 561; continue _fun0034 }
 530:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 553; continue _fun0034 }
 543:
                    var2 = _closure2_slot127;
                    var5 = var2.shouldFilterKeywords;
 553:
                    var2 = _closure2_slot96;
                    var14 = var5 !== var2;
 561:
                    if(var14) { _fun0034_ip = 595; continue _fun0034 }
 564:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 587; continue _fun0034 }
 577:
                    var2 = _closure2_slot127;
                    var5 = var2.explicitMediaFalsePositiveInfo;
 587:
                    var2 = _closure2_slot91;
                    var14 = var5 !== var2;
 595:
                    if(var14) { _fun0034_ip = 629; continue _fun0034 }
 598:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 621; continue _fun0034 }
 611:
                    var2 = _closure2_slot127;
                    var5 = var2.isStaff;
 621:
                    var2 = _closure2_slot95;
                    var14 = var5 !== var2;
 629:
                    if(var14) { _fun0034_ip = 663; continue _fun0034 }
 632:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 655; continue _fun0034 }
 645:
                    var2 = _closure2_slot127;
                    var5 = var2.isAgeVerified;
 655:
                    var2 = _closure2_slot88;
                    var14 = var5 !== var2;
 663:
                    if(var14) { _fun0034_ip = 697; continue _fun0034 }
 666:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 689; continue _fun0034 }
 679:
                    var2 = _closure2_slot127;
                    var5 = var2.theme;
 689:
                    var2 = _closure2_slot19;
                    var14 = var5 !== var2;
 697:
                    if(var14) { _fun0034_ip = 731; continue _fun0034 }
 700:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 723; continue _fun0034 }
 713:
                    var2 = _closure2_slot127;
                    var5 = var2.saturation;
 723:
                    var2 = _closure2_slot58;
                    var14 = var5 !== var2;
 731:
                    if(var14) { _fun0034_ip = 775; continue _fun0034 }
 734:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0034_ip = 757; continue _fun0034 }
 747:
                    var2 = _closure2_slot127;
                    var5 = var2.shouldForceRender;
 757:
                    var2 = _closure2_slot106;
                    var2 = var5 !== var2;
                    if(!var2) { _fun0034_ip = 772; continue _fun0034 }
 768:
                    var2 = _closure2_slot106;
 772:
                    var14 = var2;
 775:
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
                    if(!(var8 == var10)) { _fun0034_ip = 883; continue _fun0034 }
 877:
                    var10 = _closure2_slot6;
                    _fun0034_ip = 887; continue _fun0034;
 883:
                    var10 = _closure2_slot130;
 887:
                    var5['messages'] = var10;
                    var10 = _closure2_slot127;
                    var11 = var8 == var10;
                    var10 = undefined;
                    if(var11) { _fun0034_ip = 915; continue _fun0034 }
 905:
                    var11 = _closure2_slot127;
                    var10 = var11.androidKeyboardHeight;
 915:
                    if(!(var8 == var10)) { _fun0034_ip = 923; continue _fun0034 }
 919:
                    var10 = _closure2_slot81;
 923:
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
                    if(var5) { _fun0034_ip = 994; continue _fun0034 }
 984:
                    var5 = _closure2_slot127;
                    var13 = var5.resolvingGiftCodes;
 994:
                    var5 = _closure2_slot50;
                    var34 = var13 !== var5;
                    if(var34) { _fun0034_ip = 1036; continue _fun0034 }
 1005:
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 1028; continue _fun0034 }
 1018:
                    var5 = _closure2_slot127;
                    var13 = var5.resolvedGiftCodes;
 1028:
                    var5 = _closure2_slot51;
                    var34 = var13 !== var5;
 1036:
                    if(var34) { _fun0034_ip = 1070; continue _fun0034 }
 1039:
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 1062; continue _fun0034 }
 1052:
                    var5 = _closure2_slot127;
                    var13 = var5.acceptingGiftCodes;
 1062:
                    var5 = _closure2_slot52;
                    var34 = var13 !== var5;
 1070:
                    var _closure3_slot0 = var34;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var33 = undefined;
                    if(var5) { _fun0034_ip = 1097; continue _fun0034 }
 1087:
                    var5 = _closure2_slot127;
                    var33 = var5.uploads;
 1097:
                    var32 = _closure2_slot54;
                    var13 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var15 = 97;
                    var5 = var5[var15];
                    var16 = var13.bind(var4)(var5);
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 1144; continue _fun0034 }
 1134:
                    var5 = _closure2_slot127;
                    var13 = var5.interactionStates;
 1144:
                    var5 = _closure2_slot60;
                    var5 = var16.bind(var4)(var13, var5);
                    var24 = !var5;
                    var _closure3_slot1 = var24;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 1184; continue _fun0034 }
 1174:
                    var5 = _closure2_slot127;
                    var13 = var5.channelPolls;
 1184:
                    var5 = _closure2_slot90;
                    var21 = var13 !== var5;
                    var _closure3_slot2 = var21;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 1219; continue _fun0034 }
 1209:
                    var5 = _closure2_slot127;
                    var13 = var5.interactionComponentStatesVersion;
 1219:
                    var5 = _closure2_slot62;
                    var23 = var13 !== var5;
                    var _closure3_slot3 = var23;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 1254; continue _fun0034 }
 1244:
                    var5 = _closure2_slot127;
                    var13 = var5.shouldDisableInteractiveComponents;
 1254:
                    var5 = _closure2_slot89;
                    var5 = var13 !== var5;
                    var _closure3_slot4 = var5;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 1289; continue _fun0034 }
 1279:
                    var5 = _closure2_slot127;
                    var13 = var5.communicationDisabledVersion;
 1289:
                    var5 = _closure2_slot71;
                    var30 = var13 !== var5;
                    var _closure3_slot5 = var30;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 1324; continue _fun0034 }
 1314:
                    var5 = _closure2_slot127;
                    var13 = var5.messageAuthorMembers;
 1324:
                    var5 = _closure2_slot72;
                    var29 = var13 !== var5;
                    var _closure3_slot6 = var29;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 1359; continue _fun0034 }
 1349:
                    var5 = _closure2_slot127;
                    var13 = var5.failedMessagesVersion;
 1359:
                    var5 = _closure2_slot70;
                    var28 = var13 !== var5;
                    var _closure3_slot7 = var28;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 1394; continue _fun0034 }
 1384:
                    var5 = _closure2_slot127;
                    var13 = var5.renderCommunicationDisabled;
 1394:
                    var5 = _closure2_slot73;
                    var25 = var13 !== var5;
                    var _closure3_slot8 = var25;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var27 = undefined;
                    if(var5) { _fun0034_ip = 1429; continue _fun0034 }
 1419:
                    var5 = _closure2_slot127;
                    var27 = var5.forwardGuildsVersion;
 1429:
                    var26 = _closure2_slot97;
                    var13 = _closure2_slot1;
                    var5 = var13.isForumPost;
                    var22 = var5.bind(var13)();
                    if(!var22) { _fun0034_ip = 1481; continue _fun0034 }
 1450:
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 1473; continue _fun0034 }
 1463:
                    var5 = _closure2_slot127;
                    var13 = var5.isFollowingForumPost;
 1473:
                    var5 = _closure2_slot77;
                    var22 = var13 !== var5;
 1481:
                    var _closure3_slot9 = var22;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 1508; continue _fun0034 }
 1498:
                    var5 = _closure2_slot127;
                    var13 = var5.showMediaPostSharePrompt;
 1508:
                    var5 = _closure2_slot78;
                    var20 = var13 !== var5;
                    var _closure3_slot10 = var20;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 1543; continue _fun0034 }
 1533:
                    var5 = _closure2_slot127;
                    var13 = var5.unloadedContentEntryMessageIds;
 1543:
                    var5 = _closure2_slot93;
                    var19 = var13 !== var5;
                    var _closure3_slot11 = var19;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 1578; continue _fun0034 }
 1568:
                    var5 = _closure2_slot127;
                    var13 = var5.invalidApplicationIds;
 1578:
                    var5 = _closure2_slot27;
                    var5 = var13 !== var5;
                    var _closure3_slot12 = var5;
                    var13 = _closure2_slot127;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0034_ip = 1613; continue _fun0034 }
 1603:
                    var13 = _closure2_slot127;
                    var16 = var13.activityInstanceIds;
 1613:
                    var13 = _closure2_slot29;
                    var31 = var16 !== var13;
                    if(var31) { _fun0034_ip = 1655; continue _fun0034 }
 1624:
                    var13 = _closure2_slot127;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0034_ip = 1647; continue _fun0034 }
 1637:
                    var13 = _closure2_slot127;
                    var16 = var13.activityParticipants;
 1647:
                    var13 = _closure2_slot31;
                    var31 = var16 !== var13;
 1655:
                    if(var31) { _fun0034_ip = 1689; continue _fun0034 }
 1658:
                    var13 = _closure2_slot127;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0034_ip = 1681; continue _fun0034 }
 1671:
                    var13 = _closure2_slot127;
                    var16 = var13.applicationAssetFetchingIds;
 1681:
                    var13 = _closure2_slot28;
                    var31 = var16 !== var13;
 1689:
                    if(var31) { _fun0034_ip = 1723; continue _fun0034 }
 1692:
                    var13 = _closure2_slot127;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0034_ip = 1715; continue _fun0034 }
 1705:
                    var13 = _closure2_slot127;
                    var16 = var13.activityInstancePresenceDetails;
 1715:
                    var13 = _closure2_slot30;
                    var31 = var16 !== var13;
 1723:
                    if(var31) { _fun0034_ip = 1757; continue _fun0034 }
 1726:
                    var13 = _closure2_slot127;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0034_ip = 1749; continue _fun0034 }
 1739:
                    var13 = _closure2_slot127;
                    var16 = var13.messagesWithActivitiesLaunching;
 1749:
                    var13 = _closure2_slot32;
                    var31 = var16 !== var13;
 1757:
                    if(var31) { _fun0034_ip = 1763; continue _fun0034 }
 1760:
                    var31 = var5;
 1763:
                    var _closure3_slot13 = var31;
                    var13 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var15];
                    var17 = var13.bind(var4)(var5);
                    var16 = var17.areArraysShallowEqual;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 1813; continue _fun0034 }
 1803:
                    var5 = _closure2_slot127;
                    var13 = var5.activityInviteMessageIds;
 1813:
                    if(!(var8 == var13)) { _fun0034_ip = 1821; continue _fun0034 }
 1817:
                    var13 = new Array(0);
 1821:
                    var5 = _closure2_slot22;
                    if(!(var8 == var5)) { _fun0034_ip = 1835; continue _fun0034 }
 1829:
                    var5 = new Array(0);
                    _fun0034_ip = 1839; continue _fun0034;
 1835:
                    var5 = _closure2_slot22;
 1839:
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
                    if(var5) { _fun0034_ip = 1898; continue _fun0034 }
 1888:
                    var5 = _closure2_slot127;
                    var13 = var5.referralTrialOfferIds;
 1898:
                    if(!(var8 == var13)) { _fun0034_ip = 1906; continue _fun0034 }
 1902:
                    var13 = new Array(0);
 1906:
                    var5 = _closure2_slot39;
                    if(!(var8 == var5)) { _fun0034_ip = 1920; continue _fun0034 }
 1914:
                    var5 = new Array(0);
                    _fun0034_ip = 1924; continue _fun0034;
 1920:
                    var5 = _closure2_slot39;
 1924:
                    var5 = var15.bind(var16)(var13, var5);
                    var17 = !var5;
                    if(var17) { _fun0034_ip = 1967; continue _fun0034 }
 1936:
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 1959; continue _fun0034 }
 1949:
                    var5 = _closure2_slot127;
                    var13 = var5.trialOffer;
 1959:
                    var5 = _closure2_slot40;
                    var17 = var13 !== var5;
 1967:
                    if(var17) { _fun0034_ip = 2001; continue _fun0034 }
 1970:
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 1993; continue _fun0034 }
 1983:
                    var5 = _closure2_slot127;
                    var13 = var5.isPremiumTier2User;
 1993:
                    var5 = _closure2_slot41;
                    var17 = var13 !== var5;
 2001:
                    var _closure3_slot15 = var17;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 2028; continue _fun0034 }
 2018:
                    var5 = _closure2_slot127;
                    var13 = var5.guildInviteColorsFetched;
 2028:
                    var5 = _closure2_slot98;
                    var16 = var13 !== var5;
                    var _closure3_slot16 = var16;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0034_ip = 2063; continue _fun0034 }
 2053:
                    var5 = _closure2_slot127;
                    var13 = var5.guildEmojis;
 2063:
                    var5 = _closure2_slot99;
                    var13 = var13 !== var5;
                    var _closure3_slot17 = var13;
                    var5 = _closure2_slot80;
                    var35 = 'initializing';
                    var5 = var35 !== var5;
                    var15 = _closure2_slot127;
                    var36 = var8 == var15;
                    var15 = undefined;
                    if(var36) { _fun0034_ip = 2112; continue _fun0034 }
 2102:
                    var36 = _closure2_slot127;
                    var15 = var36.lazyCacheStatus;
 2112:
                    var15 = var35 !== var15;
                    if(var14) { _fun0034_ip = 3354; continue _fun0034 }
 2122:
                    if(var34) { _fun0034_ip = 3354; continue _fun0034 }
 2128:
                    if(!(var33 === var32)) { _fun0034_ip = 3354; continue _fun0034 }
 2135:
                    if(var31) { _fun0034_ip = 3354; continue _fun0034 }
 2141:
                    var32 = _closure2_slot130;
                    var31 = _closure2_slot6;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2156:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2179; continue _fun0034 }
 2169:
                    var31 = _closure2_slot127;
                    var32 = var31.editingMessageId;
 2179:
                    var31 = _closure2_slot42;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2190:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2213; continue _fun0034 }
 2203:
                    var31 = _closure2_slot127;
                    var32 = var31.replyingMessageId;
 2213:
                    var31 = _closure2_slot43;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2224:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2247; continue _fun0034 }
 2237:
                    var31 = _closure2_slot127;
                    var32 = var31.voiceStateChannelId;
 2247:
                    var31 = _closure2_slot48;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2258:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2281; continue _fun0034 }
 2271:
                    var31 = _closure2_slot127;
                    var32 = var31.messageAuthorActivities;
 2281:
                    var31 = _closure2_slot21;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2292:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2315; continue _fun0034 }
 2305:
                    var31 = _closure2_slot127;
                    var32 = var31.oldestUnreadMessageId;
 2315:
                    var31 = _closure2_slot44;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2326:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2349; continue _fun0034 }
 2339:
                    var31 = _closure2_slot127;
                    var32 = var31.invites;
 2349:
                    var31 = _closure2_slot23;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2360:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2383; continue _fun0034 }
 2373:
                    var31 = _closure2_slot127;
                    var32 = var31.appDirectoryEmbedApplications;
 2383:
                    var31 = _closure2_slot24;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2394:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2417; continue _fun0034 }
 2407:
                    var31 = _closure2_slot127;
                    var32 = var31.invalidAppDirectoryEmbedApplicationIds;
 2417:
                    var31 = _closure2_slot25;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2428:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2451; continue _fun0034 }
 2441:
                    var31 = _closure2_slot127;
                    var32 = var31.appDirectoryEmbedApplicationFetchStates;
 2451:
                    var31 = _closure2_slot26;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2462:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2485; continue _fun0034 }
 2475:
                    var31 = _closure2_slot127;
                    var32 = var31.guildTemplates;
 2485:
                    var31 = _closure2_slot34;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2496:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2519; continue _fun0034 }
 2509:
                    var31 = _closure2_slot127;
                    var32 = var31.buildOverrides;
 2519:
                    var31 = _closure2_slot35;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2530:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2553; continue _fun0034 }
 2543:
                    var31 = _closure2_slot127;
                    var32 = var31.quests;
 2553:
                    var31 = _closure2_slot36;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2564:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2587; continue _fun0034 }
 2577:
                    var31 = _closure2_slot127;
                    var32 = var31.isFetchingCurrentQuests;
 2587:
                    var31 = _closure2_slot37;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2598:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2621; continue _fun0034 }
 2611:
                    var31 = _closure2_slot127;
                    var32 = var31.participantsLength;
 2621:
                    var31 = _closure2_slot53;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2632:
                    var32 = _closure2_slot66;
                    var31 = _closure2_slot130;
                    var31 = var8 != var31;
                    if(!var31) { _fun0034_ip = 2673; continue _fun0034 }
 2647:
                    var33 = _closure2_slot130;
                    var33 = var33.ready;
                    if(var33) { _fun0034_ip = 2670; continue _fun0034 }
 2660:
                    var34 = _closure2_slot130;
                    var33 = var34.cached;
 2670:
                    var31 = var33;
 2673:
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2680:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2703; continue _fun0034 }
 2693:
                    var31 = _closure2_slot127;
                    var32 = var31.channelThreadsVersion;
 2703:
                    var31 = _closure2_slot59;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2714:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2737; continue _fun0034 }
 2727:
                    var31 = _closure2_slot127;
                    var32 = var31.rsvpVersion;
 2737:
                    var31 = _closure2_slot69;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2748:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2771; continue _fun0034 }
 2761:
                    var31 = _closure2_slot127;
                    var32 = var31.repliedIds;
 2771:
                    var31 = _closure2_slot55;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2782:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2805; continue _fun0034 }
 2795:
                    var31 = _closure2_slot127;
                    var32 = var31.hasLoadedExperiments;
 2805:
                    var31 = _closure2_slot63;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2816:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2839; continue _fun0034 }
 2829:
                    var31 = _closure2_slot127;
                    var32 = var31.isMessageRequest;
 2839:
                    var31 = _closure2_slot65;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2850:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2873; continue _fun0034 }
 2863:
                    var31 = _closure2_slot127;
                    var32 = var31.isSpamMessageRequest;
 2873:
                    var31 = _closure2_slot64;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2884:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2907; continue _fun0034 }
 2897:
                    var31 = _closure2_slot127;
                    var32 = var31.currentUserCommunicationDisabled;
 2907:
                    var31 = _closure2_slot74;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2918:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2941; continue _fun0034 }
 2931:
                    var31 = _closure2_slot127;
                    var32 = var31.userSettingsLocale;
 2941:
                    var31 = _closure2_slot75;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2952:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 2975; continue _fun0034 }
 2965:
                    var31 = _closure2_slot127;
                    var32 = var31.selectedSummary;
 2975:
                    var31 = _closure2_slot84;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 2986:
                    var31 = _closure2_slot127;
                    var31 = var8 == var31;
                    var32 = undefined;
                    if(var31) { _fun0034_ip = 3009; continue _fun0034 }
 2999:
                    var31 = _closure2_slot127;
                    var32 = var31.showPushFeedback;
 3009:
                    var31 = _closure2_slot79;
                    if(!(var32 === var31)) { _fun0034_ip = 3354; continue _fun0034 }
 3020:
                    if(!(var15 === var5)) { _fun0034_ip = 3354; continue _fun0034 }
 3027:
                    if(var30) { _fun0034_ip = 3354; continue _fun0034 }
 3033:
                    if(var29) { _fun0034_ip = 3354; continue _fun0034 }
 3039:
                    if(var28) { _fun0034_ip = 3354; continue _fun0034 }
 3045:
                    if(!(var27 === var26)) { _fun0034_ip = 3354; continue _fun0034 }
 3052:
                    if(var25) { _fun0034_ip = 3354; continue _fun0034 }
 3058:
                    if(var24) { _fun0034_ip = 3354; continue _fun0034 }
 3064:
                    if(var23) { _fun0034_ip = 3354; continue _fun0034 }
 3070:
                    if(var22) { _fun0034_ip = 3354; continue _fun0034 }
 3076:
                    if(!(var8 == var11)) { _fun0034_ip = 3354; continue _fun0034 }
 3083:
                    if(!(var8 == var9)) { _fun0034_ip = 3354; continue _fun0034 }
 3090:
                    var22 = _closure2_slot127;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0034_ip = 3113; continue _fun0034 }
 3103:
                    var22 = _closure2_slot127;
                    var23 = var22.androidKeyboardHeight;
 3113:
                    var22 = _closure2_slot81;
                    if(!(var23 === var22)) { _fun0034_ip = 3354; continue _fun0034 }
 3124:
                    var22 = _closure2_slot127;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0034_ip = 3147; continue _fun0034 }
 3137:
                    var22 = _closure2_slot127;
                    var23 = var22.mediaPostPreviewEmbeds;
 3147:
                    var22 = _closure2_slot33;
                    if(!(var23 === var22)) { _fun0034_ip = 3354; continue _fun0034 }
 3158:
                    var22 = _closure2_slot127;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0034_ip = 3181; continue _fun0034 }
 3171:
                    var22 = _closure2_slot127;
                    var23 = var22.shouldObscureSpoiler;
 3181:
                    var22 = _closure2_slot87;
                    if(!(var23 === var22)) { _fun0034_ip = 3354; continue _fun0034 }
 3192:
                    var22 = _closure2_slot127;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0034_ip = 3215; continue _fun0034 }
 3205:
                    var22 = _closure2_slot127;
                    var23 = var22.shouldFilterKeywords;
 3215:
                    var22 = _closure2_slot96;
                    if(!(var23 === var22)) { _fun0034_ip = 3354; continue _fun0034 }
 3226:
                    var22 = _closure2_slot127;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0034_ip = 3249; continue _fun0034 }
 3239:
                    var22 = _closure2_slot127;
                    var23 = var22.shouldDisableInteractiveComponents;
 3249:
                    var22 = _closure2_slot89;
                    if(!(var23 === var22)) { _fun0034_ip = 3354; continue _fun0034 }
 3257:
                    if(var21) { _fun0034_ip = 3354; continue _fun0034 }
 3260:
                    if(var20) { _fun0034_ip = 3354; continue _fun0034 }
 3263:
                    var20 = _closure2_slot127;
                    var20 = var8 == var20;
                    var21 = undefined;
                    if(var20) { _fun0034_ip = 3286; continue _fun0034 }
 3276:
                    var20 = _closure2_slot127;
                    var21 = var20.threadStartingReferenceMessage;
 3286:
                    var20 = _closure2_slot49;
                    if(!(var21 === var20)) { _fun0034_ip = 3354; continue _fun0034 }
 3294:
                    if(var19) { _fun0034_ip = 3354; continue _fun0034 }
 3297:
                    if(var18) { _fun0034_ip = 3354; continue _fun0034 }
 3300:
                    if(var17) { _fun0034_ip = 3354; continue _fun0034 }
 3303:
                    if(var16) { _fun0034_ip = 3354; continue _fun0034 }
 3306:
                    if(var13) { _fun0034_ip = 3354; continue _fun0034 }
 3309:
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var13 = 83;
                    var13 = var17[var13];
                    var18 = var16.bind(var4)(var13);
                    var17 = var18.recordTimings;
                    var16 = _closure2_slot7;
                    var13 = _closure2_slot6;
                    var13 = var17.bind(var18)(var16, var13);
                    _fun0034_ip = 4165; continue _fun0034;
 3354:
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
                    if(var16) { _fun0034_ip = 3409; continue _fun0034 }
 3399:
                    var16 = _closure2_slot127;
                    var17 = var16.editingMessageId;
 3409:
                    var16 = _closure2_slot42;
                    if(!(var17 !== var16)) { _fun0034_ip = 3499; continue _fun0034 }
 3417:
                    var16 = _closure2_slot42;
                    if(!(var8 != var16)) { _fun0034_ip = 3439; continue _fun0034 }
 3425:
                    var17 = var13.add;
                    var16 = _closure2_slot42;
                    var16 = var17.bind(var13)(var16);
 3439:
                    var16 = _closure2_slot127;
                    var17 = var8 == var16;
                    var16 = undefined;
                    if(var17) { _fun0034_ip = 3462; continue _fun0034 }
 3452:
                    var17 = _closure2_slot127;
                    var16 = var17.editingMessageId;
 3462:
                    if(!(var8 != var16)) { _fun0034_ip = 3499; continue _fun0034 }
 3466:
                    var17 = var13.add;
                    var16 = _closure2_slot127;
                    var18 = var8 == var16;
                    var16 = undefined;
                    if(var18) { _fun0034_ip = 3494; continue _fun0034 }
 3484:
                    var18 = _closure2_slot127;
                    var16 = var18.editingMessageId;
 3494:
                    var16 = var17.bind(var13)(var16);
 3499:
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0034_ip = 3522; continue _fun0034 }
 3512:
                    var16 = _closure2_slot127;
                    var17 = var16.replyingMessageId;
 3522:
                    var16 = _closure2_slot43;
                    if(!(var17 !== var16)) { _fun0034_ip = 3612; continue _fun0034 }
 3530:
                    var16 = _closure2_slot43;
                    if(!(var8 != var16)) { _fun0034_ip = 3552; continue _fun0034 }
 3538:
                    var17 = var13.add;
                    var16 = _closure2_slot43;
                    var16 = var17.bind(var13)(var16);
 3552:
                    var16 = _closure2_slot127;
                    var17 = var8 == var16;
                    var16 = undefined;
                    if(var17) { _fun0034_ip = 3575; continue _fun0034 }
 3565:
                    var17 = _closure2_slot127;
                    var16 = var17.replyingMessageId;
 3575:
                    if(!(var8 != var16)) { _fun0034_ip = 3612; continue _fun0034 }
 3579:
                    var17 = var13.add;
                    var16 = _closure2_slot127;
                    var18 = var8 == var16;
                    var16 = undefined;
                    if(var18) { _fun0034_ip = 3607; continue _fun0034 }
 3597:
                    var18 = _closure2_slot127;
                    var16 = var18.replyingMessageId;
 3607:
                    var16 = var17.bind(var13)(var16);
 3612:
                    var17 = _closure2_slot66;
                    var16 = _closure2_slot130;
                    var16 = var8 != var16;
                    if(!var16) { _fun0034_ip = 3653; continue _fun0034 }
 3627:
                    var18 = _closure2_slot130;
                    var18 = var18.ready;
                    if(var18) { _fun0034_ip = 3650; continue _fun0034 }
 3640:
                    var19 = _closure2_slot130;
                    var18 = var19.cached;
 3650:
                    var16 = var18;
 3653:
                    if(!(var17 === var16)) { _fun0034_ip = 3750; continue _fun0034 }
 3657:
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0034_ip = 3680; continue _fun0034 }
 3670:
                    var16 = _closure2_slot127;
                    var17 = var16.isCallActive;
 3680:
                    var16 = _closure2_slot47;
                    if(!(var17 === var16)) { _fun0034_ip = 3750; continue _fun0034 }
 3688:
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0034_ip = 3711; continue _fun0034 }
 3701:
                    var16 = _closure2_slot127;
                    var17 = var16.voiceStateChannelId;
 3711:
                    var16 = _closure2_slot48;
                    if(!(var17 === var16)) { _fun0034_ip = 3750; continue _fun0034 }
 3719:
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0034_ip = 3742; continue _fun0034 }
 3732:
                    var16 = _closure2_slot127;
                    var17 = var16.participantsLength;
 3742:
                    var16 = _closure2_slot53;
                    if(!(var17 !== var16)) { _fun0034_ip = 3832; continue _fun0034 }
 3750:
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
                    if(!(var8 != var16)) { _fun0034_ip = 3832; continue _fun0034 }
 3817:
                    var17 = var13.add;
                    var16 = var16.id;
                    var16 = var17.bind(var13)(var16);
 3832:
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0034_ip = 3855; continue _fun0034 }
 3845:
                    var16 = _closure2_slot127;
                    var17 = var16.channelThreadsVersion;
 3855:
                    var16 = _closure2_slot59;
                    var16 = var17 !== var16;
                    var _closure3_slot19 = var16;
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0034_ip = 3890; continue _fun0034 }
 3880:
                    var16 = _closure2_slot127;
                    var17 = var16.rsvpVersion;
 3890:
                    var16 = _closure2_slot69;
                    var16 = var17 !== var16;
                    var _closure3_slot20 = var16;
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0034_ip = 3925; continue _fun0034 }
 3915:
                    var16 = _closure2_slot127;
                    var17 = var16.repliedIds;
 3925:
                    var16 = _closure2_slot55;
                    var16 = var17 !== var16;
                    var _closure3_slot21 = var16;
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0034_ip = 3960; continue _fun0034 }
 3950:
                    var16 = _closure2_slot127;
                    var17 = var16.hasLoadedExperiments;
 3960:
                    var16 = _closure2_slot63;
                    var16 = var17 !== var16;
                    var _closure3_slot22 = var16;
                    var16 = _closure2_slot127;
                    var17 = var8 == var16;
                    var16 = undefined;
                    if(var17) { _fun0034_ip = 3995; continue _fun0034 }
 3985:
                    var17 = _closure2_slot127;
                    var16 = var17.communicationDisabledVersion;
 3995:
                    var17 = var8 != var16;
                    var8 = -1;
                    if(!var17) { _fun0034_ip = 4011; continue _fun0034 }
 4008:
                    var8 = var16;
 4011:
                    var _closure3_slot23 = var8;
                    var8 = !var15;
                    if(var15) { _fun0034_ip = 4024; continue _fun0034 }
 4021:
                    var8 = var5;
 4024:
                    var _closure3_slot24 = var8;
                    var15 = _closure2_slot6;
                    var5 = var15.forEach;
                    var3 = function(arg1) {
                        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
                            var1 = arg1;
                            var3 = _closure3_slot22;
                            if(!var3) { _fun0035_ip = 38; continue _fun0035 }
 13:
                            var4 = var1.type;
                            var3 = _closure1_slot52;
                            var3 = var3.USER_JOIN;
                            if(!(var4 !== var3)) { _fun0035_ip = 2947; continue _fun0035 }
 38:
                            var3 = _closure3_slot21;
                            if(!var3) { _fun0035_ip = 108; continue _fun0035 }
 45:
                            var4 = var1.type;
                            var3 = _closure1_slot52;
                            var3 = var3.REPLY;
                            if(!(var4 === var3)) { _fun0035_ip = 108; continue _fun0035 }
 67:
                            var3 = var1.messageReference;
                            var4 = null;
                            if(!(var4 != var3)) { _fun0035_ip = 108; continue _fun0035 }
 79:
                            var5 = _closure2_slot55;
                            var4 = var5.has;
                            var3 = var3.message_id;
                            var3 = var4.bind(var5)(var3);
                            if(var3) { _fun0035_ip = 2924; continue _fun0035 }
 108:
                            var3 = _closure3_slot19;
                            if(!var3) { _fun0035_ip = 145; continue _fun0035 }
 115:
                            var4 = var1.hasFlag;
                            var3 = _closure1_slot53;
                            var3 = var3.HAS_THREAD;
                            var3 = var4.bind(var1)(var3);
                            if(var3) { _fun0035_ip = 2903; continue _fun0035 }
 145:
                            var3 = _closure3_slot20;
                            if(!var3) { _fun0035_ip = 172; continue _fun0035 }
 152:
                            var3 = var1.codedLinks;
                            var4 = var3.length;
                            var3 = 0;
                            if(!(!(var4 > var3))) { _fun0035_ip = 2882; continue _fun0035 }
 172:
                            var3 = _closure3_slot17;
                            if(!var3) { _fun0035_ip = 204; continue _fun0035 }
 179:
                            var4 = var1.type;
                            var3 = _closure1_slot52;
                            var3 = var3.EMOJI_ADDED;
                            if(!(var4 !== var3)) { _fun0035_ip = 2861; continue _fun0035 }
 204:
                            var3 = _closure3_slot8;
                            if(var3) { _fun0035_ip = 2840; continue _fun0035 }
 214:
                            var3 = _closure3_slot5;
                            if(!var3) { _fun0035_ip = 275; continue _fun0035 }
 221:
                            var5 = _closure2_slot8;
                            var4 = null;
                            if(!(var4 != var5)) { _fun0035_ip = 275; continue _fun0035 }
 234:
                            var6 = _closure1_slot40;
                            var5 = _closure2_slot8;
                            var3 = var1.author;
                            var4 = var3.id;
                            var3 = undefined;
                            var4 = var6.bind(var3)(var5, var4);
                            var3 = _closure3_slot23;
                            if(!(!(var4 > var3))) { _fun0035_ip = 2840; continue _fun0035 }
 275:
                            var3 = _closure3_slot6;
                            if(!var3) { _fun0035_ip = 322; continue _fun0035 }
 282:
                            var3 = _closure2_slot8;
                            var5 = null;
                            if(!(var5 != var3)) { _fun0035_ip = 322; continue _fun0035 }
 295:
                            var4 = var1.author;
                            var8 = var5 == var4;
                            var3 = undefined;
                            if(var8) { _fun0035_ip = 315; continue _fun0035 }
 310:
                            var3 = var4.id;
 315:
                            if(!(var5 == var3)) { _fun0035_ip = 2743; continue _fun0035 }
 322:
                            var3 = _closure3_slot7;
                            if(!var3) { _fun0035_ip = 354; continue _fun0035 }
 329:
                            var3 = var1.author;
                            var4 = var3.id;
                            var3 = _closure2_slot11;
                            if(!(var4 !== var3)) { _fun0035_ip = 2719; continue _fun0035 }
 354:
                            var3 = _closure3_slot1;
                            if(!var3) { _fun0035_ip = 436; continue _fun0035 }
 361:
                            var4 = _closure2_slot127;
                            var9 = null;
                            var4 = var9 == var4;
                            var8 = undefined;
                            if(var4) { _fun0035_ip = 389; continue _fun0035 }
 379:
                            var4 = _closure2_slot127;
                            var8 = var4.interactionStates;
 389:
                            if(!(var9 == var8)) { _fun0035_ip = 395; continue _fun0035 }
 393:
                            var8 = {};
 395:
                            var4 = var1.id;
                            var4 = var8[var4];
                            var8 = _closure2_slot60;
                            if(!(var9 == var8)) { _fun0035_ip = 416; continue _fun0035 }
 412:
                            var8 = {};
                            _fun0035_ip = 420; continue _fun0035;
 416:
                            var8 = _closure2_slot60;
 420:
                            var3 = var1.id;
                            var3 = var8[var3];
                            if(!(var4 === var3)) { _fun0035_ip = 2696; continue _fun0035 }
 436:
                            var3 = _closure3_slot3;
                            if(!var3) { _fun0035_ip = 534; continue _fun0035 }
 443:
                            var3 = _closure2_slot127;
                            var10 = null;
                            var9 = var10 == var3;
                            var3 = undefined;
                            if(var9) { _fun0035_ip = 495; continue _fun0035 }
 461:
                            var9 = _closure2_slot127;
                            var12 = var9.interactionComponentStates;
                            var9 = var10 == var12;
                            var3 = undefined;
                            if(var9) { _fun0035_ip = 495; continue _fun0035 }
 480:
                            var11 = var12.get;
                            var9 = var1.id;
                            var3 = var11.bind(var12)(var9);
 495:
                            var9 = _closure2_slot61;
                            var9 = var10 == var9;
                            var4 = undefined;
                            if(var9) { _fun0035_ip = 527; continue _fun0035 }
 508:
                            var10 = _closure2_slot61;
                            var9 = var10.get;
                            var8 = var1.id;
                            var4 = var9.bind(var10)(var8);
 527:
                            if(!(var3 === var4)) { _fun0035_ip = 2673; continue _fun0035 }
 534:
                            var3 = _closure3_slot4;
                            if(!var3) { _fun0035_ip = 561; continue _fun0035 }
 541:
                            var3 = var1.components;
                            var4 = var3.length;
                            var3 = 0;
                            if(!(var3 === var4)) { _fun0035_ip = 2649; continue _fun0035 }
 561:
                            var3 = _closure3_slot2;
                            if(!var3) { _fun0035_ip = 643; continue _fun0035 }
 568:
                            var4 = _closure2_slot127;
                            var9 = null;
                            var4 = var9 == var4;
                            var8 = undefined;
                            if(var4) { _fun0035_ip = 596; continue _fun0035 }
 586:
                            var4 = _closure2_slot127;
                            var8 = var4.channelPolls;
 596:
                            if(!(var9 == var8)) { _fun0035_ip = 602; continue _fun0035 }
 600:
                            var8 = {};
 602:
                            var4 = var1.id;
                            var4 = var8[var4];
                            var8 = _closure2_slot90;
                            if(!(var9 == var8)) { _fun0035_ip = 623; continue _fun0035 }
 619:
                            var8 = {};
                            _fun0035_ip = 627; continue _fun0035;
 623:
                            var8 = _closure2_slot90;
 627:
                            var3 = var1.id;
                            var3 = var8[var3];
                            if(!(var4 === var3)) { _fun0035_ip = 2626; continue _fun0035 }
 643:
                            var3 = _closure3_slot11;
                            if(!var3) { _fun0035_ip = 792; continue _fun0035 }
 653:
                            var4 = _closure2_slot127;
                            var9 = null;
                            var4 = var9 == var4;
                            var10 = undefined;
                            if(var4) { _fun0035_ip = 681; continue _fun0035 }
 671:
                            var4 = _closure2_slot127;
                            var10 = var4.unloadedContentEntryMessageIds;
 681:
                            if(!(var9 == var10)) { _fun0035_ip = 713; continue _fun0035 }
 685:
                            var4 = global;
                            var4 = var4.Set;
                            var8 = var4.prototype;
                            var8 = Object.create(var8, {constructor: {value: var4}});
                            var24 = var8;
                            var4 = new var24[var4](var23);
                            var10 = var4 instanceof Object ? var4 : var8;
 713:
                            var8 = var10.has;
                            var4 = var1.id;
                            var4 = var8.bind(var10)(var4);
                            var8 = _closure2_slot93;
                            if(!(var9 == var8)) { _fun0035_ip = 766; continue _fun0035 }
 736:
                            var8 = global;
                            var8 = var8.Set;
                            var9 = var8.prototype;
                            var9 = Object.create(var9, {constructor: {value: var8}});
                            var24 = var9;
                            var8 = new var24[var8](var23);
                            var9 = var8 instanceof Object ? var8 : var9;
                            _fun0035_ip = 770; continue _fun0035;
 766:
                            var9 = _closure2_slot93;
 770:
                            var8 = var9.has;
                            var3 = var1.id;
                            var3 = var8.bind(var9)(var3);
                            if(!(var4 === var3)) { _fun0035_ip = 2603; continue _fun0035 }
 792:
                            var8 = _closure2_slot1;
                            var3 = var8.isForumPost;
                            var3 = var3.bind(var8)();
                            if(!var3) { _fun0035_ip = 878; continue _fun0035 }
 812:
                            var3 = _closure3_slot9;
                            if(var3) { _fun0035_ip = 826; continue _fun0035 }
 819:
                            var3 = _closure3_slot10;
                            if(!var3) { _fun0035_ip = 878; continue _fun0035 }
 826:
                            var8 = var1.id;
                            var10 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var3 = 98;
                            var9 = var9[var3];
                            var3 = undefined;
                            var10 = var10.bind(var3)(var9);
                            var9 = var10.castChannelIdAsMessageId;
                            var3 = _closure2_slot7;
                            var3 = var9.bind(var10)(var3);
                            if(!(var8 !== var3)) { _fun0035_ip = 2579; continue _fun0035 }
 878:
                            var3 = _closure3_slot13;
                            if(!var3) { _fun0035_ip = 900; continue _fun0035 }
 885:
                            var8 = var1.activityInstance;
                            var3 = null;
                            if(!(var3 == var8)) { _fun0035_ip = 2555; continue _fun0035 }
 900:
                            var3 = _closure3_slot14;
                            if(!var3) { _fun0035_ip = 934; continue _fun0035 }
 907:
                            var10 = var1.activity;
                            var9 = null;
                            var11 = var9 == var10;
                            var8 = undefined;
                            if(var11) { _fun0035_ip = 930; continue _fun0035 }
 924:
                            var8 = var10.party_id;
 930:
                            var3 = var9 != var8;
 934:
                            if(!var3) { _fun0035_ip = 956; continue _fun0035 }
 937:
                            var9 = _closure3_slot18;
                            var8 = var9.add;
                            var3 = var1.id;
                            var3 = var8.bind(var9)(var3);
 956:
                            var8 = var1.author;
                            var3 = null;
                            if(!(var3 != var8)) { _fun0035_ip = 2966; continue _fun0035 }
 971:
                            var20 = {};
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var10 = undefined;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 998; continue _fun0035 }
 988:
                            var9 = _closure2_slot127;
                            var8 = var9.messageAuthorActivities;
 998:
                            if(!(var3 == var8)) { _fun0035_ip = 1004; continue _fun0035 }
 1002:
                            var8 = {};
 1004:
                            var20['messageAuthorActivities'] = var8;
                            var19 = {};
                            var8 = _closure2_slot21;
                            if(!(var3 == var8)) { _fun0035_ip = 1023; continue _fun0035 }
 1019:
                            var8 = {};
                            _fun0035_ip = 1027; continue _fun0035;
 1023:
                            var8 = _closure2_slot21;
 1027:
                            var19['messageAuthorActivities'] = var8;
                            var18 = {};
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 1057; continue _fun0035 }
 1047:
                            var9 = _closure2_slot127;
                            var8 = var9.invites;
 1057:
                            if(!(var3 == var8)) { _fun0035_ip = 1089; continue _fun0035 }
 1061:
                            var9 = global;
                            var9 = var9.Map;
                            var11 = var9.prototype;
                            var11 = Object.create(var11, {constructor: {value: var9}});
                            var24 = var11;
                            var9 = new var24[var9](var23);
                            var8 = var9 instanceof Object ? var9 : var11;
 1089:
                            var18['invites'] = var8;
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 1117; continue _fun0035 }
 1107:
                            var9 = _closure2_slot127;
                            var8 = var9.appDirectoryEmbedApplications;
 1117:
                            if(!(var3 == var8)) { _fun0035_ip = 1123; continue _fun0035 }
 1121:
                            var8 = {};
 1123:
                            var18['appDirectoryEmbedApplications'] = var8;
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 1151; continue _fun0035 }
 1141:
                            var9 = _closure2_slot127;
                            var8 = var9.invalidAppDirectoryEmbedApplicationIds;
 1151:
                            if(!(var3 == var8)) { _fun0035_ip = 1183; continue _fun0035 }
 1155:
                            var9 = global;
                            var9 = var9.Set;
                            var11 = var9.prototype;
                            var11 = Object.create(var11, {constructor: {value: var9}});
                            var24 = var11;
                            var9 = new var24[var9](var23);
                            var8 = var9 instanceof Object ? var9 : var11;
 1183:
                            var18['invalidAppDirectoryEmbedApplicationIds'] = var8;
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 1211; continue _fun0035 }
 1201:
                            var9 = _closure2_slot127;
                            var8 = var9.invalidApplicationIds;
 1211:
                            if(!(var3 == var8)) { _fun0035_ip = 1219; continue _fun0035 }
 1215:
                            var8 = new Array(0);
 1219:
                            var18['invalidApplicationIds'] = var8;
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 1247; continue _fun0035 }
 1237:
                            var9 = _closure2_slot127;
                            var8 = var9.activityParticipants;
 1247:
                            if(!(var3 == var8)) { _fun0035_ip = 1255; continue _fun0035 }
 1251:
                            var8 = new Array(0);
 1255:
                            var18['activityParticipants'] = var8;
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 1283; continue _fun0035 }
 1273:
                            var9 = _closure2_slot127;
                            var8 = var9.applicationAssetFetchingIds;
 1283:
                            if(!(var3 == var8)) { _fun0035_ip = 1291; continue _fun0035 }
 1287:
                            var8 = new Array(0);
 1291:
                            var18['applicationAssetFetchingIds'] = var8;
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 1319; continue _fun0035 }
 1309:
                            var9 = _closure2_slot127;
                            var8 = var9.appDirectoryEmbedApplicationFetchStates;
 1319:
                            if(!(var3 == var8)) { _fun0035_ip = 1325; continue _fun0035 }
 1323:
                            var8 = {};
 1325:
                            var18['appDirectoryEmbedApplicationFetchStates'] = var8;
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 1353; continue _fun0035 }
 1343:
                            var9 = _closure2_slot127;
                            var8 = var9.guildTemplates;
 1353:
                            if(!(var3 == var8)) { _fun0035_ip = 1385; continue _fun0035 }
 1357:
                            var9 = global;
                            var9 = var9.Map;
                            var11 = var9.prototype;
                            var11 = Object.create(var11, {constructor: {value: var9}});
                            var24 = var11;
                            var9 = new var24[var9](var23);
                            var8 = var9 instanceof Object ? var9 : var11;
 1385:
                            var18['guildTemplates'] = var8;
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 1413; continue _fun0035 }
 1403:
                            var9 = _closure2_slot127;
                            var8 = var9.buildOverrides;
 1413:
                            if(!(var3 == var8)) { _fun0035_ip = 1419; continue _fun0035 }
 1417:
                            var8 = {};
 1419:
                            var18['buildOverrides'] = var8;
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 1447; continue _fun0035 }
 1437:
                            var9 = _closure2_slot127;
                            var8 = var9.quests;
 1447:
                            if(!(var3 == var8)) { _fun0035_ip = 1455; continue _fun0035 }
 1451:
                            var8 = new Array(0);
 1455:
                            var18['quests'] = var8;
                            var8 = _closure2_slot127;
                            var8 = var3 == var8;
                            var9 = undefined;
                            if(var8) { _fun0035_ip = 1483; continue _fun0035 }
 1473:
                            var8 = _closure2_slot127;
                            var9 = var8.isFetchingCurrentQuests;
 1483:
                            var8 = var3 != var9;
                            if(!var8) { _fun0035_ip = 1493; continue _fun0035 }
 1490:
                            var8 = var9;
 1493:
                            var18['isFetchingCurrentQuests'] = var8;
                            var17 = {};
                            var8 = _closure2_slot23;
                            if(!(var3 == var8)) { _fun0035_ip = 1538; continue _fun0035 }
 1508:
                            var8 = global;
                            var8 = var8.Map;
                            var9 = var8.prototype;
                            var9 = Object.create(var9, {constructor: {value: var8}});
                            var24 = var9;
                            var8 = new var24[var8](var23);
                            var8 = var8 instanceof Object ? var8 : var9;
                            _fun0035_ip = 1542; continue _fun0035;
 1538:
                            var8 = _closure2_slot23;
 1542:
                            var17['invites'] = var8;
                            var8 = _closure2_slot24;
                            if(!(var3 == var8)) { _fun0035_ip = 1559; continue _fun0035 }
 1555:
                            var8 = {};
                            _fun0035_ip = 1563; continue _fun0035;
 1559:
                            var8 = _closure2_slot24;
 1563:
                            var17['appDirectoryEmbedApplications'] = var8;
                            var8 = _closure2_slot25;
                            if(!(var3 == var8)) { _fun0035_ip = 1606; continue _fun0035 }
 1576:
                            var8 = global;
                            var8 = var8.Set;
                            var9 = var8.prototype;
                            var9 = Object.create(var9, {constructor: {value: var8}});
                            var24 = var9;
                            var8 = new var24[var8](var23);
                            var8 = var8 instanceof Object ? var8 : var9;
                            _fun0035_ip = 1610; continue _fun0035;
 1606:
                            var8 = _closure2_slot25;
 1610:
                            var17['invalidAppDirectoryEmbedApplicationIds'] = var8;
                            var8 = _closure2_slot27;
                            if(!(var3 == var8)) { _fun0035_ip = 1629; continue _fun0035 }
 1623:
                            var8 = new Array(0);
                            _fun0035_ip = 1633; continue _fun0035;
 1629:
                            var8 = _closure2_slot27;
 1633:
                            var17['invalidApplicationIds'] = var8;
                            var8 = _closure2_slot31;
                            if(!(var3 == var8)) { _fun0035_ip = 1652; continue _fun0035 }
 1646:
                            var8 = new Array(0);
                            _fun0035_ip = 1656; continue _fun0035;
 1652:
                            var8 = _closure2_slot31;
 1656:
                            var17['activityParticipants'] = var8;
                            var8 = _closure2_slot28;
                            if(!(var3 == var8)) { _fun0035_ip = 1675; continue _fun0035 }
 1669:
                            var8 = new Array(0);
                            _fun0035_ip = 1679; continue _fun0035;
 1675:
                            var8 = _closure2_slot28;
 1679:
                            var17['applicationAssetFetchingIds'] = var8;
                            var8 = _closure2_slot26;
                            if(!(var3 == var8)) { _fun0035_ip = 1696; continue _fun0035 }
 1692:
                            var8 = {};
                            _fun0035_ip = 1700; continue _fun0035;
 1696:
                            var8 = _closure2_slot26;
 1700:
                            var17['appDirectoryEmbedApplicationFetchStates'] = var8;
                            var8 = _closure2_slot34;
                            if(!(var3 == var8)) { _fun0035_ip = 1743; continue _fun0035 }
 1713:
                            var8 = global;
                            var8 = var8.Map;
                            var9 = var8.prototype;
                            var9 = Object.create(var9, {constructor: {value: var8}});
                            var24 = var9;
                            var8 = new var24[var8](var23);
                            var8 = var8 instanceof Object ? var8 : var9;
                            _fun0035_ip = 1747; continue _fun0035;
 1743:
                            var8 = _closure2_slot34;
 1747:
                            var17['guildTemplates'] = var8;
                            var8 = _closure2_slot35;
                            if(!(var3 == var8)) { _fun0035_ip = 1764; continue _fun0035 }
 1760:
                            var8 = {};
                            _fun0035_ip = 1768; continue _fun0035;
 1764:
                            var8 = _closure2_slot35;
 1768:
                            var17['buildOverrides'] = var8;
                            var8 = _closure2_slot36;
                            if(!(var3 == var8)) { _fun0035_ip = 1787; continue _fun0035 }
 1781:
                            var8 = new Array(0);
                            _fun0035_ip = 1791; continue _fun0035;
 1787:
                            var8 = _closure2_slot36;
 1791:
                            var17['quests'] = var8;
                            var8 = _closure2_slot37;
                            var8 = var3 != var8;
                            if(!var8) { _fun0035_ip = 1811; continue _fun0035 }
 1807:
                            var8 = _closure2_slot37;
 1811:
                            var17['isFetchingCurrentQuests'] = var8;
                            var16 = {};
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 1841; continue _fun0035 }
 1831:
                            var9 = _closure2_slot127;
                            var8 = var9.resolvingGiftCodes;
 1841:
                            if(!(var3 == var8)) { _fun0035_ip = 1849; continue _fun0035 }
 1845:
                            var8 = new Array(0);
 1849:
                            var16['resolvingGiftCodes'] = var8;
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 1877; continue _fun0035 }
 1867:
                            var9 = _closure2_slot127;
                            var8 = var9.resolvedGiftCodes;
 1877:
                            if(!(var3 == var8)) { _fun0035_ip = 1885; continue _fun0035 }
 1881:
                            var8 = new Array(0);
 1885:
                            var16['resolvedGiftCodes'] = var8;
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 1913; continue _fun0035 }
 1903:
                            var9 = _closure2_slot127;
                            var8 = var9.acceptingGiftCodes;
 1913:
                            if(!(var3 == var8)) { _fun0035_ip = 1921; continue _fun0035 }
 1917:
                            var8 = new Array(0);
 1921:
                            var16['acceptingGiftCodes'] = var8;
                            var15 = {};
                            var8 = _closure2_slot50;
                            if(!(var3 == var8)) { _fun0035_ip = 1942; continue _fun0035 }
 1936:
                            var8 = new Array(0);
                            _fun0035_ip = 1946; continue _fun0035;
 1942:
                            var8 = _closure2_slot50;
 1946:
                            var15['resolvingGiftCodes'] = var8;
                            var8 = _closure2_slot51;
                            if(!(var3 == var8)) { _fun0035_ip = 1965; continue _fun0035 }
 1959:
                            var8 = new Array(0);
                            _fun0035_ip = 1969; continue _fun0035;
 1965:
                            var8 = _closure2_slot51;
 1969:
                            var15['resolvedGiftCodes'] = var8;
                            var8 = _closure2_slot52;
                            if(!(var3 == var8)) { _fun0035_ip = 1988; continue _fun0035 }
 1982:
                            var8 = new Array(0);
                            _fun0035_ip = 1992; continue _fun0035;
 1988:
                            var8 = _closure2_slot52;
 1992:
                            var15['acceptingGiftCodes'] = var8;
                            var13 = {};
                            var8 = _closure2_slot127;
                            var9 = var3 == var8;
                            var8 = undefined;
                            if(var9) { _fun0035_ip = 2022; continue _fun0035 }
 2012:
                            var9 = _closure2_slot127;
                            var8 = var9.mediaPostPreviewEmbeds;
 2022:
                            if(!(var3 == var8)) { _fun0035_ip = 2028; continue _fun0035 }
 2026:
                            var8 = {};
 2028:
                            var13['mediaPostPreviewEmbeds'] = var8;
                            var12 = {};
                            var8 = _closure2_slot33;
                            if(!(var3 == var8)) { _fun0035_ip = 2047; continue _fun0035 }
 2043:
                            var8 = {};
                            _fun0035_ip = 2051; continue _fun0035;
 2047:
                            var8 = _closure2_slot33;
 2051:
                            var12['mediaPostPreviewEmbeds'] = var8;
                            var11 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var14 = 99;
                            var9 = var9[var14];
                            var11 = var11.bind(var10)(var9);
                            var9 = var11.messageAuthorActivitiesChanged;
                            var9 = var9.bind(var11)(var1, var20, var19);
                            if(var9) { _fun0035_ip = 2531; continue _fun0035 }
 2098:
                            var11 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var9 = var9[var14];
                            var11 = var11.bind(var10)(var9);
                            var9 = var11.codedLinksChanged;
                            var9 = var9.bind(var11)(var1, var18, var17);
                            if(var9) { _fun0035_ip = 2531; continue _fun0035 }
 2134:
                            var9 = _closure3_slot0;
                            if(!var9) { _fun0035_ip = 2177; continue _fun0035 }
 2141:
                            var11 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var9 = var9[var14];
                            var11 = var11.bind(var10)(var9);
                            var9 = var11.giftCodesChanged;
                            var9 = var9.bind(var11)(var1, var16, var15);
                            if(var9) { _fun0035_ip = 2531; continue _fun0035 }
 2177:
                            var11 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var9 = var9[var14];
                            var11 = var11.bind(var10)(var9);
                            var9 = var11.mediaPostPreviewEmbedsChanged;
                            var9 = var9.bind(var11)(var1, var13, var12);
                            if(var9) { _fun0035_ip = 2531; continue _fun0035 }
 2213:
                            var9 = _closure3_slot24;
                            if(!var9) { _fun0035_ip = 2237; continue _fun0035 }
 2220:
                            var11 = var1.embeds;
                            var12 = var11.length;
                            var11 = 0;
                            var9 = var12 > var11;
 2237:
                            if(!var9) { _fun0035_ip = 2259; continue _fun0035 }
 2240:
                            var12 = _closure3_slot18;
                            var11 = var12.add;
                            var9 = var1.id;
                            var9 = var11.bind(var12)(var9);
 2259:
                            var9 = var1.type;
                            var8 = _closure1_slot52;
                            var8 = var8.THREAD_STARTER_MESSAGE;
                            var8 = var9 === var8;
                            if(!var8) { _fun0035_ip = 2312; continue _fun0035 }
 2281:
                            var9 = _closure2_slot127;
                            var9 = var3 == var9;
                            var11 = undefined;
                            if(var9) { _fun0035_ip = 2304; continue _fun0035 }
 2294:
                            var9 = _closure2_slot127;
                            var11 = var9.threadStartingReferenceMessage;
 2304:
                            var9 = _closure2_slot49;
                            var8 = var11 !== var9;
 2312:
                            if(!var8) { _fun0035_ip = 2334; continue _fun0035 }
 2315:
                            var11 = _closure3_slot18;
                            var9 = var11.add;
                            var8 = var1.id;
                            var8 = var9.bind(var11)(var8);
 2334:
                            var8 = _closure3_slot12;
                            if(!var8) { _fun0035_ip = 2350; continue _fun0035 }
 2341:
                            var9 = var1.applicationId;
                            var8 = var3 != var9;
 2350:
                            if(!var8) { _fun0035_ip = 2399; continue _fun0035 }
 2353:
                            var9 = _closure2_slot127;
                            var9 = var3 == var9;
                            var11 = undefined;
                            if(var9) { _fun0035_ip = 2376; continue _fun0035 }
 2366:
                            var9 = _closure2_slot127;
                            var11 = var9.invalidApplicationIds;
 2376:
                            if(!(var3 == var11)) { _fun0035_ip = 2384; continue _fun0035 }
 2380:
                            var11 = new Array(0);
 2384:
                            var10 = var11.includes;
                            var9 = var1.applicationId;
                            var8 = var10.bind(var11)(var9);
 2399:
                            if(!var8) { _fun0035_ip = 2421; continue _fun0035 }
 2402:
                            var10 = _closure3_slot18;
                            var9 = var10.add;
                            var8 = var1.id;
                            var8 = var9.bind(var10)(var8);
 2421:
                            var8 = _closure3_slot15;
                            if(!var8) { _fun0035_ip = 2477; continue _fun0035 }
 2428:
                            var9 = var1.referralTrialOfferId;
                            var3 = var3 != var9;
                            if(!var3) { _fun0035_ip = 2455; continue _fun0035 }
 2441:
                            var8 = _closure2_slot39;
                            var4 = var8.includes;
                            var3 = var4.bind(var8)(var9);
 2455:
                            if(!var3) { _fun0035_ip = 2477; continue _fun0035 }
 2458:
                            var8 = _closure3_slot18;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
 2477:
                            var3 = _closure3_slot16;
                            if(!var3) { _fun0035_ip = 2501; continue _fun0035 }
 2484:
                            var4 = var1.codedLinks;
                            var8 = var4.length;
                            var4 = 0;
                            var3 = var8 > var4;
 2501:
                            if(!var3) { _fun0035_ip = 2966; continue _fun0035 }
 2507:
                            var8 = _closure3_slot18;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0035_ip = 2966; continue _fun0035;
 2531:
                            var8 = _closure3_slot18;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0035_ip = 2966; continue _fun0035;
 2555:
                            var8 = _closure3_slot18;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0035_ip = 2966; continue _fun0035;
 2579:
                            var8 = _closure3_slot18;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0035_ip = 2966; continue _fun0035;
 2603:
                            var8 = _closure3_slot18;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            var3 = undefined;
                            return var3;
 2626:
                            var8 = _closure3_slot18;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            var3 = undefined;
                            return var3;
 2649:
                            var8 = _closure3_slot18;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0035_ip = 2966; continue _fun0035;
 2673:
                            var8 = _closure3_slot18;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            var3 = undefined;
                            return var3;
 2696:
                            var8 = _closure3_slot18;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            var3 = undefined;
                            return var3;
 2719:
                            var8 = _closure3_slot18;
                            var4 = var8.add;
                            var3 = var1.id;
                            var3 = var4.bind(var8)(var3);
                            _fun0035_ip = 2966; continue _fun0035;
 2743:
                            var4 = _closure2_slot72;
                            var3 = var1.author;
                            var3 = var3.id;
                            var4 = var4[var3];
                            var3 = _closure2_slot127;
                            var8 = var5 == var3;
                            var3 = undefined;
                            if(var8) { _fun0035_ip = 2809; continue _fun0035 }
 2775:
                            var6 = _closure2_slot127;
                            var6 = var6.messageAuthorMembers;
                            var5 = var5 == var6;
                            var3 = undefined;
                            if(var5) { _fun0035_ip = 2809; continue _fun0035 }
 2794:
                            var5 = var1.author;
                            var5 = var5.id;
                            var3 = var6[var5];
 2809:
                            if(!(var4 !== var3)) { _fun0035_ip = 2966; continue _fun0035 }
 2816:
                            var5 = _closure3_slot18;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0035_ip = 2966; continue _fun0035;
 2840:
                            var5 = _closure3_slot18;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0035_ip = 2966; continue _fun0035;
 2861:
                            var5 = _closure3_slot18;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0035_ip = 2966; continue _fun0035;
 2882:
                            var5 = _closure3_slot18;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0035_ip = 2966; continue _fun0035;
 2903:
                            var5 = _closure3_slot18;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0035_ip = 2966; continue _fun0035;
 2924:
                            var5 = _closure3_slot18;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            var3 = undefined;
                            return var3;
 2947:
                            var3 = _closure3_slot18;
                            var2 = var3.add;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
 2966:
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
 4165:
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
 0:
                        var7 = arguments[0];
                        var1 = undefined;
                        if(!(var7 === var1)) { _fun0036_ip = 11; continue _fun0036 }
 9:
                        var7 = true;
 11:
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
 0:
                        var5 = arguments[0];
                        var3 = undefined;
                        if(!(var5 === var3)) { _fun0037_ip = 11; continue _fun0037 }
 9:
                        var5 = true;
 11:
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
 0:
                        var6 = arguments[1];
                        var3 = undefined;
                        if(!(var6 === var3)) { _fun0038_ip = 11; continue _fun0038 }
 9:
                        var6 = true;
 11:
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
 0:
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
                        if(!var6) { _fun0039_ip = 96; continue _fun0039 }
 92:
                        var5 = _closure2_slot44;
 96:
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
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0040_ip = 140; continue _fun0040 }
 10:
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
 0:
                                var5 = arguments[0];
                                var3 = undefined;
                                if(!(var5 === var3)) { _fun0041_ip = 11; continue _fun0041 }
 9:
                                var5 = true;
 11:
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
 126:
                        return var2;
 128:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0040_ip = 137; continue _fun0040 }
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
                var1 = 100;
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
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var7 = var1.firstVisibleMessageIndex;
                    var6 = var1.lastVisibleMessageIndex;
                    var5 = var1.firstVisibleMessagePercentVisible;
                    var4 = var1.lastVisibleMessagePercentVisible;
                    var2 = null;
                    var1 = var2 != var7;
                    if(!var1) { _fun0042_ip = 46; continue _fun0042 }
 42:
                    var1 = var2 != var6;
 46:
                    if(!var1) { _fun0042_ip = 53; continue _fun0042 }
 49:
                    var1 = var2 != var5;
 53:
                    if(!var1) { _fun0042_ip = 60; continue _fun0042 }
 56:
                    var1 = var2 != var4;
 60:
                    if(!var1) { _fun0042_ip = 122; continue _fun0042 }
 63:
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
 122:
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
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var7 = var1.firstVisibleMessageIndex;
                    var6 = var1.lastVisibleMessageIndex;
                    var5 = var1.firstVisibleMessagePercentVisible;
                    var4 = var1.lastVisibleMessagePercentVisible;
                    var2 = null;
                    var1 = var2 != var7;
                    if(!var1) { _fun0043_ip = 46; continue _fun0043 }
 42:
                    var1 = var2 != var6;
 46:
                    if(!var1) { _fun0043_ip = 53; continue _fun0043 }
 49:
                    var1 = var2 != var5;
 53:
                    if(!var1) { _fun0043_ip = 60; continue _fun0043 }
 56:
                    var1 = var2 != var4;
 60:
                    if(!var1) { _fun0043_ip = 122; continue _fun0043 }
 63:
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
 122:
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
            var5 = 101;
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
            var6 = 102;
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
    var4 = 103;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/chat/MessagesFunctional.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
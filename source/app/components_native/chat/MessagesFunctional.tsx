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
            var9 = _closure1_slot63;
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
            var7 = _closure1_slot63;
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
            r121 = arg1;
            var _closure2_slot0 = r121;
            var8 = r121.channel;
            var _closure2_slot1 = var8;
            var18 = r121.screenIndex;
            var _closure2_slot2 = var18;
            var14 = r121.chatInputRef;
            var _closure2_slot3 = var14;
            var23 = r121.isResourceChannel;
            var _closure2_slot4 = var23;
            var26 = r121.style;
            var17 = r121.visibleMessagesWindowHandler;
            var _closure2_slot5 = var17;
            var21 = r121.onPressKey;
            var11 = r121.children;
            var16 = r121.HACK_fixModalInteraction;
            var27 = r121.alwaysRespectKeyboard;
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
            var57 = undefined;
            if(var2) { _fun0004_ip = 242; continue _fun0004 }
 236:
            var57 = var34.systemChannelFlags;
 242:
            var _closure2_slot10 = var57;
            var15 = _closure1_slot0;
            var19 = _closure1_slot2;
            var2 = var19[var3];
            var22 = var15.bind(var4)(var2);
            var20 = var22.useStateFromStores;
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
            var69 = var20.bind(var22)(var13, var7, var2);
            var _closure2_slot11 = var69;
            var2 = 52;
            var7 = var19[var2];
            var7 = var15.bind(var4)(var7);
            var13 = var7.InlineAttachmentMedia;
            var7 = var13.useSetting;
            var56 = var7.bind(var13)();
            var _closure2_slot12 = var56;
            var7 = var19[var2];
            var7 = var15.bind(var4)(var7);
            var13 = var7.InlineEmbedMedia;
            var7 = var13.useSetting;
            var55 = var7.bind(var13)();
            var _closure2_slot13 = var55;
            var7 = var19[var2];
            var7 = var15.bind(var4)(var7);
            var13 = var7.RenderEmbeds;
            var7 = var13.useSetting;
            var52 = var7.bind(var13)();
            var _closure2_slot14 = var52;
            var7 = var19[var2];
            var7 = var15.bind(var4)(var7);
            var13 = var7.RenderReactions;
            var7 = var13.useSetting;
            var51 = var7.bind(var13)();
            var _closure2_slot15 = var51;
            var7 = var19[var2];
            var7 = var15.bind(var4)(var7);
            var13 = var7.AnimateEmoji;
            var7 = var13.useSetting;
            var20 = var7.bind(var13)();
            var _closure2_slot16 = var20;
            var7 = var19[var2];
            var7 = var15.bind(var4)(var7);
            var13 = var7.AnimateStickers;
            var7 = var13.useSetting;
            var61 = var7.bind(var13)();
            var _closure2_slot17 = var61;
            var2 = var19[var2];
            var2 = var15.bind(var4)(var2);
            var7 = var2.GifAutoPlay;
            var2 = var7.useSetting;
            var59 = var2.bind(var7)();
            var _closure2_slot18 = var59;
            var2 = var19[var3];
            var24 = var15.bind(var4)(var2);
            var22 = var24.useStateFromStores;
            var2 = _closure1_slot35;
            var13 = new Array(1);
            var13[0] = var2;
            var7 = function() {
                var1 = _closure1_slot35;
                var1 = var1.theme;
                return var1;
            };
            var2 = new Array(0);
            var46 = var22.bind(var24)(var13, var7, var2);
            var _closure2_slot19 = var46;
            var2 = 53;
            var2 = var19[var2];
            var7 = var15.bind(var4)(var2);
            var2 = var7.useIsMessageSwipeActionsEnabled;
            var43 = var2.bind(var7)();
            var _closure2_slot20 = var43;
            var40 = 54;
            var2 = var19[var40];
            var7 = var15.bind(var4)(var2);
            var2 = var7.useMessageAuthorActivities;
            var99 = var2.bind(var7)(var9);
            var _closure2_slot21 = var99;
            var2 = var19[var40];
            var7 = var15.bind(var4)(var2);
            var2 = var7.useFetchMessageApplications;
            var2 = var2.bind(var7)(var9);
            var24 = _closure1_slot1;
            var2 = 55;
            var2 = var19[var2];
            var2 = var24.bind(var4)(var2);
            var2 = var2.bind(var4)(var9, var8);
            var22 = _closure1_slot4;
            var30 = 2;
            var2 = var22.bind(var4)(var2, var30);
            var13 = 0;
            var98 = var2[var13];
            var _closure2_slot22 = var98;
            var7 = 1;
            var2 = var2[var7];
            var2 = var19[var3];
            var31 = var15.bind(var4)(var2);
            var29 = var31.useStateFromStores;
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
            var74 = var29.bind(var31)(var28, var25, var2);
            var _closure2_slot23 = var74;
            var2 = var19[var3];
            var31 = var15.bind(var4)(var2);
            var29 = var31.useStateFromStoresObject;
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
            var2 = var29.bind(var31)(var28, var25, var2);
            var97 = var2.appDirectoryEmbedApplications;
            var _closure2_slot24 = var97;
            var96 = var2.invalidAppDirectoryEmbedApplicationIds;
            var _closure2_slot25 = var96;
            var95 = var2.appDirectoryEmbedApplicationFetchStates;
            var _closure2_slot26 = var95;
            var2 = var19[var3];
            var31 = var15.bind(var4)(var2);
            var29 = var31.useStateFromStoresArray;
            var2 = _closure1_slot9;
            var28 = new Array(1);
            var28[0] = var2;
            var25 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getFetchingOrFailedFetchingIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            r104 = var29.bind(var31)(var28, var25);
            var _closure2_slot27 = r104;
            var25 = var19[var3];
            var31 = var15.bind(var4)(var25);
            var29 = var31.useStateFromStoresArray;
            var25 = _closure1_slot8;
            var28 = new Array(1);
            var28[0] = var25;
            var25 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getFetchingIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var94 = var29.bind(var31)(var28, var25);
            var _closure2_slot28 = var94;
            var25 = var19[var3];
            var33 = var15.bind(var4)(var25);
            var32 = var33.useStateFromStoresArray;
            var25 = _closure1_slot7;
            var31 = new Array(1);
            var31[0] = var25;
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
            r108 = var32.bind(var33)(var31, var28, var29);
            var _closure2_slot29 = r108;
            var28 = var19[var3];
            var32 = var15.bind(var4)(var28);
            var31 = var32.useStateFromStoresArray;
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
            r106 = var31.bind(var32)(var29, var28);
            var _closure2_slot30 = r106;
            var28 = var19[var3];
            var32 = var15.bind(var4)(var28);
            var31 = var32.useStateFromStoresArray;
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
            r107 = var31.bind(var32)(var29, var28);
            var _closure2_slot31 = r107;
            var28 = var19[var3];
            var31 = var15.bind(var4)(var28);
            var29 = var31.useStateFromStoresArray;
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
            r105 = var29.bind(var31)(var28, var25);
            var _closure2_slot32 = r105;
            var25 = var19[var3];
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
            var2 = var22.bind(var4)(var2, var7);
            var75 = var2[var13];
            var _closure2_slot33 = var75;
            var2 = var19[var3];
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
            var93 = var28.bind(var29)(var25, var2);
            var _closure2_slot34 = var93;
            var2 = var19[var3];
            var31 = var15.bind(var4)(var2);
            var29 = var31.useStateFromStores;
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
            var91 = var29.bind(var31)(var28, var25, var2);
            var _closure2_slot35 = var91;
            var2 = var19[var3];
            var31 = var15.bind(var4)(var2);
            var29 = var31.useStateFromStores;
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
            var90 = var29.bind(var31)(var28, var25, var2);
            var _closure2_slot36 = var90;
            var2 = 57;
            var2 = var19[var2];
            var28 = var15.bind(var4)(var2);
            var25 = var28.useQuests;
            var2 = {'fetchPolicy': 'cache-or-network', 'callerSource': 'messages_native_fn'};
            var2 = var25.bind(var28)(var2);
            var89 = var2.quests;
            var _closure2_slot37 = var89;
            var88 = var2.isFetchingCurrentQuests;
            var _closure2_slot38 = var88;
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
            var2 = var19[var2];
            var2 = var15.bind(var4)(var2);
            var2 = var2.isNotNullish;
            var2 = var25.bind(var28)(var2);
            var _closure2_slot39 = var2;
            var2 = var19[var3];
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
            r103 = var28.bind(var29)(var25, var2);
            var _closure2_slot40 = r103;
            var2 = 58;
            var2 = var19[var2];
            var28 = var15.bind(var4)(var2);
            var25 = var28.useTrialOffer;
            var2 = _closure1_slot56;
            var84 = var25.bind(var28)(var2);
            var _closure2_slot41 = var84;
            var2 = var19[var3];
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
            var83 = var28.bind(var29)(var25, var2);
            var _closure2_slot42 = var83;
            var2 = var19[var3];
            var31 = var15.bind(var4)(var2);
            var29 = var31.useStateFromStores;
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
            var79 = var29.bind(var31)(var28, var2, var25);
            var _closure2_slot43 = var79;
            var2 = var19[var3];
            var31 = var15.bind(var4)(var2);
            var29 = var31.useStateFromStores;
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
            var66 = var29.bind(var31)(var28, var2, var25);
            var _closure2_slot44 = var66;
            var2 = var19[var3];
            var31 = var15.bind(var4)(var2);
            var29 = var31.useStateFromStores;
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
            var37 = var29.bind(var31)(var28, var2, var25);
            var _closure2_slot45 = var37;
            var2 = var19[var3];
            var31 = var15.bind(var4)(var2);
            var29 = var31.useStateFromStores;
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
            var39 = var29.bind(var31)(var28, var2, var25);
            var _closure2_slot46 = var39;
            var2 = var19[var3];
            var31 = var15.bind(var4)(var2);
            var29 = var31.useStateFromStores;
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
            var78 = var29.bind(var31)(var28, var2, var25);
            var _closure2_slot47 = var78;
            var2 = 60;
            var2 = var19[var2];
            var2 = var24.bind(var4)(var2);
            var68 = var2.bind(var4)(var10);
            var _closure2_slot48 = var68;
            var2 = var19[var3];
            var29 = var15.bind(var4)(var2);
            var28 = var29.useStateFromStores;
            var2 = _closure1_slot50;
            var25 = new Array(1);
            var25[0] = var2;
            var24 = new Array(1);
            var24[0] = var69;
            var2 = function() {
                var4 = _closure1_slot50;
                var3 = var4.getUserVoiceChannelId;
                var2 = _closure1_slot55;
                var1 = _closure2_slot11;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var76 = var28.bind(var29)(var25, var2, var24);
            var _closure2_slot49 = var76;
            var2 = var19[var3];
            var31 = var15.bind(var4)(var2);
            var29 = var31.useStateFromStores;
            var2 = _closure1_slot30;
            var28 = new Array(1);
            var28[0] = var2;
            var25 = new Array(1);
            var25[0] = var8;
            var24 = function() {
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
            r101 = var29.bind(var31)(var28, var24, var25);
            var _closure2_slot50 = r101;
            var24 = var19[var3];
            var31 = var15.bind(var4)(var24);
            var29 = var31.useStateFromStoresObject;
            var24 = _closure1_slot38;
            var28 = new Array(1);
            var28[0] = var24;
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
            var24 = new Array(0);
            var24 = var29.bind(var31)(var28, var25, var24);
            var87 = var24.resolvingGiftCodes;
            var _closure2_slot51 = var87;
            var86 = var24.resolvedGiftCodes;
            var _closure2_slot52 = var86;
            var85 = var24.acceptingGiftCodes;
            var _closure2_slot53 = var85;
            var24 = var19[var3];
            var31 = var15.bind(var4)(var24);
            var29 = var31.useStateFromStores;
            var24 = _closure1_slot12;
            var28 = new Array(1);
            var28[0] = var24;
            var25 = new Array(1);
            var25[0] = var10;
            var24 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getParticipants;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                var1 = var1.length;
                return var1;
            };
            var67 = var29.bind(var31)(var28, var24, var25);
            var _closure2_slot54 = var67;
            var24 = var19[var3];
            var31 = var15.bind(var4)(var24);
            var29 = var31.useStateFromStores;
            var24 = _closure1_slot48;
            var28 = new Array(1);
            var28[0] = var24;
            var25 = new Array(1);
            var25[0] = var10;
            var24 = function() {
                var3 = _closure1_slot48;
                var2 = var3.getFiles;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var63 = var29.bind(var31)(var28, var24, var25);
            var _closure2_slot55 = var63;
            var24 = var19[var3];
            var29 = var15.bind(var4)(var24);
            var28 = var29.useStateFromStores;
            var25 = new Array(1);
            var25[0] = var2;
            var24 = new Array(1);
            var24[0] = var10;
            var2 = function() {
                var3 = _closure1_slot30;
                var2 = var3.getReplyIdsForChannel;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            r117 = var28.bind(var29)(var25, var2, var24);
            var _closure2_slot56 = r117;
            var2 = var19[var3];
            var29 = var15.bind(var4)(var2);
            var28 = var29.useStateFromStores;
            var2 = _closure1_slot6;
            var25 = new Array(1);
            var25[0] = var2;
            var24 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var32 = var28.bind(var29)(var25, var24);
            var _closure2_slot57 = var32;
            var24 = var19[var3];
            var28 = var15.bind(var4)(var24);
            var25 = var28.useStateFromStores;
            var24 = new Array(1);
            var24[0] = var2;
            var2 = function() {
                var1 = _closure1_slot6;
                var1 = var1.roleStyle;
                return var1;
            };
            var25 = var25.bind(var28)(var24, var2);
            var _closure2_slot58 = var25;
            var2 = var19[var3];
            var31 = var15.bind(var4)(var2);
            var29 = var31.useStateFromStores;
            var2 = _closure1_slot33;
            var28 = new Array(1);
            var28[0] = var2;
            var24 = new Array(1);
            var24[0] = var10;
            var2 = function() {
                var3 = _closure1_slot33;
                var2 = var3.getChannelThreadsVersion;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            r119 = var29.bind(var31)(var28, var2, var24);
            var _closure2_slot59 = r119;
            var2 = var19[var3];
            var29 = var15.bind(var4)(var2);
            var28 = var29.useStateFromStoresObject;
            var2 = _closure1_slot23;
            var24 = new Array(1);
            var24[0] = var2;
            var2 = function() {
                var2 = _closure1_slot23;
                var1 = var2.getMessageInteractionStates;
                var1 = var1.bind(var2)();
                return var1;
            };
            r113 = var28.bind(var29)(var24, var2);
            var _closure2_slot60 = r113;
            var2 = var19[var3];
            var33 = var15.bind(var4)(var2);
            var31 = var33.useStateFromStores;
            var2 = _closure1_slot22;
            var29 = new Array(1);
            var29[0] = var2;
            var2 = 61;
            var2 = var19[var2];
            var2 = var15.bind(var4)(var2);
            r126 = var2.isVersionEqual;
            r128 = function() {
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
            r127 = new Array(0);
            r130 = var33;
            r129 = var29;
            var2 = r130[var31](r129, r128, r127, r126, r125);
            var2 = var22.bind(var4)(var2, var30);
            r112 = var2[var13];
            var _closure2_slot61 = r112;
            r111 = var2[var7];
            var _closure2_slot62 = r111;
            var2 = var19[var3];
            var28 = var15.bind(var4)(var2);
            var24 = var28.useStateFromStores;
            var2 = _closure1_slot15;
            var22 = new Array(1);
            var22[0] = var2;
            var2 = function() {
                var1 = _closure1_slot15;
                var1 = var1.hasLoadedExperiments;
                return var1;
            };
            r116 = var24.bind(var28)(var22, var2);
            var _closure2_slot63 = r116;
            var2 = 62;
            var2 = var19[var2];
            var24 = var15.bind(var4)(var2);
            var22 = var24.useIsSpamMessageRequest;
            var2 = var8.id;
            var73 = var22.bind(var24)(var2);
            var _closure2_slot64 = var73;
            var2 = 63;
            var2 = var19[var2];
            var19 = var15.bind(var4)(var2);
            var15 = var19.useIsMessageRequest;
            var2 = var8.id;
            var72 = var15.bind(var19)(var2);
            var _closure2_slot65 = var72;
            r120 = var5 != var9;
            if(!r120) { _fun0004_ip = 2512; continue _fun0004 }
 2494:
            var2 = var9.ready;
            if(var2) { _fun0004_ip = 2509; continue _fun0004 }
 2503:
            var2 = var9.cached;
 2509:
            r120 = var2;
 2512:
            var _closure2_slot66 = r120;
            var41 = var5 != var9;
            if(!var41) { _fun0004_ip = 2529; continue _fun0004 }
 2523:
            var41 = var9.cached;
 2529:
            var _closure2_slot67 = var41;
            r123 = var5 != var9;
            if(!r123) { _fun0004_ip = 2546; continue _fun0004 }
 2540:
            r123 = var9.ready;
 2546:
            if(!r123) { _fun0004_ip = 2558; continue _fun0004 }
 2549:
            var2 = var9.loadingMore;
            r123 = !var2;
 2558:
            var _closure2_slot68 = r123;
            var15 = _closure1_slot0;
            var19 = _closure1_slot2;
            var2 = var19[var3];
            var28 = var15.bind(var4)(var2);
            var24 = var28.useStateFromStores;
            var2 = _closure1_slot20;
            var22 = new Array(1);
            var22[0] = var2;
            var2 = function() {
                var2 = _closure1_slot20;
                var1 = var2.getRsvpVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            r118 = var24.bind(var28)(var22, var2);
            var _closure2_slot69 = r118;
            var2 = var19[var3];
            var28 = var15.bind(var4)(var2);
            var24 = var28.useStateFromStores;
            var2 = _closure1_slot19;
            var22 = new Array(1);
            var22[0] = var2;
            var2 = function() {
                var2 = _closure1_slot19;
                var1 = var2.getMessagesVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            r114 = var24.bind(var28)(var22, var2);
            var _closure2_slot70 = r114;
            var2 = var19[var3];
            var28 = var15.bind(var4)(var2);
            var24 = var28.useStateFromStores;
            var2 = _closure1_slot39;
            var22 = new Array(1);
            var22[0] = var2;
            var2 = function() {
                var2 = _closure1_slot39;
                var1 = var2.getCommunicationDisabledVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            r115 = var24.bind(var28)(var22, var2);
            var _closure2_slot71 = r115;
            var2 = var19[var3];
            var28 = var15.bind(var4)(var2);
            var24 = var28.useStateFromStores;
            var2 = _closure1_slot45;
            var22 = new Array(1);
            var22[0] = var2;
            var2 = function() {
                var4 = _closure1_slot45;
                var3 = var4.can;
                var1 = _closure1_slot54;
                var2 = var1.MODERATE_MEMBERS;
                var1 = _closure2_slot9;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var70 = var24.bind(var28)(var22, var2);
            var _closure2_slot72 = var70;
            var2 = 64;
            var2 = var19[var2];
            var19 = var15.bind(var4)(var2);
            var15 = var19.useCurrentUserCommunicationDisabled;
            var22 = var5 == var34;
            var2 = undefined;
            if(var22) { _fun0004_ip = 2774; continue _fun0004 }
 2769:
            var2 = var34.id;
 2774:
            var15 = var15.bind(var19)(var2);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var15, var30);
            var71 = var2[var7];
            var _closure2_slot73 = var71;
            var28 = _closure1_slot0;
            var31 = _closure1_slot2;
            var2 = var31[var3];
            var22 = var28.bind(var4)(var2);
            var19 = var22.useStateFromStores;
            var2 = _closure1_slot34;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function() {
                var1 = _closure1_slot34;
                var1 = var1.locale;
                return var1;
            };
            var81 = var19.bind(var22)(var15, var2);
            var _closure2_slot74 = var81;
            var19 = _closure1_slot1;
            var2 = 65;
            var2 = var31[var2];
            var29 = var19.bind(var4)(var2);
            var22 = var29.useExperiment;
            var15 = {};
            var2 = '41de6d_2';
            var15['location'] = var2;
            var2 = {};
            var24 = false;
            var2['autoTrackExposure'] = var24;
            var2 = var22.bind(var29)(var15, var2);
            var22 = var2.paymentsBlocked;
            var _closure2_slot75 = var22;
            var2 = var31[var3];
            var33 = var28.bind(var4)(var2);
            var29 = var33.useStateFromStores;
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
            r100 = var29.bind(var33)(var15, var2);
            var _closure2_slot76 = r100;
            var2 = var31[var3];
            var33 = var28.bind(var4)(var2);
            var29 = var33.useStateFromStores;
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
            var100 = var29.bind(var33)(var15, var2);
            var _closure2_slot77 = var100;
            var2 = var31[var3];
            var33 = var28.bind(var4)(var2);
            var29 = var33.useStateFromStores;
            var2 = _closure1_slot28;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function() {
                var2 = _closure1_slot28;
                var1 = var2.isEligible;
                var1 = var1.bind(var2)();
                return var1;
            };
            var82 = var29.bind(var33)(var15, var2);
            var _closure2_slot78 = var82;
            var2 = var31[var3];
            var33 = var28.bind(var4)(var2);
            var29 = var33.useStateFromStores;
            var2 = _closure1_slot11;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getLazyCacheStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            r102 = var29.bind(var33)(var15, var2);
            var _closure2_slot79 = r102;
            var2 = 66;
            var2 = var31[var2];
            var15 = var28.bind(var4)(var2);
            var2 = var15.useMessageJumpAndroidKeyboardHeight;
            var77 = var2.bind(var15)();
            var _closure2_slot80 = var77;
            var2 = 67;
            var2 = var31[var2];
            var2 = var19.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var _closure2_slot81 = var2;
            var15 = 68;
            var15 = var31[var15];
            var29 = var28.bind(var4)(var15);
            var15 = var29.useChannelSummariesExperiment;
            var15 = var15.bind(var29)(var8);
            var _closure2_slot82 = var15;
            var29 = var31[var3];
            var36 = var28.bind(var4)(var29);
            var35 = var36.useStateFromStores;
            var29 = _closure1_slot31;
            var33 = new Array(1);
            var33[0] = var29;
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
            var50 = var35.bind(var36)(var33, var15, var29);
            var _closure2_slot83 = var50;
            var35 = _closure1_slot5;
            var33 = var35.useEffect;
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
            var15 = var33.bind(var35)(var15, var29);
            var15 = var31[var40];
            var33 = var28.bind(var4)(var15);
            var29 = var33.useShouldTrackAnnouncementMessageViews;
            var15 = {};
            var15['guild'] = var34;
            var15['channel'] = var8;
            var15['messages'] = var9;
            var15['isMessagesReady'] = r120;
            var29 = var29.bind(var33)(var15);
            var _closure2_slot84 = var29;
            var15 = 70;
            var15 = var31[var15];
            var33 = var28.bind(var4)(var15);
            var15 = var33.useShouldDisplaySpoilerObscurity;
            var47 = var15.bind(var33)(var8);
            var _closure2_slot85 = var47;
            var15 = 71;
            var15 = var31[var15];
            var33 = var28.bind(var4)(var15);
            var15 = var33.useIsAgeVerified;
            var54 = var15.bind(var33)();
            var _closure2_slot86 = var54;
            var34 = var35.useEffect;
            var33 = new Array(2);
            var33[0] = var10;
            var33[1] = var12;
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
            var15 = var34.bind(var35)(var15, var33);
            var15 = 73;
            var15 = var31[var15];
            var34 = var28.bind(var4)(var15);
            var33 = var34.useShouldDisableInteractiveComponents;
            var15 = var8.id;
            r110 = var33.bind(var34)(var15);
            var _closure2_slot87 = r110;
            var33 = _closure1_slot26;
            var15 = var8.id;
            r109 = var33.bind(var4)(var15);
            var _closure2_slot88 = r109;
            var15 = var31[var3];
            var36 = var28.bind(var4)(var15);
            var35 = var36.useStateFromStores;
            var15 = _closure1_slot16;
            var34 = new Array(1);
            var34[0] = var15;
            var33 = new Array(1);
            var33[0] = var10;
            var15 = function() {
                var3 = _closure1_slot16;
                var2 = var3.getChannelFpInfo;
                var1 = _closure2_slot7;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var92 = var35.bind(var36)(var34, var15, var33);
            var _closure2_slot89 = var92;
            var15 = 74;
            var15 = var31[var15];
            var15 = var19.bind(var4)(var15);
            var60 = var15.bind(var4)();
            var _closure2_slot90 = var60;
            var15 = 75;
            var15 = var31[var15];
            var15 = var19.bind(var4)(var15);
            var15 = var15.bind(var4)(var9);
            var45 = var15.unloadedContentEntryMessageIds;
            var _closure2_slot91 = var45;
            var36 = var15.unloadableContentEntryMessageIds;
            var _closure2_slot92 = var36;
            var15 = var31[var3];
            var34 = var28.bind(var4)(var15);
            var33 = var34.useStateFromStores;
            var15 = _closure1_slot49;
            var19 = new Array(1);
            var19[0] = var15;
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
            var53 = var33.bind(var34)(var19, var15);
            var _closure2_slot93 = var53;
            var15 = 76;
            var15 = var31[var15];
            var19 = var28.bind(var4)(var15);
            var15 = var19.useShouldFilterKeywords;
            var49 = var15.bind(var19)();
            var _closure2_slot94 = var49;
            var15 = var31[var3];
            var34 = var28.bind(var4)(var15);
            var33 = var34.useStateFromStores;
            var15 = _closure1_slot18;
            var19 = new Array(1);
            var19[0] = var15;
            var15 = function() {
                var2 = _closure1_slot18;
                var1 = var2.getVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var80 = var33.bind(var34)(var19, var15);
            var _closure2_slot95 = var80;
            var15 = 77;
            var15 = var31[var15];
            var19 = var28.bind(var4)(var15);
            var15 = var19.useGuildProfileInviteEmbedHoldoutEnabled;
            var19 = var15.bind(var19)(var24);
            var15 = 78;
            var15 = var31[var15];
            var31 = var28.bind(var4)(var15);
            var28 = var31.useColorStore;
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
            var15 = var28.bind(var31)(var15);
            var58 = 0;
            if(var19) { _fun0004_ip = 3746; continue _fun0004 }
 3743:
            var58 = var15;
 3746:
            var _closure2_slot96 = var58;
            var42 = _closure1_slot0;
            r122 = _closure1_slot2;
            var3 = r122[var3];
            var28 = var42.bind(var4)(var3);
            var19 = var28.useStateFromStores;
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
            var44 = var19.bind(var28)(var15, var3);
            var _closure2_slot97 = var44;
            var65 = _closure1_slot5;
            var3 = var65.useRef;
            var28 = var3.bind(var65)(var5);
            var _closure2_slot98 = var28;
            var3 = r122[var40];
            var15 = var42.bind(var4)(var3);
            var3 = var15.useScrollState;
            var3 = var3.bind(var15)();
            var19 = _closure1_slot4;
            var3 = var19.bind(var4)(var3, var30);
            var31 = var3[var13];
            var _closure2_slot99 = var31;
            var15 = var3[var7];
            var _closure2_slot100 = var15;
            var3 = var65.useState;
            var3 = var3.bind(var65)(var5);
            var3 = var19.bind(var4)(var3, var30);
            var30 = var3[var13];
            var _closure2_slot101 = var30;
            var3 = var3[var7];
            var _closure2_slot102 = var3;
            var7 = r122[var40];
            var13 = var42.bind(var4)(var7);
            var7 = var13.useMessagesState;
            var7 = var7.bind(var13)();
            var48 = var7.shouldForceRender;
            var _closure2_slot103 = var48;
            var38 = var7.hasJumpedToOriginalPost;
            var _closure2_slot104 = var38;
            var33 = var7.setHasJumpedToOriginalPost;
            var _closure2_slot105 = var33;
            var62 = var7.setShouldForceRender;
            var _closure2_slot106 = var62;
            var19 = var65.useMemo;
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
            var7 = var19.bind(var65)(var13, var7);
            var _closure2_slot107 = var7;
            var34 = var65.useMemo;
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
            var19 = var34.bind(var65)(var19, var13);
            var _closure2_slot108 = var19;
            var13 = var65.useRef;
            var13 = var13.bind(var65)(var24);
            var _closure2_slot109 = var13;
            var13 = var65.useRef;
            var13 = var13.bind(var65)(var24);
            var _closure2_slot110 = var13;
            var34 = var65.useCallback;
            var24 = function(arg1) {
                var2 = arg1;
                var8 = var2.rows;
                var3 = var2.hasMoreMessagesAfter;
                var10 = var2.scrollData;
                var9 = var2.HACK_iOSForceAnimations;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 81;
                var5 = var6[var1];
                var1 = undefined;
                var12 = var7.bind(var1)(var5);
                var11 = var12.isLoadingAtTop;
                var7 = var2.rows;
                var5 = _closure2_slot110;
                var5 = var5.current;
                var11 = var11.bind(var12)(var7, var5);
                var5 = _closure1_slot1;
                var4 = 82;
                var4 = var6[var4];
                var7 = var5.bind(var1)(var4);
                var6 = var7.updateRows;
                var4 = _closure2_slot98;
                var5 = var4.current;
                var4 = {};
                var4['isLoadingAtTop'] = var11;
                var4['scrollData'] = var10;
                var4['HACK_iOSForceAnimations'] = var9;
                var4 = var6.bind(var7)(var5, var8, var4);
                var2 = _closure2_slot110;
                var2['current'] = var3;
                return var1;
            };
            var13 = new Array(0);
            var24 = var34.bind(var65)(var24, var13);
            var _closure2_slot111 = var24;
            var13 = r122[var40];
            var34 = var42.bind(var4)(var13);
            var13 = var34.useChatUpdatesQueue;
            var13 = var13.bind(var34)(var28, var24);
            var _closure2_slot112 = var13;
            var35 = var65.useCallback;
            var34 = new Array(4);
            var34[0] = var13;
            var34[1] = var24;
            var24 = var31.decelerating;
            var34[2] = var24;
            var24 = var31.dragging;
            var34[3] = var24;
            var24 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure2_slot112;
                    var2 = var2.isBlocking;
                    if(var2) { _fun0016_ip = 83; continue _fun0016 }
 19:
                    var2 = var3.isLoadingAtTop;
                    if(!var2) { _fun0016_ip = 54; continue _fun0016 }
 28:
                    var2 = _closure2_slot99;
                    var2 = var2.decelerating;
                    if(var2) { _fun0016_ip = 67; continue _fun0016 }
 41:
                    var2 = _closure2_slot99;
                    var2 = var2.dragging;
                    if(var2) { _fun0016_ip = 67; continue _fun0016 }
 54:
                    var4 = _closure2_slot111;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0016_ip = 97; continue _fun0016;
 67:
                    var4 = _closure2_slot112;
                    var2 = var4.add;
                    var2 = var2.bind(var4)(var3);
                    _fun0016_ip = 97; continue _fun0016;
 83:
                    var2 = _closure2_slot112;
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var3);
 97:
                    var1 = undefined;
                    return var1;
                }
            };
            var35 = var35.bind(var65)(var24, var34);
            var _closure2_slot113 = var35;
            var34 = var65.useCallback;
            var24 = new Array(27);
            var24[0] = var8;
            var24[1] = var9;
            var24[2] = r120;
            var24[3] = var56;
            var24[4] = var55;
            var24[5] = var52;
            var24[6] = var51;
            var24[7] = var20;
            var24[8] = var30;
            var24[9] = var60;
            var24[10] = var59;
            var24[11] = var70;
            var24[12] = var43;
            var24[13] = var47;
            var24[14] = r110;
            var24[15] = var49;
            var24[16] = var63;
            var24[17] = var37;
            var24[18] = var66;
            var24[19] = var69;
            var24[20] = var39;
            var24[21] = var50;
            var24[22] = var25;
            var24[23] = var23;
            var24[24] = var36;
            var24[25] = var7;
            var24[26] = var19;
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
                    var3 = 83;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var4 = var3.firstRowGenerator;
                    var3 = var4.measure;
                    var2 = function() {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                            var4 = _closure2_slot107;
                            var3 = var4.setup;
                            var2 = _closure2_slot6;
                            var2 = var3.bind(var4)(var2);
                            var4 = _closure2_slot108;
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
                            var5 = _closure2_slot101;
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
                            var2 = 84;
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
                            var7 = 81;
                            var7 = var9[var7];
                            var10 = var8.bind(var5)(var7);
                            var9 = var10.canAddNewReactions;
                            var8 = _closure2_slot1;
                            var7 = _closure2_slot46;
                            var7 = var9.bind(var10)(var8, var7);
                            var2['canAddNewReactions'] = var7;
                            var7 = _closure2_slot83;
                            var2['selectedSummary'] = var7;
                            var7 = _closure2_slot107;
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
                            var6 = _closure2_slot108;
                            var2 = var6.generate;
                            var7 = var2.bind(var6)(var7);
                            var6 = _closure2_slot107;
                            var2 = var6.createRow;
                            var2 = var2.bind(var6)(var7);
                            var6 = var4.bind(var5)();
                            var2 = var6.done;
                            var3 = var6;
                            if(!var2) { _fun0018_ip = 398; continue _fun0018 }
 448:
                            var2 = _closure2_slot107;
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
            var36 = var34.bind(var65)(var19, var24);
            var _closure2_slot114 = var36;
            var34 = var65.useCallback;
            var24 = new Array(1);
            var24[0] = var7;
            var19 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 81;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.findMessageIndexInRows;
                var2 = _closure2_slot107;
                var1 = var2.getPreviousRows;
                var2 = var1.bind(var2)();
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var19 = var34.bind(var65)(var19, var24);
            var _closure2_slot115 = var19;
            var39 = var65.useCallback;
            var34 = new Array(2);
            var34[0] = var32;
            var34[1] = var19;
            var24 = function(arg1) {
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
                    var4 = 85;
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
                    var4 = 82;
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
                    var7 = 85;
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
                    var7 = 86;
                    var7 = var13[var7];
                    var12 = var12.bind(var1)(var7);
                    var7 = var12.isIOS;
                    var7 = var7.bind(var12)();
                    if(!var7) { _fun0019_ip = 332; continue _fun0019 }
 247:
                    if(var6) { _fun0019_ip = 332; continue _fun0019 }
 250:
                    var6 = _closure2_slot115;
                    var14 = var6.bind(var1)(var10);
                    var6 = null;
                    if(!(var6 != var14)) { _fun0019_ip = 442; continue _fun0019 }
 268:
                    var7 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var6 = 82;
                    var6 = var12[var6];
                    var13 = var7.bind(var1)(var6);
                    var12 = var13.scrollTo;
                    var6 = _closure2_slot98;
                    var7 = var6.current;
                    var6 = {};
                    var6['animated'] = var11;
                    var15 = var9 === var10;
                    var6['highlight'] = var15;
                    var6['position'] = var8;
                    var6 = var12.bind(var13)(var7, var14, var6);
                    _fun0019_ip = 442; continue _fun0019;
 332:
                    var6 = _closure2_slot115;
                    var7 = var6.bind(var1)(var10);
                    _closure3_slot3 = var7;
                    var6 = null;
                    if(!(var6 != var7)) { _fun0019_ip = 442; continue _fun0019 }
 351:
                    if(var5) { _fun0019_ip = 418; continue _fun0019 }
 354:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 82;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.scrollTo;
                    var3 = _closure2_slot98;
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
                        var1 = 82;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.scrollIntoView;
                        var2 = _closure2_slot98;
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
            var39 = var39.bind(var65)(var24, var34);
            var _closure2_slot116 = var39;
            var34 = var65.useCallback;
            var24 = new Array(13);
            var24[0] = var36;
            var36 = var31.animated;
            var24[1] = var36;
            var24[2] = var13;
            var24[3] = var35;
            var24[4] = var19;
            var24[5] = var38;
            var24[6] = var39;
            var24[7] = var8;
            var24[8] = var10;
            var24[9] = var9;
            var24[10] = var50;
            var24[11] = var23;
            var24[12] = var7;
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
                    var3 = 85;
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
                    var2 = _closure2_slot98;
                    var2 = var2.current;
                    var13 = null;
                    if(!(var13 != var2)) { _fun0020_ip = 935; continue _fun0020 }
 229:
                    var4 = _closure2_slot114;
                    var2 = {};
                    var2['forced'] = var11;
                    var2['updateMessageIds'] = var9;
                    var2['ignoreEmbedDescriptionCache'] = var5;
                    var11 = var4.bind(var1)(var2);
                    var2 = _closure2_slot109;
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
                    var2 = 82;
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
                    var2 = _closure2_slot109;
                    var2 = var2.current;
                    if(!var2) { _fun0020_ip = 378; continue _fun0020 }
 358:
                    var4 = _closure2_slot112;
                    var2 = var4.hasUpdates;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0020_ip = 630; continue _fun0020 }
 378:
                    var2 = _closure2_slot109;
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
                    var2 = 82;
                    var2 = var18[var2];
                    var18 = var4.bind(var1)(var2);
                    var4 = var18.fadeIn;
                    var2 = _closure2_slot98;
                    var2 = var2.current;
                    var2 = var4.bind(var18)(var2);
                    _fun0020_ip = 874; continue _fun0020;
 453:
                    if(!(var13 != var15)) { _fun0020_ip = 558; continue _fun0020 }
 457:
                    var4 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var2 = 81;
                    var2 = var18[var2];
                    var21 = var4.bind(var1)(var2);
                    var20 = var21.shouldJumpToOriginalPost;
                    var25 = _closure2_slot1;
                    var24 = _closure2_slot7;
                    var23 = _closure2_slot6;
                    var22 = _closure2_slot104;
                    var26 = var21;
                    var2 = var26[var20](var25, var24, var23, var22, var21);
                    if(var2) { _fun0020_ip = 558; continue _fun0020 }
 512:
                    var4 = _closure2_slot116;
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
                    var2 = _closure2_slot115;
                    var16 = var2.bind(var1)(var7);
                    if(!(var13 != var16)) { _fun0020_ip = 874; continue _fun0020 }
 581:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 82;
                    var2 = var8[var2];
                    var8 = var4.bind(var1)(var2);
                    var4 = var8.focus;
                    var2 = _closure2_slot98;
                    var2 = var2.current;
                    var2 = var4.bind(var8)(var2, var16);
                    _fun0020_ip = 874; continue _fun0020;
 630:
                    var4 = _closure2_slot112;
                    var2 = var4.tryFlush;
                    var2 = var2.bind(var4)();
                    _fun0020_ip = 874; continue _fun0020;
 649:
                    var4 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var2 = 87;
                    var2 = var16[var2];
                    var4 = var4.bind(var1)(var2);
                    var2 = {};
                    var17 = _closure2_slot107;
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
                    var10 = _closure2_slot109;
                    var10 = var10.current;
                    var10 = !var10;
                    if(var10) { _fun0020_ip = 740; continue _fun0020 }
 737:
                    var10 = var12;
 740:
                    var2['shouldInitialScroll'] = var10;
                    var10 = _closure2_slot99;
                    var10 = var10.animated;
                    var2['animated'] = var10;
                    var2['scrollPosition'] = var9;
                    var2['focusTargetId'] = var7;
                    var7 = var4.bind(var1)(var2);
                    var4 = _closure2_slot109;
                    var2 = true;
                    var4['current'] = var2;
                    var4 = _closure2_slot113;
                    var2 = {};
                    var2['rows'] = var11;
                    var9 = _closure2_slot6;
                    var9 = var9.hasMoreAfter;
                    var2['hasMoreMessagesAfter'] = var9;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 81;
                    var8 = var10[var8];
                    var10 = var9.bind(var1)(var8);
                    var9 = var10.isLoadingAtTop;
                    var8 = _closure2_slot110;
                    var8 = var8.current;
                    var8 = var9.bind(var10)(var11, var8);
                    var2['isLoadingAtTop'] = var8;
                    var2['scrollData'] = var7;
                    var2['HACK_iOSForceAnimations'] = var6;
                    var2 = var4.bind(var1)(var2);
 874:
                    var2 = _closure2_slot109;
                    var2 = var2.current;
                    if(!var2) { _fun0020_ip = 899; continue _fun0020 }
 886:
                    var4 = _closure2_slot109;
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
                        var1 = 81;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.scrollToTopMessage;
                        var2 = _closure2_slot98;
                        var1 = _closure2_slot107;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var2 = 100;
                    var2 = var4.bind(var1)(var3, var2);
 935:
                    return var1;
                }
            };
            var23 = var34.bind(var65)(var23, var24);
            var _closure2_slot117 = var23;
            var35 = var65.useCallback;
            var34 = new Array(2);
            var34[0] = var19;
            var34[1] = var23;
            var24 = function(arg1) {
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
                    var3 = 85;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.JumpTypes;
                    var2 = var3.INSTANT;
 53:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 81;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.maybeRescrollToMessageId;
                    var3 = {};
                    var8 = _closure2_slot98;
                    var3['chatRef'] = var8;
                    var8 = _closure2_slot115;
                    var3['findMessageIndex'] = var8;
                    var7 = _closure2_slot117;
                    var3['updateRows'] = var7;
                    var3['updateRowsEnabled'] = var6;
                    var3['jumpType'] = var2;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                }
            };
            var36 = var35.bind(var65)(var24, var34);
            var _closure2_slot118 = var36;
            var35 = var65.useCallback;
            var34 = new Array(5);
            var34[0] = var10;
            var34[1] = var18;
            var34[2] = var15;
            var34[3] = var3;
            var34[4] = var7;
            var24 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 81;
                var2 = var2[var1];
                var1 = undefined;
                var8 = var3.bind(var1)(var2);
                var7 = var8.clearRows;
                var13 = _closure2_slot98;
                var12 = _closure2_slot107;
                var11 = _closure2_slot7;
                var10 = _closure2_slot2;
                var9 = function(arg1) {
                    var4 = _closure2_slot100;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot102;
                    var3 = null;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot109;
                    var2 = false;
                    var3['current'] = var2;
                    return var1;
                };
                var14 = var8;
                var2 = var14[var7](var13, var12, var11, var10, var9, var8);
                return var1;
            };
            var35 = var35.bind(var65)(var24, var34);
            var _closure2_slot119 = var35;
            var64 = var65.useCallback;
            var34 = new Array(2);
            var34[0] = var7;
            var34[1] = var10;
            var24 = function(arg1) {
                var1 = arg1;
                var7 = var1.firstVisibleMessageRowIndex;
                var6 = var1.lastVisibleMessageRowIndex;
                var5 = var1.firstVisibleMessagePercentVisible;
                var4 = var1.lastVisibleMessagePercentVisible;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 81;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getVisibleMessages;
                var1 = {};
                var1['firstVisibleMessageRowIndex'] = var7;
                var1['lastVisibleMessageRowIndex'] = var6;
                var1['firstVisibleMessagePercentVisible'] = var5;
                var1['lastVisibleMessagePercentVisible'] = var4;
                var5 = _closure2_slot107;
                var1['chatManager'] = var5;
                var4 = _closure2_slot7;
                var1['channelId'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var34 = var64.bind(var65)(var24, var34);
            var _closure2_slot120 = var34;
            var64 = var65.useCallback;
            var24 = new Array(5);
            var24[0] = var10;
            var24[1] = var14;
            var24[2] = var9;
            var24[3] = var63;
            var24[4] = var22;
            var22 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var1 = {};
                    var2 = function getMessage(arg1) {
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 88;
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
            var22 = var64.bind(var65)(var22, var24);
            var _closure2_slot121 = var22;
            var64 = var65.useMemo;
            var24 = new Array(1);
            var24[0] = var22;
            var22 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 89;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.MessagesHandlers;
                var4 = _closure2_slot121;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var22 = var64.bind(var65)(var22, var24);
            var _closure2_slot122 = var22;
            var64 = var65.useCallback;
            var24 = new Array(7);
            var24[0] = r121;
            var24[1] = var8;
            var24[2] = var9;
            var24[3] = var13;
            var24[4] = var31;
            var24[5] = var10;
            var24[6] = var15;
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
                    var13 = _closure2_slot112;
                    var12 = var13.hasUpdates;
                    var12 = var12.bind(var13)();
                    var8 = !var12;
 175:
                    var12 = _closure2_slot99;
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
                    var10 = 81;
                    var10 = var13[var10];
                    var15 = var12.bind(var4)(var10);
                    var14 = var15.loadMoreBefore;
                    var13 = _closure2_slot7;
                    var12 = _closure2_slot6;
                    var10 = function(arg1) {
                        var3 = _closure2_slot100;
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
                    var10 = _closure2_slot99;
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
                    var8 = 81;
                    var8 = var10[var8];
                    var12 = var9.bind(var4)(var8);
                    var10 = var12.loadMoreAfter;
                    var9 = _closure2_slot7;
                    var8 = _closure2_slot6;
                    var7 = function(arg1) {
                        var3 = _closure2_slot100;
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
                    var7 = _closure2_slot99;
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
                    var2 = _closure2_slot112;
                    var1 = var2.tryFlush;
                    var1 = var1.bind(var2)();
                    var1 = true;
                    return var1;
 460:
                    var1 = false;
                    return var1;
                }
            };
            var13 = var64.bind(var65)(var13, var24);
            var _closure2_slot123 = var13;
            var64 = var65.useCallback;
            var24 = new Array(12);
            var24[0] = var28;
            var24[1] = var10;
            var24[2] = var29;
            var24[3] = var12;
            var24[4] = var8;
            var24[5] = var9;
            var24[6] = var15;
            var24[7] = var53;
            var24[8] = var18;
            var24[9] = var17;
            var24[10] = var7;
            var24[11] = var13;
            var17 = function(arg1) {
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
                    var1 = 90;
                    var7 = var7[var1];
                    var1 = undefined;
                    var16 = var13.bind(var1)(var7);
                    var14 = var16.getChangesetIdForChat;
                    var13 = _closure2_slot98;
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
                    var3 = 81;
                    var3 = var17[var3];
                    var14 = var16.bind(var1)(var3);
                    var13 = var14.handleVisibleMessagesChange;
                    var3 = {};
                    var3['firstVisibleMessageRowIndex'] = var6;
                    var3['firstVisibleMessagePercentVisible'] = var18;
                    var3['lastVisibleMessageRowIndex'] = var5;
                    var3['lastVisibleMessagePercentVisible'] = var15;
                    var15 = 91;
                    var15 = var17[var15];
                    var15 = var16.bind(var1)(var15);
                    var15 = var15.QuestsVisibleMessagesChangedSource;
                    var15 = var15.SCROLL;
                    var3['source'] = var15;
                    var15 = _closure2_slot107;
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
                            var10 = _closure2_slot123;
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
                            var4 = _closure2_slot100;
                            var3 = {};
                            var3['isAtBottom'] = var9;
                            var3['isNearBottom'] = var8;
                            var3['isNearTop'] = var7;
                            var3['dragging'] = var6;
                            var3['decelerating'] = var5;
                            var3 = var4.bind(var1)(var3);
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 92;
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
                    var8 = _closure2_slot107;
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
            var24 = var64.bind(var65)(var17, var24);
            r121 = var65.useMemo;
            var64 = new Array(1);
            var64[0] = var22;
            var17 = function() {
                var1 = {};
                var3 = function handleTapImage(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapImage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapImage'] = var3;
                var3 = function handleTapChannel(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapChannel;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapChannel'] = var3;
                var3 = function handleLongPressChannel(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleLongPressChannel;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressChannel'] = var3;
                var3 = function handleTapAttachmentLink(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapAttachmentLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapAttachmentLink'] = var3;
                var3 = function handleLongPressAttachmentLink(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleLongPressAttachmentLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressAttachmentLink'] = var3;
                var3 = function handleTapCall(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapCall;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapCall'] = var3;
                var3 = function handleTapMention(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapMention;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapMention'] = var3;
                var3 = function handleTapCommandMention(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapCommandMention;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapCommandMention'] = var3;
                var3 = function handleLongPressCommandMention(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleLongPressCommandMention;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressCommandMention'] = var3;
                var3 = function handleTapLink(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapLink'] = var3;
                var3 = function handleLongPressLink(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleLongPressLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressLink'] = var3;
                var3 = function handleTapReaction(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapReaction;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapReaction'] = var3;
                var3 = function handleLongPressReaction(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleLongPressReaction;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressReaction'] = var3;
                var3 = function handleOpenSticker(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleOpenSticker;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleOpenSticker'] = var3;
                var3 = function handleTapAvatar(arg1) {
                    var4 = _closure2_slot122;
                    var3 = var4.handleOpenProfile;
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 93;
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
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapUsername;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapUsername'] = var3;
                var3 = function handleLongPressUsername(arg1) {
                    var4 = _closure2_slot122;
                    var3 = var4.handleOpenProfile;
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 93;
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
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapThreadEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapThreadEmbed'] = var3;
                var3 = function handleTapReply(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapReply;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapReply'] = var3;
                var3 = function handleTapSummary(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapSummary;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSummary'] = var3;
                var3 = function handleTapSummaryJump(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapSummaryJump;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSummaryJump'] = var3;
                var3 = function handleLongPressMessage(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleLongPressMessage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressMessage'] = var3;
                var3 = function handleInitiateReply(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleInitiateReply;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleInitiateReply'] = var3;
                var3 = function handleInitiateEdit(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleInitiateEdit;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleInitiateEdit'] = var3;
                var3 = function handleInitiateThread(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleInitiateThread;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleInitiateThread'] = var3;
                var3 = function handleTapMessage(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapMessage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapMessage'] = var3;
                var3 = function handleTapCancelUploadItem(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapCancelUploadItem;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapCancelUploadItem'] = var3;
                var3 = function handleTapInviteEmbedAccept(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapInviteEmbedAccept;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInviteEmbedAccept'] = var3;
                var3 = function handleTapInviteEmbed(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapInviteEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInviteEmbed'] = var3;
                var3 = function handleTapJoinActivity(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapJoinActivity;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapJoinActivity'] = var3;
                var3 = function handleTapJoinRichPresence(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapJoinRichPresence;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapJoinRichPresence'] = var3;
                var3 = function handleTapGiftCodeEmbed(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapGiftCodeEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapGiftCodeEmbed'] = var3;
                var3 = function handleTapGiftCodeAccept(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapGiftCodeAccept;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapGiftCodeAccept'] = var3;
                var3 = function handleTapReferralRedeem(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapReferralRedeem;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapReferralRedeem'] = var3;
                var3 = function handleTapEmoji(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapEmoji;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapEmoji'] = var3;
                var3 = function handleTapTimestamp(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapTimestamp;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapTimestamp'] = var3;
                var3 = function handleTapInlineCode(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapInlineCode;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInlineCode'] = var3;
                var3 = function handleTapRoleIcon(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapRoleIcon;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapRoleIcon'] = var3;
                var3 = function handleTapGameIcon(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapGameIcon;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapGameIcon'] = var3;
                var3 = function handleTapSuppressNotificationsIcon(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapSuppressNotificationsIcon;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSuppressNotificationsIcon'] = var3;
                var3 = function handleTapConnectionsRoleTag(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapConnectionsRoleTag;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapConnectionsRoleTag'] = var3;
                var3 = function handleTapTimeoutIcon() {
                    var2 = _closure2_slot122;
                    var1 = var2.handleTapTimeoutIcon;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['handleTapTimeoutIcon'] = var3;
                var3 = function handleTapButtonActionComponent(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapButtonActionComponent;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapButtonActionComponent'] = var3;
                var3 = function handleTapSelectActionComponent(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapSelectActionComponent;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSelectActionComponent'] = var3;
                var3 = function handleTapWelcomeReply(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapWelcomeReply;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapWelcomeReply'] = var3;
                var3 = function handleTapInviteToSpeak(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapInviteToSpeak;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInviteToSpeak'] = var3;
                var3 = function handleTapAutoModerationActions(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapAutoModerationActions;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapAutoModerationActions'] = var3;
                var3 = function handleTapAutoModerationFeedback(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapAutoModerationFeedback;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapAutoModerationFeedback'] = var3;
                var3 = function handleTapFollowForumPost(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapFollowForumPost;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapFollowForumPost'] = var3;
                var3 = function handleTapShareForumPost(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapShareForumPost;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapShareForumPost'] = var3;
                var3 = function handleTapReactionOverflow(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapReactionOverflow;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapReactionOverflow'] = var3;
                var3 = function handleCopyText(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleCopyText;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleCopyText'] = var3;
                var3 = function handleTapOpTag(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapOpTag;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapOpTag'] = var3;
                var3 = function handleTapTag(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapTag;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapTag'] = var3;
                var3 = function handleTapRemix(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapRemix;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapRemix'] = var3;
                var3 = function handleMediaAttachmentPlaybackStarted(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleMediaAttachmentPlaybackStarted;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleMediaAttachmentPlaybackStarted'] = var3;
                var3 = function handleMediaAttachmentPlaybackEnded(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleMediaAttachmentPlaybackEnded;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleMediaAttachmentPlaybackEnded'] = var3;
                var3 = function handlerVoiceMessagePlaybackFailed(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleVoiceMessagePlaybackFailed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handlerVoiceMessagePlaybackFailed'] = var3;
                var3 = function handleTapPostPreviewEmbed(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapPostPreviewEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapPostPreviewEmbed'] = var3;
                var3 = function handleTapDismissMediaPostSharePrompt(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapDismissMediaPostSharePrompt;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapDismissMediaPostSharePrompt'] = var3;
                var3 = function handleTapChannelPromptButton(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapChannelPromptButton;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapChannelPromptButton'] = var3;
                var3 = function handleTapObscuredMediaLearnMore(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapObscuredMediaLearnMore;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapObscuredMediaLearnMore'] = var3;
                var3 = function handleTapObscuredMediaToggle(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.onTapObscuredMediaToggle;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapObscuredMediaToggle'] = var3;
                var3 = function handleTapSafetyPolicyNoticeEmbed(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapSafetyPolicyNoticeEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSafetyPolicyNoticeEmbed'] = var3;
                var3 = function handleTapSafetySystemNotificationCta(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapSafetySystemNotificationCta;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSafetySystemNotificationCta'] = var3;
                var3 = function handleTapPollAnswer(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapPollAnswer;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapPollAnswer'] = var3;
                var3 = function handleTapPollSubmitVote(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapPollSubmitVote;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapPollSubmitVote'] = var3;
                var3 = function handleTapPollAction(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapPollAction;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapPollAction'] = var3;
                var3 = function handleLongPressPollImage(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleLongPressPollImage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressPollImage'] = var3;
                var3 = function handleTapCtaButton(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapCtaButton;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapCtaButton'] = var3;
                var3 = function handleMessageAccessibilityAction(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleMessageAccessibilityAction;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleMessageAccessibilityAction'] = var3;
                var3 = function handleTapForwardFooter(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapForwardFooter;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapForwardFooter'] = var3;
                var3 = function handleTapInlineForward(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapInlineForward;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInlineForward'] = var3;
                var3 = function handleTapClanTagChiplet(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapClanTagChiplet;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapClanTagChiplet'] = var3;
                var3 = function handleTapContentInventoryEntryEmbed(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapContentInventoryEntryEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapContentInventoryEntryEmbed'] = var3;
                var3 = function handleTapSoundmoji(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapSoundmoji;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSoundmoji'] = var3;
                var2 = function handleTapAppMessageEmbed(arg1) {
                    var3 = _closure2_slot122;
                    var2 = var3.handleTapAppMessageEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapAppMessageEmbed'] = var2;
                return var1;
            };
            var17 = r121.bind(var65)(var17, var64);
            r121 = var65.useCallback;
            var64 = new Array(4);
            var64[0] = var22;
            var64[1] = var10;
            var64[2] = var9;
            var64[3] = var15;
            var22 = function(arg1) {
                var5 = _closure2_slot122;
                var4 = var5.handleTapSeparator;
                var3 = arg1;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 81;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.loadMoreBefore;
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot6;
                    var1 = function(arg1) {
                        var3 = _closure2_slot100;
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
                    var1 = 81;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.loadMoreAfter;
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot6;
                    var1 = function(arg1) {
                        var3 = _closure2_slot100;
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
            var22 = r121.bind(var65)(var22, var64);
            var40 = r122[var40];
            var64 = var42.bind(var4)(var40);
            var42 = var64.useMessagesLifecycle;
            var40 = {};
            var40['messages'] = var9;
            var40['isMessagesReady'] = r120;
            var40['oldestUnreadMessageId'] = var37;
            var40['channelId'] = var10;
            var40['screenIndex'] = var18;
            var40['updateRows'] = var23;
            var40['scrollToMessageId'] = var39;
            var40 = var42.bind(var64)(var40);
            var64 = var65.useMemo;
            var42 = new Array(78);
            var42[0] = r119;
            var42[1] = r118;
            var42[2] = r115;
            var42[3] = r114;
            var42[4] = r111;
            var42[5] = var80;
            var42[6] = r116;
            var42[7] = r100;
            var42[8] = var100;
            var42[9] = r110;
            var42[10] = var68;
            var42[11] = var76;
            var42[12] = var67;
            var42[13] = var79;
            var42[14] = var66;
            var42[15] = var37;
            var42[16] = var73;
            var42[17] = var72;
            var42[18] = var71;
            var42[19] = var77;
            var42[20] = var70;
            var42[21] = var58;
            var42[22] = r102;
            var42[23] = var48;
            var42[24] = var41;
            var42[25] = var56;
            var42[26] = var55;
            var42[27] = var52;
            var42[28] = var51;
            var42[29] = var20;
            var42[30] = var61;
            var42[31] = var59;
            var42[32] = var60;
            var42[33] = var57;
            var42[34] = var81;
            var42[35] = var25;
            var42[36] = var78;
            var42[37] = var82;
            var42[38] = var50;
            var42[39] = var47;
            var42[40] = var49;
            var42[41] = var92;
            var42[42] = var53;
            var42[43] = var54;
            var42[44] = var46;
            var42[45] = r108;
            var42[46] = r107;
            var42[47] = r106;
            var42[48] = r105;
            var42[49] = r104;
            var42[50] = var94;
            var42[51] = var97;
            var42[52] = var96;
            var42[53] = var95;
            var42[54] = r103;
            var42[55] = var99;
            var42[56] = var98;
            var42[57] = var87;
            var42[58] = var86;
            var42[59] = var85;
            var42[60] = var93;
            var42[61] = var91;
            var42[62] = var90;
            var42[63] = var89;
            var42[64] = var88;
            var42[65] = var75;
            var42[66] = var74;
            var42[67] = r117;
            var42[68] = r109;
            var42[69] = var45;
            var42[70] = r113;
            var42[71] = r112;
            var42[72] = var84;
            var42[73] = var83;
            var42[74] = r101;
            var42[75] = var63;
            var42[76] = var44;
            var42[77] = var43;
            var40 = function() {
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
                var3 = _closure2_slot103;
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
            var42 = var64.bind(var65)(var40, var42);
            var65 = _closure1_slot1;
            var64 = 94;
            var40 = r122[var64];
            var40 = var65.bind(var4)(var40);
            var42 = var40.bind(var4)(var42);
            var _closure2_slot124 = var42;
            var40 = r122[var64];
            var40 = var65.bind(var4)(var40);
            r121 = var40.bind(var4)(var10);
            var _closure2_slot125 = r121;
            var40 = r122[var64];
            var40 = var65.bind(var4)(var40);
            var40 = var40.bind(var4)(r123);
            var _closure2_slot126 = var40;
            var64 = r122[var64];
            var64 = var65.bind(var4)(var64);
            var64 = var64.bind(var4)(var9);
            var _closure2_slot127 = var64;
            var65 = r120;
            if(!var65) { _fun0004_ip = 5278; continue _fun0004 }
 5275:
            var65 = !var41;
 5278:
            if(!var65) { _fun0004_ip = 5299; continue _fun0004 }
 5281:
            r122 = var5 == var42;
            var41 = undefined;
            if(r122) { _fun0004_ip = 5296; continue _fun0004 }
 5290:
            var41 = var42.isMessagesCached;
 5296:
            var65 = var41;
 5299:
            var _closure2_slot128 = var65;
            var41 = _closure1_slot5;
            r124 = var41.useEffect;
            r122 = new Array(3);
            r122[0] = var10;
            r122[1] = r121;
            r122[2] = var35;
            r121 = function() {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                    var3 = _closure2_slot125;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0028_ip = 28; continue _fun0028 }
 16:
                    var4 = _closure2_slot125;
                    var3 = _closure2_slot7;
                    var2 = var4 !== var3;
 28:
                    if(!var2) { _fun0028_ip = 79; continue _fun0028 }
 31:
                    var2 = _closure2_slot119;
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
            r121 = r124.bind(var41)(r121, r122);
            r122 = var41.useEffect;
            r121 = new Array(3);
            r121[0] = r123;
            r121[1] = var40;
            r121[2] = var15;
            var40 = function() {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                    var2 = _closure2_slot126;
                    var2 = !var2;
                    if(!var2) { _fun0029_ip = 17; continue _fun0029 }
 13:
                    var2 = _closure2_slot68;
 17:
                    if(!var2) { _fun0029_ip = 40; continue _fun0029 }
 20:
                    var3 = _closure2_slot100;
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
            var40 = r122.bind(var41)(var40, r121);
            r121 = var41.useEffect;
            var40 = new Array(8);
            var40[0] = var8;
            var40[1] = var10;
            var40[2] = var9;
            var40[3] = var38;
            var40[4] = var32;
            var40[5] = var64;
            var40[6] = r120;
            var40[7] = var33;
            var33 = function() {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var5 = 81;
                    var2 = var1[var5];
                    var1 = undefined;
                    var10 = var4.bind(var1)(var2);
                    var9 = var10.shouldJumpToOriginalPost;
                    var14 = _closure2_slot1;
                    var13 = _closure2_slot7;
                    var12 = _closure2_slot6;
                    var11 = _closure2_slot104;
                    var15 = var10;
                    var4 = var15[var9](var14, var13, var12, var11, var10);
                    if(!var4) { _fun0030_ip = 163; continue _fun0030 }
 60:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.scrollToTop;
                    var5 = _closure2_slot98;
                    var4 = _closure2_slot57;
                    var3 = false;
                    var3 = var6.bind(var7)(var5, var4, var3);
                    var3 = _closure2_slot127;
                    var5 = null;
                    var3 = var5 == var3;
                    var4 = undefined;
                    if(var3) { _fun0030_ip = 125; continue _fun0030 }
 115:
                    var3 = _closure2_slot127;
                    var4 = var3.jumpSequenceId;
 125:
                    var3 = _closure2_slot6;
                    var5 = var5 == var3;
                    var3 = undefined;
                    if(var5) { _fun0030_ip = 148; continue _fun0030 }
 138:
                    var5 = _closure2_slot6;
                    var3 = var5.jumpSequenceId;
 148:
                    if(!(var4 === var3)) { _fun0030_ip = 163; continue _fun0030 }
 152:
                    var3 = _closure2_slot105;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
 163:
                    return var1;
                }
            };
            var33 = r121.bind(var41)(var33, var40);
            var40 = var41.useEffect;
            var33 = new Array(166);
            var33[0] = r120;
            var33[1] = var9;
            var33[2] = r119;
            var33[3] = r118;
            var33[4] = r117;
            var33[5] = r116;
            var33[6] = r115;
            var33[7] = r114;
            var33[8] = r113;
            var33[9] = r112;
            var33[10] = r111;
            var33[11] = r110;
            var33[12] = r109;
            var33[13] = r108;
            var33[14] = r107;
            var33[15] = r106;
            var33[16] = r105;
            var33[17] = r104;
            var33[18] = r103;
            var33[19] = r102;
            var33[20] = r101;
            var33[21] = r100;
            var33[22] = var100;
            var33[23] = var99;
            var33[24] = var98;
            var33[25] = var97;
            var33[26] = var96;
            var33[27] = var95;
            var33[28] = var94;
            var33[29] = var93;
            var33[30] = var92;
            var33[31] = var91;
            var33[32] = var90;
            var33[33] = var89;
            var33[34] = var88;
            var33[35] = var87;
            var33[36] = var86;
            var33[37] = var85;
            var33[38] = var84;
            var33[39] = var83;
            var33[40] = var82;
            var33[41] = var81;
            var33[42] = var80;
            var33[43] = var79;
            var33[44] = var78;
            var33[45] = var77;
            var33[46] = var76;
            var33[47] = var75;
            var33[48] = var74;
            var33[49] = var73;
            var33[50] = var72;
            var33[51] = var71;
            var33[52] = var70;
            var33[53] = var69;
            var33[54] = var12;
            var33[55] = var10;
            var33[56] = var8;
            var33[57] = var23;
            var33[58] = var68;
            var33[59] = var67;
            var33[60] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 5697; continue _fun0004 }
 5691:
            var66 = var42.channelThreadsVersion;
 5697:
            var33[61] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 5716; continue _fun0004 }
 5710:
            var66 = var42.rsvpVersion;
 5716:
            var33[62] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 5735; continue _fun0004 }
 5729:
            var66 = var42.repliedIds;
 5735:
            var33[63] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 5754; continue _fun0004 }
 5748:
            var66 = var42.hasLoadedExperiments;
 5754:
            var33[64] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 5773; continue _fun0004 }
 5767:
            var66 = var42.communicationDisabledVersion;
 5773:
            var33[65] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 5792; continue _fun0004 }
 5786:
            var66 = var42.failedMessagesVersion;
 5792:
            var33[66] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 5811; continue _fun0004 }
 5805:
            var66 = var42.interactionStates;
 5811:
            var33[67] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 5830; continue _fun0004 }
 5824:
            var66 = var42.interactionComponentStates;
 5830:
            var33[68] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 5849; continue _fun0004 }
 5843:
            var66 = var42.interactionComponentStatesVersion;
 5849:
            var33[69] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 5868; continue _fun0004 }
 5862:
            var66 = var42.shouldDisableInteractiveComponents;
 5868:
            var33[70] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 5887; continue _fun0004 }
 5881:
            var66 = var42.channelPolls;
 5887:
            var33[71] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 5906; continue _fun0004 }
 5900:
            var66 = var42.activityInstanceIds;
 5906:
            var33[72] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 5925; continue _fun0004 }
 5919:
            var66 = var42.activityParticipants;
 5925:
            var33[73] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 5944; continue _fun0004 }
 5938:
            var66 = var42.activityInstancePresenceDetails;
 5944:
            var33[74] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 5963; continue _fun0004 }
 5957:
            var66 = var42.messagesWithActivitiesLaunching;
 5963:
            var33[75] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 5982; continue _fun0004 }
 5976:
            var66 = var42.invalidApplicationIds;
 5982:
            var33[76] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6001; continue _fun0004 }
 5995:
            var66 = var42.applicationAssetFetchingIds;
 6001:
            var33[77] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6020; continue _fun0004 }
 6014:
            var66 = var42.appDirectoryEmbedApplications;
 6020:
            var33[78] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6039; continue _fun0004 }
 6033:
            var66 = var42.invalidAppDirectoryEmbedApplicationIds;
 6039:
            var33[79] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6058; continue _fun0004 }
 6052:
            var66 = var42.appDirectoryEmbedApplicationFetchStates;
 6058:
            var33[80] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6077; continue _fun0004 }
 6071:
            var66 = var42.lazyCacheStatus;
 6077:
            var33[81] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6096; continue _fun0004 }
 6090:
            var66 = var42.isFollowingForumPost;
 6096:
            var33[82] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6115; continue _fun0004 }
 6109:
            var66 = var42.showMediaPostSharePrompt;
 6115:
            var33[83] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6134; continue _fun0004 }
 6128:
            var66 = var42.referralTrialOfferIds;
 6134:
            var33[84] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6153; continue _fun0004 }
 6147:
            var66 = var42.trialOffer;
 6153:
            var33[85] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6172; continue _fun0004 }
 6166:
            var66 = var42.isPremiumTier2User;
 6172:
            var33[86] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6191; continue _fun0004 }
 6185:
            var66 = var42.messageAuthorActivities;
 6191:
            var33[87] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6210; continue _fun0004 }
 6204:
            var66 = var42.activityInviteMessageIds;
 6210:
            var33[88] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6229; continue _fun0004 }
 6223:
            var66 = var42.resolvingGiftCodes;
 6229:
            var33[89] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6248; continue _fun0004 }
 6242:
            var66 = var42.resolvedGiftCodes;
 6248:
            var33[90] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6267; continue _fun0004 }
 6261:
            var66 = var42.acceptingGiftCodes;
 6267:
            var33[91] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6286; continue _fun0004 }
 6280:
            var66 = var42.mediaPostPreviewEmbeds;
 6286:
            var33[92] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6305; continue _fun0004 }
 6299:
            var66 = var42.explicitMediaFalsePositiveInfo;
 6305:
            var33[93] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6324; continue _fun0004 }
 6318:
            var66 = var42.guildTemplates;
 6324:
            var33[94] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6343; continue _fun0004 }
 6337:
            var66 = var42.buildOverrides;
 6343:
            var33[95] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6362; continue _fun0004 }
 6356:
            var66 = var42.quests;
 6362:
            var33[96] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6381; continue _fun0004 }
 6375:
            var66 = var42.isFetchingCurrentQuests;
 6381:
            var33[97] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6400; continue _fun0004 }
 6394:
            var66 = var42.showPushFeedback;
 6400:
            var33[98] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6419; continue _fun0004 }
 6413:
            var66 = var42.forwardGuildsVersion;
 6419:
            var33[99] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6438; continue _fun0004 }
 6432:
            var66 = var42.renderCommunicationDisabled;
 6438:
            var33[100] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6457; continue _fun0004 }
 6451:
            var66 = var42.editingMessageId;
 6457:
            var33[101] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6476; continue _fun0004 }
 6470:
            var66 = var42.replyingMessageId;
 6476:
            var33[102] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6495; continue _fun0004 }
 6489:
            var66 = var42.oldestUnreadMessageId;
 6495:
            var33[103] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6514; continue _fun0004 }
 6508:
            var66 = var42.isCallActive;
 6514:
            var33[104] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6533; continue _fun0004 }
 6527:
            var66 = var42.voiceStateChannelId;
 6533:
            var33[105] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6552; continue _fun0004 }
 6546:
            var66 = var42.participantsLength;
 6552:
            var33[106] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6571; continue _fun0004 }
 6565:
            var66 = var42.applications;
 6571:
            var33[107] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6590; continue _fun0004 }
 6584:
            var66 = var42.invites;
 6590:
            var33[108] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6609; continue _fun0004 }
 6603:
            var66 = var42.isSpamMessageRequest;
 6609:
            var33[109] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6628; continue _fun0004 }
 6622:
            var66 = var42.isMessageRequest;
 6628:
            var33[110] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6647; continue _fun0004 }
 6641:
            var66 = var42.currentUserCommunicationDisabled;
 6647:
            var33[111] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6666; continue _fun0004 }
 6660:
            var66 = var42.androidKeyboardHeight;
 6666:
            var33[112] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6685; continue _fun0004 }
 6679:
            var66 = var42.inlineAttachmentMedia;
 6685:
            var33[113] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6704; continue _fun0004 }
 6698:
            var66 = var42.inlineEmbedMedia;
 6704:
            var33[114] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6723; continue _fun0004 }
 6717:
            var66 = var42.renderEmbeds;
 6723:
            var33[115] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6742; continue _fun0004 }
 6736:
            var66 = var42.renderReactions;
 6742:
            var33[116] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6761; continue _fun0004 }
 6755:
            var66 = var42.animateEmoji;
 6761:
            var33[117] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6780; continue _fun0004 }
 6774:
            var66 = var42.animateStickers;
 6780:
            var33[118] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6799; continue _fun0004 }
 6793:
            var66 = var42.gifAutoPlay;
 6799:
            var33[119] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6818; continue _fun0004 }
 6812:
            var66 = var42.containerWidth;
 6818:
            var33[120] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6837; continue _fun0004 }
 6831:
            var66 = var42.guildSystemChannelFlags;
 6837:
            var33[121] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6856; continue _fun0004 }
 6850:
            var66 = var42.userSettingsLocale;
 6856:
            var33[122] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6875; continue _fun0004 }
 6869:
            var66 = var42.roleStyle;
 6875:
            var33[123] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6894; continue _fun0004 }
 6888:
            var66 = var42.canSendMessages;
 6894:
            var33[124] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6913; continue _fun0004 }
 6907:
            var66 = var42.selectedSummary;
 6913:
            var33[125] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6932; continue _fun0004 }
 6926:
            var66 = var42.shouldObscureSpoiler;
 6932:
            var33[126] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6951; continue _fun0004 }
 6945:
            var66 = var42.shouldFilterKeywords;
 6951:
            var33[127] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6970; continue _fun0004 }
 6964:
            var66 = var42.isStaff;
 6970:
            var33[128] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 6989; continue _fun0004 }
 6983:
            var66 = var42.isAgeVerified;
 6989:
            var33[129] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 7008; continue _fun0004 }
 7002:
            var66 = var42.theme;
 7008:
            var33[130] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 7027; continue _fun0004 }
 7021:
            var66 = var42.threadStartingReferenceMessage;
 7027:
            var33[131] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 7046; continue _fun0004 }
 7040:
            var66 = var42.unloadedContentEntryMessageIds;
 7046:
            var33[132] = var66;
            var67 = var5 == var42;
            var66 = undefined;
            if(var67) { _fun0004_ip = 7065; continue _fun0004 }
 7059:
            var66 = var42.guildInviteColorsFetched;
 7065:
            var33[133] = var66;
            var33[134] = var65;
            var33[135] = var64;
            var64 = var31.isAtBottom;
            var33[136] = var64;
            var33[137] = var63;
            var64 = var5 == var42;
            var63 = undefined;
            if(var64) { _fun0004_ip = 7106; continue _fun0004 }
 7100:
            var63 = var42.uploads;
 7106:
            var33[138] = var63;
            var33[139] = var62;
            var33[140] = var20;
            var33[141] = var61;
            var33[142] = var60;
            var33[143] = var59;
            var33[144] = var58;
            var33[145] = var57;
            var33[146] = var56;
            var33[147] = var55;
            var33[148] = var54;
            var33[149] = var53;
            var33[150] = var37;
            var54 = var5 == var42;
            var53 = undefined;
            if(var54) { _fun0004_ip = 7173; continue _fun0004 }
 7167:
            var53 = var42.shouldForceRender;
 7173:
            var33[151] = var53;
            var33[152] = var52;
            var33[153] = var51;
            var33[154] = var25;
            var33[155] = var50;
            var33[156] = var49;
            var33[157] = var48;
            var33[158] = var47;
            var33[159] = var46;
            var33[160] = var45;
            var33[161] = var7;
            var33[162] = var44;
            var45 = var5 == var42;
            var44 = undefined;
            if(var45) { _fun0004_ip = 7236; continue _fun0004 }
 7230:
            var44 = var42.guildEmojis;
 7236:
            var33[163] = var44;
            var33[164] = var43;
            var43 = var5 == var42;
            var5 = undefined;
            if(var43) { _fun0004_ip = 7259; continue _fun0004 }
 7253:
            var5 = var42.enableSwipeActions;
 7259:
            var33[165] = var5;
            var5 = function() {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                    var2 = _closure2_slot11;
                    var8 = null;
                    if(!(var8 != var2)) { _fun0031_ip = 4130; continue _fun0031 }
 18:
                    var2 = _closure2_slot124;
                    var2 = var8 == var2;
                    var4 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0031_ip = 43; continue _fun0031 }
 33:
                    var2 = _closure2_slot124;
                    var5 = var2.inlineAttachmentMedia;
 43:
                    var2 = _closure2_slot12;
                    var14 = var5 !== var2;
                    if(var14) { _fun0031_ip = 85; continue _fun0031 }
 54:
                    var2 = _closure2_slot124;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0031_ip = 77; continue _fun0031 }
 67:
                    var2 = _closure2_slot124;
                    var5 = var2.inlineEmbedMedia;
 77:
                    var2 = _closure2_slot13;
                    var14 = var5 !== var2;
 85:
                    if(var14) { _fun0031_ip = 119; continue _fun0031 }
 88:
                    var2 = _closure2_slot124;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0031_ip = 111; continue _fun0031 }
 101:
                    var2 = _closure2_slot124;
                    var5 = var2.renderEmbeds;
 111:
                    var2 = _closure2_slot14;
                    var14 = var5 !== var2;
 119:
                    if(var14) { _fun0031_ip = 153; continue _fun0031 }
 122:
                    var2 = _closure2_slot124;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0031_ip = 145; continue _fun0031 }
 135:
                    var2 = _closure2_slot124;
                    var5 = var2.renderReactions;
 145:
                    var2 = _closure2_slot15;
                    var14 = var5 !== var2;
 153:
                    if(var14) { _fun0031_ip = 187; continue _fun0031 }
 156:
                    var2 = _closure2_slot124;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0031_ip = 179; continue _fun0031 }
 169:
                    var2 = _closure2_slot124;
                    var5 = var2.animateEmoji;
 179:
                    var2 = _closure2_slot16;
                    var14 = var5 !== var2;
 187:
                    if(var14) { _fun0031_ip = 221; continue _fun0031 }
 190:
                    var2 = _closure2_slot124;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0031_ip = 213; continue _fun0031 }
 203:
                    var2 = _closure2_slot124;
                    var5 = var2.animateStickers;
 213:
                    var2 = _closure2_slot17;
                    var14 = var5 !== var2;
 221:
                    if(var14) { _fun0031_ip = 255; continue _fun0031 }
 224:
                    var2 = _closure2_slot124;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0031_ip = 247; continue _fun0031 }
 237:
                    var2 = _closure2_slot124;
                    var5 = var2.gifAutoPlay;
 247:
                    var2 = _closure2_slot18;
                    var14 = var5 !== var2;
 255:
                    if(var14) { _fun0031_ip = 289; continue _fun0031 }
 258:
                    var2 = _closure2_slot124;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0031_ip = 281; continue _fun0031 }
 271:
                    var2 = _closure2_slot124;
                    var5 = var2.containerWidth;
 281:
                    var2 = _closure2_slot90;
                    var14 = var5 !== var2;
 289:
                    if(var14) { _fun0031_ip = 323; continue _fun0031 }
 292:
                    var2 = _closure2_slot124;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0031_ip = 315; continue _fun0031 }
 305:
                    var2 = _closure2_slot124;
                    var5 = var2.guildSystemChannelFlags;
 315:
                    var2 = _closure2_slot10;
                    var14 = var5 !== var2;
 323:
                    if(var14) { _fun0031_ip = 357; continue _fun0031 }
 326:
                    var2 = _closure2_slot124;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0031_ip = 349; continue _fun0031 }
 339:
                    var2 = _closure2_slot124;
                    var5 = var2.userSettingsLocale;
 349:
                    var2 = _closure2_slot74;
                    var14 = var5 !== var2;
 357:
                    if(var14) { _fun0031_ip = 391; continue _fun0031 }
 360:
                    var2 = _closure2_slot124;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0031_ip = 383; continue _fun0031 }
 373:
                    var2 = _closure2_slot124;
                    var5 = var2.roleStyle;
 383:
                    var2 = _closure2_slot58;
                    var14 = var5 !== var2;
 391:
                    if(var14) { _fun0031_ip = 425; continue _fun0031 }
 394:
                    var2 = _closure2_slot124;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0031_ip = 417; continue _fun0031 }
 407:
                    var2 = _closure2_slot124;
                    var5 = var2.canSendMessages;
 417:
                    var2 = _closure2_slot47;
                    var14 = var5 !== var2;
 425:
                    if(var14) { _fun0031_ip = 459; continue _fun0031 }
 428:
                    var2 = _closure2_slot124;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0031_ip = 451; continue _fun0031 }
 441:
                    var2 = _closure2_slot124;
                    var5 = var2.showPushFeedback;
 451:
                    var2 = _closure2_slot78;
                    var14 = var5 !== var2;
 459:
                    if(var14) { _fun0031_ip = 493; continue _fun0031 }
 462:
                    var2 = _closure2_slot124;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0031_ip = 485; continue _fun0031 }
 475:
                    var2 = _closure2_slot124;
                    var5 = var2.selectedSummary;
 485:
                    var2 = _closure2_slot83;
                    var14 = var5 !== var2;
 493:
                    if(var14) { _fun0031_ip = 527; continue _fun0031 }
 496:
                    var2 = _closure2_slot124;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0031_ip = 519; continue _fun0031 }
 509:
                    var2 = _closure2_slot124;
                    var5 = var2.shouldObscureSpoiler;
 519:
                    var2 = _closure2_slot85;
                    var14 = var5 !== var2;
 527:
                    if(var14) { _fun0031_ip = 561; continue _fun0031 }
 530:
                    var2 = _closure2_slot124;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0031_ip = 553; continue _fun0031 }
 543:
                    var2 = _closure2_slot124;
                    var5 = var2.shouldFilterKeywords;
 553:
                    var2 = _closure2_slot94;
                    var14 = var5 !== var2;
 561:
                    if(var14) { _fun0031_ip = 595; continue _fun0031 }
 564:
                    var2 = _closure2_slot124;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0031_ip = 587; continue _fun0031 }
 577:
                    var2 = _closure2_slot124;
                    var5 = var2.explicitMediaFalsePositiveInfo;
 587:
                    var2 = _closure2_slot89;
                    var14 = var5 !== var2;
 595:
                    if(var14) { _fun0031_ip = 629; continue _fun0031 }
 598:
                    var2 = _closure2_slot124;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0031_ip = 621; continue _fun0031 }
 611:
                    var2 = _closure2_slot124;
                    var5 = var2.isStaff;
 621:
                    var2 = _closure2_slot93;
                    var14 = var5 !== var2;
 629:
                    if(var14) { _fun0031_ip = 663; continue _fun0031 }
 632:
                    var2 = _closure2_slot124;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0031_ip = 655; continue _fun0031 }
 645:
                    var2 = _closure2_slot124;
                    var5 = var2.isAgeVerified;
 655:
                    var2 = _closure2_slot86;
                    var14 = var5 !== var2;
 663:
                    if(var14) { _fun0031_ip = 697; continue _fun0031 }
 666:
                    var2 = _closure2_slot124;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0031_ip = 689; continue _fun0031 }
 679:
                    var2 = _closure2_slot124;
                    var5 = var2.theme;
 689:
                    var2 = _closure2_slot19;
                    var14 = var5 !== var2;
 697:
                    if(var14) { _fun0031_ip = 741; continue _fun0031 }
 700:
                    var2 = _closure2_slot124;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0031_ip = 723; continue _fun0031 }
 713:
                    var2 = _closure2_slot124;
                    var5 = var2.shouldForceRender;
 723:
                    var2 = _closure2_slot103;
                    var2 = var5 !== var2;
                    if(!var2) { _fun0031_ip = 738; continue _fun0031 }
 734:
                    var2 = _closure2_slot103;
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
                    var5 = _closure2_slot99;
                    var5 = var5.isAtBottom;
                    var6['isAtBottom'] = var5;
                    var10 = _closure2_slot107;
                    var5 = var10.getPreviousMessages;
                    var5 = var5.bind(var10)();
                    var5 = var8 != var5;
                    var6['hasPreviousMessages'] = var5;
                    var5 = {};
                    var10 = _closure2_slot127;
                    if(!(var8 == var10)) { _fun0031_ip = 849; continue _fun0031 }
 843:
                    var10 = _closure2_slot6;
                    _fun0031_ip = 853; continue _fun0031;
 849:
                    var10 = _closure2_slot127;
 853:
                    var5['messages'] = var10;
                    var10 = _closure2_slot124;
                    var11 = var8 == var10;
                    var10 = undefined;
                    if(var11) { _fun0031_ip = 881; continue _fun0031 }
 871:
                    var11 = _closure2_slot124;
                    var10 = var11.androidKeyboardHeight;
 881:
                    if(!(var8 == var10)) { _fun0031_ip = 889; continue _fun0031 }
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
                    var5 = _closure2_slot124;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0031_ip = 960; continue _fun0031 }
 950:
                    var5 = _closure2_slot124;
                    var13 = var5.resolvingGiftCodes;
 960:
                    var5 = _closure2_slot51;
                    var33 = var13 !== var5;
                    if(var33) { _fun0031_ip = 1002; continue _fun0031 }
 971:
                    var5 = _closure2_slot124;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0031_ip = 994; continue _fun0031 }
 984:
                    var5 = _closure2_slot124;
                    var13 = var5.resolvedGiftCodes;
 994:
                    var5 = _closure2_slot52;
                    var33 = var13 !== var5;
 1002:
                    if(var33) { _fun0031_ip = 1036; continue _fun0031 }
 1005:
                    var5 = _closure2_slot124;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0031_ip = 1028; continue _fun0031 }
 1018:
                    var5 = _closure2_slot124;
                    var13 = var5.acceptingGiftCodes;
 1028:
                    var5 = _closure2_slot53;
                    var33 = var13 !== var5;
 1036:
                    var _closure3_slot0 = var33;
                    var5 = _closure2_slot124;
                    var5 = var8 == var5;
                    var32 = undefined;
                    if(var5) { _fun0031_ip = 1063; continue _fun0031 }
 1053:
                    var5 = _closure2_slot124;
                    var32 = var5.uploads;
 1063:
                    var31 = _closure2_slot55;
                    var13 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var15 = 95;
                    var5 = var5[var15];
                    var16 = var13.bind(var4)(var5);
                    var5 = _closure2_slot124;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0031_ip = 1110; continue _fun0031 }
 1100:
                    var5 = _closure2_slot124;
                    var13 = var5.interactionStates;
 1110:
                    var5 = _closure2_slot60;
                    var5 = var16.bind(var4)(var13, var5);
                    var24 = !var5;
                    var _closure3_slot1 = var24;
                    var5 = _closure2_slot124;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0031_ip = 1150; continue _fun0031 }
 1140:
                    var5 = _closure2_slot124;
                    var13 = var5.channelPolls;
 1150:
                    var5 = _closure2_slot88;
                    var21 = var13 !== var5;
                    var _closure3_slot2 = var21;
                    var5 = _closure2_slot124;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0031_ip = 1185; continue _fun0031 }
 1175:
                    var5 = _closure2_slot124;
                    var13 = var5.interactionComponentStatesVersion;
 1185:
                    var5 = _closure2_slot62;
                    var23 = var13 !== var5;
                    var _closure3_slot3 = var23;
                    var5 = _closure2_slot124;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0031_ip = 1220; continue _fun0031 }
 1210:
                    var5 = _closure2_slot124;
                    var13 = var5.shouldDisableInteractiveComponents;
 1220:
                    var5 = _closure2_slot87;
                    var5 = var13 !== var5;
                    var _closure3_slot4 = var5;
                    var5 = _closure2_slot124;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0031_ip = 1255; continue _fun0031 }
 1245:
                    var5 = _closure2_slot124;
                    var13 = var5.communicationDisabledVersion;
 1255:
                    var5 = _closure2_slot71;
                    var29 = var13 !== var5;
                    var _closure3_slot5 = var29;
                    var5 = _closure2_slot124;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0031_ip = 1290; continue _fun0031 }
 1280:
                    var5 = _closure2_slot124;
                    var13 = var5.failedMessagesVersion;
 1290:
                    var5 = _closure2_slot70;
                    var28 = var13 !== var5;
                    var _closure3_slot6 = var28;
                    var5 = _closure2_slot124;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0031_ip = 1325; continue _fun0031 }
 1315:
                    var5 = _closure2_slot124;
                    var13 = var5.renderCommunicationDisabled;
 1325:
                    var5 = _closure2_slot72;
                    var25 = var13 !== var5;
                    var _closure3_slot7 = var25;
                    var5 = _closure2_slot124;
                    var5 = var8 == var5;
                    var27 = undefined;
                    if(var5) { _fun0031_ip = 1360; continue _fun0031 }
 1350:
                    var5 = _closure2_slot124;
                    var27 = var5.forwardGuildsVersion;
 1360:
                    var26 = _closure2_slot95;
                    var13 = _closure2_slot1;
                    var5 = var13.isForumPost;
                    var22 = var5.bind(var13)();
                    if(!var22) { _fun0031_ip = 1412; continue _fun0031 }
 1381:
                    var5 = _closure2_slot124;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0031_ip = 1404; continue _fun0031 }
 1394:
                    var5 = _closure2_slot124;
                    var13 = var5.isFollowingForumPost;
 1404:
                    var5 = _closure2_slot76;
                    var22 = var13 !== var5;
 1412:
                    var _closure3_slot8 = var22;
                    var5 = _closure2_slot124;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0031_ip = 1439; continue _fun0031 }
 1429:
                    var5 = _closure2_slot124;
                    var13 = var5.showMediaPostSharePrompt;
 1439:
                    var5 = _closure2_slot77;
                    var20 = var13 !== var5;
                    var _closure3_slot9 = var20;
                    var5 = _closure2_slot124;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0031_ip = 1474; continue _fun0031 }
 1464:
                    var5 = _closure2_slot124;
                    var13 = var5.unloadedContentEntryMessageIds;
 1474:
                    var5 = _closure2_slot91;
                    var19 = var13 !== var5;
                    var _closure3_slot10 = var19;
                    var5 = _closure2_slot124;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0031_ip = 1509; continue _fun0031 }
 1499:
                    var5 = _closure2_slot124;
                    var13 = var5.invalidApplicationIds;
 1509:
                    var5 = _closure2_slot27;
                    var5 = var13 !== var5;
                    var _closure3_slot11 = var5;
                    var13 = _closure2_slot124;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0031_ip = 1544; continue _fun0031 }
 1534:
                    var13 = _closure2_slot124;
                    var16 = var13.activityInstanceIds;
 1544:
                    var13 = _closure2_slot29;
                    var30 = var16 !== var13;
                    if(var30) { _fun0031_ip = 1586; continue _fun0031 }
 1555:
                    var13 = _closure2_slot124;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0031_ip = 1578; continue _fun0031 }
 1568:
                    var13 = _closure2_slot124;
                    var16 = var13.activityParticipants;
 1578:
                    var13 = _closure2_slot31;
                    var30 = var16 !== var13;
 1586:
                    if(var30) { _fun0031_ip = 1620; continue _fun0031 }
 1589:
                    var13 = _closure2_slot124;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0031_ip = 1612; continue _fun0031 }
 1602:
                    var13 = _closure2_slot124;
                    var16 = var13.applicationAssetFetchingIds;
 1612:
                    var13 = _closure2_slot28;
                    var30 = var16 !== var13;
 1620:
                    if(var30) { _fun0031_ip = 1654; continue _fun0031 }
 1623:
                    var13 = _closure2_slot124;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0031_ip = 1646; continue _fun0031 }
 1636:
                    var13 = _closure2_slot124;
                    var16 = var13.activityInstancePresenceDetails;
 1646:
                    var13 = _closure2_slot30;
                    var30 = var16 !== var13;
 1654:
                    if(var30) { _fun0031_ip = 1688; continue _fun0031 }
 1657:
                    var13 = _closure2_slot124;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0031_ip = 1680; continue _fun0031 }
 1670:
                    var13 = _closure2_slot124;
                    var16 = var13.messagesWithActivitiesLaunching;
 1680:
                    var13 = _closure2_slot32;
                    var30 = var16 !== var13;
 1688:
                    if(var30) { _fun0031_ip = 1694; continue _fun0031 }
 1691:
                    var30 = var5;
 1694:
                    var _closure3_slot12 = var30;
                    var13 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var15];
                    var17 = var13.bind(var4)(var5);
                    var16 = var17.areArraysShallowEqual;
                    var5 = _closure2_slot124;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0031_ip = 1744; continue _fun0031 }
 1734:
                    var5 = _closure2_slot124;
                    var13 = var5.activityInviteMessageIds;
 1744:
                    if(!(var8 == var13)) { _fun0031_ip = 1752; continue _fun0031 }
 1748:
                    var13 = new Array(0);
 1752:
                    var5 = _closure2_slot22;
                    if(!(var8 == var5)) { _fun0031_ip = 1766; continue _fun0031 }
 1760:
                    var5 = new Array(0);
                    _fun0031_ip = 1770; continue _fun0031;
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
                    var5 = _closure2_slot124;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0031_ip = 1829; continue _fun0031 }
 1819:
                    var5 = _closure2_slot124;
                    var13 = var5.referralTrialOfferIds;
 1829:
                    if(!(var8 == var13)) { _fun0031_ip = 1837; continue _fun0031 }
 1833:
                    var13 = new Array(0);
 1837:
                    var5 = _closure2_slot40;
                    if(!(var8 == var5)) { _fun0031_ip = 1851; continue _fun0031 }
 1845:
                    var5 = new Array(0);
                    _fun0031_ip = 1855; continue _fun0031;
 1851:
                    var5 = _closure2_slot40;
 1855:
                    var5 = var15.bind(var16)(var13, var5);
                    var17 = !var5;
                    if(var17) { _fun0031_ip = 1898; continue _fun0031 }
 1867:
                    var5 = _closure2_slot124;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0031_ip = 1890; continue _fun0031 }
 1880:
                    var5 = _closure2_slot124;
                    var13 = var5.trialOffer;
 1890:
                    var5 = _closure2_slot41;
                    var17 = var13 !== var5;
 1898:
                    if(var17) { _fun0031_ip = 1932; continue _fun0031 }
 1901:
                    var5 = _closure2_slot124;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0031_ip = 1924; continue _fun0031 }
 1914:
                    var5 = _closure2_slot124;
                    var13 = var5.isPremiumTier2User;
 1924:
                    var5 = _closure2_slot42;
                    var17 = var13 !== var5;
 1932:
                    var _closure3_slot14 = var17;
                    var5 = _closure2_slot124;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0031_ip = 1959; continue _fun0031 }
 1949:
                    var5 = _closure2_slot124;
                    var13 = var5.guildInviteColorsFetched;
 1959:
                    var5 = _closure2_slot96;
                    var16 = var13 !== var5;
                    var _closure3_slot15 = var16;
                    var5 = _closure2_slot124;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0031_ip = 1994; continue _fun0031 }
 1984:
                    var5 = _closure2_slot124;
                    var13 = var5.guildEmojis;
 1994:
                    var5 = _closure2_slot97;
                    var13 = var13 !== var5;
                    var _closure3_slot16 = var13;
                    var5 = _closure2_slot79;
                    var34 = 'initializing';
                    var5 = var34 !== var5;
                    var15 = _closure2_slot124;
                    var35 = var8 == var15;
                    var15 = undefined;
                    if(var35) { _fun0031_ip = 2043; continue _fun0031 }
 2033:
                    var35 = _closure2_slot124;
                    var15 = var35.lazyCacheStatus;
 2043:
                    var15 = var34 !== var15;
                    if(var14) { _fun0031_ip = 3319; continue _fun0031 }
 2053:
                    if(var33) { _fun0031_ip = 3319; continue _fun0031 }
 2059:
                    if(!(var32 === var31)) { _fun0031_ip = 3319; continue _fun0031 }
 2066:
                    if(var30) { _fun0031_ip = 3319; continue _fun0031 }
 2072:
                    var31 = _closure2_slot127;
                    var30 = _closure2_slot6;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2087:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2110; continue _fun0031 }
 2100:
                    var30 = _closure2_slot124;
                    var31 = var30.editingMessageId;
 2110:
                    var30 = _closure2_slot43;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2121:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2144; continue _fun0031 }
 2134:
                    var30 = _closure2_slot124;
                    var31 = var30.replyingMessageId;
 2144:
                    var30 = _closure2_slot44;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2155:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2178; continue _fun0031 }
 2168:
                    var30 = _closure2_slot124;
                    var31 = var30.voiceStateChannelId;
 2178:
                    var30 = _closure2_slot49;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2189:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2212; continue _fun0031 }
 2202:
                    var30 = _closure2_slot124;
                    var31 = var30.messageAuthorActivities;
 2212:
                    var30 = _closure2_slot21;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2223:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2246; continue _fun0031 }
 2236:
                    var30 = _closure2_slot124;
                    var31 = var30.oldestUnreadMessageId;
 2246:
                    var30 = _closure2_slot45;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2257:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2280; continue _fun0031 }
 2270:
                    var30 = _closure2_slot124;
                    var31 = var30.invites;
 2280:
                    var30 = _closure2_slot23;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2291:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2314; continue _fun0031 }
 2304:
                    var30 = _closure2_slot124;
                    var31 = var30.appDirectoryEmbedApplications;
 2314:
                    var30 = _closure2_slot24;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2325:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2348; continue _fun0031 }
 2338:
                    var30 = _closure2_slot124;
                    var31 = var30.invalidAppDirectoryEmbedApplicationIds;
 2348:
                    var30 = _closure2_slot25;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2359:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2382; continue _fun0031 }
 2372:
                    var30 = _closure2_slot124;
                    var31 = var30.appDirectoryEmbedApplicationFetchStates;
 2382:
                    var30 = _closure2_slot26;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2393:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2416; continue _fun0031 }
 2406:
                    var30 = _closure2_slot124;
                    var31 = var30.guildTemplates;
 2416:
                    var30 = _closure2_slot35;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2427:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2450; continue _fun0031 }
 2440:
                    var30 = _closure2_slot124;
                    var31 = var30.buildOverrides;
 2450:
                    var30 = _closure2_slot36;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2461:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2484; continue _fun0031 }
 2474:
                    var30 = _closure2_slot124;
                    var31 = var30.quests;
 2484:
                    var30 = _closure2_slot37;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2495:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2518; continue _fun0031 }
 2508:
                    var30 = _closure2_slot124;
                    var31 = var30.isFetchingCurrentQuests;
 2518:
                    var30 = _closure2_slot38;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2529:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2552; continue _fun0031 }
 2542:
                    var30 = _closure2_slot124;
                    var31 = var30.participantsLength;
 2552:
                    var30 = _closure2_slot54;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2563:
                    var31 = _closure2_slot66;
                    var30 = _closure2_slot127;
                    var30 = var8 != var30;
                    if(!var30) { _fun0031_ip = 2604; continue _fun0031 }
 2578:
                    var32 = _closure2_slot127;
                    var32 = var32.ready;
                    if(var32) { _fun0031_ip = 2601; continue _fun0031 }
 2591:
                    var33 = _closure2_slot127;
                    var32 = var33.cached;
 2601:
                    var30 = var32;
 2604:
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2611:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2634; continue _fun0031 }
 2624:
                    var30 = _closure2_slot124;
                    var31 = var30.channelThreadsVersion;
 2634:
                    var30 = _closure2_slot59;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2645:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2668; continue _fun0031 }
 2658:
                    var30 = _closure2_slot124;
                    var31 = var30.rsvpVersion;
 2668:
                    var30 = _closure2_slot69;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2679:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2702; continue _fun0031 }
 2692:
                    var30 = _closure2_slot124;
                    var31 = var30.repliedIds;
 2702:
                    var30 = _closure2_slot56;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2713:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2736; continue _fun0031 }
 2726:
                    var30 = _closure2_slot124;
                    var31 = var30.hasLoadedExperiments;
 2736:
                    var30 = _closure2_slot63;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2747:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2770; continue _fun0031 }
 2760:
                    var30 = _closure2_slot124;
                    var31 = var30.isMessageRequest;
 2770:
                    var30 = _closure2_slot65;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2781:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2804; continue _fun0031 }
 2794:
                    var30 = _closure2_slot124;
                    var31 = var30.isSpamMessageRequest;
 2804:
                    var30 = _closure2_slot64;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2815:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2838; continue _fun0031 }
 2828:
                    var30 = _closure2_slot124;
                    var31 = var30.currentUserCommunicationDisabled;
 2838:
                    var30 = _closure2_slot73;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2849:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2872; continue _fun0031 }
 2862:
                    var30 = _closure2_slot124;
                    var31 = var30.userSettingsLocale;
 2872:
                    var30 = _closure2_slot74;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2883:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2906; continue _fun0031 }
 2896:
                    var30 = _closure2_slot124;
                    var31 = var30.selectedSummary;
 2906:
                    var30 = _closure2_slot83;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2917:
                    var30 = _closure2_slot124;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0031_ip = 2940; continue _fun0031 }
 2930:
                    var30 = _closure2_slot124;
                    var31 = var30.showPushFeedback;
 2940:
                    var30 = _closure2_slot78;
                    if(!(var31 === var30)) { _fun0031_ip = 3319; continue _fun0031 }
 2951:
                    if(!(var15 === var5)) { _fun0031_ip = 3319; continue _fun0031 }
 2958:
                    if(var29) { _fun0031_ip = 3319; continue _fun0031 }
 2964:
                    if(var28) { _fun0031_ip = 3319; continue _fun0031 }
 2970:
                    if(!(var27 === var26)) { _fun0031_ip = 3319; continue _fun0031 }
 2977:
                    if(var25) { _fun0031_ip = 3319; continue _fun0031 }
 2983:
                    if(var24) { _fun0031_ip = 3319; continue _fun0031 }
 2989:
                    if(var23) { _fun0031_ip = 3319; continue _fun0031 }
 2995:
                    if(var22) { _fun0031_ip = 3319; continue _fun0031 }
 3001:
                    if(!(var8 == var11)) { _fun0031_ip = 3319; continue _fun0031 }
 3008:
                    if(!(var8 == var9)) { _fun0031_ip = 3319; continue _fun0031 }
 3015:
                    var22 = _closure2_slot124;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0031_ip = 3038; continue _fun0031 }
 3028:
                    var22 = _closure2_slot124;
                    var23 = var22.androidKeyboardHeight;
 3038:
                    var22 = _closure2_slot80;
                    if(!(var23 === var22)) { _fun0031_ip = 3319; continue _fun0031 }
 3049:
                    var22 = _closure2_slot124;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0031_ip = 3072; continue _fun0031 }
 3062:
                    var22 = _closure2_slot124;
                    var23 = var22.mediaPostPreviewEmbeds;
 3072:
                    var22 = _closure2_slot34;
                    if(!(var23 === var22)) { _fun0031_ip = 3319; continue _fun0031 }
 3083:
                    var22 = _closure2_slot124;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0031_ip = 3106; continue _fun0031 }
 3096:
                    var22 = _closure2_slot124;
                    var23 = var22.shouldObscureSpoiler;
 3106:
                    var22 = _closure2_slot85;
                    if(!(var23 === var22)) { _fun0031_ip = 3319; continue _fun0031 }
 3117:
                    var22 = _closure2_slot124;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0031_ip = 3140; continue _fun0031 }
 3130:
                    var22 = _closure2_slot124;
                    var23 = var22.shouldFilterKeywords;
 3140:
                    var22 = _closure2_slot94;
                    if(!(var23 === var22)) { _fun0031_ip = 3319; continue _fun0031 }
 3151:
                    var22 = _closure2_slot124;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0031_ip = 3174; continue _fun0031 }
 3164:
                    var22 = _closure2_slot124;
                    var23 = var22.shouldDisableInteractiveComponents;
 3174:
                    var22 = _closure2_slot87;
                    if(!(var23 === var22)) { _fun0031_ip = 3319; continue _fun0031 }
 3185:
                    if(var21) { _fun0031_ip = 3319; continue _fun0031 }
 3191:
                    if(var20) { _fun0031_ip = 3319; continue _fun0031 }
 3197:
                    var20 = _closure2_slot124;
                    var20 = var8 == var20;
                    var21 = undefined;
                    if(var20) { _fun0031_ip = 3220; continue _fun0031 }
 3210:
                    var20 = _closure2_slot124;
                    var21 = var20.threadStartingReferenceMessage;
 3220:
                    var20 = _closure2_slot50;
                    if(!(var21 === var20)) { _fun0031_ip = 3319; continue _fun0031 }
 3228:
                    if(var19) { _fun0031_ip = 3319; continue _fun0031 }
 3231:
                    var19 = _closure2_slot124;
                    var19 = var8 == var19;
                    var20 = undefined;
                    if(var19) { _fun0031_ip = 3254; continue _fun0031 }
 3244:
                    var19 = _closure2_slot124;
                    var20 = var19.applications;
 3254:
                    var19 = _closure2_slot33;
                    if(!(var20 === var19)) { _fun0031_ip = 3319; continue _fun0031 }
 3262:
                    if(var18) { _fun0031_ip = 3319; continue _fun0031 }
 3265:
                    if(var17) { _fun0031_ip = 3319; continue _fun0031 }
 3268:
                    if(var16) { _fun0031_ip = 3319; continue _fun0031 }
 3271:
                    if(var13) { _fun0031_ip = 3319; continue _fun0031 }
 3274:
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var13 = 81;
                    var13 = var17[var13];
                    var18 = var16.bind(var4)(var13);
                    var17 = var18.recordTimings;
                    var16 = _closure2_slot7;
                    var13 = _closure2_slot6;
                    var13 = var17.bind(var18)(var16, var13);
                    _fun0031_ip = 4130; continue _fun0031;
 3319:
                    var13 = global;
                    var13 = var13.Set;
                    var16 = var13.prototype;
                    var16 = Object.create(var16, {constructor: {value: var13}});
                    var39 = var16;
                    var13 = new var39[var13](var38);
                    var13 = var13 instanceof Object ? var13 : var16;
                    var _closure3_slot17 = var13;
                    var16 = _closure2_slot124;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0031_ip = 3374; continue _fun0031 }
 3364:
                    var16 = _closure2_slot124;
                    var17 = var16.editingMessageId;
 3374:
                    var16 = _closure2_slot43;
                    if(!(var17 !== var16)) { _fun0031_ip = 3464; continue _fun0031 }
 3382:
                    var16 = _closure2_slot43;
                    if(!(var8 != var16)) { _fun0031_ip = 3404; continue _fun0031 }
 3390:
                    var17 = var13.add;
                    var16 = _closure2_slot43;
                    var16 = var17.bind(var13)(var16);
 3404:
                    var16 = _closure2_slot124;
                    var17 = var8 == var16;
                    var16 = undefined;
                    if(var17) { _fun0031_ip = 3427; continue _fun0031 }
 3417:
                    var17 = _closure2_slot124;
                    var16 = var17.editingMessageId;
 3427:
                    if(!(var8 != var16)) { _fun0031_ip = 3464; continue _fun0031 }
 3431:
                    var17 = var13.add;
                    var16 = _closure2_slot124;
                    var18 = var8 == var16;
                    var16 = undefined;
                    if(var18) { _fun0031_ip = 3459; continue _fun0031 }
 3449:
                    var18 = _closure2_slot124;
                    var16 = var18.editingMessageId;
 3459:
                    var16 = var17.bind(var13)(var16);
 3464:
                    var16 = _closure2_slot124;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0031_ip = 3487; continue _fun0031 }
 3477:
                    var16 = _closure2_slot124;
                    var17 = var16.replyingMessageId;
 3487:
                    var16 = _closure2_slot44;
                    if(!(var17 !== var16)) { _fun0031_ip = 3577; continue _fun0031 }
 3495:
                    var16 = _closure2_slot44;
                    if(!(var8 != var16)) { _fun0031_ip = 3517; continue _fun0031 }
 3503:
                    var17 = var13.add;
                    var16 = _closure2_slot44;
                    var16 = var17.bind(var13)(var16);
 3517:
                    var16 = _closure2_slot124;
                    var17 = var8 == var16;
                    var16 = undefined;
                    if(var17) { _fun0031_ip = 3540; continue _fun0031 }
 3530:
                    var17 = _closure2_slot124;
                    var16 = var17.replyingMessageId;
 3540:
                    if(!(var8 != var16)) { _fun0031_ip = 3577; continue _fun0031 }
 3544:
                    var17 = var13.add;
                    var16 = _closure2_slot124;
                    var18 = var8 == var16;
                    var16 = undefined;
                    if(var18) { _fun0031_ip = 3572; continue _fun0031 }
 3562:
                    var18 = _closure2_slot124;
                    var16 = var18.replyingMessageId;
 3572:
                    var16 = var17.bind(var13)(var16);
 3577:
                    var17 = _closure2_slot66;
                    var16 = _closure2_slot127;
                    var16 = var8 != var16;
                    if(!var16) { _fun0031_ip = 3618; continue _fun0031 }
 3592:
                    var18 = _closure2_slot127;
                    var18 = var18.ready;
                    if(var18) { _fun0031_ip = 3615; continue _fun0031 }
 3605:
                    var19 = _closure2_slot127;
                    var18 = var19.cached;
 3615:
                    var16 = var18;
 3618:
                    if(!(var17 === var16)) { _fun0031_ip = 3715; continue _fun0031 }
 3622:
                    var16 = _closure2_slot124;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0031_ip = 3645; continue _fun0031 }
 3635:
                    var16 = _closure2_slot124;
                    var17 = var16.isCallActive;
 3645:
                    var16 = _closure2_slot48;
                    if(!(var17 === var16)) { _fun0031_ip = 3715; continue _fun0031 }
 3653:
                    var16 = _closure2_slot124;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0031_ip = 3676; continue _fun0031 }
 3666:
                    var16 = _closure2_slot124;
                    var17 = var16.voiceStateChannelId;
 3676:
                    var16 = _closure2_slot49;
                    if(!(var17 === var16)) { _fun0031_ip = 3715; continue _fun0031 }
 3684:
                    var16 = _closure2_slot124;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0031_ip = 3707; continue _fun0031 }
 3697:
                    var16 = _closure2_slot124;
                    var17 = var16.participantsLength;
 3707:
                    var16 = _closure2_slot54;
                    if(!(var17 !== var16)) { _fun0031_ip = 3797; continue _fun0031 }
 3715:
                    var17 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var16 = 88;
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
                    if(!(var8 != var16)) { _fun0031_ip = 3797; continue _fun0031 }
 3782:
                    var17 = var13.add;
                    var16 = var16.id;
                    var16 = var17.bind(var13)(var16);
 3797:
                    var16 = _closure2_slot124;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0031_ip = 3820; continue _fun0031 }
 3810:
                    var16 = _closure2_slot124;
                    var17 = var16.channelThreadsVersion;
 3820:
                    var16 = _closure2_slot59;
                    var16 = var17 !== var16;
                    var _closure3_slot18 = var16;
                    var16 = _closure2_slot124;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0031_ip = 3855; continue _fun0031 }
 3845:
                    var16 = _closure2_slot124;
                    var17 = var16.rsvpVersion;
 3855:
                    var16 = _closure2_slot69;
                    var16 = var17 !== var16;
                    var _closure3_slot19 = var16;
                    var16 = _closure2_slot124;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0031_ip = 3890; continue _fun0031 }
 3880:
                    var16 = _closure2_slot124;
                    var17 = var16.repliedIds;
 3890:
                    var16 = _closure2_slot56;
                    var16 = var17 !== var16;
                    var _closure3_slot20 = var16;
                    var16 = _closure2_slot124;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0031_ip = 3925; continue _fun0031 }
 3915:
                    var16 = _closure2_slot124;
                    var17 = var16.hasLoadedExperiments;
 3925:
                    var16 = _closure2_slot63;
                    var16 = var17 !== var16;
                    var _closure3_slot21 = var16;
                    var16 = _closure2_slot124;
                    var17 = var8 == var16;
                    var16 = undefined;
                    if(var17) { _fun0031_ip = 3960; continue _fun0031 }
 3950:
                    var17 = _closure2_slot124;
                    var16 = var17.communicationDisabledVersion;
 3960:
                    var17 = var8 != var16;
                    var8 = -1;
                    if(!var17) { _fun0031_ip = 3976; continue _fun0031 }
 3973:
                    var8 = var16;
 3976:
                    var _closure3_slot22 = var8;
                    var8 = !var15;
                    if(var15) { _fun0031_ip = 3989; continue _fun0031 }
 3986:
                    var8 = var5;
 3989:
                    var _closure3_slot23 = var8;
                    var15 = _closure2_slot6;
                    var5 = var15.forEach;
                    var3 = function(arg1) {
                        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                            var1 = arg1;
                            var3 = _closure3_slot21;
                            if(!var3) { _fun0032_ip = 38; continue _fun0032 }
 13:
                            var4 = var1.type;
                            var3 = _closure1_slot52;
                            var3 = var3.USER_JOIN;
                            if(!(var4 !== var3)) { _fun0032_ip = 2858; continue _fun0032 }
 38:
                            var3 = _closure3_slot20;
                            if(!var3) { _fun0032_ip = 108; continue _fun0032 }
 45:
                            var4 = var1.type;
                            var3 = _closure1_slot52;
                            var3 = var3.REPLY;
                            if(!(var4 === var3)) { _fun0032_ip = 108; continue _fun0032 }
 67:
                            var3 = var1.messageReference;
                            var4 = null;
                            if(!(var4 != var3)) { _fun0032_ip = 108; continue _fun0032 }
 79:
                            var5 = _closure2_slot56;
                            var4 = var5.has;
                            var3 = var3.message_id;
                            var3 = var4.bind(var5)(var3);
                            if(var3) { _fun0032_ip = 2835; continue _fun0032 }
 108:
                            var3 = _closure3_slot18;
                            if(!var3) { _fun0032_ip = 145; continue _fun0032 }
 115:
                            var4 = var1.hasFlag;
                            var3 = _closure1_slot53;
                            var3 = var3.HAS_THREAD;
                            var3 = var4.bind(var1)(var3);
                            if(var3) { _fun0032_ip = 2814; continue _fun0032 }
 145:
                            var3 = _closure3_slot19;
                            if(!var3) { _fun0032_ip = 172; continue _fun0032 }
 152:
                            var3 = var1.codedLinks;
                            var4 = var3.length;
                            var3 = 0;
                            if(!(!(var4 > var3))) { _fun0032_ip = 2793; continue _fun0032 }
 172:
                            var3 = _closure3_slot16;
                            if(!var3) { _fun0032_ip = 204; continue _fun0032 }
 179:
                            var4 = var1.type;
                            var3 = _closure1_slot52;
                            var3 = var3.EMOJI_ADDED;
                            if(!(var4 !== var3)) { _fun0032_ip = 2772; continue _fun0032 }
 204:
                            var3 = _closure3_slot7;
                            if(var3) { _fun0032_ip = 2751; continue _fun0032 }
 214:
                            var3 = _closure3_slot5;
                            if(!var3) { _fun0032_ip = 275; continue _fun0032 }
 221:
                            var5 = _closure2_slot8;
                            var4 = null;
                            if(!(var4 != var5)) { _fun0032_ip = 275; continue _fun0032 }
 234:
                            var6 = _closure1_slot40;
                            var5 = _closure2_slot8;
                            var3 = var1.author;
                            var4 = var3.id;
                            var3 = undefined;
                            var4 = var6.bind(var3)(var5, var4);
                            var3 = _closure3_slot22;
                            if(!(!(var4 > var3))) { _fun0032_ip = 2751; continue _fun0032 }
 275:
                            var3 = _closure3_slot6;
                            if(!var3) { _fun0032_ip = 307; continue _fun0032 }
 282:
                            var3 = var1.author;
                            var4 = var3.id;
                            var3 = _closure2_slot11;
                            if(!(var4 !== var3)) { _fun0032_ip = 2727; continue _fun0032 }
 307:
                            var3 = _closure3_slot1;
                            if(!var3) { _fun0032_ip = 389; continue _fun0032 }
 314:
                            var4 = _closure2_slot124;
                            var6 = null;
                            var4 = var6 == var4;
                            var5 = undefined;
                            if(var4) { _fun0032_ip = 342; continue _fun0032 }
 332:
                            var4 = _closure2_slot124;
                            var5 = var4.interactionStates;
 342:
                            if(!(var6 == var5)) { _fun0032_ip = 348; continue _fun0032 }
 346:
                            var5 = {};
 348:
                            var4 = var1.id;
                            var4 = var5[var4];
                            var5 = _closure2_slot60;
                            if(!(var6 == var5)) { _fun0032_ip = 369; continue _fun0032 }
 365:
                            var5 = {};
                            _fun0032_ip = 373; continue _fun0032;
 369:
                            var5 = _closure2_slot60;
 373:
                            var3 = var1.id;
                            var3 = var5[var3];
                            if(!(var4 === var3)) { _fun0032_ip = 2704; continue _fun0032 }
 389:
                            var3 = _closure3_slot3;
                            if(!var3) { _fun0032_ip = 487; continue _fun0032 }
 396:
                            var3 = _closure2_slot124;
                            var7 = null;
                            var6 = var7 == var3;
                            var3 = undefined;
                            if(var6) { _fun0032_ip = 448; continue _fun0032 }
 414:
                            var6 = _closure2_slot124;
                            var9 = var6.interactionComponentStates;
                            var6 = var7 == var9;
                            var3 = undefined;
                            if(var6) { _fun0032_ip = 448; continue _fun0032 }
 433:
                            var8 = var9.get;
                            var6 = var1.id;
                            var3 = var8.bind(var9)(var6);
 448:
                            var6 = _closure2_slot61;
                            var6 = var7 == var6;
                            var4 = undefined;
                            if(var6) { _fun0032_ip = 480; continue _fun0032 }
 461:
                            var7 = _closure2_slot61;
                            var6 = var7.get;
                            var5 = var1.id;
                            var4 = var6.bind(var7)(var5);
 480:
                            if(!(var3 === var4)) { _fun0032_ip = 2681; continue _fun0032 }
 487:
                            var3 = _closure3_slot4;
                            if(!var3) { _fun0032_ip = 514; continue _fun0032 }
 494:
                            var3 = var1.components;
                            var4 = var3.length;
                            var3 = 0;
                            if(!(var3 === var4)) { _fun0032_ip = 2657; continue _fun0032 }
 514:
                            var3 = _closure3_slot2;
                            if(!var3) { _fun0032_ip = 596; continue _fun0032 }
 521:
                            var4 = _closure2_slot124;
                            var6 = null;
                            var4 = var6 == var4;
                            var5 = undefined;
                            if(var4) { _fun0032_ip = 549; continue _fun0032 }
 539:
                            var4 = _closure2_slot124;
                            var5 = var4.channelPolls;
 549:
                            if(!(var6 == var5)) { _fun0032_ip = 555; continue _fun0032 }
 553:
                            var5 = {};
 555:
                            var4 = var1.id;
                            var4 = var5[var4];
                            var5 = _closure2_slot88;
                            if(!(var6 == var5)) { _fun0032_ip = 576; continue _fun0032 }
 572:
                            var5 = {};
                            _fun0032_ip = 580; continue _fun0032;
 576:
                            var5 = _closure2_slot88;
 580:
                            var3 = var1.id;
                            var3 = var5[var3];
                            if(!(var4 === var3)) { _fun0032_ip = 2634; continue _fun0032 }
 596:
                            var3 = _closure3_slot10;
                            if(!var3) { _fun0032_ip = 745; continue _fun0032 }
 606:
                            var4 = _closure2_slot124;
                            var6 = null;
                            var4 = var6 == var4;
                            var7 = undefined;
                            if(var4) { _fun0032_ip = 634; continue _fun0032 }
 624:
                            var4 = _closure2_slot124;
                            var7 = var4.unloadedContentEntryMessageIds;
 634:
                            if(!(var6 == var7)) { _fun0032_ip = 666; continue _fun0032 }
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
                            if(!(var6 == var5)) { _fun0032_ip = 719; continue _fun0032 }
 689:
                            var5 = global;
                            var5 = var5.Set;
                            var6 = var5.prototype;
                            var6 = Object.create(var6, {constructor: {value: var5}});
                            var21 = var6;
                            var5 = new var21[var5](var20);
                            var6 = var5 instanceof Object ? var5 : var6;
                            _fun0032_ip = 723; continue _fun0032;
 719:
                            var6 = _closure2_slot91;
 723:
                            var5 = var6.has;
                            var3 = var1.id;
                            var3 = var5.bind(var6)(var3);
                            if(!(var4 === var3)) { _fun0032_ip = 2611; continue _fun0032 }
 745:
                            var5 = _closure2_slot1;
                            var3 = var5.isForumPost;
                            var3 = var3.bind(var5)();
                            if(!var3) { _fun0032_ip = 831; continue _fun0032 }
 765:
                            var3 = _closure3_slot8;
                            if(var3) { _fun0032_ip = 779; continue _fun0032 }
 772:
                            var3 = _closure3_slot9;
                            if(!var3) { _fun0032_ip = 831; continue _fun0032 }
 779:
                            var5 = var1.id;
                            var7 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 96;
                            var6 = var6[var3];
                            var3 = undefined;
                            var7 = var7.bind(var3)(var6);
                            var6 = var7.castChannelIdAsMessageId;
                            var3 = _closure2_slot7;
                            var3 = var6.bind(var7)(var3);
                            if(!(var5 !== var3)) { _fun0032_ip = 2587; continue _fun0032 }
 831:
                            var3 = _closure3_slot12;
                            if(!var3) { _fun0032_ip = 853; continue _fun0032 }
 838:
                            var5 = var1.activityInstance;
                            var3 = null;
                            if(!(var3 == var5)) { _fun0032_ip = 2563; continue _fun0032 }
 853:
                            var3 = _closure3_slot13;
                            if(!var3) { _fun0032_ip = 887; continue _fun0032 }
 860:
                            var7 = var1.activity;
                            var6 = null;
                            var8 = var6 == var7;
                            var5 = undefined;
                            if(var8) { _fun0032_ip = 883; continue _fun0032 }
 877:
                            var5 = var7.party_id;
 883:
                            var3 = var6 != var5;
 887:
                            if(!var3) { _fun0032_ip = 909; continue _fun0032 }
 890:
                            var6 = _closure3_slot17;
                            var5 = var6.add;
                            var3 = var1.id;
                            var3 = var5.bind(var6)(var3);
 909:
                            var5 = var1.author;
                            var3 = null;
                            if(!(var3 != var5)) { _fun0032_ip = 2877; continue _fun0032 }
 924:
                            var17 = {};
                            var5 = _closure2_slot124;
                            var6 = var3 == var5;
                            var7 = undefined;
                            var5 = undefined;
                            if(var6) { _fun0032_ip = 951; continue _fun0032 }
 941:
                            var6 = _closure2_slot124;
                            var5 = var6.messageAuthorActivities;
 951:
                            if(!(var3 == var5)) { _fun0032_ip = 957; continue _fun0032 }
 955:
                            var5 = {};
 957:
                            var17['messageAuthorActivities'] = var5;
                            var16 = {};
                            var5 = _closure2_slot21;
                            if(!(var3 == var5)) { _fun0032_ip = 976; continue _fun0032 }
 972:
                            var5 = {};
                            _fun0032_ip = 980; continue _fun0032;
 976:
                            var5 = _closure2_slot21;
 980:
                            var16['messageAuthorActivities'] = var5;
                            var15 = {};
                            var5 = _closure2_slot124;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0032_ip = 1010; continue _fun0032 }
 1000:
                            var6 = _closure2_slot124;
                            var5 = var6.invites;
 1010:
                            if(!(var3 == var5)) { _fun0032_ip = 1042; continue _fun0032 }
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
                            var5 = _closure2_slot124;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0032_ip = 1070; continue _fun0032 }
 1060:
                            var6 = _closure2_slot124;
                            var5 = var6.appDirectoryEmbedApplications;
 1070:
                            if(!(var3 == var5)) { _fun0032_ip = 1076; continue _fun0032 }
 1074:
                            var5 = {};
 1076:
                            var15['appDirectoryEmbedApplications'] = var5;
                            var5 = _closure2_slot124;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0032_ip = 1104; continue _fun0032 }
 1094:
                            var6 = _closure2_slot124;
                            var5 = var6.invalidAppDirectoryEmbedApplicationIds;
 1104:
                            if(!(var3 == var5)) { _fun0032_ip = 1136; continue _fun0032 }
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
                            var5 = _closure2_slot124;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0032_ip = 1164; continue _fun0032 }
 1154:
                            var6 = _closure2_slot124;
                            var5 = var6.invalidApplicationIds;
 1164:
                            if(!(var3 == var5)) { _fun0032_ip = 1172; continue _fun0032 }
 1168:
                            var5 = new Array(0);
 1172:
                            var15['invalidApplicationIds'] = var5;
                            var5 = _closure2_slot124;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0032_ip = 1200; continue _fun0032 }
 1190:
                            var6 = _closure2_slot124;
                            var5 = var6.activityParticipants;
 1200:
                            if(!(var3 == var5)) { _fun0032_ip = 1208; continue _fun0032 }
 1204:
                            var5 = new Array(0);
 1208:
                            var15['activityParticipants'] = var5;
                            var5 = _closure2_slot124;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0032_ip = 1236; continue _fun0032 }
 1226:
                            var6 = _closure2_slot124;
                            var5 = var6.applicationAssetFetchingIds;
 1236:
                            if(!(var3 == var5)) { _fun0032_ip = 1244; continue _fun0032 }
 1240:
                            var5 = new Array(0);
 1244:
                            var15['applicationAssetFetchingIds'] = var5;
                            var5 = _closure2_slot124;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0032_ip = 1272; continue _fun0032 }
 1262:
                            var6 = _closure2_slot124;
                            var5 = var6.appDirectoryEmbedApplicationFetchStates;
 1272:
                            if(!(var3 == var5)) { _fun0032_ip = 1278; continue _fun0032 }
 1276:
                            var5 = {};
 1278:
                            var15['appDirectoryEmbedApplicationFetchStates'] = var5;
                            var5 = _closure2_slot124;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0032_ip = 1306; continue _fun0032 }
 1296:
                            var6 = _closure2_slot124;
                            var5 = var6.guildTemplates;
 1306:
                            if(!(var3 == var5)) { _fun0032_ip = 1338; continue _fun0032 }
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
                            var5 = _closure2_slot124;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0032_ip = 1366; continue _fun0032 }
 1356:
                            var6 = _closure2_slot124;
                            var5 = var6.buildOverrides;
 1366:
                            if(!(var3 == var5)) { _fun0032_ip = 1372; continue _fun0032 }
 1370:
                            var5 = {};
 1372:
                            var15['buildOverrides'] = var5;
                            var5 = _closure2_slot124;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0032_ip = 1400; continue _fun0032 }
 1390:
                            var6 = _closure2_slot124;
                            var5 = var6.quests;
 1400:
                            if(!(var3 == var5)) { _fun0032_ip = 1408; continue _fun0032 }
 1404:
                            var5 = new Array(0);
 1408:
                            var15['quests'] = var5;
                            var5 = _closure2_slot124;
                            var5 = var3 == var5;
                            var6 = undefined;
                            if(var5) { _fun0032_ip = 1436; continue _fun0032 }
 1426:
                            var5 = _closure2_slot124;
                            var6 = var5.isFetchingCurrentQuests;
 1436:
                            var5 = var3 != var6;
                            if(!var5) { _fun0032_ip = 1446; continue _fun0032 }
 1443:
                            var5 = var6;
 1446:
                            var15['isFetchingCurrentQuests'] = var5;
                            var5 = _closure2_slot124;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0032_ip = 1474; continue _fun0032 }
 1464:
                            var6 = _closure2_slot124;
                            var5 = var6.applications;
 1474:
                            if(!(var3 == var5)) { _fun0032_ip = 1480; continue _fun0032 }
 1478:
                            var5 = {};
 1480:
                            var15['applications'] = var5;
                            var14 = {};
                            var5 = _closure2_slot23;
                            if(!(var3 == var5)) { _fun0032_ip = 1525; continue _fun0032 }
 1495:
                            var5 = global;
                            var5 = var5.Map;
                            var6 = var5.prototype;
                            var6 = Object.create(var6, {constructor: {value: var5}});
                            var21 = var6;
                            var5 = new var21[var5](var20);
                            var5 = var5 instanceof Object ? var5 : var6;
                            _fun0032_ip = 1529; continue _fun0032;
 1525:
                            var5 = _closure2_slot23;
 1529:
                            var14['invites'] = var5;
                            var5 = _closure2_slot24;
                            if(!(var3 == var5)) { _fun0032_ip = 1546; continue _fun0032 }
 1542:
                            var5 = {};
                            _fun0032_ip = 1550; continue _fun0032;
 1546:
                            var5 = _closure2_slot24;
 1550:
                            var14['appDirectoryEmbedApplications'] = var5;
                            var5 = _closure2_slot25;
                            if(!(var3 == var5)) { _fun0032_ip = 1593; continue _fun0032 }
 1563:
                            var5 = global;
                            var5 = var5.Set;
                            var6 = var5.prototype;
                            var6 = Object.create(var6, {constructor: {value: var5}});
                            var21 = var6;
                            var5 = new var21[var5](var20);
                            var5 = var5 instanceof Object ? var5 : var6;
                            _fun0032_ip = 1597; continue _fun0032;
 1593:
                            var5 = _closure2_slot25;
 1597:
                            var14['invalidAppDirectoryEmbedApplicationIds'] = var5;
                            var5 = _closure2_slot27;
                            if(!(var3 == var5)) { _fun0032_ip = 1616; continue _fun0032 }
 1610:
                            var5 = new Array(0);
                            _fun0032_ip = 1620; continue _fun0032;
 1616:
                            var5 = _closure2_slot27;
 1620:
                            var14['invalidApplicationIds'] = var5;
                            var5 = _closure2_slot31;
                            if(!(var3 == var5)) { _fun0032_ip = 1639; continue _fun0032 }
 1633:
                            var5 = new Array(0);
                            _fun0032_ip = 1643; continue _fun0032;
 1639:
                            var5 = _closure2_slot31;
 1643:
                            var14['activityParticipants'] = var5;
                            var5 = _closure2_slot28;
                            if(!(var3 == var5)) { _fun0032_ip = 1662; continue _fun0032 }
 1656:
                            var5 = new Array(0);
                            _fun0032_ip = 1666; continue _fun0032;
 1662:
                            var5 = _closure2_slot28;
 1666:
                            var14['applicationAssetFetchingIds'] = var5;
                            var5 = _closure2_slot26;
                            if(!(var3 == var5)) { _fun0032_ip = 1683; continue _fun0032 }
 1679:
                            var5 = {};
                            _fun0032_ip = 1687; continue _fun0032;
 1683:
                            var5 = _closure2_slot26;
 1687:
                            var14['appDirectoryEmbedApplicationFetchStates'] = var5;
                            var5 = _closure2_slot35;
                            if(!(var3 == var5)) { _fun0032_ip = 1730; continue _fun0032 }
 1700:
                            var5 = global;
                            var5 = var5.Map;
                            var6 = var5.prototype;
                            var6 = Object.create(var6, {constructor: {value: var5}});
                            var21 = var6;
                            var5 = new var21[var5](var20);
                            var5 = var5 instanceof Object ? var5 : var6;
                            _fun0032_ip = 1734; continue _fun0032;
 1730:
                            var5 = _closure2_slot35;
 1734:
                            var14['guildTemplates'] = var5;
                            var5 = _closure2_slot36;
                            if(!(var3 == var5)) { _fun0032_ip = 1751; continue _fun0032 }
 1747:
                            var5 = {};
                            _fun0032_ip = 1755; continue _fun0032;
 1751:
                            var5 = _closure2_slot36;
 1755:
                            var14['buildOverrides'] = var5;
                            var5 = _closure2_slot37;
                            if(!(var3 == var5)) { _fun0032_ip = 1774; continue _fun0032 }
 1768:
                            var5 = new Array(0);
                            _fun0032_ip = 1778; continue _fun0032;
 1774:
                            var5 = _closure2_slot37;
 1778:
                            var14['quests'] = var5;
                            var5 = _closure2_slot38;
                            var5 = var3 != var5;
                            if(!var5) { _fun0032_ip = 1798; continue _fun0032 }
 1794:
                            var5 = _closure2_slot38;
 1798:
                            var14['isFetchingCurrentQuests'] = var5;
                            var5 = _closure2_slot33;
                            if(!(var3 == var5)) { _fun0032_ip = 1815; continue _fun0032 }
 1811:
                            var5 = {};
                            _fun0032_ip = 1819; continue _fun0032;
 1815:
                            var5 = _closure2_slot33;
 1819:
                            var14['applications'] = var5;
                            var13 = {};
                            var5 = _closure2_slot124;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0032_ip = 1849; continue _fun0032 }
 1839:
                            var6 = _closure2_slot124;
                            var5 = var6.resolvingGiftCodes;
 1849:
                            if(!(var3 == var5)) { _fun0032_ip = 1857; continue _fun0032 }
 1853:
                            var5 = new Array(0);
 1857:
                            var13['resolvingGiftCodes'] = var5;
                            var5 = _closure2_slot124;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0032_ip = 1885; continue _fun0032 }
 1875:
                            var6 = _closure2_slot124;
                            var5 = var6.resolvedGiftCodes;
 1885:
                            if(!(var3 == var5)) { _fun0032_ip = 1893; continue _fun0032 }
 1889:
                            var5 = new Array(0);
 1893:
                            var13['resolvedGiftCodes'] = var5;
                            var5 = _closure2_slot124;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0032_ip = 1921; continue _fun0032 }
 1911:
                            var6 = _closure2_slot124;
                            var5 = var6.acceptingGiftCodes;
 1921:
                            if(!(var3 == var5)) { _fun0032_ip = 1929; continue _fun0032 }
 1925:
                            var5 = new Array(0);
 1929:
                            var13['acceptingGiftCodes'] = var5;
                            var12 = {};
                            var5 = _closure2_slot51;
                            if(!(var3 == var5)) { _fun0032_ip = 1950; continue _fun0032 }
 1944:
                            var5 = new Array(0);
                            _fun0032_ip = 1954; continue _fun0032;
 1950:
                            var5 = _closure2_slot51;
 1954:
                            var12['resolvingGiftCodes'] = var5;
                            var5 = _closure2_slot52;
                            if(!(var3 == var5)) { _fun0032_ip = 1973; continue _fun0032 }
 1967:
                            var5 = new Array(0);
                            _fun0032_ip = 1977; continue _fun0032;
 1973:
                            var5 = _closure2_slot52;
 1977:
                            var12['resolvedGiftCodes'] = var5;
                            var5 = _closure2_slot53;
                            if(!(var3 == var5)) { _fun0032_ip = 1996; continue _fun0032 }
 1990:
                            var5 = new Array(0);
                            _fun0032_ip = 2000; continue _fun0032;
 1996:
                            var5 = _closure2_slot53;
 2000:
                            var12['acceptingGiftCodes'] = var5;
                            var10 = {};
                            var5 = _closure2_slot124;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0032_ip = 2030; continue _fun0032 }
 2020:
                            var6 = _closure2_slot124;
                            var5 = var6.mediaPostPreviewEmbeds;
 2030:
                            if(!(var3 == var5)) { _fun0032_ip = 2036; continue _fun0032 }
 2034:
                            var5 = {};
 2036:
                            var10['mediaPostPreviewEmbeds'] = var5;
                            var9 = {};
                            var5 = _closure2_slot34;
                            if(!(var3 == var5)) { _fun0032_ip = 2055; continue _fun0032 }
 2051:
                            var5 = {};
                            _fun0032_ip = 2059; continue _fun0032;
 2055:
                            var5 = _closure2_slot34;
 2059:
                            var9['mediaPostPreviewEmbeds'] = var5;
                            var8 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var11 = 97;
                            var6 = var6[var11];
                            var8 = var8.bind(var7)(var6);
                            var6 = var8.messageAuthorActivitiesChanged;
                            var6 = var6.bind(var8)(var1, var17, var16);
                            if(var6) { _fun0032_ip = 2539; continue _fun0032 }
 2106:
                            var8 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var6 = var6[var11];
                            var8 = var8.bind(var7)(var6);
                            var6 = var8.codedLinksChanged;
                            var6 = var6.bind(var8)(var1, var15, var14);
                            if(var6) { _fun0032_ip = 2539; continue _fun0032 }
 2142:
                            var6 = _closure3_slot0;
                            if(!var6) { _fun0032_ip = 2185; continue _fun0032 }
 2149:
                            var8 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var6 = var6[var11];
                            var8 = var8.bind(var7)(var6);
                            var6 = var8.giftCodesChanged;
                            var6 = var6.bind(var8)(var1, var13, var12);
                            if(var6) { _fun0032_ip = 2539; continue _fun0032 }
 2185:
                            var8 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var6 = var6[var11];
                            var8 = var8.bind(var7)(var6);
                            var6 = var8.mediaPostPreviewEmbedsChanged;
                            var6 = var6.bind(var8)(var1, var10, var9);
                            if(var6) { _fun0032_ip = 2539; continue _fun0032 }
 2221:
                            var6 = _closure3_slot23;
                            if(!var6) { _fun0032_ip = 2245; continue _fun0032 }
 2228:
                            var8 = var1.embeds;
                            var9 = var8.length;
                            var8 = 0;
                            var6 = var9 > var8;
 2245:
                            if(!var6) { _fun0032_ip = 2267; continue _fun0032 }
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
                            if(!var5) { _fun0032_ip = 2320; continue _fun0032 }
 2289:
                            var6 = _closure2_slot124;
                            var6 = var3 == var6;
                            var8 = undefined;
                            if(var6) { _fun0032_ip = 2312; continue _fun0032 }
 2302:
                            var6 = _closure2_slot124;
                            var8 = var6.threadStartingReferenceMessage;
 2312:
                            var6 = _closure2_slot50;
                            var5 = var8 !== var6;
 2320:
                            if(!var5) { _fun0032_ip = 2342; continue _fun0032 }
 2323:
                            var8 = _closure3_slot17;
                            var6 = var8.add;
                            var5 = var1.id;
                            var5 = var6.bind(var8)(var5);
 2342:
                            var5 = _closure3_slot11;
                            if(!var5) { _fun0032_ip = 2358; continue _fun0032 }
 2349:
                            var6 = var1.applicationId;
                            var5 = var3 != var6;
 2358:
                            if(!var5) { _fun0032_ip = 2407; continue _fun0032 }
 2361:
                            var6 = _closure2_slot124;
                            var6 = var3 == var6;
                            var8 = undefined;
                            if(var6) { _fun0032_ip = 2384; continue _fun0032 }
 2374:
                            var6 = _closure2_slot124;
                            var8 = var6.invalidApplicationIds;
 2384:
                            if(!(var3 == var8)) { _fun0032_ip = 2392; continue _fun0032 }
 2388:
                            var8 = new Array(0);
 2392:
                            var7 = var8.includes;
                            var6 = var1.applicationId;
                            var5 = var7.bind(var8)(var6);
 2407:
                            if(!var5) { _fun0032_ip = 2429; continue _fun0032 }
 2410:
                            var7 = _closure3_slot17;
                            var6 = var7.add;
                            var5 = var1.id;
                            var5 = var6.bind(var7)(var5);
 2429:
                            var5 = _closure3_slot14;
                            if(!var5) { _fun0032_ip = 2485; continue _fun0032 }
 2436:
                            var6 = var1.referralTrialOfferId;
                            var3 = var3 != var6;
                            if(!var3) { _fun0032_ip = 2463; continue _fun0032 }
 2449:
                            var5 = _closure2_slot40;
                            var4 = var5.includes;
                            var3 = var4.bind(var5)(var6);
 2463:
                            if(!var3) { _fun0032_ip = 2485; continue _fun0032 }
 2466:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
 2485:
                            var3 = _closure3_slot15;
                            if(!var3) { _fun0032_ip = 2509; continue _fun0032 }
 2492:
                            var4 = var1.codedLinks;
                            var5 = var4.length;
                            var4 = 0;
                            var3 = var5 > var4;
 2509:
                            if(!var3) { _fun0032_ip = 2877; continue _fun0032 }
 2515:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0032_ip = 2877; continue _fun0032;
 2539:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0032_ip = 2877; continue _fun0032;
 2563:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0032_ip = 2877; continue _fun0032;
 2587:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0032_ip = 2877; continue _fun0032;
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
                            _fun0032_ip = 2877; continue _fun0032;
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
                            _fun0032_ip = 2877; continue _fun0032;
 2751:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0032_ip = 2877; continue _fun0032;
 2772:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0032_ip = 2877; continue _fun0032;
 2793:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0032_ip = 2877; continue _fun0032;
 2814:
                            var5 = _closure3_slot17;
                            var4 = var5.add;
                            var3 = var1.id;
                            var3 = var4.bind(var5)(var3);
                            _fun0032_ip = 2877; continue _fun0032;
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
                    var5 = _closure2_slot117;
                    var3 = {};
                    var3['forced'] = var14;
                    var3['updateMessageIds'] = var13;
                    var3['scrollToMessageId'] = var12;
                    var3['jumpTargetId'] = var11;
                    var3['jumpType'] = var10;
                    var3['focusTargetId'] = var9;
                    var3['ignoreEmbedDescriptionCache'] = var8;
                    var8 = _closure2_slot128;
                    var3['messagesNewlyLoaded'] = var8;
                    var3['shouldInitialScroll'] = var7;
                    var3['minimizeScrolling'] = var6;
                    var3 = var5.bind(var4)(var3);
                    var5 = _closure2_slot106;
                    var3 = false;
                    var3 = var5.bind(var4)(var3);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 81;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.recordTimings;
                    var2 = _closure2_slot7;
                    var1 = _closure2_slot6;
                    var1 = var3.bind(var4)(var2, var1);
 4130:
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
            var18[1] = var23;
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
                var4 = _closure2_slot115;
                var1['findMessageIndex'] = var4;
                var4 = _closure2_slot117;
                var1['updateRows'] = var4;
                var4 = _closure2_slot116;
                var1['scrollToMessageId'] = var4;
                var4 = function scrollToBottom() {
                    _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                        var7 = arguments[0];
                        var1 = undefined;
                        if(!(var7 === var1)) { _fun0033_ip = 11; continue _fun0033 }
 9:
                        var7 = true;
 11:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 81;
                        var2 = var4[var2];
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.scrollToBottom;
                        var11 = _closure2_slot98;
                        var10 = _closure2_slot57;
                        var9 = _closure2_slot123;
                        var12 = var6;
                        var8 = var7;
                        var2 = var12[var5](var11, var10, var9, var8, var7);
                        return var1;
                    }
                };
                var1['scrollToBottom'] = var4;
                var4 = function scrollToTop() {
                    _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
                        var5 = arguments[0];
                        var3 = undefined;
                        if(!(var5 === var3)) { _fun0034_ip = 11; continue _fun0034 }
 9:
                        var5 = true;
 11:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 81;
                        var1 = var4[var1];
                        var4 = var2.bind(var3)(var1);
                        var3 = var4.scrollToTop;
                        var2 = _closure2_slot98;
                        var1 = _closure2_slot57;
                        var1 = var3.bind(var4)(var2, var1, var5);
                        return var1;
                    }
                };
                var1['scrollToTop'] = var4;
                var4 = function scrollToRelativeOffset(arg1) {
                    _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
                        var6 = arguments[1];
                        var3 = undefined;
                        if(!(var6 === var3)) { _fun0035_ip = 11; continue _fun0035 }
 9:
                        var6 = true;
 11:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 81;
                        var1 = var4[var1];
                        var5 = var2.bind(var3)(var1);
                        var4 = var5.scrollToRelativeOffset;
                        var10 = _closure2_slot98;
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
                    var1 = 81;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.scrollToTopMessage;
                    var2 = _closure2_slot98;
                    var1 = _closure2_slot107;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1['scrollToTopMessage'] = var4;
                var4 = function jumpToPresent() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 81;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.jumpToPresent;
                    var4 = _closure2_slot6;
                    var3 = _closure2_slot1;
                    var2 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 81;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var6 = var7.scrollToBottom;
                        var11 = _closure2_slot98;
                        var10 = _closure2_slot57;
                        var9 = _closure2_slot123;
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
                    _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 81;
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
                        var5 = _closure2_slot104;
                        var1['hasJumpedToOriginalPost'] = var5;
                        var5 = _closure2_slot57;
                        var1['useReducedMotion'] = var5;
                        var6 = _closure2_slot45;
                        var5 = null;
                        var6 = var5 != var6;
                        if(!var6) { _fun0036_ip = 96; continue _fun0036 }
 92:
                        var5 = _closure2_slot45;
 96:
                        var1['oldestUnreadMessageId'] = var5;
                        var6 = _closure2_slot107;
                        var5 = var6.getPreviousRows;
                        var5 = var5.bind(var6)();
                        var1['chatManagerRows'] = var5;
                        var5 = _closure2_slot115;
                        var1['findMessageIndex'] = var5;
                        var4 = _closure2_slot98;
                        var1['chatRef'] = var4;
                        var4 = function loadMoreBefore() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 81;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.loadMoreBefore;
                            var3 = _closure2_slot7;
                            var2 = _closure2_slot6;
                            var1 = function(arg1) {
                                var3 = _closure2_slot100;
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
                    var1 = 81;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getChatRef;
                    var1 = _closure2_slot98;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['getChatRef'] = var3;
                var3 = _closure2_slot118;
                var1['maybeRescrollToMessageId'] = var3;
                var3 = _closure2_slot119;
                var1['clearRows'] = var3;
                var2 = _closure2_slot120;
                var1['getVisibleMessages'] = var2;
                return var1;
            };
            var13 = var33.bind(var5)(var15, var13, var18);
            var18 = var5.useCallback;
            var15 = _closure1_slot3;
            var13 = function* () {
                var1 = function* anon_0_() {
                    _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0037_ip = 140; continue _fun0037 }
 10:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 81;
                        var2 = var3[var2];
                        var3 = undefined;
                        var5 = var4.bind(var3)(var2);
                        var4 = var5.handleTapNavBar;
                        var2 = {};
                        var7 = _closure2_slot1;
                        var2['channel'] = var7;
                        var7 = _closure2_slot57;
                        var2['useReducedMotion'] = var7;
                        var7 = _closure2_slot99;
                        var7 = var7.isNearTop;
                        var2['isNearTop'] = var7;
                        var7 = _closure2_slot6;
                        var2['messages'] = var7;
                        var7 = _closure2_slot115;
                        var2['findMessageIndex'] = var7;
                        var7 = function scrollToTop() {
                            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
                                var5 = arguments[0];
                                var3 = undefined;
                                if(!(var5 === var3)) { _fun0038_ip = 11; continue _fun0038 }
 9:
                                var5 = true;
 11:
                                var2 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 81;
                                var1 = var4[var1];
                                var4 = var2.bind(var3)(var1);
                                var3 = var4.scrollToTop;
                                var2 = _closure2_slot98;
                                var1 = _closure2_slot57;
                                var1 = var3.bind(var4)(var2, var1, var5);
                                return var1;
                            }
                        };
                        var2['scrollToTop'] = var7;
                        var6 = _closure2_slot98;
                        var2['chatRef'] = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=128);
 126:
                        return var2;
 128:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0037_ip = 137; continue _fun0037 }
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
            var13[1] = var32;
            var31 = var31.isNearTop;
            var13[2] = var31;
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
                var1 = 81;
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
            var13[0] = var30;
            var13[1] = var23;
            var13[2] = var3;
            var3 = function(arg1) {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 98;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.getNativeSyntheticEventData;
                var2 = arg1;
                var2 = var5.bind(var6)(var2);
                var7 = var2.messageId;
                var2 = 81;
                var2 = var4[var2];
                var6 = var3.bind(var1)(var2);
                var5 = var6.handleLongPressSticker;
                var4 = _closure2_slot101;
                var3 = _closure2_slot117;
                var3 = var5.bind(var6)(var7, var4, var3);
                var2 = _closure2_slot102;
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
                var1 = 81;
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
            var3[0] = var29;
            var3[1] = var12;
            var3[2] = var10;
            var3[3] = var8;
            var3[4] = var7;
            var2 = function(arg1) {
                _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var7 = var1.firstVisibleMessageIndex;
                    var6 = var1.lastVisibleMessageIndex;
                    var5 = var1.firstVisibleMessagePercentVisible;
                    var4 = var1.lastVisibleMessagePercentVisible;
                    var2 = null;
                    var1 = var2 != var7;
                    if(!var1) { _fun0039_ip = 45; continue _fun0039 }
 41:
                    var1 = var2 != var6;
 45:
                    if(!var1) { _fun0039_ip = 52; continue _fun0039 }
 48:
                    var1 = var2 != var5;
 52:
                    if(!var1) { _fun0039_ip = 59; continue _fun0039 }
 55:
                    var1 = var2 != var4;
 59:
                    if(!var1) { _fun0039_ip = 121; continue _fun0039 }
 62:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 81;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleFirstLayout;
                    var12 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 81;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.handleVisibleMessagesChange;
                        var1 = {};
                        var7 = arg1;
                        var8 = var1;
                        var4 = copyDataProperties(var8, var7);
                        var6 = _closure2_slot107;
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
                var1 = 81;
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
            var2[0] = var29;
            var2[1] = var12;
            var2[2] = var10;
            var2[3] = var8;
            var2[4] = var7;
            var1 = function(arg1) {
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
                    var1 = 81;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleMessageVisibilityChanged;
                    var12 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 81;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.handleVisibleMessagesChange;
                        var1 = {};
                        var7 = arg1;
                        var8 = var1;
                        var4 = copyDataProperties(var8, var7);
                        var6 = _closure2_slot107;
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
            var5 = 99;
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
            var6 = 100;
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
    var4 = 101;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/chat/MessagesFunctional.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
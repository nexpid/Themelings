// app/components_native/chat/MessagesFunctional.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
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
            var9 = _closure1_slot64;
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
            var7 = _closure1_slot64;
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
    var _closure1_slot63 = var1;
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
    var4 = native4;
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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot26 = var4;
    var4 = 24;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useChannelPollInteractions;
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
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot39 = var4;
    var4 = 37;
    var9 = var6[var4];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot40 = var9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getUserCommunicationDisabledVersion;
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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot51 = var4;
    var4 = 48;
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
    var4 = 49;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot57 = var9;
    var4 = var4.PremiumTypes;
    var _closure1_slot58 = var4;
    var4 = 50;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot59 = var9;
    var9 = var4.Fragment;
    var _closure1_slot60 = var9;
    var4 = var4.jsxs;
    var _closure1_slot61 = var4;
    var4 = 51;
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
 0:
            r125 = arg1;
            var _closure2_slot0 = r125;
            var8 = r125.channel;
            var _closure2_slot1 = var8;
            var18 = r125.screenIndex;
            var _closure2_slot2 = var18;
            var27 = r125.scrollEnabled;
            r122 = r125.customHandlers;
            var _closure2_slot3 = r122;
            var14 = r125.chatInputRef;
            var _closure2_slot4 = var14;
            r127 = r125.enableSwipeActions;
            var _closure2_slot5 = r127;
            var15 = r125.isResourceChannel;
            var _closure2_slot6 = var15;
            var26 = r125.style;
            var17 = r125.visibleMessagesWindowHandler;
            var _closure2_slot7 = var17;
            var21 = r125.onPressKey;
            var11 = r125.children;
            var16 = r125.HACK_fixModalInteraction;
            var28 = r125.alwaysRespectKeyboard;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 52;
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
            var _closure2_slot8 = var9;
            var10 = var8.id;
            var _closure2_slot9 = var10;
            var7 = var8.getGuildId;
            var12 = var7.bind(var8)();
            var _closure2_slot10 = var12;
            var2 = var2[var3];
            var13 = var5.bind(var4)(var2);
            var7 = var13.useStateFromStores;
            var2 = _closure1_slot42;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot42;
                var2 = var3.getGuild;
                var1 = _closure2_slot10;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var35 = var7.bind(var13)(var5, var2);
            var _closure2_slot11 = var35;
            var5 = null;
            var2 = var5 == var35;
            var57 = undefined;
            if(var2) { _fun0004_ip = 268; continue _fun0004 }
 262:
            var57 = var35.systemChannelFlags;
 268:
            var _closure2_slot12 = var57;
            var13 = _closure1_slot0;
            var22 = _closure1_slot2;
            var2 = var22[var3];
            var23 = var13.bind(var4)(var2);
            var20 = var23.useStateFromStores;
            var2 = _closure1_slot37;
            var19 = new Array(1);
            var19[0] = var2;
            var7 = function() {
                var2 = _closure1_slot37;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var70 = var20.bind(var23)(var19, var7, var2);
            var _closure2_slot13 = var70;
            var2 = 53;
            var7 = var22[var2];
            var7 = var13.bind(var4)(var7);
            var19 = var7.InlineAttachmentMedia;
            var7 = var19.useSetting;
            var56 = var7.bind(var19)();
            var _closure2_slot14 = var56;
            var7 = var22[var2];
            var7 = var13.bind(var4)(var7);
            var19 = var7.InlineEmbedMedia;
            var7 = var19.useSetting;
            var55 = var7.bind(var19)();
            var _closure2_slot15 = var55;
            var7 = var22[var2];
            var7 = var13.bind(var4)(var7);
            var19 = var7.RenderEmbeds;
            var7 = var19.useSetting;
            var51 = var7.bind(var19)();
            var _closure2_slot16 = var51;
            var7 = var22[var2];
            var7 = var13.bind(var4)(var7);
            var19 = var7.RenderReactions;
            var7 = var19.useSetting;
            var50 = var7.bind(var19)();
            var _closure2_slot17 = var50;
            var7 = var22[var2];
            var7 = var13.bind(var4)(var7);
            var19 = var7.AnimateEmoji;
            var7 = var19.useSetting;
            var20 = var7.bind(var19)();
            var _closure2_slot18 = var20;
            var7 = var22[var2];
            var7 = var13.bind(var4)(var7);
            var19 = var7.AnimateStickers;
            var7 = var19.useSetting;
            var61 = var7.bind(var19)();
            var _closure2_slot19 = var61;
            var2 = var22[var2];
            var2 = var13.bind(var4)(var2);
            var7 = var2.GifAutoPlay;
            var2 = var7.useSetting;
            var59 = var2.bind(var7)();
            var _closure2_slot20 = var59;
            var2 = var22[var3];
            var24 = var13.bind(var4)(var2);
            var23 = var24.useStateFromStores;
            var2 = _closure1_slot36;
            var19 = new Array(1);
            var19[0] = var2;
            var7 = function() {
                var1 = _closure1_slot36;
                var1 = var1.theme;
                return var1;
            };
            var2 = new Array(0);
            var45 = var23.bind(var24)(var19, var7, var2);
            var _closure2_slot21 = var45;
            var25 = _closure1_slot1;
            var2 = 54;
            var2 = var22[var2];
            var23 = var25.bind(var4)(var2);
            var19 = var23.useExperiment;
            var7 = {};
            var2 = 'MessagesConnected';
            var7['location'] = var2;
            var2 = {};
            var24 = false;
            var2['autoTrackExposure'] = var24;
            var2 = var19.bind(var23)(var7, var2);
            var7 = var2.showShortcutsConditions;
            var2 = 'all';
            var52 = var2 === var7;
            var _closure2_slot22 = var52;
            var40 = 55;
            var2 = var22[var40];
            var7 = var13.bind(var4)(var2);
            var2 = var7.useMessageAuthorActivities;
            var100 = var2.bind(var7)(var9);
            var _closure2_slot23 = var100;
            var2 = var22[var40];
            var7 = var13.bind(var4)(var2);
            var2 = var7.useFetchMessageApplications;
            var2 = var2.bind(var7)(var9);
            var2 = 56;
            var2 = var22[var2];
            var2 = var25.bind(var4)(var2);
            var2 = var2.bind(var4)(var9, var8);
            var23 = _closure1_slot4;
            var31 = 2;
            var2 = var23.bind(var4)(var2, var31);
            var19 = 0;
            var99 = var2[var19];
            var _closure2_slot24 = var99;
            var7 = 1;
            var2 = var2[var7];
            var2 = var22[var3];
            var33 = var13.bind(var4)(var2);
            var32 = var33.useStateFromStores;
            var2 = _closure1_slot44;
            var30 = new Array(1);
            var30[0] = var2;
            var29 = function() {
                var2 = _closure1_slot44;
                var1 = var2.getInvites;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var75 = var32.bind(var33)(var30, var29, var2);
            var _closure2_slot25 = var75;
            var2 = var22[var3];
            var33 = var13.bind(var4)(var2);
            var32 = var33.useStateFromStoresObject;
            var2 = _closure1_slot17;
            var30 = new Array(1);
            var30[0] = var2;
            var29 = function() {
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
            var2 = var32.bind(var33)(var30, var29, var2);
            var98 = var2.appDirectoryEmbedApplications;
            var _closure2_slot26 = var98;
            var97 = var2.invalidAppDirectoryEmbedApplicationIds;
            var _closure2_slot27 = var97;
            var96 = var2.appDirectoryEmbedApplicationFetchStates;
            var _closure2_slot28 = var96;
            var2 = var22[var3];
            var33 = var13.bind(var4)(var2);
            var32 = var33.useStateFromStoresArray;
            var2 = _closure1_slot9;
            var30 = new Array(1);
            var30[0] = var2;
            var29 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getFetchingOrFailedFetchingIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            r105 = var32.bind(var33)(var30, var29);
            var _closure2_slot29 = r105;
            var29 = var22[var3];
            var33 = var13.bind(var4)(var29);
            var32 = var33.useStateFromStoresArray;
            var29 = _closure1_slot8;
            var30 = new Array(1);
            var30[0] = var29;
            var29 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getFetchingIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var95 = var32.bind(var33)(var30, var29);
            var _closure2_slot30 = var95;
            var29 = var22[var3];
            var36 = var13.bind(var4)(var29);
            var34 = var36.useStateFromStoresArray;
            var29 = _closure1_slot7;
            var33 = new Array(1);
            var33[0] = var29;
            var32 = new Array(1);
            var32[0] = var10;
            var30 = function() {
                var4 = _closure1_slot7;
                var3 = var4.getEmbeddedActivitiesForChannel;
                var2 = _closure2_slot9;
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
                var1 = 57;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            r109 = var34.bind(var36)(var33, var30, var32);
            var _closure2_slot31 = r109;
            var30 = var22[var3];
            var34 = var13.bind(var4)(var30);
            var33 = var34.useStateFromStoresArray;
            var32 = new Array(2);
            var32[0] = var29;
            var30 = _closure1_slot47;
            var32[1] = var30;
            var30 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var6 = function _loop(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
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
                    var3 = _closure1_slot63;
                    var5 = _closure1_slot7;
                    var4 = var5.getEmbeddedActivitiesForChannel;
                    var2 = _closure2_slot9;
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
            r107 = var33.bind(var34)(var32, var30);
            var _closure2_slot32 = r107;
            var30 = var22[var3];
            var34 = var13.bind(var4)(var30);
            var33 = var34.useStateFromStoresArray;
            var32 = new Array(1);
            var32[0] = var29;
            var30 = function() {
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
            r108 = var33.bind(var34)(var32, var30);
            var _closure2_slot33 = r108;
            var30 = var22[var3];
            var33 = var13.bind(var4)(var30);
            var32 = var33.useStateFromStoresArray;
            var30 = new Array(1);
            var30[0] = var29;
            var29 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
            r106 = var32.bind(var33)(var30, var29);
            var _closure2_slot34 = r106;
            var29 = var22[var3];
            var32 = var13.bind(var4)(var29);
            var30 = var32.useStateFromStoresArray;
            var29 = new Array(1);
            var29[0] = var2;
            var2 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getApplications;
                var2 = var1.bind(var2)();
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var2 = var30.bind(var32)(var29, var2);
            var2 = var23.bind(var4)(var2, var7);
            var76 = var2[var19];
            var _closure2_slot35 = var76;
            var2 = var22[var3];
            var32 = var13.bind(var4)(var2);
            var30 = var32.useStateFromStores;
            var2 = _closure1_slot25;
            var29 = new Array(1);
            var29[0] = var2;
            var2 = function() {
                var2 = _closure1_slot25;
                var1 = var2.getMediaPostEmbeds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var94 = var30.bind(var32)(var29, var2);
            var _closure2_slot36 = var94;
            var2 = var22[var3];
            var33 = var13.bind(var4)(var2);
            var32 = var33.useStateFromStores;
            var2 = _closure1_slot21;
            var30 = new Array(1);
            var30[0] = var2;
            var29 = function() {
                var2 = _closure1_slot21;
                var1 = var2.getGuildTemplates;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var92 = var32.bind(var33)(var30, var29, var2);
            var _closure2_slot37 = var92;
            var2 = var22[var3];
            var33 = var13.bind(var4)(var2);
            var32 = var33.useStateFromStores;
            var2 = _closure1_slot10;
            var30 = new Array(1);
            var30[0] = var2;
            var29 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getBuildOverrides;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var91 = var32.bind(var33)(var30, var29, var2);
            var _closure2_slot38 = var91;
            var2 = 58;
            var2 = var22[var2];
            var30 = var13.bind(var4)(var2);
            var29 = var30.useQuests;
            var2 = {};
            var32 = 'cache-or-network';
            var2['fetchPolicy'] = var32;
            var2 = var29.bind(var30)(var2);
            var90 = var2.quests;
            var _closure2_slot39 = var90;
            var89 = var2.isFetchingCurrentQuests;
            var _closure2_slot40 = var89;
            var29 = var9.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot53;
                var1 = var1.PREMIUM_REFERRAL;
                var1 = var2 === var1;
                return var1;
            };
            var30 = var29.bind(var9)(var2);
            var29 = var30.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.referralTrialOfferId;
                return var1;
            };
            var30 = var29.bind(var30)(var2);
            var29 = var30.filter;
            var2 = 57;
            var2 = var22[var2];
            var2 = var13.bind(var4)(var2);
            var2 = var2.isNotNullish;
            var2 = var29.bind(var30)(var2);
            var _closure2_slot41 = var2;
            var2 = var22[var3];
            var32 = var13.bind(var4)(var2);
            var30 = var32.useStateFromStoresArray;
            var2 = _closure1_slot28;
            var29 = new Array(1);
            var29[0] = var2;
            var2 = function() {
                var3 = _closure2_slot41;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var3 = _closure1_slot28;
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
                var1 = 57;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            r104 = var30.bind(var32)(var29, var2);
            var _closure2_slot42 = r104;
            var2 = 59;
            var2 = var22[var2];
            var30 = var13.bind(var4)(var2);
            var29 = var30.useTrialOffer;
            var2 = _closure1_slot57;
            var85 = var29.bind(var30)(var2);
            var _closure2_slot43 = var85;
            var2 = var22[var3];
            var32 = var13.bind(var4)(var2);
            var30 = var32.useStateFromStores;
            var2 = _closure1_slot50;
            var29 = new Array(1);
            var29[0] = var2;
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
            var84 = var30.bind(var32)(var29, var2);
            var _closure2_slot44 = var84;
            var2 = var22[var3];
            var33 = var13.bind(var4)(var2);
            var32 = var33.useStateFromStores;
            var2 = _closure1_slot38;
            var30 = new Array(1);
            var30[0] = var2;
            var29 = new Array(1);
            var29[0] = var10;
            var2 = function() {
                var3 = _closure1_slot38;
                var2 = var3.getEditingMessageId;
                var1 = _closure2_slot9;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var80 = var32.bind(var33)(var30, var2, var29);
            var _closure2_slot45 = var80;
            var2 = var22[var3];
            var33 = var13.bind(var4)(var2);
            var32 = var33.useStateFromStores;
            var2 = _closure1_slot30;
            var30 = new Array(1);
            var30[0] = var2;
            var29 = new Array(1);
            var29[0] = var10;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure1_slot30;
                    var2 = var3.getPendingReply;
                    var1 = _closure2_slot9;
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
            var67 = var32.bind(var33)(var30, var2, var29);
            var _closure2_slot46 = var67;
            var2 = var22[var3];
            var33 = var13.bind(var4)(var2);
            var32 = var33.useStateFromStores;
            var2 = _closure1_slot48;
            var30 = new Array(1);
            var30[0] = var2;
            var29 = new Array(1);
            var29[0] = var10;
            var2 = function() {
                var3 = _closure1_slot48;
                var2 = var3.getOldestUnreadMessageId;
                var1 = _closure2_slot9;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var37 = var32.bind(var33)(var30, var2, var29);
            var _closure2_slot47 = var37;
            var2 = var22[var3];
            var33 = var13.bind(var4)(var2);
            var32 = var33.useStateFromStores;
            var2 = _closure1_slot43;
            var30 = new Array(1);
            var30[0] = var2;
            var29 = new Array(1);
            var29[0] = var12;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure2_slot10;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0010_ip = 38; continue _fun0010 }
 16:
                    var4 = _closure1_slot43;
                    var3 = var4.canChatInGuild;
                    var2 = _closure2_slot10;
                    var1 = var3.bind(var4)(var2);
 38:
                    return var1;
                }
            };
            var65 = var32.bind(var33)(var30, var2, var29);
            var _closure2_slot48 = var65;
            var2 = var22[var3];
            var33 = var13.bind(var4)(var2);
            var32 = var33.useStateFromStores;
            var2 = _closure1_slot46;
            var30 = new Array(1);
            var30[0] = var2;
            var29 = new Array(1);
            var29[0] = var8;
            var2 = function() {
                var4 = _closure1_slot46;
                var3 = var4.can;
                var1 = _closure1_slot55;
                var2 = var1.SEND_MESSAGES;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var79 = var32.bind(var33)(var30, var2, var29);
            var _closure2_slot49 = var79;
            var2 = 61;
            var2 = var22[var2];
            var2 = var25.bind(var4)(var2);
            var69 = var2.bind(var4)(var10);
            var _closure2_slot50 = var69;
            var2 = var22[var3];
            var32 = var13.bind(var4)(var2);
            var30 = var32.useStateFromStores;
            var2 = _closure1_slot51;
            var29 = new Array(1);
            var29[0] = var2;
            var25 = new Array(1);
            var25[0] = var70;
            var2 = function() {
                var4 = _closure1_slot51;
                var3 = var4.getUserVoiceChannelId;
                var2 = _closure1_slot56;
                var1 = _closure2_slot13;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var77 = var30.bind(var32)(var29, var2, var25);
            var _closure2_slot51 = var77;
            var2 = var22[var3];
            var33 = var13.bind(var4)(var2);
            var32 = var33.useStateFromStores;
            var2 = _closure1_slot31;
            var30 = new Array(1);
            var30[0] = var2;
            var29 = new Array(1);
            var29[0] = var8;
            var25 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = _closure1_slot52;
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
 124:
                    return var1;
                }
            };
            r102 = var32.bind(var33)(var30, var25, var29);
            var _closure2_slot52 = r102;
            var25 = var22[var3];
            var33 = var13.bind(var4)(var25);
            var32 = var33.useStateFromStoresObject;
            var25 = _closure1_slot39;
            var30 = new Array(1);
            var30[0] = var25;
            var29 = function() {
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
            var25 = new Array(0);
            var25 = var32.bind(var33)(var30, var29, var25);
            var88 = var25.resolvingGiftCodes;
            var _closure2_slot53 = var88;
            var87 = var25.resolvedGiftCodes;
            var _closure2_slot54 = var87;
            var86 = var25.acceptingGiftCodes;
            var _closure2_slot55 = var86;
            var25 = var22[var3];
            var33 = var13.bind(var4)(var25);
            var32 = var33.useStateFromStores;
            var25 = _closure1_slot12;
            var30 = new Array(1);
            var30[0] = var25;
            var29 = new Array(1);
            var29[0] = var10;
            var25 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getParticipants;
                var1 = _closure2_slot9;
                var1 = var2.bind(var3)(var1);
                var1 = var1.length;
                return var1;
            };
            var68 = var32.bind(var33)(var30, var25, var29);
            var _closure2_slot56 = var68;
            var25 = var22[var3];
            var33 = var13.bind(var4)(var25);
            var32 = var33.useStateFromStores;
            var25 = _closure1_slot49;
            var30 = new Array(1);
            var30[0] = var25;
            var29 = new Array(1);
            var29[0] = var10;
            var25 = function() {
                var3 = _closure1_slot49;
                var2 = var3.getFiles;
                var1 = _closure2_slot9;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var64 = var32.bind(var33)(var30, var25, var29);
            var _closure2_slot57 = var64;
            var25 = var22[var3];
            var32 = var13.bind(var4)(var25);
            var30 = var32.useStateFromStores;
            var29 = new Array(1);
            var29[0] = var2;
            var25 = new Array(1);
            var25[0] = var10;
            var2 = function() {
                var3 = _closure1_slot31;
                var2 = var3.getReplyIdsForChannel;
                var1 = _closure2_slot9;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            r118 = var30.bind(var32)(var29, var2, var25);
            var _closure2_slot58 = r118;
            var2 = var22[var3];
            var32 = var13.bind(var4)(var2);
            var30 = var32.useStateFromStores;
            var2 = _closure1_slot6;
            var29 = new Array(1);
            var29[0] = var2;
            var25 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var33 = var30.bind(var32)(var29, var25);
            var _closure2_slot59 = var33;
            var25 = var22[var3];
            var30 = var13.bind(var4)(var25);
            var29 = var30.useStateFromStores;
            var25 = new Array(1);
            var25[0] = var2;
            var2 = function() {
                var1 = _closure1_slot6;
                var1 = var1.roleStyle;
                return var1;
            };
            var25 = var29.bind(var30)(var25, var2);
            var _closure2_slot60 = var25;
            var2 = var22[var3];
            var34 = var13.bind(var4)(var2);
            var32 = var34.useStateFromStores;
            var2 = _closure1_slot34;
            var30 = new Array(1);
            var30[0] = var2;
            var29 = new Array(1);
            var29[0] = var10;
            var2 = function() {
                var3 = _closure1_slot34;
                var2 = var3.getChannelThreadsVersion;
                var1 = _closure2_slot9;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            r120 = var32.bind(var34)(var30, var2, var29);
            var _closure2_slot61 = r120;
            var2 = var22[var3];
            var32 = var13.bind(var4)(var2);
            var30 = var32.useStateFromStoresObject;
            var2 = _closure1_slot24;
            var29 = new Array(1);
            var29[0] = var2;
            var2 = function() {
                var2 = _closure1_slot24;
                var1 = var2.getMessageInteractionStates;
                var1 = var1.bind(var2)();
                return var1;
            };
            r114 = var30.bind(var32)(var29, var2);
            var _closure2_slot62 = r114;
            var2 = var22[var3];
            var36 = var13.bind(var4)(var2);
            var34 = var36.useStateFromStores;
            var2 = _closure1_slot23;
            var32 = new Array(1);
            var32[0] = var2;
            var2 = 62;
            var2 = var22[var2];
            var2 = var13.bind(var4)(var2);
            r129 = var2.isVersionEqual;
            r131 = function() {
                var3 = _closure1_slot23;
                var1 = var3.getInteractionComponentStates;
                var2 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var2;
                var2 = var3.getInteractionComponentStateVersion;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            r130 = new Array(0);
            r133 = var36;
            r132 = var32;
            var2 = r133[var34](r132, r131, r130, r129, r128);
            var2 = var23.bind(var4)(var2, var31);
            r113 = var2[var19];
            var _closure2_slot63 = r113;
            r112 = var2[var7];
            var _closure2_slot64 = r112;
            var2 = var22[var3];
            var30 = var13.bind(var4)(var2);
            var29 = var30.useStateFromStores;
            var2 = _closure1_slot15;
            var23 = new Array(1);
            var23[0] = var2;
            var2 = function() {
                var1 = _closure1_slot15;
                var1 = var1.hasLoadedExperiments;
                return var1;
            };
            r117 = var29.bind(var30)(var23, var2);
            var _closure2_slot65 = r117;
            var2 = 63;
            var2 = var22[var2];
            var29 = var13.bind(var4)(var2);
            var23 = var29.useIsSpamMessageRequest;
            var2 = var8.id;
            var74 = var23.bind(var29)(var2);
            var _closure2_slot66 = var74;
            var2 = 64;
            var2 = var22[var2];
            var22 = var13.bind(var4)(var2);
            var13 = var22.useIsMessageRequest;
            var2 = var8.id;
            var73 = var13.bind(var22)(var2);
            var _closure2_slot67 = var73;
            r121 = var5 != var9;
            if(!r121) { _fun0004_ip = 2574; continue _fun0004 }
 2556:
            var2 = var9.ready;
            if(var2) { _fun0004_ip = 2571; continue _fun0004 }
 2565:
            var2 = var9.cached;
 2571:
            r121 = var2;
 2574:
            var _closure2_slot68 = r121;
            var41 = var5 != var9;
            if(!var41) { _fun0004_ip = 2591; continue _fun0004 }
 2585:
            var41 = var9.cached;
 2591:
            var _closure2_slot69 = var41;
            r124 = var5 != var9;
            if(!r124) { _fun0004_ip = 2608; continue _fun0004 }
 2602:
            r124 = var9.ready;
 2608:
            if(!r124) { _fun0004_ip = 2620; continue _fun0004 }
 2611:
            var2 = var9.loadingMore;
            r124 = !var2;
 2620:
            var _closure2_slot70 = r124;
            var13 = _closure1_slot0;
            var22 = _closure1_slot2;
            var2 = var22[var3];
            var30 = var13.bind(var4)(var2);
            var29 = var30.useStateFromStores;
            var2 = _closure1_slot20;
            var23 = new Array(1);
            var23[0] = var2;
            var2 = function() {
                var2 = _closure1_slot20;
                var1 = var2.getRsvpVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            r119 = var29.bind(var30)(var23, var2);
            var _closure2_slot71 = r119;
            var2 = var22[var3];
            var30 = var13.bind(var4)(var2);
            var29 = var30.useStateFromStores;
            var2 = _closure1_slot19;
            var23 = new Array(1);
            var23[0] = var2;
            var2 = function() {
                var2 = _closure1_slot19;
                var1 = var2.getMessagesVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            r115 = var29.bind(var30)(var23, var2);
            var _closure2_slot72 = r115;
            var2 = var22[var3];
            var30 = var13.bind(var4)(var2);
            var29 = var30.useStateFromStores;
            var2 = _closure1_slot40;
            var23 = new Array(1);
            var23[0] = var2;
            var2 = function() {
                var2 = _closure1_slot40;
                var1 = var2.getCommunicationDisabledVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            r116 = var29.bind(var30)(var23, var2);
            var _closure2_slot73 = r116;
            var2 = var22[var3];
            var30 = var13.bind(var4)(var2);
            var29 = var30.useStateFromStores;
            var2 = _closure1_slot46;
            var23 = new Array(1);
            var23[0] = var2;
            var2 = function() {
                var4 = _closure1_slot46;
                var3 = var4.can;
                var1 = _closure1_slot55;
                var2 = var1.MODERATE_MEMBERS;
                var1 = _closure2_slot11;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var71 = var29.bind(var30)(var23, var2);
            var _closure2_slot74 = var71;
            var2 = 65;
            var2 = var22[var2];
            var22 = var13.bind(var4)(var2);
            var13 = var22.useCurrentUserCommunicationDisabled;
            var23 = var5 == var35;
            var2 = undefined;
            if(var23) { _fun0004_ip = 2836; continue _fun0004 }
 2831:
            var2 = var35.id;
 2836:
            var13 = var13.bind(var22)(var2);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var13, var31);
            var72 = var2[var7];
            var _closure2_slot75 = var72;
            var29 = _closure1_slot0;
            var32 = _closure1_slot2;
            var2 = var32[var3];
            var23 = var29.bind(var4)(var2);
            var22 = var23.useStateFromStores;
            var2 = _closure1_slot35;
            var13 = new Array(1);
            var13[0] = var2;
            var2 = function() {
                var1 = _closure1_slot35;
                var1 = var1.locale;
                return var1;
            };
            var82 = var22.bind(var23)(var13, var2);
            var _closure2_slot76 = var82;
            var23 = _closure1_slot1;
            var2 = 66;
            var2 = var32[var2];
            var30 = var23.bind(var4)(var2);
            var22 = var30.useExperiment;
            var13 = {};
            var2 = '41de6d_2';
            var13['location'] = var2;
            var2 = {};
            var2['autoTrackExposure'] = var24;
            var2 = var22.bind(var30)(var13, var2);
            var22 = var2.paymentsBlocked;
            var _closure2_slot77 = var22;
            var2 = var32[var3];
            var34 = var29.bind(var4)(var2);
            var30 = var34.useStateFromStores;
            var2 = _closure1_slot33;
            var13 = new Array(1);
            var13[0] = var2;
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
                    var4 = _closure1_slot33;
                    var3 = var4.hasJoined;
                    var2 = _closure2_slot9;
                    var1 = var3.bind(var4)(var2);
 48:
                    return var1;
                }
            };
            r101 = var30.bind(var34)(var13, var2);
            var _closure2_slot78 = r101;
            var2 = var32[var3];
            var34 = var29.bind(var4)(var2);
            var30 = var34.useStateFromStores;
            var2 = _closure1_slot26;
            var13 = new Array(1);
            var13[0] = var2;
            var2 = function() {
                var3 = _closure1_slot26;
                var2 = var3.shouldDisplayPrompt;
                var1 = _closure2_slot9;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            r100 = var30.bind(var34)(var13, var2);
            var _closure2_slot79 = r100;
            var2 = var32[var3];
            var34 = var29.bind(var4)(var2);
            var30 = var34.useStateFromStores;
            var2 = _closure1_slot29;
            var13 = new Array(1);
            var13[0] = var2;
            var2 = function() {
                var2 = _closure1_slot29;
                var1 = var2.isEligible;
                var1 = var1.bind(var2)();
                return var1;
            };
            var83 = var30.bind(var34)(var13, var2);
            var _closure2_slot80 = var83;
            var2 = var32[var3];
            var34 = var29.bind(var4)(var2);
            var30 = var34.useStateFromStores;
            var2 = _closure1_slot11;
            var13 = new Array(1);
            var13[0] = var2;
            var2 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getLazyCacheStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            r103 = var30.bind(var34)(var13, var2);
            var _closure2_slot81 = r103;
            var2 = 67;
            var2 = var32[var2];
            var13 = var29.bind(var4)(var2);
            var2 = var13.useMessageJumpAndroidKeyboardHeight;
            var78 = var2.bind(var13)();
            var _closure2_slot82 = var78;
            var2 = 68;
            var2 = var32[var2];
            var2 = var23.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var _closure2_slot83 = var2;
            var13 = 69;
            var13 = var32[var13];
            var30 = var29.bind(var4)(var13);
            var13 = var30.useChannelSummariesExperiment;
            var13 = var13.bind(var30)(var8);
            var _closure2_slot84 = var13;
            var30 = var32[var3];
            var38 = var29.bind(var4)(var30);
            var36 = var38.useStateFromStores;
            var30 = _closure1_slot32;
            var34 = new Array(1);
            var34[0] = var30;
            var30 = new Array(2);
            var30[0] = var13;
            var13 = var8.id;
            var30[1] = var13;
            var13 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var3 = _closure2_slot84;
                    var1 = null;
                    if(!var3) { _fun0013_ip = 39; continue _fun0013 }
 12:
                    var4 = _closure1_slot32;
                    var3 = var4.selectedSummary;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 39:
                    return var1;
                }
            };
            var49 = var36.bind(var38)(var34, var13, var30);
            var _closure2_slot85 = var49;
            var13 = var32[var3];
            var38 = var29.bind(var4)(var13);
            var36 = var38.useStateFromStores;
            var13 = _closure1_slot22;
            var34 = new Array(1);
            var34[0] = var13;
            var30 = function() {
                var3 = _closure1_slot22;
                var2 = var3.getSelectedSummary;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var62 = var36.bind(var38)(var34, var30);
            var _closure2_slot86 = var62;
            var36 = _closure1_slot5;
            var38 = var36.useEffect;
            var30 = var8.id;
            var34 = new Array(5);
            var34[0] = var30;
            var30 = var9.hasMoreAfter;
            var34[1] = var30;
            var30 = var9.hasMoreBefore;
            var34[2] = var30;
            var30 = var9.length;
            var34[3] = var30;
            var30 = var9.ready;
            var34[4] = var30;
            var30 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = _closure2_slot8;
                    var2 = var2.ready;
                    var2 = !var2;
                    if(var2) { _fun0014_ip = 34; continue _fun0014 }
 19:
                    var3 = _closure2_slot8;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var3 !== var4;
 34:
                    if(var2) { _fun0014_ip = 47; continue _fun0014 }
 37:
                    var3 = _closure2_slot8;
                    var2 = var3.hasMoreBefore;
 47:
                    if(var2) { _fun0014_ip = 60; continue _fun0014 }
 50:
                    var3 = _closure2_slot8;
                    var2 = var3.hasMoreAfter;
 60:
                    if(var2) { _fun0014_ip = 121; continue _fun0014 }
 63:
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
 121:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = var38.bind(var36)(var30, var34);
            var30 = var32[var3];
            var38 = var29.bind(var4)(var30);
            var34 = var38.useStateFromStores;
            var30 = new Array(1);
            var30[0] = var13;
            var13 = function() {
                var3 = _closure1_slot22;
                var2 = var3.isGravitySelectedChannel;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var39 = var34.bind(var38)(var30, var13);
            var _closure2_slot87 = var39;
            var13 = var32[var40];
            var34 = var29.bind(var4)(var13);
            var30 = var34.useShouldTrackAnnouncementMessageViews;
            var13 = {};
            var13['guild'] = var35;
            var13['channel'] = var8;
            var13['messages'] = var9;
            var13['isMessagesReady'] = r121;
            var30 = var30.bind(var34)(var13);
            var _closure2_slot88 = var30;
            var13 = 71;
            var13 = var32[var13];
            var34 = var29.bind(var4)(var13);
            var13 = var34.useShouldDisplaySpoilerObscurity;
            var46 = var13.bind(var34)(var8);
            var _closure2_slot89 = var46;
            var13 = 72;
            var13 = var32[var13];
            var34 = var29.bind(var4)(var13);
            var13 = var34.useIsAgeVerified;
            var54 = var13.bind(var34)();
            var _closure2_slot90 = var54;
            var35 = var36.useEffect;
            var34 = new Array(2);
            var34[0] = var10;
            var34[1] = var12;
            var13 = function() {
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
            var13 = var35.bind(var36)(var13, var34);
            var13 = 74;
            var13 = var32[var13];
            var35 = var29.bind(var4)(var13);
            var34 = var35.useShouldDisableInteractiveComponents;
            var13 = var8.id;
            r111 = var34.bind(var35)(var13);
            var _closure2_slot91 = r111;
            var34 = _closure1_slot27;
            var13 = var8.id;
            r110 = var34.bind(var4)(var13);
            var _closure2_slot92 = r110;
            var13 = var32[var3];
            var38 = var29.bind(var4)(var13);
            var36 = var38.useStateFromStores;
            var13 = _closure1_slot16;
            var35 = new Array(1);
            var35[0] = var13;
            var34 = new Array(1);
            var34[0] = var10;
            var13 = function() {
                var3 = _closure1_slot16;
                var2 = var3.getChannelFpInfo;
                var1 = _closure2_slot9;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var93 = var36.bind(var38)(var35, var13, var34);
            var _closure2_slot93 = var93;
            var13 = 75;
            var13 = var32[var13];
            var13 = var23.bind(var4)(var13);
            var60 = var13.bind(var4)();
            var _closure2_slot94 = var60;
            var13 = 76;
            var13 = var32[var13];
            var13 = var23.bind(var4)(var13);
            var13 = var13.bind(var4)(var9);
            var44 = var13.unloadedContentEntryMessageIds;
            var _closure2_slot95 = var44;
            var36 = var13.unloadableContentEntryMessageIds;
            var _closure2_slot96 = var36;
            var13 = var32[var3];
            var35 = var29.bind(var4)(var13);
            var34 = var35.useStateFromStores;
            var13 = _closure1_slot50;
            var23 = new Array(1);
            var23[0] = var13;
            var13 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var2 = _closure1_slot50;
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
            var53 = var34.bind(var35)(var23, var13);
            var _closure2_slot97 = var53;
            var13 = 77;
            var13 = var32[var13];
            var23 = var29.bind(var4)(var13);
            var13 = var23.useShouldFilterKeywords;
            var48 = var13.bind(var23)();
            var _closure2_slot98 = var48;
            var13 = var32[var3];
            var35 = var29.bind(var4)(var13);
            var34 = var35.useStateFromStores;
            var13 = _closure1_slot18;
            var23 = new Array(1);
            var23[0] = var13;
            var13 = function() {
                var2 = _closure1_slot18;
                var1 = var2.getVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var81 = var34.bind(var35)(var23, var13);
            var _closure2_slot99 = var81;
            var13 = 78;
            var13 = var32[var13];
            var23 = var29.bind(var4)(var13);
            var13 = var23.useGuildProfileInviteEmbedHoldoutEnabled;
            var23 = var13.bind(var23)(var24);
            var13 = 79;
            var13 = var32[var13];
            var32 = var29.bind(var4)(var13);
            var29 = var32.useColorStore;
            var13 = function(arg1) {
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = arg1;
                var1 = var1.palette;
                var1 = var2.bind(var3)(var1);
                var1 = var1.length;
                return var1;
            };
            var13 = var29.bind(var32)(var13);
            var58 = 0;
            if(var23) { _fun0004_ip = 3888; continue _fun0004 }
 3885:
            var58 = var13;
 3888:
            var _closure2_slot100 = var58;
            var42 = _closure1_slot0;
            r123 = _closure1_slot2;
            var3 = r123[var3];
            var29 = var42.bind(var4)(var3);
            var23 = var29.useStateFromStores;
            var3 = _closure1_slot14;
            var13 = new Array(1);
            var13[0] = var3;
            var3 = function() {
                var3 = _closure1_slot14;
                var2 = var3.getGuildEmojiOrUndefined;
                var1 = _closure2_slot10;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var43 = var23.bind(var29)(var13, var3);
            var _closure2_slot101 = var43;
            var66 = _closure1_slot5;
            var3 = var66.useRef;
            var29 = var3.bind(var66)(var5);
            var _closure2_slot102 = var29;
            var3 = r123[var40];
            var13 = var42.bind(var4)(var3);
            var3 = var13.useScrollState;
            var3 = var3.bind(var13)();
            var23 = _closure1_slot4;
            var3 = var23.bind(var4)(var3, var31);
            var32 = var3[var19];
            var _closure2_slot103 = var32;
            var13 = var3[var7];
            var _closure2_slot104 = var13;
            var3 = var66.useState;
            var3 = var3.bind(var66)(var5);
            var3 = var23.bind(var4)(var3, var31);
            var31 = var3[var19];
            var _closure2_slot105 = var31;
            var3 = var3[var7];
            var _closure2_slot106 = var3;
            var7 = r123[var40];
            var19 = var42.bind(var4)(var7);
            var7 = var19.useMessagesState;
            var7 = var7.bind(var19)();
            var47 = var7.shouldForceRender;
            var _closure2_slot107 = var47;
            var38 = var7.hasJumpedToOriginalPost;
            var _closure2_slot108 = var38;
            var34 = var7.setHasJumpedToOriginalPost;
            var _closure2_slot109 = var34;
            var63 = var7.setShouldForceRender;
            var _closure2_slot110 = var63;
            var23 = var66.useMemo;
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
            var7 = new Array(0);
            var7 = var23.bind(var66)(var19, var7);
            var _closure2_slot111 = var7;
            var35 = var66.useMemo;
            var23 = function() {
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
            var19 = new Array(0);
            var19 = var35.bind(var66)(var23, var19);
            var _closure2_slot112 = var19;
            var23 = var66.useRef;
            var23 = var23.bind(var66)(var24);
            var _closure2_slot113 = var23;
            var23 = var66.useRef;
            var23 = var23.bind(var66)(var24);
            var _closure2_slot114 = var23;
            var35 = var66.useCallback;
            var24 = function(arg1) {
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
                var5 = _closure2_slot114;
                var5 = var5.current;
                var11 = var11.bind(var12)(var7, var5);
                var5 = _closure1_slot1;
                var4 = 83;
                var4 = var6[var4];
                var7 = var5.bind(var1)(var4);
                var6 = var7.updateRows;
                var4 = _closure2_slot102;
                var5 = var4.current;
                var4 = {};
                var4['isLoadingAtTop'] = var11;
                var4['scrollData'] = var10;
                var4['HACK_iOSForceAnimations'] = var9;
                var4 = var6.bind(var7)(var5, var8, var4);
                var2 = _closure2_slot114;
                var2['current'] = var3;
                return var1;
            };
            var23 = new Array(0);
            var23 = var35.bind(var66)(var24, var23);
            var _closure2_slot115 = var23;
            var24 = r123[var40];
            var35 = var42.bind(var4)(var24);
            var24 = var35.useChatUpdatesQueue;
            r126 = var24.bind(var35)(var29, var23);
            var _closure2_slot116 = r126;
            var35 = var66.useCallback;
            var24 = new Array(4);
            var24[0] = r126;
            var24[1] = var23;
            var23 = var32.decelerating;
            var24[2] = var23;
            var23 = var32.dragging;
            var24[3] = var23;
            var23 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure2_slot116;
                    var2 = var2.isBlocking;
                    if(var2) { _fun0016_ip = 83; continue _fun0016 }
 19:
                    var2 = var3.isLoadingAtTop;
                    if(!var2) { _fun0016_ip = 54; continue _fun0016 }
 28:
                    var2 = _closure2_slot103;
                    var2 = var2.decelerating;
                    if(var2) { _fun0016_ip = 67; continue _fun0016 }
 41:
                    var2 = _closure2_slot103;
                    var2 = var2.dragging;
                    if(var2) { _fun0016_ip = 67; continue _fun0016 }
 54:
                    var4 = _closure2_slot115;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0016_ip = 97; continue _fun0016;
 67:
                    var4 = _closure2_slot116;
                    var2 = var4.add;
                    var2 = var2.bind(var4)(var3);
                    _fun0016_ip = 97; continue _fun0016;
 83:
                    var2 = _closure2_slot116;
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var3);
 97:
                    var1 = undefined;
                    return var1;
                }
            };
            var35 = var35.bind(var66)(var23, var24);
            var _closure2_slot117 = var35;
            var24 = var66.useCallback;
            var23 = new Array(29);
            var23[0] = var8;
            var23[1] = var9;
            var23[2] = r121;
            var23[3] = var56;
            var23[4] = var55;
            var23[5] = var51;
            var23[6] = var50;
            var23[7] = var20;
            var23[8] = var31;
            var23[9] = var60;
            var23[10] = var59;
            var23[11] = var71;
            var23[12] = r127;
            var23[13] = var46;
            var23[14] = r111;
            var23[15] = var48;
            var23[16] = var64;
            var23[17] = var37;
            var23[18] = var67;
            var23[19] = var70;
            var23[20] = var65;
            var23[21] = var62;
            var23[22] = var49;
            var23[23] = var25;
            var23[24] = var15;
            var23[25] = var39;
            var23[26] = var36;
            var23[27] = var7;
            var23[28] = var19;
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
                    var5 = _closure2_slot8;
                    var5 = var4 != var5;
                    var1 = null;
                    if(!var5) { _fun0017_ip = 124; continue _fun0017 }
 66:
                    var3 = _closure2_slot68;
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
                            var4 = _closure2_slot111;
                            var3 = var4.setup;
                            var2 = _closure2_slot8;
                            var2 = var3.bind(var4)(var2);
                            var4 = _closure2_slot112;
                            var3 = var4.setOptions;
                            var2 = {};
                            var5 = _closure2_slot14;
                            var2['inlineAttachmentMedia'] = var5;
                            var5 = _closure2_slot15;
                            var2['inlineEmbedMedia'] = var5;
                            var5 = _closure2_slot16;
                            var2['renderEmbeds'] = var5;
                            var5 = _closure2_slot17;
                            var2['renderReactions'] = var5;
                            var5 = _closure2_slot17;
                            var2['renderShortcuts'] = var5;
                            var5 = _closure2_slot18;
                            var2['animateEmoji'] = var5;
                            var5 = _closure2_slot105;
                            var2['animatingStickerMessageId'] = var5;
                            var5 = _closure2_slot94;
                            var2['constrainedWidth'] = var5;
                            var5 = _closure2_slot20;
                            var2['gifAutoPlay'] = var5;
                            var5 = _closure2_slot74;
                            var2['renderCommunicationDisabled'] = var5;
                            var5 = _closure3_slot2;
                            var2['ignoreEmbedDescriptionCache'] = var5;
                            var5 = _closure2_slot5;
                            var2['enableSwipeActions'] = var5;
                            var5 = _closure2_slot89;
                            var2['shouldObscureSpoiler'] = var5;
                            var5 = _closure2_slot91;
                            var2['shouldDisableInteractiveComponents'] = var5;
                            var5 = _closure2_slot98;
                            var2['shouldFilterKeywords'] = var5;
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
                            var8 = _closure2_slot8;
                            var2['messages'] = var8;
                            var9 = _closure2_slot57;
                            var8 = null;
                            if(!(var8 == var9)) { _fun0018_ip = 241; continue _fun0018 }
 235:
                            var9 = new Array(0);
                            _fun0018_ip = 245; continue _fun0018;
 241:
                            var9 = _closure2_slot57;
 245:
                            var2['uploads'] = var9;
                            var9 = _closure2_slot47;
                            var2['oldestUnreadMessageId'] = var9;
                            var9 = _closure2_slot46;
                            var2['replyingMessageId'] = var9;
                            var9 = _closure2_slot13;
                            var2['currentUserId'] = var9;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var7 = 82;
                            var7 = var10[var7];
                            var11 = var9.bind(var5)(var7);
                            var10 = var11.canAddNewReactions;
                            var9 = _closure2_slot1;
                            var7 = _closure2_slot48;
                            var7 = var10.bind(var11)(var9, var7);
                            var2['canAddNewReactions'] = var7;
                            var7 = _closure2_slot86;
                            if(!(var8 == var7)) { _fun0018_ip = 336; continue _fun0018 }
 330:
                            var7 = _closure2_slot85;
                            _fun0018_ip = 340; continue _fun0018;
 336:
                            var7 = _closure2_slot86;
 340:
                            var2['selectedSummary'] = var7;
                            var7 = _closure2_slot111;
                            var2['chatManager'] = var7;
                            var7 = _closure2_slot60;
                            var2['roleStyle'] = var7;
                            var7 = _closure3_slot0;
                            var2['forced'] = var7;
                            var6 = _closure3_slot1;
                            var2['updateMessageIds'] = var6;
                            var6 = _closure2_slot6;
                            var2['isResourceChannel'] = var6;
                            var6 = _closure2_slot87;
                            var2['fromICYMITab'] = var6;
                            var6 = _closure2_slot96;
                            var2['unloadableContentEntryMessageIds'] = var6;
                            var2 = var4.bind(var5)(var2);
                            var4 = var3.bind(var5)(var2);
                            var3 = var4.bind(var5)();
                            var2 = var3.done;
                            if(var2) { _fun0018_ip = 480; continue _fun0018 }
 430:
                            var7 = var3.value;
                            var6 = _closure2_slot112;
                            var2 = var6.generate;
                            var7 = var2.bind(var6)(var7);
                            var6 = _closure2_slot111;
                            var2 = var6.createRow;
                            var2 = var2.bind(var6)(var7);
                            var6 = var4.bind(var5)();
                            var2 = var6.done;
                            var3 = var6;
                            if(!var2) { _fun0018_ip = 430; continue _fun0018 }
 480:
                            var2 = _closure2_slot111;
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
            var36 = var24.bind(var66)(var19, var23);
            var _closure2_slot118 = var36;
            var24 = var66.useCallback;
            var23 = new Array(1);
            var23[0] = var7;
            var19 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 82;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.findMessageIndexInRows;
                var2 = _closure2_slot111;
                var1 = var2.getPreviousRows;
                var2 = var1.bind(var2)();
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var19 = var24.bind(var66)(var19, var23);
            var _closure2_slot119 = var19;
            var39 = var66.useCallback;
            var24 = new Array(2);
            var24[0] = var33;
            var24[1] = var19;
            var23 = function(arg1) {
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
                    var4 = _closure2_slot59;
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
                    var6 = _closure2_slot119;
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
                    var6 = _closure2_slot102;
                    var7 = var6.current;
                    var6 = {};
                    var6['animated'] = var11;
                    var15 = var9 === var10;
                    var6['highlight'] = var15;
                    var6['position'] = var8;
                    var6 = var12.bind(var13)(var7, var14, var6);
                    _fun0019_ip = 442; continue _fun0019;
 332:
                    var6 = _closure2_slot119;
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
                    var3 = _closure2_slot102;
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
                        var2 = _closure2_slot102;
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
            var39 = var39.bind(var66)(var23, var24);
            var _closure2_slot120 = var39;
            var24 = var66.useCallback;
            var23 = new Array(14);
            var23[0] = var36;
            var36 = var32.animated;
            var23[1] = var36;
            var23[2] = r126;
            var23[3] = var35;
            var23[4] = var19;
            var23[5] = var38;
            var23[6] = var39;
            var23[7] = var8;
            var23[8] = var10;
            var23[9] = var9;
            var23[10] = var62;
            var23[11] = var49;
            var23[12] = var15;
            var23[13] = var7;
            var15 = function() {
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
                    var2 = _closure2_slot102;
                    var2 = var2.current;
                    var13 = null;
                    if(!(var13 != var2)) { _fun0020_ip = 945; continue _fun0020 }
 229:
                    var4 = _closure2_slot118;
                    var2 = {};
                    var2['forced'] = var11;
                    var2['updateMessageIds'] = var9;
                    var2['ignoreEmbedDescriptionCache'] = var5;
                    var11 = var4.bind(var1)(var2);
                    var2 = _closure2_slot113;
                    var5 = var2.current;
                    var2 = _closure2_slot86;
                    if(!(var13 == var2)) { _fun0020_ip = 278; continue _fun0020 }
 272:
                    var2 = _closure2_slot85;
                    _fun0020_ip = 282; continue _fun0020;
 278:
                    var2 = _closure2_slot86;
 282:
                    var4 = var13 != var2;
                    var9 = undefined;
                    if(!var4) { _fun0020_ip = 338; continue _fun0020 }
 291:
                    var2 = var2.startId;
                    var9 = undefined;
                    if(!(var2 === var15)) { _fun0020_ip = 338; continue _fun0020 }
 303:
                    var4 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var2 = 83;
                    var2 = var18[var2];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.ChatScrollPosition;
                    var9 = var2.MIDDLE;
 338:
                    if(!(var13 != var11)) { _fun0020_ip = 356; continue _fun0020 }
 342:
                    var4 = var11.length;
                    var2 = 0;
                    if(!(!(var4 > var2))) { _fun0020_ip = 659; continue _fun0020 }
 356:
                    var2 = _closure2_slot113;
                    var2 = var2.current;
                    if(!var2) { _fun0020_ip = 388; continue _fun0020 }
 368:
                    var4 = _closure2_slot116;
                    var2 = var4.hasUpdates;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0020_ip = 640; continue _fun0020 }
 388:
                    var2 = _closure2_slot113;
                    var2 = var2.current;
                    if(var2) { _fun0020_ip = 463; continue _fun0020 }
 400:
                    if(!(var13 != var11)) { _fun0020_ip = 463; continue _fun0020 }
 404:
                    var4 = var11.length;
                    var2 = 0;
                    if(!(var2 === var4)) { _fun0020_ip = 463; continue _fun0020 }
 415:
                    var4 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var2 = 83;
                    var2 = var18[var2];
                    var18 = var4.bind(var1)(var2);
                    var4 = var18.fadeIn;
                    var2 = _closure2_slot102;
                    var2 = var2.current;
                    var2 = var4.bind(var18)(var2);
                    _fun0020_ip = 884; continue _fun0020;
 463:
                    if(!(var13 != var15)) { _fun0020_ip = 568; continue _fun0020 }
 467:
                    var4 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var2 = 82;
                    var2 = var18[var2];
                    var21 = var4.bind(var1)(var2);
                    var20 = var21.shouldJumpToOriginalPost;
                    var25 = _closure2_slot1;
                    var24 = _closure2_slot9;
                    var23 = _closure2_slot8;
                    var22 = _closure2_slot108;
                    var26 = var21;
                    var2 = var26[var20](var25, var24, var23, var22, var21);
                    if(var2) { _fun0020_ip = 568; continue _fun0020 }
 522:
                    var4 = _closure2_slot120;
                    var2 = {};
                    var2['scrollToMessageId'] = var15;
                    var2['jumpTargetId'] = var14;
                    var2['jumpType'] = var17;
                    var2['scrollPosition'] = var9;
                    var2['minimizeScrolling'] = var16;
                    var2['isRescrolling'] = var8;
                    var2 = var4.bind(var1)(var2);
                    _fun0020_ip = 884; continue _fun0020;
 568:
                    if(!(var13 != var7)) { _fun0020_ip = 884; continue _fun0020 }
 575:
                    var2 = _closure2_slot119;
                    var16 = var2.bind(var1)(var7);
                    if(!(var13 != var16)) { _fun0020_ip = 884; continue _fun0020 }
 591:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 83;
                    var2 = var8[var2];
                    var8 = var4.bind(var1)(var2);
                    var4 = var8.focus;
                    var2 = _closure2_slot102;
                    var2 = var2.current;
                    var2 = var4.bind(var8)(var2, var16);
                    _fun0020_ip = 884; continue _fun0020;
 640:
                    var4 = _closure2_slot116;
                    var2 = var4.tryFlush;
                    var2 = var2.bind(var4)();
                    _fun0020_ip = 884; continue _fun0020;
 659:
                    var4 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var2 = 88;
                    var2 = var16[var2];
                    var4 = var4.bind(var1)(var2);
                    var2 = {};
                    var17 = _closure2_slot111;
                    var16 = var17.getPreviousRows;
                    var16 = var16.bind(var17)();
                    var2['rows'] = var16;
                    var2['scrollToMessageId'] = var15;
                    var2['jumpTargetId'] = var14;
                    if(!(var13 == var10)) { _fun0020_ip = 727; continue _fun0020 }
 717:
                    var13 = _closure2_slot8;
                    var10 = var13.jumpType;
 727:
                    var2['jumpType'] = var10;
                    var10 = _closure2_slot113;
                    var10 = var10.current;
                    var10 = !var10;
                    if(var10) { _fun0020_ip = 750; continue _fun0020 }
 747:
                    var10 = var12;
 750:
                    var2['shouldInitialScroll'] = var10;
                    var10 = _closure2_slot103;
                    var10 = var10.animated;
                    var2['animated'] = var10;
                    var2['scrollPosition'] = var9;
                    var2['focusTargetId'] = var7;
                    var7 = var4.bind(var1)(var2);
                    var4 = _closure2_slot113;
                    var2 = true;
                    var4['current'] = var2;
                    var4 = _closure2_slot117;
                    var2 = {};
                    var2['rows'] = var11;
                    var9 = _closure2_slot8;
                    var9 = var9.hasMoreAfter;
                    var2['hasMoreMessagesAfter'] = var9;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 82;
                    var8 = var10[var8];
                    var10 = var9.bind(var1)(var8);
                    var9 = var10.isLoadingAtTop;
                    var8 = _closure2_slot114;
                    var8 = var8.current;
                    var8 = var9.bind(var10)(var11, var8);
                    var2['isLoadingAtTop'] = var8;
                    var2['scrollData'] = var7;
                    var2['HACK_iOSForceAnimations'] = var6;
                    var2 = var4.bind(var1)(var2);
 884:
                    var2 = _closure2_slot113;
                    var2 = var2.current;
                    if(!var2) { _fun0020_ip = 909; continue _fun0020 }
 896:
                    var4 = _closure2_slot113;
                    var4 = var4.current;
                    var2 = var4 !== var5;
 909:
                    if(!var2) { _fun0020_ip = 916; continue _fun0020 }
 912:
                    var2 = _closure2_slot6;
 916:
                    if(!var2) { _fun0020_ip = 945; continue _fun0020 }
 919:
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
                        var2 = _closure2_slot102;
                        var1 = _closure2_slot111;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var2 = 100;
                    var2 = var4.bind(var1)(var3, var2);
 945:
                    return var1;
                }
            };
            var23 = var24.bind(var66)(var15, var23);
            var _closure2_slot121 = var23;
            var35 = var66.useCallback;
            var24 = new Array(2);
            var24[0] = var19;
            var24[1] = var23;
            var15 = function(arg1) {
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
                    var8 = _closure2_slot102;
                    var3['chatRef'] = var8;
                    var8 = _closure2_slot119;
                    var3['findMessageIndex'] = var8;
                    var7 = _closure2_slot121;
                    var3['updateRows'] = var7;
                    var3['updateRowsEnabled'] = var6;
                    var3['jumpType'] = var2;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                }
            };
            var36 = var35.bind(var66)(var15, var24);
            var _closure2_slot122 = var36;
            var35 = var66.useCallback;
            var24 = new Array(5);
            var24[0] = var10;
            var24[1] = var18;
            var24[2] = var13;
            var24[3] = var3;
            var24[4] = var7;
            var15 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 82;
                var2 = var2[var1];
                var1 = undefined;
                var8 = var3.bind(var1)(var2);
                var7 = var8.clearRows;
                var13 = _closure2_slot102;
                var12 = _closure2_slot111;
                var11 = _closure2_slot9;
                var10 = _closure2_slot2;
                var9 = function(arg1) {
                    var4 = _closure2_slot104;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot106;
                    var2 = null;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var14 = var8;
                var2 = var14[var7](var13, var12, var11, var10, var9, var8);
                return var1;
            };
            var35 = var35.bind(var66)(var15, var24);
            var _closure2_slot123 = var35;
            var65 = var66.useCallback;
            var24 = new Array(2);
            var24[0] = var7;
            var24[1] = var10;
            var15 = function(arg1) {
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
                var5 = _closure2_slot111;
                var1['chatManager'] = var5;
                var4 = _closure2_slot9;
                var1['channelId'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var65.bind(var66)(var15, var24);
            var _closure2_slot124 = var15;
            var65 = var66.useCallback;
            var24 = new Array(6);
            var24[0] = var10;
            var24[1] = r122;
            var24[2] = var14;
            var24[3] = var9;
            var24[4] = var64;
            var24[5] = var22;
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
                        var5 = _closure2_slot8;
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
                    var2 = _closure2_slot4;
                    var1['chatInputRef'] = var2;
                    var2 = _closure2_slot9;
                    var1['selectedChannelId'] = var2;
                    var2 = _closure2_slot8;
                    var2 = var2.revealedMessageId;
                    var1['revealedMessageId'] = var2;
                    var2 = _closure2_slot57;
                    var5 = null;
                    if(!(var5 == var2)) { _fun0022_ip = 68; continue _fun0022 }
 62:
                    var2 = new Array(0);
                    _fun0022_ip = 72; continue _fun0022;
 68:
                    var2 = _closure2_slot57;
 72:
                    var1['uploads'] = var2;
                    var2 = _closure2_slot77;
                    var2 = var5 != var2;
                    if(!var2) { _fun0022_ip = 92; continue _fun0022 }
 88:
                    var2 = _closure2_slot77;
 92:
                    var1['paymentsBlocked'] = var2;
                    var2 = _closure2_slot3;
                    var6 = var5 == var2;
                    var4 = undefined;
                    if(var6) { _fun0022_ip = 120; continue _fun0022 }
 110:
                    var6 = _closure2_slot3;
                    var4 = var6.onTransitionToChannel;
 120:
                    var1['onTransitionToChannel'] = var4;
                    var4 = _closure2_slot3;
                    var4 = var5 == var4;
                    var2 = undefined;
                    if(var4) { _fun0022_ip = 148; continue _fun0022 }
 138:
                    var3 = _closure2_slot3;
                    var2 = var3.onTransitionToThread;
 148:
                    var1['onTransitionToThread'] = var2;
                    return var1;
                }
            };
            var22 = var65.bind(var66)(var22, var24);
            var _closure2_slot125 = var22;
            var65 = var66.useMemo;
            var24 = new Array(1);
            var24[0] = var22;
            var22 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 90;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.MessagesHandlers;
                var4 = _closure2_slot125;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var22 = var65.bind(var66)(var22, var24);
            var _closure2_slot126 = var22;
            var65 = var66.useCallback;
            var24 = new Array(14);
            var24[0] = var29;
            var24[1] = var10;
            var24[2] = var30;
            var24[3] = var12;
            var24[4] = var8;
            var24[5] = var9;
            var24[6] = var13;
            var24[7] = var32;
            var24[8] = r126;
            var24[9] = var53;
            var24[10] = var18;
            var24[11] = r125;
            var24[12] = var17;
            var24[13] = var7;
            var17 = function(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var13 = var1.isAtBottom;
                    var12 = var1.isNearBottom;
                    var11 = var1.isNearTop;
                    var10 = var1.dragging;
                    var9 = var1.decelerating;
                    var6 = var1.firstVisibleMessageIndex;
                    var19 = var1.firstVisibleMessagePercentVisible;
                    var5 = var1.lastVisibleMessageIndex;
                    var16 = var1.lastVisibleMessagePercentVisible;
                    var8 = var1.shouldShowJumpToPresent;
                    var4 = var1.isFirstMessageVisible;
                    var21 = var1.changesetUpdateId;
                    var1 = undefined;
                    var _closure3_slot0 = var1;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var7 = 91;
                    var7 = var15[var7];
                    var17 = var14.bind(var1)(var7);
                    var15 = var17.getChangesetIdForChat;
                    var14 = _closure2_slot102;
                    var14 = var14.current;
                    var20 = var15.bind(var17)(var14);
                    if(!(var21 !== var20)) { _fun0024_ip = 186; continue _fun0024 }
 138:
                    var14 = _closure2_slot97;
                    if(!var14) { _fun0024_ip = 425; continue _fun0024 }
 148:
                    var18 = _closure1_slot62;
                    var17 = var18.log;
                    var24 = _closure2_slot9;
                    var25 = 'STAFF-ACK-LOG: Ignoring outdated scroll event.';
                    var26 = var18;
                    var23 = var21;
                    var22 = var20;
                    var14 = var26[var17](var25, var24, var23, var22, var21);
                    _fun0024_ip = 425; continue _fun0024;
 186:
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var3 = 82;
                    var3 = var18[var3];
                    var15 = var17.bind(var1)(var3);
                    var14 = var15.handleVisibleMessagesChange;
                    var3 = {};
                    var3['firstVisibleMessageRowIndex'] = var6;
                    var3['firstVisibleMessagePercentVisible'] = var19;
                    var3['lastVisibleMessageRowIndex'] = var5;
                    var3['lastVisibleMessagePercentVisible'] = var16;
                    var16 = 92;
                    var16 = var18[var16];
                    var16 = var17.bind(var1)(var16);
                    var16 = var16.QuestsVisibleMessagesChangedSource;
                    var16 = var16.SCROLL;
                    var3['source'] = var16;
                    var16 = _closure2_slot111;
                    var3['chatManager'] = var16;
                    var16 = _closure2_slot88;
                    var3['shouldTrackAnnouncementMessageViews'] = var16;
                    var16 = _closure2_slot10;
                    var3['guildId'] = var16;
                    var16 = _closure2_slot9;
                    var3['channelId'] = var16;
                    var16 = _closure2_slot1;
                    var3['channel'] = var16;
                    var3 = var14.bind(var15)(var3);
                    var3 = function handleScrollCallbacks(arg1) {
                        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                            var1 = arg1;
                            var6 = var1.isAtBottom;
                            var9 = var1.isNearBottom;
                            var4 = undefined;
                            if(!(var9 === var4)) { _fun0025_ip = 25; continue _fun0025 }
 23:
                            var9 = false;
 25:
                            var10 = var1.isNearTop;
                            if(!(var10 === var4)) { _fun0025_ip = 37; continue _fun0025 }
 35:
                            var10 = false;
 37:
                            var12 = var1.dragging;
                            if(!(var12 === var4)) { _fun0025_ip = 49; continue _fun0025 }
 47:
                            var12 = false;
 49:
                            var13 = var1.decelerating;
                            if(!(var13 === var4)) { _fun0025_ip = 61; continue _fun0025 }
 59:
                            var13 = false;
 61:
                            var5 = var1.isFirstMessageVisible;
                            if(!(var5 === var4)) { _fun0025_ip = 73; continue _fun0025 }
 71:
                            var5 = false;
 73:
                            var2 = _closure2_slot0;
                            var3 = var2.onScroll;
                            var8 = _closure2_slot1;
                            var2 = null;
                            if(!(var2 != var8)) { _fun0025_ip = 460; continue _fun0025 }
 99:
                            var8 = _closure2_slot8;
                            var8 = var8.length;
                            var11 = 0;
                            if(!(var11 === var8)) { _fun0025_ip = 130; continue _fun0025 }
 114:
                            var8 = _closure2_slot8;
                            var8 = var8.loadingMore;
                            if(var8) { _fun0025_ip = 460; continue _fun0025 }
 130:
                            var8 = _closure2_slot8;
                            var8 = var8.loadingMore;
                            var8 = !var8;
                            if(!var8) { _fun0025_ip = 155; continue _fun0025 }
 146:
                            if(var12) { _fun0025_ip = 152; continue _fun0025 }
 149:
                            var12 = var13;
 152:
                            var8 = var12;
 155:
                            if(!var8) { _fun0025_ip = 175; continue _fun0025 }
 158:
                            var13 = _closure2_slot116;
                            var12 = var13.hasUpdates;
                            var12 = var12.bind(var13)();
                            var8 = !var12;
 175:
                            var12 = _closure2_slot103;
                            var12 = var12.isNearTop;
                            if(var12) { _fun0025_ip = 263; continue _fun0025 }
 188:
                            if(!var10) { _fun0025_ip = 263; continue _fun0025 }
 191:
                            var10 = _closure2_slot8;
                            var10 = var10.hasMoreBefore;
                            if(!var10) { _fun0025_ip = 263; continue _fun0025 }
 204:
                            if(!var8) { _fun0025_ip = 263; continue _fun0025 }
 207:
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var10 = 82;
                            var10 = var13[var10];
                            var15 = var12.bind(var4)(var10);
                            var14 = var15.loadMoreBefore;
                            var13 = _closure2_slot9;
                            var12 = _closure2_slot8;
                            var10 = function(arg1) {
                                var3 = _closure2_slot104;
                                var2 = {};
                                var1 = arg1;
                                var2['animated'] = var1;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var10 = var14.bind(var15)(var13, var12, var10);
                            _fun0025_ip = 426; continue _fun0025;
 263:
                            var10 = _closure2_slot103;
                            var10 = var10.isNearBottom;
                            if(var10) { _fun0025_ip = 348; continue _fun0025 }
 276:
                            if(!var9) { _fun0025_ip = 348; continue _fun0025 }
 279:
                            var9 = _closure2_slot8;
                            var9 = var9.hasMoreAfter;
                            if(!var9) { _fun0025_ip = 348; continue _fun0025 }
 292:
                            if(!var8) { _fun0025_ip = 348; continue _fun0025 }
 295:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var8 = 82;
                            var8 = var10[var8];
                            var12 = var9.bind(var4)(var8);
                            var10 = var12.loadMoreAfter;
                            var9 = _closure2_slot9;
                            var8 = _closure2_slot8;
                            var7 = function(arg1) {
                                var3 = _closure2_slot104;
                                var2 = {};
                                var1 = arg1;
                                var2['animated'] = var1;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var7 = var10.bind(var12)(var9, var8, var7);
                            _fun0025_ip = 426; continue _fun0025;
 348:
                            var7 = _closure2_slot103;
                            var7 = var7.isAtBottom;
                            if(!(var7 !== var6)) { _fun0025_ip = 426; continue _fun0025 }
 362:
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var7 = 70;
                            var7 = var9[var7];
                            var10 = var8.bind(var4)(var7);
                            var9 = var10.updateChannelDimensions;
                            var7 = _closure2_slot1;
                            var8 = var7.id;
                            var7 = 0;
                            if(!var6) { _fun0025_ip = 408; continue _fun0025 }
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
                            if(!(var2 != var3)) { _fun0025_ip = 442; continue _fun0025 }
 430:
                            var2 = {};
                            var2['isFirstMessageVisible'] = var5;
                            var2 = var3.bind(var4)(var2);
 442:
                            var2 = _closure2_slot116;
                            var1 = var2.tryFlush;
                            var1 = var1.bind(var2)();
                            var1 = true;
                            return var1;
 460:
                            var1 = false;
                            return var1;
                        }
                    };
                    _closure3_slot0 = var3;
                    var3 = {};
                    var3['isAtBottom'] = var13;
                    var3['isNearBottom'] = var12;
                    var3['isNearTop'] = var11;
                    var3['dragging'] = var10;
                    var3['decelerating'] = var9;
                    var3['shouldShowJumpToPresent'] = var8;
                    var3['isFirstMessageVisible'] = var4;
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
                            var10 = var3.isFirstMessageVisible;
                            if(!(var10 === var1)) { _fun0026_ip = 89; continue _fun0026 }
 87:
                            var10 = false;
 89:
                            var4 = _closure3_slot0;
                            var3 = {};
                            var3['isAtBottom'] = var9;
                            var3['isNearBottom'] = var8;
                            var3['isNearTop'] = var7;
                            var3['dragging'] = var6;
                            var3['decelerating'] = var5;
                            var3['isFirstMessageVisible'] = var10;
                            var3 = var4.bind(var1)(var3);
                            if(!var3) { _fun0026_ip = 216; continue _fun0026 }
 136:
                            var4 = _closure2_slot104;
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
                                    var4 = _closure2_slot9;
                                    var3 = _closure2_slot2;
                                    var2 = _closure4_slot0;
                                    if(var2) { _fun0027_ip = 38; continue _fun0027 }
 28:
                                    var1 = _closure2_slot8;
                                    var2 = var1.hasMoreAfter;
 38:
                                    var1 = undefined;
                                    var2 = var5.bind(var1)(var4, var3, var2);
                                    return var1;
                                }
                            };
                            var2 = var3.bind(var4)(var2);
 216:
                            return var1;
                        }
                    };
                    var2 = var2.bind(var1)(var3);
                    var3 = _closure2_slot7;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0024_ip = 425; continue _fun0024 }
 379:
                    var4 = _closure2_slot7;
                    var3 = var4.handleScrollPosition;
                    var2 = {};
                    var8 = _closure2_slot111;
                    var7 = var8.getPreviousRows;
                    var7 = var7.bind(var8)();
                    var2['rows'] = var7;
                    var2['firstVisibleMessageRowIndex'] = var6;
                    var2['lastVisibleMessageRowIndex'] = var5;
                    var2 = var3.bind(var4)(var2);
 425:
                    return var1;
                }
            };
            var24 = var65.bind(var66)(var17, var24);
            r125 = var66.useMemo;
            var65 = new Array(1);
            var65[0] = var22;
            var17 = function() {
                var1 = {};
                var3 = function handleTapImage(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapImage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapImage'] = var3;
                var3 = function handleTapChannel(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapChannel;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapChannel'] = var3;
                var3 = function handleLongPressChannel(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleLongPressChannel;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressChannel'] = var3;
                var3 = function handleTapAttachmentLink(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapAttachmentLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapAttachmentLink'] = var3;
                var3 = function handleLongPressAttachmentLink(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleLongPressAttachmentLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressAttachmentLink'] = var3;
                var3 = function handleTapCall(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapCall;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapCall'] = var3;
                var3 = function handleTapMention(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapMention;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapMention'] = var3;
                var3 = function handleTapCommandMention(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapCommandMention;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapCommandMention'] = var3;
                var3 = function handleLongPressCommandMention(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleLongPressCommandMention;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressCommandMention'] = var3;
                var3 = function handleTapLink(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapLink'] = var3;
                var3 = function handleLongPressLink(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleLongPressLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressLink'] = var3;
                var3 = function handleTapReaction(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapReaction;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapReaction'] = var3;
                var3 = function handleLongPressReaction(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleLongPressReaction;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressReaction'] = var3;
                var3 = function handleOpenSticker(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleOpenSticker;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleOpenSticker'] = var3;
                var3 = function handleTapAvatar(arg1) {
                    var4 = _closure2_slot126;
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
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapUsername;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapUsername'] = var3;
                var3 = function handleLongPressUsername(arg1) {
                    var4 = _closure2_slot126;
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
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapThreadEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapThreadEmbed'] = var3;
                var3 = function handleTapReply(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapReply;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapReply'] = var3;
                var3 = function handleTapSummary(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapSummary;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSummary'] = var3;
                var3 = function handleTapSummaryJump(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapSummaryJump;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSummaryJump'] = var3;
                var3 = function handleLongPressMessage(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleLongPressMessage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressMessage'] = var3;
                var3 = function handleInitiateReply(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleInitiateReply;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleInitiateReply'] = var3;
                var3 = function handleInitiateEdit(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleInitiateEdit;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleInitiateEdit'] = var3;
                var3 = function handleInitiateThread(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleInitiateThread;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleInitiateThread'] = var3;
                var3 = function handleTapMessage(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapMessage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapMessage'] = var3;
                var3 = function handleTapCancelUploadItem(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapCancelUploadItem;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapCancelUploadItem'] = var3;
                var3 = function handleTapInviteEmbedAccept(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapInviteEmbedAccept;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInviteEmbedAccept'] = var3;
                var3 = function handleTapInviteEmbed(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapInviteEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInviteEmbed'] = var3;
                var3 = function handleTapJoinActivity(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapJoinActivity;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapJoinActivity'] = var3;
                var3 = function handleTapGiftCodeEmbed(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapGiftCodeEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapGiftCodeEmbed'] = var3;
                var3 = function handleTapGiftCodeAccept(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapGiftCodeAccept;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapGiftCodeAccept'] = var3;
                var3 = function handleTapReferralRedeem(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapReferralRedeem;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapReferralRedeem'] = var3;
                var3 = function handleTapEmoji(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapEmoji;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapEmoji'] = var3;
                var3 = function handleTapTimestamp(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapTimestamp;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapTimestamp'] = var3;
                var3 = function handleTapInlineCode(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapInlineCode;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInlineCode'] = var3;
                var3 = function handleTapRoleIcon(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapRoleIcon;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapRoleIcon'] = var3;
                var3 = function handleTapGameIcon(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapGameIcon;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapGameIcon'] = var3;
                var3 = function handleTapSuppressNotificationsIcon(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapSuppressNotificationsIcon;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSuppressNotificationsIcon'] = var3;
                var3 = function handleTapConnectionsRoleTag(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapConnectionsRoleTag;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapConnectionsRoleTag'] = var3;
                var3 = function handleTapTimeoutIcon() {
                    var2 = _closure2_slot126;
                    var1 = var2.handleTapTimeoutIcon;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['handleTapTimeoutIcon'] = var3;
                var3 = function handleTapButtonActionComponent(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapButtonActionComponent;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapButtonActionComponent'] = var3;
                var3 = function handleTapSelectActionComponent(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapSelectActionComponent;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSelectActionComponent'] = var3;
                var3 = function handleTapWelcomeReply(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapWelcomeReply;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapWelcomeReply'] = var3;
                var3 = function handleTapInviteToSpeak(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapInviteToSpeak;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInviteToSpeak'] = var3;
                var3 = function handleTapAutoModerationActions(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapAutoModerationActions;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapAutoModerationActions'] = var3;
                var3 = function handleTapAutoModerationFeedback(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapAutoModerationFeedback;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapAutoModerationFeedback'] = var3;
                var3 = function handleTapFollowForumPost(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapFollowForumPost;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapFollowForumPost'] = var3;
                var3 = function handleTapShareForumPost(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapShareForumPost;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapShareForumPost'] = var3;
                var3 = function handleTapReactionOverflow(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapReactionOverflow;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapReactionOverflow'] = var3;
                var3 = function handleCopyText(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleCopyText;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleCopyText'] = var3;
                var3 = function handleTapOpTag(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapOpTag;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapOpTag'] = var3;
                var3 = function handleTapTag(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapTag;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapTag'] = var3;
                var3 = function handleTapRemix(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapRemix;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapRemix'] = var3;
                var3 = function handleMediaAttachmentPlaybackStarted(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleMediaAttachmentPlaybackStarted;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleMediaAttachmentPlaybackStarted'] = var3;
                var3 = function handleMediaAttachmentPlaybackEnded(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleMediaAttachmentPlaybackEnded;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleMediaAttachmentPlaybackEnded'] = var3;
                var3 = function handlerVoiceMessagePlaybackFailed(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleVoiceMessagePlaybackFailed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handlerVoiceMessagePlaybackFailed'] = var3;
                var3 = function handleTapPostPreviewEmbed(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapPostPreviewEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapPostPreviewEmbed'] = var3;
                var3 = function handleTapDismissMediaPostSharePrompt(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapDismissMediaPostSharePrompt;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapDismissMediaPostSharePrompt'] = var3;
                var3 = function handleTapChannelPromptButton(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapChannelPromptButton;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapChannelPromptButton'] = var3;
                var3 = function handleTapObscuredMediaLearnMore(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapObscuredMediaLearnMore;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapObscuredMediaLearnMore'] = var3;
                var3 = function handleTapObscuredMediaToggle(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.onTapObscuredMediaToggle;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapObscuredMediaToggle'] = var3;
                var3 = function handleTapSafetyPolicyNoticeEmbed(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapSafetyPolicyNoticeEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSafetyPolicyNoticeEmbed'] = var3;
                var3 = function handleTapSafetySystemNotificationCta(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapSafetySystemNotificationCta;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSafetySystemNotificationCta'] = var3;
                var3 = function handleTapPollAnswer(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapPollAnswer;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapPollAnswer'] = var3;
                var3 = function handleTapPollSubmitVote(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapPollSubmitVote;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapPollSubmitVote'] = var3;
                var3 = function handleTapPollAction(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapPollAction;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapPollAction'] = var3;
                var3 = function handleLongPressPollImage(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleLongPressPollImage;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleLongPressPollImage'] = var3;
                var3 = function handleTapCtaButton(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapCtaButton;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapCtaButton'] = var3;
                var3 = function handleMessageAccessibilityAction(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleMessageAccessibilityAction;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleMessageAccessibilityAction'] = var3;
                var3 = function handleTapForwardFooter(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapForwardFooter;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapForwardFooter'] = var3;
                var3 = function handleTapInlineForward(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapInlineForward;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapInlineForward'] = var3;
                var3 = function handleTapClanTagChiplet(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapClanTagChiplet;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapClanTagChiplet'] = var3;
                var3 = function handleTapContentInventoryEntryEmbed(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapContentInventoryEntryEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapContentInventoryEntryEmbed'] = var3;
                var3 = function handleTapSoundmoji(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapSoundmoji;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapSoundmoji'] = var3;
                var2 = function handleTapAppMessageEmbed(arg1) {
                    var3 = _closure2_slot126;
                    var2 = var3.handleTapAppMessageEmbed;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['handleTapAppMessageEmbed'] = var2;
                return var1;
            };
            var17 = r125.bind(var66)(var17, var65);
            r125 = var66.useCallback;
            var65 = new Array(4);
            var65[0] = var22;
            var65[1] = var10;
            var65[2] = var9;
            var65[3] = var13;
            var22 = function(arg1) {
                var5 = _closure2_slot126;
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
                    var3 = _closure2_slot9;
                    var2 = _closure2_slot8;
                    var1 = function(arg1) {
                        var3 = _closure2_slot104;
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
                    var3 = _closure2_slot9;
                    var2 = _closure2_slot8;
                    var1 = function(arg1) {
                        var3 = _closure2_slot104;
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
            var22 = r125.bind(var66)(var22, var65);
            var40 = r123[var40];
            var65 = var42.bind(var4)(var40);
            var42 = var65.useMessagesLifecycle;
            var40 = {};
            var40['messages'] = var9;
            var40['isMessagesReady'] = r121;
            var40['oldestUnreadMessageId'] = var37;
            var40['channelId'] = var10;
            var40['customHandlers'] = r122;
            var40['screenIndex'] = var18;
            var40['updateRows'] = var23;
            var40['scrollToMessageId'] = var39;
            var40['findMessageIndex'] = var19;
            var40['chatRef'] = var29;
            var40 = var42.bind(var65)(var40);
            var65 = var66.useMemo;
            var42 = new Array(79);
            var42[0] = r120;
            var42[1] = r119;
            var42[2] = r116;
            var42[3] = r115;
            var42[4] = r112;
            var42[5] = var81;
            var42[6] = r117;
            var42[7] = r101;
            var42[8] = r100;
            var42[9] = r111;
            var42[10] = var69;
            var42[11] = var77;
            var42[12] = var68;
            var42[13] = var80;
            var42[14] = var67;
            var42[15] = var37;
            var42[16] = var74;
            var42[17] = var73;
            var42[18] = var72;
            var42[19] = var78;
            var42[20] = var71;
            var42[21] = var58;
            var42[22] = r103;
            var42[23] = var47;
            var42[24] = var41;
            var42[25] = var56;
            var42[26] = var55;
            var42[27] = var51;
            var42[28] = var50;
            var42[29] = var20;
            var42[30] = var61;
            var42[31] = var59;
            var42[32] = var60;
            var42[33] = var57;
            var42[34] = var82;
            var42[35] = var25;
            var42[36] = var79;
            var42[37] = var83;
            var42[38] = var62;
            var42[39] = var49;
            var42[40] = var46;
            var42[41] = var48;
            var42[42] = var93;
            var42[43] = var53;
            var42[44] = var52;
            var42[45] = var54;
            var42[46] = var45;
            var42[47] = r109;
            var42[48] = r108;
            var42[49] = r107;
            var42[50] = r106;
            var42[51] = r105;
            var42[52] = var95;
            var42[53] = var98;
            var42[54] = var97;
            var42[55] = var96;
            var42[56] = r104;
            var42[57] = var100;
            var42[58] = var99;
            var42[59] = var88;
            var42[60] = var87;
            var42[61] = var86;
            var42[62] = var94;
            var42[63] = var92;
            var42[64] = var91;
            var42[65] = var90;
            var42[66] = var89;
            var42[67] = var76;
            var42[68] = var75;
            var42[69] = r118;
            var42[70] = r110;
            var42[71] = var44;
            var42[72] = r114;
            var42[73] = r113;
            var42[74] = var85;
            var42[75] = var84;
            var42[76] = r102;
            var42[77] = var64;
            var42[78] = var43;
            var40 = function() {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                    var1 = {};
                    var3 = _closure2_slot61;
                    var1['channelThreadsVersion'] = var3;
                    var3 = _closure2_slot71;
                    var1['rsvpVersion'] = var3;
                    var3 = _closure2_slot73;
                    var1['communicationDisabledVersion'] = var3;
                    var3 = _closure2_slot72;
                    var1['failedMessagesVersion'] = var3;
                    var3 = _closure2_slot64;
                    var1['interactionComponentStatesVersion'] = var3;
                    var3 = _closure2_slot99;
                    var1['forwardGuildsVersion'] = var3;
                    var3 = _closure2_slot65;
                    var1['hasLoadedExperiments'] = var3;
                    var3 = _closure2_slot78;
                    var1['isFollowingForumPost'] = var3;
                    var3 = _closure2_slot79;
                    var1['showMediaPostSharePrompt'] = var3;
                    var3 = _closure2_slot91;
                    var1['shouldDisableInteractiveComponents'] = var3;
                    var3 = _closure2_slot50;
                    var1['isCallActive'] = var3;
                    var3 = _closure2_slot51;
                    var1['voiceStateChannelId'] = var3;
                    var3 = _closure2_slot56;
                    var1['participantsLength'] = var3;
                    var3 = _closure2_slot45;
                    var1['editingMessageId'] = var3;
                    var3 = _closure2_slot46;
                    var1['replyingMessageId'] = var3;
                    var3 = _closure2_slot47;
                    var1['oldestUnreadMessageId'] = var3;
                    var3 = _closure2_slot66;
                    var1['isSpamMessageRequest'] = var3;
                    var3 = _closure2_slot67;
                    var1['isMessageRequest'] = var3;
                    var3 = _closure2_slot75;
                    var1['currentUserCommunicationDisabled'] = var3;
                    var3 = _closure2_slot82;
                    var1['androidKeyboardHeight'] = var3;
                    var3 = _closure2_slot74;
                    var1['renderCommunicationDisabled'] = var3;
                    var3 = _closure2_slot100;
                    var1['guildInviteColorsFetched'] = var3;
                    var3 = _closure2_slot81;
                    var1['lazyCacheStatus'] = var3;
                    var3 = _closure2_slot107;
                    var1['shouldForceRender'] = var3;
                    var3 = _closure2_slot69;
                    var1['isMessagesCached'] = var3;
                    var3 = _closure2_slot101;
                    var1['guildEmojis'] = var3;
                    var3 = _closure2_slot14;
                    var1['inlineAttachmentMedia'] = var3;
                    var3 = _closure2_slot15;
                    var1['inlineEmbedMedia'] = var3;
                    var3 = _closure2_slot16;
                    var1['renderEmbeds'] = var3;
                    var3 = _closure2_slot17;
                    var1['renderReactions'] = var3;
                    var3 = _closure2_slot18;
                    var1['animateEmoji'] = var3;
                    var3 = _closure2_slot19;
                    var1['animateStickers'] = var3;
                    var3 = _closure2_slot20;
                    var1['gifAutoPlay'] = var3;
                    var3 = _closure2_slot94;
                    var1['containerWidth'] = var3;
                    var3 = _closure2_slot12;
                    var1['guildSystemChannelFlags'] = var3;
                    var3 = _closure2_slot76;
                    var1['userSettingsLocale'] = var3;
                    var3 = _closure2_slot60;
                    var1['roleStyle'] = var3;
                    var3 = _closure2_slot49;
                    var1['canSendMessages'] = var3;
                    var3 = _closure2_slot80;
                    var1['showPushFeedback'] = var3;
                    var4 = _closure2_slot86;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0028_ip = 372; continue _fun0028 }
 366:
                    var3 = _closure2_slot85;
                    _fun0028_ip = 376; continue _fun0028;
 372:
                    var3 = _closure2_slot86;
 376:
                    var1['selectedSummary'] = var3;
                    var3 = _closure2_slot89;
                    var1['shouldObscureSpoiler'] = var3;
                    var3 = _closure2_slot98;
                    var1['shouldFilterKeywords'] = var3;
                    var3 = _closure2_slot93;
                    var1['explicitMediaFalsePositiveInfo'] = var3;
                    var3 = _closure2_slot97;
                    var1['isStaff'] = var3;
                    var3 = _closure2_slot22;
                    var1['messageShortcutsEnabled'] = var3;
                    var3 = _closure2_slot90;
                    var1['isAgeVerified'] = var3;
                    var3 = _closure2_slot21;
                    var1['theme'] = var3;
                    var3 = _closure2_slot31;
                    var1['activityInstanceIds'] = var3;
                    var3 = _closure2_slot33;
                    var1['activityParticipants'] = var3;
                    var3 = _closure2_slot32;
                    var1['activityInstancePresenceDetails'] = var3;
                    var3 = _closure2_slot34;
                    var1['messagesWithActivitiesLaunching'] = var3;
                    var3 = _closure2_slot29;
                    var1['invalidApplicationIds'] = var3;
                    var3 = _closure2_slot30;
                    var1['applicationAssetFetchingIds'] = var3;
                    var3 = _closure2_slot26;
                    var1['appDirectoryEmbedApplications'] = var3;
                    var3 = _closure2_slot27;
                    var1['invalidAppDirectoryEmbedApplicationIds'] = var3;
                    var3 = _closure2_slot28;
                    var1['appDirectoryEmbedApplicationFetchStates'] = var3;
                    var3 = _closure2_slot42;
                    var1['referralTrialOfferIds'] = var3;
                    var3 = _closure2_slot23;
                    var1['messageAuthorActivities'] = var3;
                    var3 = _closure2_slot24;
                    var1['activityInviteMessageIds'] = var3;
                    var3 = _closure2_slot53;
                    var1['resolvingGiftCodes'] = var3;
                    var3 = _closure2_slot54;
                    var1['resolvedGiftCodes'] = var3;
                    var3 = _closure2_slot55;
                    var1['acceptingGiftCodes'] = var3;
                    var3 = _closure2_slot36;
                    var1['mediaPostPreviewEmbeds'] = var3;
                    var3 = _closure2_slot37;
                    var1['guildTemplates'] = var3;
                    var3 = _closure2_slot38;
                    var1['buildOverrides'] = var3;
                    var3 = _closure2_slot39;
                    var1['quests'] = var3;
                    var3 = _closure2_slot40;
                    var1['isFetchingCurrentQuests'] = var3;
                    var3 = _closure2_slot35;
                    var1['applications'] = var3;
                    var3 = _closure2_slot25;
                    var1['invites'] = var3;
                    var3 = _closure2_slot58;
                    var1['repliedIds'] = var3;
                    var3 = _closure2_slot92;
                    var1['channelPolls'] = var3;
                    var3 = _closure2_slot95;
                    var1['unloadedContentEntryMessageIds'] = var3;
                    var3 = _closure2_slot62;
                    var1['interactionStates'] = var3;
                    var3 = _closure2_slot63;
                    var1['interactionComponentStates'] = var3;
                    var3 = _closure2_slot43;
                    var1['trialOffer'] = var3;
                    var3 = _closure2_slot44;
                    var1['isPremiumTier2User'] = var3;
                    var3 = _closure2_slot52;
                    var1['threadStartingReferenceMessage'] = var3;
                    var2 = _closure2_slot57;
                    var1['uploads'] = var2;
                    return var1;
                }
            };
            var42 = var65.bind(var66)(var40, var42);
            var66 = _closure1_slot1;
            var65 = 95;
            var40 = r123[var65];
            var40 = var66.bind(var4)(var40);
            var42 = var40.bind(var4)(var42);
            var _closure2_slot127 = var42;
            var40 = r123[var65];
            var40 = var66.bind(var4)(var40);
            r122 = var40.bind(var4)(var10);
            var _closure2_slot128 = r122;
            var40 = r123[var65];
            var40 = var66.bind(var4)(var40);
            var40 = var40.bind(var4)(r124);
            var _closure2_slot129 = var40;
            var65 = r123[var65];
            var65 = var66.bind(var4)(var65);
            var65 = var65.bind(var4)(var9);
            var _closure2_slot130 = var65;
            var66 = r121;
            if(!var66) { _fun0004_ip = 5409; continue _fun0004 }
 5406:
            var66 = !var41;
 5409:
            if(!var66) { _fun0004_ip = 5430; continue _fun0004 }
 5412:
            r123 = var5 == var42;
            var41 = undefined;
            if(r123) { _fun0004_ip = 5427; continue _fun0004 }
 5421:
            var41 = var42.isMessagesCached;
 5427:
            var66 = var41;
 5430:
            var _closure2_slot131 = var66;
            var41 = _closure1_slot5;
            r125 = var41.useEffect;
            r123 = new Array(3);
            r123[0] = var10;
            r123[1] = r122;
            r123[2] = var35;
            r122 = function() {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                    var3 = _closure2_slot128;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0029_ip = 28; continue _fun0029 }
 16:
                    var4 = _closure2_slot128;
                    var3 = _closure2_slot9;
                    var2 = var4 !== var3;
 28:
                    if(!var2) { _fun0029_ip = 79; continue _fun0029 }
 31:
                    var2 = _closure2_slot123;
                    var4 = undefined;
                    var2 = var2.bind(var4)();
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 70;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.clearChannelDimensions;
                    var1 = _closure2_slot9;
                    var1 = var2.bind(var3)(var1);
 79:
                    var1 = undefined;
                    return var1;
                }
            };
            r122 = r125.bind(var41)(r122, r123);
            r123 = var41.useEffect;
            r122 = new Array(3);
            r122[0] = r124;
            r122[1] = var40;
            r122[2] = var13;
            var40 = function() {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                    var2 = _closure2_slot129;
                    var2 = !var2;
                    if(!var2) { _fun0030_ip = 17; continue _fun0030 }
 13:
                    var2 = _closure2_slot70;
 17:
                    if(!var2) { _fun0030_ip = 40; continue _fun0030 }
 20:
                    var3 = _closure2_slot104;
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
            var40 = r123.bind(var41)(var40, r122);
            r122 = var41.useEffect;
            var40 = new Array(8);
            var40[0] = var8;
            var40[1] = var10;
            var40[2] = var9;
            var40[3] = var38;
            var40[4] = var33;
            var40[5] = var65;
            var40[6] = r121;
            var40[7] = var34;
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
                    var13 = _closure2_slot9;
                    var12 = _closure2_slot8;
                    var11 = _closure2_slot108;
                    var15 = var10;
                    var4 = var15[var9](var14, var13, var12, var11, var10);
                    if(!var4) { _fun0031_ip = 163; continue _fun0031 }
 60:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.scrollToTop;
                    var5 = _closure2_slot102;
                    var4 = _closure2_slot59;
                    var3 = false;
                    var3 = var6.bind(var7)(var5, var4, var3);
                    var3 = _closure2_slot130;
                    var5 = null;
                    var3 = var5 == var3;
                    var4 = undefined;
                    if(var3) { _fun0031_ip = 125; continue _fun0031 }
 115:
                    var3 = _closure2_slot130;
                    var4 = var3.jumpSequenceId;
 125:
                    var3 = _closure2_slot8;
                    var5 = var5 == var3;
                    var3 = undefined;
                    if(var5) { _fun0031_ip = 148; continue _fun0031 }
 138:
                    var5 = _closure2_slot8;
                    var3 = var5.jumpSequenceId;
 148:
                    if(!(var4 === var3)) { _fun0031_ip = 163; continue _fun0031 }
 152:
                    var3 = _closure2_slot109;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
 163:
                    return var1;
                }
            };
            var34 = r122.bind(var41)(var34, var40);
            var40 = var41.useEffect;
            var34 = new Array(167);
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
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5828; continue _fun0004 }
 5822:
            var67 = var42.channelThreadsVersion;
 5828:
            var34[61] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5847; continue _fun0004 }
 5841:
            var67 = var42.rsvpVersion;
 5847:
            var34[62] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5866; continue _fun0004 }
 5860:
            var67 = var42.repliedIds;
 5866:
            var34[63] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5885; continue _fun0004 }
 5879:
            var67 = var42.hasLoadedExperiments;
 5885:
            var34[64] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5904; continue _fun0004 }
 5898:
            var67 = var42.communicationDisabledVersion;
 5904:
            var34[65] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5923; continue _fun0004 }
 5917:
            var67 = var42.failedMessagesVersion;
 5923:
            var34[66] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5942; continue _fun0004 }
 5936:
            var67 = var42.interactionStates;
 5942:
            var34[67] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5961; continue _fun0004 }
 5955:
            var67 = var42.interactionComponentStates;
 5961:
            var34[68] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5980; continue _fun0004 }
 5974:
            var67 = var42.interactionComponentStatesVersion;
 5980:
            var34[69] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 5999; continue _fun0004 }
 5993:
            var67 = var42.shouldDisableInteractiveComponents;
 5999:
            var34[70] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6018; continue _fun0004 }
 6012:
            var67 = var42.channelPolls;
 6018:
            var34[71] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6037; continue _fun0004 }
 6031:
            var67 = var42.activityInstanceIds;
 6037:
            var34[72] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6056; continue _fun0004 }
 6050:
            var67 = var42.activityParticipants;
 6056:
            var34[73] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6075; continue _fun0004 }
 6069:
            var67 = var42.activityInstancePresenceDetails;
 6075:
            var34[74] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6094; continue _fun0004 }
 6088:
            var67 = var42.messagesWithActivitiesLaunching;
 6094:
            var34[75] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6113; continue _fun0004 }
 6107:
            var67 = var42.invalidApplicationIds;
 6113:
            var34[76] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6132; continue _fun0004 }
 6126:
            var67 = var42.applicationAssetFetchingIds;
 6132:
            var34[77] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6151; continue _fun0004 }
 6145:
            var67 = var42.appDirectoryEmbedApplications;
 6151:
            var34[78] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6170; continue _fun0004 }
 6164:
            var67 = var42.invalidAppDirectoryEmbedApplicationIds;
 6170:
            var34[79] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6189; continue _fun0004 }
 6183:
            var67 = var42.appDirectoryEmbedApplicationFetchStates;
 6189:
            var34[80] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6208; continue _fun0004 }
 6202:
            var67 = var42.lazyCacheStatus;
 6208:
            var34[81] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6227; continue _fun0004 }
 6221:
            var67 = var42.isFollowingForumPost;
 6227:
            var34[82] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6246; continue _fun0004 }
 6240:
            var67 = var42.showMediaPostSharePrompt;
 6246:
            var34[83] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6265; continue _fun0004 }
 6259:
            var67 = var42.referralTrialOfferIds;
 6265:
            var34[84] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6284; continue _fun0004 }
 6278:
            var67 = var42.trialOffer;
 6284:
            var34[85] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6303; continue _fun0004 }
 6297:
            var67 = var42.isPremiumTier2User;
 6303:
            var34[86] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6322; continue _fun0004 }
 6316:
            var67 = var42.messageAuthorActivities;
 6322:
            var34[87] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6341; continue _fun0004 }
 6335:
            var67 = var42.activityInviteMessageIds;
 6341:
            var34[88] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6360; continue _fun0004 }
 6354:
            var67 = var42.resolvingGiftCodes;
 6360:
            var34[89] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6379; continue _fun0004 }
 6373:
            var67 = var42.resolvedGiftCodes;
 6379:
            var34[90] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6398; continue _fun0004 }
 6392:
            var67 = var42.acceptingGiftCodes;
 6398:
            var34[91] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6417; continue _fun0004 }
 6411:
            var67 = var42.mediaPostPreviewEmbeds;
 6417:
            var34[92] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6436; continue _fun0004 }
 6430:
            var67 = var42.explicitMediaFalsePositiveInfo;
 6436:
            var34[93] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6455; continue _fun0004 }
 6449:
            var67 = var42.guildTemplates;
 6455:
            var34[94] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6474; continue _fun0004 }
 6468:
            var67 = var42.buildOverrides;
 6474:
            var34[95] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6493; continue _fun0004 }
 6487:
            var67 = var42.quests;
 6493:
            var34[96] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6512; continue _fun0004 }
 6506:
            var67 = var42.isFetchingCurrentQuests;
 6512:
            var34[97] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6531; continue _fun0004 }
 6525:
            var67 = var42.showPushFeedback;
 6531:
            var34[98] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6550; continue _fun0004 }
 6544:
            var67 = var42.forwardGuildsVersion;
 6550:
            var34[99] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6569; continue _fun0004 }
 6563:
            var67 = var42.renderCommunicationDisabled;
 6569:
            var34[100] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6588; continue _fun0004 }
 6582:
            var67 = var42.editingMessageId;
 6588:
            var34[101] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6607; continue _fun0004 }
 6601:
            var67 = var42.replyingMessageId;
 6607:
            var34[102] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6626; continue _fun0004 }
 6620:
            var67 = var42.oldestUnreadMessageId;
 6626:
            var34[103] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6645; continue _fun0004 }
 6639:
            var67 = var42.isCallActive;
 6645:
            var34[104] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6664; continue _fun0004 }
 6658:
            var67 = var42.voiceStateChannelId;
 6664:
            var34[105] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6683; continue _fun0004 }
 6677:
            var67 = var42.participantsLength;
 6683:
            var34[106] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6702; continue _fun0004 }
 6696:
            var67 = var42.applications;
 6702:
            var34[107] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6721; continue _fun0004 }
 6715:
            var67 = var42.invites;
 6721:
            var34[108] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6740; continue _fun0004 }
 6734:
            var67 = var42.isSpamMessageRequest;
 6740:
            var34[109] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6759; continue _fun0004 }
 6753:
            var67 = var42.isMessageRequest;
 6759:
            var34[110] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6778; continue _fun0004 }
 6772:
            var67 = var42.currentUserCommunicationDisabled;
 6778:
            var34[111] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6797; continue _fun0004 }
 6791:
            var67 = var42.androidKeyboardHeight;
 6797:
            var34[112] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6816; continue _fun0004 }
 6810:
            var67 = var42.inlineAttachmentMedia;
 6816:
            var34[113] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6835; continue _fun0004 }
 6829:
            var67 = var42.inlineEmbedMedia;
 6835:
            var34[114] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6854; continue _fun0004 }
 6848:
            var67 = var42.renderEmbeds;
 6854:
            var34[115] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6873; continue _fun0004 }
 6867:
            var67 = var42.renderReactions;
 6873:
            var34[116] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6892; continue _fun0004 }
 6886:
            var67 = var42.animateEmoji;
 6892:
            var34[117] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6911; continue _fun0004 }
 6905:
            var67 = var42.animateStickers;
 6911:
            var34[118] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6930; continue _fun0004 }
 6924:
            var67 = var42.gifAutoPlay;
 6930:
            var34[119] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6949; continue _fun0004 }
 6943:
            var67 = var42.containerWidth;
 6949:
            var34[120] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6968; continue _fun0004 }
 6962:
            var67 = var42.guildSystemChannelFlags;
 6968:
            var34[121] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 6987; continue _fun0004 }
 6981:
            var67 = var42.userSettingsLocale;
 6987:
            var34[122] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 7006; continue _fun0004 }
 7000:
            var67 = var42.roleStyle;
 7006:
            var34[123] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 7025; continue _fun0004 }
 7019:
            var67 = var42.canSendMessages;
 7025:
            var34[124] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 7044; continue _fun0004 }
 7038:
            var67 = var42.selectedSummary;
 7044:
            var34[125] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 7063; continue _fun0004 }
 7057:
            var67 = var42.shouldObscureSpoiler;
 7063:
            var34[126] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 7082; continue _fun0004 }
 7076:
            var67 = var42.shouldFilterKeywords;
 7082:
            var34[127] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 7101; continue _fun0004 }
 7095:
            var67 = var42.isStaff;
 7101:
            var34[128] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 7120; continue _fun0004 }
 7114:
            var67 = var42.messageShortcutsEnabled;
 7120:
            var34[129] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 7139; continue _fun0004 }
 7133:
            var67 = var42.isAgeVerified;
 7139:
            var34[130] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 7157; continue _fun0004 }
 7152:
            var67 = var42.theme;
 7157:
            var34[131] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 7176; continue _fun0004 }
 7170:
            var67 = var42.threadStartingReferenceMessage;
 7176:
            var34[132] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 7195; continue _fun0004 }
 7189:
            var67 = var42.unloadedContentEntryMessageIds;
 7195:
            var34[133] = var67;
            var68 = var5 == var42;
            var67 = undefined;
            if(var68) { _fun0004_ip = 7214; continue _fun0004 }
 7208:
            var67 = var42.guildInviteColorsFetched;
 7214:
            var34[134] = var67;
            var34[135] = var66;
            var34[136] = var65;
            var65 = var32.isAtBottom;
            var34[137] = var65;
            var34[138] = var64;
            var65 = var5 == var42;
            var64 = undefined;
            if(var65) { _fun0004_ip = 7255; continue _fun0004 }
 7249:
            var64 = var42.uploads;
 7255:
            var34[139] = var64;
            var34[140] = var63;
            var34[141] = var62;
            var34[142] = var20;
            var34[143] = var61;
            var34[144] = var60;
            var34[145] = var59;
            var34[146] = var58;
            var34[147] = var57;
            var34[148] = var56;
            var34[149] = var55;
            var34[150] = var54;
            var34[151] = var53;
            var34[152] = var52;
            var34[153] = var37;
            var53 = var5 == var42;
            var52 = undefined;
            if(var53) { _fun0004_ip = 7330; continue _fun0004 }
 7324:
            var52 = var42.shouldForceRender;
 7330:
            var34[154] = var52;
            var34[155] = var51;
            var34[156] = var50;
            var34[157] = var25;
            var34[158] = var49;
            var34[159] = var48;
            var34[160] = var47;
            var34[161] = var46;
            var34[162] = var45;
            var34[163] = var44;
            var34[164] = var7;
            var34[165] = var43;
            var43 = var5 == var42;
            var5 = undefined;
            if(var43) { _fun0004_ip = 7393; continue _fun0004 }
 7387:
            var5 = var42.guildEmojis;
 7393:
            var34[166] = var5;
            var5 = function() {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                    var2 = _closure2_slot13;
                    var8 = null;
                    if(!(var8 != var2)) { _fun0032_ip = 4190; continue _fun0032 }
 18:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var4 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 43; continue _fun0032 }
 33:
                    var2 = _closure2_slot127;
                    var5 = var2.inlineAttachmentMedia;
 43:
                    var2 = _closure2_slot14;
                    var14 = var5 !== var2;
                    if(var14) { _fun0032_ip = 85; continue _fun0032 }
 54:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 77; continue _fun0032 }
 67:
                    var2 = _closure2_slot127;
                    var5 = var2.inlineEmbedMedia;
 77:
                    var2 = _closure2_slot15;
                    var14 = var5 !== var2;
 85:
                    if(var14) { _fun0032_ip = 119; continue _fun0032 }
 88:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 111; continue _fun0032 }
 101:
                    var2 = _closure2_slot127;
                    var5 = var2.renderEmbeds;
 111:
                    var2 = _closure2_slot16;
                    var14 = var5 !== var2;
 119:
                    if(var14) { _fun0032_ip = 153; continue _fun0032 }
 122:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 145; continue _fun0032 }
 135:
                    var2 = _closure2_slot127;
                    var5 = var2.renderReactions;
 145:
                    var2 = _closure2_slot17;
                    var14 = var5 !== var2;
 153:
                    if(var14) { _fun0032_ip = 187; continue _fun0032 }
 156:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 179; continue _fun0032 }
 169:
                    var2 = _closure2_slot127;
                    var5 = var2.animateEmoji;
 179:
                    var2 = _closure2_slot18;
                    var14 = var5 !== var2;
 187:
                    if(var14) { _fun0032_ip = 221; continue _fun0032 }
 190:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 213; continue _fun0032 }
 203:
                    var2 = _closure2_slot127;
                    var5 = var2.animateStickers;
 213:
                    var2 = _closure2_slot19;
                    var14 = var5 !== var2;
 221:
                    if(var14) { _fun0032_ip = 255; continue _fun0032 }
 224:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 247; continue _fun0032 }
 237:
                    var2 = _closure2_slot127;
                    var5 = var2.gifAutoPlay;
 247:
                    var2 = _closure2_slot20;
                    var14 = var5 !== var2;
 255:
                    if(var14) { _fun0032_ip = 289; continue _fun0032 }
 258:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 281; continue _fun0032 }
 271:
                    var2 = _closure2_slot127;
                    var5 = var2.containerWidth;
 281:
                    var2 = _closure2_slot94;
                    var14 = var5 !== var2;
 289:
                    if(var14) { _fun0032_ip = 323; continue _fun0032 }
 292:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 315; continue _fun0032 }
 305:
                    var2 = _closure2_slot127;
                    var5 = var2.guildSystemChannelFlags;
 315:
                    var2 = _closure2_slot12;
                    var14 = var5 !== var2;
 323:
                    if(var14) { _fun0032_ip = 357; continue _fun0032 }
 326:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 349; continue _fun0032 }
 339:
                    var2 = _closure2_slot127;
                    var5 = var2.userSettingsLocale;
 349:
                    var2 = _closure2_slot76;
                    var14 = var5 !== var2;
 357:
                    if(var14) { _fun0032_ip = 391; continue _fun0032 }
 360:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 383; continue _fun0032 }
 373:
                    var2 = _closure2_slot127;
                    var5 = var2.roleStyle;
 383:
                    var2 = _closure2_slot60;
                    var14 = var5 !== var2;
 391:
                    if(var14) { _fun0032_ip = 425; continue _fun0032 }
 394:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 417; continue _fun0032 }
 407:
                    var2 = _closure2_slot127;
                    var5 = var2.canSendMessages;
 417:
                    var2 = _closure2_slot49;
                    var14 = var5 !== var2;
 425:
                    if(var14) { _fun0032_ip = 459; continue _fun0032 }
 428:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 451; continue _fun0032 }
 441:
                    var2 = _closure2_slot127;
                    var5 = var2.showPushFeedback;
 451:
                    var2 = _closure2_slot80;
                    var14 = var5 !== var2;
 459:
                    if(var14) { _fun0032_ip = 507; continue _fun0032 }
 462:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 485; continue _fun0032 }
 475:
                    var2 = _closure2_slot127;
                    var5 = var2.selectedSummary;
 485:
                    var2 = _closure2_slot86;
                    if(!(var8 == var2)) { _fun0032_ip = 499; continue _fun0032 }
 493:
                    var2 = _closure2_slot85;
                    _fun0032_ip = 503; continue _fun0032;
 499:
                    var2 = _closure2_slot86;
 503:
                    var14 = var5 !== var2;
 507:
                    if(var14) { _fun0032_ip = 541; continue _fun0032 }
 510:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 533; continue _fun0032 }
 523:
                    var2 = _closure2_slot127;
                    var5 = var2.shouldObscureSpoiler;
 533:
                    var2 = _closure2_slot89;
                    var14 = var5 !== var2;
 541:
                    if(var14) { _fun0032_ip = 575; continue _fun0032 }
 544:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 567; continue _fun0032 }
 557:
                    var2 = _closure2_slot127;
                    var5 = var2.shouldFilterKeywords;
 567:
                    var2 = _closure2_slot98;
                    var14 = var5 !== var2;
 575:
                    if(var14) { _fun0032_ip = 609; continue _fun0032 }
 578:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 601; continue _fun0032 }
 591:
                    var2 = _closure2_slot127;
                    var5 = var2.explicitMediaFalsePositiveInfo;
 601:
                    var2 = _closure2_slot93;
                    var14 = var5 !== var2;
 609:
                    if(var14) { _fun0032_ip = 643; continue _fun0032 }
 612:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 635; continue _fun0032 }
 625:
                    var2 = _closure2_slot127;
                    var5 = var2.isStaff;
 635:
                    var2 = _closure2_slot97;
                    var14 = var5 !== var2;
 643:
                    if(var14) { _fun0032_ip = 677; continue _fun0032 }
 646:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 669; continue _fun0032 }
 659:
                    var2 = _closure2_slot127;
                    var5 = var2.messageShortcutsEnabled;
 669:
                    var2 = _closure2_slot22;
                    var14 = var5 !== var2;
 677:
                    if(var14) { _fun0032_ip = 711; continue _fun0032 }
 680:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 703; continue _fun0032 }
 693:
                    var2 = _closure2_slot127;
                    var5 = var2.isAgeVerified;
 703:
                    var2 = _closure2_slot90;
                    var14 = var5 !== var2;
 711:
                    if(var14) { _fun0032_ip = 744; continue _fun0032 }
 714:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 736; continue _fun0032 }
 727:
                    var2 = _closure2_slot127;
                    var5 = var2.theme;
 736:
                    var2 = _closure2_slot21;
                    var14 = var5 !== var2;
 744:
                    if(var14) { _fun0032_ip = 788; continue _fun0032 }
 747:
                    var2 = _closure2_slot127;
                    var2 = var8 == var2;
                    var5 = undefined;
                    if(var2) { _fun0032_ip = 770; continue _fun0032 }
 760:
                    var2 = _closure2_slot127;
                    var5 = var2.shouldForceRender;
 770:
                    var2 = _closure2_slot107;
                    var2 = var5 !== var2;
                    if(!var2) { _fun0032_ip = 785; continue _fun0032 }
 781:
                    var2 = _closure2_slot107;
 785:
                    var14 = var2;
 788:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 67;
                    var5 = var7[var5];
                    var9 = var6.bind(var4)(var5);
                    var7 = {};
                    var5 = _closure2_slot8;
                    var7['messages'] = var5;
                    var5 = _closure2_slot82;
                    var7['androidKeyboardHeight'] = var5;
                    var5 = _closure2_slot46;
                    var7['replyingMessageId'] = var5;
                    var6 = {};
                    var5 = _closure2_slot103;
                    var5 = var5.isAtBottom;
                    var6['isAtBottom'] = var5;
                    var10 = _closure2_slot111;
                    var5 = var10.getPreviousMessages;
                    var5 = var5.bind(var10)();
                    var5 = var8 != var5;
                    var6['hasPreviousMessages'] = var5;
                    var5 = {};
                    var10 = _closure2_slot130;
                    if(!(var8 == var10)) { _fun0032_ip = 896; continue _fun0032 }
 890:
                    var10 = _closure2_slot8;
                    _fun0032_ip = 900; continue _fun0032;
 896:
                    var10 = _closure2_slot130;
 900:
                    var5['messages'] = var10;
                    var10 = _closure2_slot127;
                    var11 = var8 == var10;
                    var10 = undefined;
                    if(var11) { _fun0032_ip = 928; continue _fun0032 }
 918:
                    var11 = _closure2_slot127;
                    var10 = var11.androidKeyboardHeight;
 928:
                    if(!(var8 == var10)) { _fun0032_ip = 936; continue _fun0032 }
 932:
                    var10 = _closure2_slot82;
 936:
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
                    if(var5) { _fun0032_ip = 1007; continue _fun0032 }
 997:
                    var5 = _closure2_slot127;
                    var13 = var5.resolvingGiftCodes;
 1007:
                    var5 = _closure2_slot53;
                    var33 = var13 !== var5;
                    if(var33) { _fun0032_ip = 1049; continue _fun0032 }
 1018:
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1041; continue _fun0032 }
 1031:
                    var5 = _closure2_slot127;
                    var13 = var5.resolvedGiftCodes;
 1041:
                    var5 = _closure2_slot54;
                    var33 = var13 !== var5;
 1049:
                    if(var33) { _fun0032_ip = 1083; continue _fun0032 }
 1052:
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1075; continue _fun0032 }
 1065:
                    var5 = _closure2_slot127;
                    var13 = var5.acceptingGiftCodes;
 1075:
                    var5 = _closure2_slot55;
                    var33 = var13 !== var5;
 1083:
                    var _closure3_slot0 = var33;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var32 = undefined;
                    if(var5) { _fun0032_ip = 1110; continue _fun0032 }
 1100:
                    var5 = _closure2_slot127;
                    var32 = var5.uploads;
 1110:
                    var31 = _closure2_slot57;
                    var13 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var15 = 96;
                    var5 = var5[var15];
                    var16 = var13.bind(var4)(var5);
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1157; continue _fun0032 }
 1147:
                    var5 = _closure2_slot127;
                    var13 = var5.interactionStates;
 1157:
                    var5 = _closure2_slot62;
                    var5 = var16.bind(var4)(var13, var5);
                    var24 = !var5;
                    var _closure3_slot1 = var24;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1197; continue _fun0032 }
 1187:
                    var5 = _closure2_slot127;
                    var13 = var5.channelPolls;
 1197:
                    var5 = _closure2_slot92;
                    var21 = var13 !== var5;
                    var _closure3_slot2 = var21;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1232; continue _fun0032 }
 1222:
                    var5 = _closure2_slot127;
                    var13 = var5.interactionComponentStatesVersion;
 1232:
                    var5 = _closure2_slot64;
                    var23 = var13 !== var5;
                    var _closure3_slot3 = var23;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1267; continue _fun0032 }
 1257:
                    var5 = _closure2_slot127;
                    var13 = var5.shouldDisableInteractiveComponents;
 1267:
                    var5 = _closure2_slot91;
                    var5 = var13 !== var5;
                    var _closure3_slot4 = var5;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1302; continue _fun0032 }
 1292:
                    var5 = _closure2_slot127;
                    var13 = var5.communicationDisabledVersion;
 1302:
                    var5 = _closure2_slot73;
                    var29 = var13 !== var5;
                    var _closure3_slot5 = var29;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1337; continue _fun0032 }
 1327:
                    var5 = _closure2_slot127;
                    var13 = var5.failedMessagesVersion;
 1337:
                    var5 = _closure2_slot72;
                    var28 = var13 !== var5;
                    var _closure3_slot6 = var28;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1372; continue _fun0032 }
 1362:
                    var5 = _closure2_slot127;
                    var13 = var5.renderCommunicationDisabled;
 1372:
                    var5 = _closure2_slot74;
                    var25 = var13 !== var5;
                    var _closure3_slot7 = var25;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var27 = undefined;
                    if(var5) { _fun0032_ip = 1407; continue _fun0032 }
 1397:
                    var5 = _closure2_slot127;
                    var27 = var5.forwardGuildsVersion;
 1407:
                    var26 = _closure2_slot99;
                    var13 = _closure2_slot1;
                    var5 = var13.isForumPost;
                    var22 = var5.bind(var13)();
                    if(!var22) { _fun0032_ip = 1459; continue _fun0032 }
 1428:
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1451; continue _fun0032 }
 1441:
                    var5 = _closure2_slot127;
                    var13 = var5.isFollowingForumPost;
 1451:
                    var5 = _closure2_slot78;
                    var22 = var13 !== var5;
 1459:
                    var _closure3_slot8 = var22;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1486; continue _fun0032 }
 1476:
                    var5 = _closure2_slot127;
                    var13 = var5.showMediaPostSharePrompt;
 1486:
                    var5 = _closure2_slot79;
                    var20 = var13 !== var5;
                    var _closure3_slot9 = var20;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1521; continue _fun0032 }
 1511:
                    var5 = _closure2_slot127;
                    var13 = var5.unloadedContentEntryMessageIds;
 1521:
                    var5 = _closure2_slot95;
                    var19 = var13 !== var5;
                    var _closure3_slot10 = var19;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1556; continue _fun0032 }
 1546:
                    var5 = _closure2_slot127;
                    var13 = var5.invalidApplicationIds;
 1556:
                    var5 = _closure2_slot29;
                    var5 = var13 !== var5;
                    var _closure3_slot11 = var5;
                    var13 = _closure2_slot127;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0032_ip = 1591; continue _fun0032 }
 1581:
                    var13 = _closure2_slot127;
                    var16 = var13.activityInstanceIds;
 1591:
                    var13 = _closure2_slot31;
                    var30 = var16 !== var13;
                    if(var30) { _fun0032_ip = 1633; continue _fun0032 }
 1602:
                    var13 = _closure2_slot127;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0032_ip = 1625; continue _fun0032 }
 1615:
                    var13 = _closure2_slot127;
                    var16 = var13.activityParticipants;
 1625:
                    var13 = _closure2_slot33;
                    var30 = var16 !== var13;
 1633:
                    if(var30) { _fun0032_ip = 1667; continue _fun0032 }
 1636:
                    var13 = _closure2_slot127;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0032_ip = 1659; continue _fun0032 }
 1649:
                    var13 = _closure2_slot127;
                    var16 = var13.applicationAssetFetchingIds;
 1659:
                    var13 = _closure2_slot30;
                    var30 = var16 !== var13;
 1667:
                    if(var30) { _fun0032_ip = 1701; continue _fun0032 }
 1670:
                    var13 = _closure2_slot127;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0032_ip = 1693; continue _fun0032 }
 1683:
                    var13 = _closure2_slot127;
                    var16 = var13.activityInstancePresenceDetails;
 1693:
                    var13 = _closure2_slot32;
                    var30 = var16 !== var13;
 1701:
                    if(var30) { _fun0032_ip = 1735; continue _fun0032 }
 1704:
                    var13 = _closure2_slot127;
                    var13 = var8 == var13;
                    var16 = undefined;
                    if(var13) { _fun0032_ip = 1727; continue _fun0032 }
 1717:
                    var13 = _closure2_slot127;
                    var16 = var13.messagesWithActivitiesLaunching;
 1727:
                    var13 = _closure2_slot34;
                    var30 = var16 !== var13;
 1735:
                    if(var30) { _fun0032_ip = 1741; continue _fun0032 }
 1738:
                    var30 = var5;
 1741:
                    var _closure3_slot12 = var30;
                    var13 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var15];
                    var17 = var13.bind(var4)(var5);
                    var16 = var17.areArraysShallowEqual;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1791; continue _fun0032 }
 1781:
                    var5 = _closure2_slot127;
                    var13 = var5.activityInviteMessageIds;
 1791:
                    if(!(var8 == var13)) { _fun0032_ip = 1799; continue _fun0032 }
 1795:
                    var13 = new Array(0);
 1799:
                    var5 = _closure2_slot24;
                    if(!(var8 == var5)) { _fun0032_ip = 1813; continue _fun0032 }
 1807:
                    var5 = new Array(0);
                    _fun0032_ip = 1817; continue _fun0032;
 1813:
                    var5 = _closure2_slot24;
 1817:
                    var5 = var16.bind(var17)(var13, var5);
                    var18 = !var5;
                    var _closure3_slot13 = var18;
                    var13 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var15];
                    var16 = var13.bind(var4)(var5);
                    var15 = var16.areArraysShallowEqual;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1876; continue _fun0032 }
 1866:
                    var5 = _closure2_slot127;
                    var13 = var5.referralTrialOfferIds;
 1876:
                    if(!(var8 == var13)) { _fun0032_ip = 1884; continue _fun0032 }
 1880:
                    var13 = new Array(0);
 1884:
                    var5 = _closure2_slot42;
                    if(!(var8 == var5)) { _fun0032_ip = 1898; continue _fun0032 }
 1892:
                    var5 = new Array(0);
                    _fun0032_ip = 1902; continue _fun0032;
 1898:
                    var5 = _closure2_slot42;
 1902:
                    var5 = var15.bind(var16)(var13, var5);
                    var17 = !var5;
                    if(var17) { _fun0032_ip = 1945; continue _fun0032 }
 1914:
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1937; continue _fun0032 }
 1927:
                    var5 = _closure2_slot127;
                    var13 = var5.trialOffer;
 1937:
                    var5 = _closure2_slot43;
                    var17 = var13 !== var5;
 1945:
                    if(var17) { _fun0032_ip = 1979; continue _fun0032 }
 1948:
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 1971; continue _fun0032 }
 1961:
                    var5 = _closure2_slot127;
                    var13 = var5.isPremiumTier2User;
 1971:
                    var5 = _closure2_slot44;
                    var17 = var13 !== var5;
 1979:
                    var _closure3_slot14 = var17;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 2006; continue _fun0032 }
 1996:
                    var5 = _closure2_slot127;
                    var13 = var5.guildInviteColorsFetched;
 2006:
                    var5 = _closure2_slot100;
                    var16 = var13 !== var5;
                    var _closure3_slot15 = var16;
                    var5 = _closure2_slot127;
                    var5 = var8 == var5;
                    var13 = undefined;
                    if(var5) { _fun0032_ip = 2041; continue _fun0032 }
 2031:
                    var5 = _closure2_slot127;
                    var13 = var5.guildEmojis;
 2041:
                    var5 = _closure2_slot101;
                    var13 = var13 !== var5;
                    var _closure3_slot16 = var13;
                    var5 = _closure2_slot81;
                    var34 = 'initializing';
                    var5 = var34 !== var5;
                    var15 = _closure2_slot127;
                    var35 = var8 == var15;
                    var15 = undefined;
                    if(var35) { _fun0032_ip = 2090; continue _fun0032 }
 2080:
                    var35 = _closure2_slot127;
                    var15 = var35.lazyCacheStatus;
 2090:
                    var15 = var34 !== var15;
                    if(var14) { _fun0032_ip = 3380; continue _fun0032 }
 2100:
                    if(var33) { _fun0032_ip = 3380; continue _fun0032 }
 2106:
                    if(!(var32 === var31)) { _fun0032_ip = 3380; continue _fun0032 }
 2113:
                    if(var30) { _fun0032_ip = 3380; continue _fun0032 }
 2119:
                    var31 = _closure2_slot130;
                    var30 = _closure2_slot8;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2134:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2157; continue _fun0032 }
 2147:
                    var30 = _closure2_slot127;
                    var31 = var30.editingMessageId;
 2157:
                    var30 = _closure2_slot45;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2168:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2191; continue _fun0032 }
 2181:
                    var30 = _closure2_slot127;
                    var31 = var30.replyingMessageId;
 2191:
                    var30 = _closure2_slot46;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2202:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2225; continue _fun0032 }
 2215:
                    var30 = _closure2_slot127;
                    var31 = var30.voiceStateChannelId;
 2225:
                    var30 = _closure2_slot51;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2236:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2259; continue _fun0032 }
 2249:
                    var30 = _closure2_slot127;
                    var31 = var30.messageAuthorActivities;
 2259:
                    var30 = _closure2_slot23;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2270:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2293; continue _fun0032 }
 2283:
                    var30 = _closure2_slot127;
                    var31 = var30.oldestUnreadMessageId;
 2293:
                    var30 = _closure2_slot47;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2304:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2327; continue _fun0032 }
 2317:
                    var30 = _closure2_slot127;
                    var31 = var30.invites;
 2327:
                    var30 = _closure2_slot25;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2338:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2361; continue _fun0032 }
 2351:
                    var30 = _closure2_slot127;
                    var31 = var30.appDirectoryEmbedApplications;
 2361:
                    var30 = _closure2_slot26;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2372:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2395; continue _fun0032 }
 2385:
                    var30 = _closure2_slot127;
                    var31 = var30.invalidAppDirectoryEmbedApplicationIds;
 2395:
                    var30 = _closure2_slot27;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2406:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2429; continue _fun0032 }
 2419:
                    var30 = _closure2_slot127;
                    var31 = var30.appDirectoryEmbedApplicationFetchStates;
 2429:
                    var30 = _closure2_slot28;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2440:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2463; continue _fun0032 }
 2453:
                    var30 = _closure2_slot127;
                    var31 = var30.guildTemplates;
 2463:
                    var30 = _closure2_slot37;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2474:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2497; continue _fun0032 }
 2487:
                    var30 = _closure2_slot127;
                    var31 = var30.buildOverrides;
 2497:
                    var30 = _closure2_slot38;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2508:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2531; continue _fun0032 }
 2521:
                    var30 = _closure2_slot127;
                    var31 = var30.quests;
 2531:
                    var30 = _closure2_slot39;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2542:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2565; continue _fun0032 }
 2555:
                    var30 = _closure2_slot127;
                    var31 = var30.isFetchingCurrentQuests;
 2565:
                    var30 = _closure2_slot40;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2576:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2599; continue _fun0032 }
 2589:
                    var30 = _closure2_slot127;
                    var31 = var30.participantsLength;
 2599:
                    var30 = _closure2_slot56;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2610:
                    var31 = _closure2_slot68;
                    var30 = _closure2_slot130;
                    var30 = var8 != var30;
                    if(!var30) { _fun0032_ip = 2651; continue _fun0032 }
 2625:
                    var32 = _closure2_slot130;
                    var32 = var32.ready;
                    if(var32) { _fun0032_ip = 2648; continue _fun0032 }
 2638:
                    var33 = _closure2_slot130;
                    var32 = var33.cached;
 2648:
                    var30 = var32;
 2651:
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2658:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2681; continue _fun0032 }
 2671:
                    var30 = _closure2_slot127;
                    var31 = var30.channelThreadsVersion;
 2681:
                    var30 = _closure2_slot61;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2692:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2715; continue _fun0032 }
 2705:
                    var30 = _closure2_slot127;
                    var31 = var30.rsvpVersion;
 2715:
                    var30 = _closure2_slot71;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2726:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2749; continue _fun0032 }
 2739:
                    var30 = _closure2_slot127;
                    var31 = var30.repliedIds;
 2749:
                    var30 = _closure2_slot58;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2760:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2783; continue _fun0032 }
 2773:
                    var30 = _closure2_slot127;
                    var31 = var30.hasLoadedExperiments;
 2783:
                    var30 = _closure2_slot65;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2794:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2817; continue _fun0032 }
 2807:
                    var30 = _closure2_slot127;
                    var31 = var30.isMessageRequest;
 2817:
                    var30 = _closure2_slot67;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2828:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2851; continue _fun0032 }
 2841:
                    var30 = _closure2_slot127;
                    var31 = var30.isSpamMessageRequest;
 2851:
                    var30 = _closure2_slot66;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2862:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2885; continue _fun0032 }
 2875:
                    var30 = _closure2_slot127;
                    var31 = var30.currentUserCommunicationDisabled;
 2885:
                    var30 = _closure2_slot75;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2896:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2919; continue _fun0032 }
 2909:
                    var30 = _closure2_slot127;
                    var31 = var30.userSettingsLocale;
 2919:
                    var30 = _closure2_slot76;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2930:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 2953; continue _fun0032 }
 2943:
                    var30 = _closure2_slot127;
                    var31 = var30.selectedSummary;
 2953:
                    var30 = _closure2_slot86;
                    if(!(var8 == var30)) { _fun0032_ip = 2967; continue _fun0032 }
 2961:
                    var30 = _closure2_slot85;
                    _fun0032_ip = 2971; continue _fun0032;
 2967:
                    var30 = _closure2_slot86;
 2971:
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 2978:
                    var30 = _closure2_slot127;
                    var30 = var8 == var30;
                    var31 = undefined;
                    if(var30) { _fun0032_ip = 3001; continue _fun0032 }
 2991:
                    var30 = _closure2_slot127;
                    var31 = var30.showPushFeedback;
 3001:
                    var30 = _closure2_slot80;
                    if(!(var31 === var30)) { _fun0032_ip = 3380; continue _fun0032 }
 3012:
                    if(!(var15 === var5)) { _fun0032_ip = 3380; continue _fun0032 }
 3019:
                    if(var29) { _fun0032_ip = 3380; continue _fun0032 }
 3025:
                    if(var28) { _fun0032_ip = 3380; continue _fun0032 }
 3031:
                    if(!(var27 === var26)) { _fun0032_ip = 3380; continue _fun0032 }
 3038:
                    if(var25) { _fun0032_ip = 3380; continue _fun0032 }
 3044:
                    if(var24) { _fun0032_ip = 3380; continue _fun0032 }
 3050:
                    if(var23) { _fun0032_ip = 3380; continue _fun0032 }
 3056:
                    if(var22) { _fun0032_ip = 3380; continue _fun0032 }
 3062:
                    if(!(var8 == var11)) { _fun0032_ip = 3380; continue _fun0032 }
 3069:
                    if(!(var8 == var9)) { _fun0032_ip = 3380; continue _fun0032 }
 3076:
                    var22 = _closure2_slot127;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0032_ip = 3099; continue _fun0032 }
 3089:
                    var22 = _closure2_slot127;
                    var23 = var22.androidKeyboardHeight;
 3099:
                    var22 = _closure2_slot82;
                    if(!(var23 === var22)) { _fun0032_ip = 3380; continue _fun0032 }
 3110:
                    var22 = _closure2_slot127;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0032_ip = 3133; continue _fun0032 }
 3123:
                    var22 = _closure2_slot127;
                    var23 = var22.mediaPostPreviewEmbeds;
 3133:
                    var22 = _closure2_slot36;
                    if(!(var23 === var22)) { _fun0032_ip = 3380; continue _fun0032 }
 3144:
                    var22 = _closure2_slot127;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0032_ip = 3167; continue _fun0032 }
 3157:
                    var22 = _closure2_slot127;
                    var23 = var22.shouldObscureSpoiler;
 3167:
                    var22 = _closure2_slot89;
                    if(!(var23 === var22)) { _fun0032_ip = 3380; continue _fun0032 }
 3178:
                    var22 = _closure2_slot127;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0032_ip = 3201; continue _fun0032 }
 3191:
                    var22 = _closure2_slot127;
                    var23 = var22.shouldFilterKeywords;
 3201:
                    var22 = _closure2_slot98;
                    if(!(var23 === var22)) { _fun0032_ip = 3380; continue _fun0032 }
 3212:
                    var22 = _closure2_slot127;
                    var22 = var8 == var22;
                    var23 = undefined;
                    if(var22) { _fun0032_ip = 3235; continue _fun0032 }
 3225:
                    var22 = _closure2_slot127;
                    var23 = var22.shouldDisableInteractiveComponents;
 3235:
                    var22 = _closure2_slot91;
                    if(!(var23 === var22)) { _fun0032_ip = 3380; continue _fun0032 }
 3246:
                    if(var21) { _fun0032_ip = 3380; continue _fun0032 }
 3252:
                    if(var20) { _fun0032_ip = 3380; continue _fun0032 }
 3258:
                    var20 = _closure2_slot127;
                    var20 = var8 == var20;
                    var21 = undefined;
                    if(var20) { _fun0032_ip = 3281; continue _fun0032 }
 3271:
                    var20 = _closure2_slot127;
                    var21 = var20.threadStartingReferenceMessage;
 3281:
                    var20 = _closure2_slot52;
                    if(!(var21 === var20)) { _fun0032_ip = 3380; continue _fun0032 }
 3289:
                    if(var19) { _fun0032_ip = 3380; continue _fun0032 }
 3292:
                    var19 = _closure2_slot127;
                    var19 = var8 == var19;
                    var20 = undefined;
                    if(var19) { _fun0032_ip = 3315; continue _fun0032 }
 3305:
                    var19 = _closure2_slot127;
                    var20 = var19.applications;
 3315:
                    var19 = _closure2_slot35;
                    if(!(var20 === var19)) { _fun0032_ip = 3380; continue _fun0032 }
 3323:
                    if(var18) { _fun0032_ip = 3380; continue _fun0032 }
 3326:
                    if(var17) { _fun0032_ip = 3380; continue _fun0032 }
 3329:
                    if(var16) { _fun0032_ip = 3380; continue _fun0032 }
 3332:
                    if(var13) { _fun0032_ip = 3380; continue _fun0032 }
 3335:
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var13 = 82;
                    var13 = var17[var13];
                    var18 = var16.bind(var4)(var13);
                    var17 = var18.recordTimings;
                    var16 = _closure2_slot9;
                    var13 = _closure2_slot8;
                    var13 = var17.bind(var18)(var16, var13);
                    _fun0032_ip = 4190; continue _fun0032;
 3380:
                    var13 = global;
                    var13 = var13.Set;
                    var16 = var13.prototype;
                    var16 = Object.create(var16, {constructor: {value: var13}});
                    var39 = var16;
                    var13 = new var39[var13](var38);
                    var13 = var13 instanceof Object ? var13 : var16;
                    var _closure3_slot17 = var13;
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0032_ip = 3435; continue _fun0032 }
 3425:
                    var16 = _closure2_slot127;
                    var17 = var16.editingMessageId;
 3435:
                    var16 = _closure2_slot45;
                    if(!(var17 !== var16)) { _fun0032_ip = 3525; continue _fun0032 }
 3443:
                    var16 = _closure2_slot45;
                    if(!(var8 != var16)) { _fun0032_ip = 3465; continue _fun0032 }
 3451:
                    var17 = var13.add;
                    var16 = _closure2_slot45;
                    var16 = var17.bind(var13)(var16);
 3465:
                    var16 = _closure2_slot127;
                    var17 = var8 == var16;
                    var16 = undefined;
                    if(var17) { _fun0032_ip = 3488; continue _fun0032 }
 3478:
                    var17 = _closure2_slot127;
                    var16 = var17.editingMessageId;
 3488:
                    if(!(var8 != var16)) { _fun0032_ip = 3525; continue _fun0032 }
 3492:
                    var17 = var13.add;
                    var16 = _closure2_slot127;
                    var18 = var8 == var16;
                    var16 = undefined;
                    if(var18) { _fun0032_ip = 3520; continue _fun0032 }
 3510:
                    var18 = _closure2_slot127;
                    var16 = var18.editingMessageId;
 3520:
                    var16 = var17.bind(var13)(var16);
 3525:
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0032_ip = 3548; continue _fun0032 }
 3538:
                    var16 = _closure2_slot127;
                    var17 = var16.replyingMessageId;
 3548:
                    var16 = _closure2_slot46;
                    if(!(var17 !== var16)) { _fun0032_ip = 3638; continue _fun0032 }
 3556:
                    var16 = _closure2_slot46;
                    if(!(var8 != var16)) { _fun0032_ip = 3578; continue _fun0032 }
 3564:
                    var17 = var13.add;
                    var16 = _closure2_slot46;
                    var16 = var17.bind(var13)(var16);
 3578:
                    var16 = _closure2_slot127;
                    var17 = var8 == var16;
                    var16 = undefined;
                    if(var17) { _fun0032_ip = 3601; continue _fun0032 }
 3591:
                    var17 = _closure2_slot127;
                    var16 = var17.replyingMessageId;
 3601:
                    if(!(var8 != var16)) { _fun0032_ip = 3638; continue _fun0032 }
 3605:
                    var17 = var13.add;
                    var16 = _closure2_slot127;
                    var18 = var8 == var16;
                    var16 = undefined;
                    if(var18) { _fun0032_ip = 3633; continue _fun0032 }
 3623:
                    var18 = _closure2_slot127;
                    var16 = var18.replyingMessageId;
 3633:
                    var16 = var17.bind(var13)(var16);
 3638:
                    var17 = _closure2_slot68;
                    var16 = _closure2_slot130;
                    var16 = var8 != var16;
                    if(!var16) { _fun0032_ip = 3679; continue _fun0032 }
 3653:
                    var18 = _closure2_slot130;
                    var18 = var18.ready;
                    if(var18) { _fun0032_ip = 3676; continue _fun0032 }
 3666:
                    var19 = _closure2_slot130;
                    var18 = var19.cached;
 3676:
                    var16 = var18;
 3679:
                    if(!(var17 === var16)) { _fun0032_ip = 3776; continue _fun0032 }
 3683:
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0032_ip = 3706; continue _fun0032 }
 3696:
                    var16 = _closure2_slot127;
                    var17 = var16.isCallActive;
 3706:
                    var16 = _closure2_slot50;
                    if(!(var17 === var16)) { _fun0032_ip = 3776; continue _fun0032 }
 3714:
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0032_ip = 3737; continue _fun0032 }
 3727:
                    var16 = _closure2_slot127;
                    var17 = var16.voiceStateChannelId;
 3737:
                    var16 = _closure2_slot51;
                    if(!(var17 === var16)) { _fun0032_ip = 3776; continue _fun0032 }
 3745:
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0032_ip = 3768; continue _fun0032 }
 3758:
                    var16 = _closure2_slot127;
                    var17 = var16.participantsLength;
 3768:
                    var16 = _closure2_slot56;
                    if(!(var17 !== var16)) { _fun0032_ip = 3857; continue _fun0032 }
 3776:
                    var17 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var16 = 89;
                    var16 = var18[var16];
                    var19 = var17.bind(var4)(var16);
                    var18 = var19.find;
                    var17 = _closure2_slot8;
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
                    if(!(var8 != var16)) { _fun0032_ip = 3857; continue _fun0032 }
 3842:
                    var17 = var13.add;
                    var16 = var16.id;
                    var16 = var17.bind(var13)(var16);
 3857:
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0032_ip = 3880; continue _fun0032 }
 3870:
                    var16 = _closure2_slot127;
                    var17 = var16.channelThreadsVersion;
 3880:
                    var16 = _closure2_slot61;
                    var16 = var17 !== var16;
                    var _closure3_slot18 = var16;
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0032_ip = 3915; continue _fun0032 }
 3905:
                    var16 = _closure2_slot127;
                    var17 = var16.rsvpVersion;
 3915:
                    var16 = _closure2_slot71;
                    var16 = var17 !== var16;
                    var _closure3_slot19 = var16;
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0032_ip = 3950; continue _fun0032 }
 3940:
                    var16 = _closure2_slot127;
                    var17 = var16.repliedIds;
 3950:
                    var16 = _closure2_slot58;
                    var16 = var17 !== var16;
                    var _closure3_slot20 = var16;
                    var16 = _closure2_slot127;
                    var16 = var8 == var16;
                    var17 = undefined;
                    if(var16) { _fun0032_ip = 3985; continue _fun0032 }
 3975:
                    var16 = _closure2_slot127;
                    var17 = var16.hasLoadedExperiments;
 3985:
                    var16 = _closure2_slot65;
                    var16 = var17 !== var16;
                    var _closure3_slot21 = var16;
                    var16 = _closure2_slot127;
                    var17 = var8 == var16;
                    var16 = undefined;
                    if(var17) { _fun0032_ip = 4020; continue _fun0032 }
 4010:
                    var17 = _closure2_slot127;
                    var16 = var17.communicationDisabledVersion;
 4020:
                    var17 = var8 != var16;
                    var8 = -1;
                    if(!var17) { _fun0032_ip = 4036; continue _fun0032 }
 4033:
                    var8 = var16;
 4036:
                    var _closure3_slot22 = var8;
                    var8 = !var15;
                    if(var15) { _fun0032_ip = 4049; continue _fun0032 }
 4046:
                    var8 = var5;
 4049:
                    var _closure3_slot23 = var8;
                    var15 = _closure2_slot8;
                    var5 = var15.forEach;
                    var3 = function(arg1) {
                        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                            var1 = arg1;
                            var3 = _closure3_slot21;
                            if(!var3) { _fun0033_ip = 38; continue _fun0033 }
 13:
                            var4 = var1.type;
                            var3 = _closure1_slot53;
                            var3 = var3.USER_JOIN;
                            if(!(var4 !== var3)) { _fun0033_ip = 2858; continue _fun0033 }
 38:
                            var3 = _closure3_slot20;
                            if(!var3) { _fun0033_ip = 108; continue _fun0033 }
 45:
                            var4 = var1.type;
                            var3 = _closure1_slot53;
                            var3 = var3.REPLY;
                            if(!(var4 === var3)) { _fun0033_ip = 108; continue _fun0033 }
 67:
                            var3 = var1.messageReference;
                            var4 = null;
                            if(!(var4 != var3)) { _fun0033_ip = 108; continue _fun0033 }
 79:
                            var5 = _closure2_slot58;
                            var4 = var5.has;
                            var3 = var3.message_id;
                            var3 = var4.bind(var5)(var3);
                            if(var3) { _fun0033_ip = 2835; continue _fun0033 }
 108:
                            var3 = _closure3_slot18;
                            if(!var3) { _fun0033_ip = 145; continue _fun0033 }
 115:
                            var4 = var1.hasFlag;
                            var3 = _closure1_slot54;
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
                            var3 = _closure1_slot53;
                            var3 = var3.EMOJI_ADDED;
                            if(!(var4 !== var3)) { _fun0033_ip = 2772; continue _fun0033 }
 204:
                            var3 = _closure3_slot7;
                            if(var3) { _fun0033_ip = 2751; continue _fun0033 }
 214:
                            var3 = _closure3_slot5;
                            if(!var3) { _fun0033_ip = 275; continue _fun0033 }
 221:
                            var5 = _closure2_slot10;
                            var4 = null;
                            if(!(var4 != var5)) { _fun0033_ip = 275; continue _fun0033 }
 234:
                            var6 = _closure1_slot41;
                            var5 = _closure2_slot10;
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
                            var3 = _closure2_slot13;
                            if(!(var4 !== var3)) { _fun0033_ip = 2727; continue _fun0033 }
 307:
                            var3 = _closure3_slot1;
                            if(!var3) { _fun0033_ip = 389; continue _fun0033 }
 314:
                            var4 = _closure2_slot127;
                            var6 = null;
                            var4 = var6 == var4;
                            var5 = undefined;
                            if(var4) { _fun0033_ip = 342; continue _fun0033 }
 332:
                            var4 = _closure2_slot127;
                            var5 = var4.interactionStates;
 342:
                            if(!(var6 == var5)) { _fun0033_ip = 348; continue _fun0033 }
 346:
                            var5 = {};
 348:
                            var4 = var1.id;
                            var4 = var5[var4];
                            var5 = _closure2_slot62;
                            if(!(var6 == var5)) { _fun0033_ip = 369; continue _fun0033 }
 365:
                            var5 = {};
                            _fun0033_ip = 373; continue _fun0033;
 369:
                            var5 = _closure2_slot62;
 373:
                            var3 = var1.id;
                            var3 = var5[var3];
                            if(!(var4 === var3)) { _fun0033_ip = 2704; continue _fun0033 }
 389:
                            var3 = _closure3_slot3;
                            if(!var3) { _fun0033_ip = 487; continue _fun0033 }
 396:
                            var3 = _closure2_slot127;
                            var7 = null;
                            var6 = var7 == var3;
                            var3 = undefined;
                            if(var6) { _fun0033_ip = 448; continue _fun0033 }
 414:
                            var6 = _closure2_slot127;
                            var9 = var6.interactionComponentStates;
                            var6 = var7 == var9;
                            var3 = undefined;
                            if(var6) { _fun0033_ip = 448; continue _fun0033 }
 433:
                            var8 = var9.get;
                            var6 = var1.id;
                            var3 = var8.bind(var9)(var6);
 448:
                            var6 = _closure2_slot63;
                            var6 = var7 == var6;
                            var4 = undefined;
                            if(var6) { _fun0033_ip = 480; continue _fun0033 }
 461:
                            var7 = _closure2_slot63;
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
                            var4 = _closure2_slot127;
                            var6 = null;
                            var4 = var6 == var4;
                            var5 = undefined;
                            if(var4) { _fun0033_ip = 549; continue _fun0033 }
 539:
                            var4 = _closure2_slot127;
                            var5 = var4.channelPolls;
 549:
                            if(!(var6 == var5)) { _fun0033_ip = 555; continue _fun0033 }
 553:
                            var5 = {};
 555:
                            var4 = var1.id;
                            var4 = var5[var4];
                            var5 = _closure2_slot92;
                            if(!(var6 == var5)) { _fun0033_ip = 576; continue _fun0033 }
 572:
                            var5 = {};
                            _fun0033_ip = 580; continue _fun0033;
 576:
                            var5 = _closure2_slot92;
 580:
                            var3 = var1.id;
                            var3 = var5[var3];
                            if(!(var4 === var3)) { _fun0033_ip = 2634; continue _fun0033 }
 596:
                            var3 = _closure3_slot10;
                            if(!var3) { _fun0033_ip = 745; continue _fun0033 }
 606:
                            var4 = _closure2_slot127;
                            var6 = null;
                            var4 = var6 == var4;
                            var7 = undefined;
                            if(var4) { _fun0033_ip = 634; continue _fun0033 }
 624:
                            var4 = _closure2_slot127;
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
                            var5 = _closure2_slot95;
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
                            var6 = _closure2_slot95;
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
                            var3 = _closure2_slot9;
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
                            var5 = _closure2_slot127;
                            var6 = var3 == var5;
                            var7 = undefined;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 951; continue _fun0033 }
 941:
                            var6 = _closure2_slot127;
                            var5 = var6.messageAuthorActivities;
 951:
                            if(!(var3 == var5)) { _fun0033_ip = 957; continue _fun0033 }
 955:
                            var5 = {};
 957:
                            var17['messageAuthorActivities'] = var5;
                            var16 = {};
                            var5 = _closure2_slot23;
                            if(!(var3 == var5)) { _fun0033_ip = 976; continue _fun0033 }
 972:
                            var5 = {};
                            _fun0033_ip = 980; continue _fun0033;
 976:
                            var5 = _closure2_slot23;
 980:
                            var16['messageAuthorActivities'] = var5;
                            var15 = {};
                            var5 = _closure2_slot127;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1010; continue _fun0033 }
 1000:
                            var6 = _closure2_slot127;
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
                            var5 = _closure2_slot127;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1070; continue _fun0033 }
 1060:
                            var6 = _closure2_slot127;
                            var5 = var6.appDirectoryEmbedApplications;
 1070:
                            if(!(var3 == var5)) { _fun0033_ip = 1076; continue _fun0033 }
 1074:
                            var5 = {};
 1076:
                            var15['appDirectoryEmbedApplications'] = var5;
                            var5 = _closure2_slot127;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1104; continue _fun0033 }
 1094:
                            var6 = _closure2_slot127;
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
                            var5 = _closure2_slot127;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1164; continue _fun0033 }
 1154:
                            var6 = _closure2_slot127;
                            var5 = var6.invalidApplicationIds;
 1164:
                            if(!(var3 == var5)) { _fun0033_ip = 1172; continue _fun0033 }
 1168:
                            var5 = new Array(0);
 1172:
                            var15['invalidApplicationIds'] = var5;
                            var5 = _closure2_slot127;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1200; continue _fun0033 }
 1190:
                            var6 = _closure2_slot127;
                            var5 = var6.activityParticipants;
 1200:
                            if(!(var3 == var5)) { _fun0033_ip = 1208; continue _fun0033 }
 1204:
                            var5 = new Array(0);
 1208:
                            var15['activityParticipants'] = var5;
                            var5 = _closure2_slot127;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1236; continue _fun0033 }
 1226:
                            var6 = _closure2_slot127;
                            var5 = var6.applicationAssetFetchingIds;
 1236:
                            if(!(var3 == var5)) { _fun0033_ip = 1244; continue _fun0033 }
 1240:
                            var5 = new Array(0);
 1244:
                            var15['applicationAssetFetchingIds'] = var5;
                            var5 = _closure2_slot127;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1272; continue _fun0033 }
 1262:
                            var6 = _closure2_slot127;
                            var5 = var6.appDirectoryEmbedApplicationFetchStates;
 1272:
                            if(!(var3 == var5)) { _fun0033_ip = 1278; continue _fun0033 }
 1276:
                            var5 = {};
 1278:
                            var15['appDirectoryEmbedApplicationFetchStates'] = var5;
                            var5 = _closure2_slot127;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1306; continue _fun0033 }
 1296:
                            var6 = _closure2_slot127;
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
                            var5 = _closure2_slot127;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1366; continue _fun0033 }
 1356:
                            var6 = _closure2_slot127;
                            var5 = var6.buildOverrides;
 1366:
                            if(!(var3 == var5)) { _fun0033_ip = 1372; continue _fun0033 }
 1370:
                            var5 = {};
 1372:
                            var15['buildOverrides'] = var5;
                            var5 = _closure2_slot127;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1400; continue _fun0033 }
 1390:
                            var6 = _closure2_slot127;
                            var5 = var6.quests;
 1400:
                            if(!(var3 == var5)) { _fun0033_ip = 1408; continue _fun0033 }
 1404:
                            var5 = new Array(0);
 1408:
                            var15['quests'] = var5;
                            var5 = _closure2_slot127;
                            var5 = var3 == var5;
                            var6 = undefined;
                            if(var5) { _fun0033_ip = 1436; continue _fun0033 }
 1426:
                            var5 = _closure2_slot127;
                            var6 = var5.isFetchingCurrentQuests;
 1436:
                            var5 = var3 != var6;
                            if(!var5) { _fun0033_ip = 1446; continue _fun0033 }
 1443:
                            var5 = var6;
 1446:
                            var15['isFetchingCurrentQuests'] = var5;
                            var5 = _closure2_slot127;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1474; continue _fun0033 }
 1464:
                            var6 = _closure2_slot127;
                            var5 = var6.applications;
 1474:
                            if(!(var3 == var5)) { _fun0033_ip = 1480; continue _fun0033 }
 1478:
                            var5 = {};
 1480:
                            var15['applications'] = var5;
                            var14 = {};
                            var5 = _closure2_slot25;
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
                            var5 = _closure2_slot25;
 1529:
                            var14['invites'] = var5;
                            var5 = _closure2_slot26;
                            if(!(var3 == var5)) { _fun0033_ip = 1546; continue _fun0033 }
 1542:
                            var5 = {};
                            _fun0033_ip = 1550; continue _fun0033;
 1546:
                            var5 = _closure2_slot26;
 1550:
                            var14['appDirectoryEmbedApplications'] = var5;
                            var5 = _closure2_slot27;
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
                            var5 = _closure2_slot27;
 1597:
                            var14['invalidAppDirectoryEmbedApplicationIds'] = var5;
                            var5 = _closure2_slot29;
                            if(!(var3 == var5)) { _fun0033_ip = 1616; continue _fun0033 }
 1610:
                            var5 = new Array(0);
                            _fun0033_ip = 1620; continue _fun0033;
 1616:
                            var5 = _closure2_slot29;
 1620:
                            var14['invalidApplicationIds'] = var5;
                            var5 = _closure2_slot33;
                            if(!(var3 == var5)) { _fun0033_ip = 1639; continue _fun0033 }
 1633:
                            var5 = new Array(0);
                            _fun0033_ip = 1643; continue _fun0033;
 1639:
                            var5 = _closure2_slot33;
 1643:
                            var14['activityParticipants'] = var5;
                            var5 = _closure2_slot30;
                            if(!(var3 == var5)) { _fun0033_ip = 1662; continue _fun0033 }
 1656:
                            var5 = new Array(0);
                            _fun0033_ip = 1666; continue _fun0033;
 1662:
                            var5 = _closure2_slot30;
 1666:
                            var14['applicationAssetFetchingIds'] = var5;
                            var5 = _closure2_slot28;
                            if(!(var3 == var5)) { _fun0033_ip = 1683; continue _fun0033 }
 1679:
                            var5 = {};
                            _fun0033_ip = 1687; continue _fun0033;
 1683:
                            var5 = _closure2_slot28;
 1687:
                            var14['appDirectoryEmbedApplicationFetchStates'] = var5;
                            var5 = _closure2_slot37;
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
                            var5 = _closure2_slot37;
 1734:
                            var14['guildTemplates'] = var5;
                            var5 = _closure2_slot38;
                            if(!(var3 == var5)) { _fun0033_ip = 1751; continue _fun0033 }
 1747:
                            var5 = {};
                            _fun0033_ip = 1755; continue _fun0033;
 1751:
                            var5 = _closure2_slot38;
 1755:
                            var14['buildOverrides'] = var5;
                            var5 = _closure2_slot39;
                            if(!(var3 == var5)) { _fun0033_ip = 1774; continue _fun0033 }
 1768:
                            var5 = new Array(0);
                            _fun0033_ip = 1778; continue _fun0033;
 1774:
                            var5 = _closure2_slot39;
 1778:
                            var14['quests'] = var5;
                            var5 = _closure2_slot40;
                            var5 = var3 != var5;
                            if(!var5) { _fun0033_ip = 1798; continue _fun0033 }
 1794:
                            var5 = _closure2_slot40;
 1798:
                            var14['isFetchingCurrentQuests'] = var5;
                            var5 = _closure2_slot35;
                            if(!(var3 == var5)) { _fun0033_ip = 1815; continue _fun0033 }
 1811:
                            var5 = {};
                            _fun0033_ip = 1819; continue _fun0033;
 1815:
                            var5 = _closure2_slot35;
 1819:
                            var14['applications'] = var5;
                            var13 = {};
                            var5 = _closure2_slot127;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1849; continue _fun0033 }
 1839:
                            var6 = _closure2_slot127;
                            var5 = var6.resolvingGiftCodes;
 1849:
                            if(!(var3 == var5)) { _fun0033_ip = 1857; continue _fun0033 }
 1853:
                            var5 = new Array(0);
 1857:
                            var13['resolvingGiftCodes'] = var5;
                            var5 = _closure2_slot127;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1885; continue _fun0033 }
 1875:
                            var6 = _closure2_slot127;
                            var5 = var6.resolvedGiftCodes;
 1885:
                            if(!(var3 == var5)) { _fun0033_ip = 1893; continue _fun0033 }
 1889:
                            var5 = new Array(0);
 1893:
                            var13['resolvedGiftCodes'] = var5;
                            var5 = _closure2_slot127;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 1921; continue _fun0033 }
 1911:
                            var6 = _closure2_slot127;
                            var5 = var6.acceptingGiftCodes;
 1921:
                            if(!(var3 == var5)) { _fun0033_ip = 1929; continue _fun0033 }
 1925:
                            var5 = new Array(0);
 1929:
                            var13['acceptingGiftCodes'] = var5;
                            var12 = {};
                            var5 = _closure2_slot53;
                            if(!(var3 == var5)) { _fun0033_ip = 1950; continue _fun0033 }
 1944:
                            var5 = new Array(0);
                            _fun0033_ip = 1954; continue _fun0033;
 1950:
                            var5 = _closure2_slot53;
 1954:
                            var12['resolvingGiftCodes'] = var5;
                            var5 = _closure2_slot54;
                            if(!(var3 == var5)) { _fun0033_ip = 1973; continue _fun0033 }
 1967:
                            var5 = new Array(0);
                            _fun0033_ip = 1977; continue _fun0033;
 1973:
                            var5 = _closure2_slot54;
 1977:
                            var12['resolvedGiftCodes'] = var5;
                            var5 = _closure2_slot55;
                            if(!(var3 == var5)) { _fun0033_ip = 1996; continue _fun0033 }
 1990:
                            var5 = new Array(0);
                            _fun0033_ip = 2000; continue _fun0033;
 1996:
                            var5 = _closure2_slot55;
 2000:
                            var12['acceptingGiftCodes'] = var5;
                            var10 = {};
                            var5 = _closure2_slot127;
                            var6 = var3 == var5;
                            var5 = undefined;
                            if(var6) { _fun0033_ip = 2030; continue _fun0033 }
 2020:
                            var6 = _closure2_slot127;
                            var5 = var6.mediaPostPreviewEmbeds;
 2030:
                            if(!(var3 == var5)) { _fun0033_ip = 2036; continue _fun0033 }
 2034:
                            var5 = {};
 2036:
                            var10['mediaPostPreviewEmbeds'] = var5;
                            var9 = {};
                            var5 = _closure2_slot36;
                            if(!(var3 == var5)) { _fun0033_ip = 2055; continue _fun0033 }
 2051:
                            var5 = {};
                            _fun0033_ip = 2059; continue _fun0033;
 2055:
                            var5 = _closure2_slot36;
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
                            var5 = _closure1_slot53;
                            var5 = var5.THREAD_STARTER_MESSAGE;
                            var5 = var6 === var5;
                            if(!var5) { _fun0033_ip = 2320; continue _fun0033 }
 2289:
                            var6 = _closure2_slot127;
                            var6 = var3 == var6;
                            var8 = undefined;
                            if(var6) { _fun0033_ip = 2312; continue _fun0033 }
 2302:
                            var6 = _closure2_slot127;
                            var8 = var6.threadStartingReferenceMessage;
 2312:
                            var6 = _closure2_slot52;
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
                            var6 = _closure2_slot127;
                            var6 = var3 == var6;
                            var8 = undefined;
                            if(var6) { _fun0033_ip = 2384; continue _fun0033 }
 2374:
                            var6 = _closure2_slot127;
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
                            var5 = _closure2_slot42;
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
                    var5 = _closure2_slot121;
                    var3 = {};
                    var3['forced'] = var14;
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
                    var5 = _closure2_slot110;
                    var3 = false;
                    var3 = var5.bind(var4)(var3);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 82;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.recordTimings;
                    var2 = _closure2_slot9;
                    var1 = _closure2_slot8;
                    var1 = var3.bind(var4)(var2, var1);
 4190:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var40.bind(var41)(var5, var34);
            var5 = _closure1_slot5;
            var40 = var5.useEffect;
            var34 = new Array(2);
            var34[0] = var10;
            var34[1] = var18;
            var18 = function() {
                var1 = function() {
                    var5 = _closure1_slot13;
                    var4 = _closure2_slot9;
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    var2 = false;
                    var2 = var5.bind(var1)(var4, var3, var2);
                    return var1;
                };
                return var1;
            };
            var18 = var40.bind(var5)(var18, var34);
            var34 = var5.useImperativeHandle;
            var18 = new Array(14);
            var18[0] = var19;
            var18[1] = var23;
            var18[2] = var39;
            var18[3] = var33;
            var18[4] = var9;
            var18[5] = var8;
            var18[6] = var10;
            var18[7] = var38;
            var18[8] = var37;
            var18[9] = var36;
            var18[10] = var35;
            var18[11] = var15;
            var18[12] = var7;
            var18[13] = var13;
            var15 = arg2;
            var13 = function() {
                var1 = {};
                var4 = _closure2_slot119;
                var1['findMessageIndex'] = var4;
                var4 = _closure2_slot121;
                var1['updateRows'] = var4;
                var4 = _closure2_slot120;
                var1['scrollToMessageId'] = var4;
                var4 = function scrollToBottom() {
                    _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
                        var6 = arguments[0];
                        var3 = undefined;
                        if(!(var6 === var3)) { _fun0034_ip = 11; continue _fun0034 }
 9:
                        var6 = true;
 11:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 82;
                        var1 = var4[var1];
                        var5 = var2.bind(var3)(var1);
                        var4 = var5.scrollToBottom;
                        var10 = _closure2_slot102;
                        var9 = _closure2_slot59;
                        var8 = function() {
                            var3 = _closure2_slot104;
                            var2 = {};
                            var1 = true;
                            var2['isAtBottom'] = var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var11 = var5;
                        var7 = var6;
                        var1 = var11[var4](var10, var9, var8, var7, var6);
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
                        var2 = _closure2_slot102;
                        var1 = _closure2_slot59;
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
                        var10 = _closure2_slot102;
                        var9 = _closure2_slot59;
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
                    var2 = _closure2_slot102;
                    var1 = _closure2_slot111;
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
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.jumpToPresent;
                    var3 = _closure2_slot8;
                    var2 = _closure2_slot1;
                    var1 = function() {
                        var3 = _closure2_slot104;
                        var2 = {};
                        var1 = true;
                        var2['isAtBottom'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var4.bind(var5)(var3, var2, var1);
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
                        var5 = _closure2_slot9;
                        var1['channelId'] = var5;
                        var5 = _closure2_slot8;
                        var1['messages'] = var5;
                        var5 = _closure2_slot108;
                        var1['hasJumpedToOriginalPost'] = var5;
                        var5 = _closure2_slot59;
                        var1['useReducedMotion'] = var5;
                        var6 = _closure2_slot47;
                        var5 = null;
                        var6 = var5 != var6;
                        if(!var6) { _fun0037_ip = 96; continue _fun0037 }
 92:
                        var5 = _closure2_slot47;
 96:
                        var1['oldestUnreadMessageId'] = var5;
                        var6 = _closure2_slot111;
                        var5 = var6.getPreviousRows;
                        var5 = var5.bind(var6)();
                        var1['chatManagerRows'] = var5;
                        var5 = _closure2_slot119;
                        var1['findMessageIndex'] = var5;
                        var4 = _closure2_slot102;
                        var1['chatRef'] = var4;
                        var4 = function loadMoreBefore() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 82;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.loadMoreBefore;
                            var3 = _closure2_slot9;
                            var2 = _closure2_slot8;
                            var1 = function(arg1) {
                                var3 = _closure2_slot104;
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
                    var1 = _closure2_slot102;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['getChatRef'] = var3;
                var3 = _closure2_slot122;
                var1['maybeRescrollToMessageId'] = var3;
                var3 = _closure2_slot123;
                var1['clearRows'] = var3;
                var2 = _closure2_slot124;
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
                        var7 = _closure2_slot59;
                        var2['useReducedMotion'] = var7;
                        var7 = _closure2_slot103;
                        var7 = var7.isNearTop;
                        var2['isNearTop'] = var7;
                        var7 = _closure2_slot8;
                        var2['messages'] = var7;
                        var7 = _closure2_slot119;
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
                                var2 = _closure2_slot102;
                                var1 = _closure2_slot59;
                                var1 = var3.bind(var4)(var2, var1, var5);
                                return var1;
                            }
                        };
                        var2['scrollToTop'] = var7;
                        var6 = _closure2_slot102;
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
                var4 = _closure2_slot105;
                var3 = _closure2_slot121;
                var3 = var5.bind(var6)(var7, var4, var3);
                var2 = _closure2_slot106;
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
                var2 = _closure2_slot4;
                var1 = _closure2_slot83;
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
                        var6 = _closure2_slot111;
                        var5 = 'chatManager';
                        var1[var5] = var6;
                        var6 = _closure2_slot88;
                        var5 = 'shouldTrackAnnouncementMessageViews';
                        var1[var5] = var6;
                        var6 = _closure2_slot10;
                        var5 = 'guildId';
                        var1[var5] = var6;
                        var6 = _closure2_slot9;
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
                        var6 = _closure2_slot111;
                        var5 = 'chatManager';
                        var1[var5] = var6;
                        var6 = _closure2_slot88;
                        var5 = 'shouldTrackAnnouncementMessageViews';
                        var1[var5] = var6;
                        var6 = _closure2_slot10;
                        var5 = 'guildId';
                        var1[var5] = var6;
                        var6 = _closure2_slot9;
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
            var3 = _closure1_slot61;
            var2 = _closure1_slot60;
            var1 = {};
            var8 = _closure1_slot59;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 100;
            var5 = var10[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['ref'] = var29;
            var29 = true;
            var5['inverted'] = var29;
            var5['alwaysRespectKeyboard'] = var28;
            var5['scrollEnabled'] = var27;
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
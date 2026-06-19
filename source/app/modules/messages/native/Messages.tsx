// app/modules/messages/native/Messages.tsx
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot67;
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
            var7 = _closure1_slot67;
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
    var _closure1_slot66 = var1;
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
    var _closure1_slot67 = var1;
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
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
    var4 = var8.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var9 = var4.useChannelPollInteractions;
    var _closure1_slot25 = var9;
    var4 = var4.useMessagePollInteractions;
    var _closure1_slot26 = var4;
    var4 = 23;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
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
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot51 = var4;
    var4 = 48;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot52 = var4;
    var4 = 49;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot53 = var4;
    var4 = 50;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot54 = var4;
    var4 = 51;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot55 = var4;
    var4 = 52;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot56 = var4;
    var4 = 53;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ActivityActionTypes;
    var _closure1_slot57 = var8;
    var8 = var4.ChannelTypesSets;
    var _closure1_slot58 = var8;
    var8 = var4.ME;
    var _closure1_slot59 = var8;
    var8 = var4.MessageTypes;
    var _closure1_slot60 = var8;
    var4 = var4.Permissions;
    var _closure1_slot61 = var4;
    var4 = 54;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot62 = var8;
    var4 = var4.PremiumTypes;
    var _closure1_slot63 = var4;
    var4 = 55;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot64 = var8;
    var4 = var4.jsxs;
    var _closure1_slot65 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var9 = arg1;
            var7 = var9.channel;
            var _closure2_slot0 = var7;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 56;
            var8 = var2[var3];
            var4 = undefined;
            var13 = var5.bind(var4)(var8);
            var12 = var13.useStateFromStores;
            var8 = _closure1_slot45;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = var7.id;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                var3 = _closure1_slot45;
                var2 = var3.getMessages;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var89 = var12.bind(var13)(var11, var8, var10);
            var _closure2_slot1 = var89;
            var100 = var7.id;
            var _closure2_slot2 = var100;
            var8 = var7.getGuildId;
            r101 = var8.bind(var7)();
            var _closure2_slot3 = r101;
            var2 = var2[var3];
            var10 = var5.bind(var4)(var2);
            var8 = var10.useStateFromStores;
            var2 = _closure1_slot42;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot42;
                var2 = var3.getGuild;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var8.bind(var10)(var5, var2);
            var _closure2_slot4 = var12;
            var10 = null;
            var2 = var10 == var12;
            var48 = undefined;
            if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var48 = var12.systemChannelFlags;
case 36:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = var13[var3];
            var15 = var8.bind(var4)(var2);
            var14 = var15.useStateFromStores;
            var2 = _closure1_slot36;
            var11 = new Array(1);
            var11[0] = var2;
            var5 = function() {
                var2 = _closure1_slot36;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            r100 = var14.bind(var15)(var11, var5, var2);
            var _closure2_slot5 = r100;
            var2 = 61;
            var5 = var13[var2];
            var5 = var8.bind(var4)(var5);
            var11 = var5.InlineAttachmentMedia;
            var5 = var11.useSetting;
            r108 = var5.bind(var11)();
            var5 = var13[var2];
            var5 = var8.bind(var4)(var5);
            var11 = var5.InlineEmbedMedia;
            var5 = var11.useSetting;
            r107 = var5.bind(var11)();
            var5 = var13[var2];
            var5 = var8.bind(var4)(var5);
            var11 = var5.RenderEmbeds;
            var5 = var11.useSetting;
            r106 = var5.bind(var11)();
            var5 = var13[var2];
            var5 = var8.bind(var4)(var5);
            var11 = var5.RenderReactions;
            var5 = var11.useSetting;
            r105 = var5.bind(var11)();
            var5 = var13[var2];
            var5 = var8.bind(var4)(var5);
            var11 = var5.DeveloperMode;
            var5 = var11.useSetting;
            r104 = var5.bind(var11)();
            var5 = var13[var2];
            var5 = var8.bind(var4)(var5);
            var11 = var5.AnimateEmoji;
            var5 = var11.useSetting;
            r113 = var5.bind(var11)();
            var5 = var13[var2];
            var5 = var8.bind(var4)(var5);
            var11 = var5.AnimateStickers;
            var5 = var11.useSetting;
            r112 = var5.bind(var11)();
            var5 = var13[var2];
            var5 = var8.bind(var4)(var5);
            var11 = var5.GifAutoPlay;
            var5 = var11.useSetting;
            r110 = var5.bind(var11)();
            var2 = var13[var2];
            var2 = var8.bind(var4)(var2);
            var5 = var2.TimestampHourCycle;
            var2 = var5.useSetting;
            r109 = var2.bind(var5)();
            var2 = var13[var3];
            var15 = var8.bind(var4)(var2);
            var14 = var15.useStateFromStores;
            var2 = _closure1_slot35;
            var11 = new Array(1);
            var11[0] = var2;
            var5 = function() {
                var1 = _closure1_slot35;
                var1 = var1.theme;
                return var1;
            };
            var2 = new Array(0);
            r116 = var14.bind(var15)(var11, var5, var2);
            var2 = 62;
            var2 = var13[var2];
            var5 = var8.bind(var4)(var2);
            var2 = var5.useIsMessageSwipeActionsEnabled;
            var17 = var2.bind(var5)();
            var2 = function useMessageAuthorActivities(arg1) {
                var3 = arg1;
                var _closure3_slot0 = var3;
                var6 = _closure1_slot4;
                var5 = var6.useMemo;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() {
                    var1 = {};
                    var _closure4_slot0 = var1;
                    var4 = _closure3_slot0;
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var1 = arg1;
                            var2 = var1.author;
                            var3 = null;
                            var2 = var3 != var2;
                            if(!var2) { _fun0005_ip = 34; continue _fun0005 }
case 38:
                            var4 = var1.activity;
                            var2 = var3 != var4;
case 34:
                            if(!var2) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                            var2 = _closure4_slot0;
                            var1 = var1.author;
                            var1 = var1.id;
                            var2[var1] = var3;
case 39:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var6 = var5.bind(var6)(var3, var4);
                var _closure3_slot1 = var6;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 56;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.useStateFromStoresObject;
                var2 = _closure1_slot47;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 57;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.mapValues;
                    var2 = _closure3_slot1;
                    var1 = function(arg1, arg2) {
                        var3 = _closure1_slot47;
                        var2 = var3.getPrimaryActivity;
                        var1 = arg2;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1 = var4.bind(var5)(var3, var1, var2);
                return var1;
            };
            var95 = var2.bind(var4)(var89);
            var2 = function useFetchMessageApplications(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var4 = _closure1_slot4;
                var5 = var4.useMemo;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() {
                    var1 = global;
                    var3 = var1.Set;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var7 = var4;
                    var3 = new var7[var3](var6);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var _closure4_slot0 = var3;
                    var5 = _closure3_slot0;
                    var4 = var5.forEach;
                    var2 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var1 = arg1;
                            var2 = var1.applicationId;
                            var4 = null;
                            var2 = var4 != var2;
                            if(!var2) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                            var3 = var1.application;
                            var2 = var4 == var3;
case 41:
                            if(!var2) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                            var3 = _closure4_slot0;
                            var2 = var3.add;
                            var1 = var1.applicationId;
                            var1 = var2.bind(var3)(var1);
case 43:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
                    var2 = var1.Array;
                    var1 = var2.from;
                    var1 = var1.bind(var2)(var3);
                    return var1;
                };
                var5 = var5.bind(var4)(var2, var3);
                var _closure3_slot1 = var5;
                var3 = var4.useRef;
                var2 = new Array(0);
                var2 = var3.bind(var4)(var2);
                var _closure3_slot2 = var2;
                var3 = var4.useEffect;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 58;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var6 = var7.areArraysShallowEqual;
                        var5 = _closure3_slot1;
                        var3 = _closure3_slot2;
                        var3 = var3.current;
                        var3 = var6.bind(var7)(var5, var3);
                        if(var3) { _fun0007_ip = 45; continue _fun0007 }
case 28:
                        var5 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var3 = 59;
                        var3 = var10[var3];
                        var7 = var5.bind(var1)(var3);
                        var6 = var7.fetchApplications;
                        var3 = 57;
                        var3 = var10[var3];
                        var5 = var5.bind(var1)(var3);
                        var3 = _closure3_slot1;
                        var8 = var5.bind(var1)(var3);
                        var5 = var8.filter;
                        var9 = _closure1_slot0;
                        var4 = 60;
                        var4 = var10[var4];
                        var4 = var9.bind(var1)(var4);
                        var4 = var4.isNotNullish;
                        var5 = var5.bind(var8)(var4);
                        var4 = var5.uniq;
                        var5 = var4.bind(var5)();
                        var4 = var5.value;
                        var5 = var4.bind(var5)();
                        var4 = false;
                        var4 = var6.bind(var7)(var5, var4);
                        var2 = _closure3_slot2;
                        var2['current'] = var3;
case 45:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var1 = undefined;
                return var1;
            };
            var2 = var2.bind(var4)(var89);
            var16 = _closure1_slot1;
            var2 = 63;
            var2 = var13[var2];
            var2 = var16.bind(var4)(var2);
            var2 = var2.bind(var4)(var89, var7);
            var15 = _closure1_slot3;
            var11 = 2;
            var2 = var15.bind(var4)(var2, var11);
            var14 = 0;
            var21 = var2[var14];
            var5 = 1;
            var2 = var2[var5];
            var2 = var13[var3];
            var22 = var8.bind(var4)(var2);
            var20 = var22.useStateFromStores;
            var2 = _closure1_slot44;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = function() {
                var2 = _closure1_slot44;
                var1 = var2.getInvites;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var94 = var20.bind(var22)(var19, var18, var2);
            var2 = 64;
            var2 = var13[var2];
            var18 = var8.bind(var4)(var2);
            var2 = var18.useFetchVoiceChannelInviteStartTimes;
            var2 = var2.bind(var18)(var94);
            var2 = var13[var3];
            var22 = var8.bind(var4)(var2);
            var20 = var22.useStateFromStoresObject;
            var2 = _closure1_slot16;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = function() {
                var1 = {};
                var3 = _closure1_slot16;
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
            var2 = var20.bind(var22)(var19, var18, var2);
            var93 = var2.appDirectoryEmbedApplications;
            var92 = var2.invalidAppDirectoryEmbedApplicationIds;
            var84 = var2.appDirectoryEmbedApplicationFetchStates;
            var2 = var13[var3];
            var20 = var8.bind(var4)(var2);
            var19 = var20.useStateFromStoresArray;
            var2 = _closure1_slot8;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getFetchingOrFailedFetchingIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var91 = var19.bind(var20)(var18, var2);
            var2 = var13[var3];
            var20 = var8.bind(var4)(var2);
            var19 = var20.useStateFromStoresArray;
            var2 = _closure1_slot7;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getFetchingIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var90 = var19.bind(var20)(var18, var2);
            var2 = var13[var3];
            var20 = var8.bind(var4)(var2);
            var19 = var20.useStateFromStoresArray;
            var2 = _closure1_slot54;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                var2 = _closure1_slot54;
                var1 = var2.getFetchingSkuIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var80 = var19.bind(var20)(var18, var2);
            var2 = var13[var3];
            var23 = var8.bind(var4)(var2);
            var22 = var23.useStateFromStoresArray;
            var2 = _closure1_slot6;
            var20 = new Array(1);
            var20[0] = var2;
            var19 = new Array(1);
            var19[0] = var100;
            var18 = function() {
                var4 = _closure1_slot6;
                var3 = var4.getEmbeddedActivitiesForChannel;
                var2 = _closure2_slot2;
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
            var87 = var22.bind(var23)(var20, var18, var19);
            var18 = var13[var3];
            var22 = var8.bind(var4)(var18);
            var20 = var22.useStateFromStoresArray;
            var19 = new Array(2);
            var19[0] = var2;
            var18 = _closure1_slot47;
            var19[1] = var18;
            var18 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var6 = function _loop(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
                            if(var6) { _fun0009_ip = 46; continue _fun0009 }
case 47:
                            var3 = var2.details;
case 46:
                            if(!(var4 != var3)) { _fun0009_ip = 48; continue _fun0009 }
case 49:
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
case 48:
                            return var1;
                        }
                    };
                    var3 = _closure1_slot66;
                    var5 = _closure1_slot6;
                    var4 = var5.getEmbeddedActivitiesForChannel;
                    var2 = _closure2_slot2;
                    var2 = var4.bind(var5)(var2);
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if(var2) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                    var2 = var3.value;
                    var2 = var6.bind(var5)(var2);
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0008_ip = 51; continue _fun0008 }
case 50:
                    return var1;
                }
            };
            var85 = var20.bind(var22)(var19, var18);
            var18 = var13[var3];
            var22 = var8.bind(var4)(var18);
            var20 = var22.useStateFromStoresArray;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = function() {
                var1 = global;
                var3 = var1.Set;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var7 = var4;
                var3 = new var7[var3](var6);
                var3 = var3 instanceof Object ? var3 : var4;
                var _closure3_slot0 = var3;
                var5 = _closure1_slot6;
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
            var86 = var20.bind(var22)(var19, var18);
            var18 = var13[var3];
            var20 = var8.bind(var4)(var18);
            var19 = var20.useStateFromStoresArray;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = new Array(0);
                    var3 = _closure1_slot66;
                    var4 = _closure1_slot6;
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
                    if(var2) { _fun0010_ip = 52; continue _fun0010 }
case 28:
                    var11 = var3.value;
                    var2 = _closure1_slot3;
                    var2 = var2.bind(var9)(var11, var5);
                    var11 = var2[var7];
                    var2 = var2[var4];
                    var11 = var2.isLaunching;
                    if(!var11) { _fun0010_ip = 53; continue _fun0010 }
case 54:
                    var12 = var2.componentId;
                    var11 = var6 != var12;
case 53:
                    if(!var11) { _fun0010_ip = 55; continue _fun0010 }
case 56:
                    var12 = var2.componentId;
                    var12 = var12.length;
                    var11 = var12 > var7;
case 55:
                    if(!var11) { _fun0010_ip = 57; continue _fun0010 }
case 58:
                    var11 = var1.push;
                    var2 = var2.componentId;
                    var2 = var11.bind(var1)(var2);
case 57:
                    var11 = var8.bind(var9)();
                    var2 = var11.done;
                    var3 = var11;
                    if(!var2) { _fun0010_ip = 28; continue _fun0010 }
case 52:
                    return var1;
                }
            };
            var88 = var19.bind(var20)(var18, var2);
            var2 = var13[var3];
            var20 = var8.bind(var4)(var2);
            var19 = var20.useStateFromStores;
            var2 = _closure1_slot23;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                var2 = _closure1_slot23;
                var1 = var2.getMediaPostEmbeds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var83 = var19.bind(var20)(var18, var2);
            var2 = var13[var3];
            var22 = var8.bind(var4)(var2);
            var20 = var22.useStateFromStores;
            var2 = _closure1_slot20;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = function() {
                var2 = _closure1_slot20;
                var1 = var2.getGuildTemplates;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var82 = var20.bind(var22)(var19, var18, var2);
            var2 = var13[var3];
            var22 = var8.bind(var4)(var2);
            var20 = var22.useStateFromStores;
            var2 = _closure1_slot9;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getBuildOverrides;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var81 = var20.bind(var22)(var19, var18, var2);
            var2 = 65;
            var2 = var13[var2];
            var18 = var8.bind(var4)(var2);
            var2 = var18.useCodedLinksExperimentEmbeds;
            var79 = var2.bind(var18)();
            var2 = 66;
            var2 = var13[var2];
            var19 = var8.bind(var4)(var2);
            var18 = var19.useQuests;
            var2 = {'fetchPolicy': 'cache-or-network', 'callerSource': 'messages_native'};
            var2 = var18.bind(var19)(var2);
            var78 = var2.quests;
            var77 = var2.isFetchingCurrentQuests;
            var18 = var89.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot60;
                var1 = var1.PREMIUM_REFERRAL;
                var1 = var2 === var1;
                return var1;
            };
            var19 = var18.bind(var89)(var2);
            var18 = var19.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.referralTrialOfferId;
                return var1;
            };
            var19 = var18.bind(var19)(var2);
            var18 = var19.filter;
            var2 = 60;
            var2 = var13[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.isNotNullish;
            var2 = var18.bind(var19)(var2);
            var _closure2_slot6 = var2;
            var2 = var13[var3];
            var20 = var8.bind(var4)(var2);
            var19 = var20.useStateFromStoresArray;
            var2 = _closure1_slot27;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                var3 = _closure2_slot6;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var3 = _closure1_slot27;
                        var2 = var3.getRelevantUserTrialOffer;
                        var1 = arg1;
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        var3 = var1 == var2;
                        var1 = undefined;
                        if(var3) { _fun0011_ip = 59; continue _fun0011 }
case 60:
                        var1 = var2.id;
case 59:
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
            var23 = var19.bind(var20)(var18, var2);
            var2 = 67;
            var2 = var13[var2];
            var19 = var8.bind(var4)(var2);
            var18 = var19.useTrialOffer;
            var2 = _closure1_slot62;
            var24 = var18.bind(var19)(var2);
            var2 = var13[var3];
            var20 = var8.bind(var4)(var2);
            var19 = var20.useStateFromStores;
            var2 = _closure1_slot52;
            var18 = new Array(1);
            var18[0] = var2;
            var2 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 68;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.isPremiumExactly;
                var5 = _closure1_slot52;
                var2 = var5.getCurrentUser;
                var2 = var2.bind(var5)();
                var1 = _closure1_slot63;
                var1 = var1.TIER_2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var22 = var19.bind(var20)(var18, var2);
            var2 = var13[var3];
            var25 = var8.bind(var4)(var2);
            var20 = var25.useStateFromStores;
            var2 = _closure1_slot39;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = new Array(1);
            var18[0] = var100;
            var2 = function() {
                var3 = _closure1_slot39;
                var2 = var3.getEditingMessageId;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var76 = var20.bind(var25)(var19, var2, var18);
            var2 = var13[var3];
            var25 = var8.bind(var4)(var2);
            var20 = var25.useStateFromStores;
            var2 = _closure1_slot29;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = new Array(1);
            var18[0] = var100;
            var2 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure1_slot29;
                    var2 = var3.getPendingReply;
                    var1 = _closure2_slot2;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0012_ip = 2; continue _fun0012 }
case 61:
                    var2 = var2.message;
                    var1 = var2.id;
case 2:
                    return var1;
                }
            };
            var75 = var20.bind(var25)(var19, var2, var18);
            var2 = var13[var3];
            var25 = var8.bind(var4)(var2);
            var20 = var25.useStateFromStores;
            var2 = _closure1_slot49;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = new Array(1);
            var18[0] = var100;
            var2 = function() {
                var3 = _closure1_slot49;
                var2 = var3.getOldestUnreadMessageId;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var74 = var20.bind(var25)(var19, var2, var18);
            var2 = var13[var3];
            var25 = var8.bind(var4)(var2);
            var20 = var25.useStateFromStores;
            var2 = _closure1_slot43;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = new Array(1);
            var18[0] = r101;
            var2 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0013_ip = 62; continue _fun0013 }
case 63:
                    var4 = _closure1_slot43;
                    var3 = var4.canChatInGuild;
                    var2 = _closure2_slot3;
                    var1 = var3.bind(var4)(var2);
case 62:
                    return var1;
                }
            };
            var73 = var20.bind(var25)(var19, var2, var18);
            var2 = var13[var3];
            var25 = var8.bind(var4)(var2);
            var20 = var25.useStateFromStores;
            var2 = _closure1_slot46;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = new Array(1);
            var18[0] = var7;
            var2 = function() {
                var4 = _closure1_slot46;
                var3 = var4.can;
                var1 = _closure1_slot61;
                var2 = var1.SEND_MESSAGES;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var72 = var20.bind(var25)(var19, var2, var18);
            var2 = 69;
            var2 = var13[var2];
            var2 = var16.bind(var4)(var2);
            var71 = var2.bind(var4)(var100);
            var2 = var13[var3];
            var20 = var8.bind(var4)(var2);
            var19 = var20.useStateFromStores;
            var2 = _closure1_slot53;
            var18 = new Array(1);
            var18[0] = var2;
            var16 = new Array(1);
            var16[0] = r100;
            var2 = function() {
                var4 = _closure1_slot53;
                var3 = var4.getUserVoiceChannelId;
                var2 = _closure1_slot59;
                var1 = _closure2_slot5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var70 = var19.bind(var20)(var18, var2, var16);
            var2 = var13[var3];
            var20 = var8.bind(var4)(var2);
            var19 = var20.useStateFromStores;
            var2 = _closure1_slot48;
            var18 = new Array(1);
            var18[0] = var2;
            var16 = function() {
                var2 = _closure1_slot48;
                var1 = var2.getChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var69 = var19.bind(var20)(var18, var16, var2);
            var2 = var13[var3];
            var25 = var8.bind(var4)(var2);
            var20 = var25.useStateFromStores;
            var2 = _closure1_slot30;
            var19 = new Array(1);
            var19[0] = var2;
            var18 = new Array(1);
            var18[0] = var7;
            var16 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = _closure1_slot58;
                    var4 = var1.THREADS;
                    var3 = var4.has;
                    var1 = _closure2_slot0;
                    var1 = var1.type;
                    var3 = var3.bind(var4)(var1);
                    var4 = null;
                    var1 = null;
                    if(!var3) { _fun0014_ip = 55; continue _fun0014 }
case 64:
                    var3 = _closure2_slot0;
                    var3 = var3.parent_id;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0014_ip = 55; continue _fun0014 }
case 7:
                    var4 = _closure1_slot30;
                    var3 = var4.getMessageByReference;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var6 = var5.parent_id;
                    var2['channel_id'] = var6;
                    var6 = var5.id;
                    var2['message_id'] = var6;
                    var5 = var5.guild_id;
                    var2['guild_id'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var1 = var2.message;
case 55:
                    return var1;
                }
            };
            var27 = var20.bind(var25)(var19, var16, var18);
            var16 = var13[var3];
            var25 = var8.bind(var4)(var16);
            var20 = var25.useStateFromStoresObject;
            var16 = _closure1_slot40;
            var19 = new Array(1);
            var19[0] = var16;
            var18 = function() {
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
            var16 = new Array(0);
            var16 = var20.bind(var25)(var19, var18, var16);
            var67 = var16.resolvingGiftCodes;
            var66 = var16.resolvedGiftCodes;
            var65 = var16.acceptingGiftCodes;
            var16 = var13[var3];
            var25 = var8.bind(var4)(var16);
            var20 = var25.useStateFromStores;
            var16 = _closure1_slot11;
            var19 = new Array(1);
            var19[0] = var16;
            var18 = new Array(1);
            var18[0] = var100;
            var16 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getParticipants;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                var1 = var1.length;
                return var1;
            };
            var64 = var20.bind(var25)(var19, var16, var18);
            var16 = var13[var3];
            var25 = var8.bind(var4)(var16);
            var20 = var25.useStateFromStores;
            var16 = _closure1_slot51;
            var19 = new Array(1);
            var19[0] = var16;
            var18 = new Array(1);
            var18[0] = var100;
            var16 = function() {
                var3 = _closure1_slot51;
                var2 = var3.getFiles;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var63 = var20.bind(var25)(var19, var16, var18);
            var16 = var13[var3];
            var20 = var8.bind(var4)(var16);
            var19 = var20.useStateFromStores;
            var18 = new Array(1);
            var18[0] = var2;
            var16 = new Array(1);
            var16[0] = var100;
            var2 = function() {
                var3 = _closure1_slot30;
                var2 = var3.getReplyIdsForChannel;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var62 = var19.bind(var20)(var18, var2, var16);
            var2 = var13[var3];
            var20 = var8.bind(var4)(var2);
            var19 = var20.useStateFromStoresObject;
            var2 = _closure1_slot5;
            var18 = new Array(1);
            var18[0] = var2;
            var16 = function() {
                var1 = {};
                var2 = _closure1_slot5;
                var3 = var2.useReducedMotion;
                var1['useReducedMotion'] = var3;
                var3 = var2.roleStyle;
                var1['roleStyle'] = var3;
                var3 = var2.officialMessageStyle;
                var1['officialMessageStyle'] = var3;
                var3 = var2.saturation;
                var1['saturation'] = var3;
                var2 = var2.displayNameStylesEnabled;
                var1['displayNameStylesEnabled'] = var2;
                return var1;
            };
            var2 = new Array(0);
            var2 = var19.bind(var20)(var18, var16, var2);
            var61 = var2.useReducedMotion;
            r103 = var2.roleStyle;
            r102 = var2.officialMessageStyle;
            r115 = var2.saturation;
            var60 = var2.displayNameStylesEnabled;
            var2 = var13[var3];
            var20 = var8.bind(var4)(var2);
            var19 = var20.useStateFromStores;
            var2 = _closure1_slot33;
            var18 = new Array(1);
            var18[0] = var2;
            var16 = new Array(1);
            var16[0] = var100;
            var2 = function() {
                var3 = _closure1_slot33;
                var2 = var3.getChannelThreadsVersion;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var59 = var19.bind(var20)(var18, var2, var16);
            var2 = var13[var3];
            var19 = var8.bind(var4)(var2);
            var18 = var19.useStateFromStoresObject;
            var2 = _closure1_slot22;
            var16 = new Array(1);
            var16[0] = var2;
            var2 = function() {
                var2 = _closure1_slot22;
                var1 = var2.getMessageInteractionStates;
                var1 = var1.bind(var2)();
                return var1;
            };
            var53 = var18.bind(var19)(var16, var2);
            var2 = var13[var3];
            var25 = var8.bind(var4)(var2);
            var20 = var25.useStateFromStores;
            var2 = _closure1_slot21;
            var19 = new Array(1);
            var19[0] = var2;
            var2 = 70;
            var2 = var13[var2];
            var2 = var8.bind(var4)(var2);
            r121 = var2.isVersionEqual;
            r123 = function() {
                var3 = _closure1_slot21;
                var1 = var3.getInteractionComponentStates;
                var2 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var2;
                var2 = var3.getInteractionComponentStateVersion;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            r122 = new Array(0);
            r125 = var25;
            r124 = var19;
            var2 = r125[var20](r124, r123, r122, r121, r120);
            var2 = var15.bind(var4)(var2, var11);
            var52 = var2[var14];
            var51 = var2[var5];
            var2 = var13[var3];
            var16 = var8.bind(var4)(var2);
            var15 = var16.useStateFromStores;
            var2 = _closure1_slot14;
            var14 = new Array(1);
            var14[0] = var2;
            var2 = function() {
                var1 = _closure1_slot14;
                var1 = var1.hasLoadedExperiments;
                return var1;
            };
            var49 = var15.bind(var16)(var14, var2);
            var2 = 71;
            var2 = var13[var2];
            var15 = var8.bind(var4)(var2);
            var14 = var15.useIsSpamMessageRequest;
            var2 = var7.id;
            var96 = var14.bind(var15)(var2);
            var2 = 72;
            var2 = var13[var2];
            var13 = var8.bind(var4)(var2);
            var8 = var13.useIsMessageRequest;
            var2 = var7.id;
            var97 = var8.bind(var13)(var2);
            var50 = var10 != var89;
            if(!var50) { _fun0004_ip = 65; continue _fun0004 }
case 66:
            var2 = var89.ready;
            if(var2) { _fun0004_ip = 67; continue _fun0004 }
case 68:
            var2 = var89.cached;
case 67:
            var50 = var2;
case 65:
            var99 = var10 != var89;
            if(!var99) { _fun0004_ip = 69; continue _fun0004 }
case 70:
            var99 = var89.cached;
case 69:
            var98 = var10 != var89;
            if(!var98) { _fun0004_ip = 71; continue _fun0004 }
case 72:
            var98 = var89.ready;
case 71:
            if(!var98) { _fun0004_ip = 73; continue _fun0004 }
case 74:
            var2 = var89.loadingMore;
            var98 = !var2;
case 73:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = var13[var3];
            var16 = var8.bind(var4)(var2);
            var15 = var16.useStateFromStores;
            var2 = _closure1_slot19;
            var14 = new Array(1);
            var14[0] = var2;
            var2 = function() {
                var2 = _closure1_slot19;
                var1 = var2.getRsvpVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var58 = var15.bind(var16)(var14, var2);
            var2 = var13[var3];
            var16 = var8.bind(var4)(var2);
            var15 = var16.useStateFromStores;
            var2 = _closure1_slot18;
            var14 = new Array(1);
            var14[0] = var2;
            var2 = function() {
                var2 = _closure1_slot18;
                var1 = var2.getMessagesVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var57 = var15.bind(var16)(var14, var2);
            var2 = var13[var3];
            var18 = var8.bind(var4)(var2);
            var16 = var18.useStateFromStores;
            var2 = _closure1_slot41;
            var15 = new Array(1);
            var15[0] = var2;
            var14 = function() {
                var2 = _closure1_slot41;
                var1 = var2.getCommunicationDisabledVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var56 = var16.bind(var18)(var15, var14);
            var14 = var13[var3];
            var18 = var8.bind(var4)(var14);
            var16 = var18.useStateFromStoresObject;
            var15 = new Array(1);
            var15[0] = var2;
            var14 = new Array(2);
            var14[0] = r101;
            var14[1] = var89;
            var2 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0015_ip = 75; continue _fun0015 }
case 76:
                    var1 = _closure2_slot1;
                    if(!(var4 != var1)) { _fun0015_ip = 75; continue _fun0015 }
case 31:
                    var1 = {};
                    var _closure3_slot0 = var1;
                    var4 = _closure2_slot1;
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                            var2 = arg1;
                            var5 = var2.author;
                            var3 = null;
                            var6 = var3 == var5;
                            var1 = undefined;
                            var4 = undefined;
                            if(var6) { _fun0016_ip = 77; continue _fun0016 }
case 78:
                            var4 = var5.id;
case 77:
                            if(!(var3 != var4)) { _fun0016_ip = 79; continue _fun0016 }
case 40:
                            var7 = _closure1_slot41;
                            var6 = var7.getMember;
                            var5 = _closure2_slot3;
                            var4 = var2.author;
                            var4 = var4.id;
                            var4 = var6.bind(var7)(var5, var4);
                            if(!(var3 != var4)) { _fun0016_ip = 79; continue _fun0016 }
case 80:
                            var3 = _closure3_slot0;
                            var2 = var2.author;
                            var2 = var2.id;
                            var3[var2] = var4;
case 79:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 75:
                    var1 = {};
                    return var1;
                }
            };
            var55 = var16.bind(var18)(var15, var2, var14);
            var2 = var13[var3];
            var16 = var8.bind(var4)(var2);
            var15 = var16.useStateFromStores;
            var2 = _closure1_slot46;
            var14 = new Array(1);
            var14[0] = var2;
            var2 = function() {
                var4 = _closure1_slot46;
                var3 = var4.can;
                var1 = _closure1_slot61;
                var2 = var1.MODERATE_MEMBERS;
                var1 = _closure2_slot4;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var46 = var15.bind(var16)(var14, var2);
            var2 = 73;
            var2 = var13[var2];
            var13 = var8.bind(var4)(var2);
            var8 = var13.useCurrentUserCommunicationDisabled;
            var14 = var10 == var12;
            var2 = undefined;
            if(var14) { _fun0004_ip = 81; continue _fun0004 }
case 82:
            var2 = var12.id;
case 81:
            var8 = var8.bind(var13)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var8, var11);
            var47 = var2[var5];
            var8 = _closure1_slot0;
            r117 = _closure1_slot2;
            var2 = r117[var3];
            var13 = var8.bind(var4)(var2);
            var11 = var13.useStateFromStores;
            var2 = _closure1_slot34;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var1 = _closure1_slot34;
                var1 = var1.locale;
                return var1;
            };
            var45 = var11.bind(var13)(var5, var2);
            var2 = 74;
            var2 = r117[var2];
            var5 = var8.bind(var4)(var2);
            var2 = var5.useIsPaymentsBlocked;
            var44 = var2.bind(var5)();
            var2 = r117[var3];
            var13 = var8.bind(var4)(var2);
            var11 = var13.useStateFromStores;
            var2 = _closure1_slot32;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = var3.isForumPost;
                    var1 = var1.bind(var3)();
                    var3 = !var1;
                    var1 = !var3;
                    if(var3) { _fun0017_ip = 83; continue _fun0017 }
case 41:
                    var4 = _closure1_slot32;
                    var3 = var4.hasJoined;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
case 83:
                    return var1;
                }
            };
            var43 = var11.bind(var13)(var5, var2);
            var2 = r117[var3];
            var13 = var8.bind(var4)(var2);
            var11 = var13.useStateFromStores;
            var2 = _closure1_slot24;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot24;
                var2 = var3.shouldDisplayPrompt;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var42 = var11.bind(var13)(var5, var2);
            var2 = r117[var3];
            var13 = var8.bind(var4)(var2);
            var11 = var13.useStateFromStores;
            var2 = _closure1_slot28;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var2 = _closure1_slot28;
                var1 = var2.isEligible;
                var1 = var1.bind(var2)();
                return var1;
            };
            var40 = var11.bind(var13)(var5, var2);
            var2 = r117[var3];
            var13 = var8.bind(var4)(var2);
            var11 = var13.useStateFromStores;
            var2 = _closure1_slot10;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getLazyCacheStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var41 = var11.bind(var13)(var5, var2);
            var2 = 75;
            var2 = r117[var2];
            var5 = var8.bind(var4)(var2);
            var2 = var5.useMessageJumpAndroidKeyboardHeight;
            var39 = var2.bind(var5)();
            var2 = _closure1_slot1;
            var5 = 76;
            var5 = r117[var5];
            var5 = var2.bind(var4)(var5);
            var37 = var5.bind(var4)();
            var5 = 77;
            var5 = r117[var5];
            var11 = var8.bind(var4)(var5);
            var5 = var11.useChannelSummariesExperiment;
            var5 = var5.bind(var11)(var7);
            var _closure2_slot7 = var5;
            var11 = r117[var3];
            var15 = var8.bind(var4)(var11);
            var14 = var15.useStateFromStores;
            var11 = _closure1_slot31;
            var13 = new Array(1);
            var13[0] = var11;
            var11 = new Array(2);
            var11[0] = var5;
            var5 = var7.id;
            var11[1] = var5;
            var5 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var1 = null;
                    if(!var3) { _fun0018_ip = 84; continue _fun0018 }
case 85:
                    var4 = _closure1_slot31;
                    var3 = var4.selectedSummary;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 84:
                    return var1;
                }
            };
            var38 = var14.bind(var15)(var13, var5, var11);
            var14 = _closure1_slot4;
            var13 = var14.useEffect;
            var5 = var7.id;
            var11 = new Array(5);
            var11[0] = var5;
            var5 = var89.hasMoreAfter;
            var11[1] = var5;
            var5 = var89.hasMoreBefore;
            var11[2] = var5;
            var5 = var89.length;
            var11[3] = var5;
            var5 = var89.ready;
            var11[4] = var5;
            var5 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var2 = var2.ready;
                    var2 = !var2;
                    if(var2) { _fun0019_ip = 86; continue _fun0019 }
case 87:
                    var3 = _closure2_slot1;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var3 !== var4;
case 86:
                    if(var2) { _fun0019_ip = 88; continue _fun0019 }
case 59:
                    var3 = _closure2_slot1;
                    var2 = var3.hasMoreBefore;
case 88:
                    if(var2) { _fun0019_ip = 89; continue _fun0019 }
case 90:
                    var3 = _closure2_slot1;
                    var2 = var3.hasMoreAfter;
case 89:
                    if(var2) { _fun0019_ip = 91; continue _fun0019 }
case 92:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 78;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var5 = var6.updateChannelDimensions;
                    var1 = _closure2_slot0;
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
case 91:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var13.bind(var14)(var5, var11);
            var5 = 79;
            var11 = r117[var5];
            var15 = var8.bind(var4)(var11);
            var13 = var15.useShouldTrackAnnouncementMessageViews;
            var11 = {};
            var11['guild'] = var12;
            var11['channel'] = var7;
            var11['messages'] = var89;
            var11['isMessagesReady'] = var50;
            var36 = var13.bind(var15)(var11);
            var11 = r117[var5];
            var15 = var8.bind(var4)(var11);
            var13 = var15.useShouldTrackRichPresenceInviteEmbedViews;
            var11 = {};
            var11['messages'] = var89;
            var11['isMessagesReady'] = var50;
            var35 = var13.bind(var15)(var11);
            var11 = r117[var5];
            var15 = var8.bind(var4)(var11);
            var13 = var15.useShouldTrackOfficialMessageViews;
            var11 = {};
            var11['guild'] = var12;
            var11['messages'] = var89;
            var11['isMessagesReady'] = var50;
            var34 = var13.bind(var15)(var11);
            var5 = r117[var5];
            var13 = var8.bind(var4)(var5);
            var11 = var13.useShouldTrackVoiceInviteEmbedViews;
            var5 = {};
            var5['messages'] = var89;
            var5['isMessagesReady'] = var50;
            var33 = var11.bind(var13)(var5);
            var5 = 80;
            var5 = r117[var5];
            var11 = var8.bind(var4)(var5);
            var5 = var11.useShouldDisplaySpoilerObscurity;
            var32 = var5.bind(var11)(var7);
            var5 = 81;
            var5 = r117[var5];
            var11 = var8.bind(var4)(var5);
            var5 = var11.useIsAgeVerified;
            var19 = var5.bind(var11)();
            var13 = var14.useEffect;
            var11 = new Array(2);
            var11[0] = var100;
            var11[1] = r101;
            var5 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 82;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.handleChannelSelect;
                var1 = var1.bind(var2)();
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 82;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleChannelSelect;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                return var1;
            };
            var5 = var13.bind(var14)(var5, var11);
            var5 = 83;
            var5 = r117[var5];
            var13 = var8.bind(var4)(var5);
            var11 = var13.useShouldDisableInteractiveComponents;
            var5 = var7.id;
            var31 = var11.bind(var13)(var5);
            var11 = _closure1_slot25;
            var5 = var7.id;
            var30 = var11.bind(var4)(var5);
            var11 = new Array(0);
            var _closure2_slot8 = var11;
            var13 = var89.forEach;
            var5 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.messageReference;
                    var2 = null;
                    var5 = var2 == var3;
                    var1 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0020_ip = 34; continue _fun0020 }
case 78:
                    var4 = var3.message_id;
case 34:
                    if(!(var2 != var4)) { _fun0020_ip = 5; continue _fun0020 }
case 60:
                    var3 = _closure2_slot8;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var4);
case 5:
                    return var1;
                }
            };
            var5 = var13.bind(var89)(var5);
            var5 = _closure1_slot26;
            var29 = var5.bind(var4)(var11);
            var5 = r117[var3];
            var15 = var8.bind(var4)(var5);
            var14 = var15.useStateFromStores;
            var5 = _closure1_slot15;
            var13 = new Array(1);
            var13[0] = var5;
            var11 = new Array(1);
            var11[0] = var100;
            var5 = function() {
                var3 = _closure1_slot15;
                var2 = var3.getChannelFpInfo;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var28 = var14.bind(var15)(var13, var5, var11);
            var5 = 84;
            var5 = r117[var5];
            var5 = var2.bind(var4)(var5);
            r111 = var5.bind(var4)();
            var5 = 85;
            var5 = r117[var5];
            var5 = var2.bind(var4)(var5);
            var5 = var5.bind(var4)(var89);
            var26 = var5.unloadedContentEntryMessageIds;
            var25 = var5.unloadableContentEntryMessageIds;
            var5 = r117[var3];
            var14 = var8.bind(var4)(var5);
            var13 = var14.useStateFromStores;
            r118 = _closure1_slot52;
            var11 = new Array(1);
            var11[0] = r118;
            var5 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var2 = _closure1_slot52;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0021_ip = 59; continue _fun0021 }
case 77:
                    var3 = var4.isStaff;
                    var2 = var3.bind(var4)();
case 59:
                    var1 = var1 != var2;
                    if(!var1) { _fun0021_ip = 88; continue _fun0021 }
case 93:
                    var1 = var2;
case 88:
                    return var1;
                }
            };
            r114 = var13.bind(var14)(var11, var5);
            var5 = r117[var3];
            var14 = var8.bind(var4)(var5);
            var13 = var14.useStateFromStores;
            var5 = _closure1_slot17;
            var11 = new Array(1);
            var11[0] = var5;
            var5 = function() {
                var2 = _closure1_slot17;
                var1 = var2.getVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var54 = var13.bind(var14)(var11, var5);
            var5 = 86;
            var5 = r117[var5];
            var13 = var8.bind(var4)(var5);
            var11 = var13.useColorStore;
            var5 = function(arg1) {
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = arg1;
                var1 = var1.palette;
                var1 = var2.bind(var3)(var1);
                var1 = var1.length;
                return var1;
            };
            var20 = var11.bind(var13)(var5);
            var5 = r117[var3];
            var14 = var8.bind(var4)(var5);
            var13 = var14.useStateFromStores;
            var5 = _closure1_slot13;
            var11 = new Array(1);
            var11[0] = var5;
            var5 = function() {
                var3 = _closure1_slot13;
                var2 = var3.getGuildEmoji;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var13.bind(var14)(var11, var5);
            var5 = r117[var3];
            var15 = var8.bind(var4)(var5);
            var14 = var15.useStateFromStores;
            var5 = _closure1_slot53;
            var13 = new Array(1);
            var13[0] = var5;
            var11 = new Array(1);
            var11[0] = r101;
            var5 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0022_ip = 35; continue _fun0022 }
case 94:
                    var5 = _closure1_slot53;
                    var4 = var5.getVoiceStates;
                    var3 = _closure2_slot3;
                    var4 = var4.bind(var5)(var3);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 87;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.getVoiceStateChannelSummaryFromVoiceStates;
                    var2 = var2.bind(var3)(var4);
                    return var2;
case 35:
                    return var1;
                }
            };
            var68 = var14.bind(var15)(var13, var5, var11);
            var5 = r117[var3];
            var14 = var8.bind(var4)(var5);
            var13 = var14.useStateFromStoresObject;
            var5 = _closure1_slot56;
            var11 = new Array(4);
            var11[0] = var5;
            var5 = _closure1_slot12;
            var11[1] = var5;
            var5 = _closure1_slot44;
            var11[2] = var5;
            var5 = _closure1_slot38;
            var11[3] = var5;
            var5 = function() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var1 = {};
                    var3 = _closure1_slot66;
                    var4 = _closure1_slot44;
                    var2 = var4.getInvites;
                    var4 = var2.bind(var4)();
                    var2 = var4.values;
                    var2 = var2.bind(var4)();
                    var14 = undefined;
                    var13 = var3.bind(var14)(var2);
                    var3 = var13.bind(var14)();
                    var2 = var3.done;
                    var12 = global;
                    var11 = '';
                    var10 = ':';
                    var9 = ',';
                    var8 = null;
                    var7 = 88;
                    var6 = var3;
                    var5 = undefined;
                    var4 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0023_ip = 95; continue _fun0023 }
case 96:
                    var2 = var6.value;
                    var17 = var2.channel;
                    var18 = var8 == var17;
                    var20 = undefined;
                    if(var18) { _fun0023_ip = 97; continue _fun0023 }
case 98:
                    var20 = var17.id;
case 97:
                    var19 = var5;
                    var18 = var4;
                    var17 = var3;
                    if(!(var8 != var20)) { _fun0023_ip = 99; continue _fun0023 }
case 100:
                    var21 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var20 = var20[var7];
                    var21 = var21.bind(var14)(var20);
                    var20 = var21.isVoiceChannelInvite;
                    var20 = var20.bind(var21)(var2);
                    var19 = var5;
                    var18 = var4;
                    var17 = var3;
                    if(!var20) { _fun0023_ip = 99; continue _fun0023 }
case 101:
                    var20 = var2.channel;
                    var20 = var20.id;
                    var21 = var2.guild;
                    var2 = var8 == var21;
                    var23 = undefined;
                    if(var2) { _fun0023_ip = 102; continue _fun0023 }
case 103:
                    var23 = var21.id;
case 102:
                    var22 = _closure1_slot56;
                    var2 = var22.getVoiceStatesForChannelAlt;
                    var23 = var2.bind(var22)(var20, var23);
                    var22 = var23.map;
                    var2 = function(arg1) {
                        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                            var1 = arg1;
                            var2 = var1.voiceState;
                            var2 = var2.selfStream;
                            var4 = '';
                            var3 = var4;
                            if(!var2) { _fun0024_ip = 44; continue _fun0024 }
case 104:
                            var3 = '*';
case 44:
                            var1 = var1.user;
                            var2 = var1.id;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var1 = var1.concat;
                            var1 = var1.bind(var4)(var3, var2);
                            return var1;
                        }
                    };
                    var22 = var22.bind(var23)(var2);
                    var2 = var22.join;
                    var24 = var2.bind(var22)(var9);
                    var23 = _closure1_slot12;
                    var22 = var23.getStartTime;
                    var25 = _closure1_slot38;
                    var2 = var25.getChannel;
                    var2 = var2.bind(var25)(var20);
                    var2 = var22.bind(var23)(var2);
                    var22 = var8 != var2;
                    var23 = var11;
                    if(!var22) { _fun0023_ip = 105; continue _fun0023 }
case 106:
                    var23 = var2;
case 105:
                    var22 = var12.HermesInternal;
                    var22 = var22.concat;
                    var22 = var22.bind(var11)(var24, var10, var23);
                    var1[var20] = var22;
                    var19 = var21;
                    var18 = var20;
                    var17 = var2;
case 99:
                    var20 = var13.bind(var14)();
                    var2 = var20.done;
                    var5 = var19;
                    var4 = var18;
                    var3 = var17;
                    var6 = var20;
                    if(!var2) { _fun0023_ip = 96; continue _fun0023 }
case 95:
                    return var1;
                }
            };
            var11 = var13.bind(var14)(var11, var5);
            var5 = r117[var3];
            var15 = var8.bind(var4)(var5);
            var14 = var15.useStateFromStoresArray;
            var5 = _closure1_slot50;
            var13 = new Array(1);
            var13[0] = var5;
            var5 = function() {
                var5 = _closure1_slot50;
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
            var16 = var14.bind(var15)(var13, var5);
            var _closure2_slot9 = var16;
            var5 = r117[var3];
            var15 = var8.bind(var4)(var5);
            var14 = var15.useStateFromStoresObject;
            var5 = _closure1_slot55;
            var13 = new Array(1);
            var13[0] = var5;
            var5 = function() {
                var4 = _closure2_slot9;
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                        var1 = arg1;
                        var2 = arg2;
                        var3 = var2.application_id;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0025_ip = 107; continue _fun0025 }
case 38:
                        var7 = _closure1_slot55;
                        var6 = var7.getState;
                        var5 = var2.application_id;
                        var3 = _closure1_slot57;
                        var3 = var3.JOIN;
                        var3 = var6.bind(var7)(var5, var3);
                        if(!(var4 != var3)) { _fun0025_ip = 30; continue _fun0025 }
case 108:
                        var2 = var2.application_id;
                        var1[var2] = var3;
case 30:
                        return var1;
case 107:
                        return var1;
                    }
                };
                var1 = {};
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var15 = var14.bind(var15)(var13, var5);
            var5 = r117[var3];
            r120 = var8.bind(var4)(var5);
            r119 = r120.useStateFromStoresArray;
            var5 = _closure1_slot37;
            var14 = new Array(1);
            var14[0] = var5;
            var13 = function() {
                var3 = _closure1_slot37;
                var1 = var3.getNewestTokens;
                var2 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var2;
                var2 = var3.getApplicationFetchStateVersion;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            var5 = new Array(0);
            var14 = r119.bind(r120)(var14, var13, var5);
            var3 = r117[var3];
            var13 = var8.bind(var4)(var3);
            var5 = var13.useStateFromStores;
            var3 = new Array(1);
            var3[0] = r118;
            var1 = function() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var2 = _closure1_slot52;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0026_ip = 33; continue _fun0026 }
case 77:
                    var1 = var2.displayNameStyles;
case 33:
                    return var1;
                }
            };
            var13 = var5.bind(var13)(var3, var1);
            var1 = 89;
            var1 = r117[var1];
            var3 = var8.bind(var4)(var1);
            var1 = var3.useFetchSocialLayerStorefrontProductDetailsEmbedData;
            var1 = var1.bind(var3)(var89);
            var3 = _closure1_slot65;
            var5 = 90;
            var1 = r117[var5];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = r117[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.Profiles;
            var5 = var5.Messages;
            var1['profile'] = var5;
            var5 = var7.isThread;
            var7 = var5.bind(var7)();
            if(!var7) { _fun0004_ip = 109; continue _fun0004 }
case 110:
            r117 = _closure1_slot64;
            var8 = _closure1_slot1;
            r118 = _closure1_slot2;
            var5 = 91;
            var5 = r118[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            r118 = true;
            var5['absolute'] = r118;
            var7 = r117.bind(var4)(var8, var5);
case 109:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot64;
            var7 = _closure1_slot1;
            r117 = _closure1_slot2;
            var6 = 92;
            var6 = r117[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            r117 = arg2;
            var6['ref'] = r117;
            var6['theme'] = r116;
            var6['saturation'] = r115;
            var6['isStaff'] = r114;
            var6['animateEmoji'] = r113;
            var6['animateStickers'] = r112;
            var6['containerWidth'] = r111;
            var6['gifAutoPlay'] = r110;
            var6['timestampHourCycle'] = r109;
            var6['inlineAttachmentMedia'] = r108;
            var6['inlineEmbedMedia'] = r107;
            var6['renderEmbeds'] = r106;
            var6['renderReactions'] = r105;
            var6['developerMode'] = r104;
            var6['roleStyle'] = r103;
            var6['officialMessageStyle'] = r102;
            var6['guildId'] = r101;
            var6['currentUserId'] = r100;
            var6['channelId'] = var100;
            var6['isMessagesReady'] = var50;
            var6['isMessagesCached'] = var99;
            var6['isMessagesAckable'] = var98;
            var6['isMessageRequest'] = var97;
            var6['isSpamMessageRequest'] = var96;
            var6['messageAuthorActivities'] = var95;
            var6['invites'] = var94;
            var6['appDirectoryEmbedApplications'] = var93;
            var6['invalidAppDirectoryEmbedApplicationIds'] = var92;
            var6['invalidApplicationIds'] = var91;
            var6['applicationAssetFetchingIds'] = var90;
            var6['messages'] = var89;
            var6['messagesWithActivitiesLaunching'] = var88;
            var6['activityInstanceIds'] = var87;
            var6['activityParticipants'] = var86;
            var6['activityInstancePresenceDetails'] = var85;
            var6['appDirectoryEmbedApplicationFetchStates'] = var84;
            var6['mediaPostPreviewEmbeds'] = var83;
            var6['guildTemplates'] = var82;
            var6['buildOverrides'] = var81;
            var6['fetchingSkuIds'] = var80;
            var6['experimentEmbeds'] = var79;
            var6['quests'] = var78;
            var6['isFetchingCurrentQuests'] = var77;
            var6['editingMessageId'] = var76;
            var6['replyingMessageId'] = var75;
            var6['oldestUnreadMessageId'] = var74;
            var6['canChat'] = var73;
            var6['canSendMessages'] = var72;
            var6['isCallActive'] = var71;
            var6['voiceStatePrivateChannelId'] = var70;
            var6['currentClientVoiceChannelId'] = var69;
            var6['voiceStateChannelIdSummaryForGuild'] = var68;
            var6['resolvingGiftCodes'] = var67;
            var6['resolvedGiftCodes'] = var66;
            var6['acceptingGiftCodes'] = var65;
            var6['participantsLength'] = var64;
            var6['uploads'] = var63;
            var6['repliedIds'] = var62;
            var6['useReducedMotion'] = var61;
            var6['displayNameStylesEnabled'] = var60;
            var6['channelThreadsVersion'] = var59;
            var6['rsvpVersion'] = var58;
            var6['failedMessagesVersion'] = var57;
            var6['communicationDisabledVersion'] = var56;
            var6['messageAuthorMembers'] = var55;
            var6['forwardGuildsVersion'] = var54;
            var6['interactionStates'] = var53;
            var6['interactionComponentStates'] = var52;
            var6['interactionComponentStatesVersion'] = var51;
            if(!var49) { _fun0004_ip = 111; continue _fun0004 }
case 112:
            var49 = var50;
case 111:
            var6['hasLoadedExperiments'] = var49;
            var6['guildSystemChannelFlags'] = var48;
            var6['currentUserCommunicationDisabled'] = var47;
            var6['renderCommunicationDisabled'] = var46;
            var6['userSettingsLocale'] = var45;
            var6['paymentsBlocked'] = var44;
            var6['isFollowingForumPost'] = var43;
            var6['showMediaPostSharePrompt'] = var42;
            var6['showPushFeedback'] = var40;
            var40 = 'initializing';
            var40 = var40 !== var41;
            var6['cacheStoreLoaded'] = var40;
            var6['androidKeyboardHeight'] = var39;
            var6['selectedSummary'] = var38;
            var6['keyboardType'] = var37;
            var6['shouldTrackAnnouncementMessageViews'] = var36;
            var6['shouldTrackRichPresenceInviteEmbedViews'] = var35;
            var6['shouldTrackOfficialMessageViews'] = var34;
            var6['shouldTrackVoiceInviteEmbedViews'] = var33;
            var6['shouldObscureSpoiler'] = var32;
            var6['shouldDisableInteractiveComponents'] = var31;
            var6['channelPolls'] = var30;
            var6['messageReferencePolls'] = var29;
            var6['explicitMediaFalsePositiveInfo'] = var28;
            var6['threadStartingReferenceMessage'] = var27;
            var6['unloadedContentEntryMessageIds'] = var26;
            var6['unloadableContentEntryMessageIds'] = var25;
            var6['resolvedReferralTrialOfferIds'] = var23;
            var25 = var10 == var24;
            var23 = undefined;
            if(var25) { _fun0004_ip = 113; continue _fun0004 }
case 114:
            var23 = var24.id;
case 113:
            var6['referralTrialOfferId'] = var23;
            var6['isPremiumTier2User'] = var22;
            var6['activityInviteMessageIds'] = var21;
            var6['guildInviteColorsFetched'] = var20;
            var6['isAgeVerified'] = var19;
            var6['guildEmojis'] = var18;
            var6['enableSwipeActions'] = var17;
            var6['selfActivities'] = var16;
            var6['activityLaunchJoinStates'] = var15;
            var6['authorizedAppsTokens'] = var14;
            var6['currentUserDisplayNameStyles'] = var13;
            var6['voiceInviteDataByChannelId'] = var11;
            var13 = var10 == var12;
            var11 = undefined;
            if(var13) { _fun0004_ip = 115; continue _fun0004 }
case 116:
            var11 = var12.officialMessageColor;
case 115:
            var12 = var10 != var11;
            var10 = undefined;
            if(!var12) { _fun0004_ip = 117; continue _fun0004 }
case 118:
            var10 = var11;
case 117:
            var6['officialMessageColor'] = var10;
            r124 = var6;
            r123 = var9;
            var9 = copyDataProperties(r124, r123);
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 'MessagesConnected';
    var2['displayName'] = var4;
    var4 = 93;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/Messages.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
// app/utils/GuildBoostingUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var23 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var24 = dependencyMap;
    var _closure1_slot0 = var23;
    var _closure1_slot1 = var9;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var24;
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
            var9 = _closure1_slot35;
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
            var7 = _closure1_slot35;
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
    var _closure1_slot34 = var1;
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
    var _closure1_slot35 = var1;
    var13 = function getGuildTierFromGuild(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = _closure1_slot4;
            var3 = var4.getGuild;
            var1 = arg1;
            var4 = var3.bind(var4)(var1);
            var3 = null;
            var5 = var3 == var4;
            var1 = undefined;
            if(var5) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var1 = var4.premiumTier;
case 36:
            if(!(var3 == var1)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var2 = _closure1_slot9;
            var1 = var2.NONE;
case 38:
            return var1;
        }
    };
    var _closure1_slot36 = var13;
    var12 = function isGuildBoostedAtLeast(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var2 = null;
            var1 = var2 == var3;
            if(var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var2 = var2 != var4;
            if(!var2) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var2 = var4 >= var3;
case 42:
            var1 = var2;
case 40:
            return var1;
        }
    };
    var _closure1_slot37 = var12;
    var11 = function getAvailableGuildBoostSlots(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.values;
        var1 = arg1;
        var3 = var2.bind(var3)(var1);
        var2 = var3.filter;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = var2.isAvailable;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot38 = var11;
    var10 = function appliedGuildBoostsRequiredForPerks(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var5 = arg2;
            var4 = _closure1_slot4;
            var2 = var4.getGuild;
            var2 = var2.bind(var4)(var5);
            var4 = null;
            var7 = var4 == var2;
            var4 = undefined;
            var6 = undefined;
            if(var7) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var8 = var2.features;
            var7 = var8.has;
            var2 = _closure1_slot10;
            var2 = var2.PREMIUM_TIER_3_OVERRIDE;
            var6 = var7.bind(var8)(var2);
case 44:
            var2 = true;
            if(!(var2 !== var6)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var2 = _closure1_slot36;
            var2 = var2.bind(var4)(var5);
            var1 = _closure1_slot8;
            var2 = var1[var2];
            var4 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.endsAt;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var1 = var4.bind(var3)(var1);
            var3 = var3.length;
            var1 = var1.length;
            var1 = var3 - var1;
            var1 = var2 - var1;
            return var1;
case 46:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot39 = var10;
    var8 = function getMaxSoundboardSlots(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var3 = _closure1_slot18;
            var6 = var1.premiumFeatures;
            var2 = null;
            var7 = var2 == var6;
            var4 = undefined;
            if(var7) { _fun0007_ip = 33; continue _fun0007 }
case 48:
            var4 = var6.additionalSoundSlots;
case 33:
            var6 = var2 != var4;
            var2 = 0;
            if(!var6) { _fun0007_ip = 49; continue _fun0007 }
case 50:
            var2 = var4;
case 49:
            var4 = var3 + var2;
            var2 = global;
            var3 = var2.Math;
            var2 = var3.max;
            var7 = var1.features;
            var6 = var7.has;
            var1 = _closure1_slot10;
            var1 = var1.MORE_SOUNDBOARD;
            var1 = var6.bind(var7)(var1);
            if(var1) { _fun0007_ip = 51; continue _fun0007 }
case 52:
            var1 = _closure1_slot18;
            _fun0007_ip = 53; continue _fun0007;
case 51:
            var1 = _closure1_slot19;
case 53:
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        }
    };
    var _closure1_slot40 = var8;
    var7 = function isGuildBoostSlotCanceled(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var1 = var2.subscription;
            var3 = null;
            var4 = var3 == var1;
            var3 = undefined;
            if(var4) { _fun0008_ip = 54; continue _fun0008 }
case 29:
            var3 = var1.status;
case 54:
            var1 = _closure1_slot14;
            var1 = var1.CANCELED;
            var1 = var3 === var1;
            if(var1) { _fun0008_ip = 38; continue _fun0008 }
case 49:
            var1 = var2.canceled;
case 38:
            return var1;
        }
    };
    var _closure1_slot41 = var7;
    var6 = function getTheoreticalPremiumTierForSubscriberCount(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot27;
            var3 = var4.find;
            var1 = function(arg1) {
                var2 = _closure2_slot0;
                var3 = _closure1_slot8;
                var1 = arg1;
                var1 = var3[var1];
                var1 = var2 >= var1;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 == var1)) { _fun0009_ip = 55; continue _fun0009 }
case 56:
            var2 = _closure1_slot9;
            var1 = var2.NONE;
case 55:
            return var1;
        }
    };
    var _closure1_slot42 = var6;
    var5 = function getNextPremiumTierForSubscriberCount(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot26;
            var3 = var4.find;
            var1 = function(arg1) {
                var2 = _closure2_slot0;
                var3 = _closure1_slot8;
                var1 = arg1;
                var1 = var3[var1];
                var1 = var2 < var1;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 == var1)) { _fun0010_ip = 55; continue _fun0010 }
case 56:
            var2 = _closure1_slot9;
            var1 = var2.TIER_3;
case 55:
            return var1;
        }
    };
    var _closure1_slot43 = var5;
    var4 = global;
    var16 = var4.Object;
    var15 = var16.defineProperty;
    var14 = {};
    var1 = true;
    var14['value'] = var1;
    var1 = '__esModule';
    var1 = var15.bind(var16)(var3, var1, var14);
    var28 = 0;
    var14 = var24[var28];
    var1 = undefined;
    var14 = var9.bind(var1)(var14);
    var _closure1_slot4 = var14;
    var26 = 1;
    var14 = var24[var26];
    var14 = var9.bind(var1)(var14);
    var _closure1_slot5 = var14;
    var27 = 2;
    var14 = var24[var27];
    var14 = var9.bind(var1)(var14);
    var _closure1_slot6 = var14;
    var20 = 3;
    var14 = var24[var20];
    var14 = var23.bind(var1)(var14);
    var15 = var14.AnalyticsObjectTypes;
    var _closure1_slot7 = var15;
    var29 = var14.AppliedGuildBoostsRequiredForBoostedGuildTier;
    var _closure1_slot8 = var29;
    var25 = var14.BoostedGuildTiers;
    var _closure1_slot9 = var25;
    var15 = var14.GuildFeatures;
    var _closure1_slot10 = var15;
    var15 = var14.HelpdeskArticles;
    var _closure1_slot11 = var15;
    var15 = var14.MAX_STAGE_VIDEO_USER_LIMIT_TIER2;
    var _closure1_slot12 = var15;
    var15 = var14.MAX_STAGE_VIDEO_USER_LIMIT_TIER3;
    var _closure1_slot13 = var15;
    var14 = var14.SubscriptionStatusTypes;
    var _closure1_slot14 = var14;
    var19 = 4;
    var14 = var24[var19];
    var14 = var23.bind(var1)(var14);
    var15 = var14.DEFAULT_EMOJI_SLOTS;
    var _closure1_slot15 = var15;
    var14 = var14.EMOJI_MAX_SLOTS_MORE;
    var _closure1_slot16 = var14;
    var18 = 5;
    var14 = var24[var18];
    var14 = var23.bind(var1)(var14);
    var15 = var14.BoostedGuildFeatures;
    var _closure1_slot17 = var15;
    var15 = var14.DEFAULT_SOUND_SLOTS;
    var _closure1_slot18 = var15;
    var15 = var14.MORE_SOUNDBOARD_SOUNDS;
    var _closure1_slot19 = var15;
    var15 = var14.FractionalPremiumStates;
    var _closure1_slot20 = var15;
    var15 = var14.IncrementalStickerCountsByTier;
    var _closure1_slot21 = var15;
    var15 = var14.TotalSoundboardSoundCountsByTier;
    var _closure1_slot22 = var15;
    var14 = var14.TotalStickerCountsByTier;
    var _closure1_slot23 = var14;
    var31 = {};
    var31['LEVEL_1'] = var26;
    var14 = 'LEVEL_1';
    var31[var26] = var14;
    var31['LEVEL_2'] = var27;
    var14 = 'LEVEL_2';
    var31[var27] = var14;
    var31['LEVEL_3'] = var20;
    var14 = 'LEVEL_3';
    var31[var20] = var14;
    var31['LEVEL_4'] = var19;
    var14 = 'LEVEL_4';
    var31[var19] = var14;
    var31['LEVEL_5'] = var18;
    var14 = 'LEVEL_5';
    var31[var18] = var14;
    var17 = 6;
    var31['LEVEL_6'] = var17;
    var14 = 'LEVEL_6';
    var31[var17] = var14;
    var16 = 7;
    var31['LEVEL_7'] = var16;
    var14 = 'LEVEL_7';
    var31[var16] = var14;
    var14 = 8;
    var31['LEVEL_8'] = var14;
    var15 = 'LEVEL_8';
    var31[var14] = var15;
    var22 = 9;
    var31['LEVEL_9'] = var22;
    var15 = 'LEVEL_9';
    var31[var22] = var15;
    var30 = var4.Object;
    var21 = var30.freeze;
    var4 = {};
    var15 = var31.LEVEL_1;
    var4[var15] = var26;
    var15 = var31.LEVEL_2;
    var4[var15] = var27;
    var15 = var31.LEVEL_3;
    var4[var15] = var20;
    var15 = var31.LEVEL_4;
    var4[var15] = var17;
    var15 = var31.LEVEL_5;
    var4[var15] = var22;
    var22 = var31.LEVEL_6;
    var15 = 12;
    var4[var22] = var15;
    var32 = var31.LEVEL_7;
    var22 = 15;
    var4[var32] = var22;
    var32 = var31.LEVEL_8;
    var22 = 18;
    var4[var32] = var22;
    var32 = var31.LEVEL_9;
    var31 = 24;
    var4[var32] = var31;
    var4 = var21.bind(var30)(var4);
    var _closure1_slot24 = var4;
    var21 = {};
    var21['EMOJI'] = var26;
    var4 = 'EMOJI';
    var21[var26] = var4;
    var21['AUDIO'] = var27;
    var4 = 'AUDIO';
    var21[var27] = var4;
    var21['ANIMATED'] = var20;
    var4 = 'ANIMATED';
    var21[var20] = var4;
    var21['CUSTOMIZATION'] = var19;
    var4 = 'CUSTOMIZATION';
    var21[var19] = var4;
    var21['UPLOAD'] = var18;
    var4 = 'UPLOAD';
    var21[var18] = var4;
    var21['VANITY'] = var17;
    var4 = 'VANITY';
    var21[var17] = var4;
    var21['STREAM'] = var16;
    var4 = 'STREAM';
    var21[var16] = var4;
    var21['STICKER'] = var14;
    var4 = 'STICKER';
    var21[var14] = var4;
    var4 = 11;
    var21['CUSTOM_ROLE_ICON'] = var4;
    var14 = 'CUSTOM_ROLE_ICON';
    var21[var4] = var14;
    var21['STAGE_VIDEO'] = var15;
    var14 = 'STAGE_VIDEO';
    var21[var15] = var14;
    var15 = 13;
    var21['SOUNDBOARD'] = var15;
    var14 = 'SOUNDBOARD';
    var21[var15] = var14;
    var _closure1_slot25 = var21;
    var14 = var25.NONE;
    var20 = new Array(4);
    var20[0] = var14;
    var14 = var25.TIER_1;
    var20[1] = var14;
    var14 = var25.TIER_2;
    var20[2] = var14;
    var14 = var25.TIER_3;
    var20[3] = var14;
    var _closure1_slot26 = var20;
    var14 = var20.slice;
    var15 = var14.bind(var20)();
    var14 = var15.reverse;
    var19 = var14.bind(var15)();
    var _closure1_slot27 = var19;
    var18 = function getTotalStickerCountForTier(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = arg1;
            var1 = arg2;
            var2 = null;
            if(!(var2 != var1)) { _fun0011_ip = 57; continue _fun0011 }
case 58:
            var5 = var1.features;
            var4 = var5.has;
            var1 = _closure1_slot10;
            var1 = var1.MORE_STICKERS;
            var1 = var4.bind(var5)(var1);
            if(!var1) { _fun0011_ip = 57; continue _fun0011 }
case 59:
            var1 = _closure1_slot9;
            var1 = var1.TIER_3;
            if(!(var3 !== var1)) { _fun0011_ip = 60; continue _fun0011 }
case 57:
            var1 = _closure1_slot23;
            var1 = var1[var3];
            _fun0011_ip = 61; continue _fun0011;
case 60:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.PremiumGuildOverrides;
            var1 = var2.MAX_STICKER_SLOTS;
case 61:
            return var1;
        }
    };
    var _closure1_slot28 = var18;
    var17 = function getIncrementalStickerCountForTier(arg1) {
        var2 = _closure1_slot21;
        var1 = arg1;
        var1 = var2[var1];
        return var1;
    };
    var _closure1_slot29 = var17;
    var16 = function getTotalSoundboardSoundCountForTier(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg2;
            var2 = null;
            if(!(var2 != var1)) { _fun0012_ip = 39; continue _fun0012 }
case 62:
            var4 = var1.features;
            var3 = var4.has;
            var1 = _closure1_slot10;
            var1 = var1.MORE_SOUNDBOARD;
            var1 = var3.bind(var4)(var1);
            if(var1) { _fun0012_ip = 63; continue _fun0012 }
case 39:
            var3 = _closure1_slot22;
            var1 = arg1;
            var1 = var3[var1];
            _fun0012_ip = 7; continue _fun0012;
case 63:
            var1 = _closure1_slot19;
case 7:
            return var1;
        }
    };
    var _closure1_slot30 = var16;
    var15 = function getIncrementalSoundboardSoundCountForTier(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot9;
            var3 = var3.NONE;
            if(!(var2 !== var3)) { _fun0013_ip = 64; continue _fun0013 }
case 29:
            var4 = _closure1_slot26;
            var3 = var4.indexOf;
            var5 = var3.bind(var4)(var2);
            var3 = 1;
            var3 = var5 - var3;
            var5 = var4[var3];
            var3 = _closure1_slot22;
            var4 = var3[var2];
            var3 = var3[var5];
            var3 = var4 - var3;
            return var3;
case 64:
            var1 = _closure1_slot22;
            var1 = var1[var2];
            return var1;
        }
    };
    var _closure1_slot31 = var15;
    var4 = var24[var4];
    var14 = var9.bind(var1)(var4);
    var9 = var14.memoize;
    var4 = function(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot17;
            var1 = _closure1_slot9;
            var1 = var1.TIER_1;
            var1 = var3[var1];
            var3 = var1.features;
            var1 = var3.includes;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0014_ip = 65; continue _fun0014 }
case 66:
            var3 = _closure1_slot17;
            var1 = _closure1_slot9;
            var1 = var1.TIER_2;
            var1 = var3[var1];
            var3 = var1.features;
            var1 = var3.includes;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0014_ip = 67; continue _fun0014 }
case 68:
            var3 = _closure1_slot17;
            var1 = _closure1_slot9;
            var1 = var1.TIER_3;
            var1 = var3[var1];
            var3 = var1.features;
            var1 = var3.includes;
            var3 = var1.bind(var3)(var4);
            var1 = null;
            if(!var3) { _fun0014_ip = 69; continue _fun0014 }
case 70:
            var3 = _closure1_slot9;
            var1 = var3.TIER_3;
case 69:
            _fun0014_ip = 71; continue _fun0014;
case 67:
            var3 = _closure1_slot9;
            var1 = var3.TIER_2;
case 71:
            _fun0014_ip = 72; continue _fun0014;
case 65:
            var2 = _closure1_slot9;
            var1 = var2.TIER_1;
case 72:
            return var1;
        }
    };
    var14 = var9.bind(var14)(var4);
    var4 = {};
    var9 = var25.TIER_3;
    var4['tier'] = var9;
    var9 = var25.TIER_3;
    var9 = var29[var9];
    var4['amount'] = var9;
    var9 = null;
    var4['nextTier'] = var9;
    var9 = new Array(3);
    var9[0] = var4;
    var4 = {};
    var27 = var25.TIER_2;
    var4['tier'] = var27;
    var27 = var25.TIER_2;
    var27 = var29[var27];
    var4['amount'] = var27;
    var27 = var25.TIER_3;
    var4['nextTier'] = var27;
    var9[1] = var4;
    var4 = {};
    var27 = var25.TIER_1;
    var4['tier'] = var27;
    var27 = var25.TIER_1;
    var27 = var29[var27];
    var4['amount'] = var27;
    var27 = var25.TIER_2;
    var4['nextTier'] = var27;
    var9[2] = var4;
    var _closure1_slot32 = var9;
    var4 = {};
    var27 = var25.NONE;
    var4[var27] = var28;
    var28 = var25.TIER_1;
    var27 = 0.3333333333333333;
    var4[var28] = var27;
    var28 = var25.TIER_2;
    var27 = 0.6666666666666666;
    var4[var28] = var27;
    var25 = var25.TIER_3;
    var4[var25] = var26;
    var _closure1_slot33 = var4;
    var22 = var24[var22];
    var24 = var23.bind(var1)(var22);
    var23 = var24.fileFinishedImporting;
    var22 = 'utils/GuildBoostingUtils.tsx';
    var22 = var23.bind(var24)(var22);
    var3['PerkIcons'] = var21;
    var3['OrderedTiers'] = var20;
    var3['ReverseOrderedTiers'] = var19;
    var19 = function(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var3 = _closure1_slot9;
            var3 = var3.NONE;
            if(!(var4 !== var3)) { _fun0015_ip = 73; continue _fun0015 }
case 42:
            var4 = _closure1_slot32;
            var3 = var4.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.tier;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var3.bind(var4)(var1);
            var1 = null;
            var4 = var1 == var3;
            var1 = undefined;
            if(var4) { _fun0015_ip = 74; continue _fun0015 }
case 63:
            var1 = var3.nextTier;
case 74:
            _fun0015_ip = 75; continue _fun0015;
case 73:
            var2 = _closure1_slot9;
            var1 = var2.TIER_1;
case 75:
            return var1;
        }
    };
    var3['getNextTier'] = var19;
    var3['getTotalStickerCountForTier'] = var18;
    var3['getIncrementalStickerCountForTier'] = var17;
    var3['getTotalSoundboardSoundCountForTier'] = var16;
    var3['getIncrementalSoundboardSoundCountForTier'] = var15;
    var15 = function(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var6 = arg1;
            var2 = {};
            var1 = _closure1_slot9;
            var1 = var1.TIER_1;
            var2['tier'] = var1;
            var13 = _closure1_slot0;
            var9 = _closure1_slot3;
            var14 = 7;
            var1 = var9[var14];
            var7 = undefined;
            var1 = var13.bind(var7)(var1);
            var5 = var1.intl;
            var4 = var5.string;
            var1 = var9[var14];
            var1 = var13.bind(var7)(var1);
            var1 = var1.t;
            var1 = var1.lK+WOT;
            var1 = var4.bind(var5)(var1);
            var2['title'] = var1;
            var1 = {};
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var10 = var4.intl;
            var8 = var10.formatToPlainString;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var4 = var4.t;
            var5 = var4.dnLAws;
            var4 = {};
            var19 = _closure1_slot17;
            var11 = _closure1_slot9;
            var11 = var11.TIER_1;
            var11 = var19[var11];
            var11 = var11.limits;
            var12 = var11.emoji;
            var11 = _closure1_slot9;
            var11 = var11.NONE;
            var11 = var19[var11];
            var11 = var11.limits;
            var11 = var11.emoji;
            var11 = var12 - var11;
            var4['adding'] = var11;
            var11 = _closure1_slot9;
            var11 = var11.TIER_1;
            var11 = var19[var11];
            var11 = var11.limits;
            var11 = var11.emoji;
            var4['total'] = var11;
            var4 = var8.bind(var10)(var5, var4);
            var1['title'] = var4;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var8 = var4.intl;
            var5 = var8.string;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4./Guvxs;
            var4 = var5.bind(var8)(var4);
            var1['description'] = var4;
            var5 = _closure1_slot25;
            var4 = var5.EMOJI;
            var1['icon'] = var4;
            var10 = new Array(7);
            var10[0] = var1;
            var1 = {};
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var12 = var4.intl;
            var11 = var12.formatToPlainString;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var4 = var4.t;
            var8 = var4./9p2/v;
            var4 = {};
            var23 = _closure1_slot29;
            var15 = _closure1_slot9;
            var15 = var15.TIER_1;
            var15 = var23.bind(var7)(var15);
            var4['adding'] = var15;
            var22 = _closure1_slot28;
            var15 = _closure1_slot9;
            var15 = var15.TIER_1;
            var15 = var22.bind(var7)(var15);
            var4['total'] = var15;
            var4 = var11.bind(var12)(var8, var4);
            var1['title'] = var4;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var11 = var4.intl;
            var8 = var11.string;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.JfsnDQ;
            var4 = var8.bind(var11)(var4);
            var1['description'] = var4;
            var4 = var5.STICKER;
            var1['icon'] = var4;
            var10[1] = var1;
            var1 = {};
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var12 = var4.intl;
            var11 = var12.formatToPlainString;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var4 = var4.t;
            var8 = var4.NRuk5u;
            var4 = {};
            var20 = _closure1_slot31;
            var15 = _closure1_slot9;
            var15 = var15.TIER_1;
            var15 = var20.bind(var7)(var15);
            var4['soundCount'] = var15;
            var18 = _closure1_slot30;
            var15 = _closure1_slot9;
            var15 = var15.TIER_1;
            var15 = var18.bind(var7)(var15);
            var4['totalSoundCount'] = var15;
            var4 = var11.bind(var12)(var8, var4);
            var1['title'] = var4;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var11 = var4.intl;
            var8 = var11.string;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.Oq7OVl;
            var4 = var8.bind(var11)(var4);
            var1['description'] = var4;
            var4 = var5.SOUNDBOARD;
            var1['icon'] = var4;
            var10[2] = var1;
            var1 = {};
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var12 = var4.intl;
            var11 = var12.formatToPlainString;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var4 = var4.t;
            var8 = var4.zoT1ZG;
            var4 = {};
            var15 = _closure1_slot9;
            var15 = var15.TIER_1;
            var15 = var19[var15];
            var15 = var15.limits;
            var15 = var15.bitrate;
            var21 = 1000;
            var15 = var15 / var21;
            var4['bitrate'] = var15;
            var4 = var11.bind(var12)(var8, var4);
            var1['title'] = var4;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var11 = var4.intl;
            var8 = var11.string;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.8a03jo;
            var4 = var8.bind(var11)(var4);
            var1['description'] = var4;
            var4 = var5.AUDIO;
            var1['icon'] = var4;
            var10[3] = var1;
            var1 = {};
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var11 = var4.intl;
            var8 = var11.string;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.h0s84e;
            var4 = var8.bind(var11)(var4);
            var1['title'] = var4;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var12 = var4.intl;
            var11 = var12.format;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var4 = var4.t;
            var8 = var4.t+0cbm;
            var4 = {};
            var4 = var11.bind(var12)(var8, var4);
            var1['description'] = var4;
            var4 = var5.ANIMATED;
            var1['icon'] = var4;
            var10[4] = var1;
            var1 = {};
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var11 = var4.intl;
            var8 = var11.string;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.vjPGPj;
            var4 = var8.bind(var11)(var4);
            var1['title'] = var4;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var11 = var4.intl;
            var8 = var11.string;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.tG4MMT;
            var4 = var8.bind(var11)(var4);
            var1['description'] = var4;
            var4 = var5.CUSTOMIZATION;
            var1['icon'] = var4;
            var10[5] = var1;
            var1 = {};
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var11 = var4.intl;
            var8 = var11.string;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.cObMZG;
            var4 = var8.bind(var11)(var4);
            var1['title'] = var4;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var11 = var4.intl;
            var8 = var11.string;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.puH/9f;
            var4 = var8.bind(var11)(var4);
            var1['description'] = var4;
            var4 = var5.STREAM;
            var1['icon'] = var4;
            var10[6] = var1;
            var4 = var10.filter;
            var8 = 8;
            var1 = var9[var8];
            var1 = var13.bind(var7)(var1);
            var1 = var1.isNotNullish;
            var1 = var4.bind(var10)(var1);
            var2['perks'] = var1;
            var1 = new Array(3);
            var1[0] = var2;
            var2 = {};
            var4 = _closure1_slot9;
            var4 = var4.TIER_2;
            var2['tier'] = var4;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var11 = var4.intl;
            var10 = var11.string;
            var4 = var9[var14];
            var4 = var13.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.34GpBQ;
            var4 = var10.bind(var11)(var4);
            var2['title'] = var4;
            var4 = {};
            var10 = var9[var14];
            var10 = var13.bind(var7)(var10);
            var15 = var10.intl;
            var12 = var15.formatToPlainString;
            var10 = var9[var14];
            var10 = var13.bind(var7)(var10);
            var10 = var10.t;
            var11 = var10.dnLAws;
            var10 = {};
            var16 = _closure1_slot9;
            var16 = var16.TIER_2;
            var16 = var19[var16];
            var16 = var16.limits;
            var17 = var16.emoji;
            var16 = _closure1_slot9;
            var16 = var16.TIER_1;
            var16 = var19[var16];
            var16 = var16.limits;
            var16 = var16.emoji;
            var16 = var17 - var16;
            var10['adding'] = var16;
            var16 = _closure1_slot9;
            var16 = var16.TIER_2;
            var16 = var19[var16];
            var16 = var16.limits;
            var16 = var16.emoji;
            var10['total'] = var16;
            var10 = var12.bind(var15)(var11, var10);
            var4['title'] = var10;
            var10 = var9[var14];
            var10 = var13.bind(var7)(var10);
            var12 = var10.intl;
            var11 = var12.string;
            var10 = var9[var14];
            var10 = var13.bind(var7)(var10);
            var10 = var10.t;
            var10 = var10.fRiNh4;
            var10 = var11.bind(var12)(var10);
            var4['description'] = var10;
            var10 = var5.EMOJI;
            var4['icon'] = var10;
            var10 = new Array(9);
            var10[0] = var4;
            var4 = {};
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var16 = var11.intl;
            var15 = var16.formatToPlainString;
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var12 = var11./9p2/v;
            var11 = {};
            var17 = _closure1_slot9;
            var17 = var17.TIER_2;
            var17 = var23.bind(var7)(var17);
            var11['adding'] = var17;
            var17 = _closure1_slot9;
            var17 = var17.TIER_2;
            var17 = var22.bind(var7)(var17);
            var11['total'] = var17;
            var11 = var15.bind(var16)(var12, var11);
            var4['title'] = var11;
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var15 = var11.intl;
            var12 = var15.string;
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.t4TM29;
            var11 = var12.bind(var15)(var11);
            var4['description'] = var11;
            var11 = var5.STICKER;
            var4['icon'] = var11;
            var10[1] = var4;
            var4 = {};
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var16 = var11.intl;
            var15 = var16.formatToPlainString;
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var12 = var11.NRuk5u;
            var11 = {};
            var17 = _closure1_slot9;
            var17 = var17.TIER_2;
            var17 = var20.bind(var7)(var17);
            var11['soundCount'] = var17;
            var17 = _closure1_slot9;
            var17 = var17.TIER_2;
            var17 = var18.bind(var7)(var17);
            var11['totalSoundCount'] = var17;
            var11 = var15.bind(var16)(var12, var11);
            var4['title'] = var11;
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var15 = var11.intl;
            var12 = var15.string;
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.pEYlPT;
            var11 = var12.bind(var15)(var11);
            var4['description'] = var11;
            var11 = var5.SOUNDBOARD;
            var4['icon'] = var11;
            var10[2] = var4;
            var4 = {};
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var16 = var11.intl;
            var15 = var16.formatToPlainString;
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var12 = var11.zoT1ZG;
            var11 = {};
            var17 = _closure1_slot9;
            var17 = var17.TIER_2;
            var17 = var19[var17];
            var17 = var17.limits;
            var17 = var17.bitrate;
            var17 = var17 / var21;
            var11['bitrate'] = var17;
            var11 = var15.bind(var16)(var12, var11);
            var4['title'] = var11;
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var15 = var11.intl;
            var12 = var15.string;
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.nzRo/P;
            var11 = var12.bind(var15)(var11);
            var4['description'] = var11;
            var11 = var5.AUDIO;
            var4['icon'] = var11;
            var10[3] = var4;
            var4 = {};
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var15 = var11.intl;
            var12 = var15.string;
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.+KhQKC;
            var11 = var12.bind(var15)(var11);
            var4['title'] = var11;
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var15 = var11.intl;
            var12 = var15.string;
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.ZWf10N;
            var11 = var12.bind(var15)(var11);
            var4['description'] = var11;
            var11 = var5.CUSTOMIZATION;
            var4['icon'] = var11;
            var10[4] = var4;
            var4 = {};
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var16 = var11.intl;
            var15 = var16.formatToPlainString;
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var12 = var11.t95LnJ;
            var11 = {};
            var18 = 9;
            var17 = var9[var18];
            var24 = var13.bind(var7)(var17);
            var23 = var24.formatSize;
            var17 = _closure1_slot9;
            var17 = var17.TIER_2;
            var17 = var19[var17];
            var17 = var17.limits;
            var17 = var17.fileSize;
            var19 = 1024;
            var20 = var17 / var19;
            var17 = {};
            var22 = true;
            var17['useKibibytes'] = var22;
            var17 = var23.bind(var24)(var20, var17);
            var11['fileSize'] = var17;
            var11 = var15.bind(var16)(var12, var11);
            var4['title'] = var11;
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var16 = var11.intl;
            var15 = var16.format;
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var12 = var11.yvht6+;
            var11 = {};
            var11 = var15.bind(var16)(var12, var11);
            var4['description'] = var11;
            var11 = var5.UPLOAD;
            var4['icon'] = var11;
            var10[5] = var4;
            var4 = {};
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var15 = var11.intl;
            var12 = var15.string;
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.bmaoND;
            var11 = var12.bind(var15)(var11);
            var4['title'] = var11;
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var15 = var11.intl;
            var12 = var15.string;
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.WZW2Bg;
            var11 = var12.bind(var15)(var11);
            var4['description'] = var11;
            var11 = var5.STREAM;
            var4['icon'] = var11;
            var10[6] = var4;
            var4 = {};
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var15 = var11.intl;
            var12 = var15.string;
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.BHtqcX;
            var11 = var12.bind(var15)(var11);
            var4['title'] = var11;
            var11 = var9[var14];
            var11 = var13.bind(var7)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var9[var14];
            var9 = var13.bind(var7)(var9);
            var9 = var9.t;
            var9 = var9.ukVcER;
            var9 = var11.bind(var12)(var9);
            var4['description'] = var9;
            var5 = var5.CUSTOM_ROLE_ICON;
            var4['icon'] = var5;
            var10[7] = var4;
            var5 = null;
            if(!var6) { _fun0016_ip = 76; continue _fun0016 }
case 77:
            var9 = {};
            var12 = _closure1_slot0;
            var11 = _closure1_slot3;
            var13 = var11[var14];
            var13 = var12.bind(var7)(var13);
            var20 = var13.intl;
            var17 = var20.formatToPlainString;
            var13 = var11[var14];
            var13 = var12.bind(var7)(var13);
            var13 = var13.t;
            var15 = var13.T8P3TE;
            var13 = {};
            var16 = _closure1_slot12;
            var13['limit'] = var16;
            var13 = var17.bind(var20)(var15, var13);
            var9['title'] = var13;
            var13 = var11[var14];
            var13 = var12.bind(var7)(var13);
            var15 = var13.intl;
            var13 = var15.formatToPlainString;
            var11 = var11[var14];
            var11 = var12.bind(var7)(var11);
            var11 = var11.t;
            var12 = var11.T8P3TE;
            var11 = {};
            var11['limit'] = var16;
            var11 = var13.bind(var15)(var12, var11);
            var9['description'] = var11;
            var11 = _closure1_slot25;
            var11 = var11.STAGE_VIDEO;
            var9['icon'] = var11;
            var5 = var9;
case 76:
            var10[8] = var5;
            var9 = var10.filter;
            var15 = _closure1_slot0;
            var11 = _closure1_slot3;
            var5 = var11[var8];
            var5 = var15.bind(var7)(var5);
            var5 = var5.isNotNullish;
            var5 = var9.bind(var10)(var5);
            var2['perks'] = var5;
            var1[1] = var2;
            var2 = {};
            var5 = _closure1_slot9;
            var5 = var5.TIER_3;
            var2['tier'] = var5;
            var5 = var11[var14];
            var5 = var15.bind(var7)(var5);
            var10 = var5.intl;
            var9 = var10.string;
            var5 = var11[var14];
            var5 = var15.bind(var7)(var5);
            var5 = var5.t;
            var5 = var5.P7LdcX;
            var5 = var9.bind(var10)(var5);
            var2['title'] = var5;
            var9 = {};
            var5 = var11[var14];
            var5 = var15.bind(var7)(var5);
            var13 = var5.intl;
            var12 = var13.formatToPlainString;
            var5 = var11[var14];
            var5 = var15.bind(var7)(var5);
            var5 = var5.t;
            var10 = var5.dnLAws;
            var5 = {};
            var23 = _closure1_slot17;
            var16 = _closure1_slot9;
            var16 = var16.TIER_3;
            var16 = var23[var16];
            var16 = var16.limits;
            var17 = var16.emoji;
            var16 = _closure1_slot9;
            var16 = var16.TIER_2;
            var16 = var23[var16];
            var16 = var16.limits;
            var16 = var16.emoji;
            var16 = var17 - var16;
            var5['adding'] = var16;
            var16 = _closure1_slot9;
            var16 = var16.TIER_3;
            var16 = var23[var16];
            var16 = var16.limits;
            var16 = var16.emoji;
            var5['total'] = var16;
            var5 = var12.bind(var13)(var10, var5);
            var9['title'] = var5;
            var5 = var11[var14];
            var5 = var15.bind(var7)(var5);
            var12 = var5.intl;
            var10 = var12.string;
            var5 = var11[var14];
            var5 = var15.bind(var7)(var5);
            var5 = var5.t;
            var5 = var5.AfJxnZ;
            var5 = var10.bind(var12)(var5);
            var9['description'] = var5;
            var10 = _closure1_slot25;
            var5 = var10.EMOJI;
            var9['icon'] = var5;
            var5 = new Array(8);
            var5[0] = var9;
            var9 = {};
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var17 = var12.intl;
            var16 = var17.formatToPlainString;
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var12 = var12.t;
            var13 = var12./9p2/v;
            var12 = {};
            var24 = _closure1_slot29;
            var20 = _closure1_slot9;
            var20 = var20.TIER_3;
            var20 = var24.bind(var7)(var20);
            var12['adding'] = var20;
            var24 = _closure1_slot28;
            var20 = _closure1_slot9;
            var20 = var20.TIER_3;
            var20 = var24.bind(var7)(var20);
            var12['total'] = var20;
            var12 = var16.bind(var17)(var13, var12);
            var9['title'] = var12;
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var16 = var12.intl;
            var13 = var16.string;
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var12 = var12.t;
            var12 = var12.+ZI4QU;
            var12 = var13.bind(var16)(var12);
            var9['description'] = var12;
            var12 = var10.STICKER;
            var9['icon'] = var12;
            var5[1] = var9;
            var9 = {};
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var17 = var12.intl;
            var16 = var17.formatToPlainString;
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var12 = var12.t;
            var13 = var12.NRuk5u;
            var12 = {};
            var24 = _closure1_slot31;
            var20 = _closure1_slot9;
            var20 = var20.TIER_3;
            var20 = var24.bind(var7)(var20);
            var12['soundCount'] = var20;
            var24 = _closure1_slot30;
            var20 = _closure1_slot9;
            var20 = var20.TIER_3;
            var20 = var24.bind(var7)(var20);
            var12['totalSoundCount'] = var20;
            var12 = var16.bind(var17)(var13, var12);
            var9['title'] = var12;
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var16 = var12.intl;
            var13 = var16.string;
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var12 = var12.t;
            var12 = var12.8omJSU;
            var12 = var13.bind(var16)(var12);
            var9['description'] = var12;
            var12 = var10.SOUNDBOARD;
            var9['icon'] = var12;
            var5[2] = var9;
            var9 = {};
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var17 = var12.intl;
            var16 = var17.formatToPlainString;
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var12 = var12.t;
            var13 = var12.zoT1ZG;
            var12 = {};
            var20 = _closure1_slot9;
            var20 = var20.TIER_3;
            var20 = var23[var20];
            var20 = var20.limits;
            var20 = var20.bitrate;
            var20 = var20 / var21;
            var12['bitrate'] = var20;
            var12 = var16.bind(var17)(var13, var12);
            var9['title'] = var12;
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var16 = var12.intl;
            var13 = var16.string;
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var12 = var12.t;
            var12 = var12.cOkbp6;
            var12 = var13.bind(var16)(var12);
            var9['description'] = var12;
            var12 = var10.AUDIO;
            var9['icon'] = var12;
            var5[3] = var9;
            var9 = {};
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var16 = var12.intl;
            var13 = var16.string;
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var12 = var12.t;
            var12 = var12.C2w2cH;
            var12 = var13.bind(var16)(var12);
            var9['title'] = var12;
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var17 = var12.intl;
            var16 = var17.format;
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var12 = var12.t;
            var13 = var12.3Reos7;
            var12 = {};
            var21 = _closure1_slot1;
            var20 = 10;
            var20 = var11[var20];
            var24 = var21.bind(var7)(var20);
            var21 = var24.getArticleURL;
            var20 = _closure1_slot11;
            var20 = var20.GUILD_VANITY_URL;
            var20 = var21.bind(var24)(var20);
            var12['helpdeskArticle'] = var20;
            var12 = var16.bind(var17)(var13, var12);
            var9['description'] = var12;
            var12 = var10.VANITY;
            var9['icon'] = var12;
            var5[4] = var9;
            var9 = {};
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var17 = var12.intl;
            var16 = var17.formatToPlainString;
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var12 = var12.t;
            var13 = var12.t95LnJ;
            var12 = {};
            var18 = var11[var18];
            var21 = var15.bind(var7)(var18);
            var20 = var21.formatSize;
            var18 = _closure1_slot9;
            var18 = var18.TIER_3;
            var18 = var23[var18];
            var18 = var18.limits;
            var18 = var18.fileSize;
            var19 = var18 / var19;
            var18 = {};
            var18['useKibibytes'] = var22;
            var18 = var20.bind(var21)(var19, var18);
            var12['fileSize'] = var18;
            var12 = var16.bind(var17)(var13, var12);
            var9['title'] = var12;
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var17 = var12.intl;
            var16 = var17.format;
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var12 = var12.t;
            var13 = var12.IwDqSE;
            var12 = {};
            var12 = var16.bind(var17)(var13, var12);
            var9['description'] = var12;
            var12 = var10.UPLOAD;
            var9['icon'] = var12;
            var5[5] = var9;
            var9 = {};
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var16 = var12.intl;
            var13 = var16.string;
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var12 = var12.t;
            var12 = var12.z0GtBA;
            var12 = var13.bind(var16)(var12);
            var9['title'] = var12;
            var12 = var11[var14];
            var12 = var15.bind(var7)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var11[var14];
            var11 = var15.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.v92GNT;
            var11 = var12.bind(var13)(var11);
            var9['description'] = var11;
            var10 = var10.ANIMATED;
            var9['icon'] = var10;
            var5[6] = var9;
            var4 = null;
            if(!var6) { _fun0016_ip = 78; continue _fun0016 }
case 79:
            var6 = {};
            var10 = _closure1_slot0;
            var9 = _closure1_slot3;
            var11 = var9[var14];
            var11 = var10.bind(var7)(var11);
            var16 = var11.intl;
            var15 = var16.formatToPlainString;
            var11 = var9[var14];
            var11 = var10.bind(var7)(var11);
            var11 = var11.t;
            var12 = var11.T8P3TE;
            var11 = {};
            var13 = _closure1_slot13;
            var11['limit'] = var13;
            var11 = var15.bind(var16)(var12, var11);
            var6['title'] = var11;
            var11 = var9[var14];
            var11 = var10.bind(var7)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var9 = var9[var14];
            var9 = var10.bind(var7)(var9);
            var9 = var9.t;
            var10 = var9.T8P3TE;
            var9 = {};
            var9['limit'] = var13;
            var9 = var11.bind(var12)(var10, var9);
            var6['description'] = var9;
            var9 = _closure1_slot25;
            var9 = var9.STAGE_VIDEO;
            var6['icon'] = var9;
            var4 = var6;
case 78:
            var5[7] = var4;
            var4 = var5.filter;
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var8];
            var3 = var6.bind(var7)(var3);
            var3 = var3.isNotNullish;
            var3 = var4.bind(var5)(var3);
            var2['perks'] = var3;
            var1[2] = var2;
            return var1;
        }
    };
    var3['getTiers'] = var15;
    var15 = function getTierName(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var4 = arg1;
            var1 = arguments[1];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0017_ip = 32; continue _fun0017 }
case 58:
            var1 = {};
case 32:
            var2 = var1.useLevels;
            var1 = var6 === var2;
            if(var1) { _fun0017_ip = 3; continue _fun0017 }
case 48:
            var1 = var2;
case 3:
            var3 = _closure1_slot9;
            var3 = var3.NONE;
            if(!(var3 !== var4)) { _fun0017_ip = 80; continue _fun0017 }
case 81:
            var3 = _closure1_slot9;
            var3 = var3.TIER_1;
            if(!(var3 !== var4)) { _fun0017_ip = 82; continue _fun0017 }
case 30:
            var3 = _closure1_slot9;
            var3 = var3.TIER_2;
            if(!(var3 !== var4)) { _fun0017_ip = 83; continue _fun0017 }
case 84:
            var3 = _closure1_slot9;
            var3 = var3.TIER_3;
            if(!(var3 !== var4)) { _fun0017_ip = 67; continue _fun0017 }
case 85:
            var3 = global;
            var5 = var3.Error;
            var3 = var5.prototype;
            var4 = Object.create(var3, {constructor: {value: var5}});
            var9 = 'Not a valid tier type';
            var10 = var4;
            var3 = new var10[var5](var9, var8);
            var3 = var3 instanceof Object ? var3 : var4;
            throw var3;
case 67:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 7;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.BfF6EB;
            var3 = var4.bind(var5)(var3);
            return var3;
case 83:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 7;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.h33/ub;
            var3 = var4.bind(var5)(var3);
            return var3;
case 82:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 7;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.nzXtaW;
            var3 = var4.bind(var5)(var3);
            return var3;
case 80:
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 7;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            if(var1) { _fun0017_ip = 86; continue _fun0017 }
case 87:
            var1 = var2.mx8j2t;
            var1 = var3.bind(var4)(var1);
            _fun0017_ip = 88; continue _fun0017;
case 86:
            var2 = var2.LcKgJS;
            var1 = var3.bind(var4)(var2);
case 88:
            return var1;
        }
    };
    var3['getTierName'] = var15;
    var15 = function getShortenedTierName(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot9;
            var2 = var2.NONE;
            if(!(var2 !== var3)) { _fun0018_ip = 89; continue _fun0018 }
case 31:
            var2 = _closure1_slot9;
            var2 = var2.TIER_1;
            if(!(var2 !== var3)) { _fun0018_ip = 90; continue _fun0018 }
case 91:
            var2 = _closure1_slot9;
            var2 = var2.TIER_2;
            if(!(var2 !== var3)) { _fun0018_ip = 92; continue _fun0018 }
case 93:
            var2 = _closure1_slot9;
            var2 = var2.TIER_3;
            if(!(var2 !== var3)) { _fun0018_ip = 94; continue _fun0018 }
case 47:
            var2 = global;
            var4 = var2.Error;
            var2 = var4.prototype;
            var3 = Object.create(var2, {constructor: {value: var4}});
            var8 = 'Not a valid tier type';
            var9 = var3;
            var2 = new var9[var4](var8, var7);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 94:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 7;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.avGxmp;
            var2 = var3.bind(var4)(var2);
            return var2;
case 92:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 7;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.C7e2Bg;
            var2 = var3.bind(var4)(var2);
            return var2;
case 90:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 7;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.xRjU1d;
            var2 = var3.bind(var4)(var2);
            return var2;
case 89:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 7;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.LcKgJS;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getShortenedTierName'] = var15;
    var3['minimumRequiredTierForGuildFeature'] = var14;
    var14 = function(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot9;
            var1 = var1.NONE;
            if(!(var4 !== var1)) { _fun0019_ip = 95; continue _fun0019 }
case 29:
            var1 = _closure1_slot9;
            var1 = var1.TIER_1;
            if(!(var4 !== var1)) { _fun0019_ip = 96; continue _fun0019 }
case 97:
            var1 = _closure1_slot9;
            var1 = var1.TIER_2;
            if(!(var4 !== var1)) { _fun0019_ip = 98; continue _fun0019 }
case 55:
            var1 = _closure1_slot9;
            var3 = var1.TIER_3;
            var1 = null;
            if(!(var4 === var3)) { _fun0019_ip = 99; continue _fun0019 }
case 64:
            var3 = _closure1_slot7;
            var1 = var3.TIER_3;
case 99:
            _fun0019_ip = 9; continue _fun0019;
case 98:
            var3 = _closure1_slot7;
            var1 = var3.TIER_2;
case 9:
            _fun0019_ip = 100; continue _fun0019;
case 96:
            var3 = _closure1_slot7;
            var1 = var3.TIER_1;
case 100:
            _fun0019_ip = 13; continue _fun0019;
case 95:
            var2 = _closure1_slot7;
            var1 = var2.NONE;
case 13:
            return var1;
        }
    };
    var3['boostedGuildTierToAnalyticsObjectType'] = var14;
    var3['getGuildTierFromGuild'] = var13;
    var13 = function getNextGuildTierFromGuild(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var3 = _closure1_slot36;
            var7 = undefined;
            var2 = arg1;
            var6 = var3.bind(var7)(var2);
            var3 = _closure1_slot34;
            var2 = _closure1_slot32;
            var5 = var3.bind(var7)(var2);
            var3 = var5.bind(var7)();
            var2 = var3.done;
            var4 = var3;
            if(var2) { _fun0020_ip = 101; continue _fun0020 }
case 49:
            var2 = var4.value;
            var3 = var2.tier;
            if(!(var6 !== var3)) { _fun0020_ip = 102; continue _fun0020 }
case 103:
            var8 = var5.bind(var7)();
            var3 = var8.done;
            var4 = var8;
            if(var3) { _fun0020_ip = 101; continue _fun0020 }
case 75:
            _fun0020_ip = 49; continue _fun0020;
case 102:
            var2 = var2.nextTier;
            return var2;
case 101:
            var1 = _closure1_slot9;
            var1 = var1.TIER_1;
            return var1;
        }
    };
    var3['getNextGuildTierFromGuild'] = var13;
    var13 = function getAppliedGuildBoostMonths(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var2 = _closure1_slot1;
            var6 = _closure1_slot3;
            var1 = 12;
            var3 = var6[var1];
            var5 = undefined;
            var3 = var2.bind(var5)(var3);
            var4 = var3.bind(var5)();
            var3 = var4.diff;
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = arg1;
            var2 = var2.bind(var5)(var1);
            var1 = 'months';
            var2 = var3.bind(var4)(var2, var1);
            var1 = null;
            var3 = var1 != var2;
            var1 = 1;
            if(!var3) { _fun0021_ip = 102; continue _fun0021 }
case 99:
            var1 = var2;
case 102:
            return var1;
        }
    };
    var3['getAppliedGuildBoostMonths'] = var13;
    var13 = function getUserLevel(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 12;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var3.bind(var2)(var1);
            var4 = var1.bind(var2)();
            var3 = var4.diff;
            var2 = arg1;
            var1 = 'months';
            var6 = var3.bind(var4)(var2, var1);
            var1 = global;
            var3 = var1.Object;
            var2 = var3.keys;
            var1 = _closure1_slot24;
            var5 = var2.bind(var3)(var1);
            var1 = var5.length;
            var4 = 0;
            var2 = var4 < var1;
            var3 = 1;
            var1 = var3;
            if(!var2) { _fun0022_ip = 104; continue _fun0022 }
case 105:
            var2 = var5[var4];
            var8 = _closure1_slot24;
            var8 = var8[var2];
            if(!(!(var6 < var8))) { _fun0022_ip = 106; continue _fun0022 }
case 107:
            var3 = var2 - 0;
case 106:
            var4 = var4 + 1;
            var2 = var5.length;
            var1 = var3;
            if(var4 < var2) { _fun0022_ip = 105; continue _fun0022 }
case 104:
            return var1;
        }
    };
    var3['getUserLevel'] = var13;
    var3['isGuildBoostedAtLeast'] = var12;
    var12 = function isTierUnlocked(arg1, arg2) {
        var4 = _closure1_slot37;
        var1 = arg1;
        var3 = var1.premiumTier;
        var2 = undefined;
        var1 = arg2;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var3['isTierUnlocked'] = var12;
    var3['getAvailableGuildBoostSlots'] = var11;
    var11 = function generateBlockGuildSubscriptionPurchasesNode(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var8 = var1.fractionalState;
            var3 = _closure1_slot6;
            var1 = var3.getPremiumTypeSubscription;
            var3 = var1.bind(var3)();
            var1 = _closure1_slot5;
            var1 = var1.hasFetched;
            if(var1) { _fun0023_ip = 5; continue _fun0023 }
case 108:
            var4 = _closure1_slot5;
            var1 = var4.isFetching;
case 5:
            if(var1) { _fun0023_ip = 109; continue _fun0023 }
case 110:
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 13;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var1 = var4.fetchGuildBoostSlots;
            var1 = var1.bind(var4)();
case 109:
            var4 = _closure1_slot38;
            var1 = _closure1_slot5;
            var1 = var1.boostSlots;
            var6 = undefined;
            var4 = var4.bind(var6)(var1);
            var1 = null;
            var5 = var1 == var3;
            var7 = undefined;
            if(var5) { _fun0023_ip = 104; continue _fun0023 }
case 111:
            var7 = var3.isPausedOrPausePending;
case 104:
            var4 = var4.length;
            var5 = 0;
            var4 = var4 > var5;
            if(!var7) { _fun0023_ip = 112; continue _fun0023 }
case 113:
            var7 = _closure1_slot20;
            var7 = var7.NONE;
            if(!(var8 === var7)) { _fun0023_ip = 112; continue _fun0023 }
case 114:
            if(var4) { _fun0023_ip = 112; continue _fun0023 }
case 115:
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var4 = 7;
            var7 = var10[var4];
            var7 = var9.bind(var6)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var4 = var10[var4];
            var4 = var9.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.mOWsFx;
            var4 = var7.bind(var8)(var4);
            return var4;
case 112:
            var4 = global;
            var8 = var4.Object;
            var7 = var8.values;
            var4 = _closure1_slot5;
            var4 = var4.boostSlots;
            var9 = var7.bind(var8)(var4);
            var8 = var9.reduce;
            var7 = function(arg1, arg2) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = arg1;
                    var3 = arg2;
                    var4 = _closure1_slot41;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    if(!var2) { _fun0024_ip = 56; continue _fun0024 }
case 31:
                    var2 = var1.numCanceledGuildBoostSlots;
                    var2 = var2 + 1;
                    var1['numCanceledGuildBoostSlots'] = var2;
case 56:
                    var2 = var3.isAvailable;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0024_ip = 116; continue _fun0024 }
case 38:
                    var2 = var1.numAvailableGuildBoostSlots;
                    var2 = var2 + 1;
                    var1['numAvailableGuildBoostSlots'] = var2;
case 116:
                    return var1;
                }
            };
            var4 = {'numAvailableGuildBoostSlots': 0, 'numCanceledGuildBoostSlots': 0};
            var4 = var8.bind(var9)(var7, var4);
            var7 = var4.numAvailableGuildBoostSlots;
            var4 = var4.numCanceledGuildBoostSlots;
            if(!(var1 != var3)) { _fun0023_ip = 117; continue _fun0023 }
case 118:
            if(!(!(var7 > var5))) { _fun0023_ip = 117; continue _fun0023 }
case 119:
            var8 = var3.status;
            var7 = _closure1_slot14;
            var7 = var7.PAST_DUE;
            if(!(var8 !== var7)) { _fun0023_ip = 120; continue _fun0023 }
case 121:
            var8 = var3.status;
            var7 = _closure1_slot14;
            var7 = var7.ACCOUNT_HOLD;
            if(!(var8 !== var7)) { _fun0023_ip = 122; continue _fun0023 }
case 123:
            if(!(!(var4 > var5))) { _fun0023_ip = 124; continue _fun0023 }
case 125:
            var4 = var3.renewalMutations;
            if(!(var1 != var4)) { _fun0023_ip = 126; continue _fun0023 }
case 127:
            var7 = _closure1_slot2;
            var8 = _closure1_slot3;
            var5 = 14;
            var4 = var8[var5];
            var10 = var7.bind(var6)(var4);
            var9 = var10.getNumPremiumGuildSubscriptions;
            var4 = var3.renewalMutations;
            var4 = var4.additionalPlans;
            var4 = var9.bind(var10)(var4);
            var5 = var8[var5];
            var7 = var7.bind(var6)(var5);
            var5 = var7.getNumPremiumGuildSubscriptions;
            var3 = var3.additionalPlans;
            var3 = var5.bind(var7)(var3);
            if(!(!(var3 > var4))) { _fun0023_ip = 128; continue _fun0023 }
case 129:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 7;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.W/bb8f;
            var3 = var4.bind(var5)(var3);
            _fun0023_ip = 130; continue _fun0023;
case 128:
            var8 = _closure1_slot0;
            var9 = _closure1_slot3;
            var4 = 7;
            var5 = var9[var4];
            var5 = var8.bind(var6)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.x25mZW;
            var3 = var5.bind(var7)(var4);
case 130:
            return var3;
case 126:
            return var1;
case 124:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 7;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.x25mZW;
            var3 = var4.bind(var5)(var3);
            return var3;
case 122:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 7;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.JakNQ0;
            var3 = var4.bind(var5)(var3);
            return var3;
case 120:
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 7;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.De4Vm5;
            var2 = var3.bind(var4)(var2);
            return var2;
case 117:
            return var1;
        }
    };
    var3['generateBlockGuildSubscriptionPurchasesNode'] = var11;
    var11 = function isInGracePeriod(arg1, arg2) {
        var4 = _closure1_slot39;
        var3 = undefined;
        var2 = arg1;
        var1 = arg2;
        var2 = var4.bind(var3)(var2, var1);
        var1 = 0;
        var1 = var2 > var1;
        return var1;
    };
    var3['isInGracePeriod'] = var11;
    var3['appliedGuildBoostsRequiredForPerks'] = var10;
    var3['GuildTierSubscriptionsOrdered'] = var9;
    var9 = function getGracePeriodEndingDate(arg1, arg2) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var10 = arg1;
            var11 = arg2;
            var3 = _closure1_slot39;
            var1 = undefined;
            var4 = var3.bind(var1)(var10, var11);
            var6 = 0;
            if(!(!(var4 > var6))) { _fun0025_ip = 33; continue _fun0025 }
case 40:
            var3 = null;
            return var3;
case 33:
            var3 = function sortAppliedGuildBoostsByEndsAt(arg1) {
                var3 = arg1;
                var2 = var3.sort;
                var1 = function(arg1, arg2) {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                        var3 = arg1;
                        var2 = arg2;
                        var1 = var3.endsAt;
                        var6 = null;
                        var4 = var6 != var1;
                        var5 = -1;
                        var1 = var5;
                        if(!var4) { _fun0026_ip = 131; continue _fun0026 }
case 3:
                        var4 = var2.endsAt;
                        var4 = var6 != var4;
                        var1 = var5;
                        if(!var4) { _fun0026_ip = 131; continue _fun0026 }
case 2:
                        var4 = var3.endsAt;
                        var3 = var4.getTime;
                        var3 = var3.bind(var4)();
                        var4 = var2.endsAt;
                        var2 = var4.getTime;
                        var2 = var2.bind(var4)();
                        var1 = var3 - var2;
case 131:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var3.bind(var1)(var10);
            var3 = var5.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.endsAt;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var3 = var3.bind(var5)(var2);
            var2 = var3.length;
            var5 = var2 - var4;
            if(!(var5 < var6)) { _fun0025_ip = 132; continue _fun0025 }
case 60:
            var4 = _closure1_slot1;
            var7 = _closure1_slot3;
            var2 = 15;
            var2 = var7[var2];
            var7 = var4.bind(var1)(var2);
            var4 = var7.addBreadcrumb;
            var2 = {'category': 'premium', 'message': 'Negative index while checking grace period ending date.'};
            var8 = {};
            var10 = var10.length;
            var8['subscriptionLength'] = var10;
            var10 = _closure1_slot8;
            var9 = _closure1_slot36;
            var9 = var9.bind(var1)(var11);
            var9 = var10[var9];
            var8['subscriptionsNeededForPremiumTier'] = var9;
            var9 = var3.length;
            var8['endingSubscriptionLength'] = var9;
            var2['data'] = var8;
            var2 = var4.bind(var7)(var2);
case 132:
            var2 = global;
            var4 = var2.Math;
            var2 = var4.max;
            var2 = var2.bind(var4)(var5, var6);
            var2 = var3[var2];
            var3 = null;
            var3 = var3 == var2;
            var1 = undefined;
            if(var3) { _fun0025_ip = 133; continue _fun0025 }
case 134:
            var1 = var2.endsAt;
case 133:
            return var1;
        }
    };
    var3['getGracePeriodEndingDate'] = var9;
    var9 = function getAvailableStickerSlotCount(arg1, arg2) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var8 = arg1;
            var3 = arg2;
            var4 = _closure1_slot29;
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var6 = _closure1_slot26;
            var4 = var6.indexOf;
            var7 = var4.bind(var6)(var3);
            var4 = -1;
            if(!(var4 !== var7)) { _fun0027_ip = 135; continue _fun0027 }
case 49:
            var6 = _closure1_slot26;
            var4 = 1;
            var4 = var7 - var4;
            var9 = var6[var4];
            var4 = null;
            var6 = var4 != var9;
            var4 = 0;
            var7 = 0;
            if(!var6) { _fun0027_ip = 131; continue _fun0027 }
case 136:
            var6 = _closure1_slot28;
            var7 = var6.bind(var2)(var9);
case 131:
            var1 = _closure1_slot28;
            var6 = var1.bind(var2)(var3);
            var1 = global;
            var3 = var1.Math;
            var2 = var3.max;
            var1 = var8.slice;
            var1 = var1.bind(var8)(var7, var6);
            var1 = var1.length;
            var1 = var5 - var1;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
case 135:
            var1 = 0;
            return var1;
        }
    };
    var3['getAvailableStickerSlotCount'] = var9;
    var9 = function getAvailableSoundboardSoundCount(arg1, arg2, arg3) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var4 = _closure1_slot26;
            var3 = var4.indexOf;
            var2 = arg3;
            var3 = var3.bind(var4)(var2);
            var2 = -1;
            if(!(var2 !== var3)) { _fun0028_ip = 68; continue _fun0028 }
case 37:
            var3 = _closure1_slot40;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = global;
            var4 = var1.Math;
            var3 = var4.max;
            var1 = arg2;
            var1 = var1.length;
            var2 = var2 - var1;
            var1 = 0;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
case 68:
            var1 = 0;
            return var1;
        }
    };
    var3['getAvailableSoundboardSoundCount'] = var9;
    var3['getMaxSoundboardSlots'] = var8;
    var8 = function getMaxEmojiSlots(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var1 = arg1;
            var3 = _closure1_slot15;
            var6 = var1.premiumFeatures;
            var2 = null;
            var7 = var2 == var6;
            var4 = undefined;
            if(var7) { _fun0029_ip = 33; continue _fun0029 }
case 48:
            var4 = var6.additionalEmojiSlots;
case 33:
            var6 = var2 != var4;
            var2 = 0;
            if(!var6) { _fun0029_ip = 49; continue _fun0029 }
case 50:
            var2 = var4;
case 49:
            var4 = var3 + var2;
            var2 = global;
            var3 = var2.Math;
            var2 = var3.max;
            var7 = var1.features;
            var6 = var7.has;
            var1 = _closure1_slot10;
            var1 = var1.MORE_EMOJI;
            var1 = var6.bind(var7)(var1);
            if(var1) { _fun0029_ip = 51; continue _fun0029 }
case 52:
            var1 = _closure1_slot15;
            _fun0029_ip = 53; continue _fun0029;
case 51:
            var1 = _closure1_slot16;
case 53:
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        }
    };
    var3['getMaxEmojiSlots'] = var8;
    var8 = function getNumberOfAppliedBoostsNeededForTier(arg1, arg2) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var2 = 16;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.getGuildPowerupsBoostCount;
        var2 = arg1;
        var2 = var2.id;
        var2 = var3.bind(var4)(var2);
        var2 = var2.available;
        var3 = _closure1_slot8;
        var1 = arg2;
        var1 = var3[var1];
        var3 = global;
        var4 = var3.Math;
        var3 = var4.max;
        var2 = var1 - var2;
        var1 = 0;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getNumberOfAppliedBoostsNeededForTier'] = var8;
    var3['isGuildBoostSlotCanceled'] = var7;
    var3['getTheoreticalPremiumTierForSubscriberCount'] = var6;
    var3['getNextPremiumTierForSubscriberCount'] = var5;
    var3['TierMarkerPositions'] = var4;
    var2 = function getGuildBoostingProgressBarFillFactor(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var2 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 17;
            var1 = var4[var1];
            var4 = undefined;
            var5 = var2.bind(var4)(var1);
            var2 = var5.getGuildPowerupBoostLevelProgress;
            var1 = arg1;
            var1 = var1.id;
            var2 = var2.bind(var5)(var1);
            var1 = _closure1_slot42;
            var9 = var1.bind(var4)(var2);
            var1 = _closure1_slot43;
            var4 = var1.bind(var4)(var2);
            var1 = _closure1_slot8;
            var8 = var1[var9];
            var1 = _closure1_slot8;
            var6 = var1[var4];
            var1 = _closure1_slot33;
            var5 = var1[var9];
            var4 = var1[var4];
            var1 = {};
            var3 = _closure1_slot9;
            var7 = var3.TIER_3;
            var3 = 1;
            if(!(var9 !== var7)) { _fun0030_ip = 137; continue _fun0030 }
case 106:
            var7 = var2 - var8;
            var6 = var6 - var8;
            var6 = var7 / var6;
            var4 = var4 - var5;
            var4 = var6 * var4;
            var3 = var4 + var5;
case 137:
            var1['fillFactor'] = var3;
            var1['totalAvailableBoostsCount'] = var2;
            return var1;
        }
    };
    var3['getGuildBoostingProgressBarFillFactor'] = var2;
    return var1;
})();
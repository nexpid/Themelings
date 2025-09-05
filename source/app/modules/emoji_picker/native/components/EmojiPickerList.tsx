// app/modules/emoji_picker/native/components/EmojiPickerList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiCategoryTypes;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.IMAGE_SIZE;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticsObjects;
    var _closure1_slot6 = var8;
    var8 = var4.AnalyticsPages;
    var _closure1_slot7 = var8;
    var8 = var4.AnalyticsSections;
    var _closure1_slot8 = var8;
    var4 = var4.UpsellTypes;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.EmojiDisabledReasons;
    var _closure1_slot10 = var8;
    var4 = var4.EmojiIntention;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MIN_MARGIN;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumUpsellTypes;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot14 = var8;
    var8 = var4.Fragment;
    var _closure1_slot15 = var8;
    var4 = var4.jsxs;
    var _closure1_slot16 = var4;
    var4 = var7.memo;
    var2 = function EmojiPickerList(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var16 = var1.categories;
            var24 = var1.categoryIndexActive;
            var15 = var1.emojiPickerListRef;
            var _closure2_slot0 = var15;
            var14 = var1.emojis;
            var22 = var1.channel;
            var _closure2_slot1 = var22;
            var20 = var1.guildId;
            var _closure2_slot2 = var20;
            var13 = var1.onPressEmoji;
            var _closure2_slot3 = var13;
            var10 = var1.onLongPressEmoji;
            var _closure2_slot4 = var10;
            var23 = var1.emojiPickerIntention;
            var _closure2_slot5 = var23;
            var5 = var1.insetBottom;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 95; continue _fun0001 }
 93:
            var5 = 0;
 95:
            var6 = var1.insetTop;
            if(!(var6 === var4)) { _fun0001_ip = 107; continue _fun0001 }
 105:
            var6 = 0;
 107:
            var7 = var1.inActionSheet;
            if(!(var7 === var4)) { _fun0001_ip = 119; continue _fun0001 }
 117:
            var7 = false;
 119:
            var2 = var1.inPortalKeyboard;
            if(!(var2 === var4)) { _fun0001_ip = 131; continue _fun0001 }
 129:
            var2 = false;
 131:
            var25 = var1.searchQueryRef;
            var _closure2_slot6 = var25;
            var29 = var1.analyticsObject;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 8;
            var3 = var11[var3];
            var12 = var8.bind(var4)(var3);
            var3 = 9;
            var3 = var11[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.EMOJI;
            var3 = var12.bind(var4)(var3);
            var26 = var3.analyticsLocations;
            _closure2_slot7 = var26;
            var3 = 10;
            var3 = var11[var3];
            var3 = var8.bind(var4)(var3);
            var27 = var3.bind(var4)(var7, var2);
            _closure2_slot8 = var27;
            var3 = global;
            var17 = var3.Math;
            var12 = var17.floor;
            var19 = _closure1_slot12;
            var18 = var27 - var19;
            var3 = _closure1_slot5;
            var3 = var3 + var19;
            var3 = var18 / var3;
            var28 = var12.bind(var17)(var3);
            _closure2_slot9 = var28;
            var3 = 11;
            var3 = var11[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.bind(var4)(var20, var23);
            var3 = var3.newlyAddedEmojis;
            var11 = var3.length;
            var8 = 0;
            var11 = var11 > var8;
            var21 = null;
            var19 = var2;
            var2 = null;
            if(!var11) { _fun0001_ip = 354; continue _fun0001 }
 345:
            var3 = var3[var8];
            var2 = var3.id;
 354:
            _closure2_slot10 = var2;
            var12 = _closure1_slot3;
            var11 = var12.useEffect;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var20;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.updateNewlyAddedLastSeen;
                var3 = _closure2_slot2;
                var2 = _closure2_slot10;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = var11.bind(var12)(var2, var3);
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 13;
            var2 = var12[var2];
            var2 = var11.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var17 = _closure1_slot0;
            var3 = 14;
            var3 = var12[var3];
            var18 = var17.bind(var4)(var3);
            var17 = var18.useTrackOnEmojiPickerOpenedForReactions;
            var3 = {};
            var3['intention'] = var23;
            var3['rowSize'] = var28;
            var3['analyticsObject'] = var29;
            var3 = var17.bind(var18)(var3);
            var3 = 15;
            var3 = var12[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var11 = var3.computeCategories;
            var12 = var3.computeSearchResults;
            if(!(var21 == var14)) { _fun0001_ip = 516; continue _fun0001 }
 492:
            var3 = {};
            var3['categories'] = var16;
            var3['rowSize'] = var28;
            var3['isNativeEmojiPickerEnabled'] = var2;
            var3 = var11.bind(var4)(var3);
            _fun0001_ip = 545; continue _fun0001;
 516:
            var11 = {};
            var11['emojis'] = var14;
            var11['rowSize'] = var28;
            var14 = undefined;
            if(!var2) { _fun0001_ip = 536; continue _fun0001 }
 533:
            var14 = 200;
 536:
            var11['limit'] = var14;
            var3 = var12.bind(var4)(var11);
 545:
            var14 = _closure1_slot0;
            var11 = _closure1_slot2;
            var12 = 16;
            var12 = var11[var12];
            var17 = var14.bind(var4)(var12);
            var16 = var17.usePremiumUpsellConfig;
            var12 = 17;
            var12 = var11[var12];
            var29 = var14.bind(var4)(var12);
            var18 = var29.getUpsellType;
            var12 = 18;
            var12 = var11[var12];
            var12 = var14.bind(var4)(var12);
            var12 = var12.EntitlementFeatureNames;
            var12 = var12.EMOJIS_EVERYWHERE;
            var12 = var18.bind(var29)(var12);
            var12 = var16.bind(var17)(var12);
            var12 = var12.useTier0UpsellContent;
            _closure2_slot11 = var12;
            var16 = _closure1_slot3;
            var18 = var16.useCallback;
            var17 = new Array(6);
            var17[0] = var25;
            var17[1] = var22;
            var17[2] = var23;
            var17[3] = var20;
            var17[4] = var13;
            var17[5] = var26;
            var13 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = arg1;
                    var7 = arg2;
                    var1 = _closure2_slot6;
                    var5 = null;
                    var3 = var5 == var1;
                    var1 = undefined;
                    var2 = undefined;
                    if(var3) { _fun0002_ip = 35; continue _fun0002 }
 26:
                    var3 = _closure2_slot6;
                    var2 = var3.current;
 35:
                    var3 = var5 != var2;
                    var11 = '';
                    if(!var3) { _fun0002_ip = 49; continue _fun0002 }
 46:
                    var11 = var2;
 49:
                    var3 = var11.length;
                    var2 = 0;
                    var8 = var3 > var2;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 19;
                    var3 = var10[var3];
                    var13 = var9.bind(var1)(var3);
                    var12 = var13.triggerHapticFeedback;
                    var9 = _closure1_slot1;
                    var3 = 20;
                    var3 = var10[var3];
                    var3 = var9.bind(var1)(var3);
                    var3 = var3.IMPACT_LIGHT;
                    var3 = var12.bind(var13)(var3);
                    var3 = 21;
                    var3 = var10[var3];
                    var10 = var9.bind(var1)(var3);
                    var9 = var10.getEmojiUnavailableReason;
                    var3 = {};
                    var3['emoji'] = var4;
                    var12 = _closure2_slot1;
                    var3['channel'] = var12;
                    var12 = _closure2_slot5;
                    var3['intention'] = var12;
                    var12 = _closure2_slot2;
                    var3['guildId'] = var12;
                    var3 = var9.bind(var10)(var3);
                    if(!(var5 !== var3)) { _fun0002_ip = 681; continue _fun0002 }
 178:
                    var9 = _closure1_slot10;
                    var9 = var9.ROLE_SUBSCRIPTION_LOCKED;
                    if(!(var9 !== var3)) { _fun0002_ip = 598; continue _fun0002 }
 195:
                    var9 = _closure1_slot10;
                    var9 = var9.PREMIUM_LOCKED;
                    if(!(var9 !== var3)) { _fun0002_ip = 314; continue _fun0002 }
 209:
                    var10 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var9 = 24;
                    var9 = var17[var9];
                    var12 = var10.bind(var1)(var9);
                    var10 = var12.open;
                    var9 = {};
                    var13 = 'EMOJI_PICKER_LIST_PRESS_DISABLED';
                    var9['key'] = var13;
                    var16 = _closure1_slot0;
                    var13 = 25;
                    var14 = var17[var13];
                    var14 = var16.bind(var1)(var14);
                    var15 = var14.intl;
                    var14 = var15.string;
                    var13 = var17[var13];
                    var13 = var16.bind(var1)(var13);
                    var13 = var13.t;
                    var13 = var13.VsE5yM;
                    var13 = var14.bind(var15)(var13);
                    var9['content'] = var13;
                    var9 = var10.bind(var12)(var9);
                    _fun0002_ip = 698; continue _fun0002;
 314:
                    var10 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var9 = 16;
                    var9 = var12[var9];
                    var12 = var10.bind(var1)(var9);
                    var10 = var12.handleShowUpsellAlert;
                    var9 = {};
                    var13 = var4.animated;
                    var14 = _closure1_slot9;
                    if(var13) { _fun0002_ip = 363; continue _fun0002 }
 355:
                    var13 = var14.GLOBAL_EMOJI;
                    _fun0002_ip = 369; continue _fun0002;
 363:
                    var13 = var14.ANIMATED_EMOJI;
 369:
                    var9['initialUpsellKey'] = var13;
                    var13 = {};
                    var14 = _closure2_slot1;
                    var15 = var5 == var14;
                    var14 = undefined;
                    if(var15) { _fun0002_ip = 398; continue _fun0002 }
 389:
                    var15 = _closure2_slot1;
                    var14 = var15.guild_id;
 398:
                    if(!(var5 == var14)) { _fun0002_ip = 414; continue _fun0002 }
 402:
                    var14 = _closure1_slot7;
                    var14 = var14.DM_CHANNEL;
                    _fun0002_ip = 424; continue _fun0002;
 414:
                    var15 = _closure1_slot7;
                    var14 = var15.GUILD_CHANNEL;
 424:
                    var13['page'] = var14;
                    var14 = _closure1_slot8;
                    var14 = var14.EMOJI_PICKER_POPOUT;
                    var13['section'] = var14;
                    var14 = _closure1_slot6;
                    var14 = var14.EMOJI;
                    var13['object'] = var14;
                    var9['analyticsLocation'] = var13;
                    var13 = _closure2_slot7;
                    var9['analyticsLocations'] = var13;
                    var13 = {};
                    var15 = _closure2_slot5;
                    var14 = _closure1_slot11;
                    var14 = var14.REACTION;
                    if(!(var15 !== var14)) { _fun0002_ip = 504; continue _fun0002 }
 492:
                    var14 = _closure1_slot13;
                    var14 = var14.EMOJI_PICKER_EMOJI_CLICKED;
                    _fun0002_ip = 514; continue _fun0002;
 504:
                    var15 = _closure1_slot13;
                    var14 = var15.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
 514:
                    var13['type'] = var14;
                    var14 = var4.animated;
                    var13['is_animated'] = var14;
                    var14 = var4.guildId;
                    var14 = var5 != var14;
                    if(!var14) { _fun0002_ip = 572; continue _fun0002 }
 541:
                    var16 = var4.guildId;
                    var15 = _closure2_slot1;
                    var17 = var5 == var15;
                    var15 = undefined;
                    if(var17) { _fun0002_ip = 568; continue _fun0002 }
 559:
                    var17 = _closure2_slot1;
                    var15 = var17.guild_id;
 568:
                    var14 = var16 !== var15;
 572:
                    var13['is_external'] = var14;
                    var13['has_search_query'] = var8;
                    var9['analyticsProperties'] = var13;
                    var9 = var10.bind(var12)(var9);
                    _fun0002_ip = 698; continue _fun0002;
 598:
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 22;
                    var9 = var12[var9];
                    var10 = var10.bind(var1)(var9);
                    var9 = var10.dismissKeyboard;
                    var9 = var9.bind(var10)();
                    var9 = var4.guildId;
                    if(!(var5 != var9)) { _fun0002_ip = 698; continue _fun0002 }
 637:
                    var10 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var9 = 23;
                    var9 = var12[var9];
                    var12 = var10.bind(var1)(var9);
                    var10 = var12.handleShowEmojiUpsellAlert;
                    var9 = {};
                    var13 = var4.guildId;
                    var9['guildId'] = var13;
                    var9 = var10.bind(var12)(var9);
                    _fun0002_ip = 698; continue _fun0002;
 681:
                    var9 = _closure2_slot3;
                    if(!(var5 != var9)) { _fun0002_ip = 698; continue _fun0002 }
 689:
                    var9 = _closure2_slot3;
                    var9 = var9.bind(var1)(var4);
 698:
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 26;
                    var9 = var12[var9];
                    var10 = var10.bind(var1)(var9);
                    if(var8) { _fun0002_ip = 846; continue _fun0002 }
 724:
                    var9 = var10.trackEmojiSelect;
                    var8 = {};
                    var8['emoji'] = var4;
                    var12 = _closure2_slot5;
                    var8['pickerIntention'] = var12;
                    var8['category'] = var7;
                    var12 = {};
                    var13 = _closure2_slot1;
                    var14 = var5 == var13;
                    var13 = undefined;
                    if(var14) { _fun0002_ip = 775; continue _fun0002 }
 766:
                    var14 = _closure2_slot1;
                    var13 = var14.guild_id;
 775:
                    if(!(var5 == var13)) { _fun0002_ip = 791; continue _fun0002 }
 779:
                    var13 = _closure1_slot7;
                    var13 = var13.DM_CHANNEL;
                    _fun0002_ip = 801; continue _fun0002;
 791:
                    var14 = _closure1_slot7;
                    var13 = var14.GUILD_CHANNEL;
 801:
                    var12['page'] = var13;
                    var13 = _closure1_slot8;
                    var13 = var13.EMOJI_PICKER_POPOUT;
                    var12['section'] = var13;
                    var13 = _closure1_slot6;
                    var13 = var13.EMOJI;
                    var12['object'] = var13;
                    var8['location'] = var12;
                    var8 = var9.bind(var10)(var8);
                    _fun0002_ip = 966; continue _fun0002;
 846:
                    var9 = var10.trackEmojiSearchSelect;
                    var8 = {};
                    var8['emoji'] = var4;
                    var12 = {};
                    var13 = _closure2_slot1;
                    var14 = var5 == var13;
                    var13 = undefined;
                    if(var14) { _fun0002_ip = 883; continue _fun0002 }
 874:
                    var14 = _closure2_slot1;
                    var13 = var14.guild_id;
 883:
                    if(!(var5 == var13)) { _fun0002_ip = 899; continue _fun0002 }
 887:
                    var13 = _closure1_slot7;
                    var13 = var13.DM_CHANNEL;
                    _fun0002_ip = 909; continue _fun0002;
 899:
                    var14 = _closure1_slot7;
                    var13 = var14.GUILD_CHANNEL;
 909:
                    var12['page'] = var13;
                    var13 = _closure1_slot8;
                    var13 = var13.EMOJI_PICKER_POPOUT;
                    var12['section'] = var13;
                    var13 = _closure1_slot6;
                    var13 = var13.EMOJI;
                    var12['object'] = var13;
                    var8['location'] = var12;
                    var8['searchQuery'] = var11;
                    var11 = _closure2_slot5;
                    var8['intention'] = var11;
                    var8 = var9.bind(var10)(var8);
 966:
                    var3 = var5 == var3;
                    if(!var3) { _fun0002_ip = 991; continue _fun0002 }
 973:
                    var8 = _closure2_slot5;
                    var6 = _closure1_slot11;
                    var6 = var6.REACTION;
                    var3 = var8 === var6;
 991:
                    if(!var3) { _fun0002_ip = 998; continue _fun0002 }
 994:
                    var3 = var5 != var7;
 998:
                    if(!var3) { _fun0002_ip = 1039; continue _fun0002 }
 1001:
                    var5 = _closure1_slot4;
                    var8 = var5.RECENT;
                    var6 = new Array(2);
                    var6[0] = var8;
                    var5 = var5.FAVORITES;
                    var6[1] = var5;
                    var5 = var6.includes;
                    var3 = var5.bind(var6)(var7);
 1039:
                    if(!var3) { _fun0002_ip = 1073; continue _fun0002 }
 1042:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 27;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.initializeDoubleTapEmojiAndUpsell;
                    var2 = var2.bind(var3)(var4);
 1073:
                    return var1;
                }
            };
            var18 = var18.bind(var16)(var13, var17);
            _closure2_slot12 = var18;
            var17 = var16.useCallback;
            var13 = new Array(1);
            var13[0] = var10;
            var10 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 27; continue _fun0003 }
 13:
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
 27:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var17.bind(var16)(var10, var13);
            _closure2_slot13 = var17;
            var10 = _closure1_slot1;
            var13 = 28;
            var13 = var11[var13];
            var23 = var10.bind(var4)(var13);
            var13 = {};
            var13['emojiSections'] = var3;
            var13['rowSize'] = var28;
            var13['isNativeEmojiPickerEnabled'] = var2;
            var23 = var23.bind(var4)(var13);
            var13 = 29;
            var13 = var11[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.AnimateEmoji;
            var13 = var14.useSetting;
            var25 = var13.bind(var14)();
            _closure2_slot14 = var25;
            var14 = var16.useCallback;
            var13 = new Array(9);
            var13[0] = var26;
            var13[1] = var18;
            var13[2] = var17;
            var13[3] = var22;
            var13[4] = var28;
            var13[5] = var27;
            var13[6] = var25;
            var13[7] = var15;
            var13[8] = var12;
            var9 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.item;
                    var3 = var1.target;
                    var7 = var1.index;
                    var6 = var5.type;
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var9 = 28;
                    var2 = var2[var9];
                    var4 = undefined;
                    var2 = var8.bind(var4)(var2);
                    var2 = var2.EmojiPickerFlashListItemType;
                    var2 = var2.NATIVE_SECTION;
                    if(!(var2 !== var6)) { _fun0004_ip = 861; continue _fun0004 }
 68:
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var8.bind(var4)(var2);
                    var2 = var2.EmojiPickerFlashListItemType;
                    var2 = var2.PLACEHOLDER;
                    if(!(var2 !== var6)) { _fun0004_ip = 861; continue _fun0004 }
 104:
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var8.bind(var4)(var2);
                    var2 = var2.EmojiPickerFlashListItemType;
                    var2 = var2.EMOJI_ROW_SLIM;
                    if(!(var2 !== var6)) { _fun0004_ip = 861; continue _fun0004 }
 140:
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var8.bind(var4)(var2);
                    var2 = var2.EmojiPickerFlashListItemType;
                    var2 = var2.TITLE;
                    if(!(var2 !== var6)) { _fun0004_ip = 752; continue _fun0004 }
 176:
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var8.bind(var4)(var2);
                    var2 = var2.EmojiPickerFlashListItemType;
                    var2 = var2.PREMIUM_INLINE_ROADBLOCK;
                    if(!(var2 !== var6)) { _fun0004_ip = 697; continue _fun0004 }
 212:
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var8.bind(var4)(var2);
                    var2 = var2.EmojiPickerFlashListItemType;
                    var2 = var2.EMOJI_ROW;
                    if(!(var2 !== var6)) { _fun0004_ip = 457; continue _fun0004 }
 248:
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var8.bind(var4)(var2);
                    var2 = var2.EmojiPickerFlashListItemType;
                    var2 = var2.EMOJI_ROW_NSFW;
                    if(!(var2 !== var6)) { _fun0004_ip = 414; continue _fun0004 }
 284:
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var8.bind(var4)(var2);
                    var2 = var2.EmojiPickerFlashListItemType;
                    var2 = var2.FOOTER_UPSELL;
                    var10 = undefined;
                    if(!(var2 === var6)) { _fun0004_ip = 598; continue _fun0004 }
 322:
                    var8 = _closure1_slot14;
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 33;
                    var2 = var9[var2];
                    var2 = var6.bind(var4)(var2);
                    var6 = var2.PremiumSearchUpsell;
                    var2 = {};
                    var12 = _closure2_slot1;
                    var11 = null;
                    var12 = var11 == var12;
                    var11 = undefined;
                    if(var12) { _fun0004_ip = 381; continue _fun0004 }
 372:
                    var12 = _closure2_slot1;
                    var11 = var12.guild_id;
 381:
                    var2['guildId'] = var11;
                    var11 = _closure2_slot7;
                    var2['analyticsLocations'] = var11;
                    var9 = _closure2_slot11;
                    var2['useTier0UpsellContent'] = var9;
                    var10 = var8.bind(var4)(var6, var2);
                    _fun0004_ip = 598; continue _fun0004;
 414:
                    var8 = _closure1_slot14;
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 30;
                    var2 = var9[var2];
                    var2 = var6.bind(var4)(var2);
                    var6 = var2.NSFWRow;
                    var2 = {};
                    var10 = var8.bind(var4)(var6, var2);
                    _fun0004_ip = 598; continue _fun0004;
 457:
                    var14 = var5.emojis;
                    var13 = var5.emojisDisabled;
                    var12 = var5.footer;
                    var11 = var5.row;
                    var9 = var5.isSectionNitroLocked;
                    var8 = _closure1_slot14;
                    var6 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var2 = 32;
                    var2 = var15[var2];
                    var2 = var6.bind(var4)(var2);
                    var6 = var2.EmojiPickerListRow;
                    var2 = {};
                    var2['emojis'] = var14;
                    var2['emojisDisabled'] = var13;
                    var2['category'] = var12;
                    var13 = _closure2_slot9;
                    var2['rowSize'] = var13;
                    var13 = _closure2_slot8;
                    var2['containerWidth'] = var13;
                    var13 = _closure2_slot12;
                    var2['onPressEmoji'] = var13;
                    var13 = _closure2_slot13;
                    var2['onLongPressEmoji'] = var13;
                    var12 = _closure2_slot14;
                    var2['animateEmoji'] = var12;
                    var2['row'] = var11;
                    var2['isSectionNitroLocked'] = var9;
                    var10 = var8.bind(var4)(var6, var2);
 598:
                    var8 = _closure1_slot16;
                    var6 = _closure1_slot15;
                    var2 = {};
                    var11 = var5.isSectionNitroLocked;
                    var9 = true;
                    var11 = var9 === var11;
                    if(!var11) { _fun0004_ip = 673; continue _fun0004 }
 623:
                    var13 = _closure1_slot14;
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var9 = 34;
                    var9 = var14[var9];
                    var9 = var12.bind(var4)(var9);
                    var12 = var9.PremiumUpsellGradientBackground;
                    var9 = {};
                    var14 = _closure2_slot11;
                    var9['useTier0UpsellContent'] = var14;
                    var11 = var13.bind(var4)(var12, var9);
 673:
                    var9 = new Array(2);
                    var9[0] = var11;
                    var9[1] = var10;
                    var2['children'] = var9;
                    var2 = var8.bind(var4)(var6, var2);
                    return var2;
 697:
                    var8 = _closure1_slot14;
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 31;
                    var2 = var9[var2];
                    var6 = var6.bind(var4)(var2);
                    var2 = {};
                    var9 = var5.position;
                    var2['position'] = var9;
                    var9 = _closure2_slot11;
                    var2['useTier0UpsellContent'] = var9;
                    var2 = var8.bind(var4)(var6, var2);
                    return var2;
 752:
                    var6 = var5.title;
                    var2 = 'StickyHeader';
                    if(!(var2 === var3)) { _fun0004_ip = 794; continue _fun0004 }
 765:
                    var2 = _closure2_slot0;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 794; continue _fun0004 }
 783:
                    var2 = var3.onStickyHeaderRendered;
                    var2 = var2.bind(var3)(var7);
 794:
                    var3 = _closure1_slot14;
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 30;
                    var1 = var7[var1];
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.Section;
                    var1 = {};
                    var1['label'] = var6;
                    var5 = var5.isSectionNitroLocked;
                    var1['isSectionNitroLocked'] = var5;
                    var5 = _closure2_slot11;
                    var1['useTier0UpsellContent'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
 861:
                    var1 = null;
                    return var1;
                }
            };
            var14 = var14.bind(var16)(var9, var13);
            var9 = 35;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.bind(var4)();
            var13 = var9.shouldShowUpsell;
            var16 = var9.onShowNitroUpsell;
            var3 = var3.length;
            if(!(var8 !== var3)) { _fun0001_ip = 1098; continue _fun0001 }
 885:
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            if(var2) { _fun0001_ip = 905; continue _fun0001 }
 896:
            var2 = 38;
            var2 = var9[var2];
            _fun0001_ip = 912; continue _fun0001;
 905:
            var8 = 37;
            var2 = var9[var8];
 912:
            var11 = var3.bind(var4)(var2);
            var8 = _closure1_slot16;
            var3 = _closure1_slot15;
            var2 = {};
            var10 = _closure1_slot14;
            var9 = {};
            var9['analyticsLocations'] = var26;
            var9['animateEmoji'] = var25;
            var9['categoryIndexActive'] = var24;
            var9['data'] = var23;
            if(!(var21 == var20)) { _fun0001_ip = 973; continue _fun0001 }
 956:
            var23 = var21 == var22;
            var21 = undefined;
            if(var23) { _fun0001_ip = 970; continue _fun0001 }
 965:
            var21 = var22.guild_id;
 970:
            var20 = var21;
 973:
            var9['guildId'] = var20;
            var9['inActionSheet'] = var7;
            var9['inPortalKeyboard'] = var19;
            var9['onPressEmoji'] = var18;
            var9['onLongPressEmoji'] = var17;
            var9['onShowNitroUpsell'] = var16;
            var9['paddingBottom'] = var5;
            var9['paddingTop'] = var6;
            var9['ref'] = var15;
            var9['renderItem'] = var14;
            var9['useTier0UpsellContent'] = var12;
            var10 = var10.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot14;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 39;
            var10 = var14[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['inActionSheet'] = var7;
            var10['shouldShow'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var2['children'] = var9;
            var2 = var8.bind(var4)(var3, var2);
            return var2;
 1098:
            var3 = _closure1_slot14;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 36;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['inActionSheet'] = var7;
            var1['insetTop'] = var6;
            var1['insetBottom'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 40;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emoji_picker/native/components/EmojiPickerList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
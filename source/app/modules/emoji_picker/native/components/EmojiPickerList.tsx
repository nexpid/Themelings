// app/modules/emoji_picker/native/components/EmojiPickerList.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.IMAGE_SIZE;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticsObjects;
    var _closure1_slot5 = var8;
    var8 = var4.AnalyticsPages;
    var _closure1_slot6 = var8;
    var8 = var4.AnalyticsSections;
    var _closure1_slot7 = var8;
    var4 = var4.UpsellTypes;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.EmojiDisabledReasons;
    var _closure1_slot9 = var8;
    var4 = var4.EmojiIntention;
    var _closure1_slot10 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MIN_MARGIN;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumUpsellTypes;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot13 = var8;
    var8 = var4.Fragment;
    var _closure1_slot14 = var8;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = var7.memo;
    var2 = function EmojiPickerList(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var16 = var1.categories;
            var24 = var1.categoryIndexActive;
            var13 = var1.emojiPickerListRef;
            var _closure2_slot0 = var13;
            var12 = var1.emojis;
            var22 = var1.channel;
            var _closure2_slot1 = var22;
            var20 = var1.guildId;
            var _closure2_slot2 = var20;
            var23 = var1.onPressEmoji;
            var _closure2_slot3 = var23;
            var8 = var1.onLongPressEmoji;
            var _closure2_slot4 = var8;
            var25 = var1.emojiPickerIntention;
            var _closure2_slot5 = var25;
            var15 = var1.insetBottom;
            var4 = undefined;
            if(!(var15 === var4)) { _fun0001_ip = 95; continue _fun0001 }
 93:
            var15 = 0;
 95:
            var14 = var1.insetTop;
            if(!(var14 === var4)) { _fun0001_ip = 107; continue _fun0001 }
 105:
            var14 = 0;
 107:
            var5 = var1.inActionSheet;
            if(!(var5 === var4)) { _fun0001_ip = 119; continue _fun0001 }
 117:
            var5 = false;
 119:
            var2 = var1.inPortalKeyboard;
            if(!(var2 === var4)) { _fun0001_ip = 131; continue _fun0001 }
 129:
            var2 = false;
 131:
            var11 = var1.searchQueryRef;
            var _closure2_slot6 = var11;
            var29 = var1.analyticsObject;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 7;
            var3 = var9[var3];
            var10 = var6.bind(var4)(var3);
            var3 = 8;
            var3 = var9[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.EMOJI;
            var3 = var10.bind(var4)(var3);
            var26 = var3.analyticsLocations;
            _closure2_slot7 = var26;
            var3 = 9;
            var3 = var9[var3];
            var3 = var6.bind(var4)(var3);
            var27 = var3.bind(var4)(var5, var2);
            _closure2_slot8 = var27;
            var3 = global;
            var17 = var3.Math;
            var10 = var17.floor;
            var19 = _closure1_slot11;
            var18 = var27 - var19;
            var3 = _closure1_slot4;
            var3 = var3 + var19;
            var3 = var18 / var3;
            var28 = var10.bind(var17)(var3);
            _closure2_slot9 = var28;
            var3 = 10;
            var3 = var9[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.bind(var4)(var20, var25);
            var3 = var3.newlyAddedEmojis;
            var9 = var3.length;
            var6 = 0;
            var9 = var9 > var6;
            var21 = null;
            var19 = var2;
            var2 = null;
            if(!var9) { _fun0001_ip = 354; continue _fun0001 }
 345:
            var3 = var3[var6];
            var2 = var3.id;
 354:
            _closure2_slot10 = var2;
            var10 = _closure1_slot3;
            var9 = var10.useEffect;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var20;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.updateNewlyAddedLastSeen;
                var3 = _closure2_slot2;
                var2 = _closure2_slot10;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = var9.bind(var10)(var2, var3);
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 12;
            var2 = var10[var2];
            var2 = var9.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var17 = _closure1_slot0;
            var3 = 13;
            var3 = var10[var3];
            var18 = var17.bind(var4)(var3);
            var17 = var18.useTrackOnEmojiPickerOpenedForReactions;
            var3 = {};
            var3['intention'] = var25;
            var3['rowSize'] = var28;
            var3['analyticsObject'] = var29;
            var3 = var17.bind(var18)(var3);
            var3 = 14;
            var3 = var10[var3];
            var3 = var9.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var9 = var3.computeCategories;
            var10 = var3.computeSearchResults;
            if(!(var21 == var12)) { _fun0001_ip = 514; continue _fun0001 }
 490:
            var3 = {};
            var3['categories'] = var16;
            var3['rowSize'] = var28;
            var3['isNativeEmojiPickerEnabled'] = var2;
            var3 = var9.bind(var4)(var3);
            _fun0001_ip = 544; continue _fun0001;
 514:
            var9 = {};
            var9['emojis'] = var12;
            var9['rowSize'] = var28;
            var12 = undefined;
            if(!var2) { _fun0001_ip = 534; continue _fun0001 }
 531:
            var12 = 200;
 534:
            var9['limit'] = var12;
            var3 = var10.bind(var4)(var9);
 544:
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = 15;
            var10 = var9[var10];
            var17 = var12.bind(var4)(var10);
            var16 = var17.usePremiumUpsellConfig;
            var10 = 16;
            var10 = var9[var10];
            var29 = var12.bind(var4)(var10);
            var18 = var29.getUpsellType;
            var10 = 17;
            var10 = var9[var10];
            var10 = var12.bind(var4)(var10);
            var10 = var10.EntitlementFeatureNames;
            var10 = var10.EMOJIS_EVERYWHERE;
            var10 = var18.bind(var29)(var10);
            var10 = var16.bind(var17)(var10);
            var10 = var10.useTier0UpsellContent;
            _closure2_slot11 = var10;
            var16 = _closure1_slot3;
            var18 = var16.useCallback;
            var17 = new Array(6);
            var17[0] = var26;
            var17[1] = var25;
            var17[2] = var22;
            var17[3] = var20;
            var17[4] = var23;
            var17[5] = var11;
            var11 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var7 = arg1;
                    var1 = _closure2_slot6;
                    var10 = null;
                    var3 = var10 == var1;
                    var1 = undefined;
                    var2 = undefined;
                    if(var3) { _fun0002_ip = 32; continue _fun0002 }
 23:
                    var3 = _closure2_slot6;
                    var2 = var3.current;
 32:
                    var3 = var10 != var2;
                    var6 = '';
                    if(!var3) { _fun0002_ip = 46; continue _fun0002 }
 43:
                    var6 = var2;
 46:
                    var3 = var6.length;
                    var2 = 0;
                    var2 = var3 > var2;
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 18;
                    var3 = var9[var3];
                    var12 = var4.bind(var1)(var3);
                    var11 = var12.triggerHapticFeedback;
                    var4 = _closure1_slot1;
                    var3 = 19;
                    var3 = var9[var3];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.IMPACT_LIGHT;
                    var3 = var11.bind(var12)(var3);
                    var3 = 20;
                    var3 = var9[var3];
                    var9 = var4.bind(var1)(var3);
                    var4 = var9.getEmojiUnavailableReason;
                    var3 = {};
                    var3['emoji'] = var7;
                    var11 = _closure2_slot1;
                    var3['channel'] = var11;
                    var11 = _closure2_slot5;
                    var3['intention'] = var11;
                    var11 = _closure2_slot2;
                    var3['guildId'] = var11;
                    var4 = var4.bind(var9)(var3);
                    if(!(var10 !== var4)) { _fun0002_ip = 678; continue _fun0002 }
 175:
                    var3 = _closure1_slot9;
                    var3 = var3.ROLE_SUBSCRIPTION_LOCKED;
                    if(!(var3 !== var4)) { _fun0002_ip = 595; continue _fun0002 }
 192:
                    var3 = _closure1_slot9;
                    var3 = var3.PREMIUM_LOCKED;
                    if(!(var3 !== var4)) { _fun0002_ip = 311; continue _fun0002 }
 206:
                    var4 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var3 = 23;
                    var3 = var15[var3];
                    var9 = var4.bind(var1)(var3);
                    var4 = var9.open;
                    var3 = {};
                    var11 = 'EMOJI_PICKER_LIST_PRESS_DISABLED';
                    var3['key'] = var11;
                    var14 = _closure1_slot0;
                    var11 = 24;
                    var12 = var15[var11];
                    var12 = var14.bind(var1)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var11 = var15[var11];
                    var11 = var14.bind(var1)(var11);
                    var11 = var11.t;
                    var11 = var11.VsE5yM;
                    var11 = var12.bind(var13)(var11);
                    var3['content'] = var11;
                    var3 = var4.bind(var9)(var3);
                    _fun0002_ip = 695; continue _fun0002;
 311:
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 15;
                    var3 = var9[var3];
                    var9 = var4.bind(var1)(var3);
                    var4 = var9.handleShowUpsellAlert;
                    var3 = {};
                    var11 = var7.animated;
                    var12 = _closure1_slot8;
                    if(var11) { _fun0002_ip = 360; continue _fun0002 }
 352:
                    var11 = var12.GLOBAL_EMOJI;
                    _fun0002_ip = 366; continue _fun0002;
 360:
                    var11 = var12.ANIMATED_EMOJI;
 366:
                    var3['initialUpsellKey'] = var11;
                    var11 = {};
                    var12 = _closure2_slot1;
                    var13 = var10 == var12;
                    var12 = undefined;
                    if(var13) { _fun0002_ip = 395; continue _fun0002 }
 386:
                    var13 = _closure2_slot1;
                    var12 = var13.guild_id;
 395:
                    if(!(var10 == var12)) { _fun0002_ip = 411; continue _fun0002 }
 399:
                    var12 = _closure1_slot6;
                    var12 = var12.DM_CHANNEL;
                    _fun0002_ip = 421; continue _fun0002;
 411:
                    var13 = _closure1_slot6;
                    var12 = var13.GUILD_CHANNEL;
 421:
                    var11['page'] = var12;
                    var12 = _closure1_slot7;
                    var12 = var12.EMOJI_PICKER_POPOUT;
                    var11['section'] = var12;
                    var12 = _closure1_slot5;
                    var12 = var12.EMOJI;
                    var11['object'] = var12;
                    var3['analyticsLocation'] = var11;
                    var11 = _closure2_slot7;
                    var3['analyticsLocations'] = var11;
                    var11 = {};
                    var13 = _closure2_slot5;
                    var12 = _closure1_slot10;
                    var12 = var12.REACTION;
                    if(!(var13 !== var12)) { _fun0002_ip = 501; continue _fun0002 }
 489:
                    var12 = _closure1_slot12;
                    var12 = var12.EMOJI_PICKER_EMOJI_CLICKED;
                    _fun0002_ip = 511; continue _fun0002;
 501:
                    var13 = _closure1_slot12;
                    var12 = var13.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
 511:
                    var11['type'] = var12;
                    var12 = var7.animated;
                    var11['is_animated'] = var12;
                    var12 = var7.guildId;
                    var12 = var10 != var12;
                    if(!var12) { _fun0002_ip = 569; continue _fun0002 }
 538:
                    var14 = var7.guildId;
                    var13 = _closure2_slot1;
                    var15 = var10 == var13;
                    var13 = undefined;
                    if(var15) { _fun0002_ip = 565; continue _fun0002 }
 556:
                    var15 = _closure2_slot1;
                    var13 = var15.guild_id;
 565:
                    var12 = var14 !== var13;
 569:
                    var11['is_external'] = var12;
                    var11['has_search_query'] = var2;
                    var3['analyticsProperties'] = var11;
                    var3 = var4.bind(var9)(var3);
                    _fun0002_ip = 695; continue _fun0002;
 595:
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 21;
                    var3 = var9[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.dismissKeyboard;
                    var3 = var3.bind(var4)();
                    var3 = var7.guildId;
                    if(!(var10 != var3)) { _fun0002_ip = 695; continue _fun0002 }
 634:
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 22;
                    var3 = var9[var3];
                    var9 = var4.bind(var1)(var3);
                    var4 = var9.handleShowEmojiUpsellAlert;
                    var3 = {};
                    var11 = var7.guildId;
                    var3['guildId'] = var11;
                    var3 = var4.bind(var9)(var3);
                    _fun0002_ip = 695; continue _fun0002;
 678:
                    var3 = _closure2_slot3;
                    if(!(var10 != var3)) { _fun0002_ip = 695; continue _fun0002 }
 686:
                    var3 = _closure2_slot3;
                    var3 = var3.bind(var1)(var7);
 695:
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 25;
                    var3 = var9[var3];
                    var4 = var4.bind(var1)(var3);
                    if(var2) { _fun0002_ip = 845; continue _fun0002 }
 721:
                    var3 = var4.trackEmojiSelect;
                    var2 = {};
                    var2['emoji'] = var7;
                    var9 = _closure2_slot5;
                    var2['pickerIntention'] = var9;
                    var9 = arg2;
                    var2['category'] = var9;
                    var9 = {};
                    var11 = _closure2_slot1;
                    var12 = var10 == var11;
                    var11 = undefined;
                    if(var12) { _fun0002_ip = 774; continue _fun0002 }
 765:
                    var12 = _closure2_slot1;
                    var11 = var12.guild_id;
 774:
                    if(!(var10 == var11)) { _fun0002_ip = 790; continue _fun0002 }
 778:
                    var11 = _closure1_slot6;
                    var11 = var11.DM_CHANNEL;
                    _fun0002_ip = 800; continue _fun0002;
 790:
                    var12 = _closure1_slot6;
                    var11 = var12.GUILD_CHANNEL;
 800:
                    var9['page'] = var11;
                    var11 = _closure1_slot7;
                    var11 = var11.EMOJI_PICKER_POPOUT;
                    var9['section'] = var11;
                    var11 = _closure1_slot5;
                    var11 = var11.EMOJI;
                    var9['object'] = var11;
                    var2['location'] = var9;
                    var2 = var3.bind(var4)(var2);
                    _fun0002_ip = 965; continue _fun0002;
 845:
                    var3 = var4.trackEmojiSearchSelect;
                    var2 = {};
                    var2['emoji'] = var7;
                    var7 = {};
                    var9 = _closure2_slot1;
                    var11 = var10 == var9;
                    var9 = undefined;
                    if(var11) { _fun0002_ip = 882; continue _fun0002 }
 873:
                    var11 = _closure2_slot1;
                    var9 = var11.guild_id;
 882:
                    if(!(var10 == var9)) { _fun0002_ip = 898; continue _fun0002 }
 886:
                    var9 = _closure1_slot6;
                    var9 = var9.DM_CHANNEL;
                    _fun0002_ip = 908; continue _fun0002;
 898:
                    var10 = _closure1_slot6;
                    var9 = var10.GUILD_CHANNEL;
 908:
                    var7['page'] = var9;
                    var9 = _closure1_slot7;
                    var9 = var9.EMOJI_PICKER_POPOUT;
                    var7['section'] = var9;
                    var8 = _closure1_slot5;
                    var8 = var8.EMOJI;
                    var7['object'] = var8;
                    var2['location'] = var7;
                    var2['searchQuery'] = var6;
                    var5 = _closure2_slot5;
                    var2['intention'] = var5;
                    var2 = var3.bind(var4)(var2);
 965:
                    return var1;
                }
            };
            var18 = var18.bind(var16)(var11, var17);
            _closure2_slot12 = var18;
            var17 = var16.useCallback;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = function(arg1) {
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
            var17 = var17.bind(var16)(var8, var11);
            _closure2_slot13 = var17;
            var8 = _closure1_slot1;
            var11 = 26;
            var11 = var9[var11];
            var23 = var8.bind(var4)(var11);
            var11 = {};
            var11['emojiSections'] = var3;
            var11['rowSize'] = var28;
            var11['isNativeEmojiPickerEnabled'] = var2;
            var23 = var23.bind(var4)(var11);
            var11 = 27;
            var11 = var9[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.AnimateEmoji;
            var11 = var12.useSetting;
            var25 = var11.bind(var12)();
            _closure2_slot14 = var25;
            var12 = var16.useCallback;
            var11 = new Array(9);
            var11[0] = var26;
            var11[1] = var18;
            var11[2] = var17;
            var11[3] = var22;
            var11[4] = var28;
            var11[5] = var27;
            var11[6] = var25;
            var11[7] = var13;
            var11[8] = var10;
            var7 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.item;
                    var3 = var1.target;
                    var7 = var1.index;
                    var6 = var5.type;
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var9 = 26;
                    var2 = var2[var9];
                    var4 = undefined;
                    var2 = var8.bind(var4)(var2);
                    var2 = var2.EmojiPickerFlashListItemType;
                    var2 = var2.NATIVE_SECTION;
                    if(!(var2 !== var6)) { _fun0004_ip = 860; continue _fun0004 }
 68:
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var8.bind(var4)(var2);
                    var2 = var2.EmojiPickerFlashListItemType;
                    var2 = var2.PLACEHOLDER;
                    if(!(var2 !== var6)) { _fun0004_ip = 860; continue _fun0004 }
 104:
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var8.bind(var4)(var2);
                    var2 = var2.EmojiPickerFlashListItemType;
                    var2 = var2.EMOJI_ROW_SLIM;
                    if(!(var2 !== var6)) { _fun0004_ip = 860; continue _fun0004 }
 140:
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var8.bind(var4)(var2);
                    var2 = var2.EmojiPickerFlashListItemType;
                    var2 = var2.TITLE;
                    if(!(var2 !== var6)) { _fun0004_ip = 751; continue _fun0004 }
 176:
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var8.bind(var4)(var2);
                    var2 = var2.EmojiPickerFlashListItemType;
                    var2 = var2.PREMIUM_INLINE_ROADBLOCK;
                    if(!(var2 !== var6)) { _fun0004_ip = 696; continue _fun0004 }
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
                    if(!(var2 === var6)) { _fun0004_ip = 597; continue _fun0004 }
 322:
                    var8 = _closure1_slot13;
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 31;
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
                    _fun0004_ip = 597; continue _fun0004;
 414:
                    var8 = _closure1_slot13;
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 28;
                    var2 = var9[var2];
                    var2 = var6.bind(var4)(var2);
                    var6 = var2.NSFWRow;
                    var2 = {};
                    var10 = var8.bind(var4)(var6, var2);
                    _fun0004_ip = 597; continue _fun0004;
 457:
                    var14 = var5.emojis;
                    var13 = var5.emojisDisabled;
                    var12 = var5.footer;
                    var11 = var5.row;
                    var9 = var5.isSectionNitroLocked;
                    var8 = _closure1_slot13;
                    var6 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var2 = 30;
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
 597:
                    var8 = _closure1_slot15;
                    var6 = _closure1_slot14;
                    var2 = {};
                    var11 = var5.isSectionNitroLocked;
                    var9 = true;
                    var11 = var9 === var11;
                    if(!var11) { _fun0004_ip = 672; continue _fun0004 }
 622:
                    var13 = _closure1_slot13;
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var9 = 32;
                    var9 = var14[var9];
                    var9 = var12.bind(var4)(var9);
                    var12 = var9.PremiumUpsellGradientBackground;
                    var9 = {};
                    var14 = _closure2_slot11;
                    var9['useTier0UpsellContent'] = var14;
                    var11 = var13.bind(var4)(var12, var9);
 672:
                    var9 = new Array(2);
                    var9[0] = var11;
                    var9[1] = var10;
                    var2['children'] = var9;
                    var2 = var8.bind(var4)(var6, var2);
                    return var2;
 696:
                    var8 = _closure1_slot13;
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 29;
                    var2 = var9[var2];
                    var6 = var6.bind(var4)(var2);
                    var2 = {};
                    var9 = var5.position;
                    var2['position'] = var9;
                    var9 = _closure2_slot11;
                    var2['useTier0UpsellContent'] = var9;
                    var2 = var8.bind(var4)(var6, var2);
                    return var2;
 751:
                    var6 = var5.title;
                    var2 = 'StickyHeader';
                    if(!(var2 === var3)) { _fun0004_ip = 793; continue _fun0004 }
 764:
                    var2 = _closure2_slot0;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 793; continue _fun0004 }
 782:
                    var2 = var3.onStickyHeaderRendered;
                    var2 = var2.bind(var3)(var7);
 793:
                    var3 = _closure1_slot13;
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 28;
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
 860:
                    var1 = null;
                    return var1;
                }
            };
            var12 = var12.bind(var16)(var7, var11);
            var7 = 33;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.bind(var4)();
            var11 = var7.shouldShowUpsell;
            var16 = var7.onShowNitroUpsell;
            var3 = var3.length;
            if(!(var6 !== var3)) { _fun0001_ip = 1091; continue _fun0001 }
 878:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            if(var2) { _fun0001_ip = 898; continue _fun0001 }
 889:
            var2 = 36;
            var2 = var7[var2];
            _fun0001_ip = 905; continue _fun0001;
 898:
            var6 = 35;
            var2 = var7[var6];
 905:
            var9 = var3.bind(var4)(var2);
            var6 = _closure1_slot15;
            var3 = _closure1_slot14;
            var2 = {};
            var8 = _closure1_slot13;
            var7 = {};
            var7['analyticsLocations'] = var26;
            var7['animateEmoji'] = var25;
            var7['categoryIndexActive'] = var24;
            var7['data'] = var23;
            if(!(var21 == var20)) { _fun0001_ip = 966; continue _fun0001 }
 949:
            var23 = var21 == var22;
            var21 = undefined;
            if(var23) { _fun0001_ip = 963; continue _fun0001 }
 958:
            var21 = var22.guild_id;
 963:
            var20 = var21;
 966:
            var7['guildId'] = var20;
            var7['inActionSheet'] = var5;
            var7['inPortalKeyboard'] = var19;
            var7['onPressEmoji'] = var18;
            var7['onLongPressEmoji'] = var17;
            var7['onShowNitroUpsell'] = var16;
            var7['paddingBottom'] = var15;
            var7['paddingTop'] = var14;
            var7['ref'] = var13;
            var7['renderItem'] = var12;
            var7['useTier0UpsellContent'] = var10;
            var8 = var8.bind(var4)(var9, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var10 = _closure1_slot13;
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 37;
            var8 = var12[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var8['inActionSheet'] = var5;
            var8['shouldShow'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var7[1] = var8;
            var2['children'] = var7;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1091:
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 34;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['inActionSheet'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 38;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emoji_picker/native/components/EmojiPickerList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
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
case 0:
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
            if(!(var5 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = 0;
case 2:
            var6 = var1.insetTop;
            if(!(var6 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = 0;
case 4:
            var7 = var1.inActionSheet;
            if(!(var7 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = false;
case 6:
            var2 = var1.inPortalKeyboard;
            if(!(var2 === var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = false;
case 8:
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
            var3 = 7;
            var3 = var11[var3];
            var12 = var8.bind(var4)(var3);
            var3 = 8;
            var3 = var11[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.EMOJI;
            var3 = var12.bind(var4)(var3);
            var26 = var3.analyticsLocations;
            _closure2_slot7 = var26;
            var3 = 9;
            var3 = var11[var3];
            var3 = var8.bind(var4)(var3);
            var27 = var3.bind(var4)(var7, var2);
            _closure2_slot8 = var27;
            var3 = global;
            var17 = var3.Math;
            var12 = var17.floor;
            var19 = _closure1_slot11;
            var18 = var27 - var19;
            var3 = _closure1_slot4;
            var3 = var3 + var19;
            var3 = var18 / var3;
            var28 = var12.bind(var17)(var3);
            _closure2_slot9 = var28;
            var3 = 10;
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
            if(!var11) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var3[var8];
            var2 = var3.id;
case 10:
            _closure2_slot10 = var2;
            var12 = _closure1_slot3;
            var11 = var12.useEffect;
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
            var2 = var11.bind(var12)(var2, var3);
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 12;
            var2 = var12[var2];
            var2 = var11.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var17 = _closure1_slot0;
            var3 = 13;
            var3 = var12[var3];
            var18 = var17.bind(var4)(var3);
            var17 = var18.useTrackOnEmojiPickerOpenedForReactions;
            var3 = {};
            var3['intention'] = var23;
            var3['rowSize'] = var28;
            var3['analyticsObject'] = var29;
            var3 = var17.bind(var18)(var3);
            var3 = 14;
            var3 = var12[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var11 = var3.computeCategories;
            var12 = var3.computeSearchResults;
            if(!(var21 == var14)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = {};
            var3['categories'] = var16;
            var3['rowSize'] = var28;
            var3['isNativeEmojiPickerEnabled'] = var2;
            var3 = var11.bind(var4)(var3);
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var11 = {};
            var11['emojis'] = var14;
            var11['rowSize'] = var28;
            var14 = undefined;
            if(!var2) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var14 = 200;
case 15:
            var11['limit'] = var14;
            var3 = var12.bind(var4)(var11);
case 14:
            var14 = _closure1_slot0;
            var11 = _closure1_slot2;
            var12 = 15;
            var12 = var11[var12];
            var17 = var14.bind(var4)(var12);
            var16 = var17.usePremiumUpsellConfig;
            var12 = 16;
            var12 = var11[var12];
            var29 = var14.bind(var4)(var12);
            var18 = var29.getUpsellType;
            var12 = 17;
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
case 0:
                    var7 = arg1;
                    var1 = _closure2_slot6;
                    var10 = null;
                    var3 = var10 == var1;
                    var1 = undefined;
                    var2 = undefined;
                    if(var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var3 = _closure2_slot6;
                    var2 = var3.current;
case 17:
                    var3 = var10 != var2;
                    var6 = '';
                    if(!var3) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var6 = var2;
case 19:
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
                    if(!(var10 !== var4)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var3 = _closure1_slot9;
                    var3 = var3.ROLE_SUBSCRIPTION_LOCKED;
                    if(!(var3 !== var4)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var3 = _closure1_slot9;
                    var3 = var3.PREMIUM_LOCKED;
                    if(!(var3 !== var4)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
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
                    _fun0002_ip = 27; continue _fun0002;
case 25:
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 15;
                    var3 = var9[var3];
                    var9 = var4.bind(var1)(var3);
                    var4 = var9.handleShowUpsellAlert;
                    var3 = {};
                    var11 = var7.animated;
                    var12 = _closure1_slot8;
                    if(var11) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var11 = var12.GLOBAL_EMOJI;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var11 = var12.ANIMATED_EMOJI;
case 30:
                    var3['initialUpsellKey'] = var11;
                    var11 = {};
                    var12 = _closure2_slot1;
                    var13 = var10 == var12;
                    var12 = undefined;
                    if(var13) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                    var13 = _closure2_slot1;
                    var12 = var13.guild_id;
case 31:
                    if(!(var10 == var12)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                    var12 = _closure1_slot6;
                    var12 = var12.DM_CHANNEL;
                    _fun0002_ip = 35; continue _fun0002;
case 33:
                    var13 = _closure1_slot6;
                    var12 = var13.GUILD_CHANNEL;
case 35:
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
                    if(!(var13 !== var12)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                    var12 = _closure1_slot12;
                    var12 = var12.EMOJI_PICKER_EMOJI_CLICKED;
                    _fun0002_ip = 38; continue _fun0002;
case 36:
                    var13 = _closure1_slot12;
                    var12 = var13.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
case 38:
                    var11['type'] = var12;
                    var12 = var7.animated;
                    var11['is_animated'] = var12;
                    var12 = var7.guildId;
                    var12 = var10 != var12;
                    if(!var12) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                    var14 = var7.guildId;
                    var13 = _closure2_slot1;
                    var15 = var10 == var13;
                    var13 = undefined;
                    if(var15) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                    var15 = _closure2_slot1;
                    var13 = var15.guild_id;
case 41:
                    var12 = var14 !== var13;
case 39:
                    var11['is_external'] = var12;
                    var11['has_search_query'] = var2;
                    var3['analyticsProperties'] = var11;
                    var3 = var4.bind(var9)(var3);
                    _fun0002_ip = 27; continue _fun0002;
case 23:
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 21;
                    var3 = var9[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.dismissKeyboard;
                    var3 = var3.bind(var4)();
                    var3 = var7.guildId;
                    if(!(var10 != var3)) { _fun0002_ip = 27; continue _fun0002 }
case 43:
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
                    _fun0002_ip = 27; continue _fun0002;
case 21:
                    var3 = _closure2_slot3;
                    if(!(var10 != var3)) { _fun0002_ip = 27; continue _fun0002 }
case 44:
                    var3 = _closure2_slot3;
                    var3 = var3.bind(var1)(var7);
case 27:
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 25;
                    var3 = var9[var3];
                    var4 = var4.bind(var1)(var3);
                    if(var2) { _fun0002_ip = 45; continue _fun0002 }
case 46:
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
                    if(var12) { _fun0002_ip = 47; continue _fun0002 }
case 48:
                    var12 = _closure2_slot1;
                    var11 = var12.guild_id;
case 47:
                    if(!(var10 == var11)) { _fun0002_ip = 49; continue _fun0002 }
case 50:
                    var11 = _closure1_slot6;
                    var11 = var11.DM_CHANNEL;
                    _fun0002_ip = 51; continue _fun0002;
case 49:
                    var12 = _closure1_slot6;
                    var11 = var12.GUILD_CHANNEL;
case 51:
                    var9['page'] = var11;
                    var11 = _closure1_slot7;
                    var11 = var11.EMOJI_PICKER_POPOUT;
                    var9['section'] = var11;
                    var11 = _closure1_slot5;
                    var11 = var11.EMOJI;
                    var9['object'] = var11;
                    var2['location'] = var9;
                    var2 = var3.bind(var4)(var2);
                    _fun0002_ip = 52; continue _fun0002;
case 45:
                    var3 = var4.trackEmojiSearchSelect;
                    var2 = {};
                    var2['emoji'] = var7;
                    var7 = {};
                    var9 = _closure2_slot1;
                    var11 = var10 == var9;
                    var9 = undefined;
                    if(var11) { _fun0002_ip = 53; continue _fun0002 }
case 54:
                    var11 = _closure2_slot1;
                    var9 = var11.guild_id;
case 53:
                    if(!(var10 == var9)) { _fun0002_ip = 55; continue _fun0002 }
case 56:
                    var9 = _closure1_slot6;
                    var9 = var9.DM_CHANNEL;
                    _fun0002_ip = 57; continue _fun0002;
case 55:
                    var10 = _closure1_slot6;
                    var9 = var10.GUILD_CHANNEL;
case 57:
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
case 52:
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
case 0:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 58; continue _fun0003 }
case 59:
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
case 58:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var17.bind(var16)(var10, var13);
            _closure2_slot13 = var17;
            var10 = _closure1_slot1;
            var13 = 26;
            var13 = var11[var13];
            var23 = var10.bind(var4)(var13);
            var13 = {};
            var13['emojiSections'] = var3;
            var13['rowSize'] = var28;
            var13['isNativeEmojiPickerEnabled'] = var2;
            var23 = var23.bind(var4)(var13);
            var13 = 27;
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
case 0:
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
                    if(!(var2 !== var6)) { _fun0004_ip = 60; continue _fun0004 }
case 61:
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var8.bind(var4)(var2);
                    var2 = var2.EmojiPickerFlashListItemType;
                    var2 = var2.PLACEHOLDER;
                    if(!(var2 !== var6)) { _fun0004_ip = 60; continue _fun0004 }
case 62:
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var8.bind(var4)(var2);
                    var2 = var2.EmojiPickerFlashListItemType;
                    var2 = var2.EMOJI_ROW_SLIM;
                    if(!(var2 !== var6)) { _fun0004_ip = 60; continue _fun0004 }
case 63:
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var8.bind(var4)(var2);
                    var2 = var2.EmojiPickerFlashListItemType;
                    var2 = var2.TITLE;
                    if(!(var2 !== var6)) { _fun0004_ip = 64; continue _fun0004 }
case 65:
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var8.bind(var4)(var2);
                    var2 = var2.EmojiPickerFlashListItemType;
                    var2 = var2.PREMIUM_INLINE_ROADBLOCK;
                    if(!(var2 !== var6)) { _fun0004_ip = 66; continue _fun0004 }
case 67:
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var8.bind(var4)(var2);
                    var2 = var2.EmojiPickerFlashListItemType;
                    var2 = var2.EMOJI_ROW;
                    if(!(var2 !== var6)) { _fun0004_ip = 68; continue _fun0004 }
case 69:
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var8.bind(var4)(var2);
                    var2 = var2.EmojiPickerFlashListItemType;
                    var2 = var2.EMOJI_ROW_NSFW;
                    if(!(var2 !== var6)) { _fun0004_ip = 70; continue _fun0004 }
case 71:
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var2 = var8.bind(var4)(var2);
                    var2 = var2.EmojiPickerFlashListItemType;
                    var2 = var2.FOOTER_UPSELL;
                    var10 = undefined;
                    if(!(var2 === var6)) { _fun0004_ip = 72; continue _fun0004 }
case 73:
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
                    if(var12) { _fun0004_ip = 74; continue _fun0004 }
case 75:
                    var12 = _closure2_slot1;
                    var11 = var12.guild_id;
case 74:
                    var2['guildId'] = var11;
                    var11 = _closure2_slot7;
                    var2['analyticsLocations'] = var11;
                    var9 = _closure2_slot11;
                    var2['useTier0UpsellContent'] = var9;
                    var10 = var8.bind(var4)(var6, var2);
                    _fun0004_ip = 72; continue _fun0004;
case 70:
                    var8 = _closure1_slot13;
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 28;
                    var2 = var9[var2];
                    var2 = var6.bind(var4)(var2);
                    var6 = var2.NSFWRow;
                    var2 = {};
                    var10 = var8.bind(var4)(var6, var2);
                    _fun0004_ip = 72; continue _fun0004;
case 68:
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
case 72:
                    var8 = _closure1_slot15;
                    var6 = _closure1_slot14;
                    var2 = {};
                    var11 = var5.isSectionNitroLocked;
                    var9 = true;
                    var11 = var9 === var11;
                    if(!var11) { _fun0004_ip = 76; continue _fun0004 }
case 77:
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
case 76:
                    var9 = new Array(2);
                    var9[0] = var11;
                    var9[1] = var10;
                    var2['children'] = var9;
                    var2 = var8.bind(var4)(var6, var2);
                    return var2;
case 66:
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
case 64:
                    var6 = var5.title;
                    var2 = 'StickyHeader';
                    if(!(var2 === var3)) { _fun0004_ip = 78; continue _fun0004 }
case 79:
                    var2 = _closure2_slot0;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 78; continue _fun0004 }
case 80:
                    var2 = var3.onStickyHeaderRendered;
                    var2 = var2.bind(var3)(var7);
case 78:
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
case 60:
                    var1 = null;
                    return var1;
                }
            };
            var14 = var14.bind(var16)(var9, var13);
            var9 = 33;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.bind(var4)();
            var13 = var9.shouldShowUpsell;
            var16 = var9.onShowNitroUpsell;
            var3 = var3.length;
            if(!(var8 !== var3)) { _fun0001_ip = 81; continue _fun0001 }
case 82:
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            if(var2) { _fun0001_ip = 83; continue _fun0001 }
case 55:
            var2 = 36;
            var2 = var9[var2];
            _fun0001_ip = 84; continue _fun0001;
case 83:
            var8 = 35;
            var2 = var9[var8];
case 84:
            var11 = var3.bind(var4)(var2);
            var8 = _closure1_slot15;
            var3 = _closure1_slot14;
            var2 = {};
            var10 = _closure1_slot13;
            var9 = {};
            var9['analyticsLocations'] = var26;
            var9['animateEmoji'] = var25;
            var9['categoryIndexActive'] = var24;
            var9['data'] = var23;
            if(!(var21 == var20)) { _fun0001_ip = 85; continue _fun0001 }
case 86:
            var23 = var21 == var22;
            var21 = undefined;
            if(var23) { _fun0001_ip = 87; continue _fun0001 }
case 88:
            var21 = var22.guild_id;
case 87:
            var20 = var21;
case 85:
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
            var12 = _closure1_slot13;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 37;
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
case 81:
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 34;
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
    var4 = 38;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emoji_picker/native/components/EmojiPickerList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
// app/modules/double_tap_to_react/native/DoubleTapToReactUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var6 = function getFallbackDoubleTapDisambiguatedEmoji() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getByName;
            var1 = 'heart';
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot12 = var6;
    var5 = function reactionEmojiFromSettingsValue(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var8 = var2.emojiName;
            var1 = var2.emojiId;
            var3 = var2.animated;
            var2 = null;
            var5 = var2 == var1;
            var9 = undefined;
            var4 = undefined;
            if(var5) { _fun0002_ip = 3; continue _fun0002 }
case 4:
            var5 = '0';
            var4 = undefined;
            if(!(var5 !== var1)) { _fun0002_ip = 3; continue _fun0002 }
case 5:
            var4 = var1;
case 3:
            var1 = var2 == var8;
            var6 = undefined;
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = '';
            var6 = undefined;
            if(!(var1 !== var8)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var1 = var8;
            if(!(var2 == var4)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 8;
            var5 = var10[var5];
            var7 = var7.bind(var9)(var5);
            var5 = var7.convertNameToSurrogate;
            var1 = var5.bind(var7)(var8);
case 9:
            var6 = var1;
case 6:
            var1 = {};
            var7 = var2 != var6;
            var5 = '';
            if(!var7) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var5 = var6;
case 11:
            var1['name'] = var5;
            var1['id'] = var4;
            var2 = var2 != var3;
            if(!var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var2 = var3;
case 13:
            var1['animated'] = var2;
            return var1;
        }
    };
    var _closure1_slot13 = var5;
    var4 = function disambiguatedEmojiFromSettingsValue(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = var2.emojiName;
            var3 = var2.emojiId;
            var2 = null;
            var4 = var2 == var3;
            var6 = undefined;
            var7 = undefined;
            if(var4) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var4 = '0';
            var7 = undefined;
            if(!(var4 !== var3)) { _fun0003_ip = 15; continue _fun0003 }
case 17:
            var7 = var3;
case 15:
            var3 = var2 == var1;
            var5 = undefined;
            if(var3) { _fun0003_ip = 18; continue _fun0003 }
case 2:
            var3 = '';
            var5 = undefined;
            if(!(var3 !== var1)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var5 = var1;
case 18:
            var3 = var2 != var7;
            var1 = null;
            if(!var3) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var4 = _closure1_slot6;
            var3 = var4.getCustomEmojiById;
            var1 = var3.bind(var4)(var7);
case 20:
            if(!(var2 == var1)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var3 = var2 != var5;
            var2 = null;
            if(!var3) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 8;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.getByName;
            var2 = var3.bind(var4)(var5);
case 24:
            var1 = var2;
case 22:
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var1 = function _initializeDoubleTapEmojiAndUpsell() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var8 = 9;
                    var3 = var2[var8];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var4 = var3.DoubleTapReactionEmoji;
                    var3 = var4.getSetting;
                    var5 = var3.bind(var4)();
                    var4 = null;
                    var3 = var4 == var5;
                    var9 = undefined;
                    if(var3) { _fun0004_ip = 28; continue _fun0004 }
case 18:
                    var9 = var5.disableDoubleTap;
case 28:
                    var3 = var4 != var9;
                    if(!var3) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var3 = var9;
case 29:
                    if(var3) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var9 = var4 == var5;
                    var3 = undefined;
                    if(var9) { _fun0004_ip = 33; continue _fun0004 }
case 23:
                    var3 = var5.emojiId;
case 33:
                    if(!(var4 == var3)) { _fun0004_ip = 12; continue _fun0004 }
case 34:
                    var9 = var4 == var5;
                    var3 = undefined;
                    if(var9) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                    var3 = var5.emojiName;
case 35:
                    if(!(var4 != var3)) { _fun0004_ip = 37; continue _fun0004 }
case 12:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 23;
                    var3 = var5[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.maybeShowDoubleTapReminderToast;
                    var3 = var3.bind(var4)(var7);
                    _fun0004_ip = 31; continue _fun0004;
case 37:
                    var10 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = 20;
                    var4 = var3[var4];
                    var9 = var10.bind(var2)(var4);
                    var5 = var9.UNSAFE_isDismissibleContentDismissed;
                    var4 = 21;
                    var3 = var3[var4];
                    var3 = var10.bind(var2)(var3);
                    var3 = var3.DismissibleContent;
                    var3 = var3.DOUBLE_TAP_TO_REACT_UPSELL;
                    var3 = var5.bind(var9)(var3);
                    if(var3) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 11;
                    var5 = var10[var5];
                    var5 = var9.bind(var2)(var5);
                    var10 = var5.DoubleTapExpandExperiment;
                    var9 = var10.getConfig;
                    var5 = {};
                    var11 = 'initializeDoubleTapEmojiAndUpsell';
                    var5['location'] = var11;
                    var5 = var9.bind(var10)(var5);
                    var3 = var5.enabled;
case 38:
                    if(var3) { _fun0004_ip = 31; continue _fun0004 }
case 40:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var8];
                    var3 = var5.bind(var2)(var3);
                    var8 = var3.DoubleTapReactionEmoji;
                    var5 = var8.updateSetting;
                    var3 = {};
                    var9 = var7.id;
                    var3['emojiId'] = var9;
                    var9 = var7.name;
                    var3['emojiName'] = var9;
                    var9 = var7.animated;
                    var3['animated'] = var9;
                    var9 = false;
                    var3['disableDoubleTap'] = var9;
                    var3 = var5.bind(var8)(var3);
                    SaveGenerator(address=355);
case 41:
                    return var3;
case 42:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var8 = 24;
                    var8 = var6[var8];
                    var9 = var5.bind(var2)(var8);
                    var8 = var9.requestMarkDismissibleContentAsShown;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var4 = var4.DismissibleContent;
                    var4 = var4.DOUBLE_TAP_TO_REACT_UPSELL;
                    var4 = var8.bind(var9)(var4);
                    var4 = 22;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.updateForceShowChatInputBanner;
                    var4 = {};
                    var8 = true;
                    var4['forceShow'] = var8;
                    var4['emoji'] = var7;
                    var4 = var5.bind(var6)(var4);
                    _fun0004_ip = 31; continue _fun0004;
case 43:
                    return var3;
case 31:
                    return var2;
case 26:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var11 = var9[var7];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var11);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.isContentShown;
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.NITRO_UPSELL_ALERT_KEY;
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ContentDismissActionType;
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.EmojiDisabledReasons;
    var _closure1_slot9 = var10;
    var7 = var7.EmojiIntention;
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot11 = var7;
    var7 = 25;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/double_tap_to_react/native/DoubleTapToReactUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['getFallbackDoubleTapDisambiguatedEmoji'] = var6;
    var3['reactionEmojiFromSettingsValue'] = var5;
    var3['disambiguatedEmojiFromSettingsValue'] = var4;
    var4 = function handleAddDefaultDoubleTapReaction(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var9 = arg1;
            var10 = arg2;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var5 = var4.DoubleTapReactionEmoji;
            var4 = var5.getSetting;
            var14 = var4.bind(var5)();
            var4 = null;
            var6 = var4 == var14;
            var5 = undefined;
            if(var6) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var5 = var14.disableDoubleTap;
case 45:
            var13 = true;
            if(!(var13 !== var5)) { _fun0005_ip = 47; continue _fun0005 }
case 10:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 10;
            var5 = var7[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.canReactToMessage;
            var5 = var5.bind(var6)(var9, var10);
            if(!var5) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var6 = _closure1_slot13;
            var5 = var14;
            if(!(var4 == var14)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var5 = {};
case 49:
            var12 = var6.bind(var1)(var5);
            var _closure2_slot0 = var12;
            if(!(var4 != var14)) { _fun0005_ip = 51; continue _fun0005 }
case 24:
            var5 = var12.id;
            var6 = var4 == var5;
            var8 = var12;
            var5 = false;
            if(!var6) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var7 = var12.name;
            var6 = '';
            var8 = var12;
            var5 = false;
            if(!(var6 === var7)) { _fun0005_ip = 52; continue _fun0005 }
case 51:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 11;
            var6 = var11[var6];
            var6 = var7.bind(var1)(var6);
            var11 = var6.DoubleTapExpandExperiment;
            var7 = var11.getConfig;
            var6 = {};
            var12 = 'handleAddDefaultDoubleTapReaction';
            var6['location'] = var12;
            var6 = var7.bind(var11)(var6);
            var6 = var6.enabled;
            if(var6) { _fun0005_ip = 54; continue _fun0005 }
case 55:
            return var1;
case 54:
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 8;
            var6 = var11[var6];
            var11 = var7.bind(var1)(var6);
            var7 = var11.convertNameToSurrogate;
            var6 = 'heart';
            var11 = var7.bind(var11)(var6);
            var7 = '';
            var6 = null;
            if(!(var7 !== var11)) { _fun0005_ip = 56; continue _fun0005 }
case 57:
            var7 = {};
            var7['name'] = var11;
            var7['id'] = var1;
            var11 = false;
            var7['animated'] = var11;
            var6 = var7;
case 56:
            if(!(var4 != var6)) { _fun0005_ip = 58; continue _fun0005 }
case 59:
            _closure2_slot0 = var6;
            var8 = var6;
            var5 = true;
case 52:
            var11 = var9.reactions;
            var7 = var11.some;
            var6 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.emojiEquals;
                    var3 = var2.emoji;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var1);
                    if(!var1) { _fun0006_ip = 19; continue _fun0006 }
case 60:
                    var1 = var2.me;
case 19:
                    return var1;
                }
            };
            var6 = var7.bind(var11)(var6);
            if(var6) { _fun0005_ip = 61; continue _fun0005 }
case 62:
            if(var5) { _fun0005_ip = 63; continue _fun0005 }
case 64:
            var7 = _closure1_slot14;
            var6 = var14;
            if(!(var4 == var6)) { _fun0005_ip = 65; continue _fun0005 }
case 66:
            var6 = {};
case 65:
            var12 = var7.bind(var1)(var6);
            _fun0005_ip = 67; continue _fun0005;
case 63:
            var6 = _closure1_slot12;
            var12 = var6.bind(var1)();
case 67:
            if(!(var4 == var12)) { _fun0005_ip = 68; continue _fun0005 }
case 69:
            if(var5) { _fun0005_ip = 47; continue _fun0005 }
case 70:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 15;
            var5 = var7[var5];
            var7 = var6.bind(var1)(var5);
            var6 = var7.showDoubleTapErrorToast;
            var5 = {};
            var15 = var4 == var14;
            var11 = undefined;
            if(var15) { _fun0005_ip = 71; continue _fun0005 }
case 72:
            var11 = var14.emojiName;
case 71:
            var5['emojiName'] = var11;
            var5 = var6.bind(var7)(var5);
            _fun0005_ip = 47; continue _fun0005;
case 68:
            if(!(var4 != var12)) { _fun0005_ip = 73; continue _fun0005 }
case 74:
            var7 = {};
            var7['emoji'] = var12;
            var7['channel'] = var10;
            var5 = _closure1_slot10;
            var5 = var5.REACTION;
            var7['intention'] = var5;
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 16;
            var5 = var11[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.getEmojiUnavailableReason;
            var7 = var5.bind(var6)(var7);
            var5 = _closure1_slot9;
            var5 = var5.PREMIUM_LOCKED;
            if(!(var7 !== var5)) { _fun0005_ip = 75; continue _fun0005 }
case 76:
            if(!(var4 == var7)) { _fun0005_ip = 77; continue _fun0005 }
case 73:
            var11 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = 13;
            var6 = var4[var5];
            var14 = var11.bind(var1)(var6);
            var6 = var14.triggerHapticFeedback;
            var5 = var4[var5];
            var5 = var11.bind(var1)(var5);
            var5 = var5.HapticFeedbackTypes;
            var5 = var5.IMPACT_LIGHT;
            var5 = var6.bind(var14)(var5);
            var5 = 14;
            var6 = var4[var5];
            var16 = var11.bind(var1)(var6);
            var15 = var16.addReaction;
            var14 = var10.id;
            var21 = var9.id;
            var5 = var4[var5];
            var5 = var11.bind(var1)(var5);
            var5 = var5.ReactionLocations;
            var19 = var5.DOUBLE_TAP;
            var23 = var16;
            var22 = var14;
            var20 = var8;
            var5 = var23[var15](var22, var21, var20, var19, var18);
            var6 = 20;
            var5 = var4[var6];
            var17 = var11.bind(var1)(var5);
            var16 = var17.UNSAFE_markDismissibleContentAsDismissed;
            var14 = 21;
            var5 = var4[var14];
            var5 = var11.bind(var1)(var5);
            var5 = var5.DismissibleContent;
            var15 = var5.DOUBLE_TAP_TO_REACT_REMINDER;
            var5 = {};
            var18 = _closure1_slot8;
            var18 = var18.INDIRECT_ACTION;
            var5['dismissAction'] = var18;
            var5 = var16.bind(var17)(var15, var5);
            var5 = 22;
            var5 = var4[var5];
            var16 = var11.bind(var1)(var5);
            var15 = var16.updateForceShowChatInputBanner;
            var5 = {};
            var17 = false;
            var5['forceShow'] = var17;
            var5 = var15.bind(var16)(var5);
            var5 = _closure1_slot5;
            var4 = var4[var14];
            var4 = var11.bind(var1)(var4);
            var4 = var4.DismissibleContent;
            var4 = var4.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL;
            var4 = var5.bind(var1)(var4);
            if(!var4) { _fun0005_ip = 47; continue _fun0005 }
case 78:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = var4[var6];
            var11 = var5.bind(var1)(var6);
            var6 = var11.UNSAFE_markDismissibleContentAsDismissed;
            var4 = var4[var14];
            var4 = var5.bind(var1)(var4);
            var4 = var4.DismissibleContent;
            var5 = var4.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL;
            var4 = {};
            var14 = _closure1_slot8;
            var14 = var14.INDIRECT_ACTION;
            var4['dismissAction'] = var14;
            var4['forceTrack'] = var13;
            var4 = var6.bind(var11)(var5, var4);
case 47:
            return var1;
case 77:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 15;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.showDoubleTapErrorToast;
            var4 = {};
            var11 = var12.name;
            var4['emojiName'] = var11;
            var4['reason'] = var7;
            var4 = var5.bind(var6)(var4);
            var4 = undefined;
            return var4;
case 75:
            var5 = _closure1_slot4;
            var4 = var5.lazy;
            var3 = function() {
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 18;
                var2 = var1[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = 17;
                var2 = var1[var2];
                var1 = var1.paths;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var11 = var4.bind(var5)(var3);
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 19;
            var3 = var5[var3];
            var6 = var4.bind(var1)(var3);
            var5 = var6.openAlert;
            var4 = _closure1_slot7;
            var7 = _closure1_slot11;
            var3 = {};
            var12 = var12.name;
            var3['emojiName'] = var12;
            var3 = var7.bind(var1)(var11, var3);
            var3 = var5.bind(var6)(var4, var3);
            var3 = undefined;
            return var3;
case 61:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 13;
            var3 = var7[var2];
            var4 = var6.bind(var1)(var3);
            var3 = var4.triggerHapticFeedback;
            var2 = var7[var2];
            var2 = var6.bind(var1)(var2);
            var2 = var2.HapticFeedbackTypes;
            var2 = var2.IMPACT_LIGHT;
            var2 = var3.bind(var4)(var2);
            var5 = 14;
            var2 = var7[var5];
            var4 = var6.bind(var1)(var2);
            var3 = var4.removeReaction;
            var2 = {};
            var10 = var10.id;
            var2['channelId'] = var10;
            var9 = var9.id;
            var2['messageId'] = var9;
            var2['emoji'] = var8;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var5 = var5.ReactionLocations;
            var5 = var5.DOUBLE_TAP;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var2 = undefined;
            return var2;
case 58:
            return var1;
        }
    };
    var3['handleAddDefaultDoubleTapReaction'] = var4;
    var4 = function areEmojisEqual(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var1 = var3.id;
            var4 = null;
            if(!(var4 == var1)) { _fun0007_ip = 79; continue _fun0007 }
case 80:
            var1 = var2.id;
            if(!(var4 != var1)) { _fun0007_ip = 81; continue _fun0007 }
case 79:
            var4 = var3.id;
            var1 = var2.id;
            var1 = var4 === var1;
            if(!var1) { _fun0007_ip = 82; continue _fun0007 }
case 15:
            var5 = var3.name;
            var4 = var2.name;
            var1 = var5 === var4;
case 82:
            _fun0007_ip = 83; continue _fun0007;
case 81:
            var3 = var3.surrogates;
            var2 = var2.surrogates;
            var1 = var3 === var2;
case 83:
            return var1;
        }
    };
    var3['areEmojisEqual'] = var4;
    var4 = function markUserTriggeredDoubleTapUpsellDismissed(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 20;
        var1 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var1);
        var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
        var1 = 21;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.DismissibleContent;
        var2 = var1.DOUBLE_TAP_TO_REACT_UPSELL;
        var1 = {};
        var5 = arg1;
        var1['dismissAction'] = var5;
        var5 = true;
        var1['forceTrack'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['markUserTriggeredDoubleTapUpsellDismissed'] = var4;
    var4 = function initializeDoubleTapEmojiAndUpsell() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['initializeDoubleTapEmojiAndUpsell'] = var4;
    var2 = function canUpsellDoubleTapForEmoji(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg2;
            var3 = _closure1_slot6;
            var2 = var3.getDisambiguatedEmojiContext;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var1 = var3.isFavoriteEmojiWithoutFetchingLatest;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0008_ip = 84; continue _fun0008 }
case 85:
            var2 = var3.isFrequentlyUsedReactionEmojiWithoutFetchingLatest;
            var1 = var2.bind(var3)(var4);
case 84:
            return var1;
        }
    };
    var3['canUpsellDoubleTapForEmoji'] = var2;
    return var1;
})();
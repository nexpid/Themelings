// app/modules/quests/native/QuestsEmbed.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function buildBaseEmbedProps(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = var2.titleText;
            var4 = var2.bodyText;
            var1 = var2.themeColors;
            var2 = var2.thumbnailUrl;
            var8 = var1.baseColors;
            var1 = var1.colors;
            var5 = {};
            var9 = var5;
            var3 = copyDataProperties(var9, var8);
            var7 = var1.headerColor;
            var3 = 'headerColor';
            var5[var3] = var7;
            var3 = 'titleText';
            var5[var3] = var6;
            var6 = var1.titleColor;
            var3 = 'titleColor';
            var5[var3] = var6;
            var6 = var1.bodyTextColor;
            var3 = 'subtitleColor';
            var5[var3] = var6;
            var3 = var1.bodyTextColor;
            var1 = 'bodyTextColor';
            var5[var1] = var3;
            var1 = 'thumbnailUrl';
            var5[var1] = var2;
            var2 = true;
            var1 = 'embedCanBeTapped';
            var5[var1] = var2;
            var1 = 'canBeAccepted';
            var5[var1] = var2;
            var2 = _closure1_slot9;
            var3 = var2.GUILD;
            var2 = 'type';
            var5[var2] = var3;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = var2.isAndroid;
            var1 = var1.bind(var2)();
            var2 = {};
            var9 = var2;
            var8 = var5;
            var5 = copyDataProperties(var9, var8);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 'headerText';
            var2[var1] = var3;
            var1 = 'subtitle';
            var2[var1] = var4;
            var1 = var2;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var5 = null;
            var3 = 'headerText';
            var2[var3] = var5;
            var3 = 'subtitle';
            var2[var3] = var4;
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function buildSupportedOnMobileEmbedBodyText(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.quest;
            var1 = var5.config;
            var2 = var1.expiresAt;
            var1 = global;
            var1 = var1.Date;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var14 = var3;
            var1 = new var14[var1](var13);
            var3 = var1 instanceof Object ? var1 : var3;
            var1 = var3.toISOString;
            var1 = var1.bind(var3)();
            if(!(!(var2 < var1))) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 8;
            var2 = var9[var1];
            var4 = undefined;
            var3 = var8.bind(var4)(var2);
            var2 = var3.getQuestTaskDetails;
            var10 = var2.bind(var3)(var5);
            var1 = var9[var1];
            var2 = var8.bind(var4)(var1);
            var1 = var2.getThirdPartyTaskDetails;
            var6 = var1.bind(var2)(var5);
            var1 = 9;
            var1 = var9[var1];
            var3 = var8.bind(var4)(var1);
            var2 = var3.getQuestsInstructionsToWinReward;
            var1 = {};
            var1['quest'] = var5;
            var1['taskDetails'] = var10;
            var7 = _closure1_slot6;
            var7 = var7.EMBED_MOBILE;
            var1['location'] = var7;
            var7 = 10;
            var10 = var9[var7];
            var10 = var8.bind(var4)(var10);
            var10 = var10.QuestContent;
            var10 = var10.QUEST_EMBED_MOBILE;
            var1['questContent'] = var10;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.QuestContent;
            var7 = var7.QUEST_EMBED_MOBILE;
            var1['sourceQuestContent'] = var7;
            var7 = function connectedConsoleLinkOnClick() {
                var1 = undefined;
                return var1;
            };
            var1['connectedConsoleLinkOnClick'] = var7;
            var7 = null;
            var7 = var7 != var6;
            if(!var7) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var4 = var6;
case 7:
            var1['thirdPartyTaskDetails'] = var4;
            var4 = true;
            var1['withoutMarkdown'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
case 5:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 7;
            var3 = var7[var1];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var6.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.ge+AJp;
            var1 = {};
            var5 = var5.config;
            var5 = var5.messages;
            var5 = var5.questName;
            var1['questName'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function buildQuestsEmbedProps(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var9 = var2.questId;
            var1 = var2.isEligibleForQuests;
            var5 = var2.themeColors;
            if(var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var4 = _closure1_slot10;
            var3 = {};
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 7;
            var7 = var11[var6];
            var1 = undefined;
            var7 = var10.bind(var1)(var7);
            var12 = var7.intl;
            var8 = var12.string;
            var7 = var11[var6];
            var7 = var10.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.3Z/Ejm;
            var7 = var8.bind(var12)(var7);
            var3['titleText'] = var7;
            var7 = var11[var6];
            var7 = var10.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var11[var6];
            var6 = var10.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.yHzB4Y;
            var6 = var7.bind(var8)(var6);
            var3['bodyText'] = var6;
            var3['themeColors'] = var5;
            var8 = _closure1_slot3;
            var7 = var8.resolveAssetSource;
            var10 = _closure1_slot1;
            var6 = 13;
            var6 = var11[var6];
            var6 = var10.bind(var1)(var6);
            var6 = var7.bind(var8)(var6);
            var6 = var6.uri;
            var3['thumbnailUrl'] = var6;
            var1 = var4.bind(var1)(var3);
            return var1;
case 9:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = 8;
            var1 = var1[var10];
            var4 = undefined;
            var7 = var3.bind(var4)(var1);
            var6 = var7.findQuestOrReplacement;
            var1 = _closure1_slot5;
            var3 = var1.quests;
            var1 = _closure1_slot5;
            var1 = var1.excludedQuests;
            var8 = var6.bind(var7)(var9, var3, var1);
            var1 = _closure1_slot5;
            var3 = var1.excludedQuests;
            var1 = var3.get;
            var6 = var1.bind(var3)(var9);
            var3 = null;
            if(!(var3 == var8)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var1 = _closure1_slot5;
            var1 = var1.isFetchingCurrentQuests;
            if(var1) { _fun0003_ip = 13; continue _fun0003 }
case 11:
            if(!(var3 != var8)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var11 = var7.bind(var4)(var1);
            var7 = var11.isShareableQuest;
            var1 = var8.config;
            var1 = var7.bind(var11)(var1);
            if(var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 14;
            var1 = var15[var1];
            var11 = var14.bind(var4)(var1);
            var7 = var11.trackQuestEmbedFallbackViewed;
            var1 = _closure1_slot7;
            var1 = var1.NOT_SHAREABLE_QUEST;
            var1 = var7.bind(var11)(var9, var1);
            var7 = _closure1_slot10;
            var1 = {};
            var11 = 7;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var16 = var12.intl;
            var13 = var16.string;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.Dd6Daw;
            var12 = var13.bind(var16)(var12);
            var1['titleText'] = var12;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.NXrP3N;
            var11 = var12.bind(var13)(var11);
            var1['bodyText'] = var11;
            var1['themeColors'] = var5;
            var13 = _closure1_slot3;
            var12 = var13.resolveAssetSource;
            var14 = _closure1_slot1;
            var11 = 13;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var12.bind(var13)(var11);
            var11 = var11.uri;
            var1['thumbnailUrl'] = var11;
            var1 = var7.bind(var4)(var1);
            _fun0003_ip = 18; continue _fun0003;
case 16:
            var7 = {};
            var7['themeColors'] = var5;
            var7['quest'] = var8;
            var8 = var7.themeColors;
            var22 = var7.quest;
            var11 = var8.colors;
            var12 = var22.userStatus;
            var13 = var3 == var12;
            var7 = undefined;
            if(var13) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var7 = var12.enrolledAt;
case 19:
            var14 = var3 != var7;
            var7 = var22.config;
            var12 = var7.expiresAt;
            var7 = global;
            var7 = var7.Date;
            var13 = var7.prototype;
            var13 = Object.create(var13, {constructor: {value: var7}});
            var30 = var13;
            var7 = new var30[var7](var29);
            var13 = var7 instanceof Object ? var7 : var13;
            var7 = var13.toISOString;
            var7 = var7.bind(var13)();
            var12 = var12 < var7;
            var13 = _closure1_slot4;
            var7 = var13.getState;
            var7 = var7.bind(var13)();
            var15 = var7.theme;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var7 = 11;
            var7 = var16[var7];
            var13 = var13.bind(var4)(var7);
            var7 = var13.isThemeDark;
            var13 = var7.bind(var13)(var15);
            var7 = _closure1_slot8;
            if(var13) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var21 = var7.LIGHT;
            _fun0003_ip = 23; continue _fun0003;
case 21:
            var21 = var7.DARK;
case 23:
            var7 = _closure1_slot5;
            var7 = var7.questEnrollmentBlockedUntil;
            var13 = var3 != var7;
            var7 = {};
            var16 = _closure1_slot10;
            var15 = {};
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var18 = 7;
            var17 = var24[var18];
            var17 = var23.bind(var4)(var17);
            var25 = var17.intl;
            var20 = var25.formatToPlainString;
            var17 = var24[var18];
            var17 = var23.bind(var4)(var17);
            var17 = var17.t;
            var19 = var17.EAYZAr;
            var17 = {};
            var26 = var22.config;
            var26 = var26.messages;
            var26 = var26.questName;
            var17['questName'] = var26;
            var17 = var20.bind(var25)(var19, var17);
            var15['titleText'] = var17;
            var17 = var22.config;
            var17 = var17.messages;
            var17 = var17.gamePublisher;
            var15['subtitle'] = var17;
            var19 = _closure1_slot11;
            var17 = {};
            var17['quest'] = var22;
            var17 = var19.bind(var4)(var17);
            var15['bodyText'] = var17;
            var15['themeColors'] = var8;
            var17 = 12;
            var19 = var24[var17];
            var20 = var23.bind(var4)(var19);
            var19 = var20.getQuestAsset;
            var17 = var24[var17];
            var17 = var23.bind(var4)(var17);
            var17 = var17.QuestAssetType;
            var17 = var17.GAME_TILE;
            var17 = var19.bind(var20)(var22, var17, var21);
            var17 = var17.url;
            var15['thumbnailUrl'] = var17;
            var28 = var16.bind(var4)(var15);
            var29 = var7;
            var15 = copyDataProperties(var29, var28);
            if(var14) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            if(var12) { _fun0003_ip = 24; continue _fun0003 }
case 26:
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var15 = var14[var18];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var18];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            if(var13) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var13 = var14.kUQLMJ;
            var13 = var15.bind(var16)(var13);
            _fun0003_ip = 29; continue _fun0003;
case 27:
            var14 = var14.th2+0j;
            var13 = var15.bind(var16)(var14);
case 29:
            _fun0003_ip = 30; continue _fun0003;
case 24:
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var15 = var14[var18];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var18];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            if(var12) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var12 = var14.th2+0j;
            var12 = var15.bind(var16)(var12);
            _fun0003_ip = 33; continue _fun0003;
case 31:
            var14 = var14.hvVgAZ;
            var12 = var15.bind(var16)(var14);
case 33:
            var13 = var12;
case 30:
            var12 = 'acceptLabelText';
            var7[var12] = var13;
            var12 = var11.acceptBlurpleLabelBackgroundColor;
            var11 = 'acceptLabelBackgroundColor';
            var7[var11] = var12;
            var8 = var8.colors;
            var11 = var8.acceptLabelGreenColor;
            var8 = 'acceptLabelColor';
            var7[var8] = var11;
            var8 = 'thumbnailCornerRadius';
            var7[var8] = var10;
            var1 = var7;
case 18:
            _fun0003_ip = 34; continue _fun0003;
case 14:
            if(!(var3 == var6)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 14;
            var3 = var12[var3];
            var7 = var11.bind(var4)(var3);
            var6 = var7.trackQuestEmbedFallbackViewed;
            var3 = _closure1_slot7;
            var3 = var3.UNKNOWN_QUEST;
            var3 = var6.bind(var7)(var9, var3);
            var6 = _closure1_slot10;
            var3 = {};
            var7 = 7;
            var8 = var12[var7];
            var8 = var11.bind(var4)(var8);
            var13 = var8.intl;
            var10 = var13.string;
            var8 = var12[var7];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.rxf+nx;
            var8 = var10.bind(var13)(var8);
            var3['titleText'] = var8;
            var8 = var12[var7];
            var8 = var11.bind(var4)(var8);
            var10 = var8.intl;
            var8 = var10.string;
            var7 = var12[var7];
            var7 = var11.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.Ow5AQI;
            var7 = var8.bind(var10)(var7);
            var3['bodyText'] = var7;
            var3['themeColors'] = var5;
            var10 = _closure1_slot3;
            var8 = var10.resolveAssetSource;
            var11 = _closure1_slot1;
            var7 = 13;
            var7 = var12[var7];
            var7 = var11.bind(var4)(var7);
            var7 = var8.bind(var10)(var7);
            var7 = var7.uri;
            var3['thumbnailUrl'] = var7;
            var3 = var6.bind(var4)(var3);
            _fun0003_ip = 37; continue _fun0003;
case 35:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 14;
            var6 = var12[var6];
            var8 = var11.bind(var4)(var6);
            var7 = var8.trackQuestEmbedFallbackViewed;
            var6 = _closure1_slot7;
            var6 = var6.EXCLUDED_QUEST;
            var6 = var7.bind(var8)(var9, var6);
            var7 = _closure1_slot10;
            var6 = {};
            var8 = 7;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var13 = var9.intl;
            var10 = var13.string;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.Dd6Daw;
            var9 = var10.bind(var13)(var9);
            var6['titleText'] = var9;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.ii4mJo;
            var8 = var9.bind(var10)(var8);
            var6['bodyText'] = var8;
            var6['themeColors'] = var5;
            var10 = _closure1_slot3;
            var9 = var10.resolveAssetSource;
            var11 = _closure1_slot1;
            var8 = 13;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var9.bind(var10)(var8);
            var8 = var8.uri;
            var6['thumbnailUrl'] = var8;
            var3 = var7.bind(var4)(var6);
case 37:
            var1 = var3;
case 34:
            _fun0003_ip = 38; continue _fun0003;
case 13:
            var3 = _closure1_slot10;
            var2 = {};
            var2['themeColors'] = var5;
            var1 = var3.bind(var4)(var2);
case 38:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.Image;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.QuestsExperimentLocations;
    var _closure1_slot6 = var7;
    var4 = var4.QuestEmbedFallbackReason;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTypes;
    var _closure1_slot9 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestsEmbed.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createQuestsEmbed(arg1) {
        var2 = arg1;
        var1 = var2.questId;
        var5 = var2.theme;
        var3 = _closure1_slot12;
        var2 = {};
        var2['questId'] = var1;
        var8 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 15;
        var4 = var6[var1];
        var1 = undefined;
        var4 = var8.bind(var1)(var4);
        var4 = var4.bind(var1)(var5);
        var2['themeColors'] = var4;
        var5 = _closure1_slot0;
        var4 = 16;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.getIsEligibleForQuests;
        var4 = {};
        var7 = _closure1_slot6;
        var7 = var7.EMBED_MOBILE;
        var4['location'] = var7;
        var4 = var5.bind(var6)(var4);
        var2['isEligibleForQuests'] = var4;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['createQuestsEmbed'] = var2;
    return var1;
})();
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
            var7 = var2.titleText;
            var4 = var2.bodyText;
            var5 = var2.subtitle;
            var1 = var2.themeColors;
            var2 = var2.thumbnailUrl;
            var9 = var1.baseColors;
            var1 = var1.colors;
            var3 = {};
            var10 = var3;
            var6 = copyDataProperties(var10, var9);
            var8 = var1.headerColor;
            var6 = 'headerColor';
            var3[var6] = var8;
            var6 = 'titleText';
            var3[var6] = var7;
            var7 = var1.titleColor;
            var6 = 'titleColor';
            var3[var6] = var7;
            var7 = var1.bodyTextColor;
            var6 = 'subtitleColor';
            var3[var6] = var7;
            var6 = var1.bodyTextColor;
            var1 = 'bodyTextColor';
            var3[var1] = var6;
            var1 = 'thumbnailUrl';
            var3[var1] = var2;
            var2 = true;
            var1 = 'embedCanBeTapped';
            var3[var1] = var2;
            var1 = 'canBeAccepted';
            var3[var1] = var2;
            var2 = _closure1_slot9;
            var6 = var2.GUILD;
            var2 = 'type';
            var3[var2] = var6;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 6;
            var1 = var6[var1];
            var6 = undefined;
            var2 = var2.bind(var6)(var1);
            var1 = var2.isAndroid;
            var1 = var1.bind(var2)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = {};
            var10 = var1;
            var9 = var3;
            var2 = copyDataProperties(var10, var9);
            var2 = 'headerText';
            var1[var2] = var6;
            var2 = 'bodyText';
            var1[var2] = var4;
            var2 = 'subtitle';
            var1[var2] = var5;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = {};
            var10 = var2;
            var9 = var3;
            var3 = copyDataProperties(var10, var9);
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
            var2 = var1.ge+AJi;
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
            var8 = var2.questId;
            var1 = var2.isEligibleForQuests;
            var2 = var2.themeColors;
            if(var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var5 = _closure1_slot10;
            var4 = {};
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 7;
            var7 = var11[var6];
            var1 = undefined;
            var7 = var10.bind(var1)(var7);
            var12 = var7.intl;
            var9 = var12.string;
            var7 = var11[var6];
            var7 = var10.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.3Z/Ejo;
            var7 = var9.bind(var12)(var7);
            var4['titleText'] = var7;
            var7 = var11[var6];
            var7 = var10.bind(var1)(var7);
            var9 = var7.intl;
            var7 = var9.string;
            var6 = var11[var6];
            var6 = var10.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.yHzB4e;
            var6 = var7.bind(var9)(var6);
            var4['bodyText'] = var6;
            var4['themeColors'] = var2;
            var9 = _closure1_slot3;
            var7 = var9.resolveAssetSource;
            var10 = _closure1_slot1;
            var6 = 13;
            var6 = var11[var6];
            var6 = var10.bind(var1)(var6);
            var6 = var7.bind(var9)(var6);
            var6 = var6.uri;
            var4['thumbnailUrl'] = var6;
            var1 = var5.bind(var1)(var4);
            return var1;
case 9:
            var1 = _closure1_slot5;
            var4 = var1.quests;
            var1 = var4.get;
            var5 = var1.bind(var4)(var8);
            var1 = _closure1_slot5;
            var4 = var1.excludedQuests;
            var1 = var4.get;
            var1 = var1.bind(var4)(var8);
            var10 = null;
            if(!(var10 == var5)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var4 = _closure1_slot5;
            var4 = var4.isFetchingCurrentQuests;
            if(var4) { _fun0003_ip = 13; continue _fun0003 }
case 11:
            if(!(var10 == var1)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            if(!(var10 != var5)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 8;
            var1 = var1[var6];
            var15 = undefined;
            var7 = var4.bind(var15)(var1);
            var4 = var7.isShareableQuest;
            var1 = var5.config;
            var1 = var4.bind(var7)(var1);
            if(var1) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 14;
            var1 = var13[var1];
            var7 = var12.bind(var15)(var1);
            var4 = var7.trackQuestEmbedFallbackViewed;
            var1 = _closure1_slot7;
            var1 = var1.NOT_SHAREABLE_QUEST;
            var1 = var4.bind(var7)(var8, var1);
            var4 = _closure1_slot10;
            var1 = {};
            var7 = 7;
            var9 = var13[var7];
            var9 = var12.bind(var15)(var9);
            var14 = var9.intl;
            var11 = var14.string;
            var9 = var13[var7];
            var9 = var12.bind(var15)(var9);
            var9 = var9.t;
            var9 = var9.Dd6Da2;
            var9 = var11.bind(var14)(var9);
            var1['titleText'] = var9;
            var9 = var13[var7];
            var9 = var12.bind(var15)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var7 = var13[var7];
            var7 = var12.bind(var15)(var7);
            var7 = var7.t;
            var7 = var7.NXrP3N;
            var7 = var9.bind(var11)(var7);
            var1['bodyText'] = var7;
            var1['themeColors'] = var2;
            var11 = _closure1_slot3;
            var9 = var11.resolveAssetSource;
            var12 = _closure1_slot1;
            var7 = 13;
            var7 = var13[var7];
            var7 = var12.bind(var15)(var7);
            var7 = var9.bind(var11)(var7);
            var7 = var7.uri;
            var1['thumbnailUrl'] = var7;
            var1 = var4.bind(var15)(var1);
            _fun0003_ip = 20; continue _fun0003;
case 18:
            var4 = {};
            var4['themeColors'] = var2;
            var4['quest'] = var5;
            var5 = var4.themeColors;
            var20 = var4.quest;
            var7 = var5.colors;
            var9 = var20.userStatus;
            var11 = var10 == var9;
            var4 = undefined;
            if(var11) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var4 = var9.enrolledAt;
case 21:
            var11 = var10 != var4;
            var4 = var20.config;
            var9 = var4.expiresAt;
            var4 = global;
            var4 = var4.Date;
            var12 = var4.prototype;
            var12 = Object.create(var12, {constructor: {value: var4}});
            var28 = var12;
            var4 = new var28[var4](var27);
            var12 = var4 instanceof Object ? var4 : var12;
            var4 = var12.toISOString;
            var4 = var4.bind(var12)();
            var9 = var9 < var4;
            var12 = _closure1_slot4;
            var4 = var12.getState;
            var4 = var4.bind(var12)();
            var13 = var4.theme;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var4 = 11;
            var4 = var14[var4];
            var12 = var12.bind(var15)(var4);
            var4 = var12.isThemeDark;
            var12 = var4.bind(var12)(var13);
            var4 = _closure1_slot8;
            if(var12) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var19 = var4.LIGHT;
            _fun0003_ip = 25; continue _fun0003;
case 23:
            var19 = var4.DARK;
case 25:
            var4 = _closure1_slot5;
            var4 = var4.questEnrollmentBlockedUntil;
            var10 = var10 != var4;
            var4 = {};
            var13 = _closure1_slot10;
            var12 = {};
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var16 = 7;
            var14 = var22[var16];
            var14 = var21.bind(var15)(var14);
            var23 = var14.intl;
            var18 = var23.formatToPlainString;
            var14 = var22[var16];
            var14 = var21.bind(var15)(var14);
            var14 = var14.t;
            var17 = var14.EAYZAg;
            var14 = {};
            var24 = var20.config;
            var24 = var24.messages;
            var24 = var24.questName;
            var14['questName'] = var24;
            var14 = var18.bind(var23)(var17, var14);
            var12['titleText'] = var14;
            var14 = var20.config;
            var14 = var14.messages;
            var14 = var14.gamePublisher;
            var12['subtitle'] = var14;
            var17 = _closure1_slot11;
            var14 = {};
            var14['quest'] = var20;
            var14 = var17.bind(var15)(var14);
            var12['bodyText'] = var14;
            var12['themeColors'] = var5;
            var14 = 12;
            var17 = var22[var14];
            var18 = var21.bind(var15)(var17);
            var17 = var18.getQuestAsset;
            var14 = var22[var14];
            var14 = var21.bind(var15)(var14);
            var14 = var14.QuestAssetType;
            var14 = var14.GAME_TILE;
            var14 = var17.bind(var18)(var20, var14, var19);
            var14 = var14.url;
            var12['thumbnailUrl'] = var14;
            var26 = var13.bind(var15)(var12);
            var27 = var4;
            var12 = copyDataProperties(var27, var26);
            if(var11) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            if(var9) { _fun0003_ip = 26; continue _fun0003 }
case 28:
            var14 = _closure1_slot0;
            var11 = _closure1_slot2;
            var12 = var11[var16];
            var12 = var14.bind(var15)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var11[var16];
            var11 = var14.bind(var15)(var11);
            var11 = var11.t;
            if(var10) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var10 = var11.kUQLMD;
            var10 = var12.bind(var13)(var10);
            _fun0003_ip = 31; continue _fun0003;
case 29:
            var11 = var11.th2+0t;
            var10 = var12.bind(var13)(var11);
case 31:
            _fun0003_ip = 32; continue _fun0003;
case 26:
            var14 = _closure1_slot0;
            var11 = _closure1_slot2;
            var12 = var11[var16];
            var12 = var14.bind(var15)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var11[var16];
            var11 = var14.bind(var15)(var11);
            var11 = var11.t;
            if(var9) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var9 = var11.th2+0t;
            var9 = var12.bind(var13)(var9);
            _fun0003_ip = 35; continue _fun0003;
case 33:
            var11 = var11.hvVgAQ;
            var9 = var12.bind(var13)(var11);
case 35:
            var10 = var9;
case 32:
            var9 = 'acceptLabelText';
            var4[var9] = var10;
            var9 = var7.acceptBlurpleLabelBackgroundColor;
            var7 = 'acceptLabelBackgroundColor';
            var4[var7] = var9;
            var5 = var5.colors;
            var7 = var5.acceptLabelGreenColor;
            var5 = 'acceptLabelColor';
            var4[var5] = var7;
            var5 = 'thumbnailCornerRadius';
            var4[var5] = var6;
            var1 = var4;
case 20:
            _fun0003_ip = 36; continue _fun0003;
case 16:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 14;
            var4 = var12[var4];
            var6 = undefined;
            var7 = var11.bind(var6)(var4);
            var5 = var7.trackQuestEmbedFallbackViewed;
            var4 = _closure1_slot7;
            var4 = var4.UNKNOWN_QUEST;
            var4 = var5.bind(var7)(var8, var4);
            var5 = _closure1_slot10;
            var4 = {};
            var7 = 7;
            var9 = var12[var7];
            var9 = var11.bind(var6)(var9);
            var13 = var9.intl;
            var10 = var13.string;
            var9 = var12[var7];
            var9 = var11.bind(var6)(var9);
            var9 = var9.t;
            var9 = var9.rxf+n5;
            var9 = var10.bind(var13)(var9);
            var4['titleText'] = var9;
            var9 = var12[var7];
            var9 = var11.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var12[var7];
            var7 = var11.bind(var6)(var7);
            var7 = var7.t;
            var7 = var7.Ow5AQE;
            var7 = var9.bind(var10)(var7);
            var4['bodyText'] = var7;
            var4['themeColors'] = var2;
            var10 = _closure1_slot3;
            var9 = var10.resolveAssetSource;
            var11 = _closure1_slot1;
            var7 = 13;
            var7 = var12[var7];
            var7 = var11.bind(var6)(var7);
            var7 = var9.bind(var10)(var7);
            var7 = var7.uri;
            var4['thumbnailUrl'] = var7;
            var1 = var5.bind(var6)(var4);
case 36:
            _fun0003_ip = 37; continue _fun0003;
case 14:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 14;
            var4 = var11[var4];
            var6 = undefined;
            var7 = var10.bind(var6)(var4);
            var5 = var7.trackQuestEmbedFallbackViewed;
            var4 = _closure1_slot7;
            var4 = var4.EXCLUDED_QUEST;
            var4 = var5.bind(var7)(var8, var4);
            var5 = _closure1_slot10;
            var4 = {};
            var7 = 7;
            var8 = var11[var7];
            var8 = var10.bind(var6)(var8);
            var12 = var8.intl;
            var9 = var12.string;
            var8 = var11[var7];
            var8 = var10.bind(var6)(var8);
            var8 = var8.t;
            var8 = var8.Dd6Da2;
            var8 = var9.bind(var12)(var8);
            var4['titleText'] = var8;
            var8 = var11[var7];
            var8 = var10.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var6)(var7);
            var7 = var7.t;
            var7 = var7.ii4mJi;
            var7 = var8.bind(var9)(var7);
            var4['bodyText'] = var7;
            var4['themeColors'] = var2;
            var9 = _closure1_slot3;
            var8 = var9.resolveAssetSource;
            var10 = _closure1_slot1;
            var7 = 13;
            var7 = var11[var7];
            var7 = var10.bind(var6)(var7);
            var7 = var8.bind(var9)(var7);
            var7 = var7.uri;
            var4['thumbnailUrl'] = var7;
            var1 = var5.bind(var6)(var4);
case 37:
            _fun0003_ip = 38; continue _fun0003;
case 13:
            var4 = _closure1_slot10;
            var3 = {};
            var3['themeColors'] = var2;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
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
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
 0:
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
            if(var1) { _fun0001_ip = 252; continue _fun0001 }
 211:
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
            _fun0001_ip = 287; continue _fun0001;
 252:
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
 287:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function buildSupportedOnMobileEmbedBodyText(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
            if(!(!(var2 < var1))) { _fun0002_ip = 241; continue _fun0002 }
 65:
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
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.QuestContent;
            var7 = var7.QUEST_EMBED_MOBILE;
            var1['questContent'] = var7;
            var7 = function connectedConsoleLinkOnClick() {
                var1 = undefined;
                return var1;
            };
            var1['connectedConsoleLinkOnClick'] = var7;
            var7 = null;
            var7 = var7 != var6;
            if(!var7) { _fun0002_ip = 222; continue _fun0002 }
 219:
            var4 = var6;
 222:
            var1['thirdPartyTaskDetails'] = var4;
            var4 = true;
            var1['withoutMarkdown'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
 241:
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
 0:
            var2 = arg1;
            var8 = var2.questId;
            var1 = var2.isEligibleForQuests;
            var2 = var2.themeColors;
            if(var1) { _fun0003_ip = 204; continue _fun0003 }
 30:
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
 204:
            var1 = _closure1_slot5;
            var4 = var1.quests;
            var1 = var4.get;
            var4 = var1.bind(var4)(var8);
            var1 = _closure1_slot5;
            var5 = var1.excludedQuests;
            var1 = var5.get;
            var1 = var1.bind(var5)(var8);
            var7 = null;
            if(!(var7 == var4)) { _fun0003_ip = 266; continue _fun0003 }
 250:
            var5 = _closure1_slot5;
            var5 = var5.isFetchingCurrentQuests;
            if(var5) { _fun0003_ip = 1315; continue _fun0003 }
 266:
            if(!(var7 == var1)) { _fun0003_ip = 1107; continue _fun0003 }
 273:
            if(!(var7 != var4)) { _fun0003_ip = 896; continue _fun0003 }
 280:
            var1 = {};
            var1['themeColors'] = var2;
            var1['quest'] = var4;
            var4 = var1.themeColors;
            var18 = var1.quest;
            var5 = var4.colors;
            var6 = var18.userStatus;
            var9 = var7 == var6;
            var13 = undefined;
            var1 = undefined;
            if(var9) { _fun0003_ip = 332; continue _fun0003 }
 326:
            var1 = var6.enrolledAt;
 332:
            var9 = var7 != var1;
            var1 = var18.config;
            var6 = var1.expiresAt;
            var1 = global;
            var1 = var1.Date;
            var10 = var1.prototype;
            var10 = Object.create(var10, {constructor: {value: var1}});
            var26 = var10;
            var1 = new var26[var1](var25);
            var10 = var1 instanceof Object ? var1 : var10;
            var1 = var10.toISOString;
            var1 = var1.bind(var10)();
            var6 = var6 < var1;
            var10 = _closure1_slot4;
            var1 = var10.getState;
            var1 = var1.bind(var10)();
            var11 = var1.theme;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 11;
            var1 = var12[var1];
            var10 = var10.bind(var13)(var1);
            var1 = var10.isThemeDark;
            var10 = var1.bind(var10)(var11);
            var1 = _closure1_slot8;
            if(var10) { _fun0003_ip = 455; continue _fun0003 }
 447:
            var17 = var1.LIGHT;
            _fun0003_ip = 461; continue _fun0003;
 455:
            var17 = var1.DARK;
 461:
            var1 = _closure1_slot5;
            var1 = var1.questEnrollmentBlockedUntil;
            var7 = var7 != var1;
            var1 = {};
            var11 = _closure1_slot10;
            var10 = {};
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var14 = 7;
            var12 = var20[var14];
            var12 = var19.bind(var13)(var12);
            var21 = var12.intl;
            var16 = var21.formatToPlainString;
            var12 = var20[var14];
            var12 = var19.bind(var13)(var12);
            var12 = var12.t;
            var15 = var12.EAYZAg;
            var12 = {};
            var22 = var18.config;
            var22 = var22.messages;
            var22 = var22.questName;
            var12['questName'] = var22;
            var12 = var16.bind(var21)(var15, var12);
            var10['titleText'] = var12;
            var12 = var18.config;
            var12 = var12.messages;
            var12 = var12.gamePublisher;
            var10['subtitle'] = var12;
            var15 = _closure1_slot11;
            var12 = {};
            var12['quest'] = var18;
            var12 = var15.bind(var13)(var12);
            var10['bodyText'] = var12;
            var10['themeColors'] = var4;
            var12 = 12;
            var15 = var20[var12];
            var16 = var19.bind(var13)(var15);
            var15 = var16.getQuestAsset;
            var12 = var20[var12];
            var12 = var19.bind(var13)(var12);
            var12 = var12.QuestAssetType;
            var12 = var12.GAME_TILE;
            var12 = var15.bind(var16)(var18, var12, var17);
            var12 = var12.url;
            var10['thumbnailUrl'] = var12;
            var24 = var11.bind(var13)(var10);
            var25 = var1;
            var10 = copyDataProperties(var25, var24);
            if(var9) { _fun0003_ip = 760; continue _fun0003 }
 687:
            if(var6) { _fun0003_ip = 760; continue _fun0003 }
 690:
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = var9[var14];
            var10 = var12.bind(var13)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var9[var14];
            var9 = var12.bind(var13)(var9);
            var9 = var9.t;
            if(var7) { _fun0003_ip = 747; continue _fun0003 }
 734:
            var7 = var9.kUQLMD;
            var7 = var10.bind(var11)(var7);
            _fun0003_ip = 758; continue _fun0003;
 747:
            var9 = var9.th2+0t;
            var7 = var10.bind(var11)(var9);
 758:
            _fun0003_ip = 831; continue _fun0003;
 760:
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = var9[var14];
            var10 = var12.bind(var13)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var9[var14];
            var9 = var12.bind(var13)(var9);
            var9 = var9.t;
            if(var6) { _fun0003_ip = 817; continue _fun0003 }
 804:
            var6 = var9.th2+0t;
            var6 = var10.bind(var11)(var6);
            _fun0003_ip = 828; continue _fun0003;
 817:
            var9 = var9.hvVgAQ;
            var6 = var10.bind(var11)(var9);
 828:
            var7 = var6;
 831:
            var6 = 'acceptLabelText';
            var1[var6] = var7;
            var6 = var5.acceptBlurpleLabelBackgroundColor;
            var5 = 'acceptLabelBackgroundColor';
            var1[var5] = var6;
            var4 = var4.colors;
            var5 = var4.acceptLabelGreenColor;
            var4 = 'acceptLabelColor';
            var1[var4] = var5;
            var5 = 8;
            var4 = 'thumbnailCornerRadius';
            var1[var4] = var5;
            _fun0003_ip = 1102; continue _fun0003;
 896:
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
 1102:
            _fun0003_ip = 1313; continue _fun0003;
 1107:
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
 1313:
            _fun0003_ip = 1333; continue _fun0003;
 1315:
            var4 = _closure1_slot10;
            var3 = {};
            var3['themeColors'] = var2;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
 1333:
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
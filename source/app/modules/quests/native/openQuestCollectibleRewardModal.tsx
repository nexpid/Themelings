// app/modules/quests/native/openQuestCollectibleRewardModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function QuestCollectibleRewardModalMessages(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.quest;
            var2 = _closure1_slot9;
            var5 = undefined;
            var11 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var6 = var3.bind(var5)(var2);
            var2 = var6.useQuestGameLogotypeAssetUrl;
            var16 = var2.bind(var6)(var1);
            var2 = 6;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var7 = var2.SharedQuestFields;
            var6 = var7.build;
            var2 = var1.config;
            var10 = var6.bind(var7)(var2);
            var21 = var10.defaultRewardNameWithArticle;
            var2 = 7;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useClaimedCollectibleRewardMessage;
            var1 = var1.config;
            var17 = var2.bind(var3)(var1);
            var3 = var10.features;
            var2 = var3.has;
            var1 = _closure1_slot5;
            var1 = var1.ADDITIONAL_REDEMPTION_INSTRUCTIONS;
            var1 = var2.bind(var3)(var1);
            var4 = _closure1_slot8;
            var3 = _closure1_slot7;
            var2 = {};
            var14 = _closure1_slot6;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 8;
            var6 = var13[var7];
            var6 = var12.bind(var5)(var6);
            var9 = var6.Text;
            var6 = {'variant': 'heading-xl/bold', 'color': 'white'};
            var15 = var11.title;
            var6['style'] = var15;
            var15 = 9;
            var18 = var13[var15];
            var18 = var12.bind(var5)(var18);
            var20 = var18.intl;
            var19 = var20.format;
            var15 = var13[var15];
            var15 = var12.bind(var5)(var15);
            var15 = var15.t;
            var18 = var15.YNaxMj;
            var15 = {};
            var15['itemName'] = var21;
            var15 = var19.bind(var20)(var18, var15);
            var6['children'] = var15;
            var9 = var14.bind(var5)(var9, var6);
            if(var1) { _fun0001_ip = 355; continue _fun0001 }
 277:
            var1 = new Array(2);
            var1[0] = var9;
            var15 = _closure1_slot6;
            var6 = var13[var7];
            var6 = var12.bind(var5)(var6);
            var14 = var6.Text;
            var6 = {'variant': 'text-md/medium', 'color': 'white'};
            var18 = var11.title;
            var6['style'] = var18;
            var6['children'] = var17;
            var6 = var15.bind(var5)(var14, var6);
            var1[1] = var6;
            var2['children'] = var1;
            var1 = var4.bind(var5)(var3, var2);
            _fun0001_ip = 536; continue _fun0001;
 355:
            var6 = new Array(4);
            var6[0] = var9;
            var15 = _closure1_slot6;
            var14 = _closure1_slot3;
            var9 = {};
            var17 = var11.divider;
            var9['style'] = var17;
            var9 = var15.bind(var5)(var14, var9);
            var6[1] = var9;
            var15 = _closure1_slot6;
            var14 = _closure1_slot1;
            var9 = 10;
            var9 = var13[var9];
            var14 = var14.bind(var5)(var9);
            var9 = {};
            var9['assetUrl'] = var16;
            var16 = 180;
            var9['width'] = var16;
            var9 = var15.bind(var5)(var14, var9);
            var6[2] = var9;
            var9 = _closure1_slot6;
            var7 = var13[var7];
            var7 = var12.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-md/medium', 'color': 'white'};
            var11 = var11.title;
            var7['style'] = var11;
            var11 = var10.defaultRewardRedemptionInstructionsByPlatform;
            var10 = 11;
            var10 = var13[var10];
            var10 = var12.bind(var5)(var10);
            var10 = var10.QuestRewardCodePlatforms;
            var10 = var10.CROSS_PLATFORM;
            var10 = var11[var10];
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[3] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 536:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.QuestsExperimentLocations;
    var _closure1_slot4 = var7;
    var4 = var4.QuestVariants;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var7 = var4.Fragment;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {};
    var10 = 'center';
    var4['textAlign'] = var10;
    var10 = 4;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_32;
    var4['marginHorizontal'] = var10;
    var7['title'] = var4;
    var4 = 16;
    var10 = {'width': '80%', 'borderBottomWidth': 1, 'borderColor': 'rgba(255, 255, 255, 0.15)', 'marginTop': 16, 'marginBottom': 16};
    var7['divider'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot9 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/openQuestCollectibleRewardModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var4 = var1.quest;
            var _closure2_slot0 = var4;
            var7 = var1.product;
            var5 = var1.onSuccess;
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var3 = var3[var1];
            var1 = undefined;
            var9 = var8.bind(var1)(var3);
            var8 = var9.getQuestLogger;
            var3 = {};
            var10 = _closure1_slot4;
            var10 = var10.QUEST_HOME_MOBILE;
            var3['location'] = var10;
            var9 = var8.bind(var9)(var3);
            var10 = null;
            if(!(var10 == var7)) { _fun0002_ip = 106; continue _fun0002 }
 85:
            var8 = var9.warn;
            var3 = 'Product is null';
            var3 = var8.bind(var9)(var3);
            _fun0002_ip = 384; continue _fun0002;
 106:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 13;
            var3 = var9[var3];
            var9 = var8.bind(var1)(var3);
            var8 = var9.getIsQuestBrandColorRemovalExperimentEnabled;
            var3 = {};
            var11 = var4.config;
            var3['questConfig'] = var11;
            var11 = _closure1_slot4;
            var11 = var11.COLLECTIBLE_REWARD_MODAL;
            var3['location'] = var11;
            var9 = var8.bind(var9)(var3);
            var3 = {};
            var11 = var7.styles;
            var12 = var10 == var11;
            var8 = undefined;
            if(var12) { _fun0002_ip = 186; continue _fun0002 }
 180:
            var8 = var11.buttonColors;
 186:
            if(!(var10 == var8)) { _fun0002_ip = 194; continue _fun0002 }
 190:
            var8 = new Array(0);
 194:
            var3['buttonColors'] = var8;
            var11 = var7.styles;
            var12 = var10 == var11;
            var8 = undefined;
            if(var12) { _fun0002_ip = 220; continue _fun0002 }
 214:
            var8 = var11.confettiColors;
 220:
            if(!(var10 == var8)) { _fun0002_ip = 228; continue _fun0002 }
 224:
            var8 = new Array(0);
 228:
            var3['confettiColors'] = var8;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 14;
            var8 = var11[var8];
            var8 = var10.bind(var1)(var8);
            if(var9) { _fun0002_ip = 274; continue _fun0002 }
 256:
            var4 = var4.config;
            var4 = var4.colors;
            var4 = var4.primary;
            _fun0002_ip = 305; continue _fun0002;
 274:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 4;
            var9 = var11[var9];
            var9 = var10.bind(var1)(var9);
            var9 = var9.unsafe_rawColors;
            var4 = var9.PRIMARY_330;
 305:
            var8 = var8.bind(var1)(var4);
            var4 = new Array(1);
            var4[0] = var8;
            var3['backgroundColors'] = var4;
            var7['styles'] = var3;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 15;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.open;
            var2 = {};
            var2['product'] = var7;
            var6 = function renderMessages() {
                var4 = _closure1_slot6;
                var3 = _closure1_slot10;
                var2 = {};
                var1 = _closure2_slot0;
                var2['quest'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2['renderMessages'] = var6;
            var2['onSuccess'] = var5;
            var2 = var3.bind(var4)(var2);
 384:
            return var1;
        }
    };
    var3['openQuestCollectibleRewardModal'] = var2;
    return var1;
})();
// app/modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var2 = metroImportDefault;
    var _closure1_slot1 = var2;
    var _closure1_slot2 = var4;
    var2 = global;
    var8 = var2.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var2 = true;
    var6['value'] = var2;
    var2 = '__esModule';
    var2 = var7.bind(var8)(var3, var2, var6);
    var2 = {};
    var6 = function showModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.quest;
            var8 = var1.isTargetedDisclosure;
            var13 = var1.trackingCtx;
            var1 = var7.config;
            var1 = var1.messages;
            var10 = var1.gamePublisher;
            var9 = var1.gameTitle;
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 0;
            var2 = var3[var1];
            var1 = undefined;
            var5 = var11.bind(var1)(var2);
            var2 = var5.hasWatchVideoTasks;
            var2 = var2.bind(var5)(var7);
            var5 = 1;
            var5 = var3[var5];
            var12 = var11.bind(var1)(var5);
            var6 = var12.trackQuestContentClicked;
            var5 = {};
            var14 = var7.id;
            var5['questId'] = var14;
            var14 = var13.content;
            var5['questContent'] = var14;
            var14 = var13.ctaContent;
            var5['questContentCTA'] = var14;
            var14 = var13.position;
            var5['questContentPosition'] = var14;
            var13 = var13.sourceQuestContent;
            var5['sourceQuestContent'] = var13;
            var5 = var6.bind(var12)(var5);
            var5 = _closure1_slot1;
            var4 = 2;
            var4 = var3[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.pushLazy;
            var4 = 4;
            var4 = var3[var4];
            var11 = var11.bind(var1)(var4);
            var4 = 3;
            var4 = var3[var4];
            var3 = var3.paths;
            var4 = var11.bind(var1)(var4, var3);
            var3 = {};
            var3['gamePublisher'] = var10;
            var3['gameTitle'] = var9;
            var3['isTargetedDisclosure'] = var8;
            var7 = var7.config;
            var8 = var7.cosponsorMetadata;
            var7 = null;
            var9 = var7 == var8;
            var7 = undefined;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var8.name;
case 2:
            var3['cosponsorName'] = var7;
            var3['isVideoQuest'] = var2;
            var2 = 'QUEST_DISCLOSURE_MODAL';
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        }
    };
    var2['showModal'] = var6;
    var1 = function hideModal() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.popWithKey;
        var2 = 'QUEST_DISCLOSURE_MODAL';
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['hideModal'] = var1;
    var1 = 5;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
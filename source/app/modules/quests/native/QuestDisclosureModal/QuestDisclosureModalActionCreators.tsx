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
 0:
            var1 = arg1;
            var2 = var1.quest;
            var7 = var1.isTargetedDisclosure;
            var12 = var1.trackingCtx;
            var1 = var2.config;
            var1 = var1.messages;
            var9 = var1.gamePublisher;
            var8 = var1.gameTitle;
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 0;
            var5 = var3[var1];
            var1 = undefined;
            var11 = var10.bind(var1)(var5);
            var6 = var11.trackQuestContentClicked;
            var5 = {};
            var13 = var2.id;
            var5['questId'] = var13;
            var13 = var12.content;
            var5['questContent'] = var13;
            var13 = var12.ctaContent;
            var5['questContentCTA'] = var13;
            var13 = var12.position;
            var5['questContentPosition'] = var13;
            var12 = var12.sourceQuestContent;
            var5['sourceQuestContent'] = var12;
            var5 = var6.bind(var11)(var5);
            var5 = _closure1_slot1;
            var4 = 1;
            var4 = var3[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.pushLazy;
            var4 = 3;
            var4 = var3[var4];
            var10 = var10.bind(var1)(var4);
            var4 = 2;
            var4 = var3[var4];
            var3 = var3.paths;
            var4 = var10.bind(var1)(var4, var3);
            var3 = {};
            var3['gamePublisher'] = var9;
            var3['gameTitle'] = var8;
            var3['isTargetedDisclosure'] = var7;
            var2 = var2.config;
            var7 = var2.cosponsorMetadata;
            var2 = null;
            var8 = var2 == var7;
            var2 = undefined;
            if(var8) { _fun0001_ip = 229; continue _fun0001 }
 224:
            var2 = var7.name;
 229:
            var3['cosponsorName'] = var2;
            var2 = 'QUEST_DISCLOSURE_MODAL';
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        }
    };
    var2['showModal'] = var6;
    var1 = function hideModal() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.popWithKey;
        var2 = 'QUEST_DISCLOSURE_MODAL';
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['hideModal'] = var1;
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
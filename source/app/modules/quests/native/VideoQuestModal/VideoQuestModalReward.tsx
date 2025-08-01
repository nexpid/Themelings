// app/modules/quests/native/VideoQuestModal/VideoQuestModalReward.tsx
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
    var8 = var4.jsx;
    var _closure1_slot4 = var8;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = var7.memo;
    var2 = function VideoQuestModalReward(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var5 = var2.style;
            var3 = var2.withQuestName;
            var4 = undefined;
            var11 = var4 === var3;
            if(var11) { _fun0001_ip = 28; continue _fun0001 }
 25:
            var11 = var3;
 28:
            var3 = var2.withRewardAvailableCopy;
            var9 = var4 === var3;
            if(var9) { _fun0001_ip = 44; continue _fun0001 }
 41:
            var9 = var3;
 44:
            var3 = var2.size;
            var21 = 'lg';
            if(!(var4 !== var3)) { _fun0001_ip = 60; continue _fun0001 }
 57:
            var21 = var3;
 60:
            var17 = var2.withRewardTileAnimation;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 2;
            var2 = var13[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useVideoQuestModalContext;
            var2 = var2.bind(var3)();
            var18 = var2.quest;
            var _closure2_slot0 = var18;
            var2 = 3;
            var2 = var13[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useQuestTaskDetails;
            var20 = var2.bind(var3)(var18);
            var6 = _closure1_slot3;
            var3 = var6.useCallback;
            var8 = var18.id;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openRewardDetailsBottomSheet;
                var2 = {};
                var5 = _closure2_slot0;
                var5 = var5.id;
                var2['questId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var19 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot5;
            var6 = 5;
            var1 = var13[var6];
            var1 = var7.bind(var4)(var1);
            var2 = var1.Stack;
            var1 = {'justify': 'center', 'align': 'center'};
            var14 = 'center';
            var12 = _closure1_slot1;
            var8 = 6;
            var15 = var13[var8];
            var15 = var12.bind(var4)(var15);
            var15 = var15.spacing;
            var15 = var15.PX_24;
            var1['spacing'] = var15;
            var1['style'] = var5;
            var16 = _closure1_slot4;
            var5 = 7;
            var5 = var13[var5];
            var15 = var12.bind(var4)(var5);
            var5 = {};
            var22 = true;
            var5['hasConfetti'] = var22;
            var5['quest'] = var18;
            var5['size'] = var21;
            var20 = var20.percentComplete;
            var5['progress'] = var20;
            var5['onPress'] = var19;
            var5['withAnimation'] = var17;
            var15 = var16.bind(var4)(var15, var5);
            var5 = new Array(2);
            var5[0] = var15;
            var6 = var13[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Stack;
            var6 = {};
            var6['align'] = var14;
            var8 = var13[var8];
            var8 = var12.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_4;
            var6['spacing'] = var8;
            if(!var11) { _fun0001_ip = 487; continue _fun0001 }
 362:
            var13 = _closure1_slot4;
            var15 = _closure1_slot0;
            var19 = _closure1_slot2;
            var8 = 8;
            var8 = var19[var8];
            var8 = var15.bind(var4)(var8);
            var12 = var8.Text;
            var8 = {'variant': 'heading-lg/semibold', 'color': 'text-primary'};
            var14 = 9;
            var16 = var19[var14];
            var16 = var15.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.formatToPlainString;
            var14 = var19[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var15 = var14.EAYZAg;
            var14 = {};
            var18 = var18.config;
            var18 = var18.messages;
            var18 = var18.questName;
            var14['questName'] = var18;
            var14 = var16.bind(var17)(var15, var14);
            var8['children'] = var14;
            var11 = var13.bind(var4)(var12, var8);
 487:
            var8 = new Array(2);
            var8[0] = var11;
            if(!var9) { _fun0001_ip = 598; continue _fun0001 }
 498:
            var12 = _closure1_slot4;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 8;
            var10 = var17[var10];
            var10 = var16.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'heading-sm/medium', 'color': 'text-secondary'};
            var13 = 9;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.1Wvve3;
            var13 = var14.bind(var15)(var13);
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 598:
            var8[1] = var9;
            var6['children'] = var8;
            var6 = var3.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/VideoQuestModal/VideoQuestModalReward.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
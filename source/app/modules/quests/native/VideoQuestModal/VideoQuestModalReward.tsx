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
    var4 = 2;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 'center';
    var10['textAlign'] = var11;
    var4['questName'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function VideoQuestModalReward(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = var2.style;
            var3 = var2.withQuestName;
            var4 = undefined;
            var11 = var4 === var3;
            if(var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = var3;
case 2:
            var3 = var2.withRewardAvailableCopy;
            var9 = var4 === var3;
            if(var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var3;
case 4:
            var3 = var2.size;
            var22 = 'lg';
            if(!(var4 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var22 = var3;
case 6:
            var19 = var2.withRewardTileAnimation;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 3;
            var2 = var13[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useVideoQuestModalContext;
            var2 = var2.bind(var3)();
            var18 = var2.quest;
            var _closure2_slot0 = var18;
            var2 = 4;
            var2 = var13[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useQuestTaskDetails;
            var21 = var2.bind(var3)(var18);
            var6 = _closure1_slot3;
            var3 = var6.useCallback;
            var8 = var18.id;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
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
            var20 = var3.bind(var6)(var1, var2);
            var1 = _closure1_slot6;
            var14 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var6 = 6;
            var1 = var13[var6];
            var1 = var7.bind(var4)(var1);
            var2 = var1.Stack;
            var1 = {'justify': 'center', 'align': 'center'};
            var15 = 'center';
            var12 = _closure1_slot1;
            var8 = 7;
            var16 = var13[var8];
            var16 = var12.bind(var4)(var16);
            var16 = var16.spacing;
            var16 = var16.PX_24;
            var1['spacing'] = var16;
            var1['style'] = var5;
            var17 = _closure1_slot4;
            var5 = 8;
            var5 = var13[var5];
            var16 = var12.bind(var4)(var5);
            var5 = {};
            var23 = true;
            var5['hasConfetti'] = var23;
            var5['quest'] = var18;
            var5['size'] = var22;
            var21 = var21.percentComplete;
            var5['progress'] = var21;
            var5['onPress'] = var20;
            var5['withAnimation'] = var19;
            var16 = var17.bind(var4)(var16, var5);
            var5 = new Array(2);
            var5[0] = var16;
            var6 = var13[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Stack;
            var6 = {};
            var6['align'] = var15;
            var8 = var13[var8];
            var8 = var12.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_4;
            var6['spacing'] = var8;
            if(!var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var13 = _closure1_slot4;
            var15 = _closure1_slot0;
            var19 = _closure1_slot2;
            var8 = 9;
            var8 = var19[var8];
            var8 = var15.bind(var4)(var8);
            var12 = var8.Text;
            var8 = {'variant': 'heading-lg/semibold', 'color': 'text-strong'};
            var14 = var14.questName;
            var8['style'] = var14;
            var14 = 10;
            var16 = var19[var14];
            var16 = var15.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.formatToPlainString;
            var14 = var19[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var15 = var14.EAYZAr;
            var14 = {};
            var18 = var18.config;
            var18 = var18.messages;
            var18 = var18.questName;
            var14['questName'] = var18;
            var14 = var16.bind(var17)(var15, var14);
            var8['children'] = var14;
            var11 = var13.bind(var4)(var12, var8);
case 8:
            var8 = new Array(2);
            var8[0] = var11;
            if(!var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var12 = _closure1_slot4;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 9;
            var10 = var17[var10];
            var10 = var16.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'heading-sm/medium', 'color': 'text-subtle'};
            var13 = 10;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.1Wvve2;
            var13 = var14.bind(var15)(var13);
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 10:
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
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/VideoQuestModal/VideoQuestModalReward.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
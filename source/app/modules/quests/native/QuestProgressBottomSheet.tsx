// app/modules/quests/native/QuestProgressBottomSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function contextMenuButton(arg1) {
        var4 = _closure1_slot10;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 12;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var8.bind(var3)(var1);
        var2 = var1.IconButton;
        var1 = {};
        var10 = arg1;
        var11 = var1;
        var6 = copyDataProperties(var11, var10);
        var6 = _closure1_slot1;
        var5 = 13;
        var5 = var9[var5];
        var6 = var6.bind(var3)(var5);
        var5 = 'icon';
        var1[var5] = var6;
        var6 = 'secondary-overlay';
        var5 = 'variant';
        var1[var5] = var6;
        var5 = 14;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.UKOtz+;
        var6 = var6.bind(var7)(var5);
        var5 = 'accessibilityLabel';
        var1[var5] = var6;
        var6 = 'sm';
        var5 = 'size';
        var1[var5] = var6;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function QuestProgressBottomSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var33 = var2.quest;
            var _closure2_slot0 = var33;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 15;
            var2 = var5[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useIsScreenLandscape;
            var31 = var2.bind(var3)();
            var2 = _closure1_slot12;
            var13 = var2.bind(var4)(var31);
            var2 = _closure1_slot13;
            var2 = var2.bind(var4)();
            var16 = var2.gradientEnd;
            var2 = 16;
            var2 = var5[var2];
            var6 = var7.bind(var4)(var2);
            var3 = var6.useGetOrFetchApplication;
            var2 = 17;
            var2 = var5[var2];
            var7 = var7.bind(var4)(var2);
            var2 = var7.getActivityApplicationId;
            var2 = var2.bind(var7)(var33);
            var6 = var3.bind(var6)(var2);
            var3 = _closure1_slot1;
            var2 = 18;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var8 = null;
            var7 = var8 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var6.id;
case 2:
            var2['applicationId'] = var5;
            var5 = 600;
            var2['size'] = var5;
            var5 = ['embedded_cover'];
            var2['names'] = var5;
            var2 = var3.bind(var4)(var2);
            var14 = var2.url;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 19;
            var2 = var6[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useQuestTaskDetails;
            var9 = var2.bind(var3)(var33);
            var22 = 14;
            var2 = var6[var22];
            var2 = var7.bind(var4)(var2);
            var10 = var2.intl;
            var5 = var10.formatToPlainString;
            var2 = var6[var22];
            var2 = var7.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2.EAYZAr;
            var2 = {};
            var11 = var33.config;
            var11 = var11.messages;
            var11 = var11.questName;
            var2['questName'] = var11;
            var28 = var5.bind(var10)(var3, var2);
            var2 = 20;
            var2 = var6[var2];
            var5 = var7.bind(var4)(var2);
            var3 = var5.useQuestsInstructionsToWinReward;
            var2 = {};
            var2['quest'] = var33;
            var2['taskDetails'] = var9;
            var9 = _closure1_slot8;
            var9 = var9.QUEST_ACTIVITY_BOTTOM_SHEET;
            var2['location'] = var9;
            var32 = 11;
            var9 = var6[var32];
            var9 = var7.bind(var4)(var9);
            var9 = var9.QuestContent;
            var9 = var9.RUNNING_ACTIVITY;
            var2['questContent'] = var9;
            var6 = var6[var32];
            var6 = var7.bind(var4)(var6);
            var6 = var6.QuestContent;
            var6 = var6.RUNNING_ACTIVITY;
            var2['sourceQuestContent'] = var6;
            var29 = var3.bind(var5)(var2);
            var3 = var33.userStatus;
            var5 = var8 == var3;
            var2 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.completedAt;
case 4:
            var25 = var8 != var2;
            if(!var25) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var33.userStatus;
            var5 = var8 == var3;
            var2 = undefined;
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var3.claimedAt;
case 8:
            var25 = var8 == var2;
case 6:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 21;
            var3 = var5[var3];
            var7 = var2.bind(var4)(var3);
            var6 = var7.useQuestRewardClaimHandler;
            var3 = {};
            var3['quest'] = var33;
            var9 = var5[var32];
            var9 = var2.bind(var4)(var9);
            var9 = var9.QuestContent;
            var9 = var9.RUNNING_ACTIVITY;
            var3['questContent'] = var9;
            var9 = var5[var32];
            var9 = var2.bind(var4)(var9);
            var9 = var9.QuestContent;
            var9 = var9.RUNNING_ACTIVITY;
            var3['sourceQuestContent'] = var9;
            var3 = var6.bind(var7)(var3);
            var20 = var3.isClaiming;
            var10 = var3.claim;
            _closure2_slot1 = var10;
            var21 = var3.isLoading;
            var9 = _closure1_slot4;
            var7 = var9.useCallback;
            var6 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                        var2 = _closure2_slot1;
                        var3 = undefined;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address=24);
case 12:
                        return var2;
case 13:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                        if(!var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 22;
                        var5 = var7[var5];
                        var6 = var6.bind(var3)(var5);
                        var5 = var6.updateFramePanelMode;
                        var4 = _closure1_slot9;
                        var4 = var4.PIP;
                        var4 = var5.bind(var6)(var4);
case 16:
                        return var3;
case 14:
                        return var2;
case 10:
                        return var1;
                    }
                };
                return var1;
            };
            var6 = var6.bind(var4)(var3);
            var3 = new Array(1);
            var3[0] = var10;
            var24 = var7.bind(var9)(var6, var3);
            var9 = _closure1_slot4;
            var7 = var9.useCallback;
            var3 = var33.id;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 23;
                var3 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var3);
                var3 = var6.hideActionSheet;
                var3 = var3.bind(var6)();
                var3 = 22;
                var3 = var4[var3];
                var6 = var5.bind(var1)(var3);
                var5 = var6.updateFramePanelMode;
                var3 = _closure1_slot9;
                var3 = var3.PIP;
                var3 = var5.bind(var6)(var3);
                var3 = _closure1_slot0;
                var2 = 24;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openQuestHome;
                var2 = {};
                var5 = _closure2_slot0;
                var5 = var5.id;
                var2['scrollToQuestId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var23 = var7.bind(var9)(var3, var6);
            var9 = _closure1_slot4;
            var7 = var9.useCallback;
            var3 = var33.id;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 23;
                var3 = var7[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.hideActionSheet;
                var3 = var3.bind(var4)();
                var6 = _closure1_slot0;
                var2 = 25;
                var2 = var7[var2];
                var4 = var6.bind(var1)(var2);
                var3 = var4.showShareActionSheet;
                var2 = {};
                var5 = 26;
                var5 = var7[var5];
                var7 = var6.bind(var1)(var5);
                var6 = var7.getQuestUrl;
                var5 = _closure2_slot0;
                var5 = var5.id;
                var5 = var6.bind(var7)(var5);
                var2['message'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var27 = var7.bind(var9)(var3, var6);
            var7 = _closure1_slot4;
            var6 = var7.useCallback;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1 = new Array(0);
            var17 = var6.bind(var7)(var3, var1);
            var3 = _closure1_slot11;
            var1 = 27;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {'handleDisabled': true, 'startExpanded': true};
            var19 = true;
            var7 = _closure1_slot11;
            var6 = _closure1_slot5;
            var5 = {};
            var9 = var13.heroContainer;
            var5['style'] = var9;
            var9 = var8 != var14;
            if(!var9) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var11 = _closure1_slot10;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 28;
            var8 = var12[var8];
            var10 = var10.bind(var4)(var8);
            var8 = {};
            var12 = {};
            var12['uri'] = var14;
            var8['source'] = var12;
            var12 = var13.heroImg;
            var8['style'] = var12;
            var9 = var11.bind(var4)(var10, var8);
case 18:
            var8 = new Array(4);
            var8[0] = var9;
            var11 = _closure1_slot10;
            var14 = _closure1_slot1;
            var18 = _closure1_slot2;
            var9 = 29;
            var9 = var18[var9];
            var10 = var14.bind(var4)(var9);
            var9 = {};
            var12 = var13.heroGradient;
            var9['style'] = var12;
            var26 = _closure1_slot0;
            var12 = 30;
            var30 = var18[var12];
            var30 = var26.bind(var4)(var30);
            var30 = var30.VerticalGradient;
            var30 = var30.START;
            var9['start'] = var30;
            var12 = var18[var12];
            var12 = var26.bind(var4)(var12);
            var12 = var12.VerticalGradient;
            var12 = var12.END;
            var9['end'] = var12;
            var12 = ['rgba(0, 0, 0, 0)'];
            var12[1] = var16;
            var9['colors'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var11 = _closure1_slot10;
            var10 = _closure1_slot5;
            var9 = {};
            var12 = var13.gameTileContainer;
            var9['style'] = var12;
            var16 = _closure1_slot10;
            var12 = 31;
            var12 = var18[var12];
            var14 = var14.bind(var4)(var12);
            var12 = {};
            var12['quest'] = var33;
            var18 = 80;
            var26 = var18;
            if(!var31) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var26 = 56;
case 20:
            var12['height'] = var26;
            if(!var31) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var18 = 56;
case 22:
            var12['width'] = var18;
            var12 = var16.bind(var4)(var14, var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[2] = var9;
            var11 = _closure1_slot11;
            var10 = _closure1_slot5;
            var9 = {};
            var12 = var13.contextMenuContainer;
            var9['style'] = var12;
            var16 = _closure1_slot10;
            var26 = _closure1_slot0;
            var18 = _closure1_slot2;
            var12 = 12;
            var12 = var18[var12];
            var12 = var26.bind(var4)(var12);
            var14 = var12.IconButton;
            var12 = {};
            var30 = _closure1_slot1;
            var34 = 32;
            var34 = var18[var34];
            var34 = var30.bind(var4)(var34);
            var12['icon'] = var34;
            var12['onPress'] = var27;
            var27 = 'secondary-overlay';
            var12['variant'] = var27;
            var27 = 'sm';
            var12['size'] = var27;
            var27 = var18[var22];
            var27 = var26.bind(var4)(var27);
            var35 = var27.intl;
            var34 = var35.string;
            var27 = var18[var22];
            var27 = var26.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.RDE0Sc;
            var27 = var34.bind(var35)(var27);
            var12['accessibilityLabel'] = var27;
            var14 = var16.bind(var4)(var14, var12);
            var12 = new Array(2);
            var12[0] = var14;
            var27 = _closure1_slot10;
            var14 = 33;
            var14 = var18[var14];
            var16 = var30.bind(var4)(var14);
            var14 = {};
            var14['quest'] = var33;
            var14['showShareLink'] = var19;
            var33 = _closure1_slot8;
            var33 = var33.QUEST_ACTIVITY_BOTTOM_SHEET;
            var14['location'] = var33;
            var32 = var18[var32];
            var32 = var26.bind(var4)(var32);
            var32 = var32.QuestContent;
            var32 = var32.RUNNING_ACTIVITY;
            var14['sourceQuestContent'] = var32;
            var32 = _closure1_slot14;
            var14['children'] = var32;
            var14 = var27.bind(var4)(var16, var14);
            var12[1] = var14;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[3] = var9;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var13.contentContainer;
            var6['style'] = var9;
            var12 = _closure1_slot11;
            var10 = 34;
            var9 = var18[var10];
            var9 = var26.bind(var4)(var9);
            var11 = var9.Stack;
            var9 = {};
            var16 = 'vertical';
            var9['direction'] = var16;
            var14 = 8;
            var27 = var18[var14];
            var27 = var30.bind(var4)(var27);
            var27 = var27.spacing;
            var27 = var27.PX_8;
            var9['spacing'] = var27;
            var27 = var13.textContainer;
            var9['style'] = var27;
            var27 = _closure1_slot10;
            var30 = 35;
            var18 = var18[var30];
            var18 = var26.bind(var4)(var18);
            var26 = var18.Text;
            var18 = {};
            var32 = 'heading-lg/bold';
            if(!var31) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var32 = 'heading-md/bold';
case 24:
            var18['variant'] = var32;
            var32 = 'mobile-text-heading-primary';
            var18['color'] = var32;
            var18['children'] = var28;
            var26 = var27.bind(var4)(var26, var18);
            var18 = new Array(2);
            var18[0] = var26;
            var28 = _closure1_slot10;
            var27 = _closure1_slot0;
            var26 = _closure1_slot2;
            var26 = var26[var30];
            var26 = var27.bind(var4)(var26);
            var27 = var26.Text;
            var26 = {};
            var30 = var13.questDescription;
            var26['style'] = var30;
            var30 = 'text-md/normal';
            if(!var31) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var30 = 'text-sm/normal';
case 26:
            var26['variant'] = var30;
            var30 = 'text-muted';
            var26['color'] = var30;
            var26['children'] = var29;
            var26 = var28.bind(var4)(var27, var26);
            var18[1] = var26;
            var9['children'] = var18;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot11;
            var27 = _closure1_slot0;
            var26 = _closure1_slot2;
            var10 = var26[var10];
            var10 = var27.bind(var4)(var10);
            var11 = var10.Stack;
            var10 = {};
            var10['direction'] = var16;
            var16 = _closure1_slot1;
            var14 = var26[var14];
            var14 = var16.bind(var4)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_12;
            var10['spacing'] = var14;
            var13 = var13.buttonsContainer;
            var10['style'] = var13;
            var18 = _closure1_slot10;
            var14 = 36;
            var13 = var26[var14];
            var13 = var27.bind(var4)(var13);
            var16 = var13.Button;
            var13 = {};
            var28 = 'lg';
            var13['size'] = var28;
            var26 = var26[var22];
            var26 = var27.bind(var4)(var26);
            var28 = var26.intl;
            var27 = var28.string;
            var29 = _closure1_slot0;
            var26 = _closure1_slot2;
            var26 = var26[var22];
            var26 = var29.bind(var4)(var26);
            var29 = var26.t;
            if(var25) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var26 = var29.LLLLPD;
            _fun0001_ip = 30; continue _fun0001;
case 28:
            var26 = var29.cfY4PE;
case 30:
            var26 = var27.bind(var28)(var26);
            var13['text'] = var26;
            if(!var25) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var23 = var24;
case 31:
            var13['onPress'] = var23;
            if(var20) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var20 = var21;
case 33:
            var13['loading'] = var20;
            var13['grow'] = var19;
            var16 = var18.bind(var4)(var16, var13);
            var13 = new Array(2);
            var13[0] = var16;
            var16 = _closure1_slot10;
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = var18[var14];
            var14 = var21.bind(var4)(var14);
            var15 = var14.Button;
            var14 = {'size': 'lg', 'text': null, 'onPress': null, 'variant': 'secondary', 'grow': true};
            var19 = var18[var22];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var22];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.ETE/oC;
            var18 = var19.bind(var20)(var18);
            var14['text'] = var18;
            var14['onPress'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot5 = var8;
    var4 = var4.StyleSheet;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityPanelModes;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 7;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var1 = {};
            var2 = {};
            var3 = 'flex';
            var2['display'] = var3;
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = 8;
            var9 = var3[var7];
            var6 = undefined;
            var9 = var8.bind(var6)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_16;
            var2['paddingHorizontal'] = var9;
            var3 = var3[var7];
            var3 = var8.bind(var6)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_16;
            var2['paddingBottom'] = var3;
            var1['contentContainer'] = var2;
            var2 = {};
            var3 = 140;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var3 = 125;
case 35:
            var2['height'] = var3;
            var3 = 'relative';
            var2['position'] = var3;
            var3 = 0;
            if(var5) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.spacing;
            var9 = var8.PX_8;
            var8 = 52;
            var3 = var8 + var9;
case 37:
            var2['marginBottom'] = var3;
            var1['heroContainer'] = var2;
            var2 = {};
            var3 = 'cover';
            var2['resizeMode'] = var3;
            var10 = _closure1_slot6;
            var13 = var10.absoluteFillObject;
            var14 = var2;
            var3 = copyDataProperties(var14, var13);
            var9 = _closure1_slot1;
            var3 = _closure1_slot2;
            var8 = var3[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.radii;
            var8 = var8.lg;
            var11 = 'borderTopLeftRadius';
            var2[var11] = var8;
            var8 = var3[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.radii;
            var12 = var8.lg;
            var8 = 'borderTopRightRadius';
            var2[var8] = var12;
            var1['heroImg'] = var2;
            var2 = {};
            var13 = var10.absoluteFillObject;
            var14 = var2;
            var10 = copyDataProperties(var14, var13);
            var10 = var3[var7];
            var10 = var9.bind(var6)(var10);
            var10 = var10.radii;
            var10 = var10.lg;
            var2[var11] = var10;
            var3 = var3[var7];
            var3 = var9.bind(var6)(var3);
            var3 = var3.radii;
            var3 = var3.lg;
            var2[var8] = var3;
            var1['heroGradient'] = var2;
            var2 = {'position': 'absolute', 'bottom': null, 'left': 0, 'right': 0, 'alignItems': 'center'};
            var3 = -52;
            if(!var5) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.spacing;
            var3 = var8.PX_12;
case 39:
            var2['bottom'] = var3;
            var3 = 'center';
            var1['gameTileContainer'] = var2;
            var2 = {'position': 'absolute', 'top': null, 'right': null, 'display': 'flex', 'flexDirection': 'row', 'gap': null, 'alignItems': 'center'};
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var10 = var8[var7];
            var10 = var9.bind(var6)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_16;
            var2['top'] = var10;
            var10 = var8[var7];
            var10 = var9.bind(var6)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_16;
            var2['right'] = var10;
            var8 = var8[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_16;
            var2['gap'] = var8;
            var1['contextMenuContainer'] = var2;
            var2 = {};
            var2['alignItems'] = var3;
            var8 = undefined;
            if(var5) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var7];
            var9 = var10.bind(var6)(var9);
            var9 = var9.spacing;
            var8 = var9.PX_16;
case 41:
            var2['paddingTop'] = var8;
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var10 = var8[var7];
            var10 = var9.bind(var6)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_8;
            var2['gap'] = var10;
            var8 = var8[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_16;
            var2['marginBottom'] = var8;
            var2['textAlign'] = var3;
            var1['textContainer'] = var2;
            var2 = {};
            var2['textAlign'] = var3;
            var1['questDescription'] = var2;
            var2 = {};
            var3 = undefined;
            if(var5) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.spacing;
            var3 = var4.PX_16;
case 43:
            var2['paddingTop'] = var3;
            var1['buttonsContainer'] = var2;
            return var1;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot12 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyleProperties;
    var4 = function() {
        var1 = {};
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 8;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var2 = var2.colors;
        var2 = var2.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT;
        var1['gradientEnd'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 37;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestProgressBottomSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function QuestProgressBottomSheetConnected(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var1 = var1.questId;
            var _closure2_slot0 = var1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var1 = var4[var1];
            var5 = undefined;
            var7 = var3.bind(var5)(var1);
            var4 = var7.useStateFromStores;
            var1 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getQuest;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var4.bind(var7)(var3, var1);
            var _closure2_slot1 = var7;
            var1 = null;
            var3 = var1 == var7;
            if(var3) { _fun0004_ip = 45; continue _fun0004 }
case 10:
            var4 = _closure1_slot10;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 10;
            var2 = var9[var2];
            var2 = var8.bind(var5)(var2);
            var3 = var2.QuestContentImpressionTrackerNative;
            var2 = {};
            var10 = true;
            var2['overrideVisibility'] = var10;
            var2['questOrQuests'] = var7;
            var7 = 11;
            var10 = var9[var7];
            var10 = var8.bind(var5)(var10);
            var10 = var10.QuestContent;
            var10 = var10.RUNNING_ACTIVITY;
            var2['questContent'] = var10;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.QuestContent;
            var7 = var7.RUNNING_ACTIVITY;
            var2['sourceQuestContent'] = var7;
            var6 = function children() {
                var4 = _closure1_slot10;
                var3 = _closure1_slot15;
                var2 = {};
                var1 = _closure2_slot1;
                var2['quest'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 45:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
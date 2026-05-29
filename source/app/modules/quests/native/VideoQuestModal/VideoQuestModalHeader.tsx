// app/modules/quests/native/VideoQuestModal/VideoQuestModalHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useVideoQuestUIStore;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'flex-start'};
    var4['videoContentHeaderWrapper'] = var9;
    var9 = {'flexDirection': 'column', 'flexShrink': 1};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9['gap'] = var12;
    var4['videoContentHeading'] = var9;
    var9 = {};
    var12 = 0.6;
    var9['opacity'] = var12;
    var4['subheader'] = var9;
    var9 = {'margin': 4294967281, 'padding': 15, 'textShadowColor': null, 'textShadowOffset': null, 'textShadowRadius': 15};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BLACK;
    var9['textShadowColor'] = var10;
    var10 = {'width': 0, 'height': 0};
    var9['textShadowOffset'] = var10;
    var4['textShadow'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/VideoQuestModal/VideoQuestModalHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VideoQuestModalHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var10 = var2.closeButtonIconColor;
            var9 = var2.onClose;
            var7 = var2.style;
            var3 = var2.showCurrentVideoTime;
            var4 = undefined;
            var15 = var4 !== var3;
            if(!var15) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var15 = var3;
case 2:
            var2 = var2.withTextShadow;
            var18 = var4 !== var2;
            if(!var18) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var18 = var2;
case 4:
            var2 = _closure1_slot7;
            var19 = var2.bind(var4)();
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 6;
            var2 = var11[var2];
            var3 = var8.bind(var4)(var2);
            var2 = var3.useVideoQuestModalContext;
            var2 = var2.bind(var3)();
            var14 = var2.quest;
            var _closure2_slot0 = var14;
            var2 = 7;
            var2 = var11[var2];
            var3 = var8.bind(var4)(var2);
            var2 = var3.useQuestTaskDetails;
            var3 = var2.bind(var3)(var14);
            var _closure2_slot1 = var3;
            var5 = _closure1_slot4;
            var2 = 9;
            var2 = var11[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.shallow;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.videoProgress;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2[var1];
                    var2 = null;
                    if(!(var2 == var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = {};
                    var4 = _closure2_slot1;
                    var4 = var4.progressSeconds;
                    var2['timestampSec'] = var4;
                    var4 = _closure2_slot1;
                    var4 = var4.targetSeconds;
                    var2['duration'] = var4;
                    var3 = _closure2_slot1;
                    var3 = var3.progressSeconds;
                    var2['maxTimestampSec'] = var3;
                    var1 = var2;
case 6:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 8;
                    var6 = var5[var2];
                    var3 = undefined;
                    var7 = var4.bind(var3)(var6);
                    var6 = var7.parseMinutesAndSecondsFromSeconds;
                    var8 = var1.duration;
                    var1 = var1.timestampSec;
                    var1 = var8 - var1;
                    var1 = var6.bind(var7)(var1);
                    var2 = var5[var2];
                    var4 = var4.bind(var3)(var2);
                    var3 = var4.formatWatchTaskTime;
                    var2 = var1.minutes;
                    var1 = var1.seconds;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var16 = var5.bind(var4)(var1, var2);
            var5 = var14.userStatus;
            var2 = null;
            var8 = var2 == var5;
            var1 = undefined;
            if(var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var5.completedAt;
case 8:
            var17 = var2 != var1;
            if(!var17) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var13 = undefined;
            if(!var15) { _fun0001_ip = 12; continue _fun0001 }
case 10:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getVideoQuestProgressRemainingAccessibilityLabel;
            var13 = var1.bind(var2)(var3, var17);
case 12:
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var8 = var19.videoContentHeaderWrapper;
            var5 = new Array(2);
            var5[0] = var8;
            var5[1] = var7;
            var1['style'] = var5;
            var5 = {};
            var7 = var19.videoContentHeading;
            var5['style'] = var7;
            var21 = _closure1_slot5;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var20 = 11;
            var7 = var7[var20];
            var7 = var8.bind(var4)(var7);
            var12 = var7.Text;
            var7 = {'variant': 'heading-md/semibold', 'color': 'white'};
            var8 = var18;
            if(!var18) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var8 = var19.textShadow;
case 13:
            var7['style'] = var8;
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var22 = 12;
            var23 = var8[var22];
            var23 = var11.bind(var4)(var23);
            var25 = var23.intl;
            var24 = var25.formatToPlainString;
            var22 = var8[var22];
            var22 = var11.bind(var4)(var22);
            var22 = var22.t;
            var23 = var22.EQa7os;
            var22 = {};
            var26 = var14.config;
            var26 = var26.messages;
            var26 = var26.questName;
            var22['questName'] = var26;
            var22 = var24.bind(var25)(var23, var22);
            var7['children'] = var22;
            var12 = var21.bind(var4)(var12, var7);
            var7 = new Array(2);
            var7[0] = var12;
            var12 = _closure1_slot5;
            var8 = var8[var20];
            var8 = var11.bind(var4)(var8);
            var11 = var8.Text;
            var8 = {'variant': 'heading-sm/semibold', 'color': 'white'};
            var8['accessibilityLabel'] = var13;
            var20 = var19.subheader;
            var13 = new Array(2);
            var13[0] = var20;
            if(!var18) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var18 = var19.textShadow;
case 15:
            var13[1] = var18;
            var8['style'] = var13;
            var13 = var16;
            if(!var17) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var13 = var16;
            if(var15) { _fun0001_ip = 17; continue _fun0001 }
case 19:
            var14 = var14.config;
            var14 = var14.messages;
            var13 = var14.gamePublisher;
case 17:
            var8['children'] = var13;
            var8 = var12.bind(var4)(var11, var8);
            var7[1] = var8;
            var5['children'] = var7;
            var7 = var3.bind(var4)(var2, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 13;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['iconColor'] = var10;
            var6['onClose'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
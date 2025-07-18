// app/modules/quests/native/VideoQuestModal/VideoQuestModalHeader.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
    var9 = {};
    var10 = 'column';
    var9['flexDirection'] = var10;
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
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/VideoQuestModal/VideoQuestModalHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VideoQuestModalHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var10 = var2.closeButtonIconColor;
            var9 = var2.onClose;
            var7 = var2.style;
            var3 = var2.showCurrentVideoTime;
            var4 = undefined;
            var15 = var4 !== var3;
            if(!var15) { _fun0001_ip = 40; continue _fun0001 }
 37:
            var15 = var3;
 40:
            var2 = var2.withTextShadow;
            var18 = var4 !== var2;
            if(!var18) { _fun0001_ip = 56; continue _fun0001 }
 53:
            var18 = var2;
 56:
            var2 = _closure1_slot7;
            var19 = var2.bind(var4)();
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 6;
            var2 = var8[var2];
            var3 = var5.bind(var4)(var2);
            var2 = var3.useVideoQuestModalContext;
            var2 = var2.bind(var3)();
            var14 = var2.quest;
            var _closure2_slot0 = var14;
            var2 = 7;
            var2 = var8[var2];
            var3 = var5.bind(var4)(var2);
            var2 = var3.useQuestTaskDetails;
            var2 = var2.bind(var3)(var14);
            var _closure2_slot1 = var2;
            var3 = _closure1_slot4;
            var2 = 9;
            var2 = var8[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.shallow;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.videoProgress;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2[var1];
                    var2 = null;
                    if(!(var2 == var1)) { _fun0002_ip = 65; continue _fun0002 }
 31:
                    var2 = {};
                    var4 = _closure2_slot1;
                    var4 = var4.progressSeconds;
                    var2['timestampSec'] = var4;
                    var3 = _closure2_slot1;
                    var3 = var3.targetSeconds;
                    var2['duration'] = var3;
                    var1 = var2;
 65:
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
            var16 = var3.bind(var4)(var1, var2);
            var3 = var14.userStatus;
            var2 = null;
            var5 = var2 == var3;
            var1 = undefined;
            if(var5) { _fun0001_ip = 192; continue _fun0001 }
 186:
            var1 = var3.completedAt;
 192:
            var17 = var2 != var1;
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
            var20 = _closure1_slot5;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var13 = 10;
            var7 = var7[var13];
            var7 = var8.bind(var4)(var7);
            var12 = var7.Text;
            var7 = {'variant': 'heading-md/semibold', 'color': 'white'};
            var8 = var18;
            if(!var18) { _fun0001_ip = 295; continue _fun0001 }
 289:
            var8 = var19.textShadow;
 295:
            var7['style'] = var8;
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var21 = 11;
            var22 = var8[var21];
            var22 = var11.bind(var4)(var22);
            var24 = var22.intl;
            var23 = var24.formatToPlainString;
            var21 = var8[var21];
            var21 = var11.bind(var4)(var21);
            var21 = var21.t;
            var22 = var21.EQa7oq;
            var21 = {};
            var25 = var14.config;
            var25 = var25.messages;
            var25 = var25.questName;
            var21['questName'] = var25;
            var21 = var23.bind(var24)(var22, var21);
            var7['children'] = var21;
            var12 = var20.bind(var4)(var12, var7);
            var7 = new Array(2);
            var7[0] = var12;
            var12 = _closure1_slot5;
            var8 = var8[var13];
            var8 = var11.bind(var4)(var8);
            var11 = var8.Text;
            var8 = {'variant': 'heading-sm/semibold', 'color': 'white'};
            var20 = var19.subheader;
            var13 = new Array(2);
            var13[0] = var20;
            if(!var18) { _fun0001_ip = 452; continue _fun0001 }
 446:
            var18 = var19.textShadow;
 452:
            var13[1] = var18;
            var8['style'] = var13;
            var13 = var16;
            if(!var17) { _fun0001_ip = 489; continue _fun0001 }
 466:
            var13 = var16;
            if(var15) { _fun0001_ip = 489; continue _fun0001 }
 472:
            var14 = var14.config;
            var14 = var14.messages;
            var13 = var14.gamePublisher;
 489:
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
            var6 = 12;
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
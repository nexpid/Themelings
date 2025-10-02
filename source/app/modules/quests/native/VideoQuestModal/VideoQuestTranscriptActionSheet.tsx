// app/modules/quests/native/VideoQuestModal/VideoQuestTranscriptActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityIndicator;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.FetchStatus;
    var _closure1_slot5 = var7;
    var4 = var4.useVideoQuestUIStore;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var10 = 'center';
    var9 = {'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center'};
    var4['container'] = var9;
    var9 = {};
    var11 = 5;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var9['paddingBottom'] = var11;
    var4['content'] = var9;
    var9 = {};
    var9['textAlign'] = var10;
    var4['headerText'] = var9;
    var9 = {};
    var10 = 100;
    var9['height'] = var10;
    var4['loadingSpinner'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/VideoQuestModal/VideoQuestTranscriptActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VideoQuestTranscriptActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.quest;
            var _closure2_slot0 = var1;
            var2 = _closure1_slot9;
            var4 = undefined;
            var16 = var2.bind(var4)();
            var3 = _closure1_slot6;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.transcript;
                return var1;
            };
            var11 = var3.bind(var4)(var2);
            var _closure2_slot1 = var11;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 6;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var9 = var2.bottom;
            var5 = _closure1_slot3;
            var3 = var5.useEffect;
            var2 = new Array(2);
            var2[0] = var1;
            var2[1] = var11;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var4 = 7;
                    var3 = var12[var4];
                    var1 = undefined;
                    var10 = var11.bind(var1)(var3);
                    var9 = var10.resolveVideoQuestAsset;
                    var8 = _closure2_slot0;
                    var7 = 8;
                    var5 = var12[var7];
                    var5 = var11.bind(var1)(var5);
                    var5 = var5.FirstPartyQuestTaskTypes;
                    var15 = var5.WATCH_VIDEO_ON_MOBILE;
                    var5 = var12[var4];
                    var5 = var11.bind(var1)(var5);
                    var5 = var5.VideoVariant;
                    var14 = var5.VIDEO;
                    var4 = var12[var4];
                    var4 = var11.bind(var1)(var4);
                    var4 = var4.VideoAssetProperty;
                    var13 = var4.TRANSCRIPT;
                    var17 = var10;
                    var16 = var8;
                    var6 = var17[var9](var16, var15, var14, var13, var12);
                    var4 = _closure2_slot1;
                    var8 = null;
                    var4 = var8 == var4;
                    if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure2_slot1;
                    var9 = var5.questId;
                    var5 = _closure2_slot0;
                    var5 = var5.id;
                    var4 = var9 !== var5;
case 2:
                    if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure2_slot1;
                    var9 = var5.fetchStatus;
                    var5 = _closure1_slot5;
                    var5 = var5.NONE;
                    var4 = var9 === var5;
case 4:
                    if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = _closure2_slot1;
                    var9 = var5.fetchStatus;
                    var5 = _closure1_slot5;
                    var5 = var5.SUCCESS;
                    var5 = var9 === var5;
                    if(!var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var9 = var8 == var6;
                    var8 = undefined;
                    if(var9) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var8 = var6.url;
case 10:
                    var6 = _closure2_slot1;
                    var6 = var6.url;
                    var5 = var8 !== var6;
case 8:
                    var4 = var5;
case 6:
                    if(!var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var4 = 9;
                    var4 = var2[var4];
                    var5 = var6.bind(var1)(var4);
                    var4 = var5.fetchVideoTranscript;
                    var3 = _closure2_slot0;
                    var2 = var2[var7];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.FirstPartyQuestTaskTypes;
                    var2 = var2.WATCH_VIDEO_ON_MOBILE;
                    var2 = var4.bind(var5)(var3, var2);
case 12:
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = var5.useMemo;
            var13 = null;
            var2 = var13 == var11;
            var1 = undefined;
            if(var2) { _fun0001_ip = 14; continue _fun0001 }
case 3:
            var1 = var11.text;
case 14:
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var4 = null;
                    var5 = var4 == var3;
                    var3 = undefined;
                    if(var5) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var5 = _closure2_slot1;
                    var3 = var5.text;
case 15:
                    if(!(var4 != var3)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var2 = _closure2_slot1;
                    var4 = var2.text;
                    var3 = var4.split;
                    var2 = '\n';
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.trim;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.length;
                        var1 = 0;
                        var1 = var2 > var1;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    _fun0003_ip = 19; continue _fun0003;
case 17:
                    var1 = new Array(0);
case 19:
                    return var1;
                }
            };
            var14 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot7;
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 10;
            var1 = var15[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var5 = true;
            var1['scrollable'] = var5;
            var5 = 11;
            var5 = var15[var5];
            var5 = var8.bind(var4)(var5);
            var6 = var5.BottomSheetTitleHeader;
            var5 = {};
            var7 = 12;
            var17 = var15[var7];
            var17 = var8.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var7 = var15[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.1YS809;
            var7 = var17.bind(var18)(var7);
            var5['title'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['header'] = var5;
            var5 = 13;
            var5 = var15[var5];
            var5 = var8.bind(var4)(var5);
            var6 = var5.BottomSheetScrollView;
            var5 = {};
            var7 = {};
            var7['paddingBottom'] = var9;
            var5['contentContainerStyle'] = var7;
            var9 = _closure1_slot8;
            var7 = 14;
            var7 = var15[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Stack;
            var7 = {};
            var15 = 16;
            var7['spacing'] = var15;
            var15 = var16.content;
            var7['style'] = var15;
            var15 = var13 == var11;
            var13 = undefined;
            if(var15) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var13 = var11.fetchStatus;
case 20:
            var11 = _closure1_slot5;
            var11 = var11.FETCHING;
            var11 = var13 === var11;
            if(!var11) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var15 = _closure1_slot7;
            var13 = _closure1_slot4;
            var10 = {};
            var16 = var16.loadingSpinner;
            var10['style'] = var16;
            var16 = 'large';
            var10['size'] = var16;
            var11 = var15.bind(var4)(var13, var10);
case 22:
            var10 = new Array(2);
            var10[0] = var11;
            var13 = var14.length;
            var11 = 0;
            var11 = var13 > var11;
            if(!var11) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var13 = var14.map;
            var12 = function(arg1, arg2) {
                var5 = _closure1_slot7;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 15;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.Text;
                var2 = {'variant': 'heading-md/normal', 'color': 'text-muted'};
                var1 = arg1;
                var2['children'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var11 = var13.bind(var14)(var12);
case 24:
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
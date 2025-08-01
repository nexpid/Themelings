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
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/VideoQuestModal/VideoQuestTranscriptActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VideoQuestTranscriptActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0002_ip = 39; continue _fun0002 }
 16:
                    var3 = _closure2_slot1;
                    var4 = var3.questId;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var2 = var4 === var3;
 39:
                    if(!var2) { _fun0002_ip = 69; continue _fun0002 }
 42:
                    var3 = _closure2_slot1;
                    var4 = var3.fetchStatus;
                    var3 = _closure1_slot5;
                    var3 = var3.NONE;
                    var2 = var4 !== var3;
 69:
                    if(var2) { _fun0002_ip = 137; continue _fun0002 }
 72:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 7;
                    var2 = var7[var2];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var2);
                    var3 = var4.fetchVideoTranscript;
                    var2 = _closure2_slot0;
                    var1 = 8;
                    var1 = var7[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.FirstPartyQuestTaskTypes;
                    var1 = var1.WATCH_VIDEO_ON_MOBILE;
                    var1 = var3.bind(var4)(var2, var1);
 137:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = var5.useMemo;
            var13 = null;
            var2 = var13 == var11;
            var1 = undefined;
            if(var2) { _fun0001_ip = 132; continue _fun0001 }
 127:
            var1 = var11.text;
 132:
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot1;
                    var4 = null;
                    var5 = var4 == var3;
                    var3 = undefined;
                    if(var5) { _fun0003_ip = 29; continue _fun0003 }
 20:
                    var5 = _closure2_slot1;
                    var3 = var5.text;
 29:
                    if(!(var4 != var3)) { _fun0003_ip = 92; continue _fun0003 }
 33:
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
                    _fun0003_ip = 96; continue _fun0003;
 92:
                    var1 = new Array(0);
 96:
                    return var1;
                }
            };
            var14 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot7;
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 9;
            var1 = var15[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var5 = true;
            var1['scrollable'] = var5;
            var5 = 10;
            var5 = var15[var5];
            var5 = var8.bind(var4)(var5);
            var6 = var5.BottomSheetTitleHeader;
            var5 = {};
            var7 = 11;
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
            var5 = 12;
            var5 = var15[var5];
            var5 = var8.bind(var4)(var5);
            var6 = var5.BottomSheetScrollView;
            var5 = {};
            var7 = {};
            var7['paddingBottom'] = var9;
            var5['contentContainerStyle'] = var7;
            var9 = _closure1_slot8;
            var7 = 13;
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
            if(var15) { _fun0001_ip = 362; continue _fun0001 }
 356:
            var13 = var11.fetchStatus;
 362:
            var11 = _closure1_slot5;
            var11 = var11.FETCHING;
            var11 = var13 === var11;
            if(!var11) { _fun0001_ip = 413; continue _fun0001 }
 379:
            var15 = _closure1_slot7;
            var13 = _closure1_slot4;
            var10 = {};
            var16 = var16.loadingSpinner;
            var10['style'] = var16;
            var16 = 'large';
            var10['size'] = var16;
            var11 = var15.bind(var4)(var13, var10);
 413:
            var10 = new Array(2);
            var10[0] = var11;
            var13 = var14.length;
            var11 = 0;
            var11 = var13 > var11;
            if(!var11) { _fun0001_ip = 452; continue _fun0001 }
 435:
            var13 = var14.map;
            var12 = function(arg1, arg2) {
                var5 = _closure1_slot7;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
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
 452:
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
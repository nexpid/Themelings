// app/modules/quests/native/QuestHome.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function EmptyStateNoQuestsAvailable() {
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var2 = 12;
        var2 = var13[var2];
        var4 = undefined;
        var3 = var12.bind(var4)(var2);
        var2 = var3.useNavigation;
        var7 = var2.bind(var3)();
        var _closure2_slot0 = var7;
        var6 = _closure1_slot4;
        var3 = var6.useCallback;
        var2 = new Array(1);
        var2[0] = var7;
        var1 = function() {
            var2 = _closure2_slot0;
            var1 = var2.goBack;
            var1 = var1.bind(var2)();
            return var1;
        };
        var8 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot12;
        var2 = _closure1_slot1;
        var1 = 13;
        var1 = var13[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var7 = _closure1_slot12;
        var5 = 14;
        var5 = var13[var5];
        var5 = var12.bind(var4)(var5);
        var6 = var5.Button;
        var5 = {};
        var9 = 'secondary';
        var5['variant'] = var9;
        var9 = 15;
        var10 = var13[var9];
        var10 = var12.bind(var4)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9["/g10LC"];
        var9 = var10.bind(var11)(var9);
        var5['text'] = var9;
        var5['onPress'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['action'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function EmptyStateFiltered(arg1) {
        var1 = arg1;
        var11 = var1.onClearFilters;
        var4 = _closure1_slot12;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 13;
        var1 = var9[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var10 = _closure1_slot12;
        var8 = _closure1_slot0;
        var5 = 14;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var7 = var5.Button;
        var6 = {};
        var5 = 'secondary';
        var6['variant'] = var5;
        var5 = 15;
        var12 = var9[var5];
        var12 = var8.bind(var3)(var12);
        var14 = var12.intl;
        var13 = var14.string;
        var12 = var9[var5];
        var12 = var8.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.urZl31;
        var12 = var13.bind(var14)(var12);
        var6['text'] = var12;
        var6['onPress'] = var11;
        var6 = var10.bind(var3)(var7, var6);
        var1['action'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.PBfFnx;
        var6 = var7.bind(var10)(var6);
        var1['title'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.nwdKFC;
        var5 = var6.bind(var7)(var5);
        var1['subtitle'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function HeaderPreviewButton() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot15;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var4 = _closure1_slot4;
            var3 = var4.useCallback;
            var2 = function() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 16;
                var2 = var4[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.popAll;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot0;
                var2 = 17;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openUserSettings;
                var2 = {};
                var5 = _closure1_slot11;
                var5 = var5.QUEST_PREVIEW_TOOL_2;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var9 = var3.bind(var4)(var2, var1);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 18;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useShouldShowPreviewToolTab;
            var2 = var1.bind(var2)();
            var1 = null;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot12;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var7.previewButton;
            var2['style'] = var7;
            var8 = _closure1_slot12;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 14;
            var6 = var13[var6];
            var6 = var12.bind(var5)(var6);
            var7 = var6.Button;
            var6 = {'grow': true, 'onPress': null, 'variant': 'primary'};
            var6['onPress'] = var9;
            var9 = 15;
            var10 = var13[var9];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.tx5Ax5;
            var9 = var10.bind(var11)(var9);
            var6['text'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function HeaderWithBounties() {
        var1 = _closure1_slot15;
        var4 = undefined;
        var18 = var1.bind(var4)();
        var3 = _closure1_slot13;
        var2 = _closure1_slot14;
        var1 = {};
        var7 = _closure1_slot12;
        var6 = _closure1_slot18;
        var5 = {};
        var6 = var7.bind(var4)(var6, var5);
        var5 = new Array(4);
        var5[0] = var6;
        var8 = _closure1_slot12;
        var7 = _closure1_slot5;
        var6 = {};
        var9 = var18.sectionHeader;
        var6['style'] = var9;
        var15 = _closure1_slot12;
        var16 = _closure1_slot0;
        var17 = _closure1_slot2;
        var10 = 19;
        var9 = var17[var10];
        var9 = var16.bind(var4)(var9);
        var12 = var9.Text;
        var9 = {};
        var14 = 'text-lg/semibold';
        var9['variant'] = var14;
        var13 = 15;
        var19 = var17[var13];
        var19 = var16.bind(var4)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var17[var13];
        var19 = var16.bind(var4)(var19);
        var19 = var19.t;
        var19 = var19.qetVDw;
        var19 = var20.bind(var21)(var19);
        var9['children'] = var19;
        var9 = var15.bind(var4)(var12, var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var8 = _closure1_slot12;
        var7 = _closure1_slot1;
        var6 = 20;
        var6 = var17[var6];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var6 = var8.bind(var4)(var7, var6);
        var5[2] = var6;
        var8 = _closure1_slot13;
        var7 = _closure1_slot5;
        var6 = {};
        var12 = var18.sectionHeader;
        var9 = new Array(2);
        var9[0] = var12;
        var12 = var18.sectionHeaderWithTag;
        var9[1] = var12;
        var6['style'] = var9;
        var15 = _closure1_slot12;
        var9 = var17[var10];
        var9 = var16.bind(var4)(var9);
        var12 = var9.Text;
        var9 = {'variant': 'text-xs/bold', 'color': 'text-subtle'};
        var18 = var18.sectionTag;
        var9['style'] = var18;
        var18 = var17[var13];
        var18 = var16.bind(var4)(var18);
        var20 = var18.intl;
        var19 = var20.string;
        var18 = var17[var13];
        var18 = var16.bind(var4)(var18);
        var18 = var18.t;
        var18 = var18.at6XRi;
        var18 = var19.bind(var20)(var18);
        var9['children'] = var18;
        var12 = var15.bind(var4)(var12, var9);
        var9 = new Array(2);
        var9[0] = var12;
        var12 = _closure1_slot12;
        var10 = var17[var10];
        var10 = var16.bind(var4)(var10);
        var11 = var10.Text;
        var10 = {};
        var10['variant'] = var14;
        var14 = var17[var13];
        var14 = var16.bind(var4)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var13 = var17[var13];
        var13 = var16.bind(var4)(var13);
        var13 = var13.t;
        var13 = var13.giYD00;
        var13 = var14.bind(var15)(var13);
        var10['children'] = var13;
        var10 = var12.bind(var4)(var11, var10);
        var9[1] = var10;
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[3] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var1;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var13 = 1;
    var7 = var6[var13];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot5 = var8;
    var8 = var4.ActivityIndicator;
    var _closure1_slot6 = var8;
    var11 = var4.StyleSheet;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot10 = var8;
    var4 = var4.UserSettingsSections;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot12 = var8;
    var8 = var4.jsxs;
    var _closure1_slot13 = var8;
    var4 = var4.Fragment;
    var _closure1_slot14 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var13;
    var4['container'] = var10;
    var10 = {};
    var15 = var11.absoluteFillObject;
    var16 = var10;
    var11 = copyDataProperties(var16, var15);
    var13 = 'center';
    var11 = 'justifyContent';
    var10[10] = var13;
    var11 = 'alignItems';
    var10[10] = var13;
    var4['loadingContainer'] = var10;
    var10 = {};
    var11 = 9;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['marginBottom'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['paddingHorizontal'] = var13;
    var4['sectionHeader'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['marginBottom'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['paddingHorizontal'] = var13;
    var13 = 'transparent';
    var10['backgroundColor'] = var13;
    var4['previewButton'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var10['gap'] = var11;
    var4['sectionHeaderWithTag'] = var10;
    var10 = {};
    var11 = 'uppercase';
    var10['textTransform'] = var11;
    var4['sectionTag'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot15 = var4;
    var4 = var7.memo;
    var2 = function QuestHome(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var9 = var1.containerStyle;
            var5 = var1.isNavigationComplete;
            var25 = var1.scrollToQuestId;
            var _closure2_slot0 = var25;
            var3 = var1.filters;
            var _closure2_slot1 = var3;
            var24 = var1.sortMethod;
            var _closure2_slot2 = var24;
            var10 = var1.onClearFilters;
            var19 = _closure1_slot0;
            var22 = _closure1_slot2;
            var1 = 21;
            var1 = var22[var1];
            var6 = undefined;
            var2 = var19.bind(var6)(var1);
            var1 = var2.getIsEligibleForQuests;
            var11 = var1.bind(var2)();
            var _closure2_slot3 = var11;
            var1 = _closure1_slot15;
            var8 = var1.bind(var6)();
            var23 = _closure1_slot1;
            var1 = 22;
            var1 = var22[var1];
            var1 = var23.bind(var6)(var1);
            var1 = var1.bind(var6)();
            var21 = var1.bottom;
            var4 = 18;
            var1 = var22[var4];
            var13 = var19.bind(var6)(var1);
            var12 = var13.useFilteredQuests;
            var1 = var22[var4];
            var1 = var19.bind(var6)(var1);
            var1 = var1.QuestTabs;
            var2 = var1.ALL;
            var17 = _closure1_slot4;
            var16 = var17.useMemo;
            var14 = new Array(2);
            var14[0] = var3;
            var14[1] = var24;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot1;
                var1['filters'] = var3;
                var2 = _closure2_slot2;
                var1['sortMethod'] = var2;
                return var1;
            };
            var1 = var16.bind(var17)(var1, var14);
            var1 = var12.bind(var13)(var2, var1);
            var17 = var1.quests;
            var _closure2_slot4 = var17;
            var13 = var1.excludedQuests;
            var _closure2_slot5 = var13;
            var2 = var1.isFetchingCurrentQuests;
            var _closure2_slot6 = var2;
            var16 = var1.hasFetched;
            var _closure2_slot7 = var16;
            var14 = _closure1_slot4;
            var12 = var14.useRef;
            var1 = null;
            var12 = var12.bind(var14)(var1);
            var _closure2_slot8 = var12;
            var20 = _closure1_slot4;
            var18 = var20.useMemo;
            var14 = new Array(3);
            var14[0] = var25;
            var14[1] = var17;
            var14[2] = var13;
            var12 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 23;
                    var5 = var5[var2];
                    var2 = undefined;
                    var8 = var6.bind(var2)(var5);
                    var7 = var8.findQuestOrReplacement;
                    var6 = _closure2_slot0;
                    var5 = _closure2_slot4;
                    var2 = _closure2_slot5;
                    var2 = var7.bind(var8)(var6, var5, var2);
                    var _closure3_slot0 = var2;
                    var5 = var1 == var2;
                    var2 = null;
                    if(var5) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var5 = _closure2_slot4;
                    var4 = var5.findIndex;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var1.id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var4.bind(var5)(var3);
case 6:
                    return var2;
case 4:
                    return var1;
                }
            };
            var12 = var18.bind(var20)(var12, var14);
            var20 = _closure1_slot4;
            var18 = var20.useEffect;
            var14 = new Array(5);
            var14[0] = var25;
            var14[1] = var17;
            var14[2] = var13;
            var14[3] = var16;
            var14[4] = var2;
            var13 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var5 = _closure2_slot0;
                    var3 = '';
                    var2 = var3 !== var5;
case 8:
                    if(!var2) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var2 = _closure2_slot7;
case 10:
                    if(!var2) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var3 = _closure2_slot6;
                    var2 = !var3;
case 12:
                    if(!var2) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 23;
                    var3 = var5[var3];
                    var5 = undefined;
                    var9 = var6.bind(var5)(var3);
                    var8 = var9.findQuestOrReplacement;
                    var7 = _closure2_slot0;
                    var6 = _closure2_slot4;
                    var3 = _closure2_slot5;
                    var3 = var8.bind(var9)(var7, var6, var3);
                    var3 = var4 == var3;
                    if(!var3) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var4 = _closure2_slot8;
                    var6 = var4.current;
                    var4 = _closure2_slot0;
                    var3 = var6 !== var4;
case 16:
                    if(!var3) { _fun0004_ip = 14; continue _fun0004 }
case 18:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 24;
                    var3 = var6[var3];
                    var8 = var4.bind(var5)(var3);
                    var7 = var8.open;
                    var3 = {};
                    var9 = 'QUEST_HOME_MOBILE_DEEP_LINK_QUEST_NOT_FOUND';
                    var3['key'] = var9;
                    var12 = _closure1_slot0;
                    var9 = 15;
                    var10 = var6[var9];
                    var10 = var12.bind(var5)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var6[var9];
                    var9 = var12.bind(var5)(var9);
                    var9 = var9.t;
                    var9 = var9.sIyHuY;
                    var9 = var10.bind(var11)(var9);
                    var3['content'] = var9;
                    var9 = 25;
                    var9 = var6[var9];
                    var9 = var4.bind(var5)(var9);
                    var3['icon'] = var9;
                    var9 = 5000;
                    var3['toastDurationMs'] = var9;
                    var3 = var7.bind(var8)(var3);
                    var3 = 26;
                    var3 = var6[var3];
                    var6 = var4.bind(var5)(var3);
                    var5 = var6.track;
                    var2 = _closure1_slot10;
                    var4 = var2.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST;
                    var3 = {};
                    var2 = _closure2_slot0;
                    var3['quest_id'] = var2;
                    var3 = var5.bind(var6)(var4, var3);
                    var1 = _closure2_slot8;
                    var1['current'] = var2;
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var18.bind(var20)(var13, var14);
            var13 = {};
            var13['scrollToIndex'] = var12;
            var12 = function(arg1) {
                var2 = arg1;
                var12 = var2.scrollToIndex;
                var _closure3_slot0 = var12;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 10;
                var2 = var4[var2];
                var14 = undefined;
                var5 = var3.bind(var14)(var2);
                var4 = var5.useStateFromStores;
                var2 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() {
                    var1 = _closure1_slot7;
                    var1 = var1.useReducedMotion;
                    return var1;
                };
                var13 = var4.bind(var5)(var3, var2);
                var _closure3_slot1 = var13;
                var4 = _closure1_slot4;
                var3 = var4.useRef;
                var2 = null;
                var7 = var3.bind(var4)(var2);
                var _closure3_slot2 = var7;
                var5 = _closure1_slot4;
                var3 = var5.useRef;
                var2 = {};
                var6 = {};
                var4 = 0;
                var6['scrollY'] = var4;
                var2['parent'] = var6;
                var6 = {};
                var2['children'] = var6;
                var2 = var3.bind(var5)(var2);
                var _closure3_slot3 = var2;
                var9 = _closure1_slot4;
                var6 = var9.useCallback;
                var5 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var8 = arg1;
                        var1 = global;
                        var3 = var1.Object;
                        var2 = var3.keys;
                        var1 = _closure3_slot3;
                        var1 = var1.current;
                        var1 = var1.children;
                        var6 = var2.bind(var3)(var1);
                        var1 = var6.length;
                        var5 = 0;
                        var2 = var5 < var1;
                        var1 = undefined;
                        var4 = null;
                        var3 = undefined;
                        if(!var2) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                        var10 = var6[var5];
                        var2 = var4 != var8;
                        if(!var2) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                        var2 = var10 !== var8;
case 21:
                        if(var2) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                        var9 = _closure3_slot3;
                        var9 = var9.current;
                        var9 = var9.children;
                        var9 = var9[var10];
                        var2 = var4 == var9;
                        var3 = var9;
case 23:
                        if(var2) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                        var9 = var3.calculateVisibility;
                        var2 = var4 == var9;
case 25:
                        if(var2) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                        var2 = var3.calculateVisibility;
                        var2 = var2.bind(var3)();
case 27:
                        var5 = var5 + 1;
                        var2 = var6.length;
                        if(var5 < var2) { _fun0005_ip = 20; continue _fun0005 }
case 19:
                        return var1;
                    }
                };
                var3 = new Array(0);
                var3 = var6.bind(var9)(var5, var3);
                var _closure3_slot4 = var3;
                var10 = _closure1_slot4;
                var9 = var10.useCallback;
                var6 = new Array(1);
                var6[0] = var3;
                var5 = function(arg1) {
                    var2 = _closure3_slot3;
                    var2 = var2.current;
                    var3 = var2.parent;
                    var2 = arg1;
                    var2 = var2.nativeEvent;
                    var2 = var2.contentOffset;
                    var2 = var2.y;
                    var3['scrollY'] = var2;
                    var2 = _closure3_slot4;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var6 = var9.bind(var10)(var5, var6);
                var11 = _closure1_slot4;
                var10 = var11.useCallback;
                var9 = new Array(1);
                var9[0] = var3;
                var5 = function(arg1) {
                    var2 = _closure3_slot3;
                    var2 = var2.current;
                    var3 = var2.parent;
                    var2 = arg1;
                    var2 = var2.nativeEvent;
                    var2 = var2.layout;
                    var3['layout'] = var2;
                    var2 = _closure3_slot4;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var5 = var10.bind(var11)(var5, var9);
                var11 = _closure1_slot4;
                var10 = var11.useState;
                var9 = false;
                var11 = var10.bind(var11)(var9);
                var10 = _closure1_slot3;
                var9 = 2;
                var9 = var10.bind(var14)(var11, var9);
                var14 = var9[var4];
                var _closure3_slot5 = var14;
                var4 = 1;
                var4 = var9[var4];
                var _closure3_slot6 = var4;
                var11 = _closure1_slot4;
                var10 = var11.useCallback;
                var9 = function() {
                    var3 = _closure3_slot6;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var4 = new Array(0);
                var4 = var10.bind(var11)(var9, var4);
                var11 = _closure1_slot4;
                var10 = var11.useCallback;
                var9 = new Array(1);
                var9[0] = var3;
                var3 = function(arg1, arg2) {
                    var3 = arg2;
                    var5 = _closure3_slot3;
                    var2 = var5.current;
                    var4 = var2.children;
                    var2 = {};
                    var5 = var5.current;
                    var5 = var5.children;
                    var7 = var5[var3];
                    var8 = var2;
                    var5 = copyDataProperties(var8, var7);
                    var5 = arg1;
                    var5 = var5.nativeEvent;
                    var6 = var5.layout;
                    var5 = 'layout';
                    var2[4] = var6;
                    var4[var3] = var2;
                    var2 = _closure3_slot4;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var3 = var10.bind(var11)(var3, var9);
                var15 = _closure1_slot4;
                var11 = var15.useCallback;
                var10 = new Array(1);
                var10[0] = var13;
                var9 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = _closure3_slot2;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                        var1 = _closure3_slot2;
                        var3 = var1.current;
                        var2 = var3.scrollToIndex;
                        var1 = {};
                        var5 = arg1;
                        var1['index'] = var5;
                        var4 = _closure3_slot1;
                        var4 = !var4;
                        var1['animated'] = var4;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var4 = 9;
                        var5 = var5[var4];
                        var4 = undefined;
                        var4 = var6.bind(var4)(var5);
                        var4 = var4.spacing;
                        var4 = var4.PX_8;
                        var1['viewOffset'] = var4;
                        var1 = var2.bind(var3)(var1);
case 29:
                        var1 = undefined;
                        return var1;
                    }
                };
                var11 = var11.bind(var15)(var9, var10);
                var _closure3_slot7 = var11;
                var10 = _closure1_slot4;
                var9 = var10.useEffect;
                var8 = new Array(4);
                var8[0] = var14;
                var8[1] = var13;
                var8[2] = var12;
                var8[3] = var11;
                var1 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var2 = null;
                        var2 = var2 != var3;
                        if(!var2) { _fun0007_ip = 31; continue _fun0007 }
case 9:
                        var4 = _closure3_slot0;
                        var3 = -1;
                        var2 = var3 !== var4;
case 31:
                        if(!var2) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                        var2 = _closure3_slot5;
case 32:
                        if(!var2) { _fun0007_ip = 29; continue _fun0007 }
case 34:
                        var2 = _closure3_slot7;
                        var1 = _closure3_slot0;
                        var4 = undefined;
                        var1 = var2.bind(var4)(var1);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 11;
                        var2 = var5[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.clearSubsection;
                        var1 = _closure1_slot11;
                        var1 = var1.QUESTS;
                        var1 = var2.bind(var3)(var1);
case 29:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var9.bind(var10)(var1, var8);
                var1 = {};
                var1['scrollViewRef'] = var7;
                var1['handleListScroll'] = var6;
                var1['handleListLayout'] = var5;
                var1['handleListLoad'] = var4;
                var1['handleQuestCardLayout'] = var3;
                var1['visibilityRef'] = var2;
                return var1;
            };
            var18 = var12.bind(var6)(var13);
            var20 = var18.scrollViewRef;
            var _closure2_slot9 = var20;
            var13 = var18.handleListScroll;
            var14 = var18.handleListLayout;
            var12 = var18.handleListLoad;
            var25 = var18.handleQuestCardLayout;
            var _closure2_slot10 = var25;
            var18 = var18.visibilityRef;
            var _closure2_slot11 = var18;
            var25 = _closure1_slot8;
            var18 = function(arg1) {
                var2 = arg1;
                var1 = var2.getUtmCurrentContext;
                var1 = var1.bind(var2)();
                return var1;
            };
            var26 = var25.bind(var6)(var18);
            var18 = 27;
            var18 = var22[var18];
            var23 = var23.bind(var6)(var18);
            var18 = {};
            var25 = 28;
            var27 = var22[var25];
            var27 = var19.bind(var6)(var27);
            var27 = var27.ImpressionNames;
            var27 = var27.QUEST_HOME;
            var18['name'] = var27;
            var25 = var22[var25];
            var25 = var19.bind(var6)(var25);
            var25 = var25.ImpressionTypes;
            var25 = var25.VIEW;
            var18['type'] = var25;
            var25 = {};
            var27 = var26.utmSourceCurrent;
            var25['utm_source_current'] = var27;
            var27 = var26.utmMediumCurrent;
            var25['utm_medium_current'] = var27;
            var27 = var26.utmCampaignCurrent;
            var25['utm_campaign_current'] = var27;
            var26 = var26.utmContentCurrent;
            var25['utm_content_current'] = var26;
            var26 = var22[var4];
            var26 = var19.bind(var6)(var26);
            var26 = var26.QuestTabs;
            var26 = var26.ALL;
            var25['tab'] = var26;
            var18['properties'] = var25;
            var18 = var23.bind(var6)(var18);
            var26 = _closure1_slot4;
            var25 = var26.useEffect;
            var23 = new Array(1);
            var23[0] = var11;
            var18 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0008_ip = 15; continue _fun0008 }
case 35:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 29;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var2 = var1.QuestHomeOpenTriggerPoint;
                    var1 = var2.trigger;
                    var1 = var1.bind(var2)();
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var18 = var25.bind(var26)(var18, var23);
            var25 = _closure1_slot4;
            var23 = var25.useEffect;
            var18 = new Array(4);
            var18[0] = var3;
            var18[1] = var24;
            var18[2] = var16;
            var18[3] = var20;
            var16 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var3 = var2.current;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0009_ip = 36; continue _fun0009 }
case 37:
                    var2 = _closure2_slot7;
case 36:
                    if(!var2) { _fun0009_ip = 20; continue _fun0009 }
case 8:
                    var1 = _closure2_slot9;
                    var3 = var1.current;
                    var2 = var3.scrollToOffset;
                    var1 = {'offset': 0, 'animated': false};
                    var1 = var2.bind(var3)(var1);
case 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var23.bind(var25)(var16, var18);
            var16 = var22[var4];
            var23 = var19.bind(var6)(var16);
            var18 = var23.useQuestHomeSortingFilteringAnalytics;
            var16 = {};
            var16['selectedSortMethod'] = var24;
            var16['selectedFilters'] = var3;
            var24 = var17.length;
            var16['numQuestsVisible'] = var24;
            var16 = var18.bind(var23)(var16);
            var16 = 30;
            var16 = var22[var16];
            var23 = var19.bind(var6)(var16);
            var18 = var23.useVirtualCurrencyMobileEnabled;
            var16 = {};
            var24 = 'quest_home_bounties';
            var16['location'] = var24;
            var16 = var18.bind(var23)(var16);
            var16 = var16.enabled;
            var18 = 31;
            var18 = var22[var18];
            var18 = var19.bind(var6)(var18);
            var24 = var18.QuestHomeBountiesExperiment;
            var23 = var24.useConfig;
            var18 = {};
            var25 = _closure1_slot9;
            var25 = var25.QUEST_HOME_MOBILE;
            var18['location'] = var25;
            var18 = var23.bind(var24)(var18);
            var18 = var18.enabled;
            var4 = var22[var4];
            var19 = var19.bind(var6)(var4);
            var4 = var19.useFetchQuestHomeBounties;
            var4 = var4.bind(var19)();
            var4 = var4.isLoading;
            if(!var16) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var16 = var18;
case 38:
            if(!var16) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var19 = var3.length;
            var18 = 0;
            var16 = var18 === var19;
case 40:
            var1 = null;
            if(!var11) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            if(!var5) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            if(!var16) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            if(var4) { _fun0002_ip = 44; continue _fun0002 }
case 46:
            if(!var2) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var4 = var17.length;
            var2 = 0;
            if(!(var2 !== var4)) { _fun0002_ip = 44; continue _fun0002 }
case 48:
            var2 = var17.length;
            var4 = 0;
            if(!(var4 !== var2)) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var11 = _closure1_slot12;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var2 = 32;
            var2 = var19[var2];
            var2 = var18.bind(var6)(var2);
            var5 = var2.FlashList;
            var2 = {};
            var2['ref'] = var20;
            var20 = {};
            var23 = _closure1_slot1;
            var22 = 9;
            var22 = var19[var22];
            var22 = var23.bind(var6)(var22);
            var22 = var22.spacing;
            var22 = var22.PX_16;
            var20['paddingTop'] = var22;
            var20['paddingBottom'] = var21;
            var2['contentContainerStyle'] = var20;
            var21 = var8.container;
            var20 = new Array(2);
            var20[0] = var21;
            var20[1] = var9;
            var2['style'] = var20;
            var20 = 15;
            var21 = var19[var20];
            var21 = var18.bind(var6)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var19[var20];
            var20 = var18.bind(var6)(var20);
            var20 = var20.t;
            var20 = var20.JALI2K;
            var20 = var21.bind(var22)(var20);
            var2['accessibilityLabel'] = var20;
            var2['data'] = var17;
            var17 = function renderItem(arg1) {
                var2 = arg1;
                var1 = var2.item;
                var _closure3_slot0 = var1;
                var10 = var2.index;
                var _closure3_slot1 = var10;
                var5 = _closure1_slot12;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 33;
                var2 = var9[var2];
                var4 = undefined;
                var2 = var8.bind(var4)(var2);
                var3 = var2.QuestContentImpressionTrackerNative;
                var2 = {};
                var2['questOrQuests'] = var1;
                var7 = 34;
                var11 = var9[var7];
                var11 = var8.bind(var4)(var11);
                var11 = var11.QuestContent;
                var11 = var11.QUEST_HOME_MOBILE;
                var2['questContent'] = var11;
                var2['questContentPosition'] = var10;
                var10 = false;
                var2['trackGuildAndChannelMetadata'] = var10;
                var10 = _closure2_slot11;
                var2['visibilityRef'] = var10;
                var7 = var9[var7];
                var7 = var8.bind(var4)(var7);
                var7 = var7.QuestContent;
                var7 = var7.QUEST_HOME_MOBILE;
                var2['sourceQuestContent'] = var7;
                var6 = function children() {
                    var5 = _closure1_slot12;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 35;
                    var1 = var8[var1];
                    var4 = undefined;
                    var1 = var7.bind(var4)(var1);
                    var3 = var1.QuestCard;
                    var2 = {};
                    var1 = _closure3_slot0;
                    var2['quest'] = var1;
                    var6 = _closure3_slot1;
                    var2['questContentPosition'] = var6;
                    var6 = 0;
                    var2['containerPadding'] = var6;
                    var6 = 34;
                    var6 = var8[var6];
                    var6 = var7.bind(var4)(var6);
                    var6 = var6.QuestContent;
                    var6 = var6.QUEST_HOME_MOBILE;
                    var2['sourceQuestContent'] = var6;
                    var1 = var1.id;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var2['children'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var2['renderItem'] = var17;
            var17 = 35;
            var17 = var19[var17];
            var17 = var18.bind(var6)(var17);
            var17 = var17.ESTIMATED_CARD_HEIGHT;
            var2['estimatedItemSize'] = var17;
            var17 = false;
            var2['showsHorizontalScrollIndicator'] = var17;
            if(var16) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var16 = _closure1_slot18;
            _fun0002_ip = 54; continue _fun0002;
case 52:
            var16 = _closure1_slot19;
case 54:
            var2['ListHeaderComponent'] = var16;
            var15 = function CellRendererComponent(arg1) {
                var6 = arg1;
                var _closure3_slot0 = var6;
                var4 = _closure1_slot12;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 32;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.CellContainer;
                var1 = {};
                var8 = var1;
                var7 = var6;
                var6 = copyDataProperties(var8, var7);
                var6 = function onLayout(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var3 = arg1;
                        var5 = _closure2_slot4;
                        var2 = _closure3_slot0;
                        var2 = var2.index;
                        var2 = var5[var2];
                        var5 = null;
                        if(!(var5 != var2)) { _fun0010_ip = 55; continue _fun0010 }
case 56:
                        var5 = _closure2_slot10;
                        var4 = var2.id;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var3, var4);
case 55:
                        var2 = _closure3_slot0;
                        var1 = var2.onLayout;
                        var1 = var1.bind(var2)(var3);
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = 'onLayout';
                var1[4] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2['CellRendererComponent'] = var15;
            var2['onLayout'] = var14;
            var2['onScroll'] = var13;
            var2['onLoad'] = var12;
            var12 = 16;
            var2['scrollEventThrottle'] = var12;
            var2 = var11.bind(var6)(var5, var2);
            _fun0002_ip = 57; continue _fun0002;
case 50:
            var3 = var3.length;
            if(!(var4 !== var3)) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var5 = _closure1_slot12;
            var4 = _closure1_slot17;
            var3 = {};
            var3['onClearFilters'] = var10;
            var3 = var5.bind(var6)(var4, var3);
            _fun0002_ip = 60; continue _fun0002;
case 58:
            var10 = _closure1_slot12;
            var5 = _closure1_slot16;
            var4 = {};
            var3 = var10.bind(var6)(var5, var4);
case 60:
            var2 = var3;
case 57:
            _fun0002_ip = 61; continue _fun0002;
case 44:
            var5 = _closure1_slot12;
            var4 = _closure1_slot5;
            var3 = {};
            var10 = var8.loadingContainer;
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var3['style'] = var8;
            var9 = _closure1_slot12;
            var8 = _closure1_slot6;
            var7 = {};
            var10 = true;
            var7['animating'] = var10;
            var7 = var9.bind(var6)(var8, var7);
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 61:
            var1 = var2;
case 42:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 36;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestHome.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
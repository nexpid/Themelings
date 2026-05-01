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
    var _closure1_slot17 = var1;
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
    var _closure1_slot18 = var1;
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
    var _closure1_slot19 = var1;
    var1 = function HeaderWithBounties() {
        var1 = _closure1_slot15;
        var4 = undefined;
        var15 = var1.bind(var4)();
        var3 = _closure1_slot13;
        var2 = _closure1_slot14;
        var1 = {};
        var7 = _closure1_slot12;
        var6 = _closure1_slot19;
        var5 = {};
        var6 = var7.bind(var4)(var6, var5);
        var5 = new Array(4);
        var5[0] = var6;
        var9 = _closure1_slot13;
        var8 = _closure1_slot5;
        var6 = {};
        var10 = var15.sectionHeader;
        var7 = new Array(2);
        var7[0] = var10;
        var10 = var15.sectionHeaderRow;
        var7[1] = var10;
        var6['style'] = var7;
        var14 = _closure1_slot12;
        var16 = _closure1_slot0;
        var17 = _closure1_slot2;
        var10 = 19;
        var7 = var17[var10];
        var7 = var16.bind(var4)(var7);
        var12 = var7.Text;
        var7 = {};
        var13 = 'text-lg/bold';
        var7['variant'] = var13;
        var13 = 15;
        var18 = var17[var13];
        var18 = var16.bind(var4)(var18);
        var20 = var18.intl;
        var19 = var20.string;
        var18 = var17[var13];
        var18 = var16.bind(var4)(var18);
        var18 = var18.t;
        var18 = var18.qetVDw;
        var18 = var19.bind(var20)(var18);
        var7['children'] = var18;
        var7 = var14.bind(var4)(var12, var7);
        var12 = new Array(2);
        var12[0] = var7;
        var19 = _closure1_slot12;
        var7 = 20;
        var7 = var17[var7];
        var7 = var16.bind(var4)(var7);
        var18 = var7.PressableOpacity;
        var14 = {};
        var7 = _closure1_slot1;
        var20 = 21;
        var20 = var17[var20];
        var20 = var7.bind(var4)(var20);
        var14['onPress'] = var20;
        var20 = 14;
        var14['hitSlop'] = var20;
        var20 = var17[var13];
        var20 = var16.bind(var4)(var20);
        var22 = var20.intl;
        var21 = var22.string;
        var20 = var17[var13];
        var20 = var16.bind(var4)(var20);
        var20 = var20.t;
        var20 = var20.hvVgAZ;
        var20 = var21.bind(var22)(var20);
        var14['aria-label'] = var20;
        var20 = 'button';
        var14['accessibilityRole'] = var20;
        var22 = _closure1_slot12;
        var20 = 22;
        var20 = var17[var20];
        var20 = var16.bind(var4)(var20);
        var21 = var20.CircleInformationIcon;
        var20 = {};
        var23 = 'xs';
        var20['size'] = var23;
        var23 = 9;
        var23 = var17[var23];
        var23 = var7.bind(var4)(var23);
        var23 = var23.colors;
        var23 = var23.ICON_SUBTLE;
        var20['color'] = var23;
        var20 = var22.bind(var4)(var21, var20);
        var14['children'] = var20;
        var14 = var19.bind(var4)(var18, var14);
        var12[1] = var14;
        var6['children'] = var12;
        var6 = var9.bind(var4)(var8, var6);
        var5[1] = var6;
        var8 = _closure1_slot12;
        var6 = 23;
        var6 = var17[var6];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var6 = var8.bind(var4)(var7, var6);
        var5[2] = var6;
        var8 = _closure1_slot13;
        var7 = _closure1_slot5;
        var6 = {};
        var12 = var15.sectionHeader;
        var9 = new Array(2);
        var9[0] = var12;
        var12 = var15.sectionHeaderWithTag;
        var9[1] = var12;
        var6['style'] = var9;
        var14 = _closure1_slot12;
        var9 = var17[var10];
        var9 = var16.bind(var4)(var9);
        var12 = var9.Text;
        var9 = {'variant': 'text-xs/bold', 'color': 'text-subtle'};
        var15 = var15.sectionTag;
        var9['style'] = var15;
        var15 = var17[var13];
        var15 = var16.bind(var4)(var15);
        var19 = var15.intl;
        var18 = var19.string;
        var15 = var17[var13];
        var15 = var16.bind(var4)(var15);
        var15 = var15.t;
        var15 = var15.at6XRi;
        var15 = var18.bind(var19)(var15);
        var9['children'] = var15;
        var12 = var14.bind(var4)(var12, var9);
        var9 = new Array(2);
        var9[0] = var12;
        var12 = _closure1_slot12;
        var10 = var17[var10];
        var10 = var16.bind(var4)(var10);
        var11 = var10.Text;
        var10 = {};
        var14 = 'text-lg/semibold';
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
    var _closure1_slot20 = var1;
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
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var10['gap'] = var13;
    var4['sectionHeaderRow'] = var10;
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
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.shouldShowBounties;
            var6 = var1.onLayout;
            var4 = _closure1_slot12;
            var3 = _closure1_slot5;
            var2 = {};
            var2['onLayout'] = var6;
            var7 = _closure1_slot12;
            if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var6 = _closure1_slot19;
            _fun0002_ip = 6; continue _fun0002;
case 4:
            var6 = _closure1_slot20;
case 6:
            var1 = undefined;
            var5 = {};
            var5 = var7.bind(var1)(var6, var5);
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot16 = var4;
    var4 = var7.memo;
    var2 = function QuestHome(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var9 = var1.containerStyle;
            var11 = var1.isNavigationComplete;
            var20 = var1.scrollToQuestId;
            var _closure2_slot0 = var20;
            var3 = var1.filters;
            var _closure2_slot1 = var3;
            var25 = var1.sortMethod;
            var _closure2_slot2 = var25;
            var10 = var1.onClearFilters;
            var6 = undefined;
            var _closure2_slot13 = var6;
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var1 = 24;
            var1 = var23[var1];
            var2 = var22.bind(var6)(var1);
            var1 = var2.getIsEligibleForQuests;
            var18 = var1.bind(var2)();
            var _closure2_slot3 = var18;
            var1 = _closure1_slot15;
            var8 = var1.bind(var6)();
            var24 = _closure1_slot1;
            var1 = 25;
            var1 = var23[var1];
            var1 = var24.bind(var6)(var1);
            var1 = var1.bind(var6)();
            var21 = var1.bottom;
            var4 = 18;
            var1 = var23[var4];
            var12 = var22.bind(var6)(var1);
            var5 = var12.useFilteredQuests;
            var1 = var23[var4];
            var1 = var22.bind(var6)(var1);
            var1 = var1.QuestTabs;
            var2 = var1.ALL;
            var16 = _closure1_slot4;
            var14 = var16.useMemo;
            var13 = new Array(2);
            var13[0] = var3;
            var13[1] = var25;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot1;
                var1['filters'] = var3;
                var2 = _closure2_slot2;
                var1['sortMethod'] = var2;
                return var1;
            };
            var1 = var14.bind(var16)(var1, var13);
            var1 = var5.bind(var12)(var2, var1);
            var17 = var1.quests;
            var _closure2_slot4 = var17;
            var13 = var1.excludedQuests;
            var _closure2_slot5 = var13;
            var2 = var1.isFetchingCurrentQuests;
            var _closure2_slot6 = var2;
            var5 = var1.hasFetched;
            var _closure2_slot7 = var5;
            var14 = _closure1_slot4;
            var12 = var14.useRef;
            var1 = null;
            var12 = var12.bind(var14)(var1);
            var _closure2_slot8 = var12;
            var19 = _closure1_slot4;
            var16 = var19.useMemo;
            var14 = new Array(3);
            var14[0] = var20;
            var14[1] = var17;
            var14[2] = var13;
            var12 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 26;
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
                    if(var5) { _fun0004_ip = 9; continue _fun0004 }
case 10:
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
case 9:
                    return var2;
case 7:
                    return var1;
                }
            };
            var12 = var16.bind(var19)(var12, var14);
            var19 = _closure1_slot4;
            var16 = var19.useEffect;
            var14 = new Array(5);
            var14[0] = var20;
            var14[1] = var17;
            var14[2] = var13;
            var14[3] = var5;
            var14[4] = var2;
            var13 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                    var5 = _closure2_slot0;
                    var3 = '';
                    var2 = var3 !== var5;
case 11:
                    if(!var2) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                    var2 = _closure2_slot7;
case 13:
                    if(!var2) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                    var3 = _closure2_slot6;
                    var2 = !var3;
case 15:
                    if(!var2) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 26;
                    var3 = var5[var3];
                    var5 = undefined;
                    var9 = var6.bind(var5)(var3);
                    var8 = var9.findQuestOrReplacement;
                    var7 = _closure2_slot0;
                    var6 = _closure2_slot4;
                    var3 = _closure2_slot5;
                    var3 = var8.bind(var9)(var7, var6, var3);
                    var3 = var4 == var3;
                    if(!var3) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var4 = _closure2_slot8;
                    var6 = var4.current;
                    var4 = _closure2_slot0;
                    var3 = var6 !== var4;
case 19:
                    if(!var3) { _fun0005_ip = 17; continue _fun0005 }
case 21:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 27;
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
                    var9 = 28;
                    var9 = var6[var9];
                    var9 = var4.bind(var5)(var9);
                    var3['icon'] = var9;
                    var9 = 5000;
                    var3['toastDurationMs'] = var9;
                    var3 = var7.bind(var8)(var3);
                    var3 = 29;
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
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var16.bind(var19)(var13, var14);
            var13 = {};
            var13['scrollToIndex'] = var12;
            var12 = function(arg1) {
                var2 = arg1;
                var13 = var2.scrollToIndex;
                var _closure3_slot0 = var13;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 10;
                var2 = var4[var2];
                var12 = undefined;
                var5 = var3.bind(var12)(var2);
                var4 = var5.useStateFromStores;
                var2 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() {
                    var1 = _closure1_slot7;
                    var1 = var1.useReducedMotion;
                    return var1;
                };
                var14 = var4.bind(var5)(var3, var2);
                var _closure3_slot1 = var14;
                var4 = _closure1_slot4;
                var3 = var4.useRef;
                var2 = null;
                var8 = var3.bind(var4)(var2);
                var _closure3_slot2 = var8;
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
                var7 = _closure1_slot4;
                var6 = var7.useCallback;
                var5 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                        if(!var2) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                        var10 = var6[var5];
                        var2 = var4 != var8;
                        if(!var2) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                        var2 = var10 !== var8;
case 24:
                        if(var2) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                        var9 = _closure3_slot3;
                        var9 = var9.current;
                        var9 = var9.children;
                        var9 = var9[var10];
                        var2 = var4 == var9;
                        var3 = var9;
case 26:
                        if(var2) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                        var9 = var3.calculateVisibility;
                        var2 = var4 == var9;
case 28:
                        if(var2) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                        var2 = var3.calculateVisibility;
                        var2 = var2.bind(var3)();
case 30:
                        var5 = var5 + 1;
                        var2 = var6.length;
                        if(var5 < var2) { _fun0006_ip = 23; continue _fun0006 }
case 22:
                        return var1;
                    }
                };
                var3 = new Array(0);
                var3 = var6.bind(var7)(var5, var3);
                var _closure3_slot4 = var3;
                var10 = _closure1_slot4;
                var7 = var10.useCallback;
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
                var7 = var7.bind(var10)(var5, var6);
                var11 = _closure1_slot4;
                var10 = var11.useCallback;
                var6 = new Array(1);
                var6[0] = var3;
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
                var6 = var10.bind(var11)(var5, var6);
                var11 = _closure1_slot4;
                var10 = var11.useState;
                var5 = false;
                var11 = var10.bind(var11)(var5);
                var10 = _closure1_slot3;
                var5 = 2;
                var5 = var10.bind(var12)(var11, var5);
                var15 = var5[var4];
                var _closure3_slot5 = var15;
                var4 = 1;
                var4 = var5[var4];
                var _closure3_slot6 = var4;
                var11 = _closure1_slot4;
                var10 = var11.useCallback;
                var5 = function() {
                    var3 = _closure3_slot6;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var4 = new Array(0);
                var5 = var10.bind(var11)(var5, var4);
                var12 = _closure1_slot4;
                var11 = var12.useCallback;
                var10 = new Array(1);
                var10[0] = var3;
                var4 = function(arg1, arg2) {
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
                var4 = var11.bind(var12)(var4, var10);
                var16 = _closure1_slot4;
                var12 = var16.useCallback;
                var11 = new Array(1);
                var11[0] = var14;
                var10 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = _closure3_slot2;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0007_ip = 32; continue _fun0007 }
case 33:
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
case 32:
                        var1 = undefined;
                        return var1;
                    }
                };
                var12 = var12.bind(var16)(var10, var11);
                var _closure3_slot7 = var12;
                var16 = _closure1_slot4;
                var11 = var16.useCallback;
                var10 = new Array(1);
                var10[0] = var3;
                var3 = function(arg1) {
                    var2 = _closure3_slot3;
                    var2 = var2.current;
                    var3 = var2.parent;
                    var2 = arg1;
                    var2 = var2.nativeEvent;
                    var2 = var2.layout;
                    var2 = var2.height;
                    var3['firstItemOffset'] = var2;
                    var2 = _closure3_slot4;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var3 = var11.bind(var16)(var3, var10);
                var11 = _closure1_slot4;
                var10 = var11.useEffect;
                var9 = new Array(4);
                var9[0] = var15;
                var9[1] = var14;
                var9[2] = var13;
                var9[3] = var12;
                var1 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var2 = null;
                        var2 = var2 != var3;
                        if(!var2) { _fun0008_ip = 34; continue _fun0008 }
case 12:
                        var4 = _closure3_slot0;
                        var3 = -1;
                        var2 = var3 !== var4;
case 34:
                        if(!var2) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                        var2 = _closure3_slot5;
case 35:
                        if(!var2) { _fun0008_ip = 32; continue _fun0008 }
case 5:
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
case 32:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var10.bind(var11)(var1, var9);
                var1 = {};
                var1['scrollViewRef'] = var8;
                var1['handleListScroll'] = var7;
                var1['handleListLayout'] = var6;
                var1['handleListLoad'] = var5;
                var1['handleQuestCardLayout'] = var4;
                var1['handleHeaderLayout'] = var3;
                var1['visibilityRef'] = var2;
                return var1;
            };
            var19 = var12.bind(var6)(var13);
            var20 = var19.scrollViewRef;
            var _closure2_slot9 = var20;
            var13 = var19.handleListScroll;
            var14 = var19.handleListLayout;
            var12 = var19.handleListLoad;
            var16 = var19.handleQuestCardLayout;
            var _closure2_slot10 = var16;
            var16 = var19.handleHeaderLayout;
            var _closure2_slot11 = var16;
            var19 = var19.visibilityRef;
            var _closure2_slot12 = var19;
            var26 = _closure1_slot8;
            var19 = function(arg1) {
                var2 = arg1;
                var1 = var2.getUtmCurrentContext;
                var1 = var1.bind(var2)();
                return var1;
            };
            var27 = var26.bind(var6)(var19);
            var19 = 30;
            var19 = var23[var19];
            var24 = var24.bind(var6)(var19);
            var19 = {};
            var26 = 31;
            var28 = var23[var26];
            var28 = var22.bind(var6)(var28);
            var28 = var28.ImpressionNames;
            var28 = var28.QUEST_HOME;
            var19['name'] = var28;
            var26 = var23[var26];
            var26 = var22.bind(var6)(var26);
            var26 = var26.ImpressionTypes;
            var26 = var26.VIEW;
            var19['type'] = var26;
            var26 = {};
            var28 = var27.utmSourceCurrent;
            var26['utm_source_current'] = var28;
            var28 = var27.utmMediumCurrent;
            var26['utm_medium_current'] = var28;
            var28 = var27.utmCampaignCurrent;
            var26['utm_campaign_current'] = var28;
            var27 = var27.utmContentCurrent;
            var26['utm_content_current'] = var27;
            var27 = var23[var4];
            var27 = var22.bind(var6)(var27);
            var27 = var27.QuestTabs;
            var27 = var27.ALL;
            var26['tab'] = var27;
            var19['properties'] = var26;
            var19 = var24.bind(var6)(var19);
            var27 = _closure1_slot4;
            var26 = var27.useEffect;
            var24 = new Array(1);
            var24[0] = var18;
            var19 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0009_ip = 18; continue _fun0009 }
case 37:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 32;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var2 = var1.QuestHomeOpenTriggerPoint;
                    var1 = var2.trigger;
                    var1 = var1.bind(var2)();
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var19 = var26.bind(var27)(var19, var24);
            var26 = _closure1_slot4;
            var24 = var26.useEffect;
            var19 = new Array(4);
            var19[0] = var3;
            var19[1] = var25;
            var19[2] = var5;
            var19[3] = var20;
            var5 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var3 = var2.current;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0010_ip = 38; continue _fun0010 }
case 39:
                    var2 = _closure2_slot7;
case 38:
                    if(!var2) { _fun0010_ip = 23; continue _fun0010 }
case 11:
                    var1 = _closure2_slot9;
                    var3 = var1.current;
                    var2 = var3.scrollToOffset;
                    var1 = {'offset': 0, 'animated': false};
                    var1 = var2.bind(var3)(var1);
case 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var24.bind(var26)(var5, var19);
            var5 = var23[var4];
            var24 = var22.bind(var6)(var5);
            var19 = var24.useQuestHomeSortingFilteringAnalytics;
            var5 = {};
            var5['selectedSortMethod'] = var25;
            var5['selectedFilters'] = var3;
            var25 = var17.length;
            var5['numQuestsVisible'] = var25;
            var5 = var19.bind(var24)(var5);
            var5 = 33;
            var5 = var23[var5];
            var24 = var22.bind(var6)(var5);
            var19 = var24.useVirtualCurrencyMobileEnabled;
            var5 = {};
            var25 = 'quest_home_bounties';
            var5['location'] = var25;
            var5 = var19.bind(var24)(var5);
            var5 = var5.enabled;
            var19 = 34;
            var19 = var23[var19];
            var19 = var22.bind(var6)(var19);
            var25 = var19.QuestHomeBountiesExperiment;
            var24 = var25.useConfig;
            var19 = {};
            var26 = _closure1_slot9;
            var26 = var26.QUEST_HOME_MOBILE;
            var19['location'] = var26;
            var19 = var24.bind(var25)(var19);
            var19 = var19.enabled;
            var4 = var23[var4];
            var22 = var22.bind(var6)(var4);
            var4 = var22.useFetchQuestHomeBounties;
            var4 = var4.bind(var22)();
            var4 = var4.isLoading;
            if(!var5) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var5 = var19;
case 40:
            if(!var5) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var22 = var3.length;
            var19 = 0;
            var5 = var19 === var22;
case 42:
            _closure2_slot13 = var5;
            var23 = _closure1_slot4;
            var22 = var23.useCallback;
            var19 = new Array(2);
            var19[0] = var5;
            var19[1] = var16;
            var16 = function() {
                var4 = _closure1_slot12;
                var3 = _closure1_slot16;
                var2 = {};
                var5 = _closure2_slot13;
                var2['shouldShowBounties'] = var5;
                var1 = _closure2_slot11;
                var2['onLayout'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var16 = var22.bind(var23)(var16, var19);
            var1 = null;
            if(!var18) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            if(!var11) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            if(!var5) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            if(var4) { _fun0003_ip = 46; continue _fun0003 }
case 48:
            if(!var2) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var4 = var17.length;
            var2 = 0;
            if(!(var2 !== var4)) { _fun0003_ip = 46; continue _fun0003 }
case 50:
            var2 = var17.length;
            var4 = 0;
            if(!(var4 !== var2)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var11 = _closure1_slot12;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var2 = 35;
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
                var2 = 36;
                var2 = var9[var2];
                var4 = undefined;
                var2 = var8.bind(var4)(var2);
                var3 = var2.QuestContentImpressionTrackerNative;
                var2 = {};
                var2['questOrQuests'] = var1;
                var7 = 37;
                var11 = var9[var7];
                var11 = var8.bind(var4)(var11);
                var11 = var11.QuestContent;
                var11 = var11.QUEST_HOME_MOBILE;
                var2['questContent'] = var11;
                var2['questContentPosition'] = var10;
                var10 = false;
                var2['trackGuildAndChannelMetadata'] = var10;
                var10 = _closure2_slot12;
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
                    var1 = 38;
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
                    var6 = 37;
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
            var17 = 38;
            var17 = var19[var17];
            var17 = var18.bind(var6)(var17);
            var17 = var17.ESTIMATED_CARD_HEIGHT;
            var2['estimatedItemSize'] = var17;
            var17 = false;
            var2['showsHorizontalScrollIndicator'] = var17;
            var2['ListHeaderComponent'] = var16;
            var15 = function CellRendererComponent(arg1) {
                var6 = arg1;
                var _closure3_slot0 = var6;
                var4 = _closure1_slot12;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 35;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.CellContainer;
                var1 = {};
                var8 = var1;
                var7 = var6;
                var6 = copyDataProperties(var8, var7);
                var6 = function onLayout(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var3 = arg1;
                        var5 = _closure2_slot4;
                        var2 = _closure3_slot0;
                        var2 = var2.index;
                        var2 = var5[var2];
                        var5 = null;
                        if(!(var5 != var2)) { _fun0011_ip = 54; continue _fun0011 }
case 55:
                        var5 = _closure2_slot10;
                        var4 = var2.id;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var3, var4);
case 54:
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
            _fun0003_ip = 56; continue _fun0003;
case 52:
            var3 = var3.length;
            if(!(var4 !== var3)) { _fun0003_ip = 57; continue _fun0003 }
case 58:
            var5 = _closure1_slot12;
            var4 = _closure1_slot18;
            var3 = {};
            var3['onClearFilters'] = var10;
            var3 = var5.bind(var6)(var4, var3);
            _fun0003_ip = 59; continue _fun0003;
case 57:
            var10 = _closure1_slot12;
            var5 = _closure1_slot17;
            var4 = {};
            var3 = var10.bind(var6)(var5, var4);
case 59:
            var2 = var3;
case 56:
            _fun0003_ip = 60; continue _fun0003;
case 46:
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
case 60:
            var1 = var2;
case 44:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 39;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestHome.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
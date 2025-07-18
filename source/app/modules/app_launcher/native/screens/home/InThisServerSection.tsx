// app/modules/app_launcher/native/screens/home/InThisServerSection.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var13 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = function AppInThisServer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.appItem;
            var2 = var2.onAppSelected;
            var _closure2_slot0 = var2;
            var2 = _closure1_slot7;
            var5 = undefined;
            var11 = var2.bind(var5)();
            var1 = var1.application;
            var _closure2_slot1 = var1;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 10;
            var2 = var8[var2];
            var4 = var3.bind(var5)(var2);
            var2 = var4.getAppLauncherIconSource;
            var12 = var2.bind(var4)(var1);
            var4 = _closure1_slot6;
            var2 = 11;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.PressableScale;
            var2 = {};
            var6 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0002_ip = 24; continue _fun0002 }
 16:
                    var3 = _closure2_slot1;
                    var2 = var4 != var3;
 24:
                    if(!var2) { _fun0002_ip = 88; continue _fun0002 }
 27:
                    var3 = _closure2_slot0;
                    var2 = {};
                    var1 = _closure2_slot1;
                    var2['application'] = var1;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 12;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.AppLauncherSectionName;
                    var4 = var4.APPS_IN_THIS_SERVER;
                    var2['sectionName'] = var4;
                    var1 = var3.bind(var1)(var2);
 88:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['onPress'] = var6;
            var6 = var11.appCardContainer;
            var2['style'] = var6;
            var8 = null;
            var6 = var8 != var12;
            if(!var6) { _fun0001_ip = 184; continue _fun0001 }
 128:
            var10 = _closure1_slot5;
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 13;
            var6 = var13[var6];
            var9 = var9.bind(var5)(var6);
            var6 = {};
            var6['iconSource'] = var12;
            var11 = var11.iconContainer;
            var6['wrapperStyle'] = var11;
            var11 = 36;
            var6['iconSize'] = var11;
            var8 = var10.bind(var5)(var9, var6);
 184:
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot5;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 7;
            var7 = var10[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-md/semibold', 'color': 'header-primary', 'lineClamp': 1};
            var10 = var1.name;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var1.id;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = native4;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.View;
    var _closure1_slot3 = var5;
    var2 = var2.ScrollView;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot5 = var5;
    var2 = var2.jsxs;
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var8 = var9.createStyles;
    var5 = {};
    var2 = {};
    var10 = 16;
    var2['marginBottom'] = var10;
    var5['container'] = var2;
    var2 = {};
    var12 = 'center';
    var2['justifyContent'] = var12;
    var5['headerContainer'] = var2;
    var2 = {'position': 'absolute', 'right': 0};
    var5['viewAll'] = var2;
    var2 = 8;
    var10 = {'marginTop': 8, 'overflow': 'visible'};
    var5['scrollView'] = var10;
    var10 = {};
    var10['gap'] = var2;
    var5['scrollViewContentContainer'] = var10;
    var10 = {};
    var11 = 4;
    var14 = var7[var11];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.CARD_PRIMARY_BG;
    var10['backgroundColor'] = var14;
    var14 = var7[var11];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var10['borderRadius'] = var14;
    var11 = var7[var11];
    var11 = var13.bind(var1)(var11);
    var11 = var11.shadows;
    var16 = var11.SHADOW_LOW;
    var17 = var10;
    var11 = copyDataProperties(var17, var16);
    var13 = 12;
    var11 = 'paddingLeft';
    var10[var11] = var13;
    var11 = 'paddingRight';
    var10[var11] = var13;
    var11 = 'paddingVertical';
    var10[var11] = var13;
    var13 = 'row';
    var11 = 'flexDirection';
    var10[var11] = var13;
    var11 = 'justifyContent';
    var10[var11] = var12;
    var11 = 'alignItems';
    var10[var11] = var12;
    var5['appCardContainer'] = var10;
    var10 = {'marginEnd': 12, 'justifyContent': 'space-around'};
    var5['iconContainer'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot7 = var5;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/app_launcher/native/screens/home/InThisServerSection.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function InThisServerSection(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var7 = var1.items;
            var2 = var1.onAppSelected;
            var _closure2_slot0 = var2;
            var1 = var1.onViewAllSelected;
            var _closure2_slot1 = var1;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot4 = var4;
            var1 = _closure1_slot7;
            var10 = var1.bind(var4)();
            var3 = new Array(0);
            var _closure2_slot3 = var3;
            var1 = var7.length;
            var2 = 0;
            if(!(var2 !== var1)) { _fun0003_ip = 604; continue _fun0003 }
 74:
            var5 = var7.forEach;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = arg1;
                    var5 = var3.type;
                    var7 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 5;
                    var4 = var1[var6];
                    var1 = undefined;
                    var4 = var7.bind(var1)(var4);
                    var4 = var4.AppLauncherHomeListItemType;
                    var4 = var4.RECOMMENDATION_APP;
                    if(!(var5 === var4)) { _fun0004_ip = 66; continue _fun0004 }
 49:
                    var5 = _closure2_slot3;
                    var4 = var5.push;
                    var4 = var4.bind(var5)(var3);
 66:
                    var4 = var3.type;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.AppLauncherHomeListItemType;
                    var2 = var2.VIEW_ALL;
                    if(!(var4 === var2)) { _fun0004_ip = 111; continue _fun0004 }
 104:
                    _closure2_slot2 = var3;
 111:
                    return var1;
                }
            };
            var1 = var5.bind(var7)(var1);
            var1 = var3.slice;
            var22 = 8;
            var3 = var1.bind(var3)(var2, var22);
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot5;
                var4 = _closure1_slot8;
                var3 = {};
                var3['appItem'] = var1;
                var2 = _closure2_slot0;
                var3['onAppSelected'] = var2;
                var1 = var1.application;
                var2 = var1.id;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.isNotNullish;
            var9 = var2.bind(var3)(var1);
            var2 = _closure2_slot2;
            var12 = null;
            var3 = var12 == var2;
            var1 = undefined;
            if(var3) { _fun0003_ip = 196; continue _fun0003 }
 173:
            var5 = var2.applications;
            var3 = var5.map;
            var2 = function(arg1) {
                var1 = arg1;
                return var1;
            };
            var1 = var3.bind(var5)(var2);
 196:
            _closure2_slot4 = var1;
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var10.container;
            var1['style'] = var5;
            var7 = _closure1_slot6;
            var5 = {};
            var8 = var10.headerContainer;
            var5['style'] = var8;
            var13 = _closure1_slot5;
            var19 = _closure1_slot0;
            var14 = _closure1_slot2;
            var15 = 7;
            var8 = var14[var15];
            var8 = var19.bind(var4)(var8);
            var11 = var8.Text;
            var8 = {'variant': 'text-lg/bold', 'color': 'header-primary'};
            var17 = var14[var22];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var14 = var14[var22];
            var14 = var19.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.oJyzCg;
            var14 = var17.bind(var18)(var14);
            var8['children'] = var14;
            var11 = var13.bind(var4)(var11, var8);
            var8 = new Array(2);
            var8[0] = var11;
            var11 = _closure2_slot2;
            var11 = var12 != var11;
            if(!var11) { _fun0003_ip = 511; continue _fun0003 }
 354:
            var14 = _closure1_slot5;
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var12 = 9;
            var12 = var18[var12];
            var12 = var21.bind(var4)(var12);
            var13 = var12.PressableOpacity;
            var12 = {};
            var17 = var10.viewAll;
            var12['style'] = var17;
            var16 = function onPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0005_ip = 26; continue _fun0005 }
 16:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var1 = var3.bind(var2)();
 26:
                    return var1;
                }
            };
            var12['onPress'] = var16;
            var16 = 'button';
            var12['accessibilityRole'] = var16;
            var17 = _closure1_slot5;
            var15 = var18[var15];
            var15 = var21.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-sm/medium', 'color': 'text-brand'};
            var19 = var18[var22];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var22];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18./qG8v7;
            var18 = var19.bind(var20)(var18);
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var12['children'] = var15;
            var11 = var14.bind(var4)(var13, var12);
 511:
            var8[1] = var11;
            var5['children'] = var8;
            var7 = var7.bind(var4)(var2, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot4;
            var6 = {};
            var11 = var10.scrollView;
            var6['style'] = var11;
            var10 = var10.scrollViewContentContainer;
            var6['contentContainerStyle'] = var10;
            var10 = true;
            var6['horizontal'] = var10;
            var10 = false;
            var6['showsHorizontalScrollIndicator'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 604:
            var1 = null;
            return var1;
        }
    };
    var3['default'] = var4;
    var3['IN_THIS_SERVER_ITEM_MAX'] = var2;
    return var1;
})();
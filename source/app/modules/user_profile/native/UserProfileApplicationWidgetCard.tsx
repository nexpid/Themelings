// app/modules/user_profile/native/UserProfileApplicationWidgetCard.tsx
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
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot4 = var7;
    var7 = var4.Pressable;
    var _closure1_slot5 = var7;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': 16, 'height': 16, 'borderRadius': null, 'overflow': 'hidden'};
    var10 = 6;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var9['borderRadius'] = var13;
    var4['appIcon'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_4;
    var9['gap'] = var13;
    var4['header'] = var9;
    var9 = {};
    var9['borderBottomWidth'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9['borderBottomColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_24;
    var9['marginBottom'] = var12;
    var4['divider'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_4;
    var9['gap'] = var10;
    var4['stillSyncing'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileApplicationWidgetCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileApplicationWidgetCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.userId;
            var _closure2_slot0 = var3;
            var20 = var1.widget;
            var14 = var1.cardStyle;
            var10 = var1.isFirstWidget;
            var5 = undefined;
            if(!(var10 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = false;
case 2:
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var1 = _closure1_slot11;
            var11 = var1.bind(var5)();
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 13;
            var4 = var1[var2];
            var12 = var7.bind(var5)(var4);
            var9 = var12.useStateFromStores;
            var4 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var1 = _closure1_slot7;
                var1 = var1.locale;
                return var1;
            };
            var4 = var9.bind(var12)(var6, var4);
            _closure2_slot1 = var4;
            var12 = _closure1_slot3;
            var9 = var12.useMemo;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.createCompactNumberFormat;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var9.bind(var12)(var4, var6);
            var2 = var1[var2];
            var12 = var7.bind(var5)(var2);
            var9 = var12.useStateFromStores;
            var2 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getId;
                var2 = var1.bind(var2)();
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var6 = var9.bind(var12)(var6, var2);
            var9 = _closure1_slot1;
            var2 = 15;
            var2 = var1[var2];
            var9 = var9.bind(var5)(var2);
            var2 = 'UserProfileCard';
            var19 = var9.bind(var5)(var2);
            var2 = 16;
            var1 = var1[var2];
            var9 = var7.bind(var5)(var1);
            var7 = var9.useGetOrFetchApplication;
            var1 = var20.applicationId;
            var12 = var7.bind(var9)(var1);
            var13 = null;
            var1 = var13 == var12;
            var23 = undefined;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var12.getIconURL;
            var23 = var1.bind(var12)(var2);
case 4:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 17;
            var1 = var7[var1];
            var7 = var2.bind(var5)(var1);
            var2 = var7.useGame;
            var9 = var13 == var12;
            var1 = undefined;
            if(var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var12.getCanonicalGameId;
            var1 = var9.bind(var12)();
case 6:
            var1 = var2.bind(var7)(var1);
            var9 = var1.data;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 18;
            var1 = var7[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var7 = 'UserProfileApplicationWidgetCard';
            var1['location'] = var7;
            var12 = var13 == var9;
            var7 = undefined;
            if(var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var9.id;
case 8:
            var1['applicationId'] = var7;
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var7 = 19;
            var7 = var18[var7];
            var7 = var16.bind(var5)(var7);
            var7 = var7.GameProfileSources;
            var7 = var7.UserProfileApplicationWidget;
            var1['source'] = var7;
            var1['sourceUserId'] = var3;
            var7 = true;
            var1['trackEntryPointImpression'] = var7;
            var7 = var2.bind(var5)(var1);
            _closure2_slot2 = var7;
            var2 = _closure1_slot1;
            var1 = 20;
            var1 = var18[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var20.applicationId;
            var1 = var2.bind(var5)(var3, var1);
            var15 = var1.surfaceConfigs;
            var3 = var1.resolutionContext;
            var2 = var1.isLoading;
            var1 = var1.hasIdentity;
            var9 = 21;
            var12 = var18[var9];
            var12 = var16.bind(var5)(var12);
            var12 = var12.ApplicationWidgetConfigSurface;
            var12 = var12.WIDGET_TOP;
            var12 = var15[var12];
            var9 = var18[var9];
            var9 = var16.bind(var5)(var9);
            var9 = var9.ApplicationWidgetConfigSurface;
            var9 = var9.WIDGET_BOTTOM;
            var15 = var15[var9];
            var16 = var13 != var23;
            var9 = null;
            if(!var16) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var21 = _closure1_slot9;
            var18 = _closure1_slot4;
            var16 = {};
            var22 = {};
            var22['uri'] = var23;
            var16['source'] = var22;
            var22 = var11.appIcon;
            var16['style'] = var22;
            var9 = var21.bind(var5)(var18, var16);
case 10:
            if(!var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            if(var1) { _fun0001_ip = 12; continue _fun0001 }
case 15:
            var6 = _closure1_slot9;
            var25 = _closure1_slot1;
            var29 = _closure1_slot2;
            var1 = 22;
            var1 = var29[var1];
            var2 = var25.bind(var5)(var1);
            var1 = {};
            var1['style'] = var14;
            var28 = _closure1_slot0;
            var16 = 23;
            var16 = var29[var16];
            var18 = var28.bind(var5)(var16);
            var16 = var18.getWidgetTitle;
            var16 = var16.bind(var18)(var20);
            var1['title'] = var16;
            var1['titleLeadingIcon'] = var9;
            var21 = _closure1_slot10;
            var18 = _closure1_slot6;
            var16 = {};
            var22 = var11.stillSyncing;
            var16['style'] = var22;
            var22 = 24;
            var22 = var29[var22];
            var22 = var28.bind(var5)(var22);
            var23 = var22.HourglassIcon;
            var22 = {};
            var24 = 'xs';
            var22['size'] = var24;
            var24 = 6;
            var24 = var29[var24];
            var24 = var25.bind(var5)(var24);
            var24 = var24.colors;
            var24 = var24.TEXT_MUTED;
            var22['color'] = var24;
            var23 = var6.bind(var5)(var23, var22);
            var22 = new Array(2);
            var22[0] = var23;
            var23 = 25;
            var23 = var29[var23];
            var23 = var28.bind(var5)(var23);
            var24 = var23.Text;
            var23 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var25 = 26;
            var26 = var29[var25];
            var26 = var28.bind(var5)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var29[var25];
            var25 = var28.bind(var5)(var25);
            var25 = var25.t;
            var25 = var25.z5K4Uv;
            var25 = var26.bind(var27)(var25);
            var23['children'] = var25;
            var23 = var6.bind(var5)(var24, var23);
            var22[1] = var23;
            var16['children'] = var22;
            var16 = var21.bind(var5)(var18, var16);
            var1['children'] = var16;
            var1 = var6.bind(var5)(var2, var1);
            return var1;
case 12:
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 14;
            var1 = var18[var1];
            var2 = var16.bind(var5)(var1);
            var1 = var2.bindResolveFieldValue;
            var6 = var1.bind(var2)(var3);
            var3 = _closure1_slot10;
            var2 = _closure1_slot5;
            var1 = {};
            var21 = var11.header;
            var1['style'] = var21;
            var17 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var4 = var1 == var3;
                    var3 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var2 = _closure2_slot2;
                    var1 = var2.bind(var3)();
case 16:
                    return var1;
                }
            };
            var1['onPress'] = var17;
            var7 = var13 == var7;
            var1['disabled'] = var7;
            var7 = 'button';
            var1['accessibilityRole'] = var7;
            var21 = 23;
            var7 = var18[var21];
            var17 = var16.bind(var5)(var7);
            var7 = var17.getWidgetTitle;
            var7 = var7.bind(var17)(var20);
            var1['accessibilityLabel'] = var7;
            var7 = new Array(2);
            var7[0] = var9;
            var17 = _closure1_slot9;
            var9 = 25;
            var9 = var18[var9];
            var9 = var16.bind(var5)(var9);
            var16 = var9.Text;
            var9 = {};
            var18 = 'text-sm/semibold';
            if(!var19) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var18 = 'text-sm/medium';
case 18:
            var9['variant'] = var18;
            var18 = 'text-default';
            if(!var19) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var18 = 'text-strong';
case 20:
            var9['color'] = var18;
            var18 = 1;
            var9['lineClamp'] = var18;
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var21];
            var19 = var19.bind(var5)(var18);
            var18 = var19.getWidgetTitle;
            var18 = var18.bind(var19)(var20);
            var9['children'] = var18;
            var9 = var17.bind(var5)(var16, var9);
            var7[1] = var9;
            var1['children'] = var7;
            var2 = var3.bind(var5)(var2, var1);
            var1 = {};
            var7 = var13 == var12;
            var3 = undefined;
            if(var7) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var3 = var12.layout;
case 22:
            var1['layoutName'] = var3;
            var1['header'] = var2;
            var1['topConfig'] = var12;
            var1['resolveFieldValue'] = var6;
            var1['numberFormat'] = var4;
            var2 = var1.layoutName;
            var18 = var1.header;
            var17 = var1.topConfig;
            var16 = var1.resolveFieldValue;
            var7 = var1.numberFormat;
            var1 = var13 == var17;
            var9 = null;
            if(var1) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var19 = 7;
            var1 = var1[var19];
            var1 = var3.bind(var5)(var1);
            var1 = var1.ApplicationWidgetLayoutName;
            var1 = var1.WIDGET_TOP_HERO;
            if(!(var1 !== var2)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var19];
            var1 = var3.bind(var5)(var1);
            var1 = var1.ApplicationWidgetLayoutName;
            var1 = var1.WIDGET_TOP_CONTAINED;
            var9 = null;
            if(!(var1 === var2)) { _fun0001_ip = 24; continue _fun0001 }
case 28:
            var3 = _closure1_slot9;
            var2 = _closure1_slot1;
            var19 = _closure1_slot2;
            var1 = 9;
            var1 = var19[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var1['header'] = var18;
            var1['topConfig'] = var17;
            var1['resolveFieldValue'] = var16;
            var1['numberFormat'] = var7;
            var9 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 24; continue _fun0001;
case 26:
            var3 = _closure1_slot9;
            var2 = _closure1_slot1;
            var19 = _closure1_slot2;
            var1 = 8;
            var1 = var19[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var1['header'] = var18;
            var1['topConfig'] = var17;
            var1['resolveFieldValue'] = var16;
            var1['numberFormat'] = var7;
            var9 = var3.bind(var5)(var2, var1);
case 24:
            var1 = var13 == var15;
            var2 = undefined;
            if(var1) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var2 = var15.layout;
case 29:
            var1 = var13 == var15;
            var7 = null;
            if(var1) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var16 = 7;
            var1 = var1[var16];
            var1 = var3.bind(var5)(var1);
            var1 = var1.ApplicationWidgetLayoutName;
            var1 = var1.WIDGET_BOTTOM_STATS;
            if(!(var1 !== var2)) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var16];
            var1 = var3.bind(var5)(var1);
            var1 = var1.ApplicationWidgetLayoutName;
            var1 = var1.WIDGET_BOTTOM_PROGRESS;
            if(!(var1 !== var2)) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var16];
            var1 = var3.bind(var5)(var1);
            var1 = var1.ApplicationWidgetLayoutName;
            var1 = var1.WIDGET_BOTTOM_COLLECTION;
            var7 = null;
            if(!(var1 === var2)) { _fun0001_ip = 31; continue _fun0001 }
case 37:
            var3 = _closure1_slot9;
            var2 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 12;
            var1 = var16[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var1['bottomConfig'] = var15;
            var1['resolveFieldValue'] = var6;
            var7 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 31; continue _fun0001;
case 35:
            var3 = _closure1_slot9;
            var2 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 11;
            var1 = var16[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var1['bottomConfig'] = var15;
            var1['resolveFieldValue'] = var6;
            var7 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 31; continue _fun0001;
case 33:
            var3 = _closure1_slot9;
            var2 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 10;
            var1 = var16[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var1['bottomConfig'] = var15;
            var1['resolveFieldValue'] = var6;
            var1['numberFormat'] = var4;
            var7 = var3.bind(var5)(var2, var1);
case 31:
            var2 = var13 == var9;
            var1 = null;
            if(var2) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var2 = var13 == var7;
            var1 = null;
            if(var2) { _fun0001_ip = 38; continue _fun0001 }
case 40:
            var4 = _closure1_slot10;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 22;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var6 = new Array(2);
            var6[0] = var14;
            if(!var10) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var14 = var13 == var12;
            var13 = undefined;
            if(var14) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var13 = var12.layout;
case 43:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = 7;
            var12 = var15[var12];
            var12 = var14.bind(var5)(var12);
            var12 = var12.ApplicationWidgetLayoutName;
            var12 = var12.WIDGET_TOP_HERO;
            var10 = var13 === var12;
case 41:
            if(!var10) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var12 = {};
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 8;
            var13 = var15[var13];
            var13 = var14.bind(var5)(var13);
            var13 = var13.HERO_IMAGE_UNCLIPPED_TOP_BLEED;
            var12['marginTop'] = var13;
            var10 = var12;
case 45:
            var6[1] = var10;
            var2['style'] = var6;
            var6 = new Array(3);
            var6[0] = var9;
            var10 = _closure1_slot9;
            var9 = _closure1_slot6;
            var8 = {};
            var11 = var11.divider;
            var8['style'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var6[1] = var8;
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 38:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
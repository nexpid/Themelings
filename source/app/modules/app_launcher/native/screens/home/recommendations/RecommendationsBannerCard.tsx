// app/modules/app_launcher/native/screens/home/recommendations/RecommendationsBannerCard.tsx
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
    var12 = 0;
    var7 = var6[var12];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'black';
    var9['backgroundColor'] = var10;
    var4['mediaBackground'] = var9;
    var9 = {};
    var10 = 5;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_SURFACE_RAISED;
    var9['backgroundColor'] = var13;
    var13 = '100%';
    var9['width'] = var13;
    var13 = 'hidden';
    var9['overflow'] = var13;
    var4['container'] = var9;
    var9 = {'width': '100%', 'height': 106, 'overflow': 'hidden'};
    var4['banner'] = var9;
    var9 = {'padding': null, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['padding'] = var13;
    var4['appDetailsContainer'] = var9;
    var9 = {'marginLeft': null, 'flexDirection': 'column', 'flexGrow': 1, 'flexShrink': 1};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['marginLeft'] = var13;
    var4['appDetails'] = var9;
    var9 = {};
    var9['flexShrink'] = var12;
    var4['appIconContainer'] = var9;
    var9 = {'position': 'absolute', 'display': 'flex'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9['gap'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['right'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['top'] = var12;
    var12 = 'flex-end';
    var9['alignItems'] = var12;
    var4['notifsContainer'] = var9;
    var9 = {};
    var4['badge'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9['paddingVertical'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.REDESIGN_BUTTON_SECONDARY_BACKGROUND;
    var9['backgroundColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var9['borderRadius'] = var10;
    var4['promotedLabelWrapper'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/home/recommendations/RecommendationsBannerCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function RecommendationsBannerCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var12 = var2.style;
            var10 = var2.application;
            var _closure2_slot0 = var10;
            var8 = var2.onPress;
            var7 = var2.isFirst;
            var6 = var2.isLast;
            var1 = var2.isLandscape;
            var22 = var2.showsPromoted;
            var5 = undefined;
            if(!(var22 === var5)) { _fun0001_ip = 56; continue _fun0001 }
 54:
            var22 = false;
 56:
            var19 = var2.overrideImageUrl;
            var4 = _closure1_slot8;
            var17 = var4.bind(var5)();
            if(var22) { _fun0001_ip = 107; continue _fun0001 }
 76:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 6;
            var4 = var11[var4];
            var9 = var9.bind(var5)(var4);
            var4 = var9.isPromotedApplication;
            var22 = var4.bind(var9)(var10);
 107:
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var23 = 6;
            var4 = var4[var23];
            var9 = var9.bind(var5)(var4);
            var4 = var9.getShelfBadgeTypeIfActive;
            var25 = var4.bind(var9)(var10);
            var11 = _closure1_slot3;
            var9 = var11.useEffect;
            var4 = var10.bot;
            var15 = null;
            var14 = var15 == var4;
            var13 = undefined;
            if(var14) { _fun0001_ip = 169; continue _fun0001 }
 164:
            var13 = var4.id;
 169:
            var4 = new Array(1);
            var4[0] = var13;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = _closure2_slot0;
                    var6 = var2.bot;
                    var5 = null;
                    var7 = var5 == var6;
                    var2 = undefined;
                    if(var7) { _fun0002_ip = 54; continue _fun0002 }
 49:
                    var2 = var6.id;
 54:
                    if(!(var5 == var2)) { _fun0002_ip = 62; continue _fun0002 }
 58:
                    var2 = _closure1_slot5;
 62:
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var3 = var9.bind(var11)(var3, var4);
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var14 = 8;
            var3 = var3[var14];
            var9 = var4.bind(var5)(var3);
            var4 = var9.getApplicationIconSource;
            var3 = {};
            var11 = var10.id;
            var3['id'] = var11;
            var11 = var10.icon;
            var3['icon'] = var11;
            var11 = var10.bot;
            var3['bot'] = var11;
            var11 = true;
            var3['botIconFirst'] = var11;
            var9 = var4.bind(var9)(var3);
            if(var1) { _fun0001_ip = 1063; continue _fun0001 }
 265:
            var4 = _closure1_slot7;
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 10;
            var1 = var11[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.PressableOpacity;
            var1 = {};
            var13 = var17.container;
            var11 = new Array(3);
            var11[0] = var13;
            var13 = {};
            var16 = var14;
            if(!var7) { _fun0001_ip = 320; continue _fun0001 }
 318:
            var16 = 0;
 320:
            var13['marginTop'] = var16;
            if(!var6) { _fun0001_ip = 329; continue _fun0001 }
 327:
            var14 = 0;
 329:
            var13['marginBottom'] = var14;
            var11[1] = var13;
            var11[2] = var12;
            var1['style'] = var11;
            var1['onPress'] = var8;
            var13 = _closure1_slot7;
            var12 = _closure1_slot4;
            var11 = {};
            var14 = var17.banner;
            var11['style'] = var14;
            var18 = _closure1_slot6;
            var16 = _closure1_slot1;
            var20 = _closure1_slot2;
            var14 = 11;
            var14 = var20[var14];
            var16 = var16.bind(var5)(var14);
            var14 = {};
            var21 = var10.bot;
            var14['applicationBot'] = var21;
            var21 = _closure1_slot0;
            var20 = var20[var23];
            var21 = var21.bind(var5)(var20);
            var20 = var21.isEmbeddedApp;
            var20 = var20.bind(var21)(var10);
            var14['applicationEmbedded'] = var20;
            var20 = var10.id;
            var14['applicationId'] = var20;
            var21 = var10.icon;
            var23 = var15 != var21;
            var20 = undefined;
            if(!var23) { _fun0001_ip = 461; continue _fun0001 }
 458:
            var20 = var21;
 461:
            var14['applicationIcon'] = var20;
            var14['overrideImageUrl'] = var19;
            var16 = var18.bind(var5)(var16, var14);
            var14 = new Array(2);
            var14[0] = var16;
            if(var22) { _fun0001_ip = 529; continue _fun0001 }
 488:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var16 = 12;
            var16 = var19[var16];
            var16 = var18.bind(var5)(var16);
            var16 = var16.EmbeddedActivityLabelTypes;
            var18 = var16.NONE;
            var16 = null;
            if(!(var25 !== var18)) { _fun0001_ip = 747; continue _fun0001 }
 529:
            var20 = _closure1_slot7;
            var19 = _closure1_slot4;
            var18 = {};
            var21 = var17.notifsContainer;
            var18['style'] = var21;
            var24 = _closure1_slot6;
            var23 = _closure1_slot1;
            var26 = _closure1_slot2;
            var21 = 13;
            var21 = var26[var21];
            var23 = var23.bind(var5)(var21);
            var21 = {};
            var21['labelType'] = var25;
            var25 = var17.badge;
            var21['replacementStyles'] = var25;
            var23 = var24.bind(var5)(var23, var21);
            var21 = new Array(2);
            var21[0] = var23;
            if(!var22) { _fun0001_ip = 733; continue _fun0001 }
 611:
            var25 = _closure1_slot6;
            var24 = _closure1_slot4;
            var23 = {};
            var26 = var17.promotedLabelWrapper;
            var23['style'] = var26;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var26 = 14;
            var26 = var32[var26];
            var26 = var31.bind(var5)(var26);
            var27 = var26.Text;
            var26 = {'variant': 'text-xxs/medium', 'color': 'header-primary'};
            var28 = 15;
            var29 = var32[var28];
            var29 = var31.bind(var5)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var32[var28];
            var28 = var31.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28./eVltr;
            var28 = var29.bind(var30)(var28);
            var26['children'] = var28;
            var26 = var25.bind(var5)(var27, var26);
            var23['children'] = var26;
            var22 = var25.bind(var5)(var24, var23);
 733:
            var21[1] = var22;
            var18['children'] = var21;
            var16 = var20.bind(var5)(var19, var18);
 747:
            var14[1] = var16;
            var11['children'] = var14;
            var12 = var13.bind(var5)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            var14 = _closure1_slot7;
            var13 = _closure1_slot4;
            var12 = {};
            var16 = var17.appDetailsContainer;
            var12['style'] = var16;
            var16 = var15 != var9;
            if(!var16) { _fun0001_ip = 852; continue _fun0001 }
 796:
            var19 = _closure1_slot6;
            var18 = _closure1_slot1;
            var20 = _closure1_slot2;
            var15 = 16;
            var15 = var20[var15];
            var18 = var18.bind(var5)(var15);
            var15 = {};
            var15['iconSource'] = var9;
            var20 = 36;
            var15['iconSize'] = var20;
            var20 = var17.appIconContainer;
            var15['wrapperStyle'] = var20;
            var16 = var19.bind(var5)(var18, var15);
 852:
            var15 = new Array(3);
            var15[0] = var16;
            var21 = _closure1_slot7;
            var20 = _closure1_slot4;
            var16 = {};
            var17 = var17.appDetails;
            var16['style'] = var17;
            var18 = _closure1_slot6;
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var23 = 14;
            var22 = var19[var23];
            var22 = var17.bind(var5)(var22);
            var24 = var22.Text;
            var22 = {'variant': 'heading-lg/semibold', 'color': 'header-primary', 'lineClamp': 1};
            var25 = var10.name;
            var22['children'] = var25;
            var24 = var18.bind(var5)(var24, var22);
            var22 = new Array(2);
            var22[0] = var24;
            var23 = var19[var23];
            var23 = var17.bind(var5)(var23);
            var24 = var23.Text;
            var23 = {'variant': 'text-sm/normal', 'color': 'text-secondary', 'lineClamp': 1};
            var25 = var10.description;
            var23['children'] = var25;
            var23 = var18.bind(var5)(var24, var23);
            var22[1] = var23;
            var16['children'] = var22;
            var16 = var21.bind(var5)(var20, var16);
            var15[1] = var16;
            var16 = 17;
            var16 = var19[var16];
            var16 = var17.bind(var5)(var16);
            var17 = var16.TableRowArrow;
            var16 = {};
            var16 = var18.bind(var5)(var17, var16);
            var15[2] = var16;
            var12['children'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var11[1] = var12;
            var1['children'] = var11;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 1124; continue _fun0001;
 1063:
            var4 = _closure1_slot6;
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 9;
            var2 = var11[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.BaseAppRow;
            var2 = {};
            var2['application'] = var10;
            var2['iconSource'] = var9;
            var2['onPress'] = var8;
            var2['isFirstRow'] = var7;
            var2['isLastRow'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1124:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
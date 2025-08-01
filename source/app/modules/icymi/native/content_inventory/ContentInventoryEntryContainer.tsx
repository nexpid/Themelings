// app/modules/icymi/native/content_inventory/ContentInventoryEntryContainer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var8 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var8);
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.ICYMI_MARGIN;
    var _closure1_slot5 = var5;
    var2 = var2.TITLE_AVATAR_SPACING;
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot7 = var5;
    var2 = var2.jsxs;
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var5 = var8.createStyles;
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = {};
            var2 = {};
            var4 = _closure1_slot5;
            var2['marginHorizontal'] = var4;
            var1['container'] = var2;
            var2 = {};
            var2['marginBottom'] = var4;
            var1['screenshotContainer'] = var2;
            var2 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
            var4 = _closure1_slot6;
            var2['gap'] = var4;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 6;
            var4 = var9[var6];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var4 = var4.spacing;
            var4 = var4.PX_12;
            var2['marginBottom'] = var4;
            var1['header'] = var2;
            var2 = {};
            var4 = 1;
            var2['flex'] = var4;
            var1['headerInfo'] = var2;
            var2 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 6, 'marginBottom': null, 'marginTop': 2};
            var8 = _closure1_slot0;
            var7 = 7;
            var7 = var9[var7];
            var8 = var8.bind(var5)(var7);
            var7 = var8.isAndroid;
            var7 = var7.bind(var8)();
            if(!var7) { _fun0001_ip = 157; continue _fun0001 }
 151:
            var4 = -1;
 157:
            var2['marginBottom'] = var4;
            var1['title'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center'};
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_8;
            var2['gap'] = var3;
            var1['subTitleContainer'] = var2;
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var _closure1_slot9 = var2;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/icymi/native/content_inventory/ContentInventoryEntryContainer.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function ContentInventoryEntryContainer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.contentId;
            var _closure2_slot0 = var2;
            var2 = var1.userId;
            var _closure2_slot1 = var2;
            var12 = var1.children;
            var13 = var1.renderForScreenshot;
            var5 = undefined;
            if(!(var13 === var5)) { _fun0002_ip = 43; continue _fun0002 }
 41:
            var13 = false;
 43:
            var18 = var1.title;
            var20 = var1.subtitle;
            var2 = var1.type;
            var _closure2_slot2 = var2;
            var8 = var1.highlight;
            if(!(var8 === var5)) { _fun0002_ip = 75; continue _fun0002 }
 73:
            var8 = false;
 75:
            var1 = _closure1_slot9;
            var21 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStores;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getUser;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var3.bind(var4)(var2, var1);
            var1 = null;
            var2 = var1 == var15;
            if(var2) { _fun0002_ip = 517; continue _fun0002 }
 148:
            var4 = _closure1_slot7;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 9;
            var2 = var9[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.PressableHighlight;
            var2 = {'unstable_pressDelay': 130, 'onPress': null, 'accessibilityRole': 'button'};
            var6 = function onPress() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 10;
                var3 = var5[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var9 = var3.ICYMIAnalytics;
                var8 = var9.trackItemInteraction;
                var7 = _closure2_slot0;
                var6 = _closure2_slot2;
                var3 = 'open_profile';
                var3 = var8.bind(var9)(var7, var6, var3);
                var3 = _closure1_slot1;
                var2 = 11;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var4 = _closure2_slot1;
                var2['userId'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onPress'] = var6;
            var6 = 12;
            var6 = var9[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.SimplePost;
            var6 = {};
            var6['hideDivider'] = var13;
            var6['highlight'] = var8;
            var10 = _closure1_slot8;
            var9 = _closure1_slot3;
            var8 = {};
            var14 = var21.container;
            var11 = new Array(2);
            var11[0] = var14;
            if(!var13) { _fun0002_ip = 267; continue _fun0002 }
 261:
            var13 = var21.screenshotContainer;
 267:
            var11[1] = var13;
            var8['style'] = var11;
            var14 = _closure1_slot8;
            var13 = _closure1_slot3;
            var11 = {};
            var16 = var21.header;
            var11['style'] = var16;
            var19 = _closure1_slot7;
            var17 = _closure1_slot1;
            var24 = _closure1_slot2;
            var22 = 13;
            var16 = var24[var22];
            var17 = var17.bind(var5)(var16);
            var16 = {};
            var25 = true;
            var16['animate'] = var25;
            var23 = _closure1_slot0;
            var22 = var24[var22];
            var22 = var23.bind(var5)(var22);
            var22 = var22.AvatarSizes;
            var22 = var22.NORMAL;
            var16['size'] = var22;
            var16['user'] = var15;
            var16['guildId'] = var5;
            var15 = var15.id;
            var16 = var19.bind(var5)(var17, var16, var15);
            var15 = new Array(2);
            var15[0] = var16;
            var16 = {};
            var17 = var21.headerInfo;
            var16['style'] = var17;
            var17 = {};
            var22 = var21.title;
            var17['style'] = var22;
            var17['children'] = var18;
            var18 = var19.bind(var5)(var13, var17);
            var17 = new Array(2);
            var17[0] = var18;
            var18 = {};
            var21 = var21.subTitleContainer;
            var18['style'] = var21;
            var18['children'] = var20;
            var18 = var19.bind(var5)(var13, var18);
            var17[1] = var18;
            var16['children'] = var17;
            var16 = var14.bind(var5)(var13, var16);
            var15[1] = var16;
            var11['children'] = var15;
            var13 = var14.bind(var5)(var13, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var11[1] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 517:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['useStyles'] = var2;
    return var1;
})();
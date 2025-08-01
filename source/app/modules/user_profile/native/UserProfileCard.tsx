// app/modules/user_profile/native/UserProfileCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var6;
    var1 = function Divider() {
        var2 = _closure1_slot9;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var5.rowDivider;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot10 = var1;
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
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.CARD_PADDING;
    var11 = var4.CARD_ROWS_COLUMN_GAP;
    var10 = var4.CARD_ROWS_ICON_SIZE;
    var4 = var4.CARD_ROWS_ICON_SIZE_VARIANT;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var7 = var4.jsxs;
    var _closure1_slot7 = var7;
    var4 = var4.Fragment;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'marginBottom': 12, 'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    var4['title'] = var9;
    var9 = {};
    var9['flexShrink'] = var12;
    var4['text'] = var9;
    var9 = {};
    var9['borderBottomWidth'] = var12;
    var14 = 5;
    var14 = var6[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var9['borderBottomColor'] = var14;
    var14 = var10 + var11;
    var9['marginLeft'] = var14;
    var13 = -var13;
    var9['marginRight'] = var13;
    var4['rowDivider'] = var9;
    var9 = {'flexDirection': 'column', 'paddingVertical': 20};
    var4['row'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var9['columnGap'] = var11;
    var4['rowLabel'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var9['lineHeight'] = var10;
    var4['rowLabelText'] = var9;
    var9 = {};
    var10 = var10 + var11;
    var9['marginHorizontal'] = var10;
    var4['rowSublabel'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileCard.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function UserProfileCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var14 = var3.title;
            var11 = var3.titleIcon;
            var13 = var3.titleStyle;
            var5 = var3.children;
            var9 = var3.style;
            var2 = {'title': 0, 'titleIcon': 0, 'titleStyle': 0, 'children': 0, 'style': 0};
            var6 = null;
            var19 = var2;
            var18 = null;
            var1 = silentSetPrototypeOf(var19, var18);
            var19 = {};
            var18 = var3;
            var17 = var2;
            var18 = copyDataProperties(var19, var18, var17);
            var1 = _closure1_slot9;
            var4 = undefined;
            var15 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var8 = var1.bind(var4)();
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var12 = var8.card;
            var8 = new Array(2);
            var8[0] = var12;
            var8[1] = var9;
            var1['style'] = var8;
            var19 = var1;
            var7 = copyDataProperties(var19, var18);
            var7 = var6 != var14;
            if(!var7) { _fun0001_ip = 267; continue _fun0001 }
 150:
            var9 = _closure1_slot7;
            var8 = _closure1_slot4;
            var6 = {};
            var16 = var15.title;
            var12 = new Array(2);
            var12[0] = var16;
            var12[1] = var13;
            var6['style'] = var12;
            var13 = _closure1_slot6;
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 7;
            var10 = var16[var10];
            var10 = var12.bind(var4)(var10);
            var12 = var10.Text;
            var10 = {'style': null, 'accessibilityRole': 'header', 'variant': 'text-sm/semibold', 'color': 'header-secondary', 'lineClamp': 1};
            var15 = var15.text;
            var10['style'] = var15;
            var10['children'] = var14;
            var12 = var13.bind(var4)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var10[1] = var11;
            var6['children'] = var10;
            var7 = var9.bind(var4)(var8, var6);
 267:
            var6 = new Array(2);
            var6[0] = var7;
            var6[1] = var5;
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var4 = function UserProfileFormRow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var18 = var2.label;
            var10 = var2.sublabel;
            var15 = var2.icon;
            var16 = var2.hint;
            var6 = var2.disabled;
            var1 = var2.isDestructive;
            var5 = var2.onPress;
            var20 = var2.labelColor;
            var12 = var2.arrow;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0002_ip = 63; continue _fun0002 }
 61:
            var12 = false;
 63:
            var2 = _closure1_slot9;
            var11 = var2.bind(var4)();
            var17 = undefined;
            if(!var1) { _fun0002_ip = 85; continue _fun0002 }
 79:
            var17 = 'text-danger';
 85:
            var19 = 'header-primary';
            if(!var1) { _fun0002_ip = 100; continue _fun0002 }
 94:
            var19 = 'text-danger';
 100:
            var3 = _closure1_slot7;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 6;
            var1 = var14[var1];
            var1 = var13.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var8 = var11.row;
            var1['style'] = var8;
            var8 = 'button';
            var1['accessibilityRole'] = var8;
            var1['accessibilityLabel'] = var18;
            var1['disabled'] = var6;
            var1['onPress'] = var5;
            var8 = _closure1_slot4;
            var5 = {};
            var6 = var11.rowLabel;
            var5['style'] = var6;
            var9 = _closure1_slot6;
            var6 = {};
            var21 = _closure1_slot5;
            var6['size'] = var21;
            var6['color'] = var17;
            var6 = var9.bind(var4)(var15, var6);
            var9 = new Array(4);
            var9[0] = var6;
            var15 = _closure1_slot6;
            var6 = 7;
            var6 = var14[var6];
            var6 = var13.bind(var4)(var6);
            var14 = var6.Text;
            var13 = {};
            var6 = 'text-md/semibold';
            var13['variant'] = var6;
            var6 = null;
            if(!(var6 != var20)) { _fun0002_ip = 250; continue _fun0002 }
 247:
            var19 = var20;
 250:
            var13['color'] = var19;
            var19 = var11.rowLabelText;
            var13['style'] = var19;
            var13['children'] = var18;
            var13 = var15.bind(var4)(var14, var13);
            var9[1] = var13;
            var13 = var6 != var16;
            if(!var13) { _fun0002_ip = 309; continue _fun0002 }
 285:
            var15 = _closure1_slot6;
            var14 = {};
            var18 = _closure1_slot5;
            var14['size'] = var18;
            var14['color'] = var17;
            var13 = var15.bind(var4)(var16, var14);
 309:
            var9[2] = var13;
            if(!var12) { _fun0002_ip = 362; continue _fun0002 }
 316:
            var15 = _closure1_slot6;
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = 8;
            var13 = var16[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.ChevronSmallRightIcon;
            var13 = {};
            var16 = 'sm';
            var13['size'] = var16;
            var12 = var15.bind(var4)(var14, var13);
 362:
            var9[3] = var12;
            var5['children'] = var9;
            var8 = var3.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var6 = var6 != var10;
            if(!var6) { _fun0002_ip = 421; continue _fun0002 }
 391:
            var9 = _closure1_slot6;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var11.rowSublabel;
            var7['style'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 421:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['UserProfileFormRow'] = var4;
    var2 = function UserProfileCardRows(arg1) {
        var1 = arg1;
        var7 = var1.children;
        var4 = _closure1_slot6;
        var3 = _closure1_slot8;
        var2 = {};
        var1 = _closure1_slot3;
        var6 = var1.Children;
        var5 = var6.map;
        var1 = function(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var5 = arg2;
                var4 = _closure1_slot7;
                var2 = _closure1_slot3;
                var3 = var2.Fragment;
                var2 = {};
                var7 = 0;
                var6 = null;
                if(!(var7 !== var5)) { _fun0003_ip = 48; continue _fun0003 }
 30:
                var9 = _closure1_slot6;
                var8 = _closure1_slot10;
                var7 = undefined;
                var1 = {};
                var6 = var9.bind(var7)(var8, var1);
 48:
                var1 = new Array(2);
                var1[0] = var6;
                var6 = arg1;
                var1[1] = var6;
                var2['children'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            }
        };
        var1 = var5.bind(var6)(var7, var1);
        var2['children'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['UserProfileCardRows'] = var2;
    return var1;
})();
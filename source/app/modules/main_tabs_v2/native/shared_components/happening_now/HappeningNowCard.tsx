// app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.HAPPENING_NOW_CARD_MARGIN_RIGHT;
    var _closure1_slot4 = var7;
    var8 = var4.HAPPENING_NOW_CARD_PADDING;
    var _closure1_slot5 = var8;
    var8 = var4.HAPPENING_NOW_CARD_HEIGHT;
    var _closure1_slot6 = var8;
    var11 = var4.HAPPENING_NOW_BADGE_SIZE;
    var _closure1_slot7 = var11;
    var8 = var4.HAPPENING_NOW_CARD_WIDTH_SMALL_MIN;
    var _closure1_slot8 = var8;
    var8 = var4.HAPPENING_NOW_CARD_WIDTH_SMALL_MAX;
    var _closure1_slot9 = var8;
    var8 = var4.HAPPENING_NOW_CARD_WIDTH_MEDIUM_MIN;
    var _closure1_slot10 = var8;
    var8 = var4.HAPPENING_NOW_CARD_WIDTH_MEDIUM_MAX;
    var _closure1_slot11 = var8;
    var8 = var4.HAPPENING_NOW_CARD_WIDTH_LARGE_MIN;
    var _closure1_slot12 = var8;
    var8 = var4.HAPPENING_NOW_CARD_WIDTH_LARGE_MAX;
    var _closure1_slot13 = var8;
    var8 = var4.HAPPENING_NOW_CARD_PADDING_RIGHT;
    var _closure1_slot14 = var8;
    var8 = var4.HAPPENING_NOW_CARD_WIDTH_STRETCHY_MIN;
    var _closure1_slot15 = var8;
    var8 = var4.HAPPENING_NOW_CARD_WIDTH_STRETCHY_MAX;
    var _closure1_slot16 = var8;
    var8 = var4.HAPPENING_NOW_CARD_WIDTH_LARGE_PANELS_MAX;
    var _closure1_slot17 = var8;
    var4 = var4.HAPPENING_NOW_PANELS_CONTAINER_PADDING;
    var8 = 3;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.jsx;
    var _closure1_slot18 = var9;
    var8 = var8.jsxs;
    var _closure1_slot19 = var8;
    var4 = var4 + var7;
    var _closure1_slot20 = var4;
    var10 = 4;
    var4 = var6[var10];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var2 = arg2;
            var3 = arg3;
            var1 = 'small';
            if(!(var1 !== var5)) { _fun0001_ip = 221; continue _fun0001 }
 20:
            var1 = 'medium';
            if(!(var1 !== var5)) { _fun0001_ip = 193; continue _fun0001 }
 31:
            var1 = 'large';
            if(!(var1 !== var5)) { _fun0001_ip = 137; continue _fun0001 }
 39:
            var1 = 'stretchy';
            if(!(var1 !== var5)) { _fun0001_ip = 81; continue _fun0001 }
 49:
            var1 = 'full';
            var4 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 247; continue _fun0001 }
 62:
            var4 = {'width': 'auto', 'marginLeft': 0, 'marginRight': 0};
            _fun0001_ip = 247; continue _fun0001;
 81:
            var1 = {};
            var5 = _closure1_slot15;
            var1['minWidth'] = var5;
            if(var2) { _fun0001_ip = 104; continue _fun0001 }
 98:
            var5 = _closure1_slot16;
            _fun0001_ip = 127; continue _fun0001;
 104:
            if(var3) { _fun0001_ip = 113; continue _fun0001 }
 107:
            var6 = _closure1_slot17;
            _fun0001_ip = 124; continue _fun0001;
 113:
            var8 = _closure1_slot20;
            var7 = 252;
            var6 = var7 - var8;
 124:
            var5 = var6;
 127:
            var1['maxWidth'] = var5;
            var4 = var1;
            _fun0001_ip = 247; continue _fun0001;
 137:
            var1 = {};
            var6 = _closure1_slot12;
            var1['minWidth'] = var6;
            if(var2) { _fun0001_ip = 160; continue _fun0001 }
 154:
            var2 = _closure1_slot13;
            _fun0001_ip = 183; continue _fun0001;
 160:
            if(var3) { _fun0001_ip = 169; continue _fun0001 }
 163:
            var3 = _closure1_slot17;
            _fun0001_ip = 180; continue _fun0001;
 169:
            var6 = _closure1_slot20;
            var5 = 252;
            var3 = var5 - var6;
 180:
            var2 = var3;
 183:
            var1['maxWidth'] = var2;
            var4 = var1;
            _fun0001_ip = 247; continue _fun0001;
 193:
            var1 = {};
            var3 = _closure1_slot10;
            var1['minWidth'] = var3;
            var2 = _closure1_slot11;
            var1['maxWidth'] = var2;
            var4 = var1;
            _fun0001_ip = 247; continue _fun0001;
 221:
            var1 = {};
            var3 = _closure1_slot8;
            var1['minWidth'] = var3;
            var2 = _closure1_slot9;
            var1['maxWidth'] = var2;
            var4 = var1;
 247:
            var1 = {};
            var2 = {};
            var5 = _closure1_slot5;
            var2['padding'] = var5;
            var5 = _closure1_slot14;
            var2['paddingRight'] = var5;
            var5 = _closure1_slot4;
            var2['marginRight'] = var5;
            var5 = _closure1_slot6;
            var2['height'] = var5;
            var5 = 'row';
            var2['flexDirection'] = var5;
            var5 = 'center';
            var2['alignItems'] = var5;
            var10 = var2;
            var9 = var4;
            var4 = copyDataProperties(var10, var9);
            var1['card'] = var2;
            var2 = {'position': 'absolute', 'top': 0, 'right': 0};
            var1['cardBadgeWrapper'] = var2;
            var2 = {'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
            var4 = _closure1_slot7;
            var2['width'] = var4;
            var2['height'] = var4;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 5;
            var7 = var6[var3];
            var4 = undefined;
            var7 = var5.bind(var4)(var7);
            var7 = var7.colors;
            var7 = var7.BG_MOD_SUBTLE;
            var2['backgroundColor'] = var7;
            var7 = var6[var3];
            var7 = var5.bind(var4)(var7);
            var7 = var7.radii;
            var8 = var7.lg;
            var7 = 1;
            var7 = var8 - var7;
            var2['borderTopRightRadius'] = var7;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.radii;
            var3 = var3.md;
            var2['borderBottomLeftRadius'] = var3;
            var1['cardBadge'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot21 = var4;
    var4 = var6[var10];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = var11 + var10;
    var9['marginRight'] = var10;
    var4['cardHeaderMargin'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot22 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCard.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function HappeningNowCard(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var8 = var1.bind(var4)();
            var3 = _closure1_slot21;
            var2 = var5.width;
            var9 = var5.panelVariant;
            var6 = null;
            var1 = var6 != var9;
            if(!var1) { _fun0002_ip = 59; continue _fun0002 }
 56:
            var1 = var9;
 59:
            var11 = var3.bind(var4)(var2, var1, var8);
            var2 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 7;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var10 = var1.bind(var4)();
            var12 = var5.IconComponent;
            var9 = var5.accessibilityLabel;
            var8 = var5.accessibilityHint;
            var3 = _closure1_slot19;
            var2 = _closure1_slot0;
            var1 = 8;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Card;
            var1 = {};
            var13 = 'secondary';
            var1['variant'] = var13;
            var14 = var11.card;
            var13 = new Array(2);
            var13[0] = var14;
            var14 = var5.style;
            var13[1] = var14;
            var1['style'] = var13;
            var13 = var5.onPress;
            var1['onPress'] = var13;
            var13 = 'faint';
            var1['border'] = var13;
            var13 = var6 == var10;
            var10 = undefined;
            if(!var13) { _fun0002_ip = 202; continue _fun0002 }
 198:
            var10 = 'low';
 202:
            var1['shadow'] = var10;
            var10 = var5.onLongPress;
            var1['onLongPress'] = var10;
            var10 = var5.onPress;
            var10 = var6 == var10;
            var1['disabled'] = var10;
            var1['accessibilityLabel'] = var9;
            var1['accessibilityHint'] = var8;
            var8 = var5.children;
            var5 = new Array(2);
            var5[0] = var8;
            var8 = var6 != var12;
            var6 = null;
            if(!var8) { _fun0002_ip = 330; continue _fun0002 }
 262:
            var9 = _closure1_slot18;
            var8 = _closure1_slot3;
            var7 = {};
            var10 = var11.cardBadgeWrapper;
            var7['style'] = var10;
            var10 = {};
            var11 = var11.cardBadge;
            var10['style'] = var11;
            var11 = {};
            var13 = 'xs';
            var11['size'] = var13;
            var11 = var9.bind(var4)(var12, var11);
            var10['children'] = var11;
            var10 = var9.bind(var4)(var8, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 330:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var4 = function HappeningNowCardHeader(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var6 = var3.children;
            var9 = var3.noMargin;
            var7 = null;
            var2 = Object.create(var7);
            var1 = 0;
            var2['children'] = var1;
            var2['noMargin'] = var1;
            var13 = {};
            var12 = var3;
            var11 = var2;
            var5 = copyDataProperties(var13, var12, var11);
            var2 = _closure1_slot22;
            var4 = undefined;
            var8 = var2.bind(var4)();
            var3 = _closure1_slot18;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 9;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'variant': 'text-sm/semibold', 'color': 'header-primary', 'lineClamp': 1, 'maxFontSizeMultiplier': 2};
            if(var9) { _fun0003_ip = 107; continue _fun0003 }
 101:
            var7 = var8.cardHeaderMargin;
 107:
            var1['style'] = var7;
            var13 = var1;
            var12 = var5;
            var5 = copyDataProperties(var13, var12);
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['HappeningNowCardHeader'] = var4;
    var2 = function HappeningNowCardSubtitle(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var6 = var3.children;
            var8 = var3.variant;
            var7 = null;
            var2 = Object.create(var7);
            var1 = 0;
            var2['children'] = var1;
            var2['variant'] = var1;
            var12 = {};
            var11 = var3;
            var10 = var2;
            var5 = copyDataProperties(var12, var11, var10);
            var4 = _closure1_slot18;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.Text;
            var1 = {'variant': null, 'color': 'header-secondary', 'lineClamp': 1, 'maxFontSizeMultiplier': 2};
            var9 = var7 != var8;
            var7 = 'text-xs/medium';
            if(!var9) { _fun0004_ip = 102; continue _fun0004 }
 99:
            var7 = var8;
 102:
            var1['variant'] = var7;
            var12 = var1;
            var11 = var5;
            var5 = copyDataProperties(var12, var11);
            var5 = 'children';
            var1[var5] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var3['HappeningNowCardSubtitle'] = var2;
    return var1;
})();
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
    var4 = function(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var2 = arg2;
            var4 = arg3;
            var5 = arg4;
            var1 = 'small';
            if(!(var1 !== var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 'medium';
            if(!(var1 !== var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = 'large';
            if(!(var1 !== var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = 'stretchy';
            if(!(var1 !== var6)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = 'full';
            var3 = undefined;
            if(!(var1 === var6)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = {'width': 'auto', 'marginLeft': 0, 'marginRight': 0};
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var1 = {};
            var6 = _closure1_slot15;
            var1['minWidth'] = var6;
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = _closure1_slot16;
            _fun0001_ip = 14; continue _fun0001;
case 12:
            if(var4) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var7 = _closure1_slot17;
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var9 = _closure1_slot20;
            var8 = 252;
            var7 = var8 - var9;
case 17:
            var6 = var7;
case 14:
            var1['maxWidth'] = var6;
            var3 = var1;
            _fun0001_ip = 10; continue _fun0001;
case 6:
            var1 = {};
            var7 = _closure1_slot12;
            var1['minWidth'] = var7;
            if(var2) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = _closure1_slot13;
            _fun0001_ip = 20; continue _fun0001;
case 18:
            if(var4) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var4 = _closure1_slot17;
            _fun0001_ip = 23; continue _fun0001;
case 21:
            var7 = _closure1_slot20;
            var6 = 252;
            var4 = var6 - var7;
case 23:
            var2 = var4;
case 20:
            var1['maxWidth'] = var2;
            var3 = var1;
            _fun0001_ip = 10; continue _fun0001;
case 4:
            var1 = {};
            var4 = _closure1_slot10;
            var1['minWidth'] = var4;
            var2 = _closure1_slot11;
            var1['maxWidth'] = var2;
            var3 = var1;
            _fun0001_ip = 10; continue _fun0001;
case 2:
            var1 = {};
            var4 = _closure1_slot8;
            var1['minWidth'] = var4;
            var2 = _closure1_slot9;
            var1['maxWidth'] = var2;
            var3 = var1;
case 10:
            var1 = {};
            var2 = {};
            var6 = _closure1_slot5;
            var2['padding'] = var6;
            var6 = _closure1_slot14;
            var2['paddingRight'] = var6;
            var6 = _closure1_slot4;
            var2['marginRight'] = var6;
            var6 = _closure1_slot6;
            var2['height'] = var6;
            var6 = 'row';
            var2['flexDirection'] = var6;
            var6 = 'center';
            var2['alignItems'] = var6;
            if(var5) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var6 = {};
            _fun0001_ip = 26; continue _fun0001;
case 24:
            var7 = {};
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 5;
            var12 = var11[var8];
            var9 = undefined;
            var12 = var10.bind(var9)(var12);
            var12 = var12.radii;
            var12 = var12.lg;
            var7['borderTopStartRadius'] = var12;
            var12 = var11[var8];
            var12 = var10.bind(var9)(var12);
            var12 = var12.radii;
            var12 = var12.lg;
            var7['borderTopEndRadius'] = var12;
            var12 = var11[var8];
            var12 = var10.bind(var9)(var12);
            var12 = var12.radii;
            var12 = var12.lg;
            var7['borderBottomStartRadius'] = var12;
            var8 = var11[var8];
            var8 = var10.bind(var9)(var8);
            var8 = var8.radii;
            var8 = var8.lg;
            var7['borderBottomEndRadius'] = var8;
            var6 = var7;
case 26:
            var14 = var2;
            var13 = var6;
            var6 = copyDataProperties(var14, var13);
            var14 = var2;
            var13 = var3;
            var3 = copyDataProperties(var14, var13);
            var1['card'] = var2;
            var2 = {'position': 'absolute', 'top': 0, 'right': 0};
            var1['cardBadgeWrapper'] = var2;
            var2 = {'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
            var3 = _closure1_slot7;
            var2['width'] = var3;
            var2['height'] = var3;
            var6 = undefined;
            var3 = undefined;
            if(var5) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 5;
            var7 = var9[var7];
            var7 = var8.bind(var6)(var7);
            var7 = var7.colors;
            var3 = var7.BACKGROUND_MOD_SUBTLE;
case 27:
            var2['backgroundColor'] = var3;
            var3 = undefined;
            if(var5) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 5;
            var7 = var9[var7];
            var7 = var8.bind(var6)(var7);
            var7 = var7.radii;
            var8 = var7.lg;
            var7 = 1;
            var3 = var8 - var7;
case 29:
            var2['borderTopRightRadius'] = var3;
            var3 = undefined;
            if(var5) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 5;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.radii;
            var3 = var4.md;
case 31:
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
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCard.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function HappeningNowCard(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var8 = var1.bind(var4)();
            var1 = 7;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = 'HappeningNowCard';
            var14 = var2.bind(var4)(var1);
            var3 = _closure1_slot21;
            var2 = var5.width;
            var9 = var5.panelVariant;
            var6 = null;
            var1 = var6 != var9;
            if(!var1) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var1 = var9;
case 33:
            var20 = undefined;
            var19 = var2;
            var18 = var1;
            var17 = var8;
            var16 = var14;
            var11 = var20[var3](var19, var18, var17, var16, var15);
            var2 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 8;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var10 = var1.bind(var4)();
            var12 = var5.IconComponent;
            var9 = var5.accessibilityLabel;
            var8 = var5.accessibilityHint;
            var3 = _closure1_slot19;
            var2 = _closure1_slot0;
            var1 = 9;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Card;
            var1 = {};
            var13 = 'secondary';
            var1['variant'] = var13;
            var15 = var11.card;
            var13 = new Array(2);
            var13[0] = var15;
            var15 = var5.style;
            var13[1] = var15;
            var1['style'] = var13;
            var13 = var5.onPress;
            var1['onPress'] = var13;
            var13 = 'faint';
            var1['border'] = var13;
            var13 = var6 == var10;
            var10 = undefined;
            if(!var13) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var10 = 'low';
case 35:
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
            if(!var8) { _fun0002_ip = 37; continue _fun0002 }
case 38:
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
            if(!var14) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var13 = 'xxs';
case 39:
            var11['size'] = var13;
            var13 = undefined;
            if(!var14) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var13 = 'icon-voice-connected';
case 41:
            var11['color'] = var13;
            var11 = var9.bind(var4)(var12, var11);
            var10['children'] = var11;
            var10 = var9.bind(var4)(var8, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 37:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var4 = function HappeningNowCardHeader(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var6 = var3.children;
            var11 = var3.noMargin;
            var10 = var3.displayNameFont;
            var2 = {'children': 0, 'noMargin': 0, 'displayNameFont': 0};
            var8 = null;
            var15 = var2;
            var14 = null;
            var1 = silentSetPrototypeOf(var15, var14);
            var15 = {};
            var14 = var3;
            var13 = var2;
            var5 = copyDataProperties(var15, var14, var13);
            var2 = _closure1_slot22;
            var4 = undefined;
            var7 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 7;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = 'HappeningNowCardHeader';
            var12 = var3.bind(var4)(var2);
            var3 = _closure1_slot18;
            var2 = _closure1_slot0;
            var1 = 10;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'variant': null, 'color': 'mobile-text-heading-primary', 'lineClamp': 1, 'maxFontSizeMultiplier': 2};
            var9 = 'text-sm/semibold';
            if(!var12) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var9 = 'text-xs/semibold';
case 43:
            var1['variant'] = var9;
            var9 = null;
            if(var11) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var9 = var7.cardHeaderMargin;
case 45:
            var7 = new Array(2);
            var7[0] = var9;
            var9 = var8 != var10;
            var8 = null;
            if(!var9) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var9 = {};
            var9['fontFamily'] = var10;
            var8 = var9;
case 47:
            var7[1] = var8;
            var1['style'] = var7;
            var15 = var1;
            var14 = var5;
            var5 = copyDataProperties(var15, var14);
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['HappeningNowCardHeader'] = var4;
    var2 = function HappeningNowCardSubtitle(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var6 = var3.children;
            var7 = var3.variant;
            var9 = null;
            var2 = Object.create(var9);
            var1 = 0;
            var2['children'] = var1;
            var2['variant'] = var1;
            var13 = {};
            var12 = var3;
            var11 = var2;
            var5 = copyDataProperties(var13, var12, var11);
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 7;
            var2 = var10[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = 'HappeningNowCardSubtitle';
            var8 = var3.bind(var4)(var2);
            var3 = _closure1_slot18;
            var2 = _closure1_slot0;
            var1 = 10;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            if(!(var9 == var7)) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var9 = 'text-xs/medium';
            if(!var8) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var9 = 'text-xs/normal';
case 51:
            var7 = var9;
case 49:
            var1['variant'] = var7;
            var7 = 'text-default';
            if(!var8) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var7 = 'text-subtle';
case 53:
            var1['color'] = var7;
            var7 = 1;
            var1['lineClamp'] = var7;
            var7 = 2;
            var1['maxFontSizeMultiplier'] = var7;
            var13 = var1;
            var12 = var5;
            var5 = copyDataProperties(var13, var12);
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['HappeningNowCardSubtitle'] = var2;
    return var1;
})();
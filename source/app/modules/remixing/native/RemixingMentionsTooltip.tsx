// app/modules/remixing/native/RemixingMentionsTooltip.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = native2;
        var12 = native3;
        var3 = native6;
        var6 = native7;
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
        var13 = 0;
        var4 = var6[var13];
        var1 = undefined;
        var4 = var12.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 1;
        var7 = var6[var4];
        var4 = native4;
        var4 = var4.bind(var1)(var7);
        var _closure1_slot4 = var4;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot5 = var4;
        var11 = 3;
        var4 = var6[var11];
        var4 = var12.bind(var1)(var4);
        var _closure1_slot6 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.REMIX_MENTIONS_TOOLTIP_STORAGE_KEY;
        var _closure1_slot7 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.jsx;
        var _closure1_slot8 = var4;
        var4 = 6;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {};
        var10 = 7;
        var14 = var6[var10];
        var15 = var5.bind(var1)(var14);
        var14 = var15.isAndroid;
        var14 = var14.bind(var15)();
        if(!var14) { _fun0001_ip = 221; continue _fun0001 }
 219:
        var11 = 0;
 221:
        var9['padding'] = var11;
        var11 = 189;
        var9['width'] = var11;
        var4['textContainer'] = var9;
        var9 = {};
        var11 = 'absolute';
        var9['position'] = var11;
        var11 = 8;
        var13 = var6[var11];
        var13 = var12.bind(var1)(var13);
        var13 = var13.radii;
        var13 = var13.sm;
        var9['borderRadius'] = var13;
        var4['toolTipContainer'] = var9;
        var9 = {'width': 199, 'borderRadius': null, 'backgroundColor': 'rgba(17, 18, 20, 1)'};
        var11 = var6[var11];
        var11 = var12.bind(var1)(var11);
        var11 = var11.radii;
        var11 = var11.sm;
        var9['borderRadius'] = var11;
        var4['toolTip'] = var9;
        var9 = {'borderTopColor': 'rgba(17, 18, 20, 1)', 'borderBottomColor': 'rgba(17, 18, 20, 1)'};
        var4['tooltipArrow'] = var9;
        var9 = {'fontWeight': '600', 'textAlign': 'center', 'fontSize': null, 'lineHeight': 20};
        var10 = var6[var10];
        var11 = var5.bind(var1)(var10);
        var10 = var11.isAndroid;
        var11 = var10.bind(var11)();
        var10 = 16;
        if(!var11) { _fun0001_ip = 384; continue _fun0001 }
 381:
        var10 = 14;
 384:
        var9['fontSize'] = var10;
        var4['tooltipText'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot9 = var4;
        var4 = 14;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/remixing/native/RemixingMentionsTooltip.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function _default(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var8 = var2.canvasCenterPoint;
                var _closure2_slot0 = var8;
                var10 = undefined;
                var _closure2_slot3 = var10;
                var _closure2_slot4 = var10;
                var _closure2_slot5 = var10;
                var3 = _closure1_slot9;
                var7 = var3.bind(var10)();
                var _closure2_slot1 = var7;
                var4 = _closure1_slot6;
                var3 = var4.getLastComponentAdded;
                var3 = var3.bind(var4)();
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 9;
                var4 = var6[var4];
                var4 = var5.bind(var10)(var4);
                var6 = var4.Storage;
                var5 = var6.get;
                var4 = _closure1_slot7;
                var9 = false;
                var6 = var5.bind(var6)(var4, var9);
                var _closure2_slot2 = var6;
                var4 = null;
                var5 = var4 == var3;
                var4 = undefined;
                if(var5) { _fun0002_ip = 121; continue _fun0002 }
 116:
                var4 = var3.type;
 121:
                var5 = _closure1_slot0;
                var11 = _closure1_slot2;
                var3 = 10;
                var3 = var11[var3];
                var3 = var5.bind(var10)(var3);
                var3 = var3.RemixElement;
                var3 = var3.MENTION_USER;
                var5 = var4 === var3;
                _closure2_slot3 = var5;
                var4 = _closure1_slot4;
                var3 = var4.useState;
                var9 = var3.bind(var4)(var9);
                var3 = _closure1_slot3;
                var2 = 2;
                var9 = var3.bind(var10)(var9, var2);
                var2 = 0;
                var2 = var9[var2];
                _closure2_slot4 = var2;
                var3 = 1;
                var3 = var9[var3];
                _closure2_slot5 = var3;
                var9 = var4.useEffect;
                var3 = new Array(2);
                var3[0] = var5;
                var3[1] = var2;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = _closure2_slot4;
                        if(!var1) { _fun0003_ip = 14; continue _fun0003 }
 10:
                        var1 = _closure2_slot3;
 14:
                        if(!var1) { _fun0003_ip = 65; continue _fun0003 }
 17:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 9;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var4 = var2.Storage;
                        var3 = var4.set;
                        var2 = _closure1_slot7;
                        var1 = true;
                        var1 = var3.bind(var4)(var2, var1);
 65:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var9.bind(var4)(var2, var3);
                var3 = var4.useMemo;
                var9 = var8.x;
                var2 = new Array(9);
                var2[0] = var9;
                var8 = var8.y;
                var2[1] = var8;
                var8 = var7.textContainer;
                var2[2] = var8;
                var8 = var7.toolTip;
                var2[3] = var8;
                var8 = var7.toolTipContainer;
                var2[4] = var8;
                var8 = var7.tooltipArrow;
                var2[5] = var8;
                var7 = var7.tooltipText;
                var2[6] = var7;
                var2[7] = var6;
                var2[8] = var5;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = _closure2_slot2;
                        var1 = null;
                        if(var2) { _fun0004_ip = 375; continue _fun0004 }
 15:
                        var2 = _closure2_slot3;
                        var1 = null;
                        if(!var2) { _fun0004_ip = 375; continue _fun0004 }
 27:
                        var3 = _closure2_slot5;
                        var5 = undefined;
                        var2 = true;
                        var2 = var3.bind(var5)(var2);
                        var4 = _closure1_slot8;
                        var3 = _closure1_slot5;
                        var2 = {};
                        var11 = _closure2_slot1;
                        var7 = var11.toolTipContainer;
                        var6 = new Array(2);
                        var6[0] = var7;
                        var7 = {};
                        var8 = _closure2_slot0;
                        var12 = var8.y;
                        var10 = 25;
                        var10 = var12 + var10;
                        var7['bottom'] = var10;
                        var10 = var8.x;
                        var8 = 100;
                        var8 = var10 - var8;
                        var7['left'] = var8;
                        var6[1] = var7;
                        var2['style'] = var6;
                        var7 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var8 = 11;
                        var6 = var15[var8];
                        var7 = var7.bind(var5)(var6);
                        var6 = {};
                        var10 = var11.toolTip;
                        var6['containerStyle'] = var10;
                        var10 = var11.tooltipArrow;
                        var6['arrowStyle'] = var10;
                        var10 = 18;
                        var6['arrowWidth'] = var10;
                        var10 = 10;
                        var6['arrowHeight'] = var10;
                        var14 = _closure1_slot0;
                        var9 = var15[var8];
                        var9 = var14.bind(var5)(var9);
                        var9 = var9.TooltipArrowPositions;
                        var9 = var9.CENTER;
                        var6['arrowPosition'] = var9;
                        var8 = var15[var8];
                        var8 = var14.bind(var5)(var8);
                        var8 = var8.TooltipArrowDirections;
                        var8 = var8.DOWN;
                        var6['arrowDirection'] = var8;
                        var8 = {};
                        var9 = var11.textContainer;
                        var8['style'] = var9;
                        var9 = 12;
                        var9 = var15[var9];
                        var9 = var14.bind(var5)(var9);
                        var10 = var9.Text;
                        var9 = {'color': 'always-white', 'variant': 'heading-md/semibold'};
                        var11 = var11.tooltipText;
                        var9['style'] = var11;
                        var11 = 13;
                        var12 = var15[var11];
                        var12 = var14.bind(var5)(var12);
                        var13 = var12.intl;
                        var12 = var13.string;
                        var11 = var15[var11];
                        var11 = var14.bind(var5)(var11);
                        var11 = var11.t;
                        var11 = var11.Tmbf3d;
                        var11 = var12.bind(var13)(var11);
                        var9['children'] = var11;
                        var9 = var4.bind(var5)(var10, var9);
                        var8['children'] = var9;
                        var8 = var4.bind(var5)(var3, var8);
                        var6['children'] = var8;
                        var6 = var4.bind(var5)(var7, var6);
                        var2['children'] = var6;
                        var1 = var4.bind(var5)(var3, var2);
 375:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();
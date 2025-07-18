// app/modules/upsell_tooltip/native/PremiumUpsellTooltipActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot3 = var7;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
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
    var12 = 'center';
    var9['justifyContent'] = var12;
    var10 = 5;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['paddingTop'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['paddingHorizontal'] = var13;
    var4['container'] = var9;
    var9 = {'alignSelf': 'center', 'width': 231, 'height': 231, 'borderRadius': null, 'marginBottom': 16};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var4['img'] = var9;
    var9 = {'flexDirection': 'row', 'justifyContent': 'center'};
    var4['header'] = var9;
    var9 = {'textAlign': 'center', 'marginBottom': 8};
    var4['title'] = var9;
    var9 = {};
    var9['textAlign'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var9['marginBottom'] = var12;
    var4['description'] = var9;
    var9 = {'tintColor': null, 'width': 32, 'height': 32, 'marginTop': 4294967294, 'marginLeft': 4294967280};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var9['tintColor'] = var12;
    var4['nitroWheel'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9['gap'] = var10;
    var4['buttonContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/upsell_tooltip/native/PremiumUpsellTooltipActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumUpsellTooltipActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var28 = var1.title;
            var30 = var1.backdropProps;
            var23 = var1.description;
            var25 = var1.descriptionStyle;
            var12 = var1.imageSource;
            var16 = var1.imageStyle;
            var2 = var1.dismissibleContent;
            var _closure2_slot0 = var2;
            var17 = var1.primaryButtonText;
            var21 = var1.primaryButtonIcon;
            var19 = var1.secondaryButtonText;
            var2 = var1.onDismiss;
            var _closure2_slot1 = var2;
            var2 = var1.onPrimaryButtonPress;
            var _closure2_slot2 = var2;
            var1 = var1.onSecondaryButtonPress;
            var _closure2_slot3 = var1;
            var1 = _closure1_slot8;
            var4 = undefined;
            var20 = var1.bind(var4)();
            var6 = function handleDismiss(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var6 = arg1;
                    var3 = null;
                    var1 = var3 != var6;
                    if(!var1) { _fun0002_ip = 29; continue _fun0002 }
 12:
                    var2 = _closure1_slot5;
                    var2 = var2.DISMISS;
                    var1 = var6 !== var2;
 29:
                    if(var1) { _fun0002_ip = 43; continue _fun0002 }
 32:
                    var2 = _closure2_slot1;
                    var1 = var3 == var2;
 43:
                    if(var1) { _fun0002_ip = 59; continue _fun0002 }
 46:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 59:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.UNSAFE_markDismissibleContentAsDismissed;
                    var3 = _closure2_slot0;
                    var2 = {};
                    var7 = true;
                    var2['forceTrack'] = var7;
                    var2['dismissAction'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var _closure2_slot4 = var6;
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 7;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var7 = true;
            var1['startExpanded'] = var7;
            var31 = var1;
            var5 = copyDataProperties(var31, var30);
            var5 = 'onDismiss';
            var1[var5] = var6;
            var7 = _closure1_slot7;
            var6 = _closure1_slot4;
            var5 = {};
            var8 = var20.container;
            var5['style'] = var8;
            var13 = null;
            var8 = var13 != var12;
            var9 = null;
            if(!var8) { _fun0001_ip = 248; continue _fun0001 }
 206:
            var11 = _closure1_slot6;
            var10 = _closure1_slot3;
            var8 = {};
            var22 = var20.img;
            var15 = new Array(2);
            var15[0] = var22;
            var15[1] = var16;
            var8['style'] = var15;
            var8['source'] = var12;
            var9 = var11.bind(var4)(var10, var8);
 248:
            var8 = new Array(4);
            var8[0] = var9;
            var11 = _closure1_slot7;
            var10 = _closure1_slot4;
            var22 = {};
            var9 = var20.header;
            var22['style'] = var9;
            var16 = _closure1_slot6;
            var15 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 8;
            var9 = var12[var9];
            var15 = var15.bind(var4)(var9);
            var9 = {};
            var24 = var20.nitroWheel;
            var9['style'] = var24;
            var9 = var16.bind(var4)(var15, var9);
            var24 = new Array(2);
            var24[0] = var9;
            var15 = _closure1_slot0;
            var9 = 9;
            var26 = var12[var9];
            var26 = var15.bind(var4)(var26);
            var27 = var26.Text;
            var26 = {'variant': 'heading-xl/bold', 'style': null, 'color': 'header-primary', 'accessibilityRole': 'header'};
            var29 = var20.title;
            var26['style'] = var29;
            var26['children'] = var28;
            var26 = var16.bind(var4)(var27, var26);
            var24[1] = var26;
            var22['children'] = var24;
            var22 = var11.bind(var4)(var10, var22);
            var8[1] = var22;
            var9 = var12[var9];
            var9 = var15.bind(var4)(var9);
            var22 = var9.Text;
            var9 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            var26 = var20.description;
            var24 = new Array(2);
            var24[0] = var26;
            var24[1] = var25;
            var9['style'] = var24;
            var9['children'] = var23;
            var9 = var16.bind(var4)(var22, var9);
            var8[2] = var9;
            var9 = {};
            var20 = var20.buttonContainer;
            var9['style'] = var20;
            var20 = 10;
            var12 = var12[var20];
            var12 = var15.bind(var4)(var12);
            var15 = var12.Button;
            var12 = {};
            var22 = 'active';
            var12['variant'] = var22;
            var12['text'] = var17;
            var17 = function onPress() {
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 11;
                var4 = var6[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.hideActionSheet;
                var4 = var4.bind(var5)();
                var3 = _closure2_slot4;
                var2 = _closure1_slot5;
                var2 = var2.PRIMARY;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var12['onPress'] = var17;
            var22 = var13 == var21;
            var17 = undefined;
            if(var22) { _fun0001_ip = 530; continue _fun0001 }
 526:
            var17 = var21.bind(var4)();
 530:
            var12['icon'] = var17;
            var17 = 'lg';
            var12['size'] = var17;
            var15 = var16.bind(var4)(var15, var12);
            var12 = new Array(2);
            var12[0] = var15;
            var15 = var13 != var19;
            var13 = null;
            if(!var15) { _fun0001_ip = 625; continue _fun0001 }
 565:
            var16 = _closure1_slot6;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var20];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Button;
            var14 = {};
            var20 = 'secondary';
            var14['variant'] = var20;
            var14['text'] = var19;
            var18 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 23; continue _fun0003 }
 13:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 23:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 11;
                    var4 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.hideActionSheet;
                    var4 = var4.bind(var5)();
                    var3 = _closure2_slot4;
                    var2 = _closure1_slot5;
                    var2 = var2.DISMISS;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var14['onPress'] = var18;
            var14['size'] = var17;
            var13 = var16.bind(var4)(var15, var14);
 625:
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[3] = var9;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
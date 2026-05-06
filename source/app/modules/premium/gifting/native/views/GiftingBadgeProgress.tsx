// app/modules/premium/gifting/native/views/GiftingBadgeProgress.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function GiftingBadgeProgressBar(arg1) {
        var1 = arg1;
        var16 = var1.percent;
        var11 = var1.startColor;
        var10 = var1.endColor;
        var1 = _closure1_slot8;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot3;
        var1 = {};
        var6 = var8.progressBarTrack;
        var1['style'] = var6;
        var7 = _closure1_slot6;
        var6 = _closure1_slot1;
        var9 = _closure1_slot2;
        var5 = 5;
        var5 = var9[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var9 = new Array(2);
        var9[0] = var11;
        var9[1] = var10;
        var5['colors'] = var9;
        var15 = 0;
        var9 = {'x': 0, 'y': 0};
        var5['start'] = var9;
        var9 = {'x': 1, 'y': 0};
        var5['end'] = var9;
        var9 = var8.progressBarFill;
        var8 = new Array(2);
        var8[0] = var9;
        var9 = {};
        var10 = global;
        var14 = var10.Math;
        var13 = var14.min;
        var12 = var10.Math;
        var11 = var12.max;
        var12 = var11.bind(var12)(var16, var15);
        var11 = 100;
        var13 = var13.bind(var14)(var12, var11);
        var10 = var10.HermesInternal;
        var12 = var10.concat;
        var11 = '';
        var10 = '%';
        var10 = var12.bind(var11)(var13, var10);
        var9['width'] = var10;
        var8[1] = var9;
        var5['style'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot9 = var1;
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
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getSingleRequirementThreshold;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TIER_COLORS;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var12 = 6;
    var4 = var6[var12];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['row'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var10 = 7;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['paddingHorizontal'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var9['gap'] = var13;
    var4['content'] = var9;
    var9 = {};
    var9['height'] = var12;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_NORMAL;
    var9['backgroundColor'] = var13;
    var13 = 'hidden';
    var9['overflow'] = var13;
    var4['progressBarTrack'] = var9;
    var9 = {};
    var9['height'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9['borderRadius'] = var12;
    var4['progressBarFill'] = var9;
    var9 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['minHeight'] = var10;
    var4['labels'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/native/views/GiftingBadgeProgress.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GiftingBadgeProgress(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var28 = var1.progress;
            var13 = var1.currentTier;
            var11 = var1.nextTier;
            var10 = var1.iconSize;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = 24;
case 2:
            var21 = var1.title;
            var1 = _closure1_slot8;
            var17 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 8;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var1 = 9;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isThemeDark;
            var1 = var1.bind(var2)(var3);
            var18 = '#40556A';
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var18 = '#279EFF';
case 4:
            var1 = _closure1_slot4;
            var2 = var1.bind(var4)(var13);
            var26 = var1.bind(var4)(var11);
            var6 = null;
            var1 = var6 != var11;
            var8 = 100;
            var20 = var8;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var15 = var26 - var2;
            var14 = 0;
            var1 = var8;
            if(!(var15 > var14)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = global;
            var5 = var9.Math;
            var3 = var5.min;
            var12 = var9.Math;
            var9 = var12.max;
            var2 = var28 - var2;
            var2 = var2 / var15;
            var2 = var2 * var8;
            var2 = var9.bind(var12)(var2, var14);
            var1 = var3.bind(var5)(var2, var8);
case 8:
            var20 = var1;
case 6:
            var19 = var18;
            if(!(var6 != var13)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = _closure1_slot5;
            var1 = var13.key;
            var19 = var2[var1];
case 10:
            if(!(var6 != var11)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = _closure1_slot5;
            var1 = var11.key;
            var18 = var2[var1];
case 12:
            var3 = _closure1_slot7;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var17.row;
            var1['style'] = var5;
            var8 = var6 != var13;
            if(!var8) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var12 = _closure1_slot6;
            var9 = _closure1_slot1;
            var14 = _closure1_slot2;
            var5 = 10;
            var5 = var14[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var13 = var13.simple_icon;
            var5['icon'] = var13;
            var5['size'] = var10;
            var8 = var12.bind(var4)(var9, var5);
case 14:
            var5 = new Array(3);
            var5[0] = var8;
            var12 = _closure1_slot7;
            var9 = _closure1_slot3;
            var8 = {};
            var13 = var17.content;
            var8['style'] = var13;
            var14 = var6 != var21;
            if(!var14) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var16 = _closure1_slot6;
            var15 = _closure1_slot0;
            var22 = _closure1_slot2;
            var13 = 11;
            var13 = var22[var13];
            var13 = var15.bind(var4)(var13);
            var15 = var13.Text;
            var13 = {};
            var22 = 'text-md/semibold';
            var13['variant'] = var22;
            var13['children'] = var21;
            var14 = var16.bind(var4)(var15, var13);
case 16:
            var13 = new Array(3);
            var13[0] = var14;
            var16 = _closure1_slot6;
            var15 = _closure1_slot9;
            var14 = {};
            var14['percent'] = var20;
            var14['startColor'] = var19;
            var14['endColor'] = var18;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
            var16 = _closure1_slot7;
            var15 = _closure1_slot3;
            var14 = {};
            var17 = var17.labels;
            var14['style'] = var17;
            var20 = _closure1_slot6;
            var24 = _closure1_slot0;
            var21 = _closure1_slot2;
            var19 = 11;
            var17 = var21[var19];
            var17 = var24.bind(var4)(var17);
            var18 = var17.Text;
            var17 = {'variant': 'text-xs/normal', 'color': 'text-strong'};
            var23 = 12;
            var22 = var21[var23];
            var22 = var24.bind(var4)(var22);
            var25 = var22.intl;
            var24 = var25.format;
            var22 = _closure1_slot1;
            var27 = 13;
            var21 = var21[var27];
            var21 = var22.bind(var4)(var21);
            var22 = var21.QsbVMM;
            var21 = {};
            var21['count'] = var28;
            var21 = var24.bind(var25)(var22, var21);
            var17['children'] = var21;
            var18 = var20.bind(var4)(var18, var17);
            var17 = new Array(2);
            var17[0] = var18;
            var18 = var6 != var11;
            if(!var18) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var21 = _closure1_slot6;
            var24 = _closure1_slot0;
            var22 = _closure1_slot2;
            var19 = var22[var19];
            var19 = var24.bind(var4)(var19);
            var20 = var19.Text;
            var19 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            var23 = var22[var23];
            var23 = var24.bind(var4)(var23);
            var25 = var23.intl;
            var24 = var25.format;
            var23 = _closure1_slot1;
            var22 = var22[var27];
            var22 = var23.bind(var4)(var22);
            var23 = var22.QsbVMM;
            var22 = {};
            var22['count'] = var26;
            var22 = var24.bind(var25)(var23, var22);
            var19['children'] = var22;
            var18 = var21.bind(var4)(var20, var19);
case 18:
            var17[1] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[2] = var14;
            var8['children'] = var13;
            var8 = var12.bind(var4)(var9, var8);
            var5[1] = var8;
            var6 = var6 != var11;
            if(!var6) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var9 = _closure1_slot6;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 10;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var11 = var11.simple_icon;
            var7['icon'] = var11;
            var7['size'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 20:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
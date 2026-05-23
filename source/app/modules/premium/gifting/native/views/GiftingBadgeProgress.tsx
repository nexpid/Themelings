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
        var1 = _closure1_slot7;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot5;
        var2 = _closure1_slot3;
        var1 = {};
        var6 = var8.progressBarTrack;
        var1['style'] = var6;
        var7 = _closure1_slot5;
        var6 = _closure1_slot3;
        var5 = {};
        var9 = var8.progressBarFill;
        var8 = new Array(2);
        var8[0] = var9;
        var9 = {};
        var10 = global;
        var14 = var10.Math;
        var13 = var14.min;
        var15 = var10.Math;
        var12 = var15.max;
        var11 = 0;
        var12 = var12.bind(var15)(var16, var11);
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
    var _closure1_slot8 = var1;
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
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['row'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9['gap'] = var12;
    var4['content'] = var9;
    var9 = {};
    var12 = 6;
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
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BRAND;
    var9['backgroundColor'] = var12;
    var4['progressBarFill'] = var9;
    var9 = {'flexDirection': 'row', 'justifyContent': 'flex-end', 'alignItems': 'center'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['minHeight'] = var10;
    var4['labels'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/native/views/GiftingBadgeProgress.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GiftingBadgeProgress(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var26 = var1.progress;
            var13 = var1.currentTier;
            var11 = var1.nextTier;
            var10 = var1.iconSize;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = 24;
case 2:
            var19 = var1.title;
            var1 = _closure1_slot7;
            var17 = var1.bind(var4)();
            var1 = _closure1_slot4;
            var25 = var1.bind(var4)(var11);
            var8 = null;
            var1 = var8 != var11;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = 0;
            var1 = var25 > var2;
case 4:
            var5 = 100;
            var18 = var5;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = global;
            var3 = var1.Math;
            var2 = var3.min;
            var12 = var1.Math;
            var9 = var12.max;
            var1 = var26 / var25;
            var6 = var1 * var5;
            var1 = 0;
            var1 = var9.bind(var12)(var6, var1);
            var18 = var2.bind(var3)(var1, var5);
case 6:
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var17.row;
            var1['style'] = var5;
            var6 = var8 == var13;
            var5 = undefined;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var13.simple_icon_url;
case 8:
            var6 = var8 != var5;
            if(!var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var12 = _closure1_slot5;
            var9 = _closure1_slot1;
            var14 = _closure1_slot2;
            var5 = 6;
            var5 = var14[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var13 = var13.simple_icon_url;
            var5['icon'] = var13;
            var5['size'] = var10;
            var6 = var12.bind(var4)(var9, var5);
case 10:
            var5 = new Array(3);
            var5[0] = var6;
            var12 = _closure1_slot6;
            var9 = _closure1_slot3;
            var6 = {};
            var13 = var17.content;
            var6['style'] = var13;
            var14 = var8 != var19;
            if(!var14) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var16 = _closure1_slot5;
            var15 = _closure1_slot0;
            var20 = _closure1_slot2;
            var13 = 7;
            var13 = var20[var13];
            var13 = var15.bind(var4)(var13);
            var15 = var13.Text;
            var13 = {};
            var20 = 'text-md/semibold';
            var13['variant'] = var20;
            var13['children'] = var19;
            var14 = var16.bind(var4)(var15, var13);
case 12:
            var13 = new Array(3);
            var13[0] = var14;
            var16 = _closure1_slot5;
            var15 = _closure1_slot8;
            var14 = {};
            var14['percent'] = var18;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
            var16 = _closure1_slot5;
            var15 = _closure1_slot3;
            var14 = {};
            var17 = var17.labels;
            var14['style'] = var17;
            var17 = var8 != var11;
            if(!var17) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var20 = _closure1_slot5;
            var22 = _closure1_slot0;
            var27 = _closure1_slot2;
            var18 = 7;
            var18 = var27[var18];
            var18 = var22.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            var21 = 8;
            var21 = var27[var21];
            var21 = var22.bind(var4)(var21);
            var24 = var21.intl;
            var23 = var24.format;
            var22 = _closure1_slot1;
            var21 = 9;
            var21 = var27[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.iIpfQe;
            var21 = {};
            var21['count'] = var26;
            var21['threshold'] = var25;
            var21 = var23.bind(var24)(var22, var21);
            var18['children'] = var21;
            var17 = var20.bind(var4)(var19, var18);
case 14:
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[2] = var14;
            var6['children'] = var13;
            var6 = var12.bind(var4)(var9, var6);
            var5[1] = var6;
            var9 = var8 == var11;
            var6 = undefined;
            if(var9) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var6 = var11.simple_icon_url;
case 16:
            var6 = var8 != var6;
            if(!var6) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var9 = _closure1_slot5;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 6;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var11 = var11.simple_icon_url;
            var7['icon'] = var11;
            var7['size'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 18:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
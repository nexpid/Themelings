// app/modules/remixing/native/components/UserMentionWithCardStyle.tsx
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
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot3 = var8;
    var4 = var4.jsxs;
    var _closure1_slot4 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.id;
            var23 = var1.avatar;
            var8 = var1.font;
            var2 = var1.fontSize;
            var10 = var1.color;
            var15 = var1.width;
            var17 = var1.mentionDisplayText;
            var3 = var1.position;
            var14 = var1.user;
            var1 = 1.3;
            var12 = var2 / var1;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var18 = 2;
            var1 = var7[var18];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var5)(var12);
            var21 = var1.font;
            var1 = 3;
            var1 = var7[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var5)(var12);
            var13 = var1.font;
            var1 = 4;
            var11 = var7[var1];
            var16 = var4.bind(var5)(var11);
            var11 = '@';
            var11 = var11 + var17;
            var22 = var16.bind(var5)(var9, var8, var11);
            var1 = var7[var1];
            var7 = var4.bind(var5)(var1);
            var1 = null;
            var11 = var1 == var14;
            var4 = '';
            if(var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = var14.globalName;
            if(!(var1 == var11)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var14.username;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var11 = var14.globalName;
case 6:
            var4 = var11;
case 2:
            var14 = var7.bind(var5)(var9, var8, var4);
            if(!(var1 != var21)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            if(!(var1 != var13)) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var9 = _closure1_slot0;
            var16 = _closure1_slot2;
            var7 = 5;
            var4 = var16[var7];
            var8 = var9.bind(var5)(var4);
            var4 = var8.getTextLineWidth;
            var8 = var4.bind(var8)(var21, var22);
            var4 = var16[var7];
            var11 = var9.bind(var5)(var4);
            var4 = var11.getTextLineWidth;
            var4 = var4.bind(var11)(var13, var14);
            var11 = var16[var7];
            var19 = var9.bind(var5)(var11);
            var17 = var19.centerAlignText;
            var27 = 1.4;
            var11 = var27 * var12;
            var33 = var19;
            var32 = var8;
            var31 = var3;
            var30 = var15;
            var29 = var11;
            var19 = var33[var17](var32, var31, var30, var29, var28);
            var7 = var16[var7];
            var9 = var9.bind(var5)(var7);
            var7 = var9.centerAlignText;
            var33 = var9;
            var32 = var4;
            var31 = var3;
            var30 = var15;
            var29 = var11;
            var11 = var33[var7](var32, var31, var30, var29, var28);
            var7 = var4 > var8;
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var28 = var19.x;
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var28 = var11.x;
case 12:
            var26 = var8;
            if(!var7) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var26 = var4;
case 13:
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 6;
            var4 = var15[var7];
            var24 = var8.bind(var5)(var4);
            var20 = var24.rect;
            var9 = 18;
            var32 = var28 - var9;
            var31 = var3.y;
            var3 = 36;
            var30 = var26 + var3;
            var3 = 4.6;
            var29 = var3 * var12;
            var33 = var24;
            var24 = var33[var20](var32, var31, var30, var29, var28);
            var3 = var15[var7];
            var4 = var8.bind(var5)(var3);
            var3 = var4.rrect;
            var20 = var3.bind(var4)(var24, var9, var9);
            var25 = var2 / var18;
            var4 = _closure1_slot4;
            var2 = var15[var7];
            var2 = var8.bind(var5)(var2);
            var3 = var2.Group;
            var2 = {};
            var9 = _closure1_slot3;
            var17 = _closure1_slot1;
            var6 = 7;
            var6 = var15[var6];
            var16 = var17.bind(var5)(var6);
            var6 = {};
            var6['backgroundRect'] = var20;
            var20 = 1;
            var6['borderSize'] = var20;
            var16 = var9.bind(var5)(var16, var6);
            var6 = new Array(4);
            var6[0] = var16;
            var20 = 8;
            var16 = var15[var20];
            var17 = var17.bind(var5)(var16);
            var16 = {};
            var16['avatarImage'] = var23;
            var16['avatarSize'] = var25;
            var23 = {};
            var26 = var26 / var18;
            var26 = var28 + var26;
            var25 = var27 * var25;
            var25 = var26 - var25;
            var23['x'] = var25;
            var25 = var24.y;
            var24 = 1.5;
            var24 = var12 / var24;
            var24 = var25 - var24;
            var23['y'] = var24;
            var16['position'] = var23;
            var16 = var9.bind(var5)(var17, var16);
            var6[1] = var16;
            var16 = var15[var7];
            var16 = var8.bind(var5)(var16);
            var17 = var16.Text;
            var16 = {};
            var16['text'] = var22;
            var16['font'] = var21;
            var21 = var19.x;
            var16['x'] = var21;
            var19 = var19.y;
            var19 = var19 + var20;
            var18 = var18 * var12;
            var18 = var19 + var18;
            var16['y'] = var18;
            var16['color'] = var10;
            var16 = var9.bind(var5)(var17, var16);
            var6[2] = var16;
            var7 = var15[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {};
            var7['text'] = var14;
            var7['font'] = var13;
            var13 = var11.x;
            var7['x'] = var13;
            var11 = var11.y;
            var11 = var11 + var12;
            var7['y'] = var11;
            var7['color'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[3] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 7:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/components/UserMentionWithCardStyle.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
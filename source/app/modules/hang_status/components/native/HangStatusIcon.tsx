// app/modules/hang_status/components/native/HangStatusIcon.tsx
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
    var10 = 0;
    var7 = var6[var10];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Image;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HangStatusTypes;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var7 = var4.Fragment;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flexShrink'] = var10;
    var4['emoji'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = "function HangStatusIconTsx1(){const{speaking}=this.__closure;var _speaking$get,_speaking;return{display:((_speaking$get=(_speaking=speaking)===null||_speaking===void 0?void 0:_speaking.get())!==null&&_speaking$get!==void 0?_speaking$get:true)?'flex':'none'};}";
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = "function HangStatusIconTsx2(){const{speaking}=this.__closure;var _speaking$get,_speaking;return{display:((_speaking$get=(_speaking=speaking)===null||_speaking===void 0?void 0:_speaking.get())!==null&&_speaking$get!==void 0?_speaking$get:true)?'none':'flex'};}";
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hang_status/components/native/HangStatusIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var17 = var3.emojiStyle;
            var9 = var3.textEmojiStyle;
            var1 = var3.hangStatusActivity;
            var10 = var3.speaking;
            var _closure2_slot0 = var10;
            var4 = _closure1_slot8;
            var6 = undefined;
            var8 = var4.bind(var6)();
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 5;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var5 = var4.AnimateEmoji;
            var4 = var5.useSetting;
            var14 = var4.bind(var5)();
            var11 = null;
            var5 = var11 == var1;
            var4 = undefined;
            if(var5) { _fun0001_ip = 113; continue _fun0001 }
 93:
            var5 = var1.emoji;
            var7 = var11 == var5;
            var4 = undefined;
            if(var7) { _fun0001_ip = 113; continue _fun0001 }
 108:
            var4 = var5.id;
 113:
            var4 = var11 != var4;
            var21 = null;
            if(!var4) { _fun0001_ip = 252; continue _fun0001 }
 125:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 6;
            var4 = var7[var4];
            var7 = var5.bind(var6)(var4);
            var5 = var7.getEmojiURL;
            var4 = {};
            var13 = var11 == var1;
            var12 = undefined;
            if(var13) { _fun0001_ip = 182; continue _fun0001 }
 162:
            var13 = var1.emoji;
            var15 = var11 == var13;
            var12 = undefined;
            if(var15) { _fun0001_ip = 182; continue _fun0001 }
 177:
            var12 = var13.id;
 182:
            var4['id'] = var12;
            var12 = global;
            var13 = var12.Boolean;
            var15 = var11 == var1;
            var12 = undefined;
            if(var15) { _fun0001_ip = 224; continue _fun0001 }
 203:
            var15 = var1.emoji;
            var16 = var11 == var15;
            var12 = undefined;
            if(var16) { _fun0001_ip = 224; continue _fun0001 }
 218:
            var12 = var15.animated;
 224:
            if(!var12) { _fun0001_ip = 230; continue _fun0001 }
 227:
            var12 = var14;
 230:
            var12 = var13.bind(var6)(var12);
            var4['animated'] = var12;
            var12 = 48;
            var4['size'] = var12;
            var21 = var5.bind(var7)(var4);
 252:
            var5 = var11 == var1;
            var4 = undefined;
            if(var5) { _fun0001_ip = 281; continue _fun0001 }
 261:
            var5 = var1.emoji;
            var7 = var11 == var5;
            var4 = undefined;
            if(var7) { _fun0001_ip = 281; continue _fun0001 }
 276:
            var4 = var5.id;
 281:
            var4 = var11 != var4;
            var18 = null;
            if(!var4) { _fun0001_ip = 366; continue _fun0001 }
 290:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 6;
            var4 = var7[var4];
            var7 = var5.bind(var6)(var4);
            var5 = var7.getEmojiURL;
            var4 = {'id': null, 'animated': false, 'size': 48};
            var13 = var11 == var1;
            var12 = undefined;
            if(var13) { _fun0001_ip = 355; continue _fun0001 }
 335:
            var13 = var1.emoji;
            var14 = var11 == var13;
            var12 = undefined;
            if(var14) { _fun0001_ip = 355; continue _fun0001 }
 350:
            var12 = var13.id;
 355:
            var4['id'] = var12;
            var18 = var5.bind(var7)(var4);
 366:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var15 = 7;
            var7 = var4[var15];
            var13 = var5.bind(var6)(var7);
            var12 = var13.useAnimatedStyle;
            var7 = function H() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {};
                    var3 = _closure2_slot0;
                    var2 = null;
                    var5 = var2 == var3;
                    var3 = undefined;
                    if(var5) { _fun0002_ip = 33; continue _fun0002 }
 20:
                    var5 = _closure2_slot0;
                    var4 = var5.get;
                    var3 = var4.bind(var5)();
 33:
                    if(!(var2 != var3)) { _fun0002_ip = 44; continue _fun0002 }
 37:
                    var2 = 'none';
                    if(!var3) { _fun0002_ip = 48; continue _fun0002 }
 44:
                    var2 = 'flex';
 48:
                    var1['display'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var14['speaking'] = var10;
            var7['__closure'] = var14;
            var14 = 11307615727288.0;
            var7['__workletHash'] = var14;
            var14 = _closure1_slot9;
            var7['__initData'] = var14;
            var20 = var12.bind(var13)(var7);
            var4 = var4[var15];
            var5 = var5.bind(var6)(var4);
            var4 = var5.useAnimatedStyle;
            var2 = function I() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = {};
                    var3 = _closure2_slot0;
                    var2 = null;
                    var5 = var2 == var3;
                    var3 = undefined;
                    if(var5) { _fun0003_ip = 33; continue _fun0003 }
 20:
                    var5 = _closure2_slot0;
                    var4 = var5.get;
                    var3 = var4.bind(var5)();
 33:
                    if(!(var2 != var3)) { _fun0003_ip = 44; continue _fun0003 }
 37:
                    var2 = 'flex';
                    if(!var3) { _fun0003_ip = 48; continue _fun0003 }
 44:
                    var2 = 'none';
 48:
                    var1['display'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var7['speaking'] = var10;
            var2['__closure'] = var7;
            var7 = 11091420881755.0;
            var2['__workletHash'] = var7;
            var7 = _closure1_slot10;
            var2['__initData'] = var7;
            var16 = var4.bind(var5)(var2);
            var2 = var11 == var1;
            var4 = undefined;
            if(var2) { _fun0001_ip = 519; continue _fun0001 }
 514:
            var4 = var1.state;
 519:
            var2 = _closure1_slot4;
            var2 = var2.CUSTOM;
            if(!(var4 !== var2)) { _fun0001_ip = 622; continue _fun0001 }
 533:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.getHangStatusDetails;
            var2 = var2.bind(var4)(var1);
            var4 = var11 == var2;
            var10 = undefined;
            if(var4) { _fun0001_ip = 578; continue _fun0001 }
 573:
            var10 = var2.icon;
 578:
            var4 = var11 != var10;
            var2 = null;
            if(!var4) { _fun0001_ip = 620; continue _fun0001 }
 587:
            var7 = _closure1_slot5;
            var5 = _closure1_slot3;
            var4 = {};
            var4['source'] = var10;
            var10 = '';
            var4['alt'] = var10;
            var4['style'] = var17;
            var2 = var7.bind(var6)(var5, var4);
 620:
            return var2;
 622:
            var7 = var1.emoji;
            var2 = var11 == var7;
            var1 = null;
            if(var2) { _fun0001_ip = 909; continue _fun0001 }
 640:
            var2 = var7.id;
            if(!(var11 != var2)) { _fun0001_ip = 828; continue _fun0001 }
 652:
            var5 = _closure1_slot7;
            var4 = _closure1_slot6;
            var2 = {};
            var10 = var11 != var21;
            var12 = null;
            if(!var10) { _fun0001_ip = 733; continue _fun0001 }
 671:
            var14 = _closure1_slot5;
            var13 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var15];
            var10 = var13.bind(var6)(var10);
            var13 = var10.Image;
            var10 = {};
            var19 = {};
            var19['uri'] = var21;
            var10['source'] = var19;
            var19 = new Array(2);
            var19[0] = var17;
            var19[1] = var20;
            var10['style'] = var19;
            var12 = var14.bind(var6)(var13, var10);
 733:
            var10 = new Array(2);
            var10[0] = var12;
            var12 = var11 != var18;
            var11 = null;
            if(!var12) { _fun0001_ip = 812; continue _fun0001 }
 750:
            var14 = _closure1_slot5;
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var12 = var12[var15];
            var12 = var13.bind(var6)(var12);
            var13 = var12.Image;
            var12 = {};
            var15 = {};
            var15['uri'] = var18;
            var12['source'] = var15;
            var15 = new Array(2);
            var15[0] = var17;
            var15[1] = var16;
            var12['style'] = var15;
            var11 = var14.bind(var6)(var13, var12);
 812:
            var10[1] = var11;
            var2['children'] = var10;
            var2 = var5.bind(var6)(var4, var2);
            _fun0001_ip = 906; continue _fun0001;
 828:
            var5 = _closure1_slot5;
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 8;
            var3 = var10[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.Text;
            var3 = {};
            var10 = 'text-sm/normal';
            var3['variant'] = var10;
            var10 = var8.emoji;
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var3['style'] = var8;
            var7 = var7.name;
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 906:
            var1 = var2;
 909:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
// app/modules/applications/native/BotTag.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var2 = function getBotLabel() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arguments[0];
            var6 = undefined;
            if(!(var3 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot4;
            var3 = var1.BOT;
case 2:
            var1 = _closure1_slot4;
            var1 = var1.SYSTEM_DM;
            if(!(var1 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot4;
            var1 = var1.OFFICIAL;
            if(!(var1 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var1 = _closure1_slot4;
            var1 = var1.SERVER;
            if(!(var1 !== var3)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1 = _closure1_slot4;
            var1 = var1.BOT;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 6;
            var3 = var7[var1];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1["9RNkeF"];
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 6;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.PuJGuM;
            var1 = var4.bind(var5)(var3);
            _fun0001_ip = 9; continue _fun0001;
case 4:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 6;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.lKQ7Wt;
            var1 = var3.bind(var4)(var2);
case 9:
            return var1;
        }
    };
    var _closure1_slot8 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var14 = 1;
    var5 = var7[var14];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.BotTagTypes;
    var _closure1_slot4 = var5;
    var8 = 3;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.jsx;
    var _closure1_slot5 = var9;
    var8 = var8.jsxs;
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var7[var8];
    var10 = var6.bind(var1)(var8);
    var9 = var10.createStyles;
    var8 = {};
    var11 = {'paddingLeft': 4, 'paddingRight': 4, 'borderRadius': null, 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'center', 'gap': 1};
    var12 = 5;
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.xs;
    var11['borderRadius'] = var15;
    var8['tag'] = var11;
    var11 = {};
    var11['paddingLeft'] = var14;
    var8['verifiedTagLeftPadding'] = var11;
    var11 = {};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BRAND;
    var11['backgroundColor'] = var14;
    var8['tagNormal'] = var11;
    var11 = {};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.WHITE;
    var11['backgroundColor'] = var14;
    var8['tagInverted'] = var11;
    var11 = {};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.WHITE;
    var11['color'] = var14;
    var8['tagTextNormal'] = var11;
    var11 = {};
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BRAND;
    var11['color'] = var12;
    var8['tagTextInverted'] = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot7 = var8;
    var4 = function BotTag(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.invertColor;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var5 = false;
case 10:
            var2 = var1.type;
            if(!(var2 === var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var3 = _closure1_slot4;
            var2 = var3.BOT;
case 12:
            var12 = var1.style;
            var1 = var1.verified;
            var3 = _closure1_slot7;
            var8 = var3.bind(var4)();
            var3 = _closure1_slot8;
            var9 = var3.bind(var4)(var2);
            var3 = _closure1_slot4;
            var3 = var3.OFFICIAL;
            var3 = var2 === var3;
            if(var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var7 = _closure1_slot4;
            var7 = var7.SYSTEM_DM;
            var3 = var2 === var7;
case 14:
            if(var1) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var1 = var3;
case 16:
            var10 = null;
            var7 = null;
            if(!var1) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var14 = _closure1_slot5;
            var13 = _closure1_slot0;
            var17 = _closure1_slot2;
            var11 = 7;
            var11 = var17[var11];
            var11 = var13.bind(var4)(var11);
            var13 = var11.CheckmarkSmallBoldIcon;
            var11 = {};
            var15 = 'xs';
            var11['size'] = var15;
            var16 = _closure1_slot1;
            var15 = 5;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.colors;
            var15 = var15.WHITE;
            var11['color'] = var15;
            var7 = var14.bind(var4)(var13, var11);
case 18:
            if(var5) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var13 = var8.tagNormal;
            _fun0002_ip = 22; continue _fun0002;
case 20:
            var13 = var8.tagInverted;
case 22:
            if(var5) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var11 = var8.tagTextNormal;
            _fun0002_ip = 25; continue _fun0002;
case 23:
            var11 = var8.tagTextInverted;
case 25:
            var5 = var10 != var7;
            var10 = null;
            if(!var5) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var10 = var8.verifiedTagLeftPadding;
case 26:
            if(var3) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            if(var1) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var1 = _closure1_slot4;
            var1 = var1.SERVER;
            if(!(var2 !== var1)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var5 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 6;
            var2 = var14[var1];
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var14[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.qwJHjo;
            var5 = var2.bind(var3)(var1);
            _fun0002_ip = 34; continue _fun0002;
case 32:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 6;
            var2 = var15[var1];
            var2 = var14.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var15[var1];
            var1 = var14.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1["39trQT"];
            var5 = var2.bind(var3)(var1);
case 34:
            _fun0002_ip = 35; continue _fun0002;
case 30:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 6;
            var2 = var15[var1];
            var2 = var14.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var15[var1];
            var1 = var14.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.g76OcH;
            var5 = var2.bind(var3)(var1);
case 35:
            _fun0002_ip = 36; continue _fun0002;
case 28:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 6;
            var2 = var15[var1];
            var2 = var14.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var15[var1];
            var1 = var14.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1["7s687k"];
            var5 = var2.bind(var3)(var1);
case 36:
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {'style': null, 'accessible': true, 'accessibilityRole': 'image'};
            var14 = var8.tag;
            var8 = new Array(4);
            var8[0] = var14;
            var8[1] = var13;
            var8[2] = var12;
            var8[3] = var10;
            var1['style'] = var8;
            var1['accessibilityLabel'] = var5;
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 8;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-xs/semibold', 'lineClamp': 1, 'maxFontSizeMultiplier': 2};
            var10 = new Array(1);
            var10[0] = var11;
            var6['style'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4['Types'] = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/applications/native/BotTag.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['getBotLabel'] = var2;
    return var1;
})();
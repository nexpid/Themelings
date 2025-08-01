// app/uikit-native/BotTag.tsx
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
 0:
            var3 = arguments[0];
            var6 = undefined;
            if(!(var3 === var6)) { _fun0001_ip = 22; continue _fun0001 }
 9:
            var1 = _closure1_slot4;
            var3 = var1.BOT;
 22:
            var1 = _closure1_slot4;
            var1 = var1.SYSTEM_DM;
            if(!(var1 !== var3)) { _fun0001_ip = 197; continue _fun0001 }
 42:
            var1 = _closure1_slot4;
            var1 = var1.OFFICIAL;
            if(!(var1 !== var3)) { _fun0001_ip = 197; continue _fun0001 }
 59:
            var1 = _closure1_slot4;
            var1 = var1.SERVER;
            if(!(var1 !== var3)) { _fun0001_ip = 140; continue _fun0001 }
 73:
            var1 = _closure1_slot4;
            var1 = var1.BOT;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 7;
            var3 = var7[var1];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.9RNkeH;
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 252; continue _fun0001;
 140:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 7;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.PuJGuL;
            var1 = var4.bind(var5)(var3);
            _fun0001_ip = 252; continue _fun0001;
 197:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.lKQ7Wl;
            var1 = var3.bind(var4)(var2);
 252:
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
    var15 = 1;
    var5 = var7[var15];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var14 = var5.Fonts;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.BotTagTypes;
    var _closure1_slot4 = var5;
    var8 = 4;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.jsx;
    var _closure1_slot5 = var9;
    var8 = var8.jsxs;
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var7[var8];
    var10 = var6.bind(var1)(var8);
    var9 = var10.createStyles;
    var8 = {};
    var11 = {'height': 16, 'paddingLeft': 4, 'paddingRight': 4, 'borderRadius': null, 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'center', 'gap': 1};
    var12 = 6;
    var16 = var7[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var11['borderRadius'] = var16;
    var8['tag'] = var11;
    var11 = {};
    var11['paddingLeft'] = var15;
    var8['verifiedTagLeftPadding'] = var11;
    var11 = {};
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_BRAND;
    var11['backgroundColor'] = var15;
    var8['tagNormal'] = var11;
    var11 = {};
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.WHITE;
    var11['backgroundColor'] = var15;
    var8['tagInverted'] = var11;
    var11 = {};
    var15 = 12;
    var11['fontSize'] = var15;
    var14 = var14.PRIMARY_SEMIBOLD;
    var11['fontFamily'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.WHITE;
    var11['color'] = var14;
    var8['tagText'] = var11;
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
    var12 = var12.BG_BRAND;
    var11['color'] = var12;
    var8['tagTextInverted'] = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot7 = var8;
    var4 = function BotTag(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = var2.invertColor;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0002_ip = 19; continue _fun0002 }
 17:
            var1 = false;
 19:
            var5 = var2.type;
            if(!(var5 === var4)) { _fun0002_ip = 41; continue _fun0002 }
 28:
            var3 = _closure1_slot4;
            var5 = var3.BOT;
 41:
            var12 = var2.style;
            var2 = var2.verified;
            var3 = _closure1_slot7;
            var10 = var3.bind(var4)();
            var3 = _closure1_slot8;
            var9 = var3.bind(var4)(var5);
            var3 = _closure1_slot4;
            var3 = var3.OFFICIAL;
            var3 = var5 === var3;
            var7 = var5;
            if(var3) { _fun0002_ip = 106; continue _fun0002 }
 92:
            var5 = _closure1_slot4;
            var5 = var5.SYSTEM_DM;
            var3 = var7 === var5;
 106:
            if(var2) { _fun0002_ip = 112; continue _fun0002 }
 109:
            var2 = var3;
 112:
            var8 = null;
            var7 = null;
            if(!var2) { _fun0002_ip = 196; continue _fun0002 }
 119:
            var5 = _closure1_slot5;
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 8;
            var2 = var14[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.CheckmarkSmallBoldIcon;
            var2 = {};
            var11 = 'xs';
            var2['size'] = var11;
            var13 = _closure1_slot1;
            var11 = 6;
            var11 = var14[var11];
            var11 = var13.bind(var4)(var11);
            var11 = var11.colors;
            var11 = var11.WHITE;
            var2['color'] = var11;
            var7 = var5.bind(var4)(var3, var2);
 196:
            if(var1) { _fun0002_ip = 207; continue _fun0002 }
 199:
            var13 = var10.tagNormal;
            _fun0002_ip = 213; continue _fun0002;
 207:
            var13 = var10.tagInverted;
 213:
            if(var1) { _fun0002_ip = 224; continue _fun0002 }
 216:
            var11 = var10.tagTextNormal;
            _fun0002_ip = 230; continue _fun0002;
 224:
            var11 = var10.tagTextInverted;
 230:
            var1 = var8 != var7;
            var8 = null;
            if(!var1) { _fun0002_ip = 245; continue _fun0002 }
 239:
            var8 = var10.verifiedTagLeftPadding;
 245:
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var14 = var10.tag;
            var5 = new Array(4);
            var5[0] = var14;
            var5[1] = var13;
            var5[2] = var12;
            var5[3] = var8;
            var1['style'] = var5;
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 9;
            var6 = var12[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.LegacyText;
            var6 = {};
            var12 = 2;
            var6['maxFontSizeMultiplier'] = var12;
            var12 = var10.tagText;
            var10 = new Array(2);
            var10[0] = var12;
            var10[1] = var11;
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
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'uikit-native/BotTag.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['getBotLabel'] = var2;
    return var1;
})();
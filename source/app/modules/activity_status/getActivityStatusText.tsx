// app/modules/activity_status/getActivityStatusText.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityTypes;
    var _closure1_slot3 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activity_status/getActivityStatusText.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getActivityStatusText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var7 = arguments[1];
            var3 = undefined;
            if(!(var7 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = false;
case 2:
            var4 = null;
            var2 = var4 == var5;
            var1 = undefined;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var5.name;
case 4:
            var6 = '';
            var2 = null;
            if(!(var6 !== var1)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var4 == var5;
            var1 = undefined;
            if(var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var5.name;
case 8:
            var2 = var1;
case 6:
            var8 = var4 == var5;
            var1 = undefined;
            if(var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var5.details;
case 10:
            var14 = null;
            if(!(var6 !== var1)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = var4 == var5;
            var1 = undefined;
            if(var8) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = var5.details;
case 14:
            var14 = var1;
case 12:
            var8 = var4 == var5;
            var1 = undefined;
            if(var8) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var1 = var5.state;
case 16:
            var8 = null;
            if(!(var6 !== var1)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var6 = var4 == var5;
            var1 = undefined;
            if(var6) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var1 = var5.state;
case 20:
            var8 = var1;
case 18:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 1;
            var6 = var10[var6];
            var10 = var9.bind(var3)(var6);
            var9 = var10.getIsActivityStatusNoVerbEnabled;
            var6 = 'getActivityStatusText';
            var6 = var9.bind(var10)(var6);
            var9 = var4 == var5;
            var10 = undefined;
            if(var9) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var10 = var5.type;
case 22:
            var9 = _closure1_slot3;
            var9 = var9.STREAMING;
            var11 = var2;
            if(!(var10 === var9)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var11 = var2;
            if(!(var4 != var14)) { _fun0001_ip = 24; continue _fun0001 }
case 26:
            var11 = var14;
case 24:
            var9 = var4 == var5;
            var10 = undefined;
            if(var9) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var10 = var5.status_display_type;
case 27:
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var15 = 2;
            var9 = var9[var15];
            var9 = var12.bind(var3)(var9);
            var9 = var9.StatusDisplayTypes;
            var9 = var9.NAME;
            if(!(var10 === var9)) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var9 = var2;
            if(!(var4 == var2)) { _fun0001_ip = 31; continue _fun0001 }
case 29:
            var10 = var4 == var5;
            var12 = undefined;
            if(var10) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var12 = var5.status_display_type;
case 32:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var15];
            var10 = var13.bind(var3)(var10);
            var10 = var10.StatusDisplayTypes;
            var10 = var10.STATE;
            if(!(var12 === var10)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var9 = var8;
            if(!(var4 == var9)) { _fun0001_ip = 31; continue _fun0001 }
case 34:
            var10 = var4 == var5;
            var12 = undefined;
            if(var10) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var12 = var5.status_display_type;
case 36:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var15];
            var10 = var13.bind(var3)(var10);
            var10 = var10.StatusDisplayTypes;
            var10 = var10.DETAILS;
            var10 = var12 === var10;
            if(!var10) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var10 = var4 != var14;
case 38:
            var9 = var11;
            if(!var10) { _fun0001_ip = 31; continue _fun0001 }
case 40:
            var9 = var14;
case 31:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 3;
            var10 = var12[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.bind(var3)(var5);
            if(var10) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var10 = var4 == var5;
            var11 = undefined;
            if(var10) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var11 = var5.type;
case 43:
            var10 = _closure1_slot3;
            var10 = var10.PLAYING;
            if(!(var11 === var10)) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            if(!(var4 == var9)) { _fun0001_ip = 47; continue _fun0001 }
case 45:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 6;
            var10 = var12[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.bind(var3)(var5);
            if(!var10) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            if(!var7) { _fun0001_ip = 48; continue _fun0001 }
case 50:
            if(!(var4 == var8)) { _fun0001_ip = 51; continue _fun0001 }
case 48:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 7;
            var10 = var12[var10];
            var11 = var11.bind(var3)(var10);
            var10 = var11.isStageActivity;
            var10 = var10.bind(var11)(var5);
            if(!var10) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            if(!(var4 == var2)) { _fun0001_ip = 54; continue _fun0001 }
case 52:
            var10 = var4 == var5;
            var11 = undefined;
            if(var10) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var11 = var5.type;
case 55:
            var10 = _closure1_slot3;
            var10 = var10.LISTENING;
            if(!(var11 === var10)) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            if(!(var4 == var9)) { _fun0001_ip = 59; continue _fun0001 }
case 57:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 8;
            var10 = var12[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.bind(var3)(var5);
            if(!var10) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            if(!var7) { _fun0001_ip = 60; continue _fun0001 }
case 62:
            if(!(var4 == var14)) { _fun0001_ip = 63; continue _fun0001 }
case 60:
            var7 = var4 == var5;
            var10 = undefined;
            if(var7) { _fun0001_ip = 64; continue _fun0001 }
case 65:
            var10 = var5.type;
case 64:
            var7 = _closure1_slot3;
            var7 = var7.WATCHING;
            if(!(var10 === var7)) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            if(!(var4 == var9)) { _fun0001_ip = 68; continue _fun0001 }
case 66:
            var7 = var4 == var5;
            var10 = undefined;
            if(var7) { _fun0001_ip = 69; continue _fun0001 }
case 70:
            var10 = var5.type;
case 69:
            var7 = _closure1_slot3;
            var7 = var7.COMPETING;
            if(!(var10 === var7)) { _fun0001_ip = 71; continue _fun0001 }
case 72:
            if(!(var4 == var9)) { _fun0001_ip = 73; continue _fun0001 }
case 71:
            var10 = var4 == var5;
            var7 = undefined;
            if(var10) { _fun0001_ip = 74; continue _fun0001 }
case 75:
            var7 = var5.type;
case 74:
            var5 = _closure1_slot3;
            var5 = var5.STREAMING;
            if(!(var7 === var5)) { _fun0001_ip = 76; continue _fun0001 }
case 77:
            if(!(var4 == var9)) { _fun0001_ip = 78; continue _fun0001 }
case 76:
            var5 = {};
            _fun0001_ip = 79; continue _fun0001;
case 78:
            var7 = {};
            var10 = var9;
            if(var6) { _fun0001_ip = 80; continue _fun0001 }
case 81:
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 5;
            var13 = var16[var11];
            var13 = var12.bind(var3)(var13);
            var15 = var13.intl;
            var13 = var15.format;
            var11 = var16[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.t;
            var12 = var11.0wJXSk;
            var11 = {};
            var11['name'] = var9;
            var10 = var13.bind(var15)(var12, var11);
case 80:
            var7['text'] = var10;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 5;
            var12 = var15[var10];
            var12 = var11.bind(var3)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var10 = var15[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.t;
            var11 = var10.0wJXSk;
            var10 = {};
            var10['name'] = var9;
            var10 = var12.bind(var13)(var11, var10);
            var7['tooltip'] = var10;
            var5 = var7;
case 79:
            _fun0001_ip = 82; continue _fun0001;
case 73:
            var7 = {};
            var10 = var9;
            if(var6) { _fun0001_ip = 83; continue _fun0001 }
case 84:
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 5;
            var13 = var16[var11];
            var13 = var12.bind(var3)(var13);
            var15 = var13.intl;
            var13 = var15.format;
            var11 = var16[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.t;
            var12 = var11.QQ2wVF;
            var11 = {};
            var11['name'] = var9;
            var10 = var13.bind(var15)(var12, var11);
case 83:
            var7['text'] = var10;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 5;
            var12 = var15[var10];
            var12 = var11.bind(var3)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var10 = var15[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.t;
            var11 = var10.QQ2wVF;
            var10 = {};
            var10['name'] = var9;
            var10 = var12.bind(var13)(var11, var10);
            var7['tooltip'] = var10;
            var5 = var7;
case 82:
            _fun0001_ip = 85; continue _fun0001;
case 68:
            var7 = {};
            var10 = var9;
            if(var6) { _fun0001_ip = 86; continue _fun0001 }
case 87:
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 5;
            var13 = var16[var11];
            var13 = var12.bind(var3)(var13);
            var15 = var13.intl;
            var13 = var15.format;
            var11 = var16[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.t;
            var12 = var11.pW3Ip6;
            var11 = {};
            var11['name'] = var9;
            var10 = var13.bind(var15)(var12, var11);
case 86:
            var7['text'] = var10;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 5;
            var12 = var15[var10];
            var12 = var11.bind(var3)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var10 = var15[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.t;
            var11 = var10.pW3Ip6;
            var10 = {};
            var10['name'] = var9;
            var10 = var12.bind(var13)(var11, var10);
            var7['tooltip'] = var10;
            var5 = var7;
case 85:
            _fun0001_ip = 88; continue _fun0001;
case 63:
            var7 = {};
            var10 = var14;
            if(var6) { _fun0001_ip = 89; continue _fun0001 }
case 90:
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 5;
            var13 = var16[var11];
            var13 = var12.bind(var3)(var13);
            var15 = var13.intl;
            var13 = var15.format;
            var11 = var16[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.t;
            var12 = var11.pW3Ip6;
            var11 = {};
            var11['name'] = var14;
            var10 = var13.bind(var15)(var12, var11);
case 89:
            var7['text'] = var10;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 5;
            var12 = var15[var10];
            var12 = var11.bind(var3)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var10 = var15[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.t;
            var11 = var10.pW3Ip6;
            var10 = {};
            var10['name'] = var14;
            var10 = var12.bind(var13)(var11, var10);
            var7['tooltip'] = var10;
            var5 = var7;
case 88:
            _fun0001_ip = 91; continue _fun0001;
case 59:
            var7 = {};
            var10 = var9;
            if(var6) { _fun0001_ip = 92; continue _fun0001 }
case 93:
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 5;
            var13 = var15[var11];
            var13 = var12.bind(var3)(var13);
            var14 = var13.intl;
            var13 = var14.format;
            var11 = var15[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.t;
            var12 = var11.Vnuxub;
            var11 = {};
            var11['name'] = var9;
            var10 = var13.bind(var14)(var12, var11);
case 92:
            var7['text'] = var10;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 5;
            var12 = var14[var10];
            var12 = var11.bind(var3)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var10 = var14[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.t;
            var11 = var10.Vnuxub;
            var10 = {};
            var10['name'] = var9;
            var10 = var12.bind(var13)(var11, var10);
            var7['tooltip'] = var10;
            var5 = var7;
case 91:
            _fun0001_ip = 94; continue _fun0001;
case 54:
            var7 = {};
            var10 = var2;
            if(var6) { _fun0001_ip = 95; continue _fun0001 }
case 96:
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 5;
            var13 = var15[var11];
            var13 = var12.bind(var3)(var13);
            var14 = var13.intl;
            var13 = var14.format;
            var11 = var15[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.t;
            var12 = var11.pW3Ip6;
            var11 = {};
            var11['name'] = var2;
            var10 = var13.bind(var14)(var12, var11);
case 95:
            var7['text'] = var10;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 5;
            var12 = var14[var10];
            var12 = var11.bind(var3)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var10 = var14[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.t;
            var11 = var10.pW3Ip6;
            var10 = {};
            var10['name'] = var2;
            var10 = var12.bind(var13)(var11, var10);
            var7['tooltip'] = var10;
            var5 = var7;
case 94:
            return var5;
case 51:
            var7 = var8.split;
            var5 = ';';
            var7 = var7.bind(var8)(var5);
            var4 = var4 == var7;
            var11 = undefined;
            if(var4) { _fun0001_ip = 97; continue _fun0001 }
case 98:
            var5 = var7.join;
            var4 = ', ';
            var11 = var5.bind(var7)(var4);
case 97:
            var4 = {};
            var5 = var11;
            if(var6) { _fun0001_ip = 99; continue _fun0001 }
case 100:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 5;
            var10 = var13[var7];
            var10 = var8.bind(var3)(var10);
            var12 = var10.intl;
            var10 = var12.format;
            var7 = var13[var7];
            var7 = var8.bind(var3)(var7);
            var7 = var7.t;
            var8 = var7.Vnuxub;
            var7 = {};
            var7['name'] = var11;
            var5 = var10.bind(var12)(var8, var7);
case 99:
            var4['text'] = var5;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 5;
            var8 = var12[var5];
            var8 = var7.bind(var3)(var8);
            var10 = var8.intl;
            var8 = var10.formatToPlainString;
            var5 = var12[var5];
            var5 = var7.bind(var3)(var5);
            var5 = var5.t;
            var7 = var5.Vnuxub;
            var5 = {};
            var5['name'] = var11;
            var5 = var8.bind(var10)(var7, var5);
            var4['tooltip'] = var5;
            return var4;
case 47:
            var4 = {};
            var5 = var9;
            if(var6) { _fun0001_ip = 101; continue _fun0001 }
case 102:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 5;
            var8 = var11[var6];
            var8 = var7.bind(var3)(var8);
            var10 = var8.intl;
            var8 = var10.format;
            var6 = var11[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.t;
            var7 = var6.lFApm5;
            var6 = {};
            var6['game'] = var9;
            var5 = var8.bind(var10)(var7, var6);
case 101:
            var4['text'] = var5;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 5;
            var7 = var10[var5];
            var7 = var6.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var5 = var10[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.t;
            var6 = var5.lFApm5;
            var5 = {};
            var5['game'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var4['tooltip'] = var5;
            return var4;
case 41:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 4;
            var1 = var5[var1];
            var1 = var4.bind(var3)(var1);
            var2 = var1.bind(var3)(var2);
            var1 = {};
            var1['text'] = var2;
            var1['tooltip'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
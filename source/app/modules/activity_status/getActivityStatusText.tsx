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
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activity_status/getActivityStatusText.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getActivityStatusText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var6 = arguments[1];
            var3 = undefined;
            if(!(var6 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var4 = null;
            var2 = var4 == var5;
            var1 = undefined;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var5.name;
case 4:
            var8 = '';
            var2 = null;
            if(!(var8 !== var1)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var4 == var5;
            var1 = undefined;
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var5.name;
case 8:
            var2 = var1;
case 6:
            var7 = var4 == var5;
            var1 = undefined;
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var5.details;
case 10:
            var13 = null;
            if(!(var8 !== var1)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = var4 == var5;
            var1 = undefined;
            if(var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = var5.details;
case 14:
            var13 = var1;
case 12:
            var7 = var4 == var5;
            var1 = undefined;
            if(var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var1 = var5.state;
case 16:
            var7 = null;
            if(!(var8 !== var1)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var8 = var4 == var5;
            var1 = undefined;
            if(var8) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var1 = var5.state;
case 20:
            var7 = var1;
case 18:
            var1 = var4 == var5;
            var9 = undefined;
            if(var1) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var9 = var5.type;
case 22:
            var8 = _closure1_slot3;
            var8 = var8.STREAMING;
            var10 = var2;
            if(!(var9 === var8)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var10 = var2;
            if(!(var4 != var13)) { _fun0001_ip = 24; continue _fun0001 }
case 26:
            var10 = var13;
case 24:
            var8 = var4 == var5;
            var9 = undefined;
            if(var8) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var9 = var5.status_display_type;
case 27:
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var14 = 1;
            var8 = var8[var14];
            var8 = var11.bind(var3)(var8);
            var8 = var8.StatusDisplayTypes;
            var8 = var8.NAME;
            if(!(var9 === var8)) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var9 = var2;
            if(!(var4 == var9)) { _fun0001_ip = 31; continue _fun0001 }
case 29:
            var8 = var4 == var5;
            var11 = undefined;
            if(var8) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var11 = var5.status_display_type;
case 32:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var14];
            var8 = var12.bind(var3)(var8);
            var8 = var8.StatusDisplayTypes;
            var8 = var8.STATE;
            if(!(var11 === var8)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var9 = var7;
            if(!(var4 == var9)) { _fun0001_ip = 31; continue _fun0001 }
case 34:
            var8 = var4 == var5;
            var11 = undefined;
            if(var8) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var11 = var5.status_display_type;
case 36:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var14];
            var8 = var12.bind(var3)(var8);
            var8 = var8.StatusDisplayTypes;
            var8 = var8.DETAILS;
            var8 = var11 === var8;
            if(!var8) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var8 = var4 != var13;
case 38:
            var9 = var10;
            if(!var8) { _fun0001_ip = 31; continue _fun0001 }
case 40:
            var9 = var13;
case 31:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 2;
            var8 = var11[var8];
            var8 = var10.bind(var3)(var8);
            var8 = var8.bind(var3)(var5);
            if(var8) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var8 = var4 == var5;
            var10 = undefined;
            if(var8) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var10 = var5.type;
case 43:
            var8 = _closure1_slot3;
            var8 = var8.PLAYING;
            if(!(var10 === var8)) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            if(!(var4 == var9)) { _fun0001_ip = 47; continue _fun0001 }
case 45:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 5;
            var8 = var11[var8];
            var8 = var10.bind(var3)(var8);
            var8 = var8.bind(var3)(var5);
            if(!var8) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            if(!var6) { _fun0001_ip = 48; continue _fun0001 }
case 50:
            if(!(var4 == var7)) { _fun0001_ip = 51; continue _fun0001 }
case 48:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 6;
            var8 = var11[var8];
            var10 = var10.bind(var3)(var8);
            var8 = var10.isStageActivity;
            var8 = var8.bind(var10)(var5);
            if(!var8) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            if(!(var4 == var2)) { _fun0001_ip = 54; continue _fun0001 }
case 52:
            var8 = var4 == var5;
            var10 = undefined;
            if(var8) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var10 = var5.type;
case 55:
            var8 = _closure1_slot3;
            var8 = var8.LISTENING;
            if(!(var10 === var8)) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            if(!(var4 == var9)) { _fun0001_ip = 59; continue _fun0001 }
case 57:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 7;
            var8 = var11[var8];
            var8 = var10.bind(var3)(var8);
            var8 = var8.bind(var3)(var5);
            if(!var8) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            if(!var6) { _fun0001_ip = 60; continue _fun0001 }
case 62:
            if(!(var4 == var13)) { _fun0001_ip = 63; continue _fun0001 }
case 60:
            var6 = var4 == var5;
            var8 = undefined;
            if(var6) { _fun0001_ip = 64; continue _fun0001 }
case 65:
            var8 = var5.type;
case 64:
            var6 = _closure1_slot3;
            var6 = var6.WATCHING;
            if(!(var8 === var6)) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            if(!(var4 == var9)) { _fun0001_ip = 68; continue _fun0001 }
case 66:
            var6 = var4 == var5;
            var8 = undefined;
            if(var6) { _fun0001_ip = 69; continue _fun0001 }
case 70:
            var8 = var5.type;
case 69:
            var6 = _closure1_slot3;
            var6 = var6.COMPETING;
            if(!(var8 === var6)) { _fun0001_ip = 71; continue _fun0001 }
case 72:
            if(!(var4 == var9)) { _fun0001_ip = 73; continue _fun0001 }
case 71:
            var8 = var4 == var5;
            var6 = undefined;
            if(var8) { _fun0001_ip = 74; continue _fun0001 }
case 75:
            var6 = var5.type;
case 74:
            var5 = _closure1_slot3;
            var5 = var5.STREAMING;
            if(!(var6 === var5)) { _fun0001_ip = 76; continue _fun0001 }
case 77:
            if(!(var4 == var9)) { _fun0001_ip = 78; continue _fun0001 }
case 76:
            var5 = {};
            _fun0001_ip = 79; continue _fun0001;
case 78:
            var6 = {};
            var6['text'] = var9;
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 4;
            var11 = var14[var8];
            var11 = var10.bind(var3)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var8 = var14[var8];
            var8 = var10.bind(var3)(var8);
            var8 = var8.t;
            var10 = var8["0wJXSh"];
            var8 = {};
            var8['name'] = var9;
            var8 = var11.bind(var12)(var10, var8);
            var6['tooltip'] = var8;
            var5 = var6;
case 79:
            _fun0001_ip = 80; continue _fun0001;
case 73:
            var6 = {};
            var6['text'] = var9;
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 4;
            var11 = var14[var8];
            var11 = var10.bind(var3)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var8 = var14[var8];
            var8 = var10.bind(var3)(var8);
            var8 = var8.t;
            var10 = var8.QQ2wVE;
            var8 = {};
            var8['name'] = var9;
            var8 = var11.bind(var12)(var10, var8);
            var6['tooltip'] = var8;
            var5 = var6;
case 80:
            _fun0001_ip = 81; continue _fun0001;
case 68:
            var6 = {};
            var6['text'] = var9;
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 4;
            var11 = var14[var8];
            var11 = var10.bind(var3)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var8 = var14[var8];
            var8 = var10.bind(var3)(var8);
            var8 = var8.t;
            var10 = var8.pW3Ip3;
            var8 = {};
            var8['name'] = var9;
            var8 = var11.bind(var12)(var10, var8);
            var6['tooltip'] = var8;
            var5 = var6;
case 81:
            _fun0001_ip = 82; continue _fun0001;
case 63:
            var6 = {};
            var6['text'] = var13;
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 4;
            var11 = var14[var8];
            var11 = var10.bind(var3)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var8 = var14[var8];
            var8 = var10.bind(var3)(var8);
            var8 = var8.t;
            var10 = var8.pW3Ip3;
            var8 = {};
            var8['name'] = var13;
            var8 = var11.bind(var12)(var10, var8);
            var6['tooltip'] = var8;
            var5 = var6;
case 82:
            _fun0001_ip = 83; continue _fun0001;
case 59:
            var6 = {};
            var6['text'] = var9;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 4;
            var11 = var13[var8];
            var11 = var10.bind(var3)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var8 = var13[var8];
            var8 = var10.bind(var3)(var8);
            var8 = var8.t;
            var10 = var8.Vnuxue;
            var8 = {};
            var8['name'] = var9;
            var8 = var11.bind(var12)(var10, var8);
            var6['tooltip'] = var8;
            var5 = var6;
case 83:
            _fun0001_ip = 84; continue _fun0001;
case 54:
            var6 = {};
            var6['text'] = var2;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 4;
            var11 = var13[var8];
            var11 = var10.bind(var3)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var8 = var13[var8];
            var8 = var10.bind(var3)(var8);
            var8 = var8.t;
            var10 = var8.pW3Ip3;
            var8 = {};
            var8['name'] = var2;
            var8 = var11.bind(var12)(var10, var8);
            var6['tooltip'] = var8;
            var5 = var6;
case 84:
            return var5;
case 51:
            var6 = var7.split;
            var5 = '; ';
            var6 = var6.bind(var7)(var5);
            var4 = var4 == var6;
            var10 = undefined;
            if(var4) { _fun0001_ip = 85; continue _fun0001 }
case 86:
            var5 = var6.join;
            var4 = ', ';
            var10 = var5.bind(var6)(var4);
case 85:
            var4 = {};
            var4['text'] = var10;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 4;
            var7 = var11[var5];
            var7 = var6.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var5 = var11[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.t;
            var6 = var5.Vnuxue;
            var5 = {};
            var5['name'] = var10;
            var5 = var7.bind(var8)(var6, var5);
            var4['tooltip'] = var5;
            return var4;
case 47:
            var4 = {};
            var4['text'] = var9;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 4;
            var7 = var10[var5];
            var7 = var6.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var5 = var10[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.t;
            var6 = var5.lFApmz;
            var5 = {};
            var5['game'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var4['tooltip'] = var5;
            return var4;
case 41:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 3;
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
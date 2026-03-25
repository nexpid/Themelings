// app/modules/user_profile/utils/getActivityHeader.tsx
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
    var7 = var4.ActivityTypes;
    var _closure1_slot3 = var7;
    var4 = var4.PlatformTypes;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/utils/getActivityHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getActivityHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var11 = arg1;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 1;
            var1 = var3[var1];
            var13 = undefined;
            var1 = var2.bind(var13)(var1);
            var1 = var1.bind(var13)(var11);
            var2 = null;
            var3 = var2 == var1;
            var4 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var1.icon;
case 2:
            var3 = var2 == var1;
            var6 = undefined;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var1.name;
case 4:
            var7 = var2 != var6;
            var3 = '';
            if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var6;
case 6:
            var7 = var11.type;
            var6 = _closure1_slot3;
            var6 = var6.PLAYING;
            if(!(var7 === var6)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var2 == var1;
            var7 = undefined;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var1.type;
case 10:
            var6 = _closure1_slot4;
            var6 = var6.XBOX;
            if(!(var7 !== var6)) { _fun0001_ip = 12; continue _fun0001 }
case 8:
            var7 = var11.type;
            var6 = _closure1_slot3;
            var6 = var6.PLAYING;
            if(!(var7 === var6)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var6 = var2 == var1;
            var7 = undefined;
            if(var6) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var7 = var1.type;
case 15:
            var6 = _closure1_slot4;
            var6 = var6.PLAYSTATION;
            if(!(var7 !== var6)) { _fun0001_ip = 17; continue _fun0001 }
case 13:
            var7 = var11.type;
            var6 = _closure1_slot3;
            var6 = var6.PLAYING;
            if(!(var7 === var6)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var6 = var2 == var1;
            var7 = undefined;
            if(var6) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var7 = var1.type;
case 20:
            var6 = _closure1_slot4;
            var6 = var6.META_QUEST_OR_HORIZON;
            if(!(var7 !== var6)) { _fun0001_ip = 22; continue _fun0001 }
case 18:
            var7 = var11.type;
            var6 = _closure1_slot3;
            var6 = var6.WATCHING;
            if(!(var7 === var6)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var6 = var2 == var1;
            var7 = undefined;
            if(var6) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var7 = var1.type;
case 25:
            var6 = _closure1_slot4;
            var6 = var6.META_QUEST_OR_HORIZON;
            if(!(var7 !== var6)) { _fun0001_ip = 27; continue _fun0001 }
case 23:
            var7 = var11.type;
            var6 = _closure1_slot3;
            var6 = var6.STREAMING;
            if(!(var7 === var6)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var6 = var2 == var1;
            var7 = undefined;
            if(var6) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var7 = var1.type;
case 30:
            var6 = _closure1_slot4;
            var6 = var6.TWITCH;
            if(!(var7 !== var6)) { _fun0001_ip = 32; continue _fun0001 }
case 28:
            var7 = var11.type;
            var6 = _closure1_slot3;
            var6 = var6.STREAMING;
            if(!(var7 === var6)) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var7 = var2 == var1;
            var6 = undefined;
            if(var7) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var6 = var1.type;
case 35:
            var1 = _closure1_slot4;
            var1 = var1.YOUTUBE;
            if(!(var6 !== var1)) { _fun0001_ip = 37; continue _fun0001 }
case 33:
            var6 = var11.type;
            var1 = _closure1_slot3;
            var1 = var1.PLAYING;
            if(!(var6 !== var1)) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var6 = var11.type;
            var1 = _closure1_slot3;
            var1 = var1.STREAMING;
            if(!(var6 !== var1)) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var6 = var6.bind(var13)(var1);
            var1 = var6.isStageActivity;
            var1 = var1.bind(var6)(var11);
            if(var1) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var6 = var11.type;
            var1 = _closure1_slot3;
            var1 = var1.LISTENING;
            if(!(var6 === var1)) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var1 = var11.details;
            if(!(var2 == var1)) { _fun0001_ip = 46; continue _fun0001 }
case 44:
            var6 = var11.type;
            var1 = _closure1_slot3;
            var1 = var1.LISTENING;
            if(!(var6 !== var1)) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var6 = var11.type;
            var1 = _closure1_slot3;
            var1 = var1.WATCHING;
            if(!(var6 === var1)) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var1 = var11.details;
            if(!(var2 == var1)) { _fun0001_ip = 51; continue _fun0001 }
case 49:
            var6 = var11.type;
            var1 = _closure1_slot3;
            var1 = var1.WATCHING;
            if(!(var6 !== var1)) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var6 = var11.type;
            var1 = _closure1_slot3;
            var1 = var1.COMPETING;
            if(!(var6 === var1)) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var1 = var11.details;
            if(!(var2 == var1)) { _fun0001_ip = 56; continue _fun0001 }
case 54:
            var2 = var11.type;
            var1 = _closure1_slot3;
            var1 = var1.COMPETING;
            if(!(var2 !== var1)) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            var2 = var11.type;
            var1 = _closure1_slot3;
            var1 = var1.HANG_STATUS;
            if(!(var2 !== var1)) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var1 = {};
            var1['text'] = var13;
            var1['platformIcon'] = var4;
            var1['platformLabel'] = var3;
            _fun0001_ip = 61; continue _fun0001;
case 59:
            var2 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 2;
            var7 = var10[var6];
            var7 = var9.bind(var13)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var13)(var6);
            var6 = var6.t;
            var6 = var6.Hi4tob;
            var6 = var7.bind(var8)(var6);
            var2['text'] = var6;
            var2['platformIcon'] = var4;
            var2['platformLabel'] = var3;
            var1 = var2;
case 61:
            _fun0001_ip = 62; continue _fun0001;
case 57:
            var2 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 2;
            var7 = var10[var6];
            var7 = var9.bind(var13)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var13)(var6);
            var6 = var6.t;
            var6 = var6.OzCsIA;
            var6 = var7.bind(var8)(var6);
            var2['text'] = var6;
            var2['platformIcon'] = var4;
            var2['platformLabel'] = var3;
            var1 = var2;
case 62:
            _fun0001_ip = 63; continue _fun0001;
case 56:
            var2 = {};
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 2;
            var8 = var10[var6];
            var8 = var7.bind(var13)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var6 = var10[var6];
            var6 = var7.bind(var13)(var6);
            var6 = var6.t;
            var7 = var6.oHF7Ch;
            var6 = {};
            var10 = var11.name;
            var6['name'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var2['text'] = var6;
            var2['platformIcon'] = var4;
            var2['platformLabel'] = var3;
            var1 = var2;
case 63:
            _fun0001_ip = 64; continue _fun0001;
case 52:
            var2 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 2;
            var7 = var10[var6];
            var7 = var9.bind(var13)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var13)(var6);
            var6 = var6.t;
            var6 = var6.GpNXjC;
            var6 = var7.bind(var8)(var6);
            var2['text'] = var6;
            var2['platformIcon'] = var4;
            var2['platformLabel'] = var3;
            var1 = var2;
case 64:
            _fun0001_ip = 65; continue _fun0001;
case 51:
            var2 = {};
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 2;
            var8 = var10[var6];
            var8 = var7.bind(var13)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var6 = var10[var6];
            var6 = var7.bind(var13)(var6);
            var6 = var6.t;
            var7 = var6.mqdfDc;
            var6 = {};
            var10 = var11.name;
            var6['name'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var2['text'] = var6;
            var2['platformIcon'] = var4;
            var2['platformLabel'] = var3;
            var1 = var2;
case 65:
            _fun0001_ip = 66; continue _fun0001;
case 47:
            var2 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 2;
            var7 = var10[var6];
            var7 = var9.bind(var13)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var13)(var6);
            var6 = var6.t;
            var6 = var6.dBISa6;
            var6 = var7.bind(var8)(var6);
            var2['text'] = var6;
            var2['platformIcon'] = var4;
            var2['platformLabel'] = var3;
            var1 = var2;
case 66:
            _fun0001_ip = 67; continue _fun0001;
case 46:
            var2 = {};
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 2;
            var8 = var10[var6];
            var8 = var7.bind(var13)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var6 = var10[var6];
            var6 = var7.bind(var13)(var6);
            var6 = var6.t;
            var7 = var6.b+lA5+;
            var6 = {};
            var10 = var11.name;
            var6['name'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var2['text'] = var6;
            var2['platformIcon'] = var4;
            var2['platformLabel'] = var3;
            var1 = var2;
case 67:
            _fun0001_ip = 68; continue _fun0001;
case 42:
            var2 = {};
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 2;
            var8 = var10[var6];
            var8 = var7.bind(var13)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var6 = var10[var6];
            var6 = var7.bind(var13)(var6);
            var6 = var6.t;
            var7 = var6.pW3Ip3;
            var6 = {};
            var10 = var11.name;
            var6['name'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var2['text'] = var6;
            var1 = var2;
case 68:
            _fun0001_ip = 69; continue _fun0001;
case 40:
            var2 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 2;
            var7 = var10[var6];
            var7 = var9.bind(var13)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var13)(var6);
            var6 = var6.t;
            var6 = var6.Jpkr/q;
            var6 = var7.bind(var8)(var6);
            var2['text'] = var6;
            var2['platformIcon'] = var4;
            var2['platformLabel'] = var3;
            var1 = var2;
case 69:
            _fun0001_ip = 70; continue _fun0001;
case 38:
            var2 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 2;
            var7 = var10[var6];
            var7 = var9.bind(var13)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var13)(var6);
            var6 = var6.t;
            var6 = var6.BMTj28;
            var6 = var7.bind(var8)(var6);
            var2['text'] = var6;
            var2['platformIcon'] = var4;
            var2['platformLabel'] = var3;
            var1 = var2;
case 70:
            _fun0001_ip = 71; continue _fun0001;
case 37:
            var2 = {};
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 2;
            var6 = var16[var10];
            var6 = var15.bind(var13)(var6);
            var9 = var6.intl;
            var8 = var9.formatToPlainString;
            var6 = var16[var10];
            var6 = var15.bind(var13)(var6);
            var6 = var6.t;
            var7 = var6["4CQq9Q"];
            var6 = {};
            var12 = var16[var10];
            var12 = var15.bind(var13)(var12);
            var14 = var12.intl;
            var12 = var14.string;
            var10 = var16[var10];
            var10 = var15.bind(var13)(var10);
            var10 = var10.t;
            var10 = var10.aS6cK4;
            var10 = var12.bind(var14)(var10);
            var6['name'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var2['text'] = var6;
            var2['platformIcon'] = var4;
            var2['platformLabel'] = var3;
            var1 = var2;
case 71:
            _fun0001_ip = 72; continue _fun0001;
case 32:
            var2 = {};
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 2;
            var6 = var16[var10];
            var6 = var15.bind(var13)(var6);
            var9 = var6.intl;
            var8 = var9.formatToPlainString;
            var6 = var16[var10];
            var6 = var15.bind(var13)(var6);
            var6 = var6.t;
            var7 = var6["4CQq9Q"];
            var6 = {};
            var12 = var16[var10];
            var12 = var15.bind(var13)(var12);
            var14 = var12.intl;
            var12 = var14.string;
            var10 = var16[var10];
            var10 = var15.bind(var13)(var10);
            var10 = var10.t;
            var10 = var10.q4pBG3;
            var10 = var12.bind(var14)(var10);
            var6['name'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var2['text'] = var6;
            var2['platformIcon'] = var4;
            var2['platformLabel'] = var3;
            var1 = var2;
case 72:
            _fun0001_ip = 73; continue _fun0001;
case 27:
            var2 = {};
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var17 = 2;
            var6 = var14[var17];
            var6 = var7.bind(var13)(var6);
            var9 = var6.intl;
            var8 = var9.formatToPlainString;
            var6 = var14[var17];
            var6 = var7.bind(var13)(var6);
            var6 = var6.t;
            var7 = var6.ENbTKQ;
            var6 = {};
            var12 = _closure1_slot1;
            var10 = 3;
            var10 = var14[var10];
            var10 = var12.bind(var13)(var10);
            var10 = var10.bind(var13)(var11);
            var16 = _closure1_slot0;
            var12 = _closure1_slot2;
            var14 = var12[var17];
            var14 = var16.bind(var13)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var12 = var12[var17];
            var12 = var16.bind(var13)(var12);
            var12 = var12.t;
            if(var10) { _fun0001_ip = 74; continue _fun0001 }
case 75:
            var10 = var12.p6vL0e;
            var10 = var14.bind(var15)(var10);
            _fun0001_ip = 76; continue _fun0001;
case 74:
            var12 = var12.BrHQaq;
            var10 = var14.bind(var15)(var12);
case 76:
            var6['platform'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var2['text'] = var6;
            var2['platformIcon'] = var4;
            var2['platformLabel'] = var3;
            var1 = var2;
case 73:
            _fun0001_ip = 77; continue _fun0001;
case 22:
            var2 = {};
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var16 = 2;
            var6 = var14[var16];
            var6 = var7.bind(var13)(var6);
            var9 = var6.intl;
            var8 = var9.formatToPlainString;
            var6 = var14[var16];
            var6 = var7.bind(var13)(var6);
            var6 = var6.t;
            var7 = var6.A17aM8;
            var6 = {};
            var12 = _closure1_slot1;
            var10 = 3;
            var10 = var14[var10];
            var10 = var12.bind(var13)(var10);
            var10 = var10.bind(var13)(var11);
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var12 = var11[var16];
            var12 = var15.bind(var13)(var12);
            var14 = var12.intl;
            var12 = var14.string;
            var11 = var11[var16];
            var11 = var15.bind(var13)(var11);
            var11 = var11.t;
            if(var10) { _fun0001_ip = 78; continue _fun0001 }
case 79:
            var10 = var11.p6vL0e;
            var10 = var12.bind(var14)(var10);
            _fun0001_ip = 80; continue _fun0001;
case 78:
            var11 = var11.BrHQaq;
            var10 = var12.bind(var14)(var11);
case 80:
            var6['platform'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var2['text'] = var6;
            var2['platformIcon'] = var4;
            var2['platformLabel'] = var3;
            var1 = var2;
case 77:
            _fun0001_ip = 81; continue _fun0001;
case 17:
            var2 = {};
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 2;
            var6 = var15[var10];
            var6 = var14.bind(var13)(var6);
            var9 = var6.intl;
            var8 = var9.formatToPlainString;
            var6 = var15[var10];
            var6 = var14.bind(var13)(var6);
            var6 = var6.t;
            var7 = var6.A17aM8;
            var6 = {};
            var11 = var15[var10];
            var11 = var14.bind(var13)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var15[var10];
            var10 = var14.bind(var13)(var10);
            var10 = var10.t;
            var10 = var10.fFl4jo;
            var10 = var11.bind(var12)(var10);
            var6['platform'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var2['text'] = var6;
            var2['platformIcon'] = var4;
            var2['platformLabel'] = var3;
            var1 = var2;
case 81:
            _fun0001_ip = 82; continue _fun0001;
case 12:
            var2 = {};
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 2;
            var5 = var14[var9];
            var5 = var12.bind(var13)(var5);
            var8 = var5.intl;
            var7 = var8.formatToPlainString;
            var5 = var14[var9];
            var5 = var12.bind(var13)(var5);
            var5 = var5.t;
            var6 = var5.A17aM8;
            var5 = {};
            var10 = var14[var9];
            var10 = var12.bind(var13)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var14[var9];
            var9 = var12.bind(var13)(var9);
            var9 = var9.t;
            var9 = var9.Nfvo72;
            var9 = var10.bind(var11)(var9);
            var5['platform'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var2['text'] = var5;
            var2['platformIcon'] = var4;
            var2['platformLabel'] = var3;
            var1 = var2;
case 82:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
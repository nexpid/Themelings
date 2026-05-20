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
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/utils/getActivityHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getActivityHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var10 = arg1;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 1;
            var1 = var3[var1];
            var12 = undefined;
            var5 = var2.bind(var12)(var1);
            var1 = var10.session_id;
            var6 = var5.bind(var12)(var1);
            var1 = 2;
            var1 = var3[var1];
            var1 = var2.bind(var12)(var1);
            var1 = var1.bind(var12)(var10);
            var5 = null;
            var2 = var5 == var1;
            var3 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1.icon;
case 2:
            var2 = var5 == var1;
            var7 = undefined;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var1.name;
case 4:
            var8 = var5 != var7;
            var2 = '';
            if(!var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var7;
case 6:
            var8 = var10.type;
            var7 = _closure1_slot3;
            var7 = var7.PLAYING;
            if(!(var8 === var7)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var5 == var1;
            var8 = undefined;
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = var1.type;
case 10:
            var7 = _closure1_slot4;
            var7 = var7.XBOX;
            if(!(var8 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 8:
            var8 = var10.type;
            var7 = _closure1_slot3;
            var7 = var7.PLAYING;
            if(!(var8 === var7)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var7 = var5 == var1;
            var8 = undefined;
            if(var7) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var8 = var1.type;
case 15:
            var7 = _closure1_slot4;
            var7 = var7.PLAYSTATION;
            if(!(var8 !== var7)) { _fun0001_ip = 17; continue _fun0001 }
case 13:
            var8 = var10.type;
            var7 = _closure1_slot3;
            var7 = var7.PLAYING;
            if(!(var8 === var7)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = var5 == var1;
            var8 = undefined;
            if(var7) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var8 = var1.type;
case 20:
            var7 = _closure1_slot4;
            var7 = var7.META_QUEST_OR_HORIZON;
            if(!(var8 !== var7)) { _fun0001_ip = 22; continue _fun0001 }
case 18:
            var8 = var10.type;
            var7 = _closure1_slot3;
            var7 = var7.WATCHING;
            if(!(var8 === var7)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var7 = var5 == var1;
            var8 = undefined;
            if(var7) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var8 = var1.type;
case 25:
            var7 = _closure1_slot4;
            var7 = var7.META_QUEST_OR_HORIZON;
            if(!(var8 !== var7)) { _fun0001_ip = 27; continue _fun0001 }
case 23:
            var8 = var10.type;
            var7 = _closure1_slot3;
            var7 = var7.STREAMING;
            if(!(var8 === var7)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var7 = var5 == var1;
            var8 = undefined;
            if(var7) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var8 = var1.type;
case 30:
            var7 = _closure1_slot4;
            var7 = var7.TWITCH;
            if(!(var8 !== var7)) { _fun0001_ip = 32; continue _fun0001 }
case 28:
            var8 = var10.type;
            var7 = _closure1_slot3;
            var7 = var7.STREAMING;
            if(!(var8 === var7)) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var8 = var5 == var1;
            var7 = undefined;
            if(var8) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var7 = var1.type;
case 35:
            var1 = _closure1_slot4;
            var1 = var1.YOUTUBE;
            if(!(var7 !== var1)) { _fun0001_ip = 37; continue _fun0001 }
case 33:
            if(!(var5 != var6)) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 5;
            var1 = var8[var1];
            var1 = var7.bind(var12)(var1);
            var9 = var1.bind(var12)(var6, var10);
            var6 = var10.type;
            var1 = _closure1_slot3;
            var1 = var1.PLAYING;
            if(!(var1 !== var6)) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var1 = _closure1_slot3;
            var1 = var1.WATCHING;
            if(!(var1 !== var6)) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var1 = _closure1_slot3;
            var1 = var1.LISTENING;
            if(!(var1 !== var6)) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var1 = _closure1_slot3;
            var1 = var1.COMPETING;
            if(!(var1 !== var6)) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var1 = _closure1_slot3;
            var1 = var1.STREAMING;
            var8 = undefined;
            if(!(var1 === var6)) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 3;
            var1 = var7[var1];
            var1 = var6.bind(var12)(var1);
            var1 = var1.t;
            var8 = var1.Dzgz4u;
            _fun0001_ip = 48; continue _fun0001;
case 46:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 3;
            var1 = var7[var1];
            var1 = var6.bind(var12)(var1);
            var1 = var1.t;
            var8 = var1.ikpHeS;
            _fun0001_ip = 48; continue _fun0001;
case 44:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 3;
            var1 = var7[var1];
            var1 = var6.bind(var12)(var1);
            var1 = var1.t;
            var8 = var1.EcHzWI;
            _fun0001_ip = 48; continue _fun0001;
case 42:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 3;
            var1 = var7[var1];
            var1 = var6.bind(var12)(var1);
            var1 = var1.t;
            var8 = var1.ENbTKQ;
            _fun0001_ip = 48; continue _fun0001;
case 40:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 3;
            var1 = var7[var1];
            var1 = var6.bind(var12)(var1);
            var1 = var1.t;
            var8 = var1.A17aM8;
case 48:
            if(!(var12 === var8)) { _fun0001_ip = 50; continue _fun0001 }
case 38:
            var6 = var10.type;
            var1 = _closure1_slot3;
            var1 = var1.PLAYING;
            if(!(var6 !== var1)) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var6 = var10.type;
            var1 = _closure1_slot3;
            var1 = var1.STREAMING;
            if(!(var6 !== var1)) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var6 = var6.bind(var12)(var1);
            var1 = var6.isStageActivity;
            var1 = var1.bind(var6)(var10);
            if(var1) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var6 = var10.type;
            var1 = _closure1_slot3;
            var1 = var1.LISTENING;
            if(!(var6 === var1)) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            var1 = var10.details;
            if(!(var5 == var1)) { _fun0001_ip = 59; continue _fun0001 }
case 57:
            var6 = var10.type;
            var1 = _closure1_slot3;
            var1 = var1.LISTENING;
            if(!(var6 !== var1)) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var6 = var10.type;
            var1 = _closure1_slot3;
            var1 = var1.WATCHING;
            if(!(var6 === var1)) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            var1 = var10.details;
            if(!(var5 == var1)) { _fun0001_ip = 64; continue _fun0001 }
case 62:
            var6 = var10.type;
            var1 = _closure1_slot3;
            var1 = var1.WATCHING;
            if(!(var6 !== var1)) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var6 = var10.type;
            var1 = _closure1_slot3;
            var1 = var1.COMPETING;
            if(!(var6 === var1)) { _fun0001_ip = 67; continue _fun0001 }
case 68:
            var1 = var10.details;
            if(!(var5 == var1)) { _fun0001_ip = 69; continue _fun0001 }
case 67:
            var5 = var10.type;
            var1 = _closure1_slot3;
            var1 = var1.COMPETING;
            if(!(var5 !== var1)) { _fun0001_ip = 70; continue _fun0001 }
case 71:
            var1 = {};
            var1['text'] = var12;
            var1['platformIcon'] = var3;
            var1['platformLabel'] = var2;
            _fun0001_ip = 72; continue _fun0001;
case 70:
            var5 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 3;
            var7 = var14[var6];
            var7 = var13.bind(var12)(var7);
            var11 = var7.intl;
            var7 = var11.string;
            var6 = var14[var6];
            var6 = var13.bind(var12)(var6);
            var6 = var6.t;
            var6 = var6.OzCsIA;
            var6 = var7.bind(var11)(var6);
            var5['text'] = var6;
            var5['platformIcon'] = var3;
            var5['platformLabel'] = var2;
            var1 = var5;
case 72:
            _fun0001_ip = 73; continue _fun0001;
case 69:
            var5 = {};
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 3;
            var11 = var14[var6];
            var11 = var7.bind(var12)(var11);
            var13 = var11.intl;
            var11 = var13.formatToPlainString;
            var6 = var14[var6];
            var6 = var7.bind(var12)(var6);
            var6 = var6.t;
            var7 = var6.oHF7Ch;
            var6 = {};
            var14 = var10.name;
            var6['name'] = var14;
            var6 = var11.bind(var13)(var7, var6);
            var5['text'] = var6;
            var5['platformIcon'] = var3;
            var5['platformLabel'] = var2;
            var1 = var5;
case 73:
            _fun0001_ip = 74; continue _fun0001;
case 65:
            var5 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 3;
            var7 = var14[var6];
            var7 = var13.bind(var12)(var7);
            var11 = var7.intl;
            var7 = var11.string;
            var6 = var14[var6];
            var6 = var13.bind(var12)(var6);
            var6 = var6.t;
            var6 = var6.GpNXjC;
            var6 = var7.bind(var11)(var6);
            var5['text'] = var6;
            var5['platformIcon'] = var3;
            var5['platformLabel'] = var2;
            var1 = var5;
case 74:
            _fun0001_ip = 75; continue _fun0001;
case 64:
            var5 = {};
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 3;
            var11 = var14[var6];
            var11 = var7.bind(var12)(var11);
            var13 = var11.intl;
            var11 = var13.formatToPlainString;
            var6 = var14[var6];
            var6 = var7.bind(var12)(var6);
            var6 = var6.t;
            var7 = var6.mqdfDc;
            var6 = {};
            var14 = var10.name;
            var6['name'] = var14;
            var6 = var11.bind(var13)(var7, var6);
            var5['text'] = var6;
            var5['platformIcon'] = var3;
            var5['platformLabel'] = var2;
            var1 = var5;
case 75:
            _fun0001_ip = 76; continue _fun0001;
case 60:
            var5 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 3;
            var7 = var14[var6];
            var7 = var13.bind(var12)(var7);
            var11 = var7.intl;
            var7 = var11.string;
            var6 = var14[var6];
            var6 = var13.bind(var12)(var6);
            var6 = var6.t;
            var6 = var6.dBISa6;
            var6 = var7.bind(var11)(var6);
            var5['text'] = var6;
            var5['platformIcon'] = var3;
            var5['platformLabel'] = var2;
            var1 = var5;
case 76:
            _fun0001_ip = 77; continue _fun0001;
case 59:
            var5 = {};
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 3;
            var11 = var14[var6];
            var11 = var7.bind(var12)(var11);
            var13 = var11.intl;
            var11 = var13.formatToPlainString;
            var6 = var14[var6];
            var6 = var7.bind(var12)(var6);
            var6 = var6.t;
            var7 = var6.b+lA5+;
            var6 = {};
            var14 = var10.name;
            var6['name'] = var14;
            var6 = var11.bind(var13)(var7, var6);
            var5['text'] = var6;
            var5['platformIcon'] = var3;
            var5['platformLabel'] = var2;
            var1 = var5;
case 77:
            _fun0001_ip = 78; continue _fun0001;
case 55:
            var5 = {};
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 3;
            var11 = var14[var6];
            var11 = var7.bind(var12)(var11);
            var13 = var11.intl;
            var11 = var13.formatToPlainString;
            var6 = var14[var6];
            var6 = var7.bind(var12)(var6);
            var6 = var6.t;
            var7 = var6.pW3Ip3;
            var6 = {};
            var14 = var10.name;
            var6['name'] = var14;
            var6 = var11.bind(var13)(var7, var6);
            var5['text'] = var6;
            var1 = var5;
case 78:
            _fun0001_ip = 79; continue _fun0001;
case 53:
            var5 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 3;
            var7 = var14[var6];
            var7 = var13.bind(var12)(var7);
            var11 = var7.intl;
            var7 = var11.string;
            var6 = var14[var6];
            var6 = var13.bind(var12)(var6);
            var6 = var6.t;
            var6 = var6.Jpkr/q;
            var6 = var7.bind(var11)(var6);
            var5['text'] = var6;
            var5['platformIcon'] = var3;
            var5['platformLabel'] = var2;
            var1 = var5;
case 79:
            _fun0001_ip = 80; continue _fun0001;
case 51:
            var5 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 3;
            var7 = var14[var6];
            var7 = var13.bind(var12)(var7);
            var11 = var7.intl;
            var7 = var11.string;
            var6 = var14[var6];
            var6 = var13.bind(var12)(var6);
            var6 = var6.t;
            var6 = var6.BMTj28;
            var6 = var7.bind(var11)(var6);
            var5['text'] = var6;
            var5['platformIcon'] = var3;
            var5['platformLabel'] = var2;
            var1 = var5;
case 80:
            return var1;
case 50:
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 3;
            var5 = var7[var5];
            var5 = var6.bind(var12)(var5);
            var7 = var5.intl;
            var6 = var7.formatToPlainString;
            var5 = {};
            var5['platform'] = var9;
            var5 = var6.bind(var7)(var8, var5);
            var1['text'] = var5;
            var1['platformIcon'] = var3;
            var1['platformLabel'] = var2;
            return var1;
case 37:
            var1 = {};
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 3;
            var5 = var15[var9];
            var5 = var14.bind(var12)(var5);
            var8 = var5.intl;
            var7 = var8.formatToPlainString;
            var5 = var15[var9];
            var5 = var14.bind(var12)(var5);
            var5 = var5.t;
            var6 = var5["4CQq9Q"];
            var5 = {};
            var11 = var15[var9];
            var11 = var14.bind(var12)(var11);
            var13 = var11.intl;
            var11 = var13.string;
            var9 = var15[var9];
            var9 = var14.bind(var12)(var9);
            var9 = var9.t;
            var9 = var9.aS6cK4;
            var9 = var11.bind(var13)(var9);
            var5['name'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var1['text'] = var5;
            var1['platformIcon'] = var3;
            var1['platformLabel'] = var2;
            return var1;
case 32:
            var1 = {};
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 3;
            var5 = var15[var9];
            var5 = var14.bind(var12)(var5);
            var8 = var5.intl;
            var7 = var8.formatToPlainString;
            var5 = var15[var9];
            var5 = var14.bind(var12)(var5);
            var5 = var5.t;
            var6 = var5["4CQq9Q"];
            var5 = {};
            var11 = var15[var9];
            var11 = var14.bind(var12)(var11);
            var13 = var11.intl;
            var11 = var13.string;
            var9 = var15[var9];
            var9 = var14.bind(var12)(var9);
            var9 = var9.t;
            var9 = var9.q4pBG3;
            var9 = var11.bind(var13)(var9);
            var5['name'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var1['text'] = var5;
            var1['platformIcon'] = var3;
            var1['platformLabel'] = var2;
            return var1;
case 27:
            var1 = {};
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var16 = 3;
            var5 = var13[var16];
            var5 = var6.bind(var12)(var5);
            var8 = var5.intl;
            var7 = var8.formatToPlainString;
            var5 = var13[var16];
            var5 = var6.bind(var12)(var5);
            var5 = var5.t;
            var6 = var5.ENbTKQ;
            var5 = {};
            var11 = _closure1_slot1;
            var9 = 4;
            var9 = var13[var9];
            var9 = var11.bind(var12)(var9);
            var9 = var9.bind(var12)(var10);
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var13 = var11[var16];
            var13 = var15.bind(var12)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var11 = var11[var16];
            var11 = var15.bind(var12)(var11);
            var11 = var11.t;
            if(var9) { _fun0001_ip = 81; continue _fun0001 }
case 82:
            var9 = var11.p6vL0e;
            var9 = var13.bind(var14)(var9);
            _fun0001_ip = 83; continue _fun0001;
case 81:
            var11 = var11.BrHQaq;
            var9 = var13.bind(var14)(var11);
case 83:
            var5['platform'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var1['text'] = var5;
            var1['platformIcon'] = var3;
            var1['platformLabel'] = var2;
            return var1;
case 22:
            var1 = {};
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var15 = 3;
            var5 = var13[var15];
            var5 = var6.bind(var12)(var5);
            var8 = var5.intl;
            var7 = var8.formatToPlainString;
            var5 = var13[var15];
            var5 = var6.bind(var12)(var5);
            var5 = var5.t;
            var6 = var5.A17aM8;
            var5 = {};
            var11 = _closure1_slot1;
            var9 = 4;
            var9 = var13[var9];
            var9 = var11.bind(var12)(var9);
            var9 = var9.bind(var12)(var10);
            var14 = _closure1_slot0;
            var10 = _closure1_slot2;
            var11 = var10[var15];
            var11 = var14.bind(var12)(var11);
            var13 = var11.intl;
            var11 = var13.string;
            var10 = var10[var15];
            var10 = var14.bind(var12)(var10);
            var10 = var10.t;
            if(var9) { _fun0001_ip = 84; continue _fun0001 }
case 85:
            var9 = var10.p6vL0e;
            var9 = var11.bind(var13)(var9);
            _fun0001_ip = 86; continue _fun0001;
case 84:
            var10 = var10.BrHQaq;
            var9 = var11.bind(var13)(var10);
case 86:
            var5['platform'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var1['text'] = var5;
            var1['platformIcon'] = var3;
            var1['platformLabel'] = var2;
            return var1;
case 17:
            var1 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 3;
            var5 = var14[var9];
            var5 = var13.bind(var12)(var5);
            var8 = var5.intl;
            var7 = var8.formatToPlainString;
            var5 = var14[var9];
            var5 = var13.bind(var12)(var5);
            var5 = var5.t;
            var6 = var5.A17aM8;
            var5 = {};
            var10 = var14[var9];
            var10 = var13.bind(var12)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var14[var9];
            var9 = var13.bind(var12)(var9);
            var9 = var9.t;
            var9 = var9.fFl4jo;
            var9 = var10.bind(var11)(var9);
            var5['platform'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var1['text'] = var5;
            var1['platformIcon'] = var3;
            var1['platformLabel'] = var2;
            return var1;
case 12:
            var1 = {};
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 3;
            var4 = var13[var8];
            var4 = var11.bind(var12)(var4);
            var7 = var4.intl;
            var6 = var7.formatToPlainString;
            var4 = var13[var8];
            var4 = var11.bind(var12)(var4);
            var4 = var4.t;
            var5 = var4.A17aM8;
            var4 = {};
            var9 = var13[var8];
            var9 = var11.bind(var12)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var13[var8];
            var8 = var11.bind(var12)(var8);
            var8 = var8.t;
            var8 = var8.Nfvo72;
            var8 = var9.bind(var10)(var8);
            var4['platform'] = var8;
            var4 = var6.bind(var7)(var5, var4);
            var1['text'] = var4;
            var1['platformIcon'] = var3;
            var1['platformLabel'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
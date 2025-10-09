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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/utils/getActivityHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getActivityHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 1;
            var1 = var3[var1];
            var12 = undefined;
            var1 = var2.bind(var12)(var1);
            var1 = var1.bind(var12)(var9);
            var2 = null;
            var5 = var2 == var1;
            var3 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1.icon;
case 2:
            var6 = var9.type;
            var5 = _closure1_slot3;
            var5 = var5.PLAYING;
            if(!(var6 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var2 == var1;
            var6 = undefined;
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var1.type;
case 6:
            var5 = _closure1_slot4;
            var5 = var5.XBOX;
            if(!(var6 !== var5)) { _fun0001_ip = 8; continue _fun0001 }
case 4:
            var6 = var9.type;
            var5 = _closure1_slot3;
            var5 = var5.PLAYING;
            if(!(var6 === var5)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var5 = var2 == var1;
            var6 = undefined;
            if(var5) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var6 = var1.type;
case 11:
            var5 = _closure1_slot4;
            var5 = var5.PLAYSTATION;
            if(!(var6 !== var5)) { _fun0001_ip = 13; continue _fun0001 }
case 9:
            var6 = var9.type;
            var5 = _closure1_slot3;
            var5 = var5.STREAMING;
            if(!(var6 === var5)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = var2 == var1;
            var6 = undefined;
            if(var5) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var6 = var1.type;
case 16:
            var5 = _closure1_slot4;
            var5 = var5.TWITCH;
            if(!(var6 !== var5)) { _fun0001_ip = 18; continue _fun0001 }
case 14:
            var6 = var9.type;
            var5 = _closure1_slot3;
            var5 = var5.STREAMING;
            if(!(var6 === var5)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var6 = var2 == var1;
            var5 = undefined;
            if(var6) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var5 = var1.type;
case 21:
            var1 = _closure1_slot4;
            var1 = var1.YOUTUBE;
            if(!(var5 !== var1)) { _fun0001_ip = 23; continue _fun0001 }
case 19:
            var5 = var9.type;
            var1 = _closure1_slot3;
            var1 = var1.PLAYING;
            if(!(var5 !== var1)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var5 = var9.type;
            var1 = _closure1_slot3;
            var1 = var1.STREAMING;
            if(!(var5 !== var1)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var5 = var5.bind(var12)(var1);
            var1 = var5.isStageActivity;
            var1 = var1.bind(var5)(var9);
            if(var1) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var5 = var9.type;
            var1 = _closure1_slot3;
            var1 = var1.LISTENING;
            if(!(var5 === var1)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var1 = var9.details;
            if(!(var2 == var1)) { _fun0001_ip = 32; continue _fun0001 }
case 30:
            var5 = var9.type;
            var1 = _closure1_slot3;
            var1 = var1.LISTENING;
            if(!(var5 !== var1)) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var5 = var9.type;
            var1 = _closure1_slot3;
            var1 = var1.WATCHING;
            if(!(var5 === var1)) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var1 = var9.details;
            if(!(var2 == var1)) { _fun0001_ip = 37; continue _fun0001 }
case 35:
            var5 = var9.type;
            var1 = _closure1_slot3;
            var1 = var1.WATCHING;
            if(!(var5 !== var1)) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var5 = var9.type;
            var1 = _closure1_slot3;
            var1 = var1.COMPETING;
            if(!(var5 === var1)) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var1 = var9.details;
            if(!(var2 == var1)) { _fun0001_ip = 42; continue _fun0001 }
case 40:
            var2 = var9.type;
            var1 = _closure1_slot3;
            var1 = var1.COMPETING;
            if(!(var2 !== var1)) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var2 = var9.type;
            var1 = _closure1_slot3;
            var1 = var1.HANG_STATUS;
            if(!(var2 !== var1)) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var1 = {};
            var1['text'] = var12;
            var1['platformIcon'] = var3;
            _fun0001_ip = 47; continue _fun0001;
case 45:
            var2 = {};
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 2;
            var6 = var10[var5];
            var6 = var8.bind(var12)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var10[var5];
            var5 = var8.bind(var12)(var5);
            var5 = var5.t;
            var5 = var5.Hi4toa;
            var5 = var6.bind(var7)(var5);
            var2['text'] = var5;
            var2['platformIcon'] = var3;
            var1 = var2;
case 47:
            _fun0001_ip = 48; continue _fun0001;
case 43:
            var2 = {};
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 2;
            var6 = var10[var5];
            var6 = var8.bind(var12)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var10[var5];
            var5 = var8.bind(var12)(var5);
            var5 = var5.t;
            var5 = var5.OzCsIC;
            var5 = var6.bind(var7)(var5);
            var2['text'] = var5;
            var2['platformIcon'] = var3;
            var1 = var2;
case 48:
            _fun0001_ip = 49; continue _fun0001;
case 42:
            var2 = {};
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 2;
            var7 = var10[var5];
            var7 = var6.bind(var12)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var5 = var10[var5];
            var5 = var6.bind(var12)(var5);
            var5 = var5.t;
            var6 = var5.oHF7Cg;
            var5 = {};
            var10 = var9.name;
            var5['name'] = var10;
            var5 = var7.bind(var8)(var6, var5);
            var2['text'] = var5;
            var2['platformIcon'] = var3;
            var1 = var2;
case 49:
            _fun0001_ip = 50; continue _fun0001;
case 38:
            var2 = {};
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 2;
            var6 = var10[var5];
            var6 = var8.bind(var12)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var10[var5];
            var5 = var8.bind(var12)(var5);
            var5 = var5.t;
            var5 = var5.GpNXjI;
            var5 = var6.bind(var7)(var5);
            var2['text'] = var5;
            var2['platformIcon'] = var3;
            var1 = var2;
case 50:
            _fun0001_ip = 51; continue _fun0001;
case 37:
            var2 = {};
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 2;
            var7 = var10[var5];
            var7 = var6.bind(var12)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var5 = var10[var5];
            var5 = var6.bind(var12)(var5);
            var5 = var5.t;
            var6 = var5.mqdfDQ;
            var5 = {};
            var10 = var9.name;
            var5['name'] = var10;
            var5 = var7.bind(var8)(var6, var5);
            var2['text'] = var5;
            var2['platformIcon'] = var3;
            var1 = var2;
case 51:
            _fun0001_ip = 52; continue _fun0001;
case 33:
            var2 = {};
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 2;
            var6 = var10[var5];
            var6 = var8.bind(var12)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var10[var5];
            var5 = var8.bind(var12)(var5);
            var5 = var5.t;
            var5 = var5.dBISa2;
            var5 = var6.bind(var7)(var5);
            var2['text'] = var5;
            var2['platformIcon'] = var3;
            var1 = var2;
case 52:
            _fun0001_ip = 53; continue _fun0001;
case 32:
            var2 = {};
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 2;
            var7 = var10[var5];
            var7 = var6.bind(var12)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var5 = var10[var5];
            var5 = var6.bind(var12)(var5);
            var5 = var5.t;
            var6 = var5.b+lA5+;
            var5 = {};
            var10 = var9.name;
            var5['name'] = var10;
            var5 = var7.bind(var8)(var6, var5);
            var2['text'] = var5;
            var2['platformIcon'] = var3;
            var1 = var2;
case 53:
            _fun0001_ip = 54; continue _fun0001;
case 28:
            var2 = {};
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 2;
            var7 = var10[var5];
            var7 = var6.bind(var12)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var5 = var10[var5];
            var5 = var6.bind(var12)(var5);
            var5 = var5.t;
            var6 = var5.pW3Ip6;
            var5 = {};
            var9 = var9.name;
            var5['name'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var2['text'] = var5;
            var1 = var2;
case 54:
            _fun0001_ip = 55; continue _fun0001;
case 26:
            var2 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 2;
            var6 = var9[var5];
            var6 = var8.bind(var12)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var12)(var5);
            var5 = var5.t;
            var5 = var5.Jpkr/v;
            var5 = var6.bind(var7)(var5);
            var2['text'] = var5;
            var2['platformIcon'] = var3;
            var1 = var2;
case 55:
            _fun0001_ip = 56; continue _fun0001;
case 24:
            var2 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 2;
            var6 = var9[var5];
            var6 = var8.bind(var12)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var12)(var5);
            var5 = var5.t;
            var5 = var5.BMTj29;
            var5 = var6.bind(var7)(var5);
            var2['text'] = var5;
            var2['platformIcon'] = var3;
            var1 = var2;
case 56:
            _fun0001_ip = 57; continue _fun0001;
case 23:
            var2 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 2;
            var5 = var14[var9];
            var5 = var13.bind(var12)(var5);
            var8 = var5.intl;
            var7 = var8.formatToPlainString;
            var5 = var14[var9];
            var5 = var13.bind(var12)(var5);
            var5 = var5.t;
            var6 = var5.4CQq9f;
            var5 = {};
            var10 = var14[var9];
            var10 = var13.bind(var12)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var14[var9];
            var9 = var13.bind(var12)(var9);
            var9 = var9.t;
            var9 = var9.aS6cKy;
            var9 = var10.bind(var11)(var9);
            var5['name'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var2['text'] = var5;
            var2['platformIcon'] = var3;
            var1 = var2;
case 57:
            _fun0001_ip = 58; continue _fun0001;
case 18:
            var2 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 2;
            var5 = var14[var9];
            var5 = var13.bind(var12)(var5);
            var8 = var5.intl;
            var7 = var8.formatToPlainString;
            var5 = var14[var9];
            var5 = var13.bind(var12)(var5);
            var5 = var5.t;
            var6 = var5.4CQq9f;
            var5 = {};
            var10 = var14[var9];
            var10 = var13.bind(var12)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var14[var9];
            var9 = var13.bind(var12)(var9);
            var9 = var9.t;
            var9 = var9.q4pBGx;
            var9 = var10.bind(var11)(var9);
            var5['name'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var2['text'] = var5;
            var2['platformIcon'] = var3;
            var1 = var2;
case 58:
            _fun0001_ip = 59; continue _fun0001;
case 13:
            var2 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 2;
            var5 = var14[var9];
            var5 = var13.bind(var12)(var5);
            var8 = var5.intl;
            var7 = var8.formatToPlainString;
            var5 = var14[var9];
            var5 = var13.bind(var12)(var5);
            var5 = var5.t;
            var6 = var5.Sq9xJy;
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
            var5['game'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var2['text'] = var5;
            var2['platformIcon'] = var3;
            var1 = var2;
case 59:
            _fun0001_ip = 60; continue _fun0001;
case 8:
            var2 = {};
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 2;
            var4 = var13[var8];
            var4 = var11.bind(var12)(var4);
            var7 = var4.intl;
            var6 = var7.formatToPlainString;
            var4 = var13[var8];
            var4 = var11.bind(var12)(var4);
            var4 = var4.t;
            var5 = var4.Sq9xJy;
            var4 = {};
            var9 = var13[var8];
            var9 = var11.bind(var12)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var13[var8];
            var8 = var11.bind(var12)(var8);
            var8 = var8.t;
            var8 = var8.Nfvo7+;
            var8 = var9.bind(var10)(var8);
            var4['game'] = var8;
            var4 = var6.bind(var7)(var5, var4);
            var2['text'] = var4;
            var2['platformIcon'] = var3;
            var1 = var2;
case 60:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
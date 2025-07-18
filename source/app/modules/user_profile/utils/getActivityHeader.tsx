// app/modules/user_profile/utils/getActivityHeader.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
 0:
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
            if(var5) { _fun0001_ip = 49; continue _fun0001 }
 44:
            var3 = var1.icon;
 49:
            var6 = var9.type;
            var5 = _closure1_slot3;
            var5 = var5.PLAYING;
            if(!(var6 === var5)) { _fun0001_ip = 99; continue _fun0001 }
 68:
            var5 = var2 == var1;
            var6 = undefined;
            if(var5) { _fun0001_ip = 82; continue _fun0001 }
 77:
            var6 = var1.type;
 82:
            var5 = _closure1_slot4;
            var5 = var5.XBOX;
            if(!(var6 !== var5)) { _fun0001_ip = 1564; continue _fun0001 }
 99:
            var6 = var9.type;
            var5 = _closure1_slot3;
            var5 = var5.PLAYING;
            if(!(var6 === var5)) { _fun0001_ip = 149; continue _fun0001 }
 118:
            var5 = var2 == var1;
            var6 = undefined;
            if(var5) { _fun0001_ip = 132; continue _fun0001 }
 127:
            var6 = var1.type;
 132:
            var5 = _closure1_slot4;
            var5 = var5.PLAYSTATION;
            if(!(var6 !== var5)) { _fun0001_ip = 1441; continue _fun0001 }
 149:
            var6 = var9.type;
            var5 = _closure1_slot3;
            var5 = var5.STREAMING;
            if(!(var6 === var5)) { _fun0001_ip = 199; continue _fun0001 }
 168:
            var5 = var2 == var1;
            var6 = undefined;
            if(var5) { _fun0001_ip = 182; continue _fun0001 }
 177:
            var6 = var1.type;
 182:
            var5 = _closure1_slot4;
            var5 = var5.TWITCH;
            if(!(var6 !== var5)) { _fun0001_ip = 1317; continue _fun0001 }
 199:
            var6 = var9.type;
            var5 = _closure1_slot3;
            var5 = var5.STREAMING;
            if(!(var6 === var5)) { _fun0001_ip = 249; continue _fun0001 }
 218:
            var6 = var2 == var1;
            var5 = undefined;
            if(var6) { _fun0001_ip = 232; continue _fun0001 }
 227:
            var5 = var1.type;
 232:
            var1 = _closure1_slot4;
            var1 = var1.YOUTUBE;
            if(!(var5 !== var1)) { _fun0001_ip = 1193; continue _fun0001 }
 249:
            var5 = var9.type;
            var1 = _closure1_slot3;
            var1 = var1.PLAYING;
            if(!(var5 !== var1)) { _fun0001_ip = 1122; continue _fun0001 }
 271:
            var5 = var9.type;
            var1 = _closure1_slot3;
            var1 = var1.STREAMING;
            if(!(var5 !== var1)) { _fun0001_ip = 1051; continue _fun0001 }
 293:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var5 = var5.bind(var12)(var1);
            var1 = var5.isStageActivity;
            var1 = var1.bind(var5)(var9);
            if(var1) { _fun0001_ip = 973; continue _fun0001 }
 330:
            var5 = var9.type;
            var1 = _closure1_slot3;
            var1 = var1.LISTENING;
            if(!(var5 === var1)) { _fun0001_ip = 362; continue _fun0001 }
 349:
            var1 = var9.details;
            if(!(var2 == var1)) { _fun0001_ip = 888; continue _fun0001 }
 362:
            var5 = var9.type;
            var1 = _closure1_slot3;
            var1 = var1.LISTENING;
            if(!(var5 !== var1)) { _fun0001_ip = 815; continue _fun0001 }
 384:
            var5 = var9.type;
            var1 = _closure1_slot3;
            var1 = var1.WATCHING;
            if(!(var5 === var1)) { _fun0001_ip = 416; continue _fun0001 }
 403:
            var1 = var9.details;
            if(!(var2 == var1)) { _fun0001_ip = 730; continue _fun0001 }
 416:
            var5 = var9.type;
            var1 = _closure1_slot3;
            var1 = var1.WATCHING;
            if(!(var5 !== var1)) { _fun0001_ip = 657; continue _fun0001 }
 438:
            var5 = var9.type;
            var1 = _closure1_slot3;
            var1 = var1.COMPETING;
            if(!(var5 === var1)) { _fun0001_ip = 467; continue _fun0001 }
 457:
            var1 = var9.details;
            if(!(var2 == var1)) { _fun0001_ip = 572; continue _fun0001 }
 467:
            var2 = var9.type;
            var1 = _closure1_slot3;
            var1 = var1.COMPETING;
            if(!(var2 !== var1)) { _fun0001_ip = 499; continue _fun0001 }
 486:
            var1 = {};
            var1['text'] = var12;
            var1['platformIcon'] = var3;
            _fun0001_ip = 570; continue _fun0001;
 499:
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
 570:
            _fun0001_ip = 655; continue _fun0001;
 572:
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
 655:
            _fun0001_ip = 728; continue _fun0001;
 657:
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
 728:
            _fun0001_ip = 813; continue _fun0001;
 730:
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
 813:
            _fun0001_ip = 886; continue _fun0001;
 815:
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
 886:
            _fun0001_ip = 971; continue _fun0001;
 888:
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
 971:
            _fun0001_ip = 1049; continue _fun0001;
 973:
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
 1049:
            _fun0001_ip = 1120; continue _fun0001;
 1051:
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
 1120:
            _fun0001_ip = 1191; continue _fun0001;
 1122:
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
 1191:
            _fun0001_ip = 1315; continue _fun0001;
 1193:
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
 1315:
            _fun0001_ip = 1439; continue _fun0001;
 1317:
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
 1439:
            _fun0001_ip = 1562; continue _fun0001;
 1441:
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
 1562:
            _fun0001_ip = 1685; continue _fun0001;
 1564:
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
 1685:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
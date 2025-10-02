// app/modules/messages/getHeaderTextForInvite.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/getHeaderTextForInvite.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getHeaderTextForInvite(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var9 = var4.isVoiceChannel;
            var1 = var4.isHubGuild;
            var2 = var4.isOwnInvite;
            var3 = var4.isGuest;
            var7 = var4.isStage;
            var8 = var4.isStream;
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var4 = 0;
            var5 = var12[var4];
            var10 = undefined;
            var5 = var11.bind(var10)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var12[var4];
            var4 = var11.bind(var10)(var4);
            var4 = var4.t;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var4.BoQUFR;
            var1 = var5.bind(var6)(var1);
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var9 = var4.oU/lsr;
            var1 = var5.bind(var6)(var9);
case 8:
            _fun0001_ip = 9; continue _fun0001;
case 4:
            if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = var4.sigPER;
            var9 = var5.bind(var6)(var9);
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var10 = var4.UxmnHx;
            var9 = var5.bind(var6)(var10);
case 12:
            var1 = var9;
case 9:
            _fun0001_ip = 13; continue _fun0001;
case 2:
            if(var2) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            if(var8) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            if(var7) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            if(var3) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var2 = var4.H39rER;
            var2 = var5.bind(var6)(var2);
            _fun0001_ip = 22; continue _fun0001;
case 20:
            var9 = var4.f4gmra;
            var2 = var5.bind(var6)(var9);
case 22:
            _fun0001_ip = 23; continue _fun0001;
case 18:
            var9 = var4.FdPNr6;
            var2 = var5.bind(var6)(var9);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 16:
            var9 = var4.Mnvc3N;
            var2 = var5.bind(var6)(var9);
case 24:
            _fun0001_ip = 25; continue _fun0001;
case 14:
            if(var8) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            if(var7) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            if(var3) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var3 = var4.lxTgPz;
            var3 = var5.bind(var6)(var3);
            _fun0001_ip = 32; continue _fun0001;
case 30:
            var7 = var4.mJyBio;
            var3 = var5.bind(var6)(var7);
case 32:
            _fun0001_ip = 33; continue _fun0001;
case 28:
            var7 = var4.TJQcNj;
            var3 = var5.bind(var6)(var7);
case 33:
            _fun0001_ip = 34; continue _fun0001;
case 26:
            var4 = var4.N85DCg;
            var3 = var5.bind(var6)(var4);
case 34:
            var2 = var3;
case 25:
            var1 = var2;
case 13:
            return var1;
        }
    };
    var3['getHeaderTextForInvite'] = var2;
    return var1;
})();
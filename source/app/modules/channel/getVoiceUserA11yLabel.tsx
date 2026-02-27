// app/modules/channel/getVoiceUserA11yLabel.tsx
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
    var4 = 'modules/channel/getVoiceUserA11yLabel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getVoiceUserA11yProps(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.userName;
            var10 = var1.serverMute;
            var9 = var1.localMute;
            var4 = var1.selfMute;
            var7 = var1.serverDeaf;
            var3 = var1.selfDeaf;
            var5 = new Array(0);
            var1 = var10;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var4;
case 4:
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var5.push;
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var1 = 0;
            var6 = var13[var1];
            var11 = undefined;
            var6 = var12.bind(var11)(var6);
            var8 = var6.intl;
            var6 = var8.string;
            var1 = var13[var1];
            var1 = var12.bind(var11)(var1);
            var1 = var1.t;
            if(var10) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = var1.tjtv3P;
            var9 = var6.bind(var8)(var9);
            var9 = var4.bind(var5)(var9);
            _fun0001_ip = 6; continue _fun0001;
case 10:
            var9 = var1.Q8Uzof;
            var9 = var6.bind(var8)(var9);
            var9 = var4.bind(var5)(var9);
            _fun0001_ip = 6; continue _fun0001;
case 8:
            var1 = var1.uLddbQ;
            var1 = var6.bind(var8)(var1);
            var1 = var4.bind(var5)(var1);
case 6:
            var1 = var7;
            if(var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = var3;
case 12:
            if(!var1) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = var5.push;
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 0;
            var4 = var10[var1];
            var8 = undefined;
            var4 = var9.bind(var8)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var1 = var10[var1];
            var1 = var9.bind(var8)(var1);
            var1 = var1.t;
            if(var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var1.NjmiOL;
            var7 = var4.bind(var6)(var7);
            var7 = var3.bind(var5)(var7);
            _fun0001_ip = 14; continue _fun0001;
case 16:
            var1 = var1.btxSdB;
            var1 = var4.bind(var6)(var1);
            var1 = var3.bind(var5)(var1);
case 14:
            var1 = {};
            var1['label'] = var2;
            var3 = var5.length;
            var2 = 0;
            var3 = var3 > var2;
            var2 = undefined;
            if(!var3) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var4 = var5.join;
            var3 = ', ';
            var2 = var4.bind(var5)(var3);
case 18:
            var1['hint'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
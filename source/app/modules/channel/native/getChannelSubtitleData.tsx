// app/modules/channel/native/getChannelSubtitleData.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
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
    var4 = 'modules/channel/native/getChannelSubtitleData.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getChannelSubtitleData(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 188; continue _fun0001 }
 12:
            var4 = var3.type;
            var2 = 'embedded-activities';
            if(!(var2 !== var4)) { _fun0001_ip = 165; continue _fun0001 }
 30:
            var2 = 'event';
            if(!(var2 !== var4)) { _fun0001_ip = 165; continue _fun0001 }
 41:
            var2 = 'go-live';
            if(!(var2 !== var4)) { _fun0001_ip = 86; continue _fun0001 }
 51:
            var2 = 'voice';
            if(!(var2 !== var4)) { _fun0001_ip = 63; continue _fun0001 }
 59:
            var2 = undefined;
            return var2;
 63:
            var2 = {};
            var4 = var3.text;
            var2['subtitle'] = var4;
            var4 = var3.type;
            var2['type'] = var4;
            return var2;
 86:
            var2 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var4 = 0;
            var5 = var9[var4];
            var7 = undefined;
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.Pa817u;
            var4 = var5.bind(var6)(var4);
            var2['subtitle'] = var4;
            var4 = var3.type;
            var2['type'] = var4;
            return var2;
 165:
            var2 = {};
            var4 = var3.name;
            var2['subtitle'] = var4;
            var3 = var3.type;
            var2['type'] = var3;
            return var2;
 188:
            return var1;
        }
    };
    var3['getChannelSubtitleData'] = var2;
    return var1;
})();
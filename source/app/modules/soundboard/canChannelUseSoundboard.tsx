// app/modules/soundboard/canChannelUseSoundboard.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var4 = function canChannelUseSoundboard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 129; continue _fun0001 }
 9:
            var2 = _closure1_slot4;
            var5 = var2.CALLABLE;
            var3 = var5.has;
            var2 = var4.type;
            var2 = var3.bind(var5)(var2);
            if(var2) { _fun0001_ip = 125; continue _fun0001 }
 40:
            var5 = _closure1_slot1;
            var3 = var5.can;
            var2 = _closure1_slot5;
            var2 = var2.USE_SOUNDBOARD;
            var3 = var3.bind(var5)(var2, var4);
            var6 = _closure1_slot1;
            var5 = var6.can;
            var2 = _closure1_slot5;
            var2 = var2.SPEAK;
            var2 = var5.bind(var6)(var2, var4);
            var4 = var4.type;
            var1 = _closure1_slot3;
            var1 = var1.GUILD_VOICE;
            var1 = var4 === var1;
            if(!var1) { _fun0001_ip = 117; continue _fun0001 }
 114:
            var1 = var3;
 117:
            if(!var1) { _fun0001_ip = 123; continue _fun0001 }
 120:
            var1 = var2;
 123:
            return var1;
 125:
            var1 = true;
            return var1;
 129:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot0 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot1 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.ChannelTypes;
    var _closure1_slot3 = var8;
    var8 = var5.ChannelTypesSets;
    var _closure1_slot4 = var8;
    var5 = var5.Permissions;
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/soundboard/canChannelUseSoundboard.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function canSelectedVoiceChannelUseSoundboard() {
        var3 = _closure1_slot2;
        var2 = var3.getVoiceChannelId;
        var4 = var2.bind(var3)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot0;
        var1 = var2.getChannel;
        var2 = var1.bind(var2)(var4);
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['canSelectedVoiceChannelUseSoundboard'] = var2;
    return var1;
})();
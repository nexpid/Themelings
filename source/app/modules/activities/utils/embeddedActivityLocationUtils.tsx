// app/modules/activities/utils/embeddedActivityLocationUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = native7;
    var1 = 0;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/embeddedActivityLocationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getEmbeddedActivityLocationChannelId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 == var2)) { _fun0001_ip = 13; continue _fun0001 }
 9:
            var1 = undefined;
            return var1;
 13:
            var1 = 'channel_id';
            var3 = var1 in var2;
            var1 = undefined;
            if(!var3) { _fun0001_ip = 31; continue _fun0001 }
 26:
            var1 = var2.channel_id;
 31:
            return var1;
        }
    };
    var3['getEmbeddedActivityLocationChannelId'] = var4;
    var2 = function getEmbeddedActivityLocationGuildId(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 == var2)) { _fun0002_ip = 13; continue _fun0002 }
 9:
            var1 = undefined;
            return var1;
 13:
            var1 = 'guild_id';
            var3 = var1 in var2;
            var1 = undefined;
            if(!var3) { _fun0002_ip = 31; continue _fun0002 }
 26:
            var1 = var2.guild_id;
 31:
            return var1;
        }
    };
    var3['getEmbeddedActivityLocationGuildId'] = var2;
    return var1;
})();
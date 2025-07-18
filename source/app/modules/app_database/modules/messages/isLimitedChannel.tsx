// app/modules/app_database/modules/messages/isLimitedChannel.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var4 = function isLimitedChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var6 = _closure1_slot1;
            var5 = var6.getMemberCount;
            var1 = null;
            var7 = var1 == var4;
            var3 = undefined;
            if(var7) { _fun0001_ip = 32; continue _fun0001 }
 27:
            var3 = var4.guild_id;
 32:
            var5 = var5.bind(var6)(var3);
            var6 = var1 != var5;
            var3 = 0;
            if(!var6) { _fun0001_ip = 49; continue _fun0001 }
 46:
            var3 = var5;
 49:
            var1 = var1 != var4;
            if(!var1) { _fun0001_ip = 75; continue _fun0001 }
 56:
            var6 = var4.type;
            var5 = _closure1_slot2;
            var5 = var5.DM;
            var1 = var6 !== var5;
 75:
            if(!var1) { _fun0001_ip = 97; continue _fun0001 }
 78:
            var4 = var4.type;
            var2 = _closure1_slot2;
            var2 = var2.GROUP_DM;
            var1 = var4 !== var2;
 97:
            if(!var1) { _fun0001_ip = 110; continue _fun0001 }
 100:
            var2 = 10000;
            var1 = var3 >= var2;
 110:
            return var1;
        }
    };
    var _closure1_slot3 = var4;
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
    var5 = var6.bind(var1)(var5);
    var5 = var5.ChannelTypes;
    var _closure1_slot2 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/app_database/modules/messages/isLimitedChannel.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = 10000;
    var3['LIMITED_GUILD_MEMBER_THRESHOLD'] = var5;
    var3['isLimitedChannel'] = var4;
    var2 = function isLimitedChannelId(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot3;
            var4 = _closure1_slot0;
            var2 = var4.getBasicChannel;
            var1 = null;
            var6 = var1 != var5;
            var1 = '_';
            if(!var6) { _fun0002_ip = 36; continue _fun0002 }
 33:
            var1 = var5;
 36:
            var2 = var2.bind(var4)(var1);
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['isLimitedChannelId'] = var2;
    return var1;
})();
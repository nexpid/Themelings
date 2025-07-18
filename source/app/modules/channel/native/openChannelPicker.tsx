// app/modules/channel/native/openChannelPicker.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/native/openChannelPicker.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function openChannelPicker(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var7 = var5.selectedChannel;
            var12 = var5.guildId;
            var6 = var5.channelType;
            var11 = var5.filterFn;
            var1 = undefined;
            if(!(var11 === var1)) { _fun0001_ip = 41; continue _fun0001 }
 34:
            var11 = function h() {
                var1 = true;
                return var1;
            };
 41:
            var13 = var5.onClose;
            var3 = {'selectedChannel': 0, 'guildId': 0, 'channelType': 0, 'filterFn': 0, 'onClose': 0};
            var4 = null;
            var21 = var3;
            var20 = null;
            var2 = silentSetPrototypeOf(var21, var20);
            var21 = {};
            var20 = var5;
            var19 = var3;
            var2 = copyDataProperties(var21, var20, var19);
            var9 = _closure1_slot4;
            var5 = var9.getGuild;
            var9 = var5.bind(var9)(var12);
            var10 = _closure1_slot3;
            var5 = var10.getChannels;
            var5 = var5.bind(var10)(var12);
            var10 = var5[var6];
            if(!(var4 == var10)) { _fun0001_ip = 128; continue _fun0001 }
 124:
            var10 = new Array(0);
 128:
            var5 = _closure1_slot1;
            var18 = _closure1_slot2;
            var4 = 2;
            var4 = var18[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.openLazy;
            var17 = _closure1_slot0;
            var3 = 4;
            var3 = var18[var3];
            var12 = var17.bind(var1)(var3);
            var3 = 3;
            var4 = var18[var3];
            var3 = var18.paths;
            var4 = var12.bind(var1)(var4, var3);
            var3 = {};
            var12 = {};
            var14 = 5;
            var15 = var18[var14];
            var15 = var17.bind(var1)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var1)(var14);
            var14 = var14.t;
            var14 = var14.r2pts7;
            var14 = var15.bind(var16)(var14);
            var12['title'] = var14;
            var12['onClose'] = var13;
            var3['header'] = var12;
            var3['guild'] = var9;
            var9 = var10.filter;
            var10 = var9.bind(var10)(var11);
            var9 = var10.map;
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel;
                return var1;
            };
            var8 = var9.bind(var10)(var8);
            var3['channels'] = var8;
            var3['selectedChannel'] = var7;
            var21 = var3;
            var20 = var2;
            var2 = copyDataProperties(var21, var20);
            var2 = 'ChannelPicker';
            var2 = var5.bind(var6)(var4, var2, var3);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
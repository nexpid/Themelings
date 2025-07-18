// app/modules/guild_sidebar/native/ChannelBadge.tsx
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
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {};
        var3 = 4;
        var2['paddingStart'] = var3;
        var1['channelInfoContainer'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/native/ChannelBadge.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelBadge(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var9 = var2.mentionCount;
            var8 = var2.isMentionLowImportance;
            var1 = var2.isNewChannel;
            var15 = var2.postsWithUnreadsCount;
            var2 = var2.muted;
            var3 = _closure1_slot6;
            var5 = undefined;
            var7 = var3.bind(var5)();
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 5;
            var3 = var10[var3];
            var11 = var4.bind(var5)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = _closure1_slot4;
                var1 = var1.locale;
                return var1;
            };
            var14 = var10.bind(var11)(var4, var3);
            var3 = null;
            if(!(var3 != var9)) { _fun0001_ip = 113; continue _fun0001 }
 104:
            var4 = 0;
            if(!(!(var9 > var4))) { _fun0001_ip = 324; continue _fun0001 }
 113:
            if(var1) { _fun0001_ip = 264; continue _fun0001 }
 119:
            var4 = var3 != var2;
            var1 = null;
            if(!var4) { _fun0001_ip = 262; continue _fun0001 }
 131:
            var1 = null;
            if(var2) { _fun0001_ip = 262; continue _fun0001 }
 139:
            var2 = var3 != var15;
            var1 = null;
            if(!var2) { _fun0001_ip = 262; continue _fun0001 }
 148:
            var2 = 0;
            var2 = var15 > var2;
            var1 = null;
            if(!var2) { _fun0001_ip = 262; continue _fun0001 }
 159:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var10 = var7.channelInfoContainer;
            var2['style'] = var10;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 8;
            var10 = var16[var10];
            var10 = var13.bind(var5)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-xs/semibold', 'color': 'text-muted'};
            var12 = 9;
            var12 = var16[var12];
            var13 = var13.bind(var5)(var12);
            var12 = var13.humanizeValue;
            var12 = var12.bind(var13)(var15, var14);
            var10['children'] = var12;
            var10 = var4.bind(var5)(var11, var10);
            var2['children'] = var10;
            var1 = var4.bind(var5)(var3, var2);
 262:
            _fun0001_ip = 322; continue _fun0001;
 264:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var10 = var7.channelInfoContainer;
            var2['style'] = var10;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 7;
            var10 = var12[var10];
            var11 = var11.bind(var5)(var10);
            var10 = {};
            var10 = var4.bind(var5)(var11, var10);
            var2['children'] = var10;
            var1 = var4.bind(var5)(var3, var2);
 322:
            _fun0001_ip = 392; continue _fun0001;
 324:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var7 = var7.channelInfoContainer;
            var2['style'] = var7;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 6;
            var6 = var10[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['mentionsCount'] = var9;
            var6['isMentionLowImportance'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 392:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();